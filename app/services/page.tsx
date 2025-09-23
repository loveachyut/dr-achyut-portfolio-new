import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Music,
  Video,
  Edit,
  Mic,
  Settings,
  Stethoscope,
  Heart,
  Users,
  Mail,
  Phone,
} from "lucide-react";

export default function ServicesPage() {
  const musicServices = [
    {
      icon: Music,
      title: "Music Composition",
      description:
        "Original compositions for various genres including healing music, instrumental pieces, and therapeutic melodies.",
    },
    {
      icon: Video,
      title: "Video Production",
      description:
        "Complete video production services for music videos, promotional content, and artistic visual storytelling.",
    },
    {
      icon: Edit,
      title: "Audio/Video Editing",
      description:
        "Professional editing services for audio tracks, music videos, and multimedia content with attention to detail.",
    },
    {
      icon: Mic,
      title: "Recording Services",
      description:
        "High-quality recording sessions for vocals, instruments, and complete musical arrangements.",
    },
    {
      icon: Settings,
      title: "Audio Mastering",
      description:
        "Professional mastering services to enhance your tracks with optimal sound quality and industry standards.",
    },
  ];

  const medicalServices = [
    {
      icon: Stethoscope,
      title: "General Medicine",
      description:
        "Comprehensive medical consultations and treatment for various health conditions with 6+ years of experience.",
    },
    {
      icon: Heart,
      title: "Emergency Care",
      description:
        "Specialized in emergency medicine and critical care with extensive ICU experience.",
    },
    {
      icon: Users,
      title: "Medical Oncology",
      description:
        "Experience in cancer care and oncological treatments from B.P. Koirala Memorial Cancer Hospital.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="animate-fade-in-up text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Professional Services
        </h1>
        <p className="text-xl text-muted-foreground">
          Combining medical expertise with creative musical services
        </p>
      </div>

      {/* Music Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-8 animate-slide-in-left">
          Music & Creative Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {musicServices.map((service, index) => (
            <Card
              key={service.title}
              className="animate-fade-in-up hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Medical Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-8 animate-slide-in-left">
          Medical Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {medicalServices.map((service, index) => (
            <Card
              key={service.title}
              className="animate-fade-in-up hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <Card className="max-w-2xl mx-auto animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-2xl">Get In Touch</CardTitle>
            <p className="text-muted-foreground">
              Ready to collaborate or need medical consultation? Let's connect!
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+977-9845066698</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>bhattaraidon@gmail.com</span>
              </div>
            </div>
            <a
              href="https://wa.me/9779845066698"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full md:w-auto">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
