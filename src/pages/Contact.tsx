import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold">Contactez-nous</h1>
            <p className="text-xl opacity-90">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-large">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Prénom</label>
                      <Input placeholder="Jean" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nom</label>
                      <Input placeholder="Dupont" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="jean.dupont@email.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Téléphone</label>
                    <Input type="tel" placeholder="+590 5 90 XX XX XX" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Type de demande</label>
                    <select className="w-full h-10 px-3 rounded-md border bg-background">
                      <option>Bureau privé</option>
                      <option>Espace coworking</option>
                      <option>Salle de réunion</option>
                      <option>Local commercial</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Décrivez votre projet..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
                <div className="space-y-6">
                  {/* Baie-Mahault */}
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-bold text-xl text-primary">Sky Lounge Baie-Mahault</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Zone Commerciale Jarry, Baie-Mahault 97122</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">+590 5 90 XX XX XX</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">baiemahault@skylounge.gp</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Petit-Bourg */}
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-bold text-xl text-primary">Sky Lounge Petit-Bourg</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Centre-ville, Petit-Bourg 97170</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">+590 5 90 YY YY YY</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">petitbourg@skylounge.gp</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Horaires */}
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-bold text-xl text-primary">Horaires d'ouverture</h3>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="text-sm space-y-1">
                          <p><strong>Lundi - Vendredi :</strong> 8h00 - 18h00</p>
                          <p><strong>Samedi :</strong> 9h00 - 13h00</p>
                          <p><strong>Dimanche :</strong> Fermé</p>
                          <p className="text-muted-foreground italic mt-2">
                            *Accès 24/7 pour les membres avec badge
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
