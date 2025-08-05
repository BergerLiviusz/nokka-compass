import { useState, useEffect } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

export default function Publikaciok() {
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { t } = useI18n();

  // Mock research content with various types and tags
  const mockResearch = [
    {
      id: "1",
      title: "A távmunka hatása a munkavállalói termelékenységre",
      abstract: "Ez a tanulmány vizsgálja a COVID-19 járvány alatt bevezetett távmunka hosszú távú hatásait a munkavállalói termelékenységre és jólétre Magyarországon.",
      authors: ["Nagy Péter", "Kovács Anna"],
      type: "paper" as const,
      tags: ["Munkaerőpiac", "Termelékenység", "Digitalizáció"],
      tagColors: ["bg-blue-500", "bg-green-500", "bg-purple-500"],
      language: "hu" as const,
      publishedAt: "2024-01-15",
      slug: "tavmunka-hatas-termekenyseg"
    },
    {
      id: "2", 
      title: "Innováció a magyar KKV szektorban",
      abstract: "Empirikus vizsgálat a digitális elfogadási mintákról és azok gazdasági hatásairól a kis- és középvállalkozások körében.",
      authors: ["Szabó Mária", "Horváth János"],
      type: "research" as const,
      tags: ["Innováció", "KKV", "Technológia"],
      tagColors: ["bg-orange-500", "bg-indigo-500", "bg-cyan-500"],
      language: "hu" as const,
      publishedAt: "2024-01-10",
      slug: "innovacio-kkv-szektor"
    },
    {
      id: "3",
      title: "Oktatási egyenlőtlenségek a vidéki Magyarországon",
      abstract: "Részletes elemzés az oktatási hozzáférés és minőség területi különbségeiről, különös tekintettel a hátrányos helyzetű térségekre.",
      authors: ["Tóth Eszter", "Kiss Gábor"],
      type: "blog" as const,
      tags: ["Oktatás", "Egyenlőtlenség", "Társadalom"],
      tagColors: ["bg-emerald-500", "bg-red-500", "bg-yellow-500"],
      language: "hu" as const,
      publishedAt: "2023-12-20",
      slug: "oktatasi-egyenlotlensegek"
    },
    {
      id: "4",
      title: "Mesterséges intelligencia az üzleti döntéshozatalban",
      abstract: "Kutatási jelentés az AI technológiák alkalmazásáról és hatásairól a magyar vállalati szektorban.",
      authors: ["Molnár Zoltán", "Varga Katalin"],
      type: "research" as const,
      tags: ["Mesterséges Intelligencia", "Üzleti Stratégia", "Digitalizáció"],
      tagColors: ["bg-violet-500", "bg-slate-500", "bg-purple-500"],
      language: "hu" as const,
      publishedAt: "2024-02-01",
      slug: "ai-uzleti-donteshozatal"
    },
    {
      id: "5",
      title: "Fenntartható fejlődés és zöld gazdaság",
      abstract: "Tanulmány a környezeti fenntarthatóság és gazdasági növekedés közötti kapcsolatról Magyarországon.",
      authors: ["Fehér Andrea", "Balogh Péter"],
      type: "paper" as const,
      tags: ["Fenntarthatóság", "Környezetgazdaságtan", "Zöld Technológia"],
      tagColors: ["bg-green-600", "bg-teal-500", "bg-lime-500"],
      language: "hu" as const,
      publishedAt: "2023-11-30",
      slug: "fenntarthato-fejlodes-zold-gazdasag"
    },
    {
      id: "6",
      title: "Pénzügyi befogadás és digitális bankolás",
      abstract: "Empirikus vizsgálat a digitális pénzügyi szolgáltatások elterjedéséről és társadalmi hatásairól.",
      authors: ["Lakatos Márta", "Rácz Tamás"],
      type: "blog" as const,
      tags: ["Pénzügy", "Digitalizáció", "Társadalom"],
      tagColors: ["bg-amber-500", "bg-purple-500", "bg-yellow-500"],
      language: "hu" as const,
      publishedAt: "2024-01-05",
      slug: "penzugyi-befogadas-digitalis-bankolas"
    }
  ];

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Keressen tanulmányok között</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Fedezze fel kollégáink és doktorandusaink legfrissebb kutatásait, tanulmányait és szakmai írásait. 
          Használja a fejlett keresési és szűrési funkciókat a releváns tartalmak megtalálásához.
        </p>
      </div>

      {/* Main Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Keressen címek, szerzők, kulcsszavak között..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 h-14 text-lg border-2 focus:border-primary"
          />
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Szűrők
            </Button>
            <div className="flex space-x-2">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary/10">
                Összes típus
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                Közgazdaságtan
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                Innováció
              </Badge>
            </div>
          </div>
          <div className="flex border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {mockResearch.length} tanulmány találva
          </p>
          <select className="text-sm border rounded px-3 py-1">
            <option>Legfrissebb</option>
            <option>Cím szerint</option>
            <option>Szerző szerint</option>
          </select>
        </div>

        <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
          {mockResearch.map((item, index) => (
            <Card key={item.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                    {item.title}
                  </CardTitle>
                  <Badge variant={item.type === "paper" ? "default" : item.type === "research" ? "secondary" : "outline"}>
                    {item.type === "paper" ? "Tanulmány" : item.type === "research" ? "Kutatás" : "Blog"}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-3">
                  {item.abstract}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className={`text-xs text-white border-0 ${item.tagColors[tagIndex]}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{item.authors.join(", ")}</span>
                    <span>{new Date(item.publishedAt).toLocaleDateString("hu-HU")}</span>
                  </div>
                  <Button className="w-full" size="sm">
                    Tovább olvasás
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}