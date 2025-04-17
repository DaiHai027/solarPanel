'use client'

import { useEffect } from 'react'

export function LanguageScript({ lang }: { lang: string }) {
  useEffect(() => {
    // Set the HTML lang attribute
    document.documentElement.lang = lang
  }, [lang])

  // This component doesn't render anything
  return null
} 