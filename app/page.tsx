import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { AboutSection } from "@/components/about-section"
import { WorkConnectSection } from "@/components/work-connect-section"
import { ConnectSection } from "@/components/connect-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioGrid />
        <AboutSection />
        <WorkConnectSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  )
}
