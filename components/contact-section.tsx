"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactSection({ dictionary, lang }: { dictionary: any; lang: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    <section ref={ref} className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-blue-900 opacity-10 dark:opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-400 rounded-full filter blur-3xl opacity-10 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-400 rounded-full filter blur-3xl opacity-10 -ml-20 -mb-20"></div>

      {/* Solar panel illustration */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent"></div>
        <Image
          src="/placeholder.svg?height=1200&width=800"
          alt="Solar panels illustration"
          fill
          className="object-cover object-left"
        />
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left column - Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
                {dictionary.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-lg">{dictionary.subtitle}</p>

              <div className="space-y-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{dictionary.phone || "Phone"}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">+1 (555) 123-4567</p>
                    <div className="h-12"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{dictionary.email || "Email"}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">info@solarpro-energy.com</p>
                    <Link
                      href="mailto:info@solarpro-energy.com"
                      className="text-sm inline-flex items-center text-teal-500 hover:text-teal-600"
                    >
                      <span>{dictionary.sendEmail || "Send email"}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{dictionary.address || "Address"}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">123 Solar Street, Sunshine City</p>
                    <Link
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-flex items-center text-teal-500 hover:text-teal-600"
                    >
                      <span>{dictionary.getDirections || "Get directions"}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{dictionary.hours || "Business Hours"}</h3>
                    <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-600 dark:text-gray-400">Saturday: 10AM - 4PM</p>
                  </div>
                </motion.div>
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl mb-8 lg:mb-0"
              >
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Interactive Map</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column - Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-xl">
                  <h2 className="text-3xl font-light mb-6">{dictionary.formTitle}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">{dictionary.formSubtitle}</p>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm text-gray-600 dark:text-gray-400">
                            {dictionary.nameLabel || "Name"}
                          </label>
                          <Input
                            id="name"
                            placeholder={dictionary.namePlaceholder}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus-visible:ring-1 focus-visible:ring-teal-500 focus-visible:border-teal-500"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-400">
                            {dictionary.emailLabel || "Email"}
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={dictionary.emailPlaceholder}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus-visible:ring-1 focus-visible:ring-teal-500 focus-visible:border-teal-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm text-gray-600 dark:text-gray-400">
                          {dictionary.subjectLabel || "Subject"}
                        </label>
                        <Input
                          id="subject"
                          placeholder={dictionary.subjectPlaceholder || "What is this regarding?"}
                          className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus-visible:ring-1 focus-visible:ring-teal-500 focus-visible:border-teal-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm text-gray-600 dark:text-gray-400">
                          {dictionary.messageLabel || "Message"}
                        </label>
                        <Textarea
                          id="message"
                          placeholder={dictionary.messagePlaceholder}
                          rows={5}
                          className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus-visible:ring-1 focus-visible:ring-teal-500 focus-visible:border-teal-500 resize-none"
                          required
                        />
                      </div>

                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-lg px-8 py-3 h-auto font-medium"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              {dictionary.submittingButton || "Sending..."}
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              {dictionary.submitButton}
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-lg p-8 text-center"
                    >
                      <CheckCircle2 className="h-16 w-16 text-teal-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-medium text-teal-700 dark:text-teal-300 mb-2">
                        {dictionary.thankYouTitle || "Thank You!"}
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400">
                        {dictionary.thankYouMessage ||
                          "Your message has been sent successfully. We'll get back to you as soon as possible."}
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 bg-white dark:bg-gray-800 text-teal-500 border border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                      >
                        {dictionary.sendAnotherButton || "Send Another Message"}
                      </Button>
                    </motion.div>
                  )}

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full -ml-10 -mb-10"></div>
                </div>
              </div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 text-center"
              >
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
                  {dictionary.trustedBy || "Trusted by homeowners and businesses across"}
                </p>
                <div className="flex justify-center space-x-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded opacity-50"></div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
