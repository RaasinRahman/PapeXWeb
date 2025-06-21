'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Plus, Upload, X, Bold, Type, Link, Italic } from "lucide-react"
import { blogService, CreateBlogPost } from '@/lib/blogService'
import { useAdminAuth } from '@/hooks/useAdmin'

interface CreateBlogModalProps {
  onBlogCreated?: () => void
}

export function CreateBlogModal({ onBlogCreated }: CreateBlogModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null)
  
  const { isAdmin } = useAdminAuth()
  
  const [formData, setFormData] = useState<CreateBlogPost>({
    title: '',
    excerpt: '',
    content: '',
    readTime: '5 min read',
    published: true
  })

  const handleInputChange = (field: keyof CreateBlogPost, value: string | boolean | File) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleInputChange('image', file)
      
      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: undefined }))
    setImagePreview(null)
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

    console.log('Form submitted with data:', formData)

    try {
      console.log('Calling blogService.createBlog...')
      
      // Convert markdown content to HTML before saving
      const htmlContent = convertMarkdownToHTML(formData.content)
      const blogDataWithHTML = { ...formData, content: htmlContent }
      
      const blogId = await blogService.createBlog(blogDataWithHTML)
      console.log('Blog created with ID:', blogId)
      
      // Reset form
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        readTime: '5 min read',
        published: true
      })
      setImagePreview(null)
      setIsOpen(false)
      
      // Notify parent component
      onBlogCreated?.()
      
    } catch (error) {
      console.error('Error in handleSubmit:', error)
      let errorMessage = 'Failed to create blog post'
      if (error instanceof Error) {
        errorMessage = error.message
      }
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAdmin) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg gradient-accent hover:shadow-2xl z-50 transform hover:scale-110 transition-all duration-300"
          size="icon"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
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
              {imagePreview && (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded-lg border"
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
                </div>
              )}
              <div className="flex items-center gap-4">
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <Label
                  htmlFor="image"
                  className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-input rounded-md hover:bg-accent hover:text-accent-foreground"
                >
                  <Upload className="h-4 w-4" />
                  {imagePreview ? 'Change Image' : 'Upload Image'}
                </Label>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) => handleInputChange('published', checked)}
            />
            <Label htmlFor="published">Publish immediately</Label>
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? 'Creating...' : 'Create Blog Post'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 