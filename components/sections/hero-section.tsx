"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Music, Stethoscope, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Image */}
          <div className="animate-fade-in-up">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center animate-pulse-slow">
              <img src="/my-photo.jpg" alt="Dr. Achyut Bhattarai" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-slide-in-left space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Dr. Achyut Bhattarai
            </h1>
            <div className="flex items-center justify-center gap-4 text-lg md:text-xl text-muted-foreground">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-primary" />
                <span>Medical Professional</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="flex items-center gap-2">
                <Music className="h-5 w-5 text-primary" />
                <span>Musician</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up space-y-4" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Healing through medicine and music. With 6+ years of medical experience and a passion for creating
              therapeutic melodies.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From emergency care to musical compositions, I believe in the power of healing in all its forms.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" asChild className="group">
              <Link href="/about">
                Learn About My Journey
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group bg-transparent">
              <Link href="/music">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Explore My Music
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-in-up grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">6+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Albums Released</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Hospitals Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Songs Composed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
