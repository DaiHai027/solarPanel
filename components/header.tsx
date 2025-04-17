"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"

export default function Header({
  dictionary,
  lang,
}: {
  dictionary: any
  lang: string
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-100/90 backdrop-blur-md py-3 shadow-md"
          : "bg-white/40 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href={`/${lang}`} className="text-xl font-light flex items-center">
              <span
                className={`${isScrolled ? "text-gray-900 dark:text-gray-900" : "text-gray-900"}`}
              >
                SolarPro
              </span>
              <span className="text-gray-500">*</span>
            </Link>
          </motion.div>

          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { key: "", label: "SolarPro" },
                { key: "projects", label: dictionary.projects },
                { key: "contact", label: dictionary.contact },
              ].map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={`/${lang}${item.key ? `/${item.key}` : ""}`}
                    className={`text-sm font-light transition-colors relative ${
                      isScrolled
                        ? pathname === `/${lang}${item.key ? `/${item.key}` : ""}`
                          ? "text-gray-900 dark:text-gray-900"
                          : "text-gray-700 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-900"
                        : pathname === `/${lang}${item.key ? `/${item.key}` : ""}`
                          ? "text-gray-900"
                          : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                    {pathname === `/${lang}${item.key ? `/${item.key}` : ""}` && (
                      <motion.span
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled ? "bg-gray-900 dark:bg-gray-900" : "bg-gray-900"}`}
                        layoutId="underline"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Language switcher */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:block"
            >
              <LanguageSwitcher currentLang={lang} />
            </motion.div>

            {/* Mobile menu button */}
            <button
              className={`md:hidden ${isScrolled ? "text-gray-700" : "text-gray-700"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-100 border-t border-gray-200"
          >
            <div className="container mx-auto px-8 py-4">
              <nav className="flex flex-col space-y-4">
                {[
                  { key: "", label: "SolarPro" },
                  { key: "projects", label: dictionary.projects },
                  { key: "contact", label: dictionary.contact },
                ].map((item, index) => (
                  <Link
                    key={item.key}
                    href={`/${lang}${item.key ? `/${item.key}` : ""}`}
                    className={`text-sm py-2 ${
                      pathname === `/${lang}${item.key ? `/${item.key}` : ""}` ? "text-gray-900 font-medium" : "text-gray-700"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Language switcher in mobile menu */}
                <div className="pt-2 border-t border-gray-200">
                  <LanguageSwitcher currentLang={lang} />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
