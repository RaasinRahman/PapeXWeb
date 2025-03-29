import Link from "next/link"
import { Send, ArrowLeft } from "lucide-react"
import WaitlistFormEnhanced from "@/components/waitlist-form-enhanced"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-[#d0e4f4] flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-[#8ab5d1] backdrop-blur-sm bg-[#d0e4f4]/80">
        <div className="container mx-auto py-3 px-4">
          <Link href="/" className="flex items-center gap-2 w-fit group">
            <div className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 text-[#0a3d62] group-hover:text-[#ff9933] transition-colors" />
              <span className="text-[#0a3d62] group-hover:text-[#ff9933] font-medium transition-colors">Back to Home</span>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-3xl w-full mx-auto">
          <div className="text-center mb-8">
            <div className="mb-6 flex justify-center">
              <Image 
                src="/logos/transparent.png" 
                alt="PapeX Logo" 
                width={160} 
                height={160}
                priority
                className="h-24 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-4 bg-gradient-to-r from-[#0a3d62] via-[#1a6eb0] to-[#ff9933] bg-clip-text text-transparent">Join Our Waitlist</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0a3d62] via-[#1a6eb0] to-[#ff9933] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-[#0a3d62] max-w-2xl mx-auto leading-relaxed">
              PapeX is looking for people to join our waitlist as we search for investors. There is no obligation or commitment on your part.
            </p>

            <div className="flex flex-row items-center justify-center mt-8 space-x-6 flex-wrap gap-y-4">
              <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-full shadow-sm">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0a3d62] via-[#1a6eb0] to-[#ff9933] flex items-center justify-center text-white font-bold">
                  1
                </div>
                <p className="text-lg text-[#0a3d62] font-medium">Full name</p>
              </div>
              <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-full shadow-sm">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0a3d62] via-[#1a6eb0] to-[#ff9933] flex items-center justify-center text-white font-bold">
                  2
                </div>
                <p className="text-lg text-[#0a3d62] font-medium">Email address</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden border border-white/40">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff9933]/20 to-[#ff9933]/5 rounded-full -mr-32 -mt-32 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0a3d62]/20 to-[#0a3d62]/5 rounded-full -ml-32 -mb-32 blur-xl"></div>

            <div className="relative z-10">
              <WaitlistFormEnhanced />

              <div className="mt-8 text-center text-sm text-[#0a3d62]">
                <p>Your support is greatly appreciated!</p>
                <p className="mt-2">
                  <Link href="/" className="text-[#ff9933] hover:text-[#e67e22] transition-colors">
                    Return to homepage
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center relative">
            <div className="relative flex items-center">
              <div className="flex-1">
                <div className="w-full h-0.5 border-b border-dashed border-[#ff9933]"></div>
              </div>
              <div className="flex-shrink-0 mx-2 bg-[#d0e4f4] px-2">
                <Image 
                  src={`/logos/trans.png?t=${Date.now()}`}
                  alt="PapeX Logo" 
                  width={40} 
                  height={40}
                  className="transform rotate-45 opacity-80"
                />
              </div>
              <div className="flex-1">
                <div className="w-full h-0.5 border-b border-dashed border-[#ff9933]"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-[#0a3d62] bg-gradient-to-r from-[#0a3d62]/5 to-[#ff9933]/5 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} PapeX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

