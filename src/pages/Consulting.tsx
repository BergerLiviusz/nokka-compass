import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart, Database, ArrowRight } from "lucide-react";

export default function Consulting() {
  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Tanácsadási szolgáltatások</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Szakmai tudásunk és kutatási tapasztalatunk alapján átfogó közgazdasági 
          tanácsadást nyújtunk vállalatok, közintézmények és nonprofit szervezetek számára.
        </p>
      </div>

      {/* Services Tabs */}
      <Tabs defaultValue="analysis" className="mb-16">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="analysis">Gazdasági elemzés</TabsTrigger>
          <TabsTrigger value="evaluation">Program értékelés</TabsTrigger>
          <TabsTrigger value="data">Adat és ML</TabsTrigger>
        </TabsList>

        <TabsContent value="analysis" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Gazdasági hatáselemzés</h3>
              </div>
              <p className="text-muted-foreground">
                Készítünk részletes gazdasági hatástanulmányokat befektetési döntések, 
                szabályozási változások és gazdaságpolitikai intézkedések támogatására.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Költség-haszon elemzések</li>
                <li>• Makrogazdasági hatásmodellezés</li>
                <li>• Piaci elemzések és előrejelzések</li>
                <li>• Versenyhatás vizsgálatok</li>
              </ul>
            </div>
            
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Esettanulmány</CardTitle>
                <CardDescription>
                  Egy nagy multinacionális vállalat magyarországi beruházásának hatáselemzése
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  300 milliárd forintos ipari beruházás várható gazdasági hatásainak 
                  részletes elemzése, beleértve a foglalkoztatási és beszállítói 
                  hálózatra gyakorolt multiplikátor hatásokat.
                </p>
                <Badge variant="outline">Lezárva: 2023</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="evaluation" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BarChart className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Program és projekt értékelés</h3>
              </div>
              <p className="text-muted-foreground">
                Tudományos módszereket alkalmazunk közpolitikai programok és 
                fejlesztési projektek hatékonyságának és eredményességének értékelésére.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Ex-ante és ex-post értékelések</li>
                <li>• Randomizált kontrollált kísérletek (RCT)</li>
                <li>• Kvalitatív és kvantitatív módszerek</li>
                <li>• Impact assessment és monitoring</li>
              </ul>
            </div>
            
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Esettanulmány</CardTitle>
                <CardDescription>
                  EU-s fejlesztési program hatékonyságvizsgálata
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Területfejlesztési program 5 éves időszakának átfogó értékelése, 
                  különös tekintettel a foglalkoztatási és társadalmi kohézióra 
                  gyakorolt hosszú távú hatásokra.
                </p>
                <Badge variant="outline">Folyamatban</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Adat és gépi tanulás</h3>
              </div>
              <p className="text-muted-foreground">
                Modern adattudományi módszereket alkalmazunk gazdasági kérdések 
                megválaszolására és döntéstámogató rendszerek fejlesztésére.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Prediktív modellezés</li>
                <li>• Nagy adathalmazok elemzése</li>
                <li>• Automatizált riportolási rendszerek</li>
                <li>• Dashboard és vizualizáció fejlesztés</li>
              </ul>
            </div>
            
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Esettanulmány</CardTitle>
                <CardDescription>
                  AI-alapú gazdasági előrejelző rendszer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Gépi tanulási algoritmusok fejlesztése makrogazdasági 
                  mutatók rövid távú előrejelzésére, valós idejű adatok 
                  felhasználásával.
                </p>
                <Badge variant="outline">Pilot fázis</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Kezdjük el az együttműködést</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Vegye fel velünk a kapcsolatot, hogy megbeszélhessük, hogyan segíthetünk 
          Önnek szakértelmünkkel és kutatási tapasztalatunkkal.
        </p>
        <Button size="lg" className="gap-2">
          Konzultáció kérése
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}