"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact us header"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Contact Us</h1>
          <p className="max-w-2xl text-lg sm:text-xl">
            We'd love to hear from you. Reach out with any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-[#0D1F1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-6">Get in Touch</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Have questions about our products or brands? Want to collaborate with us? We're here to help. Reach out
                to us using any of the contact methods below.
              </p>

              <div className="space-y-6">
                <Card className="border-[#A8D5BA]/20">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-[#A8D5BA]/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#8D6748] dark:text-[#A8D5BA]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#8D6748] dark:text-[#FFD166]">Our Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Farm Lane, Kolkata
                        <br />
                        West Bengal, India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#A8D5BA]/20">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-[#A8D5BA]/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#8D6748] dark:text-[#A8D5BA]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#8D6748] dark:text-[#FFD166]">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        +91 98765 43210
                        <br />
                        Monday to Friday, 9am to 6pm
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#A8D5BA]/20">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-[#A8D5BA]/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#8D6748] dark:text-[#A8D5BA]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#8D6748] dark:text-[#FFD166]">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        info@farmgood.com
                        <br />
                        support@farmgood.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#8D6748] dark:text-[#FFD166] mb-4">Our Location</h3>
                <div className="rounded-2xl overflow-hidden h-[300px] relative">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Map location" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-[#A8D5BA]/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#8D6748] dark:text-[#FFD166]">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                      <h3 className="text-green-700 dark:text-green-300 font-bold mb-2">Message Sent!</h3>
                      <p className="text-green-600 dark:text-green-400">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="w-full focus-visible:ring-[#A8D5BA]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="w-full focus-visible:ring-[#A8D5BA]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Subject
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            required
                            className="w-full focus-visible:ring-[#A8D5BA]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Your message here..."
                            rows={5}
                            required
                            className="w-full focus-visible:ring-[#A8D5BA]"
                          />
                        </div>
                      </div>
                    </form>
                  )}
                </CardContent>
                <CardFooter>
                  {!isSubmitted && (
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-[#A8D5BA] hover:bg-[#8D6748] text-white"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
