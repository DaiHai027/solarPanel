"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface FeaturedProjectCardProps {
  project: {
    id: number
    title: string
    location: string
    year: string
    category: string
    description: string
  }
  index: number
  isInView: boolean
  lang: string
  dictionary: any
}

export default function FeaturedProjectCard({ project, index, isInView, lang, dictionary }: FeaturedProjectCardProps) {
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

  // Get category label
  const getCategoryLabel = (category: string) => {
    if (category === "residential") {
      return dictionary.projects?.categories?.residential || "Residential"
    } else if (category === "commercial") {
      return dictionary.projects?.categories?.commercial || "Commercial"
    } else {
      return dictionary.projects?.categories?.community || "Community"
    }
  }

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

        <Link
          href={`/${lang}/projects/${project.id}`}
          className="inline-flex items-center text-gray-700 hover:text-black transition-colors"
        >
          <span className="mr-2">{dictionary.projects?.viewDetails || "View details"}</span>
          <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Category badge */}
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-white/80 backdrop-blur-sm text-teal-800">
        {getCategoryLabel(project.category)}
      </div>
    </motion.div>
  )
}
