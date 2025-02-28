"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  blinkDuration: number
}

export default function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const starCount = 200
      const newStars: Star[] = []

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          blinkDuration: Math.random() * 3 + 2,
        })
      }

      setStars(newStars)
    }

    generateStars()

    // Handle window resize
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-b from-[#240d24] to-[#1b0221] -z-10">
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity, 0.1, star.opacity],
          }}
          transition={{
            duration: star.blinkDuration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Larger stars with glow */}
      {stars
        .filter((_, i) => i % 20 === 0) // Select every 20th star to be a larger one
        .map((star) => (
          <motion.div
            key={`glow-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size * 2}px`,
              height: `${star.size * 2}px`,
              boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255, 255, 255, 0.7)`,
            }}
            animate={{
              opacity: [0.8, 0.2, 0.8],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.blinkDuration * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}

      {/* Subtle nebula effect */}
      <div
        className="absolute inset-0 bg-gradient-radial from-purple-900/10 to-transparent opacity-30"
        style={{ top: "20%", left: "30%", width: "40%", height: "40%" }}
      />
      <div
        className="absolute inset-0 bg-gradient-radial from-blue-900/10 to-transparent opacity-20"
        style={{ top: "50%", left: "60%", width: "30%", height: "30%" }}
      />
    </div>
  )
}

