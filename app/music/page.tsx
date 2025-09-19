import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Music, Play } from "lucide-react"
import { albums } from "@/lib/assets"

export default function MusicPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="animate-fade-in-up text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Musical Journey</h1>
        <p className="text-xl text-muted-foreground mb-8">Healing through melodies and therapeutic compositions</p>

        {/* Platform Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" asChild>
            <a
              href="https://youtube.com/@achyutbhattarai?si=6g38Kk8GAiIPaxCV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              YouTube
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://open.spotify.com/artist/67uRntiBdDXmML4vM7zCQc?si=Qk6RwP9SSSySj8uFEu6xjw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Spotify
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://music.apple.com/us/artist/achyut-bhattarai/1547959956"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Apple Music
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://link.deezer.com/s/30yTnpLOvTULvWlC42PBe" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Deezer
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://tiktok.com/@loveachyut" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              TikTok
            </a>
          </Button>
        </div>
      </div>

      {/* Albums Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {albums.map((album, index) => (
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

              {/* YouTube Embed */}
              {album.youtubeId && (
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${album.youtubeId}`}
                    title={album.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

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
    </div>
  )
}
