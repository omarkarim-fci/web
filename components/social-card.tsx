"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SocialCardProps {
  label: string
  handle: string
  href: string
  icon: React.ReactNode
  index: number
  className?: string
}

export function SocialCard({ label, handle, href, icon, index, className }: SocialCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "group flex items-center justify-between gap-4 rounded-lg px-5 py-4",
        "bg-surface",
        "transition-all duration-200 ease-out",
        "hover:bg-surface-hover",
        className
      )}
      aria-label={`Visit Omar Karim on ${label}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.06]">
          {icon}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
            {label}
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            {handle}
          </span>
        </div>
      </div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
        aria-hidden
      >
        <path
          d="M4.66669 11.3333L11.3334 4.66667M11.3334 4.66667H4.66669M11.3334 4.66667V11.3333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  )
}
