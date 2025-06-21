'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { blogService, BlogPost, CreateBlogPost } from '@/lib/blogService'
import { X, Bold, Italic, Type, Link, Crop as CropIcon } from 'lucide-react'
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

interface EditBlogModalProps {
  isOpen: boolean
  onClose: () => void
  onBlogUpdated?: () => void
  blog: BlogPost
}

export function EditBlogModal({ isOpen, onClose, onBlogUpdated, blog }: EditBlogModalProps) {
  const [formData, setFormData] = useState<CreateBlogPost>({
    title: '',
    excerpt: '',
    content: '',
    readTime: '5 min read',
    published: true
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null)
  const [showCrop, setShowCrop] = useState(false)
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const imgRef = useRef<HTMLImageElement>(null)
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null)

  // Initialize form data when blog prop changes
  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        readTime: blog.readTime,
        published: blog.published
      })
      // Set existing image as preview
      if (blog.image) {
        setCroppedImageUrl(blog.image)
      }
    }
  }, [blog])

  const handleInputChange = (field: keyof CreateBlogPost, value: string | boolean | File) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result as string)
        setShowCrop(true)
        setCroppedImageUrl(null)
      }
      reader.readAsDataURL(file)
      handleInputChange('image', file)
    }
  }

  const removeImage = () => {
    setImagePreview(null)
    setCroppedImageUrl(null)
    setShowCrop(false)
    setCrop(undefined)
    setCompletedCrop(undefined)
    // Keep the existing image from the original blog post
    if (blog.image) {
      setCroppedImageUrl(blog.image)
    }
  }

  const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget
    
    // Calculate crop area to match blog card dimensions (740x320px = 2.3125:1 aspect ratio)
    const targetWidth = 740
    const targetHeight = 320
    const aspectRatio = targetWidth / targetHeight
    
    let cropWidth, cropHeight, cropX, cropY
    
    if (width / height > aspectRatio) {
      // Image is wider than target aspect ratio
      cropHeight = height
      cropWidth = height * aspectRatio
      cropX = (width - cropWidth) / 2
      cropY = 0
    } else {
      // Image is taller than target aspect ratio
      cropWidth = width
      cropHeight = width / aspectRatio
      cropX = 0
      cropY = (height - cropHeight) / 2
    }
    
    setCrop({
      unit: 'px',
      width: cropWidth,
      height: cropHeight,
      x: cropX,
      y: cropY
    })
    
    // Also set completed crop immediately
    setCompletedCrop({
      unit: 'px',
      width: cropWidth,
      height: cropHeight,
      x: cropX,
      y: cropY
    })
  }, [])

  const getCroppedImg = useCallback((image: HTMLImageElement, crop: PixelCrop): Promise<string> => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    if (!ctx) {
      throw new Error('No 2d context')
    }

    // Set canvas size to blog card dimensions (740x320)
    canvas.width = 740
    canvas.height = 320

    // Calculate scale factors between natural image size and displayed size
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height

    // Scale crop coordinates to natural image dimensions
    const scaledCrop = {
      x: crop.x * scaleX,
      y: crop.y * scaleY,
      width: crop.width * scaleX,
      height: crop.height * scaleY
    }

    ctx.drawImage(
      image,
      scaledCrop.x,
      scaledCrop.y,
      scaledCrop.width,
      scaledCrop.height,
      0,
      0,
      740,
      320
    )

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          throw new Error('Canvas is empty')
        }
        const url = URL.createObjectURL(blob)
        resolve(url)
      }, 'image/jpeg', 0.9)
    })
  }, [])

  const handleCropComplete = useCallback(async () => {
    if (completedCrop && imgRef.current) {
      try {
        const croppedImageUrl = await getCroppedImg(imgRef.current, completedCrop)
        setCroppedImageUrl(croppedImageUrl)
        setShowCrop(false)
      } catch (error) {
        console.error('Error cropping image:', error)
        setError('Failed to crop image')
      }
    }
  }, [completedCrop, getCroppedImg])

  const handleCropCancel = () => {
    setShowCrop(false)
    setCrop(undefined)
    setCompletedCrop(undefined)
  }

  // Rich text formatting functions
  const insertTextAtCursor = (before: string, after: string = '') => {
    const textarea = contentTextareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = formData.content.substring(start, end)
    const newText = formData.content.substring(0, start) + before + selectedText + after + formData.content.substring(end)
    
    setFormData(prev => ({ ...prev, content: newText }))
    
    // Set cursor position after the inserted text
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
    }, 0)
  }

  const formatHeader = (level: number) => {
    const headerPrefix = '#'.repeat(level) + ' '
    insertTextAtCursor(headerPrefix, '\n')
  }

  const formatBold = () => {
    insertTextAtCursor('**', '**')
  }

  const formatItalic = () => {
    insertTextAtCursor('*', '*')
  }

  const insertLink = () => {
    const url = prompt('Enter the URL:\n• For external sites: www.apple.com, https://google.com\n• For internal pages: /about, /contact, /waitlist')
    if (url) {
      const linkText = prompt('Enter the link text:') || url
      insertTextAtCursor(`[${linkText}](${url})`)
    }
  }

  // Convert markdown to HTML for blog display
  const convertMarkdownToHTML = (markdown: string): string => {
    return markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Smart Links - automatically detect external vs internal
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
        // Check if it's an external URL
        const isExternal = url.startsWith('http://') || 
                          url.startsWith('https://') || 
                          url.startsWith('www.') || 
                          url.includes('.')
        
        if (isExternal) {
          // Add https:// if it starts with www.
          const fullUrl = url.startsWith('www.') ? `https://${url}` : url
          return `<a href="${fullUrl}" target="_blank" rel="noopener noreferrer">${linkText}</a>`
        } else {
          // Internal link (stays on same site)
          return `<a href="${url}">${linkText}</a>`
        }
      })
      // Line breaks
      .replace(/\n/g, '<br>')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Convert markdown content to HTML before saving
      const htmlContent = convertMarkdownToHTML(formData.content)
      let blogDataWithHTML = { ...formData, content: htmlContent }
      
      // If we have a crop in progress but haven't applied it yet, apply it automatically
      if (showCrop && completedCrop && imgRef.current && !croppedImageUrl) {
        try {
          const autoCroppedImageUrl = await getCroppedImg(imgRef.current, completedCrop)
          setCroppedImageUrl(autoCroppedImageUrl)
          setShowCrop(false)
          
          // Convert the auto-cropped image to base64
          const response = await fetch(autoCroppedImageUrl)
          const blob = await response.blob()
          const reader = new FileReader()
          const base64Promise = new Promise<string>((resolve) => {
            reader.onload = () => resolve(reader.result as string)
            reader.readAsDataURL(blob)
          })
          const base64Data = await base64Promise
          blogDataWithHTML = { ...blogDataWithHTML, image: base64Data }
        } catch (error) {
          console.error('Error auto-applying crop:', error)
          setError('Failed to process image crop')
          setIsLoading(false)
          return
        }
      }
      // If we have a cropped image, convert it to base64 and use that instead
      else if (croppedImageUrl && croppedImageUrl !== blog.image) {
        try {
          const response = await fetch(croppedImageUrl)
          const blob = await response.blob()
          const reader = new FileReader()
          const base64Promise = new Promise<string>((resolve) => {
            reader.onload = () => resolve(reader.result as string)
            reader.readAsDataURL(blob)
          })
          const base64Data = await base64Promise
          blogDataWithHTML = { ...blogDataWithHTML, image: base64Data }
        } catch (error) {
          console.error('Error converting cropped image:', error)
          setError('Failed to process cropped image')
          setIsLoading(false)
          return
        }
      }
      // If using existing image, don't include image in update
      else if (croppedImageUrl === blog.image) {
        delete blogDataWithHTML.image
      }
      
      await blogService.updateBlog(blog.id, blogDataWithHTML)
      
      // Reset and close
      setImagePreview(null)
      setCroppedImageUrl(null)
      setShowCrop(false)
      onClose()
      
      // Notify parent component
      onBlogUpdated?.()
      
    } catch (error) {
      console.error('Error updating blog:', error)
      let errorMessage = 'Failed to update blog post'
      if (error instanceof Error) {
        errorMessage = error.message
      }
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Blog Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Enter blog title..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt *</Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => handleInputChange('excerpt', e.target.value)}
              placeholder="Brief description of the blog post..."
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content *</Label>
            
            {/* Rich Text Toolbar */}
            <div className="flex flex-wrap gap-2 p-2 border border-input rounded-md bg-muted/50">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => formatHeader(2)}
                className="h-8"
                title="Header 2"
              >
                <Type className="h-4 w-4 mr-1" />
                H2
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => formatHeader(3)}
                className="h-8"
                title="Header 3"
              >
                <Type className="h-4 w-4 mr-1" />
                H3
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={formatBold}
                className="h-8"
                title="Bold"
              >
                <Bold className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={formatItalic}
                className="h-8"
                title="Italic"
              >
                <Italic className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={insertLink}
                className="h-8"
                title="Insert Link"
              >
                <Link className="h-4 w-4" />
              </Button>
            </div>
            
            <Textarea
              ref={contentTextareaRef}
              id="content"
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              placeholder="Write your blog content here using the toolbar above for formatting..."
              rows={10}
              required
              className="font-mono text-sm"
            />
            
            {/* Formatting Help */}
            <div className="text-xs text-muted-foreground p-2 bg-muted/30 rounded">
              <p><strong>Formatting Tips:</strong></p>
              <p>• Use the toolbar buttons above or type manually:</p>
              <p>• <code>## Header 2</code> for large headers</p>
              <p>• <code>### Header 3</code> for medium headers</p>
              <p>• <code>**bold text**</code> for bold formatting</p>
              <p>• <code>*italic text*</code> for italic formatting</p>
              <p>• <strong>Links (automatic detection):</strong></p>
              <p>• <code>[Apple](www.apple.com)</code> → external link (new tab)</p>
              <p>• <code>[Contact](/contact)</code> → internal link (same site)</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="readTime">Read Time</Label>
            <Input
              id="readTime"
              value={formData.readTime}
              onChange={(e) => handleInputChange('readTime', e.target.value)}
              placeholder="e.g., 5 min read"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Featured Image</Label>
            <div className="space-y-4">
              {showCrop && imagePreview && (
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <p>Position the crop area to select what will show on blog cards (740×320px):</p>
                    <p className="text-xs text-muted-foreground mt-1">Drag the crop area to reposition. The size is fixed to match blog card dimensions.</p>
                  </div>
                  <div className="relative">
                    <ReactCrop
                      crop={crop}
                      onChange={(c) => setCrop(c)}
                      onComplete={(c) => setCompletedCrop(c)}
                      aspect={740/320}
                      disabled={false}
                      locked={false}
                      ruleOfThirds={true}
                      className="blog-crop-area"
                    >
                      <img
                        ref={imgRef}
                        src={imagePreview}
                        alt="Crop preview"
                        onLoad={onImageLoad}
                        className="max-h-96 w-full object-contain"
                      />
                    </ReactCrop>
                  </div>
                  <style jsx>{`
                    :global(.blog-crop-area .ReactCrop__crop-selection) {
                      border: 2px solid #ff9933 !important;
                      box-shadow: 0 0 0 2px rgba(255, 153, 51, 0.3) !important;
                    }
                    :global(.blog-crop-area .ReactCrop__drag-handle) {
                      display: none !important;
                    }
                    :global(.blog-crop-area .ReactCrop__crop-selection::after) {
                      content: 'Blog Card Preview (740×320)';
                      position: absolute;
                      top: -30px;
                      left: 0;
                      background: #ff9933;
                      color: white;
                      padding: 4px 8px;
                      border-radius: 4px;
                      font-size: 12px;
                      font-weight: 500;
                      white-space: nowrap;
                    }
                  `}</style>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      onClick={handleCropComplete}
                      disabled={!completedCrop}
                      className="flex items-center gap-2"
                    >
                      <CropIcon className="h-4 w-4" />
                      Apply Crop
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCropCancel}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
              
              {croppedImageUrl && (
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <p>Preview (as it will appear on blog cards):</p>
                  </div>
                  <div className="relative inline-block">
                    <img
                      src={croppedImageUrl}
                      alt="Cropped preview"
                      className="w-96 h-40 object-contain rounded-lg border shadow-sm bg-gray-50"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={removeImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="absolute bottom-2 right-2"
                      onClick={() => setShowCrop(true)}
                    >
                      <CropIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {!imagePreview && (
                <div className="flex items-center gap-4">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#0a3d62] file:text-white hover:file:bg-[#ff9933] transition-colors"
                  />
                  <span className="text-sm text-muted-foreground">
                    Upload a new image or keep the existing one
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) => handleInputChange('published', checked)}
            />
            <Label htmlFor="published">Published</Label>
          </div>

          {error && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 gradient-accent text-white"
            >
              {isLoading ? 'Updating...' : 'Update Post'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 