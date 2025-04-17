import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getDictionary } from "@/lib/dictionaries"
import { LanguageScript } from "@/components/language-script"

export const metadata: Metadata = {
  title: "SolarPro Energy",
  description: "Modern solar panel solutions for homes and businesses",
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }]
}

type LayoutProps = {
  children: React.ReactNode
  params: { lang: string }
}

export default async function LangLayout(props: LayoutProps) {
  // Explicitly awaiting props.params
  const params = await Promise.resolve(props.params)
  const lang = params.lang
  const dictionary = await getDictionary(lang)

  return (
    <>
      <LanguageScript lang={lang} />
      <Header dictionary={dictionary.navigation} lang={lang} />
      {props.children}
      <Footer dictionary={dictionary.footer} />
    </>
  )
}
