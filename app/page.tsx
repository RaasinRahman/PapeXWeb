import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, DollarSign, BarChart3, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#d0e4f4] scroll-smooth">
      <header className="sticky top-0 z-50 w-full border-b border-[#8ab5d1] backdrop-blur-sm bg-[#d0e4f4]/80">
        <div className="container mx-auto py-3 px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/logos/transparent.png" 
              alt="PapeX Logo" 
              width={180} 
              height={180}
              priority
              className="h-20 w-auto"
            />
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-[#0a3d62] hover:text-[#ff9933] bg-transparent hover:bg-white/50"}>
                    Problem & Solution
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#business-model" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-[#0a3d62] hover:text-[#ff9933] bg-transparent hover:bg-white/50"}>
                    Business Model
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#market-opportunity" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-[#0a3d62] hover:text-[#ff9933] bg-transparent hover:bg-white/50"}>
                    Revenue Streams
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#traction" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-[#0a3d62] hover:text-[#ff9933] bg-transparent hover:bg-white/50"}>
                    Milestones
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#waitlist" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-[#0a3d62] hover:text-[#ff9933] bg-transparent hover:bg-white/50"}>
                    Join Waitlist
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button variant="default" className="bg-gradient-to-r from-[#ff9933] to-[#e67e22] hover:opacity-90 text-white font-medium shadow-sm border-none rounded-full px-5">
                Contact Us
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden border border-[#0a3d62]/20 bg-white/50 text-[#0a3d62] hover:bg-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto py-16 px-4 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0a3d62] leading-tight">
              Revolutionizing Digital Receipts
            </h1>
            <p className="text-xl text-[#0a3d62] md:pr-12">
              PapeX is developing a digital platform that eliminates the need for physical, email, or text receipts,
              seamlessly bridging the gap between retail transactions and financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/waitlist">
                <Button className="bg-gradient-to-r from-[#ff9933] to-[#e67e22] hover:opacity-90 text-white font-medium shadow-sm border-none rounded-full px-6 py-6 h-auto">
                  Join Our Waitlist
                </Button>
              </Link>
              <Link href="#business-model">
                <Button
                  variant="outline"
                  className="bg-white/80 text-[#0a3d62] border border-[#0a3d62]/20 hover:bg-white hover:text-[#ff9933] hover:border-[#ff9933] rounded-full font-medium px-6 py-6 h-auto transition-all shadow-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-80 w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src={`/icons/Navy Primary/Navy-Carolina.png?t=${Date.now()}`}
                  alt="PapeX Logo" 
                  width={180} 
                  height={180} 
                  className="z-10"
                  priority
                />
                <div className="absolute h-40 w-40 border-2 border-[#0a3d62] rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="about" className="scroll-mt-[15vh] bg-[#0a3d62] text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">The Problem</h2>
                <p className="text-lg mb-6">
                  Businesses annually spend on average, between $3B - $6B on receipt paper in the U.S. alone, and that
                  excludes printer and ink costs. These costs are not only monetary but also waste valuable time at
                  checkout and have environmental impact.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-4">
                    <DollarSign className="h-8 w-8 text-[#ff9933] mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Costly</h3>
                      <p>Billions spent annually on paper receipts and related costs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-[#ff9933] mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Time-Consuming</h3>
                      <p>Wastes valuable time at checkout for both businesses and customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-[#0c4b76] p-8 rounded-lg">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Solution</h2>
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
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a3d62] text-center mb-12">
              Win-Win-Win Business Model
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#d0e4f4] p-8 rounded-lg border-t-4 border-[#ff9933]">
                <h3 className="text-2xl font-bold text-[#0a3d62] mb-4">Win for POS Vendors</h3>
                <p className="text-[#0a3d62] mb-6">
                  Point-of-Sale (POS) vendors will generate new revenue streams through our integration.
                </p>
                <div className="h-1 w-16 bg-[#ff9933] mb-6"></div>
                <p className="text-[#0a3d62] font-medium">
                  New revenue opportunities without changing existing systems.
                </p>
              </div>
              <div className="bg-[#d0e4f4] p-8 rounded-lg border-t-4 border-[#ff9933]">
                <h3 className="text-2xl font-bold text-[#0a3d62] mb-4">Win for Merchants</h3>
                <p className="text-[#0a3d62] mb-6">
                  Merchants will save time and money by eliminating the need for physical receipts.
                </p>
                <div className="h-1 w-16 bg-[#ff9933] mb-6"></div>
                <p className="text-[#0a3d62] font-medium">
                  Reduced costs and faster checkout times lead to better customer experiences.
                </p>
              </div>
              <div className="bg-[#d0e4f4] p-8 rounded-lg border-t-4 border-[#ff9933]">
                <h3 className="text-2xl font-bold text-[#0a3d62] mb-4">Win for Customers</h3>
                <p className="text-[#0a3d62] mb-6">
                  Individuals or entities receiving receipts will benefit from faster checkouts and more efficient
                  financial and expense management.
                </p>
                <div className="h-1 w-16 bg-[#ff9933] mb-6"></div>
                <p className="text-[#0a3d62] font-medium">Simplified expense tracking and financial management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section id="market-opportunity" className="scroll-mt-[15vh] bg-[#0a3d62] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Market Opportunity</h2>
                <p className="text-lg text-white mb-8">
                  PapeX targets anyone who receives or issues receipts, including both brick-and-mortar businesses and
                  online retailers. We will generate revenue through a combination of pay-per-print and
                  subscription-based pricing, depending on the model chosen by the merchant.
                </p>
                <p className="text-lg text-white">
                  Additionally, beyond these core pricing models, we will generate income through data monetization and
                  B2B integrations with accounting and financial software.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 rounded-full border-8 border-white opacity-20"></div>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-[#ff9933] opacity-80"
                    style={{ clipPath: "polygon(0 0, 57% 0, 57% 100%, 0 100%)" }}
                  ></div>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-[#44c8e8] opacity-80"
                    style={{ clipPath: "polygon(57% 0, 75% 0, 75% 100%, 57% 100%)" }}
                  ></div>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-white"
                    style={{ clipPath: "polygon(75% 0, 100% 0, 100% 100%, 75% 100%)" }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                    <p className="text-sm text-white">Core receipt based revenue</p>
                    <p className="text-2xl font-bold text-[#ff9933]">57.1%</p>
                    
                    <div className="h-1 w-16 bg-white my-2"></div>
                    
                    <p className="text-sm text-white">Data monetization</p>
                    <p className="text-2xl font-bold text-[#44c8e8]">17.9%</p>
                    
                    <div className="h-1 w-16 bg-white my-2"></div>
                    
                    <p className="text-sm text-white">B2B integrations</p>
                    <p className="text-2xl font-bold text-white">25.0%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traction Section */}
        <section id="traction" className="scroll-mt-[15vh] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a3d62] text-center mb-12">Traction & Milestones</h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#ff9933]"></div>

                <div className="relative pl-12 pb-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#ff9933] flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a3d62] mb-2">Clover POS Integration</h3>
                  <p className="text-[#0a3d62]">
                    Successfully developed an almost fully functional integration for the Clover POS system, relying
                    solely on a dedicated group of students with support from professionals and advisors.
                  </p>
                </div>

                <div className="relative pl-12 pb-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#ff9933] flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a3d62] mb-2">Growing Waitlist</h3>
                  <p className="text-[#0a3d62]">
                    Market interest is evident, with a growing waitlist of potential customers eager to adopt the
                    solution.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#ff9933] flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a3d62] mb-2">Pitch Competition Winner</h3>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Show Your Support!</h2>
            <p className="text-xl max-w-2xl mx-auto mb-12">
              PapeX is looking for people to <span className="text-[#ff9933]">join our waitlist</span> as we search for
              investors. There is no obligation or commitment on your part. If you're interested, all we need is:
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
                    src={`/logos/trans.png?t=${Date.now()}`}
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

      <footer className="bg-[#0a3d62] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Image 
                src={`/logos/trans.png?t=${Date.now()}`}
                alt="PapeX Logo" 
                width={80} 
                height={80}
                priority
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Link href="#about" className="text-white hover:text-[#ff9933] transition-colors">
                Problem & Solution
              </Link>
              <Link href="#business-model" className="text-white hover:text-[#ff9933] transition-colors">
                Business Model
              </Link>
              <Link href="#market-opportunity" className="text-white hover:text-[#ff9933] transition-colors">
                Revenue Streams
              </Link>
              <Link href="#traction" className="text-white hover:text-[#ff9933] transition-colors">
                Milestones
              </Link>
              <Link href="#waitlist" className="text-white hover:text-[#ff9933] transition-colors">
                Join Waitlist
              </Link>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#ff9933] to-[#e67e22] hover:opacity-90 text-white font-medium shadow-sm border-none rounded-full px-5">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-[#1a5980] mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} PapeX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

