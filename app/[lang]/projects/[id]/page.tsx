import { getDictionary } from "@/lib/dictionaries"
import ProjectDetail from "@/components/project-detail"
import { notFound } from "next/navigation"

// Get project data based on ID and language
const getProjectData = (id: string, lang: string) => {
  // This would typically come from a database or API
  const projectsData = {
    en: [
      {
        id: 1,
        title: "Residential Solar Installation",
        location: "Sunshine City", 
        year: "2023",
        category: "residential",
        description: "A 10kW solar system installation for a modern family home, providing 90% of their energy needs.",
        fullDescription: `
          This residential solar installation features a 10kW system perfectly designed for a modern family home. The system includes 28 high-efficiency solar panels strategically placed to maximize sun exposure throughout the day.
          
          The installation provides approximately 90% of the home's energy needs, significantly reducing electricity bills and carbon footprint. The system includes a smart monitoring solution that allows the homeowners to track energy production and consumption in real-time through a mobile app.
          
          The project was completed in just 3 days with minimal disruption to the family's daily routine. The sleek, low-profile design of the panels complements the home's architecture while providing maximum energy efficiency.
        `,
        completionDate: "June 2023",
        capacity: "10kW",
        panelsUsed: "28 high-efficiency monocrystalline panels",
        inverterType: "SolarEdge with power optimizers",
        annualProduction: "14,000 kWh",
        co2Reduction: "9.8 tons annually",
        roi: "7 years",
        clientName: "Johnson Family",
        testimonial:
          "SolarPro transformed our home energy system. We're now saving over 70% on our electricity bills, and the installation was quick and professional. The team was knowledgeable and answered all our questions throughout the process.",
      },
      {
        id: 2,
        title: "Commercial Solar Farm",
        location: "Green Valley",
        year: "2022", 
        category: "commercial",
        description:
          "A 500kW commercial installation for a manufacturing facility, reducing their carbon footprint by 60%.",
        fullDescription: `
          This large-scale commercial solar installation provides 500kW of clean energy for a manufacturing facility in Green Valley. The project features 1,250 solar panels installed across the facility's expansive roof space and adjacent ground area.
          
          The system was designed to meet the high energy demands of manufacturing operations while significantly reducing the facility's reliance on grid electricity. Since installation, the company has reduced its carbon footprint by 60% and achieved substantial savings on energy costs.
          
          The project included a custom monitoring system that integrates with the facility's existing energy management infrastructure, allowing for optimized energy usage and detailed reporting for sustainability initiatives.
        `,
        completionDate: "November 2022",
        capacity: "500kW",
        panelsUsed: "1,250 commercial-grade bifacial panels",
        inverterType: "Multiple string inverters with monitoring",
        annualProduction: "750,000 kWh",
        co2Reduction: "525 tons annually",
        roi: "5.5 years",
        clientName: "Green Valley Manufacturing",
        testimonial:
          "As a business owner, I was concerned about the initial investment, but SolarPro provided a clear ROI plan. We're already seeing the benefits after just 6 months. The system has performed above expectations, and the energy savings have been substantial.",
      },
      {
        id: 3,
        title: "Industrial Energy Solution",
        location: "Tech Park",
        year: "2023",
        category: "commercial", 
        description: "An integrated solar and battery storage solution for a large industrial complex.",
        fullDescription: `
          This comprehensive energy solution for a large industrial complex in Tech Park combines a 750kW solar array with a 500kWh battery storage system. The installation provides both immediate energy production and critical backup power capabilities.
          
          The system was designed to address the complex's high energy demands during peak hours and ensure operational continuity during grid outages. The battery storage component allows the facility to store excess energy produced during daylight hours for use during evening operations or cloudy days.
          
          Advanced energy management software optimizes the flow between solar production, battery storage, and grid consumption, ensuring maximum efficiency and cost savings. The system has reduced the facility's energy costs by 45% and provides up to 8 hours of backup power for critical systems.
        `,
        completionDate: "March 2023",
        capacity: "750kW solar + 500kWh battery",
        panelsUsed: "1,875 high-output industrial panels",
        inverterType: "Central inverters with battery integration",
        annualProduction: "1,125,000 kWh",
        co2Reduction: "787 tons annually",
        roi: "6 years",
        clientName: "Tech Park Industries",
        testimonial:
          "The integrated solar and battery solution has transformed our energy management. We've not only reduced costs but also gained energy independence and resilience against outages. SolarPro's expertise in designing a system that meets our complex needs was impressive.",
      },
      {
        id: 4,
        title: "Community Solar Project",
        location: "Eco Village",
        year: "2021",
        category: "community",
        description: "A shared solar installation serving 50 households in a progressive community development.",
        fullDescription: `
          This innovative community solar project provides clean energy to 50 households in the Eco Village development. The 200kW shared solar array is installed on a dedicated land parcel within the community, with energy credits distributed to participating households.
          
          The project was developed using a subscription model, allowing residents to benefit from solar energy without needing to install panels on their individual homes. Each household subscribes to a portion of the array's output, receiving credits on their utility bills proportional to their share.
          
          The community-centered approach has fostered a sense of shared environmental responsibility while providing economic benefits to all participants. The project includes educational components, with real-time production displays in the community center and regular workshops on renewable energy.
        `,
        completionDate: "August 2021",
        capacity: "200kW",
        panelsUsed: "500 community-grade panels",
        inverterType: "String inverters with individual monitoring",
        annualProduction: "280,000 kWh",
        co2Reduction: "196 tons annually",
        roi: "8 years (community)",
        clientName: "Eco Village Community Association",
        testimonial:
          "Our community solar project has exceeded expectations in both energy production and community engagement. Residents appreciate the savings on their energy bills, and the educational aspects have increased awareness about renewable energy throughout our neighborhood.",
      },
      {
        id: 5,
        title: "Luxury Home Installation",
        location: "Coastal Heights",
        year: "2023",
        category: "residential",
        description: "A premium solar and home battery system for a luxury beachfront property.",
        fullDescription: `
          This premium installation for a luxury beachfront property in Coastal Heights features a 15kW solar system paired with a 20kWh home battery system. The design prioritizes both aesthetics and performance, with sleek black panels that complement the home's modern architecture.
          
          The system was custom-designed to meet the high energy demands of the luxury property, including climate control, pool heating, and electric vehicle charging. The integrated battery system provides backup power for essential systems during outages and optimizes energy usage during peak rate periods.
          
          Special consideration was given to the coastal environment, with marine-grade components and reinforced mounting systems designed to withstand high winds and salt exposure. The system includes a comprehensive smart home integration, allowing the homeowners to monitor and control their energy usage through their existing home automation system.
        `,
        completionDate: "April 2023",
        capacity: "15kW solar + 20kWh battery",
        panelsUsed: "42 premium all-black panels",
        inverterType: "Premium hybrid inverter with battery management",
        annualProduction: "21,000 kWh",
        co2Reduction: "14.7 tons annually",
        roi: "8.5 years",
        clientName: "Coastal Heights Residence",
        testimonial:
          "The SolarPro team understood our needs for both performance and aesthetics. The system blends beautifully with our home's design while providing exceptional energy production. The battery backup has already proven invaluable during several coastal storms.",
      },
      {
        id: 6,
        title: "School Campus Solar",
        location: "Education District",
        year: "2022",
        category: "community",
        description: "A solar installation across multiple buildings of a school campus, with educational components.",
        fullDescription: `
          This comprehensive solar project spans multiple buildings across a school campus in the Education District. The 300kW system includes rooftop installations on the main academic building, gymnasium, and administration center.
          
          Beyond energy production, the project was designed with education in mind. Interactive monitoring displays in the school lobby show real-time energy production, and the system is integrated into the science curriculum, allowing students to analyze solar data and learn about renewable energy technologies.
          
          The project has reduced the school's energy costs by 65%, freeing up budget resources for educational programs. The installation includes a weather station and specialized monitoring equipment that provides data for student research projects and classroom activities.
        `,
        completionDate: "July 2022",
        capacity: "300kW",
        panelsUsed: "750 educational-facility panels",
        inverterType: "Multiple string inverters with educational monitoring",
        annualProduction: "420,000 kWh",
        co2Reduction: "294 tons annually",
        roi: "7 years",
        clientName: "Education District School Board",
        testimonial:
          "The solar installation has been transformative for our campus, both financially and educationally. Our students are engaged with the technology, and we've incorporated solar data into our STEM curriculum. The energy savings have allowed us to invest more in educational resources.",
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
        fullDescription: `
          Esta instalación solar residencial cuenta con un sistema de 10kW perfectamente diseñado para una casa familiar moderna. El sistema incluye 28 paneles solares de alta eficiencia estratégicamente ubicados para maximizar la exposición al sol durante todo el día.
          
          La instalación proporciona aproximadamente el 90% de las necesidades energéticas del hogar, reduciendo significativamente las facturas de electricidad y la huella de carbono. El sistema incluye una solución de monitoreo inteligente que permite a los propietarios seguir la producción y el consumo de energía en tiempo real a través de una aplicación móvil.
          
          El proyecto se completó en solo 3 días con una mínima interrupción en la rutina diaria de la familia. El diseño elegante y de bajo perfil de los paneles complementa la arquitectura de la casa mientras proporciona la máxima eficiencia energética.
        `,
        completionDate: "Junio 2023",
        capacity: "10kW",
        panelsUsed: "28 paneles monocristalinos de alta eficiencia",
        inverterType: "SolarEdge con optimizadores de potencia",
        annualProduction: "14,000 kWh",
        co2Reduction: "9.8 toneladas anualmente",
        roi: "7 años",
        clientName: "Familia Johnson",
        testimonial:
          "SolarPro transformó el sistema energético de nuestra casa. Ahora estamos ahorrando más del 70% en nuestras facturas de electricidad, y la instalación fue rápida y profesional. El equipo fue conocedor y respondió todas nuestras preguntas durante todo el proceso.",
      },
      {
        id: 2,
        title: "Granja Solar Comercial",
        location: "Valle Verde",
        year: "2022",
        category: "commercial",
        description:
          "Una instalación comercial de 500kW para una planta de fabricación, reduciendo su huella de carbono en un 60%.",
        fullDescription: `
          Esta instalación solar comercial a gran escala proporciona 500kW de energía limpia para una instalación de fabricación en Valle Verde. El proyecto cuenta con 1,250 paneles solares instalados en el amplio espacio de techo de la instalación y el área terrestre adyacente.
          
          El sistema fue diseñado para satisfacer las altas demandas de energía de las operaciones de fabricación mientras reduce significativamente la dependencia de la instalación de la electricidad de la red. Desde la instalación, la empresa ha reducido su huella de carbono en un 60% y ha logrado ahorros sustanciales en costos de energía.
          
          El proyecto incluyó un sistema de monitoreo personalizado que se integra con la infraestructura existente de gestión de energía de la instalación, permitiendo un uso optimizado de energía e informes detallados para iniciativas de sostenibilidad.
        `,
        completionDate: "Noviembre 2022",
        capacity: "500kW",
        panelsUsed: "1,250 paneles bifaciales de grado comercial",
        inverterType: "Múltiples inversores de cadena con monitoreo",
        annualProduction: "750,000 kWh",
        co2Reduction: "525 toneladas anualmente",
        roi: "5.5 años",
        clientName: "Fabricación Valle Verde",
        testimonial:
          "Como dueño de un negocio, estaba preocupado por la inversión inicial, pero SolarPro proporcionó un plan claro de retorno de inversión. Ya estamos viendo los beneficios después de solo 6 meses. El sistema ha funcionado por encima de las expectativas, y los ahorros de energía han sido sustanciales.",
      },
      {
        id: 3,
        title: "Solución Energética Industrial",
        location: "Parque Tecnológico",
        year: "2023",
        category: "commercial",
        description:
          "Una solución integrada de energía solar y almacenamiento de baterías para un gran complejo industrial.",
        fullDescription: `
          Esta solución energética integral para un gran complejo industrial en Parque Tecnológico combina un conjunto solar de 750kW con un sistema de almacenamiento de baterías de 500kWh. La instalación proporciona tanto producción de energía inmediata como capacidades críticas de energía de respaldo.
          
          El sistema fue diseñado para abordar las altas demandas de energía del complejo durante las horas pico y garantizar la continuidad operativa durante los cortes de energía. El componente de almacenamiento de baterías permite que la instalación almacene el exceso de energía producida durante las horas de luz para su uso durante las operaciones nocturnas o días nublados.
          
          El software avanzado de gestión de energía optimiza el flujo entre la producción solar, el almacenamiento de baterías y el consumo de la red, garantizando la máxima eficiencia y ahorro de costos. El sistema ha reducido los costos de energía de la instalación en un 45% y proporciona hasta 8 horas de energía de respaldo para sistemas críticos.
        `,
        completionDate: "Marzo 2023",
        capacity: "750kW solar + 500kWh batería",
        panelsUsed: "1,875 paneles industriales de alta potencia",
        inverterType: "Inversores centrales con integración de baterías",
        annualProduction: "1,125,000 kWh",
        co2Reduction: "787 toneladas anualmente",
        roi: "6 años",
        clientName: "Industrias Parque Tecnológico",
        testimonial:
          "La solución integrada de solar y batería ha transformado nuestra gestión energética. No solo hemos reducido costos, sino que también hemos ganado independencia energética y resiliencia contra cortes. La experiencia de SolarPro en diseñar un sistema que satisface nuestras complejas necesidades fue impresionante.",
      },
      {
        id: 4,
        title: "Proyecto Solar Comunitario",
        location: "Eco Aldea",
        year: "2021",
        category: "community",
        description: "Una instalación solar compartida que sirve a 50 hogares en un desarrollo comunitario progresivo.",
        fullDescription: `
          Este innovador proyecto solar comunitario proporciona energía limpia a 50 hogares en el desarrollo Eco Aldea. El conjunto solar compartido de 200kW está instalado en una parcela de terreno dedicada dentro de la comunidad, con créditos de energía distribuidos a los hogares participantes.
          
          El proyecto se desarrolló utilizando un modelo de suscripción, permitiendo a los residentes beneficiarse de la energía solar sin necesidad de instalar paneles en sus hogares individuales. Cada hogar se suscribe a una porción de la producción del conjunto, recibiendo créditos en sus facturas de servicios públicos proporcionales a su participación.
          
          El enfoque centrado en la comunidad ha fomentado un sentido de responsabilidad ambiental compartida mientras proporciona beneficios económicos a todos los participantes. El proyecto incluye componentes educativos, con pantallas de producción en tiempo real en el centro comunitario y talleres regulares sobre energía renovable.
        `,
        completionDate: "Agosto 2021",
        capacity: "200kW",
        panelsUsed: "500 paneles de grado comunitario",
        inverterType: "Inversores de cadena con monitoreo individual",
        annualProduction: "280,000 kWh",
        co2Reduction: "196 toneladas anualmente",
        roi: "8 años (comunidad)",
        clientName: "Asociación Comunitaria Eco Aldea",
        testimonial:
          "Nuestro proyecto solar comunitario ha superado las expectativas tanto en producción de energía como en participación comunitaria. Los residentes aprecian los ahorros en sus facturas de energía, y los aspectos educativos han aumentado la conciencia sobre la energía renovable en todo nuestro vecindario.",
      },
      {
        id: 5,
        title: "Instalación en Casa de Lujo",
        location: "Alturas Costeras",
        year: "2023",
        category: "residential",
        description:
          "Un sistema premium de energía solar y batería doméstica para una propiedad de lujo frente al mar.",
        fullDescription: `
          Esta instalación premium para una propiedad de lujo frente al mar en Alturas Costeras cuenta con un sistema solar de 15kW emparejado con un sistema de batería doméstica de 20kWh. El diseño prioriza tanto la estética como el rendimiento, con elegantes paneles negros que complementan la arquitectura moderna de la casa.
          
          El sistema fue diseñado a medida para satisfacer las altas demandas de energía de la propiedad de lujo, incluyendo control climático, calefacción de piscina y carga de vehículos eléctricos. El sistema integrado de baterías proporciona energía de respaldo para sistemas esenciales durante cortes y optimiza el uso de energía durante períodos de tarifas pico.
          
          Se dio especial consideración al entorno costero, con componentes de grado marino y sistemas de montaje reforzados diseñados para resistir vientos fuertes y exposición a la sal. El sistema incluye una integración integral de casa inteligente, permitiendo a los propietarios monitorear y controlar su uso de energía a través de su sistema existente de automatización del hogar.
        `,
        completionDate: "Abril 2023",
        capacity: "15kW solar + 20kWh batería",
        panelsUsed: "42 paneles premium completamente negros",
        inverterType: "Inversor híbrido premium con gestión de batería",
        annualProduction: "21,000 kWh",
        co2Reduction: "14.7 toneladas anualmente",
        roi: "8.5 años",
        clientName: "Residencia Alturas Costeras",
        testimonial:
          "El equipo de SolarPro entendió nuestras necesidades tanto de rendimiento como de estética. El sistema se integra perfectamente con el diseño de nuestra casa mientras proporciona una producción de energía excepcional. La batería de respaldo ya ha demostrado ser invaluable durante varias tormentas costeras.",
      },
      {
        id: 6,
        title: "Solar para Campus Escolar",
        location: "Distrito Educativo",
        year: "2022",
        category: "community",
        description: "Una instalación solar en varios edificios de un campus escolar, con componentes educativos.",
        fullDescription: `
          Este proyecto solar integral abarca múltiples edificios en un campus escolar en el Distrito Educativo. El sistema de 300kW incluye instalaciones en el techo del edificio académico principal, gimnasio y centro administrativo.
          
          Más allá de la producción de energía, el proyecto fue diseñado pensando en la educación. Las pantallas interactivas de monitoreo en el vestíbulo de la escuela muestran la producción de energía en tiempo real, y el sistema está integrado en el plan de estudios de ciencias, permitiendo a los estudiantes analizar datos solares y aprender sobre tecnologías de energía renovable.
          
          El proyecto ha reducido los costos de energía de la escuela en un 65%, liberando recursos presupuestarios para programas educativos. La instalación incluye una estación meteorológica y equipos especializados de monitoreo que proporcionan datos para proyectos de investigación estudiantil y actividades en el aula.
        `,
        completionDate: "Julio 2022",
        capacity: "300kW",
        panelsUsed: "750 paneles para instalaciones educativas",
        inverterType: "Múltiples inversores de cadena con monitoreo educativo",
        annualProduction: "420,000 kWh",
        co2Reduction: "294 toneladas anualmente",
        roi: "7 años",
        clientName: "Consejo Escolar del Distrito Educativo",
        testimonial:
          "La instalación solar ha sido transformadora para nuestro campus, tanto financiera como educativamente. Nuestros estudiantes están comprometidos con la tecnología, y hemos incorporado datos solares en nuestro plan de estudios STEM. Los ahorros de energía nos han permitido invertir más en recursos educativos.",
      },
    ],
  }

  const projectList = projectsData[lang as keyof typeof projectsData] || projectsData.en
  const project = projectList.find((p: any) => p.id.toString() === id)

  return project
}

type ProjectDetailPageProps = {
  params: Promise<{ 
    lang: string; 
    id: string 
  }>
}

export default async function ProjectDetailPage(props: ProjectDetailPageProps) {
  const params = await props.params;
  const { lang, id } = params;
  const dictionary = await getDictionary(lang);
  const project = getProjectData(id, lang);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} dictionary={dictionary} lang={lang} />;
}
