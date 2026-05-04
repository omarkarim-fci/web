import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Omar Karim — Creative Developer',
  description: 'Building digital experiences with precision and purpose. UI/UX design, web development, and creative direction.',
  generator: 'v0.app',
  openGraph: {
    title: 'Omar Karim — Creative Developer',
    description: 'Building digital experiences with precision and purpose. UI/UX design, web development, and creative direction.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Karim — Creative Developer',
    description: 'Building digital experiences with precision and purpose. UI/UX design, web development, and creative direction.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
