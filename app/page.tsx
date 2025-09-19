import { HeroSection } from "@/components/sections/hero-section"
import { AboutPreview } from "@/components/sections/about-preview"
import { MusicPreview } from "@/components/sections/music-preview"
import { ServicesPreview } from "@/components/sections/services-preview"

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <AboutPreview />
      <MusicPreview />
      <ServicesPreview />
    </div>
  )
}
