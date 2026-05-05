"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { WorkSectionLogo } from "@/components/work-section-logo"

export function WorkConnectSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [blurAmount, setBlurAmount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      // Calculate blur based on scroll position
      // Start blur when section enters viewport, max out at middle
      if (sectionTop < windowHeight && sectionTop > 0) {
        const scrollProgress = 1 - sectionTop / windowHeight
        const blur = Math.min(scrollProgress * 15, 15)
        setBlurAmount(blur)
      } else if (sectionTop <= 0) {
        setBlurAmount(15)
      } else {
        setBlurAmount(0)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="work-connect"
      className="relative px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      {/* Background blur layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
          backgroundColor: `rgba(255, 255, 255, ${blurAmount * 0.01})`,
        }}
        aria-hidden
      />

      {/* Content container with relative positioning */}
      <div ref={contentRef} className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {/* Logo and Title */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <WorkSectionLogo />
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Omar Karim
              </p>
              <h2 className="text-[28px] md:text-[36px] font-semibold tracking-tight text-foreground">
                Work & Connect
              </h2>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-border via-border to-transparent mb-12 max-w-md"
          />

          {/* Main content grid */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left: Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <p className="text-[15px] leading-relaxed text-muted-foreground mb-4">
                  I create digital experiences that blend design and development seamlessly. 
                  From concept to deployment, every detail is crafted with intention and precision.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Whether you&apos;re looking to build something new or refine an existing project, 
                  I&apos;m here to help bring your vision to life.
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 pt-4"
              >
                <a
                  href="#connect"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-foreground text-background font-medium text-[14px] transition-opacity hover:opacity-80"
                >
                  Get in Touch
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-medium text-[14px] transition-colors hover:bg-surface"
                >
                  View Work
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Stats or Featured Work */}
            <motion.div
              variants={itemVariants}
              className="space-y-8 pt-4 lg:pt-0"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Years Experience", value: "5+" },
                  { label: "Projects Completed", value: "30+" },
                  { label: "Happy Clients", value: "25+" },
                  { label: "Technologies", value: "15+" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="p-4 rounded-lg bg-surface/50 border border-surface-border"
                  >
                    <p className="text-[24px] md:text-[28px] font-semibold text-foreground mb-2">
                      {stat.value}
                    </p>
                    <p className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            variants={itemVariants}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
