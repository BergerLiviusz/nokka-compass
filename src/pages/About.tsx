import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Dr. Nagy Péter",
      role: "Alapító, Kutatásvezető",
      bio: "Közgazdaságtan PhD, 15+ év tapasztalat munkaerő-gazdaságtanban és oktatáspolitikában.",
      affiliations: ["BCE", "MTA KRTK"],
      email: "peter.nagy@nokka.hu",
      linkedin: "https://linkedin.com/in/peternagy-econ"
    },
    {
      name: "Dr. Kovács Anna",
      role: "Senior kutató",
      bio: "Szervezetgazdaságtan és innováció-kutatás szakértője, számos nemzetközi publikációval.",
      affiliations: ["ELTE", "European Innovation Network"],
      email: "anna.kovacs@nokka.hu",
      linkedin: "https://linkedin.com/in/annakovacs-research"
    },
    {
      name: "Horváth Gábor",
      role: "Adat-tudós",
      bio: "Gazdaságinformatikus háttérrel, gépi tanulás és prediktív modellek szakértője.",
      affiliations: ["BME", "Hungarian AI Association"],
      email: "gabor.horvath@nokka.hu",
      linkedin: "https://linkedin.com/in/gaborhorvath-data"
    },
    {
      name: "Dr. Tóth Eszter",
      role: "Oktatáspolitikai szakértő",
      bio: "Oktatásgazdaságtan és társadalmi egyenlőtlenségek kutatója, 10+ év közpolitikai tapasztalat.",
      affiliations: ["PPKE", "OECD Education"],
      email: "eszter.toth@nokka.hu",
      linkedin: "https://linkedin.com/in/esztertoth-education"
    }
  ];

  const values = [
    {
      title: "Tudományos megalapozottság",
      description: "Minden munkánkat szigorú tudományos módszerekkel végezzük, nemzetközi standardok szerint."
    },
    {
      title: "Gyakorlati releváncia", 
      description: "Kutatásaink és tanácsadásunk közvetlen hasznot hoz az érintett szervezetek és közösségek számára."
    },
    {
      title: "Átláthatóság",
      description: "Módszereink, eredményeink és korlátaink nyíltan kommunikálunk minden partnerünkkel."
    },
    {
      title: "Társadalmi felelősség",
      description: "Tudásunkat a magyar társadalom és gazdaság fejlődésének szolgálatába állítjuk."
    }
  ];

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Rólunk</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A NOKKA egy független magyar kutatói közösség, amely közgazdasági 
          kutatásokkal, tanácsadással és oktatással foglalkozik.
        </p>
      </div>

      {/* Mission */}
      <div className="mb-16">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Küldetésünk</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none dark:prose-invert">
            <p className="text-lg text-center text-muted-foreground">
              Célja, hogy magas színvonalú közgazdasági kutatások és innovatív elemzési módszerek 
              segítségével hozzájáruljunk a magyar gazdaság és társadalom fejlődéséhez. 
              Hidat építünk a tudományos kutatás és a gyakorlati alkalmazás között.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Értékeink</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Csapatunk</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                
                <div>
                  <h4 className="font-medium mb-2">Affiliációk:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.affiliations.map((affiliation, affIndex) => (
                      <Badge key={affIndex} variant="outline">
                        {affiliation}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    E-mail
                  </a>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Collaboration CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Csatlakozz hozzánk!</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Keresünk motivált kutatókat, adattudósokat és közgazdaság szakértőket csapatunkba. 
          Ha érdekel a tudományos munka és a gyakorlati alkalmazás, jelentkezz!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Kutatói pozíciók
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline">
            Gyakornoki program
          </Button>
        </div>
      </div>
    </div>
  );
}