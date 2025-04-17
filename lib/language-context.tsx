'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ 
  children, 
  initialLang = 'en' 
}: { 
  children: React.ReactNode
  initialLang?: string
}) {
  const [language, setLanguage] = useState(initialLang)
  
  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
} 