import { db, storage } from '@/firebase/firebaseConfig'
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp, doc, updateDoc, getDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  slug: string
  readTime: string
  createdAt: any
  published: boolean
}

export interface CreateBlogPost {
  title: string
  excerpt: string
  content: string
  image?: File | string
  readTime: string
  published: boolean
}

const COLLECTION_NAME = 'blogs'

// Helper function to convert image to base64
const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export const blogService = {
  async createBlog(blogData: CreateBlogPost): Promise<string> {
    try {
      console.log('Starting blog creation...', blogData.title)
      let imageUrl = ''
      
      // Upload image if provided
      if (blogData.image) {
        // Check if image is already a base64 string (from cropping)
        if (typeof blogData.image === 'string') {
          console.log('Using provided base64 image data')
          imageUrl = blogData.image
        } else {
          console.log('Uploading image...', blogData.image.name)
          
          // Skip Firebase Storage and use base64 directly for development
          // This avoids CORS issues in localhost
          try {
            console.log('Converting image to base64 (skipping Firebase Storage due to CORS)...')
            const base64 = await convertImageToBase64(blogData.image)
            imageUrl = base64
            console.log('Base64 conversion successful, length:', base64.length)
          } catch (base64Error) {
            console.error('Base64 conversion failed, using default:', base64Error)
            imageUrl = '/blog/blog_image.png'
          }
        }
        
        /* Firebase Storage version (enable when CORS is fixed):
        try {
          console.log('Uploading to Firebase Storage...')
          const timestamp = Date.now()
          const imageRef = ref(storage, `blog-images/${timestamp}-${blogData.image.name}`)
          const snapshot = await uploadBytes(imageRef, blogData.image)
          imageUrl = await getDownloadURL(snapshot.ref)
          console.log('Firebase Storage upload successful:', imageUrl)
        } catch (storageError) {
          console.error('Firebase Storage failed, trying base64:', storageError)
          try {
            const base64 = await convertImageToBase64(blogData.image)
            imageUrl = base64
            console.log('Base64 fallback successful')
          } catch (base64Error) {
            console.error('All upload methods failed:', base64Error)
            imageUrl = '/blog/blog_image.png'
          }
        }
        */
      } else {
        // Use default image when no image is provided
        imageUrl = '/blog/blog_image.png'
      }

      // Generate slug from title
      const slug = blogData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      console.log('Generated slug:', slug)

      const blogDoc = {
        title: blogData.title,
        excerpt: blogData.excerpt,
        content: blogData.content,
        image: imageUrl,
        slug,
        readTime: blogData.readTime,
        published: blogData.published,
        createdAt: serverTimestamp()
      }

      console.log('Creating document in Firestore...', blogDoc)
      const docRef = await addDoc(collection(db, COLLECTION_NAME), blogDoc)
      console.log('Blog created successfully with ID:', docRef.id)

      return docRef.id
    } catch (error) {
      console.error('Detailed error creating blog:', error)
      throw error
    }
  },

  async getBlogs(): Promise<BlogPost[]> {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy('createdAt', 'desc')
      )
      const querySnapshot = await getDocs(q)
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[]
    } catch (error) {
      console.error('Error getting blogs:', error)
      // Return empty array instead of throwing - let the UI handle fallback
      return []
    }
  },

  async getPublishedBlogs(): Promise<BlogPost[]> {
    try {
      const blogs = await this.getBlogs()
      return blogs.filter(blog => blog.published)
    } catch (error) {
      console.error('Error getting published blogs:', error)
      // Return empty array instead of throwing - let the UI handle fallback
      return []
    }
  },

  async getBlogById(id: string): Promise<BlogPost | null> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as BlogPost
      } else {
        return null
      }
    } catch (error) {
      console.error('Error getting blog by ID:', error)
      return null
    }
  },

  async updateBlog(id: string, blogData: Partial<CreateBlogPost>): Promise<void> {
    try {
      console.log('Starting blog update...', id, blogData.title)
      let imageUrl = blogData.image
      
      // Handle image update if provided
      if (blogData.image && typeof blogData.image !== 'string') {
        console.log('Processing new image for update...')
        try {
          const base64 = await convertImageToBase64(blogData.image as File)
          imageUrl = base64
          console.log('Base64 conversion successful for update')
        } catch (base64Error) {
          console.error('Base64 conversion failed during update:', base64Error)
          // Keep existing image if conversion fails
          delete blogData.image
        }
      }

      // Generate new slug if title changed
      let updateData: any = { ...blogData }
      if (blogData.title) {
        updateData.slug = blogData.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
      }

      // Update image URL if processed
      if (imageUrl && typeof imageUrl === 'string') {
        updateData.image = imageUrl
      }

      // Add updated timestamp
      updateData.updatedAt = serverTimestamp()

      const docRef = doc(db, COLLECTION_NAME, id)
      await updateDoc(docRef, updateData)
      console.log('Blog updated successfully:', id)
    } catch (error) {
      console.error('Detailed error updating blog:', error)
      throw error
    }
  }
} 