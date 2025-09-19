import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Music, Play, ExternalLink } from "lucide-react"
import Link from "next/link"
import { albums } from "@/lib/assets"

export function MusicPreview() {
  const featuredAlbums = albums.slice(0, 3)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Musical Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Healing melodies and therapeutic compositions that touch the soul
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {featuredAlbums.map((album, index) => (
            <Card
              key={album.id}
              className="animate-fade-in-up hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src={`/abstract-geometric-shapes.png?height=200&width=200&query=${encodeURIComponent(album.title + " album cover music")}`}
                    alt={album.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-lg">{album.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Music className="h-4 w-4" />
                  <span>{album.songCount} songs</span>
                  <Badge variant="secondary" className="ml-auto">
                    {album.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4">{album.description}</p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Play className="h-4 w-4 mr-2" />
                    Play
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button asChild size="lg" className="group">
            <Link href="/music">
              Explore All Albums
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
