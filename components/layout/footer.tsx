import Link from "next/link";
import {
  Stethoscope,
  Mail,
  Phone,
  MapPin,
  Music,
  Youtube,
  ExternalLink,
  Heart,
  Award,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Me", href: "/about" },
    { name: "My Music", href: "/music" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const musicPlatforms = [
    {
      name: "YouTube",
      href: "https://youtube.com/@achyutbhattarai",
      icon: Youtube,
      color: "text-red-500",
    },
    {
      name: "Spotify",
      href: "https://open.spotify.com/artist/67uRntiBdDXmML4vM7zCQc",
      icon: Music,
      color: "text-green-500",
    },
    {
      name: "Apple Music",
      href: "https://music.apple.com/us/artist/achyut-bhattarai/1547959956",
      icon: Music,
      color: "text-blue-500",
    },
  ];

  const achievements = [
    { icon: Award, label: "6+ Years Experience", value: "Medical" },
    { icon: Music, label: "20+ Albums", value: "Released" },
    { icon: Users, label: "1000+ Patients", value: "Treated" },
    { icon: Heart, label: "Holistic Care", value: "Approach" },
  ];

  return (
    <footer className="bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Enhanced Brand Section */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Stethoscope className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center">
                  <Music className="h-3 w-3 text-primary" />
                </div>
              </div>
              <div>
                <div className="font-serif font-bold text-xl">
                  Dr. Achyut Bhattarai
                </div>
                <div className="text-sm text-muted-foreground">
                  Healing Through Medicine & Music
                </div>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Dedicated medical professional and musician committed to holistic
              healing through the perfect blend of traditional medicine and
              therapeutic music.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-card/50 rounded-lg border border-border/50"
                >
                  <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold">{item.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <div className="w-2 h-6 bg-primary rounded-full" />
              Quick Links
            </h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-1 h-1 bg-muted-foreground rounded-full group-hover:bg-primary transition-colors" />
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Professional Services */}
            <div className="pt-4 border-t border-border/50">
              <h4 className="font-medium text-sm mb-3 text-foreground/80">
                Professional Services
              </h4>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <Stethoscope className="h-3 w-3 text-primary" />
                  Emergency Medicine
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <Music className="h-3 w-3 text-primary" />
                  Music Therapy
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <Heart className="h-3 w-3 text-primary" />
                  Holistic Care
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Music Platforms */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <div className="w-2 h-6 bg-accent rounded-full" />
              Music Platforms
            </h3>
            <div className="space-y-4">
              {musicPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50 hover:shadow-md transition-all group"
                >
                  <platform.icon className={`h-5 w-5 ${platform.color}`} />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{platform.name}</div>
                    <div className="text-xs text-muted-foreground">
                      Listen to my music
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            {/* Music Stats */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">20+</div>
                <div className="text-xs text-muted-foreground">
                  Albums Available
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Section */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <div className="w-2 h-6 bg-green-500 rounded-full" />
              Get In Touch
            </h3>

            <div className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+9779845066698"
                  className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50 hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">+977-9845066698</div>
                    <div className="text-xs text-muted-foreground">
                      24/7 Emergency Line
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:bhattaraidon@gmail.com"
                  className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50 hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      bhattaraidon@gmail.com
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Professional Inquiries
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      Bharatpur-6, Chitwan
                    </div>
                    <div className="text-xs text-muted-foreground">Nepal</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className="w-full shadow-md hover:shadow-lg transition-shadow"
              >
                <Link
                  href="https://wa.me/9779845066698"
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Book Consultation
                </Link>
              </Button>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-700 dark:text-green-400">
                  Currently Available
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                Emergency consultations • Music therapy sessions
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              <p>
                &copy; {currentYear} Dr. Achyut Bhattarai. All rights reserved.
              </p>
              <p className="text-xs mt-1">
                Healing lives through medicine and music since 2018
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Heart className="h-3 w-3 text-red-500" />
                Designed and Developed By{" "}
                <a
                  href="https://abishekn.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative font-medium text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  Abishek
                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
