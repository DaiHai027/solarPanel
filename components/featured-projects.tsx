"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import FeaturedProjectCard from "@/components/featured-project-card"

export default function FeaturedProjects({ dictionary, lang }: { dictionary: any; lang: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: dictionary.projects?.featured?.[0]?.title || "Residential Solar Installation",
      location: dictionary.projects?.featured?.[0]?.location || "Sunshine City",
      year: "2023",
      category: "residential",
      description:
        dictionary.projects?.featured?.[0]?.description ||
        "A 10kW solar system installation for a modern family home, providing 90% of their energy needs.",
    },
    {
      id: 2,
      title: dictionary.projects?.featured?.[1]?.title || "Commercial Solar Farm",
      location: dictionary.projects?.featured?.[1]?.location || "Green Valley",
      year: "2022",
      category: "commercial",
      description:
        dictionary.projects?.featured?.[1]?.description ||
        "A 500kW commercial installation for a manufacturing facility, reducing their carbon footprint by 60%.",
    },
    {
      id: 3,
      title: dictionary.projects?.featured?.[2]?.title || "Community Solar Project",
      location: dictionary.projects?.featured?.[2]?.location || "Eco Village",
      year: "2021",
      category: "community",
      description:
        dictionary.projects?.featured?.[2]?.description ||
        "A shared solar installation serving 50 households in a progressive community development.",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">{dictionary.projects?.title || "Featured Projects"}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {dictionary.projects?.subtitle ||
              "Explore some of our recent solar installations and see how we're helping communities transition to clean energy."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              lang={lang}
              dictionary={dictionary}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-black rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></span>
            <Link
              href={`/${lang}/projects`}
              className="relative px-8 py-4 bg-white dark:bg-gray-900 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 inline-flex items-center"
            >
              <span className="mr-2">{dictionary.projects?.viewAllProjects || "View all projects"}</span>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
