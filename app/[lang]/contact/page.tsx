import { getDictionary } from "@/lib/dictionaries"
import ContactPage from "@/components/contact-page"

type ContactProps = {
  params: { lang: string }
}

export default async function Contact(props: ContactProps) {
  // Explicitly awaiting props.params
  const params = await Promise.resolve(props.params)
  const lang = params.lang
  const dictionary = await getDictionary(lang)

  return <ContactPage dictionary={dictionary} lang={lang} />
}
