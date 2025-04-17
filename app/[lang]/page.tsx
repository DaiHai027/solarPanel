import { getDictionary } from "@/lib/dictionaries"
import FullscreenHero from "@/components/fullscreen-hero"
import About from "@/components/about"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import FeaturedProjects from "@/components/featured-projects"

type HomeProps = {
  params: Promise<{ lang: string }>
}

export default async function Home(props: HomeProps) {
  const params = await props.params
  const lang = params.lang
  const dictionary = await getDictionary(lang)

  return (
    <main>
      <FullscreenHero dictionary={dictionary.hero} />
      <Stats dictionary={dictionary.stats} />
      <About dictionary={dictionary.about} lang={lang} />
      <Services dictionary={dictionary.services} />
      <FeaturedProjects dictionary={dictionary} lang={lang} />
      <Testimonials dictionary={dictionary.testimonials} />
      <Contact dictionary={dictionary.contact} />
    </main>
  )
}
