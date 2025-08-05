import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { ContactFormData } from "@/lib/types";

const contactSchema = z.object({
  name: z.string().min(2, "A név legalább 2 karakter hosszú legyen"),
  email: z.string().email("Érvényes e-mail címet adjon meg"),
  organization: z.string().optional(),
  topic: z.string().min(1, "Válasszon témát"),
  message: z.string().min(10, "Az üzenet legalább 10 karakter hosszú legyen"),
  consent: z.boolean().refine(val => val === true, "Hozzájárulás szükséges")
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const watchedTopic = watch("topic");
  const watchedConsent = watch("consent");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - in production, this would go to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Contact form submission:", data);
      
      toast.success("Üzenetét sikeresen elküldtük! Hamarosan felvesszük Önnel a kapcsolatot.");
      reset();
    } catch (error) {
      toast.error("Hiba történt az üzenet küldése során.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Kapcsolatfelvétel</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Állunk rendelkezésére kérdéseivel, projektötleteivel vagy együttműködési javaslataival.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Elérhetőségek</CardTitle>
              <CardDescription>
                Keresse fel csapatunkat az alábbi módokon
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">E-mail</p>
                  <p className="text-sm text-muted-foreground">info@nokka.hu</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <p className="text-sm text-muted-foreground">+36 1 234 5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Cím</p>
                  <p className="text-sm text-muted-foreground">
                    1053 Budapest<br />
                    Egyetem tér 1-3.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gyakori kérdések</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Mennyi idő alatt válaszolnak?</p>
                <p className="text-muted-foreground">
                  Munkanapokon 24 órán belül válaszolunk minden megkeresésre.
                </p>
              </div>
              <div>
                <p className="font-medium">Milyen projekteket vállalnak?</p>
                <p className="text-muted-foreground">
                  Közgazdasági kutatás, tanácsadás és oktatás minden területén dolgozunk.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Írjon nekünk</CardTitle>
              <CardDescription>
                Töltse ki az alábbi űrlapot, és hamarosan felvesszük Önnel a kapcsolatot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Név *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail cím *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Szervezet</Label>
                  <Input
                    id="organization"
                    {...register("organization")}
                    placeholder="Opcionális"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">Téma *</Label>
                  <Select 
                    value={watchedTopic} 
                    onValueChange={(value) => setValue("topic", value)}
                  >
                    <SelectTrigger className={errors.topic ? "border-destructive" : ""}>
                      <SelectValue placeholder="Válasszon témát" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="research">Kutatási együttműködés</SelectItem>
                      <SelectItem value="consulting">Tanácsadási szolgáltatás</SelectItem>
                      <SelectItem value="education">Oktatási program</SelectItem>
                      <SelectItem value="partnership">Partnerség</SelectItem>
                      <SelectItem value="media">Média megkeresés</SelectItem>
                      <SelectItem value="other">Egyéb</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.topic && (
                    <p className="text-sm text-destructive">{errors.topic.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Üzenet *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                    placeholder="Írja le kérdését vagy kérését..."
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consent"
                    checked={watchedConsent || false}
                    onCheckedChange={(checked) => setValue("consent", !!checked)}
                  />
                  <Label 
                    htmlFor="consent" 
                    className={`text-sm ${errors.consent ? "text-destructive" : ""}`}
                  >
                    Hozzájárulok személyes adataim kezeléséhez a kapcsolatfelvétel céljából *
                  </Label>
                </div>
                {errors.consent && (
                  <p className="text-sm text-destructive">{errors.consent.message}</p>
                )}

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Küldés..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Üzenet küldése
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}