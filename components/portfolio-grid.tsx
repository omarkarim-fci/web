"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Interface Systems",
    category: "UI/UX Design",
    year: "2026",
    href: "#",
  },
  {
    title: "Motion Lab",
    category: "Creative Development",
    year: "2025",
    href: "#",
  },
  {
    title: "Digital Products",
    category: "Brand Identity",
    year: "2025",
    href: "#",
  },
  {
    title: "Design Tools",
    category: "Web Development",
    year: "2024",
    href: "#",
  },
]

export function PortfolioGrid() {
  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between md:mb-16"
        >
          <div>
            <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Selected Work
            </p>
            <h2 className="text-[32px] font-semibold tracking-tight text-foreground md:text-[40px]">
              Projects
            </h2>
          </div>

          <span className="hidden font-mono text-[12px] text-muted-foreground md:block">
            ({String(projects.length).padStart(2, "0")})
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              year={project.year}
              index={index}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
