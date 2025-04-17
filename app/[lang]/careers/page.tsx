import { getDictionary } from "@/lib/dictionaries"
import CareersPage from "@/components/careers-page"

type CareersProps = {
  params: { lang: string }
}

export default async function Careers(props: CareersProps) {
  // Explicitly awaiting props.params
  const params = await Promise.resolve(props.params)
  const lang = params.lang
  const dictionary = await getDictionary(lang)

  return <CareersPage dictionary={dictionary} lang={lang} />
} 