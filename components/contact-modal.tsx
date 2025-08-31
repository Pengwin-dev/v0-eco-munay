"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, MapPin } from "lucide-react"

interface ContactModalProps {
  trigger: React.ReactNode
  title?: string
  description?: string
}

export function ContactModal({ trigger, title, description }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you soon with nearby recycling points.",
    })

    setFormData({ name: "", email: "", phone: "" })
    setIsOpen(false)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-eco-green" />
            <span>{title || "Find Nearby Points"}</span>
          </DialogTitle>
          <DialogDescription>
            {description || "Enter your details to discover EcoMunay recycling points near you."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="focus:ring-eco-green focus:border-eco-green"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="focus:ring-eco-green focus:border-eco-green"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
              className="focus:ring-eco-green focus:border-eco-green"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-eco-green hover:bg-eco-dark-green text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Finding locations..." : "Find nearby points"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
