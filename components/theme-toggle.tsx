"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
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

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full",
        "bg-surface",
        "transition-all duration-200 hover:bg-surface-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
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
    </button>
  )
}
