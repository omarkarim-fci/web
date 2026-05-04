"use client"

import { motion } from "framer-motion"

const skills = [
  "UI/UX Design",
  "Web Development",
  "Creative Direction",
  "Brand Identity",
  "Motion Design",
  "Prototyping",
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Background
            </p>
            <h2 className="text-[32px] font-semibold tracking-tight text-foreground md:text-[40px]">
              About
            </h2>
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <p className="text-[17px] leading-relaxed text-foreground">
                I focus on creating digital experiences that balance aesthetics with functionality. My approach combines systematic design thinking with creative exploration.
              </p>
              <p className="text-[16px] leading-relaxed text-muted-foreground">
                Whether it&apos;s building interfaces, developing brands, or crafting interactions—I aim for work that feels considered and purposeful. Every detail matters.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-surface px-4 py-2 text-[13px] font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
