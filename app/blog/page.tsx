'use client'

import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { MainNavigation, MainFooter } from "@/components/main-navigation"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: "3",
    title: "The Secret Life of Your Shopping Receipt: What Happens After You Toss It",
    excerpt: "You grab your coffee, stuff the receipt in your pocket, and forget about it. But what if I told you that innocent slip of paper has quite the story to tell? Follow one receipt on its unlikely journey through our world.",
    date: "June 8, 2025",
    image: "/blog/blog_image.png",
    slug: "secret-life-shopping-receipt"
  },
  {
    id: "2",
    title: "The History of Receipts: From Handwritten Notes to Digital Revolution",
    excerpt: "Receipts have evolved from clay tablets and handwritten notes to the seamless digital experiences we expect today. Discover how 5,000 years of innovation led to the digital receipt revolution.",
    date: "June 1, 2025",
    image: "/blog/hsitryp.jpeg",
    slug: "history-of-receipts"
  },
  {
    id: "1",
    title: "The Hidden Cost of Paper Receipts: Why Your Business Should Care",
    excerpt: "Every day, millions of shoppers walk away from stores clutching small paper receipts. These little strips of paper seem harmless enough. But when we zoom out and look at the bigger picture, the truth is shocking.",
    date: "May 24, 2025",
    image: "/blog/blog_image.png",
    slug: "hidden-cost-paper-receipts"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#d0e4f4] flex flex-col">
      <MainNavigation />

      <main className="flex-1 container mx-auto py-6 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0a3d62] mb-4 font-gloock">
            PapeX Blog
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0a3d62] via-[#1a6eb0] to-[#ff9933] mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-[#0a3d62] max-w-3xl mx-auto">
            Insights, updates, and stories about the future of digital receipts and sustainable business practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-[#8ab5d1]/20">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#0a3d62]/70 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-[#0a3d62] mb-3 group-hover:text-[#ff9933] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#0a3d62]/80 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-[#ff9933] font-medium text-sm group-hover:underline">
                    Read More →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-16 relative">
          <div className="relative flex items-center">
            <div className="flex-1">
              <div className="w-full h-0.5 border-b border-dashed border-[#ff9933]"></div>
            </div>
            <div className="flex-shrink-0 ml-2">
              <Image 
                src="/logos/trans.png"
                alt="PapeX Logo" 
                width={32} 
                height={32}
                className="transform rotate-45"
              />
            </div>
          </div>
        </div>
      </main>

      <MainFooter />
    </div>
  )
} 