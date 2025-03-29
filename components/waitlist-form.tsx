"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export default function WaitlistForm() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#0c4b76] p-8 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-[#ff9933]" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-lg">You've been added to our waitlist. We'll keep you updated on our progress!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#0c4b76] p-8 rounded-lg">
      <div className="space-y-6">
        <div className="space-y-2 text-left">
          <Label htmlFor="fullName" className="text-white">
            Full Name
          </Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            required
            value={formState.fullName}
            onChange={handleChange}
            className="bg-white text-[#0a3d62]"
          />
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="email" className="text-white">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            value={formState.email}
            onChange={handleChange}
            className="bg-white text-[#0a3d62]"
          />
        </div>

        <Button type="submit" className="w-full bg-[#ff9933] hover:bg-[#e67e22] text-white py-6" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Join Waitlist"}
        </Button>

        <p className="text-xs text-center text-gray-300 mt-4">
          By joining our waitlist, you agree to receive updates about PapeX. We respect your privacy and will never
          share your information.
        </p>
      </div>
    </form>
  )
}

