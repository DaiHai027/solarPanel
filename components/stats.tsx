"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

const Counter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // ms
      const step = Math.ceil(value / (duration / 16)) // 60fps

      const timer = setInterval(() => {
        start += step
        if (start > value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-light">
      {prefix}
      {Math.floor(count)}
      {suffix}
    </div>
  )
}

export default function Stats({ dictionary }: { dictionary: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {dictionary.items.map((stat: any, index: number) => (
            <div key={index} className="p-6">
              <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <p className="mt-2 text-white/80">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
