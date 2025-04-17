"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Send, ArrowRight, CheckCircle, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// import ContactMap from "@/components/contact-map"

export default function ContactPage({ dictionary, lang }: { dictionary: any; lang: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1920&width=1080"
            alt="Solar panels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">{dictionary.contact.title}</h1>
            <p className="text-xl text-white/80 mb-8 mx-auto">{dictionary.contact.subtitle}</p>

            <div className="h-12"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-gray-300/10 to-gray-500/10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-gray-300/10 to-gray-500/10 rounded-full -ml-20 -mb-20"></div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-5 lg:sticky lg:top-32"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-200/20 to-gray-400/20 rounded-full -mr-16 -mt-16"></div>

                <h2 className="text-2xl font-medium mb-8 relative">
                  {dictionary.contact.getInTouch || "Get in Touch"}
                </h2>

                <div className="space-y-8">
                  <motion.div
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-gray-700 to-black flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{dictionary.contact.phone || "Phone"}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">+1 (555) 123-4567</p>
                      <Link
                        href="tel:+15551234567"
                        className="text-sm text-gray-700 hover:text-black inline-flex items-center"
                      >
                        <span>{dictionary.contact.callNow || "Call now"}</span>
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-gray-700 to-black flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{dictionary.contact.email || "Email"}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">info@solarpro-energy.com</p>
                      <Link
                        href="mailto:info@solarpro-energy.com"
                        className="text-sm text-gray-700 hover:text-black inline-flex items-center"
                      >
                        <span>{dictionary.contact.sendEmail || "Send email"}</span>
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-gray-700 to-black flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{dictionary.contact.address || "Address"}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">123 Solar Street, Sunshine City</p>
                      <Link
                        href="https://maps.google.com"
                        target="_blank"
                        className="text-sm text-gray-700 hover:text-black inline-flex items-center"
                      >
                        <span>{dictionary.contact.getDirections || "Get directions"}</span>
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                </div>

                {/* Map */}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="contact-form"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-700 to-black"></div>

                <h2 className="text-3xl font-light mb-2">{dictionary.contact.formTitle}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">{dictionary.contact.formSubtitle}</p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {dictionary.contact.nameLabel || "Name"}
                        </label>
                        <Input
                          id="name"
                          placeholder={dictionary.contact.namePlaceholder}
                          className="w-full rounded-xl border-gray-300 dark:border-gray-700 focus:border-gray-700 focus:ring focus:ring-gray-700/20"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {dictionary.contact.emailLabel || "Email"}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={dictionary.contact.emailPlaceholder}
                          className="w-full rounded-xl border-gray-300 dark:border-gray-700 focus:border-gray-700 focus:ring focus:ring-gray-700/20"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        {dictionary.contact.subjectLabel || "Subject"}
                      </label>
                      <Input
                        id="subject"
                        placeholder={dictionary.contact.subjectPlaceholder || "What is this regarding?"}
                        className="w-full rounded-xl border-gray-300 dark:border-gray-700 focus:border-gray-700 focus:ring focus:ring-gray-700/20"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        {dictionary.contact.messageLabel || "Message"}
                      </label>
                      <Textarea
                        id="message"
                        placeholder={dictionary.contact.messagePlaceholder}
                        rows={6}
                        className="w-full rounded-xl border-gray-300 dark:border-gray-700 focus:border-gray-700 focus:ring focus:ring-gray-700/20 resize-none"
                        required
                      />
                    </div>

                    <div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-black text-white rounded-xl px-8 py-3 h-auto font-medium shadow-lg shadow-gray-700/20"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {dictionary.contact.submittingButton || "Sending..."}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {dictionary.contact.submitButton}
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/20 rounded-xl p-10 text-center"
                  >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
                      {dictionary.contact.thankYouTitle || "Thank You!"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {dictionary.contact.thankYouMessage ||
                        "Your message has been sent successfully. We'll get back to you as soon as possible."}
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-white dark:bg-gray-800 text-gray-700 border border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/20 rounded-xl"
                    >
                      {dictionary.contact.sendAnotherButton || "Send Another Message"}
                    </Button>
                  </motion.div>
                )}
              </div>

              {/* Remove the FAQ Teaser section */}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
