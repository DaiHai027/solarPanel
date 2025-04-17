"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sun, Home, Wrench, LineChart, ArrowRight } from "lucide-react"
import ConsultationModal from "@/components/consultation-modal"

export default function Services({ dictionary }: { dictionary: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const lang = dictionary.lang || "en"

  const serviceIcons = [
    <Sun key="sun" className="h-8 w-8 text-black" />,
    <Home key="home" className="h-8 w-8 text-black" />,
    <Wrench key="wrench" className="h-8 w-8 text-black" />,
    <LineChart key="chart" className="h-8 w-8 text-black" />,
  ]

  // Translations
  const translations = {
    getConsultation: lang === "es" ? "Obtener una consulta gratuita" : "Get a free consultation",
  }

  return (
    <section id="services" ref={ref} className="py-24 bg-white dark:bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-black">{dictionary.title}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{dictionary.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {dictionary.items.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 bg-gray-50"
            >
              {/* Background with subtle pattern */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-white/90"></div>
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 bg-white shadow-sm rounded-lg w-fit">
                    {serviceIcons[index % serviceIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-black mb-1">{service.title}</h3>
                    <p className="text-gray-700">{service.subtitle}</p>
                  </div>
                </div>

                <div className="h-px w-full bg-gray-200 my-6"></div>

                <p className="text-gray-800 mb-8 leading-relaxed">{service.description}</p>

                <button
                  onClick={() => (window.location.href = `#consultation-modal-${index}`)}
                  className="mt-auto inline-flex items-center text-black group-hover:text-gray-700 transition-colors duration-300 font-medium"
                >
                  <span className="mr-2">{translations.getConsultation}</span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-300/30 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-300/30 rounded-full -ml-12 -mb-12"></div>
            </motion.div>
          ))}
        </div>
      </div>
      {dictionary.items.map((service: any, index: number) => (
        <ConsultationModal key={`modal-${index}`} service={service} id={`consultation-modal-${index}`} lang={lang} />
      ))}
    </section>
  )
}
