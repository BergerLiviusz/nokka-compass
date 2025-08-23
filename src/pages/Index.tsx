import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, TrendingUp, Users, BookOpen, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import researchCollaboration from "@/assets/research-collaboration.jpg";
import educationWorkspace from "@/assets/education-workspace.jpg";
import dataAnalysis from "@/assets/data-analysis.jpg";
import researchCoding from "@/assets/research-coding-2.jpg";
import researchLab from "@/assets/research-data-analytics.jpg";
import institutionBuilding from "@/assets/institution-building.jpg";
import economicAnalysis from "@/assets/economic-analysis.jpg";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Sikeresen feliratkozott hírlevelünkre!");
      setEmail("");
    }
  };

  const featuredResearch = [
    {
      title: "A távmunka hatása a munkavállalói termelékenységre",
      abstract: "Átfogó elemzés a COVID-19 járvány alatt bevezetett távmunka hosszú távú hatásairól.",
      type: "Tanulmány",
      publishedAt: "2024-01-15",
      slug: "tavmunka-hatas-termekenyseg",
      image: educationWorkspace
    },
    {
      title: "Digitális transzformáció a magyar KKV szektorban", 
      abstract: "Empirikus vizsgálat a digitális elfogadási mintákról és gazdasági hatásokról.",
      type: "Kutatás",
      publishedAt: "2024-01-10",
      slug: "digital-transformation-smes",
      image: dataAnalysis
    },
    {
      title: "Oktatási egyenlőtlenségek a vidéki Magyarországon",
      abstract: "Részletes elemzés az oktatási hozzáférés és minőség területi különbségeiről.",
      type: "Blog",
      publishedAt: "2023-12-20", 
      slug: "oktatasi-egyenlotlensegek",
      image: researchCoding
    }
  ];

  const services = [
    {
      icon: Search,
      title: "Kutatás",
      description: "Magas színvonalú közgazdasági kutatások és elemzések a legmodernebb módszerekkel.",
      image: researchLab
    },
    {
      icon: TrendingUp,
      title: "Tanácsadás",
      description: "Szakértői tanácsadás vállalatok és közintézmények számára adatvezérelt döntéshozatalhoz.",
      image: institutionBuilding
    },
    {
      icon: BookOpen,
      title: "Oktatás",
      description: "Gyakorlat-orientált képzési programok és workshopok minden szintű résztvevő számára.",
      image: educationWorkspace
    }
  ];

  const partners = [
    "Magyar Tudományos Akadémia",
    "Budapesti Corvinus Egyetem", 
    "Eötvös Loránd Tudományegyetem",
    "Budapesti Műszaki Egyetem"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="relative overflow-hidden py-0 md:py-0 min-h-screen flex">
        {/* Video Side */}
        <div className="relative flex-1 min-h-screen">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            style={{ opacity: 0.7 }}
          >
            <source src="/uhd_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-nokka-green/30" />
        </div>

        {/* Text Content Side */}
        <div className="flex-1 bg-background flex items-center justify-center p-8 md:p-16">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Közgazdasági kutatás. <br />
              <span className="text-primary">Tanácsadás. Oktatás.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              NOKKA – magyar kutatói közösség és innovációs műhely a gazdaságtudomány 
              és adatelemzés szolgálatában.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/research">
                <Button variant="hero" size="lg">
                  Fedezd fel a kutatásokat
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Kapcsolatfelvétel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Kiemelt kutatások
            </h2>
            <p className="text-lg text-muted-foreground">
              Legfrissebb tanulmányaink és elemzéseink, amelyek befolyásolják a magyar 
              gazdaságpolitikai gondolkodást.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredResearch.map((research, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={research.image} 
                    alt={research.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm"
                  >
                    {research.type}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">
                      {new Date(research.publishedAt).toLocaleDateString("hu-HU")}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {research.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {research.abstract}
                  </CardDescription>
                  <Link to={`/research/${research.slug}`}>
                    <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/5">
                      Tovább olvasás
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/research">
              <Button size="lg">
                Összes kutatás megtekintése
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Mit csinálunk?
            </h2>
            <p className="text-lg text-muted-foreground">
              Háromoszlopos megközelítésünk biztosítja a tudományos megalapozottságot 
              és a gyakorlati alkalmazhatóságot.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow group overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/90 backdrop-blur-sm">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Partnereink
            </h2>
            <p className="text-lg text-muted-foreground">
              Vezető magyar felsőoktatási és kutatási intézményekkel dolgozunk együtt.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <p className="font-medium text-muted-foreground">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Mail className="mx-auto mb-6 h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Iratkozzon fel hírlevelünkre
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Legyen naprakész legfrissebb kutatásainkkal, eseményeinkkel és 
              publikációinkkal.
            </p>
            
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="E-mail címe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">
                Feliratkozás
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4">
              Bármikor leiratkozhat. Adatait bizalmasan kezeljük.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
