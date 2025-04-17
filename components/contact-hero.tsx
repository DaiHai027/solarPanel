"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactHero({ dictionary }: { dictionary: any }) {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1920&width=1080')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-blue-900/80"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">{dictionary.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl">{dictionary.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center space-x-3 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <Phone className="h-5 w-5 text-teal-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <Mail className="h-5 w-5 text-teal-400" />
              <span>info@solarpro-energy.com</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <MapPin className="h-5 w-5 text-teal-400" />
              <span>123 Solar Street, Sunshine City</span>
            </div>
          </motion.div>

          <div className="h-12"></div>
        </div>
      </div>
    </section>
  )
}
