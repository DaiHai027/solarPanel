"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, Users, MapPin, Building, GraduationCap, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import JobApplicationModal from "@/components/job-application-modal"

export default function CareersPage({ dictionary, lang }: { dictionary: any; lang: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Translations
  const translations = {
    careers: lang === "es" ? "Carreras" : "Careers",
    joinOurTeam: lang === "es" ? "Únete a Nuestro Equipo" : "Join Our Team",
    subtitle:
      lang === "es"
        ? "Estamos buscando personas talentosas que compartan nuestra pasión por la energía renovable"
        : "We're looking for talented individuals who share our passion for renewable energy",
    whyJoinUs: lang === "es" ? "Por Qué Unirse a Nosotros" : "Why Join Us",
    benefits: lang === "es" ? "Beneficios" : "Benefits",
    openPositions: lang === "es" ? "Posiciones Abiertas" : "Open Positions",
    noOpenings:
      lang === "es"
        ? "Actualmente no hay posiciones abiertas. Por favor, vuelva a consultar más tarde."
        : "There are currently no open positions. Please check back later.",
    applyNow: lang === "es" ? "Aplicar Ahora" : "Apply Now",
    location: lang === "es" ? "Ubicación" : "Location",
    type: lang === "es" ? "Tipo" : "Type",
    fullTime: lang === "es" ? "Tiempo Completo" : "Full Time",
    partTime: lang === "es" ? "Tiempo Parcial" : "Part Time",
    contract: lang === "es" ? "Contrato" : "Contract",
    remote: lang === "es" ? "Remoto" : "Remote",
    hybrid: lang === "es" ? "Híbrido" : "Hybrid",
    onsite: lang === "es" ? "Presencial" : "Onsite",
    requirements: lang === "es" ? "Requisitos" : "Requirements",
    responsibilities: lang === "es" ? "Responsabilidades" : "Responsibilities",
    contactUs: lang === "es" ? "Contáctenos" : "Contact Us",
    spontaneousApplication:
      lang === "es"
        ? "¿No ve una posición adecuada? Envíenos una solicitud espontánea."
        : "Don't see a suitable position? Send us a spontaneous application.",
  }

  // Sample benefits
  const benefits = [
    {
      icon: <Leaf className="h-6 w-6 text-teal-500" />,
      title: lang === "es" ? "Impacto Ambiental" : "Environmental Impact",
      description:
        lang === "es"
          ? "Trabaje en una empresa que está haciendo una diferencia real para el planeta"
          : "Work at a company that's making a real difference for the planet",
    },
    {
      icon: <Users className="h-6 w-6 text-teal-500" />,
      title: lang === "es" ? "Cultura Colaborativa" : "Collaborative Culture",
      description:
        lang === "es"
          ? "Forme parte de un equipo diverso y apasionado que valora la innovación"
          : "Be part of a diverse, passionate team that values innovation",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-teal-500" />,
      title: lang === "es" ? "Desarrollo Profesional" : "Professional Development",
      description:
        lang === "es"
          ? "Oportunidades continuas de aprendizaje y crecimiento profesional"
          : "Continuous learning opportunities and professional growth",
    },
    {
      icon: <Building className="h-6 w-6 text-teal-500" />,
      title: lang === "es" ? "Beneficios Competitivos" : "Competitive Benefits",
      description:
        lang === "es"
          ? "Seguro médico, plan de pensiones y más para apoyar su bienestar"
          : "Health insurance, retirement plan, and more to support your wellbeing",
    },
  ]

  // Sample job openings
  const jobOpenings = [
    {
      title: lang === "es" ? "Ingeniero/a de Instalación Solar" : "Solar Installation Engineer",
      location: lang === "es" ? "Ciudad Soleada" : "Sunshine City",
      type: translations.fullTime,
      workMode: translations.onsite,
      description:
        lang === "es"
          ? "Buscamos un ingeniero de instalación solar experimentado para unirse a nuestro equipo de instalación. El candidato ideal tendrá experiencia en el diseño e instalación de sistemas solares residenciales y comerciales."
          : "We're looking for an experienced Solar Installation Engineer to join our installation team. The ideal candidate will have experience in designing and installing residential and commercial solar systems.",
      requirements: [
        lang === "es"
          ? "Licenciatura en Ingeniería Eléctrica o campo relacionado"
          : "Bachelor's degree in Electrical Engineering or related field",
        lang === "es"
          ? "Mínimo 3 años de experiencia en instalación solar"
          : "Minimum 3 years of experience in solar installation",
        lang === "es"
          ? "Conocimiento de códigos eléctricos y mejores prácticas"
          : "Knowledge of electrical codes and best practices",
        lang === "es"
          ? "Excelentes habilidades de comunicación y trabajo en equipo"
          : "Excellent communication and teamwork skills",
      ],
      responsibilities: [
        lang === "es"
          ? "Diseñar e instalar sistemas solares para clientes residenciales y comerciales"
          : "Design and install solar systems for residential and commercial clients",
        lang === "es"
          ? "Realizar evaluaciones de sitios y análisis de sombras"
          : "Perform site assessments and shade analysis",
        lang === "es"
          ? "Garantizar el cumplimiento de todos los códigos y regulaciones de seguridad"
          : "Ensure compliance with all safety codes and regulations",
        lang === "es"
          ? "Proporcionar soporte técnico y solución de problemas"
          : "Provide technical support and troubleshooting",
      ],
    },
    {
      title: lang === "es" ? "Especialista en Ventas Solares" : "Solar Sales Specialist",
      location: lang === "es" ? "Remoto" : "Remote",
      type: translations.fullTime,
      workMode: translations.remote,
      description:
        lang === "es"
          ? "Estamos buscando un Especialista en Ventas Solares entusiasta para educar a los clientes sobre los beneficios de la energía solar y ayudarles a encontrar la solución adecuada para sus necesidades."
          : "We're looking for an enthusiastic Solar Sales Specialist to educate customers about the benefits of solar energy and help them find the right solution for their needs.",
      requirements: [
        lang === "es"
          ? "Experiencia comprobada en ventas, preferiblemente en energía renovable"
          : "Proven sales experience, preferably in renewable energy",
        lang === "es"
          ? "Excelentes habilidades de comunicación y presentación"
          : "Excellent communication and presentation skills",
        lang === "es"
          ? "Capacidad para explicar conceptos técnicos de manera sencilla"
          : "Ability to explain technical concepts in simple terms",
        lang === "es" ? "Orientado a objetivos y motivado" : "Goal-oriented and self-motivated",
      ],
      responsibilities: [
        lang === "es" ? "Generar y calificar leads de ventas" : "Generate and qualify sales leads",
        lang === "es"
          ? "Realizar consultas y evaluaciones de energía solar"
          : "Conduct solar energy consultations and assessments",
        lang === "es"
          ? "Desarrollar propuestas personalizadas para clientes"
          : "Develop customized proposals for clients",
        lang === "es"
          ? "Mantener relaciones con los clientes y proporcionar seguimiento"
          : "Maintain client relationships and provide follow-up",
      ],
    },
    {
      title: lang === "es" ? "Técnico/a de Mantenimiento Solar" : "Solar Maintenance Technician",
      location: lang === "es" ? "Valle Verde" : "Green Valley",
      type: translations.fullTime,
      workMode: translations.hybrid,
      description:
        lang === "es"
          ? "Buscamos un Técnico de Mantenimiento Solar para garantizar el rendimiento óptimo de los sistemas solares instalados mediante inspecciones regulares, mantenimiento preventivo y reparaciones."
          : "We're seeking a Solar Maintenance Technician to ensure optimal performance of installed solar systems through regular inspections, preventative maintenance, and repairs.",
      requirements: [
        lang === "es"
          ? "Certificación técnica en electricidad o energía solar"
          : "Technical certification in electricity or solar energy",
        lang === "es"
          ? "Experiencia en mantenimiento y reparación de sistemas solares"
          : "Experience in maintaining and repairing solar systems",
        lang === "es"
          ? "Conocimiento de inversores, baterías y componentes solares"
          : "Knowledge of inverters, batteries, and solar components",
        lang === "es" ? "Licencia de conducir válida" : "Valid driver's license",
      ],
      responsibilities: [
        lang === "es"
          ? "Realizar inspecciones y mantenimiento preventivo de sistemas solares"
          : "Perform inspections and preventative maintenance of solar systems",
        lang === "es"
          ? "Diagnosticar y reparar problemas en sistemas solares"
          : "Diagnose and repair issues in solar systems",
        lang === "es"
          ? "Documentar el trabajo realizado y mantener registros precisos"
          : "Document work performed and maintain accurate records",
        lang === "es"
          ? "Proporcionar recomendaciones para mejorar el rendimiento del sistema"
          : "Provide recommendations for improving system performance",
      ],
    },
  ]

  const handleApplyNow = (job: any) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedJob(null)
  }

  return (
    <main ref={ref} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/team-working.jpg" alt="Solar team working" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/80"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">{translations.careers}</h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">{translations.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-6">{translations.whyJoinUs}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {lang === "es"
                ? "En SolarPro, estamos construyendo el futuro de la energía limpia. Únase a nosotros y sea parte de una misión que importa."
                : "At SolarPro, we're building the future of clean energy. Join us and be part of a mission that matters."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-6">{translations.openPositions}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {lang === "es"
                ? "Explore nuestras oportunidades actuales y encuentre su próximo desafío profesional."
                : "Explore our current opportunities and find your next professional challenge."}
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-medium mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-teal-500" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1 text-teal-500" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1 text-teal-500" />
                          <span>{job.workMode}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="mt-4 md:mt-0 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white"
                      onClick={() => handleApplyNow(job)}
                    >
                      {translations.applyNow}
                    </Button>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-medium mb-3 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-teal-500" />
                        {translations.requirements}
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-2 mt-0.5">
                              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            </div>
                            <span className="text-gray-600 dark:text-gray-400">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-3 flex items-center">
                        <Briefcase className="h-5 w-5 mr-2 text-teal-500" />
                        {translations.responsibilities}
                      </h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-2 mt-0.5">
                              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            </div>
                            <span className="text-gray-600 dark:text-gray-400">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Spontaneous Application CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl p-10 max-w-3xl mx-auto shadow-lg">
              <h3 className="text-2xl font-medium mb-4">{translations.spontaneousApplication}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {lang === "es"
                  ? "Siempre estamos interesados en conocer a profesionales talentosos. Envíenos su currículum y le contactaremos cuando surja una oportunidad adecuada."
                  : "We're always interested in meeting talented professionals. Send us your resume and we'll contact you when a suitable opportunity arises."}
              </p>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <span className="mr-2">{translations.contactUs}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Application Modal */}
      {selectedJob && <JobApplicationModal job={selectedJob} isOpen={isModalOpen} onClose={closeModal} lang={lang} />}
    </main>
  )
}
