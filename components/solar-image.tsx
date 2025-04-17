"use client"

import { useEffect, useRef } from "react"

interface SolarImageProps {
  width: number
  height: number
  type: "residential" | "commercial" | "community" | "industrial" | "luxury" | "school"
  className?: string
}

export default function SolarImage({ width, height, type, className = "" }: SolarImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    // Draw background
    const drawBackground = () => {
      // Sky gradient
      const skyGradient = ctx.createLinearGradient(0, 0, 0, height * 0.7)
      skyGradient.addColorStop(0, "#87CEEB")
      skyGradient.addColorStop(1, "#E0F7FF")
      ctx.fillStyle = skyGradient
      ctx.fillRect(0, 0, width, height * 0.7)

      // Ground/roof
      const groundColor = type === "residential" || type === "luxury" ? "#8B4513" : "#7CFC00"
      ctx.fillStyle = groundColor
      ctx.fillRect(0, height * 0.7, width, height * 0.3)
    }

    // Draw solar panels based on type
    const drawSolarPanels = () => {
      ctx.fillStyle = "#1E3A8A"

      if (type === "residential" || type === "luxury") {
        // Roof mounted panels
        const panelWidth = width / 10
        const panelHeight = height / 8
        const startY = height * 0.5

        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 8; col++) {
            ctx.fillRect(
              width * 0.1 + col * (panelWidth + 5),
              startY + row * (panelHeight + 5),
              panelWidth,
              panelHeight,
            )

            // Panel grid lines
            ctx.strokeStyle = "#4B5563"
            ctx.lineWidth = 1
            ctx.strokeRect(
              width * 0.1 + col * (panelWidth + 5),
              startY + row * (panelHeight + 5),
              panelWidth,
              panelHeight,
            )

            // Panel reflection
            ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
            ctx.fillRect(
              width * 0.1 + col * (panelWidth + 5) + 2,
              startY + row * (panelHeight + 5) + 2,
              panelWidth / 2,
              panelHeight / 2,
            )
            ctx.fillStyle = "#1E3A8A"
          }
        }

        // Draw house
        if (type === "residential") {
          ctx.fillStyle = "#D97706"
          ctx.fillRect(width * 0.3, height * 0.65, width * 0.4, height * 0.25)
        } else {
          // Luxury house
          ctx.fillStyle = "#D97706"
          ctx.fillRect(width * 0.2, height * 0.65, width * 0.6, height * 0.25)
          // Windows
          ctx.fillStyle = "#E0F7FF"
          ctx.fillRect(width * 0.25, height * 0.7, width * 0.1, height * 0.1)
          ctx.fillRect(width * 0.45, height * 0.7, width * 0.1, height * 0.1)
          ctx.fillRect(width * 0.65, height * 0.7, width * 0.1, height * 0.1)
        }
      } else if (type === "commercial" || type === "industrial") {
        // Ground mounted commercial array
        const rows = type === "commercial" ? 5 : 8
        const panelWidth = width / 15
        const panelHeight = height / 12
        const startY = height * 0.5

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < 12; col++) {
            ctx.fillRect(
              width * 0.1 + col * (panelWidth + 2),
              startY + row * (panelHeight + 15),
              panelWidth,
              panelHeight,
            )

            // Panel grid lines
            ctx.strokeStyle = "#4B5563"
            ctx.lineWidth = 0.5
            ctx.strokeRect(
              width * 0.1 + col * (panelWidth + 2),
              startY + row * (panelHeight + 15),
              panelWidth,
              panelHeight,
            )

            // Panel supports
            if (col % 3 === 0) {
              ctx.fillStyle = "#6B7280"
              ctx.fillRect(
                width * 0.1 + col * (panelWidth + 2) + panelWidth / 2,
                startY + row * (panelHeight + 15) + panelHeight,
                2,
                height * 0.7 - (startY + row * (panelHeight + 15) + panelHeight),
              )
              ctx.fillStyle = "#1E3A8A"
            }
          }
        }

        // Industrial building
        if (type === "industrial") {
          ctx.fillStyle = "#6B7280"
          ctx.fillRect(width * 0.7, height * 0.6, width * 0.2, height * 0.3)
          // Roof
          ctx.fillStyle = "#4B5563"
          ctx.beginPath()
          ctx.moveTo(width * 0.68, height * 0.6)
          ctx.lineTo(width * 0.9, height * 0.6)
          ctx.lineTo(width * 0.8, height * 0.5)
          ctx.closePath()
          ctx.fill()
        }
      } else if (type === "community") {
        // Community solar garden
        const panelWidth = width / 12
        const panelHeight = height / 10

        for (let row = 0; row < 4; row++) {
          for (let col = 0; col < 10; col++) {
            ctx.fillRect(
              width * 0.1 + col * (panelWidth + 5),
              height * 0.5 + row * (panelHeight + 10),
              panelWidth,
              panelHeight,
            )

            // Panel grid lines
            ctx.strokeStyle = "#4B5563"
            ctx.lineWidth = 1
            ctx.strokeRect(
              width * 0.1 + col * (panelWidth + 5),
              height * 0.5 + row * (panelHeight + 10),
              panelWidth,
              panelHeight,
            )

            // Panel supports
            if (col % 2 === 0) {
              ctx.fillStyle = "#6B7280"
              ctx.fillRect(
                width * 0.1 + col * (panelWidth + 5) + panelWidth / 2,
                height * 0.5 + row * (panelHeight + 10) + panelHeight,
                2,
                10,
              )
              ctx.fillStyle = "#1E3A8A"
            }
          }
        }

        // Draw houses in background
        ctx.fillStyle = "#D97706"
        ctx.fillRect(width * 0.1, height * 0.3, width * 0.15, height * 0.15)
        ctx.fillRect(width * 0.3, height * 0.25, width * 0.15, height * 0.2)
        ctx.fillRect(width * 0.5, height * 0.3, width * 0.15, height * 0.15)
        ctx.fillRect(width * 0.7, height * 0.28, width * 0.15, height * 0.17)
      } else if (type === "school") {
        // School building
        ctx.fillStyle = "#DC2626"
        ctx.fillRect(width * 0.2, height * 0.4, width * 0.6, height * 0.3)

        // Windows
        ctx.fillStyle = "#E0F7FF"
        for (let i = 0; i < 6; i++) {
          ctx.fillRect(width * 0.25 + i * width * 0.1, height * 0.45, width * 0.05, height * 0.1)
        }

        // Roof
        ctx.fillStyle = "#7F1D1D"
        ctx.beginPath()
        ctx.moveTo(width * 0.15, height * 0.4)
        ctx.lineTo(width * 0.85, height * 0.4)
        ctx.lineTo(width * 0.5, height * 0.25)
        ctx.closePath()
        ctx.fill()

        // Solar panels on roof
        ctx.fillStyle = "#1E3A8A"
        const panelWidth = width / 15
        const panelHeight = height / 20

        for (let row = 0; row < 2; row++) {
          for (let col = 0; col < 10; col++) {
            ctx.fillRect(
              width * 0.25 + col * (panelWidth + 2),
              height * 0.28 + row * (panelHeight + 2),
              panelWidth,
              panelHeight,
            )

            // Panel grid lines
            ctx.strokeStyle = "#4B5563"
            ctx.lineWidth = 0.5
            ctx.strokeRect(
              width * 0.25 + col * (panelWidth + 2),
              height * 0.28 + row * (panelHeight + 2),
              panelWidth,
              panelHeight,
            )
          }
        }

        // Playground
        ctx.fillStyle = "#9CA3AF"
        ctx.fillRect(width * 0.1, height * 0.75, width * 0.3, height * 0.15)
      }
    }

    // Draw sun
    const drawSun = () => {
      ctx.fillStyle = "#FBBF24"
      ctx.beginPath()
      ctx.arc(width * 0.8, height * 0.2, width * 0.08, 0, Math.PI * 2)
      ctx.fill()

      // Sun rays
      ctx.strokeStyle = "#FBBF24"
      ctx.lineWidth = 2
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4
        const x1 = width * 0.8 + Math.cos(angle) * width * 0.1
        const y1 = height * 0.2 + Math.sin(angle) * width * 0.1
        const x2 = width * 0.8 + Math.cos(angle) * width * 0.15
        const y2 = height * 0.2 + Math.sin(angle) * width * 0.15

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
    }

    // Add text label
    const addLabel = () => {
      let label = ""
      switch (type) {
        case "residential":
          label = "Residential Solar"
          break
        case "commercial":
          label = "Commercial Solar Farm"
          break
        case "community":
          label = "Community Solar Project"
          break
        case "industrial":
          label = "Industrial Solar Solution"
          break
        case "luxury":
          label = "Luxury Home Solar"
          break
        case "school":
          label = "School Campus Solar"
          break
      }

      ctx.font = "bold 16px Arial"
      ctx.fillStyle = "#000000"
      ctx.textAlign = "center"
      ctx.fillText(label, width / 2, height - 20)
    }

    // Draw the image
    drawBackground()
    drawSolarPanels()
    drawSun()
    addLabel()
  }, [width, height, type])

  return <canvas ref={canvasRef} className={className} style={{ width, height }} />
}
