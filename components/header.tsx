"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Connect", href: "#connect" },
]

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="text-[15px] font-semibold tracking-tight text-foreground transition-opacity hover:opacity-60"
        >
          Omar Karim
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </motion.header>
  )
}
