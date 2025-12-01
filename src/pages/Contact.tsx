import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-sky-navy/85 via-sky-navy/75 to-sky-navy/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-sky-blue/90 max-w-3xl mx-auto animate-fade-in [animation-delay:100ms]">
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-elegant border-border/50">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold mb-2 text-foreground">Envoyez-nous un message</h2>
                <p className="text-muted-foreground mb-8">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais</p>
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

                  <Button type="submit" size="lg" className="w-full bg-sky-blue hover:bg-sky-blue/90 shadow-glow">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-2 text-foreground">Informations de contact</h2>
                <p className="text-muted-foreground mb-8">Retrouvez-nous sur nos deux sites en Guadeloupe</p>
                <div className="space-y-6">
                  {/* Baie-Mahault */}
                  <Card className="shadow-medium border-sky-blue/20 hover:shadow-strong transition-shadow">
                    <CardContent className="p-8 space-y-4">
                      <h3 className="font-bold text-2xl text-sky-blue">Sky Lounge Baie-Mahault</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-5 w-5 text-sky-blue" />
                          </div>
                          <span className="text-sm pt-2">Zone Commerciale Jarry, Baie-Mahault 97122</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0">
                            <Phone className="h-5 w-5 text-sky-blue" />
                          </div>
                          <span className="text-sm">+590 5 90 XX XX XX</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0">
                            <Mail className="h-5 w-5 text-sky-blue" />
                          </div>
                          <span className="text-sm">baiemahault@skylounge.gp</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Petit-Bourg */}
                  <Card className="shadow-medium border-sky-blue/20 hover:shadow-strong transition-shadow">
                    <CardContent className="p-8 space-y-4">
                      <h3 className="font-bold text-2xl text-sky-blue">Sky Lounge Petit-Bourg</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-5 w-5 text-sky-blue" />
                          </div>
                          <span className="text-sm pt-2">Centre-ville, Petit-Bourg 97170</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0">
                            <Phone className="h-5 w-5 text-sky-blue" />
                          </div>
                          <span className="text-sm">+590 5 90 YY YY YY</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0">
                            <Mail className="h-5 w-5 text-sky-blue" />
                          </div>
                          <span className="text-sm">petitbourg@skylounge.gp</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Horaires */}
                  <Card className="shadow-medium border-sky-blue/20 hover:shadow-strong transition-shadow">
                    <CardContent className="p-8 space-y-4">
                      <h3 className="font-bold text-2xl text-sky-blue">Horaires d'ouverture</h3>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-sky-blue" />
                        </div>
                        <div className="text-sm space-y-2 pt-2">
                          <p><strong className="text-foreground">Lundi - Vendredi :</strong> 8h00 - 18h00</p>
                          <p><strong className="text-foreground">Samedi :</strong> 9h00 - 13h00</p>
                          <p><strong className="text-foreground">Dimanche :</strong> Fermé</p>
                          <p className="text-muted-foreground italic mt-4 pt-4 border-t">
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
