import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CommercialContactSheet from "@/components/contact/CommercialContactSheet";
import {
  Building2,
  Wifi,
  Snowflake,
  Car,
  Coffee,
  Monitor,
  Clock,
  MapPin,
  Check,
  Shield,
  Calendar,
  ChevronRight,
  Sparkles,
  Phone,
  Mail,
  X,
  Users,
  Presentation,
  GraduationCap,
  Briefcase,
  Projector,
  Tv,
} from "lucide-react";

const SalleReunion = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Simulated ACF data structure
  const offerData = {
    titre_offre: "Salle de Réunion",
    sous_titre: "L'espace idéal pour vos réunions",
    pitch: "Une salle de réunion premium entièrement équipée pour vos présentations, formations et événements professionnels. Capacité jusqu'à 12 personnes.",
    image_hero: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1920&q=80",
    immeuble_associe: {
      nom: "Sky Lounge Jarry",
      adresse: "Zone Industrielle de Jarry, Baie-Mahault, Guadeloupe",
    },
    formules: [
      {
        id: "journee",
        titre: "Journée",
        sous_titre: "8 heures d'accès complet",
        prix: "120€",
        description: "Parfait pour une journée complète de réunions, formations ou ateliers collaboratifs avec votre équipe.",
        equipements: [
          "Écran TV 65 pouces",
          "Vidéoprojecteur HD",
          "Connexion fibre optique",
          "Climatisation",
          "Paperboard & marqueurs",
          "Café, thé & eau offerts",
        ],
        images: [
          "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&q=80",
          "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&q=80",
        ],
      },
      {
        id: "semaine",
        titre: "Semaine",
        sous_titre: "7 jours d'accès",
        prix: "550€",
        description: "Idéal pour des formations sur plusieurs jours, des séminaires d'équipe ou des sessions de travail intensives.",
        equipements: [
          "Écran TV 65 pouces",
          "Vidéoprojecteur HD",
          "Connexion fibre optique",
          "Climatisation",
          "Paperboard & marqueurs",
          "Café, thé & eau offerts",
          "Configuration personnalisée",
          "Support technique dédié",
        ],
        images: [
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
          "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=600&q=80",
          "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&q=80",
        ],
        popular: true,
      },
      {
        id: "mois",
        titre: "Mois",
        sous_titre: "30 jours d'accès",
        prix: "1800€",
        description: "Pour vos projets de longue durée : formations continues, accompagnement d'équipe ou sessions récurrentes.",
        equipements: [
          "Écran TV 65 pouces",
          "Vidéoprojecteur HD",
          "Connexion fibre optique",
          "Climatisation",
          "Paperboard & marqueurs",
          "Café, thé & eau offerts",
          "Configuration personnalisée",
          "Support technique dédié",
          "Réservation prioritaire",
          "Tarif préférentiel reconduit",
        ],
        images: [
          "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=600&q=80",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
        ],
      },
    ],
    infos_pratiques: {
      horaires: "Lundi - Samedi : 7h00 - 20h00",
      horaires_detail: "Créneaux en dehors des horaires possibles sur demande",
      adresse_complete: "Immeuble Sky Lounge, Zone Industrielle de Jarry, 97122 Baie-Mahault, Guadeloupe",
      parking: "Parking gratuit et sécurisé (50 places)",
      capacite: "Jusqu'à 12 personnes",
      unique: [
        "Écran TV 65 pouces dernière génération",
        "Vidéoprojecteur HD professionnel",
        "Configuration flexible (U, classe, théâtre)",
        "Système de visioconférence intégré",
      ],
    },
  };

  const profiles = [
    {
      icon: Users,
      title: "Réunions d'équipe",
      description: "Rassemblez vos collaborateurs dans un cadre moderne et équipé pour des réunions productives.",
    },
    {
      icon: GraduationCap,
      title: "Formations & Ateliers",
      description: "Animez vos sessions de formation avec tous les équipements audiovisuels nécessaires.",
    },
    {
      icon: Presentation,
      title: "Présentations clients",
      description: "Impressionnez vos prospects et clients avec une salle premium et un équipement professionnel.",
    },
    {
      icon: Briefcase,
      title: "Séminaires",
      description: "Organisez vos séminaires d'entreprise dans un environnement inspirant et fonctionnel.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Choisissez votre formule",
      description: "Sélectionnez la durée adaptée à votre événement : journée, semaine ou mois.",
    },
    {
      step: "02",
      title: "Réservez en ligne",
      description: "Choisissez vos dates, indiquez le nombre de participants et validez votre réservation.",
    },
    {
      step: "03",
      title: "On s'occupe du reste",
      description: "Arrivez 15 minutes avant, on configure la salle selon vos besoins.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={offerData.image_hero}
            alt={offerData.titre_offre}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/95" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Location Badge */}
            <Badge className="inline-flex items-center gap-2 bg-white/15 text-white border-white/25 backdrop-blur-md px-5 py-2.5 text-sm animate-fade-in">
              <MapPin className="w-4 h-4" />
              {offerData.immeuble_associe.nom}
              <span className="text-white/60">•</span>
              <Building2 className="w-4 h-4" />
              Guadeloupe
            </Badge>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight animate-fade-in [animation-delay:100ms]">
              {offerData.titre_offre}
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-secondary font-medium animate-fade-in [animation-delay:200ms]">
              {offerData.sous_titre}
            </p>

            {/* Pitch */}
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:300ms]">
              {offerData.pitch}
            </p>

            {/* CTA */}
            <div className="pt-4 animate-fade-in [animation-delay:400ms]">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/95 shadow-large text-lg px-10 py-7 rounded-xl font-semibold group"
                onClick={() => {
                  const formulesSection = document.getElementById('formules');
                  formulesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Réserver maintenant
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto animate-fade-in [animation-delay:500ms]">
              {[
                { value: "120€", label: "à partir de" },
                { value: "12", label: "personnes max" },
                { value: "100%", label: "équipé" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ==================== FORMULES SECTION ==================== */}
      <section id="formules" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Nos Formules
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Choisissez Votre <span className="text-gradient-sky">Formule</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trois options flexibles pour s'adapter à tous vos événements professionnels. 
              Équipement audiovisuel complet inclus.
            </p>
          </div>

          {/* Formules Grid */}
          <div className="space-y-12 max-w-5xl mx-auto">
            {offerData.formules.map((formule, idx) => (
              <Card
                key={formule.id}
                className={`relative overflow-hidden border-2 transition-all duration-500 hover:shadow-large ${
                  formule.popular
                    ? 'border-secondary shadow-glow bg-gradient-to-br from-card to-secondary/5'
                    : 'border-border hover:border-primary/30 bg-card'
                }`}
              >
                {/* Popular Badge */}
                {formule.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-none rounded-bl-lg bg-secondary text-white px-4 py-2 text-sm font-semibold">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Populaire
                    </Badge>
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-between order-2 lg:order-1">
                    {/* Header */}
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-2">{formule.titre}</h3>
                          <p className="text-lg text-muted-foreground">{formule.sous_titre}</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-8">
                        <div className="flex items-baseline gap-2">
                          <span className={`text-5xl md:text-6xl font-bold ${formule.popular ? 'text-secondary' : 'text-primary'}`}>
                            {formule.prix}
                          </span>
                          <span className="text-muted-foreground text-lg">/ {formule.id === 'journee' ? '8h' : formule.id === 'semaine' ? '7 jours' : '30 jours'}</span>
                        </div>
                      </div>

                      {/* Separator */}
                      <div className="h-px bg-border mb-8" />

                      {/* Description */}
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {formule.description}
                      </p>

                      {/* Equipment List */}
                      <div className="space-y-4 mb-10">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Équipements inclus
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {formule.equipements.map((equip, eIdx) => (
                            <li key={eIdx} className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                formule.popular ? 'bg-secondary/20' : 'bg-primary/10'
                              }`}>
                                <Check className={`w-3 h-3 ${formule.popular ? 'text-secondary' : 'text-primary'}`} />
                              </div>
                              <span className="text-foreground">{equip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      size="lg"
                      className={`w-full text-lg py-7 rounded-xl font-semibold group ${
                        formule.popular
                          ? 'bg-secondary hover:bg-secondary/90 shadow-glow'
                          : 'bg-primary hover:bg-primary/90'
                      }`}
                      onClick={() => window.open("https://cal.com", "_blank")}
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Réserver cette formule
                      <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Gallery Side */}
                  <div className="bg-muted/50 p-4 order-1 lg:order-2">
                    <div className="grid grid-cols-2 gap-3 h-full">
                      <div
                        className="col-span-2 relative h-52 lg:h-auto lg:min-h-[280px] rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => setLightboxImage(formule.images[0])}
                      >
                        <img
                          src={formule.images[0]}
                          alt={`${formule.titre} - Vue principale`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      {formule.images.slice(1).map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="relative h-32 lg:h-40 rounded-xl overflow-hidden cursor-pointer group"
                          onClick={() => setLightboxImage(img)}
                        >
                          <img
                            src={img}
                            alt={`${formule.titre} - Vue ${imgIdx + 2}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== POUR QUI SECTION ==================== */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              Profils
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Pour <span className="text-gradient-sky">Qui ?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Notre salle de réunion s'adapte à tous vos événements professionnels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {profiles.map((profile, idx) => (
              <Card
                key={idx}
                className="p-8 border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <profile.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{profile.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{profile.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== COMMENT RÉSERVER SECTION ==================== */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Processus
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comment <span className="text-gradient-sky">Réserver ?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trois étapes simples pour organiser votre événement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative text-center">
                {/* Step Number */}
                <div className="text-8xl md:text-9xl font-bold text-primary/10 mb-4">
                  {step.step}
                </div>
                {/* Arrow connector (hidden on last item) */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 right-0 translate-x-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 -mt-8">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-10 py-7 rounded-xl font-semibold group"
              onClick={() => window.open("https://cal.com", "_blank")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Réserver maintenant
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== INFORMATIONS PRATIQUES ==================== */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
                Informations Pratiques
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Tout Ce Qu'il Faut <span className="text-gradient-sky">Savoir</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Key Info Cards */}
              <div className="space-y-6">
                {/* Horaires */}
                <Card className="p-8 border-2 border-border hover:border-primary/30 transition-all hover:shadow-medium">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Horaires d'accès</h3>
                      <p className="text-lg text-foreground font-medium">{offerData.infos_pratiques.horaires}</p>
                      <p className="text-muted-foreground mt-1">{offerData.infos_pratiques.horaires_detail}</p>
                    </div>
                  </div>
                </Card>

                {/* Adresse */}
                <Card className="p-8 border-2 border-border hover:border-primary/30 transition-all hover:shadow-medium">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Adresse</h3>
                      <p className="text-lg text-foreground">{offerData.infos_pratiques.adresse_complete}</p>
                    </div>
                  </div>
                </Card>

                {/* Parking & Capacité */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <Card className="p-6 border-2 border-border hover:border-primary/30 transition-all hover:shadow-medium">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Car className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Parking</h3>
                        <p className="text-muted-foreground text-sm">Gratuit et sécurisé</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-2 border-border hover:border-primary/30 transition-all hover:shadow-medium">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Capacité</h3>
                        <p className="text-muted-foreground text-sm">{offerData.infos_pratiques.capacite}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Right Column - Unique Points */}
              <Card className="p-10 border-2 border-secondary/30 bg-gradient-to-br from-card to-secondary/5 shadow-elegant">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold">Équipement audiovisuel premium</h3>
                </div>

                <ul className="space-y-5">
                  {offerData.infos_pratiques.unique.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-lg text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-secondary/20">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Contact rapide
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      0590 XX XX XX
                    </Button>
                    <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Prêt à Organiser Votre Événement ?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
              Réservez notre salle de réunion premium et offrez à vos collaborateurs ou clients un cadre d'exception.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/95 shadow-large text-xl px-12 py-8 rounded-xl font-bold group"
                onClick={() => window.open("https://cal.com", "_blank")}
              >
                <Calendar className="mr-3 h-6 w-6" />
                Réserver maintenant
                <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-xl px-12 py-8 rounded-xl font-bold"
                onClick={() => setIsContactOpen(true)}
              >
                <Phone className="mr-3 h-6 w-6" />
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Sheet */}
      <CommercialContactSheet
        open={isContactOpen}
        onOpenChange={setIsContactOpen}
        listingTitle={offerData.titre_offre}
      />

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={lightboxImage}
            alt="Vue agrandie"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default SalleReunion;
