import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Briefcase, Award } from "lucide-react"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">About Dr. Achyut Bhattarai</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A dedicated medical professional with a passion for healing through both medicine and music
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold">Medical Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 6 years of experience in Nepal's healthcare system, I have dedicated my career to providing
                  exceptional medical care. From emergency medicine to oncology, my journey has been focused on healing
                  and compassionate patient care.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold">Musical Healing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond medicine, I create therapeutic music that heals the soul. My compositions blend traditional
                  Nepali melodies with modern healing frequencies, creating a unique musical experience that complements
                  medical treatment.
                </p>
              </div>

              <Button asChild className="group">
                <Link href="/about">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="animate-fade-in-up space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Education</h4>
                      <p className="text-sm text-muted-foreground">
                        MBBS from Chitwan Medical College with distinction in previous academic achievements
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Experience</h4>
                      <p className="text-sm text-muted-foreground">
                        6+ years across multiple hospitals including emergency care, ICU, and medical oncology
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Specializations</h4>
                      <p className="text-sm text-muted-foreground">
                        Emergency Medicine, Critical Care, Medical Oncology, and Therapeutic Music Composition
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
