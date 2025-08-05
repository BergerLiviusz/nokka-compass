import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Calendar } from "lucide-react";

export default function Education() {
  const programs = [
    {
      title: "Gazdasági elemzés alapjai",
      level: "Alapszint",
      duration: "6 hét",
      format: "Online",
      description: "Bevezetés a modern gazdasági elemzési módszerekbe, gyakorlati példákkal és esettanulmányokkal.",
      topics: ["Statisztikai alapok", "Gazdasági mutatók", "Adatvizualizáció", "Jelentés írás"],
      status: "Következő start: március"
    },
    {
      title: "Haladó ökonometria",
      level: "Haladó",
      duration: "12 hét", 
      format: "Hibrid",
      description: "Mélyreható ökonometriai módszerek elsajátítása gyakorlati alkalmazásokkal.",
      topics: ["Panel adatok", "Idősor elemzés", "Kauzalitás", "Gépi tanulás"],
      status: "Következő start: április"
    },
    {
      title: "Közpolitikai értékelés",
      level: "Közép",
      duration: "8 hét",
      format: "Jelenléti",
      description: "Közpolitikai programok tervezése, megvalósítása és értékelése a gyakorlatban.",
      topics: ["Program logika", "Impact assessment", "RCT módszerek", "Költség-haszon elemzés"],
      status: "Jelentkezés nyitva"
    },
    {
      title: "Adat-alapú döntéshozatal",
      level: "Közép",
      duration: "4 hét",
      format: "Online",
      description: "Modern adatelemzési eszközök és módszerek üzleti és közpolitikai döntéshozatalban.",
      topics: ["Python/R", "Dashboard fejlesztés", "Prediktív modellek", "Adatstratégia"],
      status: "Hamarosan indul"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Alapszint": return "bg-green-100 text-green-800";
      case "Közép": return "bg-blue-100 text-blue-800";
      case "Haladó": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case "Online": return "💻";
      case "Jelenléti": return "🏫";
      case "Hibrid": return "🔄";
      default: return "📚";
    }
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Oktatási programok</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Fejlessze szakmai tudását kutatóink által vezetett, gyakorlat-orientált 
          képzési programjainkkal. Minden szinten találunk megfelelő kurzust.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 mb-12 md:grid-cols-4">
        <Card>
          <CardContent className="flex items-center space-x-2 p-6">
            <BookOpen className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">12+</p>
              <p className="text-sm text-muted-foreground">Aktív kurzus</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-2 p-6">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">450+</p>
              <p className="text-sm text-muted-foreground">Végzett hallgató</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-2 p-6">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">95%</p>
              <p className="text-sm text-muted-foreground">Elvégzési arány</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-2 p-6">
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">4.8/5</p>
              <p className="text-sm text-muted-foreground">Értékelés</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Programs Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((program, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <Badge className={getLevelColor(program.level)} variant="secondary">
                  {program.level}
                </Badge>
              </div>
              <CardDescription className="text-base">
                {program.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{getFormatIcon(program.format)}</span>
                    <span>{program.format}</span>
                  </div>
                </div>
                <Badge variant="outline" className="text-primary border-primary">
                  {program.status}
                </Badge>
              </div>

              <div>
                <h4 className="font-medium mb-2">Főbb témakörök:</h4>
                <div className="flex flex-wrap gap-2">
                  {program.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="outline">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full">
                Részletek és jelentkezés
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Egyedi képzési programok</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Szervezete számára egyedi igények alapján tervezett képzési programokat is készítünk. 
          Vegye fel velünk a kapcsolatot!
        </p>
        <Button size="lg" variant="outline">
          Egyedi ajánlatkérés
        </Button>
      </div>
    </div>
  );
}