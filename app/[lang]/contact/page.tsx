import { getDictionary } from "@/lib/dictionaries"
import ContactPage from "@/components/contact-page"

type ContactProps = {
  params: Promise<{ lang: string }>
}

export default async function Contact(props: ContactProps) {
  const params = await props.params
  const lang = params.lang
  const dictionary = await getDictionary(lang)

  return <ContactPage dictionary={dictionary} lang={lang} />
}
