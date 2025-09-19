import Link from "next/link"
import { Stethoscope, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Stethoscope className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-lg">Dr. Achyut Bhattarai</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Medical Professional & Musician dedicated to healing through medicine and music.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/music" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Music
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
            </nav>
          </div>

          {/* Music Platforms */}
          <div className="space-y-4">
            <h3 className="font-semibold">Music Platforms</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://youtube.com/@achyutbhattarai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://open.spotify.com/artist/67uRntiBdDXmML4vM7zCQc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Spotify
              </a>
              <a
                href="https://music.apple.com/us/artist/achyut-bhattarai/1547959956"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Apple Music
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+977-9845066698</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>bhattaraidon@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Bharatpur-6, Chitwan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Dr. Achyut Bhattarai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
