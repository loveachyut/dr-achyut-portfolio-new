import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Music,
  Play,
  ExternalLink,
  Youtube,
  Clock,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { albums } from "@/lib/assets";
import Image from "next/image";

export function MusicPreview() {
  const featuredAlbums = albums.slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Music className="h-4 w-4" />
            Musical Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Healing Through Music
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Therapeutic compositions that bridge the gap between medical care
            and emotional wellness
          </p>
        </div>

        {/* Featured Albums Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {featuredAlbums.map((album, index) => (
            <Card
              key={album.id}
              className="group animate-fade-in-up hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="p-0">
                {/* Album Cover */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={album.image}
                    alt={album.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="h-6 w-6 text-primary-foreground ml-1" />
                    </div>
                  </div>

                  {/* Album Type Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-background/80 backdrop-blur-sm text-foreground border-0 shadow-lg"
                    >
                      {album.type}
                    </Badge>
                  </div>
                </div>

                {/* Album Info */}
                <div className="p-6 pb-4">
                  <CardTitle className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                    {album.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Music className="h-4 w-4" />
                      <span>{album.songCount} tracks</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {album.description}
                </p>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="group/btn bg-background/50 hover:bg-primary hover:text-primary-foreground border-border/50 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={album.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Music className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Spotify
                      <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="group/btn bg-background/50 hover:bg-destructive hover:text-white  border-border/50 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={`https://www.youtube.com/watch?v=${album.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      YouTube
                      <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              20+
            </div>
            <div className="text-sm text-muted-foreground">Albums Released</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              100+
            </div>
            <div className="text-sm text-muted-foreground">Songs Composed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              50K+
            </div>
            <div className="text-sm text-muted-foreground">
              Monthly Listeners
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              55+
            </div>
            <div className="text-sm text-muted-foreground">
              Countries Reached
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Discover the Complete Collection
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore my full discography featuring therapeutic melodies,
              healing compositions, and musical journeys designed to promote
              wellness and inner peace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group shadow-lg">
                <Link href="/music">
                  Explore All Albums
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group bg-background/50"
              >
                <Link href="https://wa.me/9779845066698">
                  Commission a Piece
                  <Music className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
