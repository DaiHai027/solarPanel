"use client"

import type React from "react"

import { useState } from "react"
import { X, Check, ArrowRight, Loader2, Shield, Wrench, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface ConsultationModalProps {
  service: {
    title: string
    subtitle: string
    description: string
    benefits?: string[]
    pricing?: {
      startingAt?: string
      disclaimer?: string
    }
  }
  id: string
  lang: string
}

export default function ConsultationModal({ service, id, lang }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyType: "",
    preferredTime: "",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 2

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          propertyType: "",
          preferredTime: "",
          consent: false,
        })
        setCurrentStep(1)
      }, 5000)
    }, 1500)
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Get service-specific icon
  const getServiceIcon = () => {
    if (service.title.toLowerCase().includes("maintenance")) {
      return <Wrench className="h-6 w-6 text-white" />
    } else {
      return <Shield className="h-6 w-6 text-white" />
    }
  }

  // Translations
  const translations = {
    close: lang === "es" ? "Cerrar" : "Close",
    getStarted: lang === "es" ? "Comience Hoy" : "Get Started Today",
    benefits: lang === "es" ? "Beneficios" : "Benefits",
    pricing: lang === "es" ? "Precios" : "Pricing",
    startingAt: lang === "es" ? "Desde" : "Starting at",
    formTitle: lang === "es" ? "Solicitar Consulta Gratuita" : "Request Free Consultation",
    name: lang === "es" ? "Nombre" : "Name",
    email: lang === "es" ? "Correo Electrónico" : "Email",
    phone: lang === "es" ? "Teléfono" : "Phone",
    message: lang === "es" ? "Mensaje" : "Message",
    propertyType: lang === "es" ? "Tipo de Propiedad" : "Property Type",
    residential: lang === "es" ? "Residencial" : "Residential",
    commercial: lang === "es" ? "Comercial" : "Commercial",
    industrial: lang === "es" ? "Industrial" : "Industrial",
    preferredTime: lang === "es" ? "Horario Preferido" : "Preferred Time",
    morning: lang === "es" ? "Mañana" : "Morning",
    afternoon: lang === "es" ? "Tarde" : "Afternoon",
    evening: lang === "es" ? "Noche" : "Evening",
    consent:
      lang === "es"
        ? "Acepto recibir comunicaciones sobre productos y servicios solares."
        : "I agree to receive communications about solar products and services.",
    submit: lang === "es" ? "Enviar Solicitud" : "Submit Request",
    submitting: lang === "es" ? "Enviando..." : "Submitting...",
    thankYou: lang === "es" ? "¡Gracias!" : "Thank You!",
    successMessage:
      lang === "es"
        ? "Su solicitud de consulta ha sido enviada. Nos pondremos en contacto con usted pronto."
        : "Your consultation request has been submitted. We'll be in touch with you shortly.",
    next: lang === "es" ? "Siguiente" : "Next",
    previous: lang === "es" ? "Anterior" : "Previous",
    step: lang === "es" ? "Paso" : "Step",
    of: lang === "es" ? "de" : "of",
    yourInformation: lang === "es" ? "Su información" : "Your Information",
    projectDetails: lang === "es" ? "Detalles del proyecto" : "Project Details",
    getConsultation: lang === "es" ? "Obtener una consulta gratuita" : "Get a free consultation",
  }

  // Default benefits if not provided
  const defaultBenefits = [
    lang === "es" ? "Ahorro significativo en facturas de energía" : "Maintain optimal system performance",
    lang === "es" ? "Instalación profesional y garantizada" : "Extend the lifespan of your solar investment",
    lang === "es" ? "Soporte y mantenimiento continuo" : "Prevent costly repairs with regular inspections",
    lang === "es" ? "Reducción de la huella de carbono" : "Professional cleaning increases energy production",
  ]

  const benefits = service.benefits || defaultBenefits

  // Service-specific form placeholder
  const getPlaceholder = () => {
    if (service.title.toLowerCase().includes("maintenance")) {
      return lang === "es"
        ? "Tengo un sistema solar existente que necesita mantenimiento. El problema es..."
        : "I have an existing solar system that needs maintenance. The issue is..."
    } else {
      return lang === "es" ? "Me gustaría obtener más información sobre..." : "I would like to learn more about..."
    }
  }

  return (
    <div id={id} className="modal">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden target:flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-4xl shadow-2xl relative">
          {/* Close button - Repositioned to top-right corner of modal */}
          <button
            onClick={() => (window.location.href = "#")}
            className="absolute -top-3 -right-3 p-1.5 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20 shadow-md border border-gray-200 dark:border-gray-700"
            aria-label={translations.close}
          >
            <X className="h-4 w-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Service information */}
            <div className="bg-gradient-to-br from-teal-500 to-blue-600 text-white p-8 rounded-l-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">{getServiceIcon()}</div>
                <div>
                  <h2 className="text-2xl font-light">{service.title}</h2>
                  <p className="text-white/80 text-sm">{service.subtitle}</p>
                </div>
              </div>

              <div className="h-px w-full bg-white/20 my-4"></div>

              <p className="text-white/90 text-sm mb-5 line-clamp-3">{service.description}</p>

              <div className="mb-5">
                <h3 className="text-lg font-medium text-white mb-3">{translations.benefits}</h3>
                <ul className="space-y-2">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-400/30 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/90 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.pricing && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-lg font-medium text-white mb-1">{translations.pricing}</h3>
                  {service.pricing.startingAt && (
                    <div className="text-2xl font-light text-white mb-1">
                      {translations.startingAt}{" "}
                      <span className="font-medium text-teal-300">{service.pricing.startingAt}</span>
                    </div>
                  )}
                  {service.pricing.disclaimer && <p className="text-white/70 text-xs">{service.pricing.disclaimer}</p>}
                </div>
              )}
            </div>

            {/* Consultation form */}
            <div className="p-8 bg-white dark:bg-gray-900 rounded-r-xl">
              {/* Progress indicator */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium">{translations.formTitle}</h3>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>
                    {translations.step} {translations.of} {totalSteps}
                  </span>
                  <div className="ml-2 flex space-x-1">
                    {[...Array(totalSteps)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 w-6 rounded-full ${
                          i + 1 <= currentStep
                            ? "bg-gradient-to-r from-teal-500 to-blue-500"
                            : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-teal-500" />
                        {translations.yourInformation}
                      </h4>

                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {translations.name} *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full h-9 text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {translations.email} *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full h-9 text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {translations.phone}
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full h-9 text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="propertyType"
                          className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {translations.propertyType}
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full h-9 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                          <option value=""></option>
                          <option value="residential">{translations.residential}</option>
                          <option value="commercial">{translations.commercial}</option>
                          <option value="industrial">{translations.industrial}</option>
                        </select>
                      </div>

                      <div className="pt-2">
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="w-full h-9 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white text-sm"
                        >
                          {translations.next}
                          <ArrowRight className="ml-2 h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                        <Wrench className="h-4 w-4 mr-2 text-teal-500" />
                        {translations.projectDetails}
                      </h4>

                      <div>
                        <label
                          htmlFor="preferredTime"
                          className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {translations.preferredTime}
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full h-9 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                          <option value=""></option>
                          <option value="morning">{translations.morning}</option>
                          <option value="afternoon">{translations.afternoon}</option>
                          <option value="evening">{translations.evening}</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {translations.message} *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={getPlaceholder()}
                          required
                          rows={3}
                          className="w-full text-sm resize-none"
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={handleCheckboxChange}
                          required
                          className="mt-1"
                        />
                        <label htmlFor="consent" className="text-xs text-gray-600 dark:text-gray-400">
                          {translations.consent}
                        </label>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button
                          type="button"
                          onClick={prevStep}
                          variant="outline"
                          className="flex-1 h-9 text-sm border-gray-300 dark:border-gray-700"
                        >
                          {translations.previous}
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 h-9 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white text-sm"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                              {translations.submitting}
                            </>
                          ) : (
                            <>
                              {translations.submit}
                              <ArrowRight className="ml-2 h-3.5 w-3.5" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              ) : (
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-lg p-6 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{translations.thankYou}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{translations.successMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
