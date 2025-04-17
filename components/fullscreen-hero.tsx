"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function FullscreenHero({ dictionary }: { dictionary: any }) {
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section 
      className="relative h-screen w-full flex items-center overflow-hidden"
    >
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full">
          <div className="w-full h-full">
            <Image 
              src="/images/solar-city-view.png" 
              alt="Solar Panels"
              fill
              priority
              style={{
                objectFit: "cover",
                transform: `scale(1.1) translateY(${scrollY * 0.15}px)`,
                transition: "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
              }}
            />
          </div>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-100/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div
        className="container mx-auto px-8 relative z-10"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          opacity: 1 - scrollY * 0.002,
          transition: "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">{dictionary.title}</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">{dictionary.subtitle}</p>
        </motion.div>

        <div className="h-12"></div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{
              y: [0, 12, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
