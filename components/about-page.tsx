"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Award, Leaf, Sun, Lightbulb, Shield, Globe } from "lucide-react"

interface AboutPageProps {
  dictionary: {
    title: string
    subtitle: string
    storyTitle: string
    storyText1: string
    storyText2: string
    storyText3: string
    missionTitle: string
    missionText: string
    valuesTitle: string
    values: Array<{
      title: string
      description: string
    }>
    teamTitle: string
    teamSubtitle: string
    team: Array<{
      name: string
      position: string
      bio: string
    }>
  }
  lang: string
}

export default function AboutPage({ dictionary, lang }: AboutPageProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Get translations from dictionary
  const aboutDict = dictionary || {}

  // Translations
  const translations = {
    aboutUs: lang === "es" ? "Sobre Nosotros" : "About Us",
    ourStory: lang === "es" ? "Nuestra Historia" : "Our Story",
    ourMission: lang === "es" ? "Nuestra Misión" : "Our Mission",
    ourVision: lang === "es" ? "Nuestra Visión" : "Our Vision",
    ourValues: lang === "es" ? "Nuestros Valores" : "Our Values",
    ourTeam: lang === "es" ? "Nuestro Equipo" : "Our Team",
    joinOurTeam: lang === "es" ? "Únete a Nuestro Equipo" : "Join Our Team",
    viewOpenPositions: lang === "es" ? "Ver Posiciones Abiertas" : "View Open Positions",
    contactUs: lang === "es" ? "Contáctanos" : "Contact Us",
    sustainability: lang === "es" ? "Sostenibilidad" : "Sustainability",
    innovation: lang === "es" ? "Innovación" : "Innovation",
    quality: lang === "es" ? "Calidad" : "Quality",
    integrity: lang === "es" ? "Integridad" : "Integrity",
    communityFocus: lang === "es" ? "Enfoque Comunitario" : "Community Focus",
    learnMore: lang === "es" ? "Conoce Más" : "Learn More",
    storyText1:
      lang === "es"
        ? "Fundada en 2010, SolarPro comenzó con una visión simple: transformar cómo los hogares y negocios acceden a la energía aprovechando el abundante poder del sol."
        : "Founded in 2010, SolarPro began with a simple vision: to transform how homes and businesses access energy by harnessing the abundant power of the sun.",
    storyText2:
      lang === "es"
        ? "Lo que comenzó como un pequeño equipo de ingenieros apasionados y defensores del medio ambiente se ha convertido en un proveedor líder de soluciones solares en todo el país. Nuestro viaje ha sido impulsado por la innovación, la calidad y un profundo compromiso con la sostenibilidad."
        : "What started as a small team of passionate engineers and environmental advocates has grown into a leading provider of solar solutions across the country. Our journey has been driven by innovation, quality, and a deep commitment to sustainability.",
    storyText3:
      lang === "es"
        ? "A lo largo de los años, hemos instalado miles de sistemas solares, desde techos residenciales hasta grandes conjuntos comerciales, cada uno contribuyendo a nuestra misión de crear un futuro energético más limpio y sostenible."
        : "Over the years, we've installed thousands of solar systems, from residential rooftops to large commercial arrays, each contributing to our mission of creating a cleaner, more sustainable energy future.",
    ourJourney: lang === "es" ? "Nuestro Viaje" : "Our Journey",
    journeySubtitle:
      lang === "es"
        ? "Explora los hitos clave que han dado forma al crecimiento e impacto de SolarPro a lo largo de los años."
        : "Explore the key milestones that have shaped SolarPro's growth and impact over the years.",
    missionText:
      lang === "es"
        ? "Nuestra misión es acelerar la transición del mundo hacia la energía sostenible haciendo que la energía solar sea accesible, asequible y confiable para todos. Nos esforzamos por reducir las emisiones de carbono y crear un planeta más limpio a través de soluciones solares innovadoras."
        : "Our mission is to accelerate the world's transition to sustainable energy by making solar power accessible, affordable, and reliable for everyone. We strive to reduce carbon emissions and create a cleaner planet through innovative solar solutions.",
    visionText:
      lang === "es"
        ? "Visualizamos un mundo donde la energía limpia y renovable es el estándar, no la alternativa. Un futuro donde cada hogar, negocio y comunidad es alimentado por el sol, reduciendo nuestro impacto ambiental colectivo mientras creamos una infraestructura energética más resiliente y sostenible."
        : "We envision a world where clean, renewable energy is the standard, not the alternative. A future where every home, business, and community is powered by the sun, reducing our collective environmental impact while creating a more resilient and sustainable energy infrastructure.",
    readyToJoin: lang === "es" ? "¿Listo para unirte a la revolución solar?" : "Ready to Join the Solar Revolution?",
    readyToJoinText:
      lang === "es"
        ? "Contáctanos hoy para aprender cómo SolarPro puede ayudarte a aprovechar el poder del sol y hacer la transición a energía limpia y renovable."
        : "Contact us today to learn how SolarPro can help you harness the power of the sun and transition to clean, renewable energy.",
    reduceCarbonEmissions:
      lang === "es" ? "Reducir las emisiones globales de carbono" : "Reduce global carbon emissions",
    makeCleanEnergy:
      lang === "es" ? "Hacer que la energía limpia sea asequible para todos" : "Make clean energy affordable for all",
    promoteEnergyIndependence: lang === "es" ? "Promover la independencia energética" : "Promote energy independence",
    renewableEnergyFuture: lang === "es" ? "Futuro de energía 100% renovable" : "100% renewable energy future",
    solarOnEveryRooftop: lang === "es" ? "Energía solar en cada techo adecuado" : "Solar on every suitable rooftop",
    decentralizedEnergy: lang === "es" ? "Producción de energía descentralizada" : "Decentralized energy production",
  }

  // Company milestones
  const milestones = [
    {
      year: "2010",
      title: lang === "es" ? "Fundación de SolarPro" : "SolarPro Founded",
      description:
        lang === "es"
          ? "SolarPro fue fundada con la misión de hacer que la energía solar sea accesible para todos."
          : "SolarPro was founded with the mission of making solar energy accessible to everyone.",
    },
    {
      year: "2013",
      title: lang === "es" ? "Expansión Regional" : "Regional Expansion",
      description:
        lang === "es"
          ? "Expandimos nuestras operaciones a tres estados adicionales, llevando energía solar a más comunidades."
          : "We expanded our operations to three additional states, bringing solar energy to more communities.",
    },
    {
      year: "2016",
      title: lang === "es" ? "Innovación en Baterías" : "Battery Innovation",
      description:
        lang === "es"
          ? "Lanzamos nuestra primera solución integrada de almacenamiento de energía solar y batería."
          : "We launched our first integrated solar and battery storage solution.",
    },
    {
      year: "2019",
      title: lang === "es" ? "Programa Comunitario" : "Community Program",
      description:
        lang === "es"
          ? "Iniciamos nuestro programa de energía solar comunitaria, llevando energía limpia a vecindarios desatendidos."
          : "We initiated our community solar program, bringing clean energy to underserved neighborhoods.",
    },
    {
      year: "2022",
      title: lang === "es" ? "Hito de Sostenibilidad" : "Sustainability Milestone",
      description:
        lang === "es"
          ? "Alcanzamos la neutralidad de carbono en todas nuestras operaciones y oficinas."
          : "We achieved carbon neutrality across all our operations and offices.",
    },
  ]

  // Team members data
  const teamMembers = [
    {
      name: lang === "es" ? "Sara Johnson" : "Sarah Johnson",
      title: lang === "es" ? "Directora Ejecutiva" : "Chief Executive Officer",
      bio:
        lang === "es"
          ? "Sara tiene más de 15 años de experiencia en la industria de energía renovable y ha liderado SolarPro desde su fundación."
          : "Sarah has over 15 years of experience in the renewable energy industry and has led SolarPro since its founding.",
      image: "/images/team-1.jpg",
    },
    {
      name: "Michael Chen",
      title: lang === "es" ? "Director de Tecnología" : "Chief Technology Officer",
      bio:
        lang === "es"
          ? "Michael supervisa todas las operaciones técnicas y el desarrollo de soluciones solares innovadoras en SolarPro."
          : "Michael oversees all technical operations and the development of innovative solar solutions at SolarPro.",
      image: "/images/team-2.jpg",
    },
    {
      name: "Emma Rodriguez",
      title: lang === "es" ? "Directora de Operaciones" : "Chief Operations Officer",
      bio:
        lang === "es"
          ? "Emma garantiza que todas las instalaciones solares se completen con los más altos estándares de calidad y eficiencia."
          : "Emma ensures that all solar installations are completed to the highest standards of quality and efficiency.",
      image: "/images/team-3.jpg",
    },
    {
      name: "David Kim",
      title: lang === "es" ? "Director de Sostenibilidad" : "Chief Sustainability Officer",
      bio:
        lang === "es"
          ? "David lidera nuestras iniciativas de sostenibilidad y garantiza que nuestras prácticas comerciales sean ambientalmente responsables."
          : "David leads our sustainability initiatives and ensures our business practices are environmentally responsible.",
      image: "/images/team-4.jpg",
    },
  ]

  return (
    <main ref={ref} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/about-hero.jpg" alt="Solar panels installation" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/80"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">{translations.aboutUs}</h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              {aboutDict.missionText ||
                "At SolarPro, we believe in harnessing the power of the sun to create a sustainable future. Our mission is to make solar energy accessible, affordable, and efficient for everyone."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light mb-6">{translations.ourStory}</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">{translations.storyText1}</p>
                <p className="text-gray-700 dark:text-gray-300">{translations.storyText2}</p>
                <p className="text-gray-700 dark:text-gray-300">{translations.storyText3}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/company-history.jpg"
                  alt="SolarPro history"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-6">{translations.ourJourney}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{translations.journeySubtitle}</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-blue-500"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="w-1/2 px-8">
                    <div className={`${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="text-3xl font-light text-teal-500 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-medium mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-teal-500 left-1/2 transform -translate-x-1/2"></div>
                  </div>

                  <div className="w-1/2 px-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mb-6">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4">{translations.ourMission}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{translations.missionText}</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3 mt-0.5">
                    <Leaf className="h-3 w-3 text-teal-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{translations.reduceCarbonEmissions}</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3 mt-0.5">
                    <Leaf className="h-3 w-3 text-teal-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{translations.makeCleanEnergy}</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3 mt-0.5">
                    <Leaf className="h-3 w-3 text-teal-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{translations.promoteEnergyIndependence}</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4">{translations.ourVision}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{translations.visionText}</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3 mt-0.5">
                    <Globe className="h-3 w-3 text-teal-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{translations.renewableEnergyFuture}</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3 mt-0.5">
                    <Globe className="h-3 w-3 text-teal-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{translations.solarOnEveryRooftop}</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3 mt-0.5">
                    <Globe className="h-3 w-3 text-teal-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{translations.decentralizedEnergy}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900 to-blue-900 text-white">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-6">{translations.ourValues}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {lang === "es"
                ? "Nuestros valores fundamentales guían todo lo que hacemos, desde cómo diseñamos nuestras soluciones solares hasta cómo interactuamos con nuestros clientes y comunidades."
                : "Our core values guide everything we do, from how we design our solar solutions to how we interact with our customers and communities."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Leaf className="h-7 w-7 text-teal-300" />
              </div>
              <h3 className="text-xl font-medium mb-3">{translations.sustainability}</h3>
              <p className="text-white/80">
                {lang === "es"
                  ? "Estamos comprometidos con la gestión ambiental en todo lo que hacemos. Nuestras prácticas comerciales y soluciones están diseñadas para minimizar el impacto ambiental y maximizar la sostenibilidad."
                  : "We are committed to environmental stewardship in everything we do. Our business practices and solutions are designed to minimize environmental impact and maximize sustainability."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-teal-300" />
              </div>
              <h3 className="text-xl font-medium mb-3">{translations.innovation}</h3>
              <p className="text-white/80">
                {lang === "es"
                  ? "Continuamente ampliamos los límites de lo que es posible en la tecnología solar. Nuestro compromiso con la innovación nos impulsa a desarrollar soluciones solares más eficientes, efectivas y accesibles."
                  : "We continuously push the boundaries of what's possible in solar technology. Our commitment to innovation drives us to develop more efficient, effective, and accessible solar solutions."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-teal-300" />
              </div>
              <h3 className="text-xl font-medium mb-3">{translations.quality}</h3>
              <p className="text-white/80">
                {lang === "es"
                  ? "Nunca comprometemos la calidad. Desde los componentes que seleccionamos hasta los estándares de instalación que mantenemos, la excelencia es nuestro punto de referencia en todo lo que hacemos."
                  : "We never compromise on quality. From the components we select to the installation standards we maintain, excellence is our benchmark in everything we do."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-teal-300" />
              </div>
              <h3 className="text-xl font-medium mb-3">{translations.integrity}</h3>
              <p className="text-white/80">
                {lang === "es"
                  ? "Operamos con honestidad, transparencia y prácticas comerciales éticas. Nuestros clientes confían en nosotros porque hacemos lo correcto, incluso cuando nadie está mirando."
                  : "We operate with honesty, transparency, and ethical business practices. Our customers trust us because we do what's right, even when no one is watching."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-teal-300" />
              </div>
              <h3 className="text-xl font-medium mb-3">{translations.communityFocus}</h3>
              <p className="text-white/80">
                {lang === "es"
                  ? "Creemos en el poder de la comunidad. Nuestro trabajo se extiende más allá de las instalaciones a la educación, la defensa y las asociaciones que fortalecen las comunidades a las que servimos."
                  : "We believe in the power of community. Our work extends beyond installations to education, advocacy, and partnerships that strengthen the communities we serve."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Improved Design */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-light mb-6">{translations.ourTeam}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {lang === "es"
                ? "Conoce a las personas apasionadas detrás de SolarPro que están dedicadas a avanzar en la energía solar y la sostenibilidad."
                : "Meet the passionate individuals behind SolarPro who are dedicated to advancing solar energy and sustainability."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative"
              >
                {/* Card with hover effect */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-xl">
                  {/* Image container with overlay */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>

                    {/* Hover overlay with full bio */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                      <p className="text-white text-center">{member.bio}</p>
                    </div>
                  </div>

                  {/* Name and title positioned at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 group-hover:opacity-0">
                    <h3 className="text-2xl font-medium mb-1">{member.name}</h3>
                    <p className="text-teal-300">{member.title}</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full -z-10"></div>
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-teal-500/20 rounded-full -z-10"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl p-10 max-w-3xl mx-auto shadow-lg">
              <h3 className="text-2xl font-medium mb-4">{translations.joinOurTeam}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {lang === "es"
                  ? "Siempre estamos buscando personas talentosas que compartan nuestra pasión por la energía renovable y la sostenibilidad. Únete a nosotros en nuestra misión de crear un futuro más limpio y sostenible."
                  : "We're always looking for talented individuals who share our passion for renewable energy and sustainability. Join us in our mission to create a cleaner, more sustainable future."}
              </p>
              <Link
                href={`/careers?lang=${lang}`}
                className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <span className="mr-2">{translations.viewOpenPositions}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-light mb-6">{translations.readyToJoin}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{translations.readyToJoinText}</p>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 px-8 rounded-lg transition-colors text-lg"
            >
              <span className="mr-2">{translations.contactUs}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
