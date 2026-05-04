"use client"

import { motion } from "framer-motion"
import { SocialCard } from "@/components/social-card"

function SnapchatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12.166.006C9.84-.054 5.965 1.253 4.44 5.21c-.42 1.1-.327 2.357-.357 3.514-.42.229-.865.353-1.317.367-.356.012-.79-.084-1.132.09-.266.136-.4.417-.374.706.044.457.488.727.897.874.46.166.966.22 1.37.507.226.16.31.415.396.652.177.488.34.982.555 1.457.05.11.066.247.015.357C3.6 15.3 2.13 16.15.9 17.334c-.228.22-.4.515-.29.832.17.487.703.656 1.153.727 1.198.19 2.374-.192 3.533-.446.237-.051.502-.064.724.032.228.1.373.307.517.497.484.638 1.017 1.274 1.73 1.673.738.415 1.59.528 2.424.573.292.016.584.02.876.021.292-.001.584-.005.876-.02.834-.046 1.686-.158 2.424-.574.713-.4 1.246-1.035 1.73-1.673.144-.19.289-.397.517-.497.222-.096.487-.083.724-.032 1.16.254 2.335.636 3.533.446.45-.07.983-.24 1.153-.727.11-.317-.062-.612-.29-.832-1.23-1.184-2.7-2.034-3.593-3.6-.05-.11-.035-.248.015-.357.215-.476.378-.97.555-1.457.086-.237.17-.492.396-.652.405-.287.91-.34 1.37-.507.41-.147.853-.417.897-.874.026-.289-.108-.57-.374-.706-.342-.174-.776-.078-1.132-.09-.452-.014-.896-.138-1.317-.367-.03-1.157.063-2.415-.357-3.514C18.047 1.202 14.09-.05 12.166.006z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

const socialLinks = [
  {
    label: "Snapchat",
    handle: "okarim.cc",
    href: "https://www.snapchat.com/add/okarim.cc",
    icon: <SnapchatIcon />,
  },
  {
    label: "TikTok",
    handle: "@okarim.cc",
    href: "https://www.tiktok.com/@okarim.cc",
    icon: <TikTokIcon />,
  },
  {
    label: "Instagram",
    handle: "okarim.cc",
    href: "https://www.instagram.com/okarim.cc",
    icon: <InstagramIcon />,
  },
]

export function ConnectSection() {
  return (
    <section id="connect" className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Get in Touch
            </p>
            <h2 className="text-[32px] font-semibold tracking-tight text-foreground md:text-[40px]">
              Connect
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted-foreground">
              Find me on social media or reach out directly. Always open to conversations about design, development, and creative collaborations.
            </p>
          </motion.div>

          {/* Right: Social links */}
          <div className="flex flex-col gap-3">
            {socialLinks.map((link, index) => (
              <SocialCard
                key={link.label}
                label={link.label}
                handle={link.handle}
                href={link.href}
                icon={link.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
