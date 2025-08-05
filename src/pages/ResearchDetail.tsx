import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Share, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResearchDetail() {
  const { slug } = useParams();

  // Mock data - in real app, this would be fetched based on slug
  const research = {
    title: "A távmunka hatása a munkavállalói termelékenységre",
    abstract: "Ez a tanulmány vizsgálja a COVID-19 járvány alatt bevezetett távmunka hosszú távú hatásait a munkavállalói termelékenységre és jólétre Magyarországon.",
    authors: ["Nagy Péter", "Kovács Anna"],
    type: "paper" as const,
    tags: ["munkaerőpiac", "termelékenység", "COVID-19"],
    language: "hu" as const,
    publishedAt: "2024-01-15",
    doi: "10.1234/nokka.2024.001",
    content: `
      ## Bevezetés
      
      A COVID-19 járvány alapvetően megváltoztatta a munkavégzés formáit világszerte. Magyarországon is számos vállalat kényszerült arra, hogy rövid idő alatt átálljon a távmunkára...
      
      ## Metodológia
      
      Kutatásunk során 1500 magyar munkavállalót kérdeztünk meg egy online felmérés keretében. A minta reprezentatív volt a magyar dolgozó népesség tekintetében...
      
      ## Eredmények
      
      Az eredmények azt mutatják, hogy a távmunka jelentős hatással volt a munkavállalói termelékenységre és jólétre. A főbb megállapítások:
      
      - A termelékenység átlagosan 15%-kal nőtt a távmunkás dolgozók körében
      - A munka-magánélet egyensúly javult 68%-uk esetében
      - Ugyanakkor a szociális kapcsolatok hiánya problémát jelentett
      
      ## Következtetések
      
      A távmunka bevezetése hosszú távú változásokat hozott a magyar munkaerőpiacon. A hibrid munkavégzési modellek várhatóan megmaradnak a jövőben is...
    `
  };

  return (
    <div className="container py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link to="/research">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Vissza a kutatásokhoz
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <article className="space-y-6">
            {/* Header */}
            <header className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge>{research.type}</Badge>
                <Badge variant="outline">{research.language.toUpperCase()}</Badge>
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                {research.title}
              </h1>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{research.authors.join(", ")}</span>
                </div>
                <span>•</span>
                <span>{new Date(research.publishedAt).toLocaleDateString("hu-HU")}</span>
              </div>
            </header>

            {/* Abstract */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-3">Összefoglaló</h2>
              <p className="text-muted-foreground leading-relaxed">
                {research.abstract}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-gray max-w-none dark:prose-invert">
              {research.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('-')) {
                  return <li key={index} className="ml-4">{paragraph.replace('- ', '')}</li>;
                }
                if (paragraph.trim()) {
                  return <p key={index} className="mb-4 leading-relaxed">{paragraph.trim()}</p>;
                }
                return null;
              })}
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Műveletek</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" size="sm">
                <Download className="h-4 w-4 mr-2" />
                PDF letöltése
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Megosztás
              </Button>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Címkék</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {research.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Citation */}
          {research.doi && (
            <Card>
              <CardHeader>
                <CardTitle>Hivatkozás</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm bg-muted rounded p-3 font-mono">
                  {research.authors.join(", ")} ({new Date(research.publishedAt).getFullYear()}). 
                  {research.title}. NOKKA Working Papers. DOI: {research.doi}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}