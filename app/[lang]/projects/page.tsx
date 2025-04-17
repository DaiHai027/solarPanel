import { getDictionary } from "@/lib/dictionaries"
import ProjectsGrid from "@/components/projects-grid"

type ProjectsPageProps = {
  params: { lang: string }
}

export default async function ProjectsPage(props: ProjectsPageProps) {
  // Explicitly awaiting props.params
  const params = await Promise.resolve(props.params)
  const lang = params.lang
  const dictionary = await getDictionary(lang)

  return (
    <main>
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/projects-hero.jpg')",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-black/80"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">{dictionary.navigation.projects}</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Explore our portfolio of successful solar installations and renewable energy projects.
          </p>

          <div className="h-12"></div>
        </div>
      </section>

      <ProjectsGrid lang={lang} />
    </main>
  )
}
