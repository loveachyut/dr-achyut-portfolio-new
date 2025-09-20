"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Music,
  Stethoscope,
  Play,
  MapPin,
  Award,
  Heart,
  Users,
  Calendar,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-10 animate-slide-in-left">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for Consultation
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                Dr. Achyut
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Bhattarai
                </span>
              </h1>

              {/* Professional Tags */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-lg shadow-sm">
                  <Stethoscope className="h-5 w-5 text-primary" />
                  <span className="font-medium">Medical Professional</span>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-lg shadow-sm">
                  <Music className="h-5 w-5 text-primary" />
                  <span className="font-medium">Healing Musician</span>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-lg shadow-sm">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="font-medium">Holistic Healer</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Pioneering the fusion of{" "}
                <span className="text-primary font-semibold">
                  medical excellence
                </span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  therapeutic music
                </span>{" "}
                for comprehensive healing experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With 6+ years in emergency medicine and over 100 healing
                compositions, I create harmony between traditional medical care
                and innovative music therapy.
              </p>
            </div>

            {/* Professional Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">Bharatpur, Nepal</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border">
                <Award className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Qualification</div>
                  <div className="text-muted-foreground">
                    MBBS, Emergency Medicine
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border">
                <Users className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Patients Treated</div>
                  <div className="text-muted-foreground">
                    1000+ Successfully
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border">
                <Music className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Music Albums</div>
                  <div className="text-muted-foreground">20+ Released</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group shadow-lg text-base px-8 py-4 h-auto"
              >
                <Link
                  href="https://wa.me/9779845066698"
                  className="flex items-center"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8 py-4 h-auto border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <Link href="/music" className="flex items-center">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Explore Music
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+977-9845066698</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>bhattaraidon@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Side - Photo & Stats */}
          <div className="relative animate-fade-in-up space-y-8">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                <img
                  src="/my-photo.jpg"
                  alt="Dr. Achyut Bhattarai"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">6+ Years</div>
                    <div className="text-xs text-muted-foreground">
                      Medical Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Music Card */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Music className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">100+</div>
                    <div className="text-xs text-muted-foreground">
                      Compositions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl p-6 border border-primary/20 text-center">
                <div className="text-3xl font-bold text-primary mb-1">4</div>
                <div className="text-sm text-muted-foreground">
                  Hospitals Served
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-xl p-6 border border-accent/20 text-center">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">
                  Albums Released
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Specializations */}
        <div
          className="mt-20 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Areas of Expertise
            </h3>
            <p className="text-muted-foreground">
              Comprehensive care across medical and creative domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Stethoscope className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Emergency Medicine</h4>
              <p className="text-sm text-muted-foreground">
                Critical care and emergency medical interventions with precision
                and compassion
              </p>
            </div>

            <div className="text-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Music className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Music Therapy</h4>
              <p className="text-sm text-muted-foreground">
                Therapeutic compositions designed to promote healing and
                emotional wellness
              </p>
            </div>

            <div className="text-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Holistic Care</h4>
              <p className="text-sm text-muted-foreground">
                Integrated approach combining traditional medicine with creative
                healing methods
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
