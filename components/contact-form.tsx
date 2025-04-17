"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2 } from "lucide-react"

export default function ContactForm({ dictionary }: { dictionary: any }) {
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
    <motion.div
      id="contact-form"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -inset-1 bg-black rounded-2xl blur opacity-20"></div>
      <div className="relative bg-white dark:bg-gray-900 rounded-xl p-8 md:p-10 shadow-xl">
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
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus-visible:ring-1 focus-visible:ring-black focus-visible:border-black"
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
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus-visible:ring-1 focus-visible:ring-black focus-visible:border-black"
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
                className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus-visible:ring-1 focus-visible:ring-black focus-visible:border-black"
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
                className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus-visible:ring-1 focus-visible:ring-black focus-visible:border-black resize-none"
                required
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-black hover:bg-gray-900 text-white rounded-lg px-8 py-3 h-auto font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {dictionary.submittingButton || "Sending..."}
                  </>
                ) : (
                  dictionary.submitButton
                )}
              </Button>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-100 dark:bg-gray-900/20 rounded-lg p-8 text-center"
          >
            <CheckCircle2 className="h-16 w-16 text-black dark:text-white mx-auto mb-4" />
            <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-300 mb-2">
              {dictionary.thankYouTitle || "Thank You!"}
            </h3>
            <p className="text-gray-700 dark:text-gray-400">
              {dictionary.thankYouMessage ||
                "Your message has been sent successfully. We'll get back to you as soon as possible."}
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 bg-white dark:bg-gray-800 text-black dark:text-white border border-black hover:bg-gray-50 dark:hover:bg-gray-900/20"
            >
              {dictionary.sendAnotherButton || "Send Another Message"}
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
