import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Building2, Users, Target, Award, Heart, Lightbulb } from "lucide-react";

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Notre Histoire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              À Propos de{" "}
              <span className="text-gradient-sky">Sky Lounge</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Depuis notre création, nous nous engageons à offrir des espaces professionnels 
              d'exception en Guadeloupe, conçus pour accompagner la croissance de votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
                Notre Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Créer des espaces qui inspirent la réussite
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Sky Lounge est né d'une vision simple : offrir aux professionnels guadeloupéens 
                des espaces de travail à la hauteur de leurs ambitions. Face au manque d'infrastructures 
                modernes et flexibles sur le territoire, nous avons décidé de créer des lieux 
                qui combinent excellence, flexibilité et convivialité.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Notre mission est d'accompagner les entrepreneurs, freelances, TPE et PME 
                dans leur développement en leur fournissant bien plus qu'un simple bureau : 
                un véritable écosystème propice à la croissance et à l'innovation.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Sites</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Entreprises</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Espace Sky Lounge" 
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <Building2 className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">Depuis 2020</div>
                <div className="text-sm opacity-90">Au service des pros</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Nos Valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ce qui nous anime au quotidien
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos valeurs guident chacune de nos décisions et façonnent l'expérience 
              que nous offrons à nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Nous visons l'excellence dans tout ce que nous faisons, des espaces que nous concevons aux services que nous offrons."
              },
              {
                icon: Users,
                title: "Communauté",
                description: "Nous croyons en la force du collectif et favorisons les échanges entre les professionnels qui nous font confiance."
              },
              {
                icon: Heart,
                title: "Proximité",
                description: "Nous cultivons une relation de proximité avec nos clients, à l'écoute de leurs besoins pour toujours mieux les servir."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Nous restons à l'affût des dernières tendances pour offrir des espaces modernes et des services adaptés."
              },
              {
                icon: Target,
                title: "Engagement",
                description: "Nous nous engageons à accompagner la réussite de nos clients avec des solutions flexibles et personnalisées."
              },
              {
                icon: Building2,
                title: "Qualité",
                description: "Nous investissons dans des équipements haut de gamme et un entretien irréprochable de nos espaces."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Engagement Local */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Ancrage Local
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Fiers d'être Guadeloupéens
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Sky Lounge est une entreprise 100% guadeloupéenne, créée par des entrepreneurs locaux 
              pour des entrepreneurs locaux. Nous connaissons les réalités du tissu économique 
              de notre territoire et adaptons nos offres en conséquence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En choisissant Sky Lounge, vous soutenez l'économie locale et contribuez 
              au développement de notre belle Guadeloupe. Ensemble, construisons 
              un écosystème entrepreneurial dynamique et innovant.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APropos;
