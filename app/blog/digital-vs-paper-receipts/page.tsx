"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { MainNavigation, MainFooter } from "@/components/main-navigation"

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#d0e4f4] flex flex-col">
      <MainNavigation />

      <main className="flex-1 container mx-auto py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[#0a3d62] hover:text-[#ff9933] transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src="/blog/digital-vs-paper-hero.png"
              alt="Digital vs Paper Receipts: The Modern Choice"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-[#0a3d62] mb-4 font-gloock leading-tight">
              Digital vs Paper Receipts: The Modern Choice for Businesses
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#0a3d62]/70 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>June 5, 2025</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg p-8 shadow-lg border border-[#8ab5d1]/20">
              <p className="text-lg text-[#0a3d62] leading-relaxed mb-6">
                In today's fast-paced world, businesses are constantly seeking ways to streamline operations, reduce costs, and improve customer experience. One area often overlooked is the humble receipt. Should you stick with traditional paper, or is it time to go digital?
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0a3d62] mb-4 font-gloock">
                The Overlooked Costs Adding Up Behind Your Counter
              </h2>
              <p className="text-[#0a3d62] leading-relaxed mb-6">
                Paper receipts may seem cheap, but the hidden costs add up quickly. From purchasing rolls of thermal paper to maintaining printers and storing physical records, businesses can spend thousands each year on something most customers throw away within minutes.
              </p>
              <ul className="list-disc pl-6 mb-6 text-[#0a3d62] space-y-2">
                <li>Thermal paper rolls: $0.015–$0.05 per receipt</li>
                <li>Printer maintenance and repairs</li>
                <li>Employee time spent handling, sorting, and searching for receipts</li>
                <li>Storage space for tax and compliance</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0a3d62] mb-4 font-gloock">
                When Checkout Gets Clunky
              </h2>
              <p className="text-[#0a3d62] leading-relaxed mb-6">
                Paper receipts can slow down the checkout process, especially when printers jam or run out of paper. Customers waiting in line get frustrated, and employees lose valuable time fixing issues instead of helping shoppers.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0a3d62] mb-4 font-gloock">
                The Environmental Toll
              </h2>
              <p className="text-[#0a3d62] leading-relaxed mb-6">
                Producing paper receipts requires millions of trees, billions of gallons of water, and significant energy. Most receipts are coated with chemicals like BPA or BPS, making them unrecyclable and harmful to the environment.
              </p>
              <ul className="list-disc pl-6 mb-6 text-[#0a3d62] space-y-2">
                <li>10 million trees cut down annually for receipts in the US alone</li>
                <li>1 billion gallons of water used</li>
                <li>Carbon emissions equal to 471,000 cars per year</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0a3d62] mb-4 font-gloock">
                Why Digital Receipts Are the Future
              </h2>
              <p className="text-[#0a3d62] leading-relaxed mb-6">
                Digital receipts offer a smarter, greener, and more efficient alternative. They're instantly delivered to customers' phones, automatically organized, and easy to retrieve for returns or expense tracking. Businesses save money, reduce clutter, and show customers they care about the planet.
              </p>
              <ul className="list-disc pl-6 mb-6 text-[#0a3d62] space-y-2">
                <li>Lower cost per receipt (as low as $0.01)</li>
                <li>No paper, ink, or printer maintenance</li>
                <li>Instant delivery and easy access for customers</li>
                <li>Eco-friendly and sustainable</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0a3d62] mb-4 font-gloock">
                Making the Switch Is Easy
              </h2>
              <p className="text-[#0a3d62] leading-relaxed mb-6">
                Platforms like <a href="https://www.papex.app/" target="_blank" rel="noopener noreferrer" className="text-[#ff9933] hover:underline">PapeX</a> make it simple for businesses to adopt digital receipts without disrupting their existing checkout flow. Integration is seamless, and the benefits are immediate.
              </p>
              <p className="text-[#0a3d62] leading-relaxed mb-8">
                Ready to save money, delight customers, and help the environment? <a href="https://www.papex.app/waitlist/" target="_blank" rel="noopener noreferrer" className="text-[#ff9933] hover:underline">Join our waitlist</a> and be part of the paperless revolution.
              </p>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-[#0a3d62]/5 to-[#ff9933]/5 p-6 rounded-lg border border-[#ff9933]/20 text-center">
                <h3 className="text-xl font-bold text-[#0a3d62] mb-3">Go Digital, Go Green</h3>
                <p className="text-[#0a3d62] mb-4">Thousands of businesses are already making the switch to digital receipts. Don't get left behind.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    href="https://www.papex.app/waitlist/" 
                    className="bg-gradient-to-r from-[#ff9933] to-[#e67e22] hover:opacity-90 text-white font-medium shadow-md border-none rounded-full px-6 py-3 transition-all"
                  >
                    Join Our Waitlist
                  </Link>
                  <Link 
                    href="https://www.papex.app/survey/" 
                    className="bg-white text-[#0a3d62] border border-[#0a3d62]/20 hover:bg-[#0a3d62] hover:text-white font-medium rounded-full px-6 py-3 transition-all"
                  >
                    Take Our Survey
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-[#0a3d62] hover:text-[#ff9933] transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Posts
            </Link>
          </div>
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