import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">About Dr. Achyut Bhattarai</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Dedicated Medical Professional with 6+ Years of Experience
        </p>
      </div>

      <div className="grid gap-8 md:gap-12">
        {/* Personal Info */}
        <Card className="animate-slide-in-left">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Age: 33 years</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Bharatpur-6, Chitwan, Nepal</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              I am a hard working person with kind behavior. I like to interact with new people and participate in
              social activities. My passion extends beyond medicine into music, where I create healing melodies and
              therapeutic compositions.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-2 border-primary pl-4 space-y-4">
              <div>
                <h3 className="font-semibold">MBBS</h3>
                <p className="text-muted-foreground">Chitwan Medical College, Bharatpur</p>
                <p className="text-sm text-muted-foreground">January 2010 - July 2016</p>
                <Badge variant="secondary">Pass Division</Badge>
              </div>
              <div>
                <h3 className="font-semibold">12th Grade</h3>
                <p className="text-muted-foreground">Orchid Science College, Bharatpur</p>
                <p className="text-sm text-muted-foreground">July 2007 - June 2009</p>
                <Badge variant="secondary">Distinction Division</Badge>
              </div>
              <div>
                <h3 className="font-semibold">Grade 10</h3>
                <p className="text-muted-foreground">Sun Rise English School, Bharatpur</p>
                <p className="text-sm text-muted-foreground">January 2005 - June 2007</p>
                <Badge variant="secondary">Distinction Division</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Experience */}
        <Card className="animate-slide-in-left">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-2 border-primary pl-4 space-y-6">
              <div>
                <h3 className="font-semibold">Medical Officer</h3>
                <p className="text-muted-foreground">Nawalpur Hospital Pvt. Ltd., Kawasoti</p>
                <p className="text-sm text-muted-foreground">October 2024 - June 2025</p>
                <p className="text-sm mt-2">
                  Full-time medical officer handling OPD, Emergency department, and General ward.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Medical Officer - Emergency & ICU</h3>
                <p className="text-muted-foreground">Manakamana Hospital Pvt. Ltd., Bharatpur</p>
                <p className="text-sm text-muted-foreground">December 2019 - October 2023</p>
                <p className="text-sm mt-2">
                  Full-time medical officer in Emergency and ICU ward for almost 4 years, handling critical care and
                  emergency medical situations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Medical Officer - Medical Oncology</h3>
                <p className="text-muted-foreground">B.P. Koirala Memorial Cancer Hospital, Bharatpur</p>
                <p className="text-sm text-muted-foreground">June 2018 - November 2019</p>
                <p className="text-sm mt-2">
                  Specialized in medical oncology ward, providing care for cancer patients and supporting oncological
                  treatments.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Medical Officer - Emergency & ICU</h3>
                <p className="text-muted-foreground">Chitwan Hospital Pvt. Ltd., Bharatpur-10</p>
                <p className="text-sm text-muted-foreground">August 2017 - August 2018</p>
                <p className="text-sm mt-2">
                  First professional role as medical officer in Emergency and ICU ward, gaining valuable experience in
                  critical care medicine.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Rotatory Internship</h3>
                <p className="text-muted-foreground">Chitwan Medical College</p>
                <p className="text-sm text-muted-foreground">After MBBS completion</p>
                <p className="text-sm mt-2">
                  Completed rotatory internship in Medicine, Surgery, Pediatrics, Orthopaedics, Obstetrics and
                  Gynecology, ENT, Dermatology and other minor wards.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Languages */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Nepali</Badge>
                <Badge variant="outline">English</Badge>
                <Badge variant="outline">Hindi</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-medium">Basic Surgery Skills</h4>
                <p className="text-sm text-muted-foreground">Chitwan Medical College, 2017</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
