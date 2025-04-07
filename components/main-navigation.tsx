'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export function MainNavigation() {
  const pathname = usePathname()
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#8ab5d1] backdrop-blur-sm bg-[#d0e4f4]/80">
      <div className="container mx-auto py-3 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/logos/transparent.png" 
              alt="PapeX Logo" 
              width={180} 
              height={180}
              priority
              className="h-20 w-auto"
            />
          </Link>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link href={pathname === "/" ? "#about" : "/#about"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-[#0a3d62] hover:text-[#ff9933] bg-transparent hover:bg-white/50 font-semibold text-lg"}>
                  Problem & Solution
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={pathname === "/" ? "#business-model" : "/#business-model"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-[#0a3d62] hover:text-[#ff9933] bg-transparent hover:bg-white/50 font-semibold text-lg"}>
                  Business Model
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={pathname === "/" ? "#market-opportunity" : "/#market-opportunity"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-[#0a3d62] hover:text-[#ff9933] bg-transparent hover:bg-white/50 font-semibold text-lg"}>
                  Revenue Streams
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={pathname === "/" ? "#traction" : "/#traction"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-[#0a3d62] hover:text-[#ff9933] bg-transparent hover:bg-white/50 font-semibold text-lg"}>
                  Milestones
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/survey" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-[#0a3d62] hover:text-[#ff9933] bg-transparent hover:bg-white/50 font-semibold text-lg"}>
                  Take Our Survey
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/waitlist" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-[#0a3d62] hover:text-[#ff9933] bg-transparent hover:bg-white/50 font-semibold text-lg"}>
                  Join Waitlist
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:block">
            <Button variant="default" className="bg-gradient-to-r from-[#ff9933] to-[#e67e22] hover:opacity-90 text-white font-medium shadow-sm border-none rounded-full px-5 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export function MainFooter() {
  return (
    <footer className="bg-[#0a3d62] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Image 
              src="/logos/trans.png"
              alt="PapeX Logo" 
              width={80} 
              height={80}
              priority
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 md:mb-0 order-last md:order-none mx-auto">
            <Link href="/#about" className="text-white hover:text-[#ff9933] transition-colors font-semibold text-base">
              Problem & Solution
            </Link>
            <Link href="/#business-model" className="text-white hover:text-[#ff9933] transition-colors font-semibold text-base">
              Business Model
            </Link>
            <Link href="/#market-opportunity" className="text-white hover:text-[#ff9933] transition-colors font-semibold text-base">
              Revenue Streams
            </Link>
            <Link href="/#traction" className="text-white hover:text-[#ff9933] transition-colors font-semibold text-base">
              Milestones
            </Link>
            <Link href="/survey" className="text-white hover:text-[#ff9933] transition-colors font-semibold text-base">
              Take Our Survey
            </Link>
            <Link href="/waitlist" className="text-white hover:text-[#ff9933] transition-colors font-semibold text-base">
              Join Waitlist
            </Link>
          </div>

          <div className="mt-8 md:mt-0">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#ff9933] to-[#e67e22] hover:opacity-90 text-white font-medium shadow-sm border-none rounded-full px-5 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-10">
          <Link href="https://www.linkedin.com/company/papexreceipts/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff9933] transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff9933] transition-colors">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff9933] transition-colors">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="https://www.instagram.com/papex_receipts?igsh=ZjVkbm80eWprcTgz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff9933] transition-colors">
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
        
        <div className="border-t border-[#1a5980] mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PapeX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 