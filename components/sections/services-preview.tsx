import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Stethoscope, Heart, Edit } from "lucide-react";
import Link from "next/link";

export function ServicesPreview() {
  const services = [
    {
      icon: Stethoscope,
      title: "Medical Consultation",
      description:
        "Comprehensive medical care with 6+ years of experience in emergency medicine and critical care.",
      category: "Medical",
    },
    {
      icon: Music,
      title: "Music Composition",
      description:
        "Original therapeutic compositions and healing melodies for wellness and meditation.",
      category: "Creative",
    },
    {
      icon: Heart,
      title: "Holistic Healing",
      description:
        "Combining medical expertise with musical therapy for comprehensive patient care.",
      category: "Wellness",
    },
    {
      icon: Edit,
      title: "Audio Production",
      description:
        "Professional recording, editing, and mastering services for musical projects.",
      category: "Creative",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between medical excellence and creative healing
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="animate-fade-in-up hover:shadow-lg transition-shadow text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <div className="text-xs text-primary font-medium">
                  {service.category}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button asChild size="lg" className="group">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
