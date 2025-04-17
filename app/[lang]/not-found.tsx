import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/dictionaries"

type NotFoundProps = {
  params?: { lang: string }
}

export default async function NotFound(props: NotFoundProps) {
  // For not-found.tsx, props.params may be undefined when rendered as a 404 page
  // Default to 'en' if lang param is not available
  const defaultLang = 'en'
  const params = await Promise.resolve(props.params || { lang: defaultLang })
  const lang = params.lang
  const dictionary = await getDictionary(lang)
  
  const notFoundText =
    lang === "es"
      ? {
          title: "Página no encontrada",
          description: "Lo sentimos, la página que está buscando no existe.",
          button: "Volver a la página principal",
        }
      : {
          title: "Page not found",
          description: "Sorry, the page you are looking for does not exist.",
          button: "Return to home page",
        }

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <h2 className="text-2xl font-medium mb-4">{notFoundText.title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">{notFoundText.description}</p>
      <Link href={`/${lang}`}>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">{notFoundText.button}</Button>
      </Link>
    </div>
  )
}
