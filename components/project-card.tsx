"use client"

import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  category: string
  year: string
  index: number
  href?: string
}

export function ProjectCard({ title, category, year, index, href = "#" }: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative block overflow-hidden rounded-lg bg-surface p-6 transition-colors duration-300 hover:bg-surface-hover md:p-8"
    >
      {/* Number */}
      <span className="mb-8 block font-mono text-[11px] text-muted-foreground">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[22px] font-semibold leading-tight tracking-tight text-foreground md:text-[26px]">
          {title}
        </h3>

        <div className="flex items-center gap-3 text-[13px] text-muted-foreground">
          <span>{category}</span>
          <span className="h-1 w-1 rounded-full bg-current opacity-40" />
          <span>{year}</span>
        </div>
      </div>

      {/* Arrow */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
          aria-hidden
        >
          <path
            d="M5.83331 14.1667L14.1666 5.83337M14.1666 5.83337H5.83331M14.1666 5.83337V14.1667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.a>
  )
}
