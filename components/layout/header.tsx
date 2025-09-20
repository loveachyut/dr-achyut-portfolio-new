"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Stethoscope, Music, Calendar, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Music", href: "/music" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b shadow-sm"
          : "bg-background/60 backdrop-blur-sm border-b border-border/50"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Stethoscope className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center">
                <Music className="h-2 w-2 text-primary" />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-lg lg:text-xl">
                Dr. Achyut Bhattarai
              </div>
              <div className="text-xs text-muted-foreground -mt-1">
                Medical Professional & Musician
              </div>
            </div>
            <div className="sm:hidden">
              <span className="font-serif font-bold text-lg">Dr. Achyut</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-all duration-200 hover:text-primary py-2",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="hidden xl:flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="tel:+9779845066698">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              <Link
                href="https://wa.me/9779845066698"
                className="flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Book Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur-md">
            <nav className="py-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-base font-medium transition-colors rounded-lg mx-2",
                    pathname === item.href
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Action Buttons */}
              <div className="px-2 pt-4 space-y-3 border-t border-border mt-4">
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2"
                  asChild
                >
                  <a
                    href="tel:+9779845066698"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button className="w-full justify-center gap-2" asChild>
                  <Link
                    href="https://wa.me/9779845066698"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Calendar className="h-4 w-4" />
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
