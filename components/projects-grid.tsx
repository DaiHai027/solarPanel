"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import ProjectCard from "@/components/project-card"

// Sample projects data
const projectsData = {
  en: [
    {
      id: 1,
      title: "Residential Solar Installation",
      location: "Sunshine City",
      year: "2023",
      category: "residential",
      description: "A 10kW solar system installation for a modern family home, providing 90% of their energy needs.",
    },
    {
      id: 2,
      title: "Commercial Solar Farm",
      location: "Green Valley",
      year: "2022",
      category: "commercial",
      description:
        "A 500kW commercial installation for a manufacturing facility, reducing their carbon footprint by 60%.",
    },
    {
      id: 3,
      title: "Industrial Energy Solution",
      location: "Tech Park",
      year: "2023",
      category: "commercial",
      description: "An integrated solar and battery storage solution for a large industrial complex.",
    },
    {
      id: 4,
      title: "Community Solar Project",
      location: "Eco Village",
      year: "2021",
      category: "community",
      description: "A shared solar installation serving 50 households in a progressive community development.",
    },
    {
      id: 5,
      title: "Luxury Home Installation",
      location: "Coastal Heights",
      year: "2023",
      category: "residential",
      description: "A premium solar and home battery system for a luxury beachfront property.",
    },
    {
      id: 6,
      title: "School Campus Solar",
      location: "Education District",
      year: "2022",
      category: "community",
      description: "A solar installation across multiple buildings of a school campus, with educational components.",
    },
  ],
  es: [
    {
      id: 1,
      title: "Instalación Solar Residencial",
      location: "Ciudad Soleada",
      year: "2023",
      category: "residential",
      description:
        "Una instalación solar de 10kW para una casa familiar moderna, proporcionando el 90% de sus necesidades energéticas.",
    },
    {
      id: 2,
      title: "Granja Solar Comercial",
      location: "Valle Verde",
      year: "2022",
      category: "commercial",
      description:
        "Una instalación comercial de 500kW para una planta de fabricación, reduciendo su huella de carbono en un 60%.",
    },
    {
      id: 3,
      title: "Solución Energética Industrial",
      location: "Parque Tecnológico",
      year: "2023",
      category: "commercial",
      description:
        "Una solución integrada de energía solar y almacenamiento de baterías para un gran complejo industrial.",
    },
    {
      id: 4,
      title: "Proyecto Solar Comunitario",
      location: "Eco Aldea",
      year: "2021",
      category: "community",
      description: "Una instalación solar compartida que sirve a 50 hogares en un desarrollo comunitario progresivo.",
    },
    {
      id: 5,
      title: "Instalación en Casa de Lujo",
      location: "Alturas Costeras",
      year: "2023",
      category: "residential",
      description: "Un sistema premium de energía solar y batería doméstica para una propiedad de lujo frente al mar.",
    },
    {
      id: 6,
      title: "Solar para Campus Escolar",
      location: "Distrito Educativo",
      year: "2022",
      category: "community",
      description: "Una instalación solar en varios edificios de un campus escolar, con componentes educativos.",
    },
  ],
}

export default function ProjectsGrid({ lang }: { lang: string }) {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = projectsData[lang as keyof typeof projectsData] || projectsData.en

  // Update the filtering logic to include both category and search term
  const filteredProjects = projects.filter((project) => {
    // First filter by category
    const categoryMatch = filter === "all" || project.category === filter

    // Then filter by search term if one exists
    if (searchTerm.trim() === "") {
      return categoryMatch
    }

    // Search in title, location, and description (case insensitive)
    const search = searchTerm.toLowerCase()
    const titleMatch = project.title.toLowerCase().includes(search)
    const locationMatch = project.location.toLowerCase().includes(search)
    const descriptionMatch = project.description.toLowerCase().includes(search)

    return categoryMatch && (titleMatch || locationMatch || descriptionMatch)
  })

  const categories = [
    { id: "all", label: lang === "es" ? "Todos" : "All" },
    { id: "residential", label: lang === "es" ? "Residencial" : "Residential" },
    { id: "commercial", label: lang === "es" ? "Comercial" : "Commercial" },
    { id: "community", label: lang === "es" ? "Comunitario" : "Community" },
  ]

  return (
    <section id="projects" ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder={lang === "es" ? "Buscar proyectos..." : "Search projects..."}
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    filter === category.id
                      ? "bg-gradient-to-r from-gray-800 to-black text-white"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
                lang={lang}
                categoryLabel={categories.find((c) => c.id === project.category)?.label || ""}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {lang === "es"
                ? searchTerm
                  ? `No se encontraron proyectos para "${searchTerm}".`
                  : "No se encontraron proyectos en esta categoría."
                : searchTerm
                  ? `No projects found for "${searchTerm}".`
                  : "No projects found in this category."}
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-black rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></span>
            <Link
              href={`/${lang}/contact`}
              className="relative px-8 py-4 bg-white dark:bg-gray-900 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 inline-flex items-center"
            >
              <span className="mr-2">{lang === "es" ? "Discutir tu proyecto" : "Discuss your project"}</span>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
