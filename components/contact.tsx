"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact({ dictionary }: { dictionary: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light mb-4">{dictionary.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{dictionary.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-black rounded-lg blur opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-lg p-8 shadow-xl">
                <h3 className="text-2xl font-light mb-6">{dictionary.formTitle}</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Input
                      id="name"
                      placeholder={dictionary.namePlaceholder}
                      className="border-0 border-b border-gray-200 dark:border-gray-700 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder={dictionary.emailPlaceholder}
                      className="border-0 border-b border-gray-200 dark:border-gray-700 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Textarea
                      id="message"
                      placeholder={dictionary.messagePlaceholder}
                      rows={5}
                      className="border-0 border-b border-gray-200 dark:border-gray-700 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black resize-none"
                    />
                  </div>

                  <div className="relative inline-block group">
                    <div className="absolute -inset-0.5 bg-black rounded opacity-70 group-hover:opacity-100 blur transition duration-200"></div>
                    <button className="relative px-8 py-3 bg-white dark:bg-black rounded text-black dark:text-white font-medium">
                      {dictionary.submitButton}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-6">{dictionary.contactUs}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {dictionary.contactText ||
                    "Have questions or ready to start your solar journey? Our team is here to help you every step of the way."}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">{dictionary.phone}</h4>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">{dictionary.email}</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@solarpro-energy.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">{dictionary.address}</h4>
                    <p className="text-gray-600 dark:text-gray-300">123 Solar Street, Sunshine City</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
