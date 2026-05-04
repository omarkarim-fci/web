"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-20 pb-16 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Main heading */}
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-4 text-[13px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            Creative Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground text-balance"
          >
            Building digital experiences with precision and purpose
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground"
          >
            Crafting interfaces and interactions that feel intuitive, look refined, and perform flawlessly.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-10 left-6 md:left-10 lg:left-16"
        >
          <a
            href="#work"
            className="group flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="rotate-90"
                aria-hidden
              >
                <path
                  d="M1 6H11M11 6L6 1M11 6L6 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
