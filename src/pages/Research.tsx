import { useState, useEffect } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

export default function Research() {
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { t } = useI18n();

  // Mock data for demonstration
  const mockResearch = [
    {
      id: "1",
      title: "A távmunka hatása a munkavállalói termelékenységre",
      abstract: "Ez a tanulmány vizsgálja a COVID-19 járvány alatt bevezetett távmunka hosszú távú hatásait a munkavállalói termelékenységre és jólétre Magyarországon.",
      authors: ["Nagy Péter", "Kovács Anna"],
      type: "paper" as const,
      tags: ["munkaerőpiac", "termelékenység", "COVID-19"],
      language: "hu" as const,
      publishedAt: "2024-01-15",
      slug: "tavmunka-hatas-termekenyseg"
    },
    {
      id: "2", 
      title: "Digital transformation in Hungarian SMEs",
      abstract: "An empirical analysis of digital adoption patterns and their economic impact on small and medium enterprises in Hungary during 2020-2023.",
      authors: ["Smith, John", "Szabó, Mária"],
      type: "paper" as const,
      tags: ["digital transformation", "SME", "Hungary"],
      language: "en" as const,
      publishedAt: "2024-01-10",
      slug: "digital-transformation-smes"
    },
    {
      id: "3",
      title: "Oktatási egyenlőtlenségek a vidéki Magyarországon",
      abstract: "Részletes elemzés az oktatási hozzáférés és minőség területi különbségeiről, különös tekintettel a hátrányos helyzetű térségekre.",
      authors: ["Horváth Gábor", "Tóth Eszter"],
      type: "blog" as const,
      tags: ["oktatás", "egyenlőtlenség", "vidékfejlesztés"],
      language: "hu" as const,
      publishedAt: "2023-12-20",
      slug: "oktatasi-egyenlotlensegek"
    }
  ];

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Kutatási könyvtár</h1>
        <p className="text-xl text-muted-foreground">
          Böngészd át tanulmányainkat, cikkeinket és projektjeinket
        </p>
      </div>

      {/* Search and Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={t('search.placeholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Szűrők
          </Button>
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
            {mockResearch.length} {t('search.results')}
          </p>
        </div>

        <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
          {mockResearch.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                  <Badge variant={item.type === "paper" ? "default" : "secondary"}>
                    {item.type}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-3">
                  {item.abstract}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{item.authors.join(", ")}</span>
                    <span>{new Date(item.publishedAt).toLocaleDateString("hu-HU")}</span>
                  </div>
                  <Button className="w-full" size="sm">
                    {t('common.readMore')}
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