"use client"

import type React from "react"

import { useState } from "react"
import { X, Upload, CheckCircle2, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface JobApplicationModalProps {
  job: {
    title: string
    location: string
    type: string
    workMode: string
  }
  isOpen: boolean
  onClose: () => void
  lang: string
}

export default function JobApplicationModal({ job, isOpen, onClose, lang }: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    consent: false,
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Translations
  const translations = {
    applyFor: lang === "es" ? "Aplicar para" : "Apply for",
    fullName: lang === "es" ? "Nombre completo" : "Full Name",
    email: lang === "es" ? "Correo electrónico" : "Email",
    phone: lang === "es" ? "Teléfono" : "Phone",
    resume: lang === "es" ? "Currículum" : "Resume/CV",
    uploadResume: lang === "es" ? "Subir currículum" : "Upload resume",
    dragAndDrop: lang === "es" ? "o arrastre y suelte aquí" : "or drag and drop here",
    coverLetter: lang === "es" ? "Carta de presentación" : "Cover Letter",
    coverLetterPlaceholder:
      lang === "es"
        ? "Cuéntanos por qué estás interesado en este puesto y qué te hace un buen candidato..."
        : "Tell us why you're interested in this position and what makes you a good candidate...",
    consent:
      lang === "es"
        ? "Doy mi consentimiento para que SolarPro procese mis datos personales con el fin de considerar mi solicitud."
        : "I consent to SolarPro processing my personal data for the purpose of considering my application.",
    submit: lang === "es" ? "Enviar solicitud" : "Submit Application",
    submitting: lang === "es" ? "Enviando..." : "Submitting...",
    thankYou: lang === "es" ? "¡Gracias por tu solicitud!" : "Thank you for your application!",
    successMessage:
      lang === "es"
        ? "Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto."
        : "We've received your application and will be in touch with you soon.",
    close: lang === "es" ? "Cerrar" : "Close",
    fileSelected: lang === "es" ? "Archivo seleccionado" : "File selected",
    requiredField: lang === "es" ? "Este campo es obligatorio" : "This field is required",
    invalidEmail: lang === "es" ? "Por favor, introduce un email válido" : "Please enter a valid email",
  }

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
      // Clear error when user uploads file
      if (errors.resume) {
        setErrors((prev) => ({ ...prev, resume: "" }))
      }
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
    // Clear error when user checks consent
    if (errors.consent) {
      setErrors((prev) => ({ ...prev, consent: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = translations.requiredField
    }

    if (!formData.email.trim()) {
      newErrors.email = translations.requiredField
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = translations.invalidEmail
    }

    if (!resumeFile) {
      newErrors.resume = translations.requiredField
    }

    if (!formData.consent) {
      newErrors.consent = translations.requiredField
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 5 seconds and close modal
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          coverLetter: "",
          consent: false,
        })
        setResumeFile(null)
        onClose()
      }, 3000)
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-3xl shadow-2xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 p-1.5 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20 shadow-md border border-gray-200 dark:border-gray-700"
          aria-label={translations.close}
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              <h2 className="text-2xl font-medium mb-6 flex items-center">
                <span>{translations.applyFor}</span>
                <span className="ml-2 text-teal-500">{job.title}</span>
              </h2>

              <div className="flex flex-wrap gap-3 mb-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{job.location}</div>
                <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{job.type}</div>
                <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{job.workMode}</div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {translations.fullName} *
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full ${errors.fullName ? "border-red-500" : ""}`}
                  />
                  {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {translations.email} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {translations.phone}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {translations.resume} *
                  </label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center ${
                      errors.resume ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                    } ${
                      resumeFile
                        ? "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {!resumeFile ? (
                      <label htmlFor="resume" className="cursor-pointer block">
                        <Upload className="h-10 w-10 text-gray-400 dark:text-gray-600 mx-auto mb-3" />
                        <p className="text-sm font-medium text-teal-500 dark:text-teal-400 mb-1">
                          {translations.uploadResume}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{translations.dragAndDrop}</p>
                      </label>
                    ) : (
                      <div>
                        <CheckCircle2 className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {translations.fileSelected}: {resumeFile.name}
                        </p>
                        <button
                          type="button"
                          onClick={() => setResumeFile(null)}
                          className="text-xs text-teal-500 dark:text-teal-400 mt-2"
                        >
                          Change file
                        </button>
                      </div>
                    )}
                  </div>
                  {errors.resume && <p className="text-sm text-red-500">{errors.resume}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {translations.coverLetter}
                  </label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder={translations.coverLetterPlaceholder}
                    rows={4}
                    className="w-full resize-none"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={handleCheckboxChange}
                    className={`mt-1 ${errors.consent ? "border-red-500" : ""}`}
                  />
                  <label
                    htmlFor="consent"
                    className={`text-sm text-gray-600 dark:text-gray-400 ${errors.consent ? "text-red-500" : ""}`}
                  >
                    {translations.consent} *
                  </label>
                </div>
                {errors.consent && <p className="text-sm text-red-500 -mt-4">{errors.consent}</p>}

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-lg px-8 py-3 h-auto font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {translations.submitting}
                      </>
                    ) : (
                      translations.submit
                    )}
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-lg p-8 text-center">
              <CheckCircle2 className="h-16 w-16 text-teal-500 mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-teal-700 dark:text-teal-300 mb-2">{translations.thankYou}</h3>
              <p className="text-teal-600 dark:text-teal-400">{translations.successMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
