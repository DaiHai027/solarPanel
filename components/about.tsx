import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface AboutProps {
  dictionary: {
    title: string
    subtitle: string
    missionTitle: string
    missionText: string
    learnMoreButton: string
    values: Array<{
      title: string
      description: string
    }>
  }
  lang: string
}

export default function About({ dictionary, lang }: AboutProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{dictionary.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-auto">
              <Image
                src="/images/solar-city-view.png"
                alt="Woman overlooking solar panels with futuristic city skyline at sunset"
                width={320}
                height={320}
                className="rounded-lg shadow-lg w-full h-auto mx-auto"
                priority
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">{dictionary.missionTitle}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{dictionary.missionText}</p>

            <Link href={`/${lang}/about`}>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">{dictionary.learnMoreButton}</Button>
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dictionary.values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
