"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname()

  // Get the path without the language prefix
  const pathnameWithoutLang = pathname.replace(`/${currentLang}`, "") || "/"

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-5 w-5" />
      <div className="flex rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
        <Link
          href={`/en${pathnameWithoutLang === "/" ? "" : pathnameWithoutLang}`}
          locale="en"
          className={`px-3 py-1 text-sm transition-colors ${
            currentLang === "en" ? "bg-yellow-500 text-white font-medium" : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          EN
        </Link>
        <Link
          href={`/es${pathnameWithoutLang === "/" ? "" : pathnameWithoutLang}`}
          locale="es"
          className={`px-3 py-1 text-sm transition-colors ${
            currentLang === "es" ? "bg-yellow-500 text-white font-medium" : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          ES
        </Link>
      </div>
    </div>
  )
}
