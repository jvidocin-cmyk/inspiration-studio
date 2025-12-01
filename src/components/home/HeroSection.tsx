import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-navy/85 via-sky-navy/75 to-sky-navy/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in">
            Votre espace professionnel
            <span className="block mt-2 text-sky-blue">en Guadeloupe</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:100ms]">
            Des bureaux privés, salles de réunion équipées et locaux commerciaux premium à Baie-Mahault et Petit-Bourg
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in [animation-delay:200ms]">
            <Button 
              asChild 
              size="lg" 
              className="bg-sky-blue hover:bg-sky-blue/90 text-white text-lg px-10 py-7 shadow-glow"
            >
              <Link to="/espaces">
                Explorer nos espaces
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-7"
            >
              <Link to="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto animate-fade-in [animation-delay:300ms]">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-sky-blue">2</div>
              <div className="text-sm md:text-base text-white/90 font-medium">Sites en Guadeloupe</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-sky-blue">50+</div>
              <div className="text-sm md:text-base text-white/90 font-medium">Espaces disponibles</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-sky-blue">100+</div>
              <div className="text-sm md:text-base text-white/90 font-medium">Entreprises hébergées</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
