"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote, User, Home, Building, MapPin } from "lucide-react"
import Image from "next/image"

export default function Testimonials({ dictionary }: { dictionary: any }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const totalTestimonials = dictionary.items.length

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalTestimonials)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay, totalTestimonials])

  const nextTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % totalTestimonials)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials)
  }

  const goToTestimonial = (index: number) => {
    setAutoplay(false)
    setActiveIndex(index)
  }

  // Client types with corresponding icons
  const clientTypes = {
    Homeowner: <Home className="h-4 w-4" />,
    "Business Owner": <Building className="h-4 w-4" />,
    "Property Developer": <Building className="h-4 w-4" />,
  }

  // Sample avatar images - in a real app, these would come from your data
  const avatars = ["/images/testimonial-1.png", "/images/testimonial-2.png", "/images/testimonial-3.png"]

  // Sample background images - in a real app, these would come from your data
  const backgrounds = ["/images/testimonial-bg-1.png", "/images/testimonial-bg-2.png", "/images/testimonial-bg-3.png"]

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl"></div>

        {/* Large quote mark decoration */}
        <div className="absolute top-20 left-20 text-gray-300/5 dark:text-gray-600/5 transform -rotate-12">
          <Quote className="h-64 w-64" />
        </div>
        <div className="absolute bottom-20 right-20 text-gray-300/5 dark:text-gray-600/5 transform rotate-12">
          <Quote className="h-64 w-64" />
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light mb-6">{dictionary.title || "What Our Clients Say"}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {dictionary.subtitle || "Hear from those who have already made the switch to solar energy"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Testimonial content */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {dictionary.items.map(
                (testimonial: any, index: number) =>
                  activeIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      {/* Testimonial card */}
                      <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl relative z-10 overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#smallGrid)" />
                          </svg>
                        </div>

                        {/* Quote icon */}
                        <div className="absolute top-8 right-8 text-gray-300/20 dark:text-gray-500/20">
                          <Quote className="h-16 w-16" />
                        </div>

                        {/* Rating stars */}
                        <div className="flex mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 text-gray-700 fill-gray-700 dark:text-gray-300 dark:fill-gray-300" />
                          ))}
                        </div>

                        {/* Quote text */}
                        <blockquote className="text-2xl italic mb-8 text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Client info */}
                        <div className="flex items-center">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                            <Image
                              src={avatars[index % avatars.length] || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <h4 className="text-xl font-medium">{testimonial.name}</h4>
                            <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                              <span className="flex items-center">
                                {clientTypes[testimonial.title as keyof typeof clientTypes] || (
                                  <User className="h-4 w-4" />
                                )}
                                <span className="ml-2">{testimonial.title}</span>
                              </span>
                              {testimonial.location && (
                                <span className="flex items-center ml-4">
                                  <MapPin className="h-4 w-4" />
                                  <span className="ml-1">{testimonial.location}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-gray-300/10 to-gray-500/10 rounded-full -ml-12 -mt-12 z-0"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-300/10 to-gray-500/10 rounded-full -mr-16 -mb-16 z-0"></div>
                      </div>

                      {/* Project details tag */}
                      {testimonial.project && (
                        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-gray-700 to-black text-white px-6 py-3 rounded-full shadow-lg z-20">
                          {testimonial.project}
                        </div>
                      )}
                    </motion.div>
                  ),
              )}
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="flex justify-center mt-10 space-x-3">
              {dictionary.items.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-gray-700 to-black scale-125 shadow-md"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Success Stories */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <AnimatePresence mode="wait">
                {dictionary.items.map(
                  (testimonial: any, index: number) =>
                    activeIndex === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={backgrounds[index % backgrounds.length] || "/placeholder.svg"}
                          alt="Solar installation"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-gray-900/60 to-gray-800/30"></div>

                        {/* Success story content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">

                          <h3 className="text-3xl font-light mb-3">Success Stories</h3>
                          <p className="text-white/90 text-lg mb-6">Real results from our satisfied customers</p>

                          {testimonial.results && (
                            <div className="grid grid-cols-2 gap-6 mt-2">
                              {testimonial.results.map((result: any, i: number) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                  <div className="text-3xl font-light text-white mb-1">{result.value}</div>
                                  <div className="text-white/80 text-sm">{result.label}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-20">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors pointer-events-auto transform -translate-x-1/2 lg:translate-x-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors pointer-events-auto transform translate-x-1/2 lg:translate-x-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
