"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Zap, Leaf, DollarSign, Award, User, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectDetailProps {
  project: any
  dictionary: any
  lang: string
}

export default function ProjectDetail({ project, dictionary, lang }: ProjectDetailProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Map category to image path
  const getImagePath = (category: string, id: number) => {
    switch (category) {
      case "residential":
        return `/images/${id === 5 ? "luxury-home.png" : "residential-solar.png"}`
      case "commercial":
        return `/images/${id === 3 ? "industrial-solar.png" : "commercial-solar.png"}`
      case "community":
        return `/images/${id === 6 ? "school-solar.png" : "community-solar.png"}`
      default:
        return "/images/residential-solar.png"
    }
  }

  const imagePath = getImagePath(project.category, project.id)

  // Translations
  const translations = {
    backToProjects: lang === "es" ? "Volver a proyectos" : "Back to projects",
    projectDetails: lang === "es" ? "Detalles del proyecto" : "Project details",
    completionDate: lang === "es" ? "Fecha de finalización" : "Completion date",
    capacity: lang === "es" ? "Capacidad" : "Capacity",
    panelsUsed: lang === "es" ? "Paneles utilizados" : "Panels used",
    inverterType: lang === "es" ? "Tipo de inversor" : "Inverter type",
    annualProduction: lang === "es" ? "Producción anual" : "Annual production",
    co2Reduction: lang === "es" ? "Reducción de CO₂" : "CO₂ reduction",
    roi: lang === "es" ? "Retorno de inversión" : "Return on investment",
    clientFeedback: lang === "es" ? "Comentarios del cliente" : "Client feedback",
    contactUs: lang === "es" ? "Contáctenos" : "Contact us",
    discussProject: lang === "es" ? "Discutir un proyecto similar" : "Discuss a similar project",
  }

  return (
    <main ref={ref} className="py-12 md:py-20">
      <div className="container mx-auto px-8">
        {/* Back button */}
        <Link
          href={`/${lang}/projects`}
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>{translations.backToProjects}</span>
        </Link>

        {/* Project header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-light mb-6">{project.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1 text-gray-700" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-1 text-gray-700" />
                <span>{project.year}</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image src={imagePath || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </motion.div>
        </div>

        {/* Project content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {project.fullDescription.split("\n").map((paragraph: string, i: number) => (
                <p key={i}>{paragraph.trim()}</p>
              ))}
            </div>

            {/* Client testimonial */}
            {project.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 relative"
              >
                <div className="absolute top-6 left-6 text-gray-300/20 dark:text-gray-500/20">
                  <Quote className="h-16 w-16" />
                </div>
                <div className="relative">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-gray-700" />
                    {translations.clientFeedback}
                  </h3>
                  <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                    "{project.testimonial}"
                  </blockquote>
                  <div className="font-medium text-gray-700 dark:text-gray-400">— {project.clientName}</div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Project details sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 sticky top-24">
              <h3 className="text-xl font-medium mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                {translations.projectDetails}
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                    <Calendar className="h-4 w-4 mr-2 text-gray-700" />
                    <span className="text-sm">{translations.completionDate}</span>
                  </div>
                  <div className="font-medium">{project.completionDate}</div>
                </div>

                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                    <Zap className="h-4 w-4 mr-2 text-gray-700" />
                    <span className="text-sm">{translations.capacity}</span>
                  </div>
                  <div className="font-medium">{project.capacity}</div>
                </div>

                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                    <Award className="h-4 w-4 mr-2 text-gray-700" />
                    <span className="text-sm">{translations.panelsUsed}</span>
                  </div>
                  <div className="font-medium">{project.panelsUsed}</div>
                </div>

                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                    <Zap className="h-4 w-4 mr-2 text-gray-700" />
                    <span className="text-sm">{translations.inverterType}</span>
                  </div>
                  <div className="font-medium">{project.inverterType}</div>
                </div>

                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                    <Zap className="h-4 w-4 mr-2 text-gray-700" />
                    <span className="text-sm">{translations.annualProduction}</span>
                  </div>
                  <div className="font-medium">{project.annualProduction}</div>
                </div>

                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                    <Leaf className="h-4 w-4 mr-2 text-gray-700" />
                    <span className="text-sm">{translations.co2Reduction}</span>
                  </div>
                  <div className="font-medium">{project.co2Reduction}</div>
                </div>

                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                    <DollarSign className="h-4 w-4 mr-2 text-gray-700" />
                    <span className="text-sm">{translations.roi}</span>
                  </div>
                  <div className="font-medium">{project.roi}</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href={`/${lang}/contact`}
                  className="w-full bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-black text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
                >
                  {translations.discussProject}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related projects section could be added here */}
      </div>
    </main>
  )
}
