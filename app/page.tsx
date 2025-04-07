'use client'

import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, DollarSign, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MainNavigation, MainFooter } from "@/components/main-navigation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#d0e4f4] scroll-smooth">
      <MainNavigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto py-16 px-4 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0a3d62] leading-tight font-gloock">
              Revolutionizing Digital Receipts
            </h1>
            <p className="text-xl text-[#0a3d62] md:pr-12">
              PapeX is developing a digital platform that eliminates the need for physical, email, or text receipts, seamlessly bridging the gap between financial transactions and financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button className="w-full bg-gradient-to-r from-[#ff9933] to-[#e67e22] hover:opacity-90 text-white font-medium shadow-sm border-none rounded-full px-6 py-6 h-auto">
                  Join Our Waitlist
                </Button>
              </Link>
              <Link 
                href="#business-model" 
                className="w-full sm:w-auto hidden md:block"
              >
                <Button
                  variant="outline"
                  className="w-full bg-white/80 text-[#0a3d62] border border-[#0a3d62]/20 hover:bg-white hover:text-[#ff9933] hover:border-[#ff9933] rounded-full font-medium px-6 py-6 h-auto transition-all shadow-sm"
                >
                  Learn More
                </Button>
              </Link>
              <Link 
                href="#about" 
                className="w-full sm:w-auto md:hidden"
              >
                <Button
                  variant="outline"
                  className="w-full bg-white/80 text-[#0a3d62] border border-[#0a3d62]/20 hover:bg-white hover:text-[#ff9933] hover:border-[#ff9933] rounded-full font-medium px-6 py-6 h-auto transition-all shadow-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="md:hidden flex justify-center pt-8">
              <div className="relative inline-block">
                <div className="absolute h-32 w-32 border-2 border-[#0a3d62] rounded-full animate-ping opacity-20 -z-10"></div>
                <Image 
                  src="/icons/Navy Primary/Navy-Carolina.png"
                  alt="PapeX Logo" 
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative hidden md:block">
            <div className="relative h-80 w-full flex items-center justify-center">
              <div className="relative inline-block">
                <div className="absolute h-40 w-40 border-2 border-[#0a3d62] rounded-full animate-ping opacity-20 -z-10"></div>
                <div className="w-auto h-auto flex items-center justify-center">
                  <Image 
                    src="/icons/Navy Primary/Navy-Carolina.png"
                    alt="PapeX Logo" 
                    width={140}
                    height={140}
                    className="sm:w-[180px] sm:h-[180px] w-[120px] h-[120px] object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="about" className="scroll-mt-[15vh] bg-[#0a3d62] text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-gloock">The Problem</h2>
                <p className="text-lg mb-6">
                  Businesses annually spend on average, between $3B - $6B on receipt paper in the U.S. alone, and that
                  excludes printer and ink costs. These costs are not only monetary but also waste valuable time at
                  checkout and have environmental impact.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-4">
                    <DollarSign className="h-8 w-8 text-[#ff9933] mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2 font-gloock">Costly</h3>
                      <p>Billions spent annually on paper receipts and related costs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-[#ff9933] mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2 font-gloock">Time-Consuming</h3>
                      <p>Wastes valuable time at checkout for both businesses and customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-[#0c4b76] p-8 rounded-lg">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-gloock">Our Solution</h2>
                <p className="text-lg mb-6">
                  PapeX is developing a digital platform that will eliminate the need for physical, email, or text
                  receipts, seamlessly bridging the gap between the final stages of the retail transaction process and
                  individual or professional financial or expense management.
                </p>
                <div className="flex items-center gap-3 mt-8">
                  <CheckCircle className="h-6 w-6 text-[#ff9933]" />
                  <p className="font-medium">Eliminate paper waste</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <CheckCircle className="h-6 w-6 text-[#ff9933]" />
                  <p className="font-medium">Save time at checkout</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <CheckCircle className="h-6 w-6 text-[#ff9933]" />
                  <p className="font-medium">Streamline expense management</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Model Section */}
        <section id="business-model" className="scroll-mt-[15vh] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a3d62] text-center mb-12 font-gloock">
              Win-Win-Win Business Model
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#d0e4f4] p-8 rounded-lg border-t-4 border-[#ff9933]">
                <h3 className="text-2xl font-bold text-[#0a3d62] mb-4 font-gloock">Win for POS Vendors</h3>
                <p className="text-[#0a3d62] mb-6">
                  Point-of-Sale (POS) vendors will generate new revenue streams through our integration.
                </p>
                <div className="h-1 w-16 bg-[#ff9933] mb-6"></div>
                <p className="text-[#0a3d62] font-medium">
                  New revenue opportunities without changing existing systems.
                </p>
              </div>
              <div className="bg-[#d0e4f4] p-8 rounded-lg border-t-4 border-[#ff9933]">
                <h3 className="text-2xl font-bold text-[#0a3d62] mb-4 font-gloock">Win for Merchants</h3>
                <p className="text-[#0a3d62] mb-6">
                  Merchants will save time, money, and reduce waste by eliminating physical receipts.
                </p>
                <div className="h-1 w-16 bg-[#ff9933] mb-6"></div>
                <p className="text-[#0a3d62] font-medium">
                  Lower costs, faster checkout times, and minimized waste leading to a better customer experience.
                </p>
              </div>
              <div className="bg-[#d0e4f4] p-8 rounded-lg border-t-4 border-[#ff9933]">
                <h3 className="text-2xl font-bold text-[#0a3d62] mb-4 font-gloock">Win for Customers</h3>
                <p className="text-[#0a3d62] mb-6">
                  Individuals or entities receiving receipts will benefit from faster checkouts and more efficient
                  financial and expense management.
                </p>
                <div className="h-1 w-16 bg-[#ff9933] mb-6"></div>
                <p className="text-[#0a3d62] font-medium">Simplified expense tracking and financial management, all while reducing their carbon footprint.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section id="market-opportunity" className="scroll-mt-[15vh] bg-[#0a3d62] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-gloock">Market Opportunity</h2>
                <p className="text-lg text-white mb-8">
                  PapeX targets anyone who receives or issues receipts, including both brick-and-mortar businesses and
                  online retailers. We will generate revenue through a combination of pay-per-print and
                  subscription-based pricing, depending on the model chosen by the merchant.
                </p>
                <p className="text-lg text-white">
                  In addition to these core pricing models, we will generate revenue through non-PII data monetization and B2B integrations with tax, accounting, and financial software.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-80 h-80">
                  {/* Base circle with low opacity */}
                  <div className="absolute inset-0 rounded-full border-8 border-white opacity-20"></div>
                  
                  {/* Orange section - 26.26% */}
                  <div
                    className="absolute inset-0 rounded-full border-8 border-[#ff9933] opacity-80"
                    style={{ 
                      clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)"
                    }}
                  ></div>
                  
                  {/* Blue section - 20.51% */}
                  <div
                    className="absolute inset-0 rounded-full border-8 border-[#44c8e8] opacity-80"
                    style={{ 
                      clipPath: "polygon(50% 50%, 50% 0, 100% 0, 100% 50%)"
                    }}
                  ></div>
                  
                  {/* White section - 53.23% */}
                  <div
                    className="absolute inset-0 rounded-full border-8 border-white"
                    style={{ 
                      clipPath: "polygon(50% 50%, 50% 0, 0 0, 0 100%, 50% 100%)"
                    }}
                  ></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                    <p className="text-sm text-white">Core Receipt Based</p>
                    <p className="text-2xl font-bold text-[#ff9933]">26.26%</p>
                    
                    <div className="h-1 w-16 bg-white my-2"></div>
                    
                    <p className="text-sm text-white">B2B Subscription Service</p>
                    <p className="text-2xl font-bold text-[#44c8e8]">20.51%</p>
                    
                    <div className="h-1 w-16 bg-white my-2"></div>
                    
                    <p className="text-sm text-white">Data Monetization</p>
                    <p className="text-2xl font-bold text-white">53.23%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traction Section */}
        <section id="traction" className="scroll-mt-[15vh] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a3d62] text-center mb-12 font-gloock">Traction & Milestones</h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#ff9933]"></div>

                <div className="relative pl-12 pb-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#ff9933] flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a3d62] mb-2 font-gloock">Clover POS Integration</h3>
                  <p className="text-[#0a3d62]">
                    Successfully developed an almost fully functional integration for the Clover POS system, relying
                    solely on a dedicated group of students with support from professionals and advisors.
                  </p>
                </div>

                <div className="relative pl-12 pb-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#ff9933] flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a3d62] mb-2 font-gloock">Growing Waitlist</h3>
                  <p className="text-[#0a3d62]">
                    Market interest is evident, with a growing waitlist of potential customers eager to adopt the
                    solution.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#ff9933] flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a3d62] mb-2 font-gloock">Pitch Competition Winner</h3>
                  <p className="text-[#0a3d62]">
                    PapeX gained recognition by winning a pitch competition judged by the top 50 fastest-growing
                    Syracuse alumni entrepreneurs, securing $6,000 in funding to further development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="scroll-mt-[15vh] bg-[#0a3d62] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-gloock">Show Your Support!</h2>
            <p className="text-xl max-w-2xl mx-auto mb-12">
              PapeX is currently building our waitlist as we seek investors. There's no obligation or commitment on your part, but if you're interested click here!
            </p>

            <div className="max-w-md mx-auto">
              <Link href="/waitlist">
                <Button className="w-full bg-gradient-to-r from-[#ff9933] to-[#e67e22] hover:opacity-90 text-white font-medium shadow-md border-none rounded-full px-6 py-6 h-auto">
                  Join Our Waitlist
                </Button>
              </Link>
            </div>

            <p className="mt-12 text-lg">Your support is greatly appreciated!</p>

            <div className="mt-16 relative">
              <div className="relative flex items-center">
                <div className="flex-1">
                  <div className="w-full h-0.5 border-b border-dashed border-[#ff9933]"></div>
                </div>
                <div className="flex-shrink-0 ml-2">
                  <Image 
                    src="/logos/trans.png"
                    alt="PapeX Logo" 
                    width={48} 
                    height={48}
                    className="transform rotate-45"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  )
}

