import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero({ dictionary }: { dictionary: any }) {
  return (
    <section id="hero" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{dictionary.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{dictionary.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              {dictionary.contactButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">{dictionary.learnMoreButton}</Button>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/residential-solar.jpg"
            alt="Solar panels on a modern home"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
