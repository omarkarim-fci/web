"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-full bg-surface" aria-hidden />
    )
  }

  const isDark = resolvedTheme === "dark"

  const handleThemeToggle = async () => {
    // Trigger theme change
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <motion.button
      onClick={handleThemeToggle}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full",
        "bg-surface",
        "transition-all duration-300 hover:bg-surface-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "relative overflow-hidden"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -180, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 180, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {isDark ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground" aria-hidden>
              <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 1V2M8 14V15M15 8H14M2 8H1M12.95 3.05L12.24 3.76M3.76 12.24L3.05 12.95M12.95 12.95L12.24 12.24M3.76 3.76L3.05 3.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground" aria-hidden>
              <path d="M14.354 10.354A7 7 0 1 1 5.646 1.646a5.5 5.5 0 1 0 8.708 8.708z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}
