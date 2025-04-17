const dictionaries = {
  en: {
    navigation: {
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Beyond solar energy",
      subtitle: "Sustainable solutions for a brighter future with innovative technology and expert installation.",
      aboutButton: "Discover more",
    },
    stats: {
      title: "Our Impact",
      subtitle: "The numbers speak for themselves",
      items: [
        {
          value: 500,
          suffix: "+",
          label: "Installations",
        },
        {
          value: 15000,
          suffix: "kW",
          label: "Total Capacity",
        },
        {
          value: 98,
          suffix: "%",
          label: "Client Satisfaction",
        },
        {
          value: 10000,
          suffix: "t",
          label: "CO₂ Saved Yearly",
        },
      ],
    },
    about: {
      title: "About SolarPro",
      subtitle: "We are committed to providing clean, renewable energy solutions.",
      missionTitle: "Our Mission",
      missionText:
        "At SolarPro, we believe in harnessing the power of the sun to create a sustainable future. Our mission is to make solar energy accessible, affordable, and efficient for everyone. We are dedicated to reducing carbon emissions and promoting renewable energy sources through innovative solar solutions.",
      learnMoreButton: "Learn more about us",
      values: [
        {
          title: "Sustainability",
          description:
            "We are committed to reducing carbon emissions and promoting renewable energy sources through our solar installations and energy solutions.",
        },
        {
          title: "Innovation",
          description:
            "We continuously research and implement the latest solar technologies to provide our clients with the most efficient and effective energy solutions.",
        },
        {
          title: "Quality",
          description:
            "We use only the highest quality materials and equipment in our installations, ensuring long-lasting and reliable performance for all our solar systems.",
        },
      ],
      ourStory: "Our Story",
      storyText1:
        "Founded in 2010, SolarPro began with a simple vision: to transform how homes and businesses access energy by harnessing the abundant power of the sun.",
      storyText2:
        "What started as a small team of passionate engineers and environmental advocates has grown into a leading provider of solar solutions across the country. Our journey has been driven by innovation, quality, and a deep commitment to sustainability.",
      storyText3:
        "Over the years, we've installed thousands of solar systems, from residential rooftops to large commercial arrays, each contributing to our mission of creating a cleaner, more sustainable energy future.",
      ourJourney: "Our Journey",
      journeySubtitle: "Explore the key milestones that have shaped SolarPro's growth and impact over the years.",
      ourTeam: "Our Team",
      teamSubtitle:
        "Meet the passionate individuals behind SolarPro who are dedicated to advancing solar energy and sustainability.",
    },
    services: {
      title: "Services",
      subtitle: "We offer a comprehensive range of solar energy solutions.",
      lang: "en",
      items: [
        {
          title: "Residential Solar",
          subtitle: "For Homeowners",
          description:
            "Custom solar panel installations for homes of all sizes, helping you reduce your electricity bills and carbon footprint while increasing your property value.",
          benefits: [
            "Lower monthly electricity bills by 50-90%",
            "Increase your home's value by 4.1% on average",
            "25-year warranty on panels and workmanship",
            "Smart monitoring system included",
            "Federal tax credits and local incentives available",
          ],
          pricing: {
            startingAt: "$8,500",
            disclaimer:
              "After federal tax credit. Financing options available with $0 down and payments as low as $80/month.",
          },
        },
        {
          title: "Commercial Solar",
          subtitle: "For Businesses",
          description:
            "Large-scale solar solutions for businesses, warehouses, and commercial buildings, providing significant long-term savings and demonstrating your commitment to sustainability.",
          benefits: [
            "Reduce operating costs significantly",
            "Hedge against rising utility rates",
            "Demonstrate corporate sustainability commitment",
            "Utilize unused roof or land space",
            "Accelerated depreciation and tax benefits",
          ],
          pricing: {
            startingAt: "$25,000",
            disclaimer: "Custom pricing based on energy needs and facility size. ROI typically within 3-7 years.",
          },
        },
        {
          title: "Solar Maintenance",
          subtitle: "For Existing Systems",
          description:
            "Regular maintenance and repair services to ensure your solar system operates at peak efficiency for years to come, maximizing your return on investment.",
          benefits: [
            "Maintain optimal system performance",
            "Extend the lifespan of your solar investment",
            "Prevent costly repairs with regular inspections",
            "Professional cleaning increases energy production",
            "Comprehensive system diagnostics and monitoring",
          ],
          pricing: {
            startingAt: "$199",
            disclaimer: "For annual maintenance package. One-time service and repair options also available.",
          },
        },
        {
          title: "Energy Consulting",
          subtitle: "For Planning",
          description:
            "Expert advice on energy efficiency, solar potential, and financial incentives to help you make informed decisions about your energy future.",
          benefits: [
            "Comprehensive energy audit of your property",
            "Custom solar system design and planning",
            "ROI and savings projections",
            "Guidance on available incentives and rebates",
            "Financing options and assistance",
          ],
          pricing: {
            startingAt: "$0",
            disclaimer:
              "Initial consultation is free. Detailed energy audits and custom planning services priced based on scope.",
          },
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle:
        "Explore some of our recent solar installations and see how we're helping communities transition to clean energy.",
      viewAllProjects: "View all projects",
      viewDetails: "View details",
      categories: {
        residential: "Residential",
        commercial: "Commercial",
        community: "Community",
      },
      featured: [
        {
          title: "Residential Solar Installation",
          location: "Sunshine City",
          description:
            "A 10kW solar system installation for a modern family home, providing 90% of their energy needs.",
        },
        {
          title: "Commercial Solar Farm",
          location: "Green Valley",
          description:
            "A 500kW commercial installation for a manufacturing facility, reducing their carbon footprint by 60%.",
        },
        {
          title: "Community Solar Project",
          location: "Eco Village",
          description: "A shared solar installation serving 50 households in a progressive community development.",
        },
      ],
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Hear from those who have already made the switch to solar energy",
      items: [
        {
          quote:
            "SolarPro transformed our home energy system. We're now saving over 70% on our electricity bills, and the installation was quick and professional.",
          name: "Sarah Johnson",
          title: "Homeowner",
          location: "Sunshine City",
          project: "10kW Residential",
          results: [
            { value: "70%", label: "Energy bill savings" },
            { value: "8.5t", label: "CO₂ reduction yearly" },
          ],
        },
        {
          quote:
            "As a business owner, I was concerned about the initial investment, but SolarPro provided a clear ROI plan. We're already seeing the benefits after just 6 months.",
          name: "Michael Chen",
          title: "Business Owner",
          location: "Green Valley",
          project: "200kW Commercial",
          results: [
            { value: "60%", label: "Energy cost reduction" },
            { value: "5.5yr", label: "Return on investment" },
          ],
        },
        {
          quote:
            "The team at SolarPro was knowledgeable and patient with all our questions. The system they designed for our unique roof layout has exceeded our expectations.",
          name: "Emma Rodriguez",
          title: "Homeowner",
          location: "Coastal Heights",
          project: "15kW Premium",
          results: [
            { value: "95%", label: "Energy independence" },
            { value: "24/7", label: "Monitoring system" },
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle:
        "Have questions or ready to start your solar journey? Contact us today and our team of experts will guide you through the process.",
      contactUs: "Get in Touch",
      contactText:
        "Ready to harness the power of the sun? Our team of solar experts is here to answer your questions and help you find the perfect solar solution for your needs.",
      email: "Email",
      phone: "Phone",
      address: "Address",
      formTitle: "Send Us a Message",
      formSubtitle: "Fill out the form below and we'll get back to you as soon as possible.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "Your email",
      subjectLabel: "Subject",
      subjectPlaceholder: "What is this regarding?",
      messageLabel: "Message",
      messagePlaceholder: "Your message",
      submitButton: "Send Message",
    },
    footer: {
      tagline: "Powering a sustainable future with innovative solar solutions.",
      contactUs: "Contact Us",
      legal: "Legal",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      allRightsReserved: "All rights reserved.",
    },
  },
  es: {
    navigation: {
      about: "Nosotros",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Más allá de la energía solar",
      subtitle: "Soluciones sostenibles para un futuro más brillante con tecnología innovadora e instalación experta.",
      aboutButton: "Descubrir más",
    },
    stats: {
      title: "Nuestro Impacto",
      subtitle: "Los números hablan por sí mismos",
      items: [
        {
          value: 500,
          suffix: "+",
          label: "Instalaciones",
        },
        {
          value: 15000,
          suffix: "kW",
          label: "Capacidad Total",
        },
        {
          value: 98,
          suffix: "%",
          label: "Satisfacción del Cliente",
        },
        {
          value: 10000,
          suffix: "t",
          label: "CO₂ Ahorrado Anualmente",
        },
      ],
    },
    about: {
      title: "Sobre SolarPro",
      subtitle: "Estamos comprometidos a proporcionar soluciones de energía limpia y renovable.",
      missionTitle: "Nuestra Misión",
      missionText:
        "En SolarPro, creemos en aprovechar el poder del sol para crear un futuro sostenible. Nuestra misión es hacer que la energía solar sea accesible, asequible y eficiente para todos. Estamos dedicados a reducir las emisiones de carbono y promover fuentes de energía renovable a través de soluciones solares innovadoras.",
      learnMoreButton: "Conozca más sobre nosotros",
      values: [
        {
          title: "Sostenibilidad",
          description:
            "Estamos comprometidos a reducir las emisiones de carbono y promover fuentes de energía renovable a través de nuestras instalaciones solares y soluciones energéticas.",
        },
        {
          title: "Innovación",
          description:
            "Investigamos e implementamos continuamente las últimas tecnologías solares para proporcionar a nuestros clientes las soluciones energéticas más eficientes y efectivas.",
        },
        {
          title: "Calidad",
          description:
            "Utilizamos solo materiales y equipos de la más alta calidad en nuestras instalaciones, asegurando un rendimiento duradero y confiable para todos nuestros sistemas solares.",
        },
      ],
      ourStory: "Nuestra Historia",
      storyText1:
        "Fundada en 2010, SolarPro comenzó con una visión simple: transformar cómo los hogares y negocios acceden a la energía aprovechando el abundante poder del sol.",
      storyText2:
        "Lo que comenzó como un pequeño equipo de ingenieros apasionados y defensores del medio ambiente se ha convertido en un proveedor líder de soluciones solares en todo el país. Nuestro viaje ha sido impulsado por la innovación, la calidad y un profundo compromiso con la sostenibilidad.",
      storyText3:
        "A lo largo de los años, hemos instalado miles de sistemas solares, desde techos residenciales hasta grandes conjuntos comerciales, cada uno contribuyendo a nuestra misión de crear un futuro energético más limpio y sostenible.",
      ourJourney: "Nuestro Viaje",
      journeySubtitle:
        "Explora los hitos clave que han dado forma al crecimiento e impacto de SolarPro a lo largo de los años.",
      ourTeam: "Nuestro Equipo",
      teamSubtitle:
        "Conoce a las personas apasionadas detrás de SolarPro que están dedicadas a avanzar en la energía solar y la sostenibilidad.",
    },
    services: {
      title: "Servicios",
      subtitle: "Ofrecemos una amplia gama de soluciones de energía solar.",
      lang: "es",
      items: [
        {
          title: "Solar Residencial",
          subtitle: "Para Propietarios",
          description:
            "Instalaciones de paneles solares personalizadas para hogares de todos los tamaños, ayudándole a reducir sus facturas de electricidad y huella de carbono mientras aumenta el valor de su propiedad.",
          benefits: [
            "Reduzca sus facturas de electricidad mensuales en un 50-90%",
            "Aumente el valor de su hogar en un 4.1% en promedio",
            "Garantía de 25 años en paneles y mano de obra",
            "Sistema de monitoreo inteligente incluido",
            "Créditos fiscales federales e incentivos locales disponibles",
          ],
          pricing: {
            startingAt: "$8,500",
            disclaimer:
              "Después del crédito fiscal federal. Opciones de financiamiento disponibles con $0 de entrada y pagos tan bajos como $80/mes.",
          },
        },
        {
          title: "Solar Comercial",
          subtitle: "Para Empresas",
          description:
            "Soluciones solares a gran escala para empresas, almacenes y edificios comerciales, proporcionando importantes ahorros a largo plazo y demostrando su compromiso con la sostenibilidad.",
          benefits: [
            "Reduzca significativamente los costos operativos",
            "Protéjase contra el aumento de las tarifas de servicios públicos",
            "Demuestre el compromiso de sostenibilidad corporativa",
            "Utilice espacio de techo o terreno no utilizado",
            "Depreciación acelerada y beneficios fiscales",
          ],
          pricing: {
            startingAt: "$25,000",
            disclaimer:
              "Precios personalizados basados en necesidades energéticas y tamaño de la instalación. ROI típicamente dentro de 3-7 años.",
          },
        },
        {
          title: "Mantenimiento Solar",
          subtitle: "Para Sistemas Existentes",
          description:
            "Servicios regulares de mantenimiento y reparación para garantizar que su sistema solar funcione con la máxima eficiencia durante años, maximizando su retorno de inversión.",
          benefits: [
            "Mantenga un rendimiento óptimo del sistema",
            "Extienda la vida útil de su inversión solar",
            "Prevenga reparaciones costosas con inspecciones regulares",
            "La limpieza profesional aumenta la producción de energía",
            "Diagnóstico y monitoreo integral del sistema",
          ],
          pricing: {
            startingAt: "$199",
            disclaimer:
              "Para paquete de mantenimiento anual. También disponibles opciones de servicio único y reparación.",
          },
        },
        {
          title: "Consultoría Energética",
          subtitle: "Para Planificación",
          description:
            "Asesoramiento experto sobre eficiencia energética, potencial solar e incentivos financieros para ayudarle a tomar decisiones informadas sobre su futuro energético.",
          benefits: [
            "Auditoría energética completa de su propiedad",
            "Diseño y planificación de sistemas solares personalizados",
            "Proyecciones de ROI y ahorros",
            "Orientación sobre incentivos y rebajas disponibles",
            "Opciones de financiamiento y asistencia",
          ],
          pricing: {
            startingAt: "$0",
            disclaimer:
              "La consulta inicial es gratuita. Auditorías energéticas detalladas y servicios de planificación personalizados con precios basados en el alcance.",
          },
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle:
        "Explore algunas de nuestras instalaciones solares recientes y vea cómo estamos ayudando a las comunidades a hacer la transición a la energía limpia.",
      viewAllProjects: "Ver todos los proyectos",
      viewDetails: "Ver detalles",
      categories: {
        residential: "Residencial",
        commercial: "Comercial",
        community: "Comunitario",
      },
      featured: [
        {
          title: "Instalación Solar Residencial",
          location: "Ciudad Soleada",
          description:
            "Una instalación de sistema solar de 10kW para una casa familiar moderna, proporcionando el 90% de sus necesidades energéticas.",
        },
        {
          title: "Granja Solar Comercial",
          location: "Valle Verde",
          description:
            "Una instalación comercial de 500kW para una planta de fabricación, reduciendo su huella de carbono en un 60%.",
        },
        {
          title: "Proyecto Solar Comunitario",
          location: "Eco Aldea",
          description:
            "Una instalación solar compartida que sirve a 50 hogares en un desarrollo comunitario progresivo.",
        },
      ],
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Escuche a quienes ya han hecho el cambio a la energía solar",
      items: [
        {
          quote:
            "SolarPro transformó el sistema energético de nuestra casa. Ahora estamos ahorrando más del 70% en nuestras facturas de electricidad, y la instalación fue rápida y profesional.",
          name: "Sara Jiménez",
          title: "Propietaria",
          location: "Ciudad Soleada",
          project: "10kW Residencial",
          results: [
            { value: "70%", label: "Ahorro en facturas" },
            { value: "8.5t", label: "Reducción de CO₂ anual" },
          ],
        },
        {
          quote:
            "Como dueño de un negocio, estaba preocupado por la inversión inicial, pero SolarPro proporcionó un plan claro de retorno de inversión. Ya estamos viendo los beneficios después de solo 6 meses.",
          name: "Miguel Chen",
          title: "Empresario",
          location: "Valle Verde",
          project: "200kW Comercial",
          results: [
            { value: "60%", label: "Reducción de costos" },
            { value: "5.5yr", label: "Retorno de inversión" },
          ],
        },
        {
          quote:
            "El equipo de SolarPro fue conocedor y paciente con todas nuestras preguntas. El sistema que diseñaron para la disposición única de nuestro techo ha superado nuestras expectativas.",
          name: "Emma Rodríguez",
          title: "Propietaria",
          location: "Alturas Costeras",
          project: "15kW Premium",
          results: [
            { value: "95%", label: "Independencia energética" },
            { value: "24/7", label: "Sistema de monitoreo" },
          ],
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle:
        "¿Tiene preguntas o está listo para comenzar su viaje solar? Contáctenos hoy y nuestro equipo de expertos lo guiará a través del proceso.",
      contactUs: "Póngase en Contacto",
      contactText:
        "¿Listo para aprovechar el poder del sol? Nuestro equipo de expertos en energía solar está aquí para responder sus preguntas y ayudarle a encontrar la solución solar perfecta para sus necesidades.",
      email: "Correo",
      phone: "Teléfono",
      address: "Dirección",
      formTitle: "Envíenos un Mensaje",
      formSubtitle: "Complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.",
      nameLabel: "Nombre",
      namePlaceholder: "Su nombre",
      emailLabel: "Correo",
      emailPlaceholder: "Su correo",
      subjectLabel: "Asunto",
      subjectPlaceholder: "¿De qué se trata?",
      messageLabel: "Mensaje",
      messagePlaceholder: "Su mensaje",
      submitButton: "Enviar Mensaje",
    },
    footer: {
      tagline: "Impulsando un futuro sostenible con soluciones solares innovadoras.",
      contactUs: "Contáctenos",
      legal: "Legal",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      allRightsReserved: "Todos los derechos reservados.",
    },
  },
}

export async function getDictionary(locale: string) {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.en
}
