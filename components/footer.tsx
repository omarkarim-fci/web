"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border px-6 py-8 md:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-[13px] text-muted-foreground">
          &copy; {currentYear} Omar Karim
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
