import { getDictionary } from "@/lib/dictionaries"
import CareersPage from "@/components/careers-page"

export default async function Careers({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <CareersPage dictionary={dictionary} lang={lang} />
}