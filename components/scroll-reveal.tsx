"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollReveal({ children, className, delay = 0, direction = "up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      element.style.opacity = "1"
      element.style.transform = "none"
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
              entry.target.classList.remove("opacity-0")
              entry.target.classList.remove("translate-y-8", "translate-x-8", "-translate-y-8", "-translate-x-8")
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-8"
      case "down":
        return "-translate-y-8"
      case "left":
        return "translate-x-8"
      case "right":
        return "-translate-x-8"
      default:
        return "translate-y-8"
    }
  }

  return (
    <div ref={ref} className={cn("opacity-0 transition-all duration-700 ease-out", getInitialTransform(), className)}>
      {children}
    </div>
  )
}
