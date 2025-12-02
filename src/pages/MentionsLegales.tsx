import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Building, User, Globe, Server, FileText } from "lucide-react";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <FileText className="inline h-4 w-4 mr-2" />
              Informations Légales
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mentions Légales
            </h1>
            <p className="text-lg text-muted-foreground">
              Informations légales relatives au site skylounge.gp
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Éditeur */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Éditeur du site</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground mb-2">Raison sociale</p>
                  <p>Sky Lounge SAS</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Forme juridique</p>
                  <p>Société par Actions Simplifiée</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Capital social</p>
                  <p>10 000 €</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">SIRET</p>
                  <p>XXX XXX XXX XXXXX</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Siège social</p>
                  <p>Zone Industrielle de Jarry<br />97122 Baie-Mahault, Guadeloupe</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">N° TVA Intracommunautaire</p>
                  <p>FR XX XXX XXX XXX</p>
                </div>
              </div>
            </div>

            {/* Directeur de publication */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Directeur de la publication</h2>
              </div>
              <div className="text-muted-foreground">
                <p className="mb-2"><strong>Nom :</strong> [Nom du Directeur]</p>
                <p className="mb-2"><strong>Qualité :</strong> Président</p>
                <p><strong>Email :</strong> direction@skylounge.gp</p>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Server className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Hébergement</h2>
              </div>
              <div className="text-muted-foreground">
                <p className="mb-2"><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
                <p className="mb-2"><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
                <p><strong>Site web :</strong> [URL de l'hébergeur]</p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Contact</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground mb-2">Téléphone</p>
                  <p>+590 5 90 XX XX XX</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Email</p>
                  <p>contact@skylounge.gp</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Horaires d'ouverture</p>
                  <p>Lundi - Vendredi : 8h - 18h<br />Samedi : 9h - 12h</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Site web</p>
                  <p>www.skylounge.gp</p>
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) 
                est la propriété exclusive de Sky Lounge ou de ses partenaires et est protégé par les lois 
                françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Toute reproduction, représentation, modification, publication, transmission, dénaturation, 
                totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur 
                quelque support que ce soit est interdite sans l'autorisation écrite préalable de Sky Lounge.
              </p>
            </div>

            {/* Crédits */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-4">Crédits</h2>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Conception et développement :</strong> Sky Lounge</p>
                <p><strong>Photographies :</strong> Sky Lounge / Unsplash</p>
                <p><strong>Icônes :</strong> Lucide Icons</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
