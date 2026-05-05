"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

/**
 * WorkSectionLogo Component
 * 
 * Renders an animated logo that smoothly transitions between dark and light mode versions.
 * The logo features:
 * - Dark mode: Solid filled design with circular background
 * - Light mode: Outlined design with gradient accent and dashed circle
 * - Smooth 400ms fade/scale animation on theme switch
 * - Uses Framer Motion for polished motion curves
 */
export function WorkSectionLogo() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-12 w-12 bg-surface rounded-lg" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <motion.div
      key={`logo-${isDark}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {isDark ? (
        // Dark mode logo
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className="text-foreground"
          aria-label="Omar Karim logo dark mode"
        >
          <rect x="4" y="4" width="40" height="40" rx="8" fill="currentColor" opacity="0.1" />
          <path
            d="M12 20L18 26L36 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        </svg>
      ) : (
        // Light mode logo
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className="text-foreground"
          aria-label="Omar Karim logo light mode"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="48" y2="48">
              <stop offset="0%" stopColor="currentColor" />
              <stop offset="100%" stopColor="currentColor" opacity="0.6" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="40" height="40" rx="8" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
          <path
            d="M12 20L18 26L36 14"
            stroke="url(#logoGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeDasharray="4 4" />
        </svg>
      )}
    </motion.div>
  )
}
