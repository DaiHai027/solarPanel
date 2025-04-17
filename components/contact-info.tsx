"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Globe, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function ContactInfo({ dictionary }: { dictionary: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactItems = [
    {
      icon: <Phone className="h-5 w-5 text-teal-500" />,
      title: dictionary.phone || "Phone",
      content: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      actionText: dictionary.callNow || "Call now",
    },
    {
      icon: <Mail className="h-5 w-5 text-teal-500" />,
      title: dictionary.email || "Email",
      content: "info@solarpro-energy.com",
      action: "mailto:info@solarpro-energy.com",
      actionText: dictionary.sendEmail || "Send email",
    },
    {
      icon: <MapPin className="h-5 w-5 text-teal-500" />,
      title: dictionary.address || "Address",
      content: "123 Solar Street, Sunshine City",
      action: "https://maps.google.com",
      actionText: dictionary.getDirections || "Get directions",
    },
    {
      icon: <Clock className="h-5 w-5 text-teal-500" />,
      title: dictionary.hours || "Business Hours",
      content: "Monday - Friday: 9AM - 6PM",
      secondaryContent: "Saturday: 10AM - 4PM",
    },
  ]

  const socialLinks = [
    { name: "Facebook", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl font-light mb-6">{dictionary.contactUs || "Get in Touch"}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        {dictionary.contactText ||
          "Ready to harness the power of the sun? Our team of solar experts is here to answer your questions and help you find the perfect solar solution for your needs."}
      </p>

      <div className="space-y-6 mb-12">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{item.content}</p>
              {item.secondaryContent && <p className="text-gray-600 dark:text-gray-400">{item.secondaryContent}</p>}
              {item.action && (
                <Link
                  href={item.action}
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 mt-2 text-sm"
                >
                  <span>{item.actionText}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <Globe className="mr-2 h-4 w-4 text-teal-500" />
          {dictionary.followUs || "Follow Us"}
        </h3>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
