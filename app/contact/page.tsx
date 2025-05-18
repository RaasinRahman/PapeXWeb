'use client'

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TeamImage } from "@/components/team-image"
import { MainNavigation, MainFooter } from "@/components/main-navigation"

interface TeamMember {
  name: string
  role: string
  image: string
  fallbackImage: string
  linkedin?: string
  email: string
  bio?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Nicolas Courbage",
    role: "Founder",
    image: "/profiles/nico_courbage.jpeg",
    fallbackImage: "/profiles/nicolas.svg",
    linkedin: "https://www.linkedin.com/in/nicolas-courbage-051912123/",
    email: "npcourba@syr.edu",
    bio: "Leads the development and execution of PapeX, overseeing team management and driving the project from concept to market."
  },
  {
    name: "Michael Khoury",
    role: "Co-founder",
    image: "/profiles/michael_khoury.jpeg",
    fallbackImage: "/profiles/michael.svg",
    linkedin: "https://www.linkedin.com/in/michael-khoury-194b82240/",
    email: "michael_khoury@icloud.com",
    bio: "Operations and legal executive responsible for ensuring smooth functionality of all departments of the company."
  },
  {
    name: "Raasin Rahman",
    role: "Technology",
    image: "/profiles/raasin_rahman.jpeg",
    fallbackImage: "/profiles/raasin.svg",
    linkedin: "https://www.linkedin.com/in/raasin/",
    email: "raasinr@gmail.com",
    bio: "Leading the technical development of the PapeX application "
  },
  {
    name: "Krutartha Nagesh",
    role: "Technology",
    image: "/profiles/Kru.jpeg",
    fallbackImage: "/profiles/placeholder.svg",
    linkedin: "https://www.linkedin.com/in/krutarthanagesh/",
    email: "krutarthanagesh@gmail.com",
    bio: "Leads and oversees the development of PapeX's core technology, focusing on scalable backend systems and a seamless end-user experience."
  },
  {
    name: "Magali Courbage",
    role: "Advisor / Board Member",
    image: "/profiles/magali_courbage.jpeg",
    fallbackImage: "/profiles/magali.svg",
    linkedin: "https://www.linkedin.com/in/magali-courbage-03b8968/",
    email: "magali.courbage@gmail.com",
    bio: "Seasoned professional with over 20 years of experience in product management and business operations within the credit and data analytics industries."
  },
  {
    name: "Bruno Courbage",
    role: "Advisor / Board Member",
    image: "/profiles/bruno_courbage.jpeg",
    fallbackImage: "/profiles/bruno.svg",
    linkedin: "https://www.linkedin.com/in/brunocourbage/",
    email: "bruno.courbage@gmail.com",
    bio: "Transformational product executive with proven success scaling product lines, driving innovation, and delivering P&L performance in SaaS platforms."
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#d0e4f4] flex flex-col">
      <MainNavigation />

      <main className="flex-1 container mx-auto py-6 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0a3d62] mb-4 text-center">Meet the PapeX Team</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-[#0a3d62] via-[#1a6eb0] to-[#ff9933] mx-auto mb-4 rounded-full"></div>
        <p className="text-lg text-[#0a3d62] max-w-3xl mx-auto text-center mb-6">
          The passionate individuals behind PapeX working to revolutionize digital receipts
          and transform how businesses and customers manage transactions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-[#8ab5d1]/20">
              <div className="relative h-48 w-full bg-gradient-to-br from-[#0a3d62]/5 to-[#ff9933]/5 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-[#0a3d62]/10 overflow-hidden">
                    <TeamImage
                      src={member.image}
                      alt={member.name}
                      fallbackSrc={member.fallbackImage}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <h2 className="text-lg font-bold text-[#0a3d62] mb-1">{member.name}</h2>
                <p className="text-[#ff9933] font-medium mb-2">{member.role}</p>
                {member.bio && <p className="text-[#0a3d62]/80 mb-2 text-xs">{member.bio}</p>}
                <div className="flex flex-row gap-3 mt-1">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="inline-flex items-center gap-1 text-[#0a3d62] hover:text-[#ff9933] transition-colors text-xs font-medium"
                  >
                    <Mail className="h-3 w-3" />
                    Email
                  </a>
                  {member.linkedin && (
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#0a3d62] hover:text-[#ff9933] transition-colors text-xs font-medium">
                      <Linkedin className="h-3 w-3" />
                      LinkedIn
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#0a3d62] mb-3">Join Our Mission</h2>
          <p className="text-base text-[#0a3d62] max-w-3xl mx-auto mb-4">
            Want to be part of our journey to transform digital receipts? We're always looking for passionate 
            individuals to join our team.
          </p>
          <Link href="/waitlist">
            <Button className="bg-gradient-to-r from-[#ff9933] to-[#e67e22] hover:opacity-90 text-white font-medium shadow-md border-none rounded-full px-4 py-2 h-auto">
              Join Our Waitlist
            </Button>
          </Link>
        </div>

        <div className="mt-8 relative">
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