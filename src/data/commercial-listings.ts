export type ListingFact = {
  label: string;
  value: string;
};

export type CommercialListing = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  description: string;
  site: string;
  location: string;
  address: string;
  area: string;
  rent: string;
  charges: string;
  deposit: string;
  leaseType: string;
  availability: string;
  highlights: string[];
  amenities: string[];
  surroundings: string[];
  heroImage: string;
  gallery: string[];
  tags: string[];
  keyFacts: ListingFact[];
};

export const commercialListings: CommercialListing[] = [
  {
    id: "LC-001",
    slug: "local-angle-jarry",
    title: "Local commercial d'angle prêt-à-installer",
    subtitle: "Emplacement premium avec vitrines double exposition",
    excerpt:
      "Surface de 180 m² divisible située au cœur de Jarry, idéale pour une marque qui cherche une visibilité maximale et un flux constant de clientèle professionnelle.",
    description:
      "Ce local livré clés en main propose un vaste plateau modulable avec deux façades vitrées de 12 mètres, un espace réserve séparé, une zone back-office et un bloc sanitaire accessible PMR. Sa localisation au croisement des axes principaux de Jarry lui assure un trafic quotidien élevé, renforcé par la proximité immédiate de restaurants et services.",
    site: "Jarry, Baie-Mahault",
    location: "Zone industrielle de Jarry",
    address: "Boulevard de Houëlbourg, 97122 Baie-Mahault",
    area: "180 m² (possibilité 120 + 60 m²)",
    rent: "3 500 € HT/mois",
    charges: "420 € HT/mois",
    deposit: "6 mois de loyer HT",
    leaseType: "Bail commercial 3/6/9",
    availability: "Disponible immédiatement",
    highlights: [
      "Angle de rue avec double vitrine 12 + 8 m",
      "Plateau modulable livré avec climatisation neuve",
      "Hauteur sous plafond 4,30 m",
      "Stationnement clients + livraison privatif"
    ],
    amenities: [
      "Climatisation gainable intégrée",
      "Pré-câblage fibre optique",
      "Éclairage LED showroom",
      "Rideau métallique motorisé",
      "Sanitaires PMR",
      "Zone de stockage isolée"
    ],
    surroundings: [
      "Zone tertiaire dynamique (banques, assurances)",
      "Restauration premium à moins de 200 m",
      "Arrivées fournisseurs facilitées",
      "Accès direct RN1 et port commercial"
    ],
    heroImage:
      "https://images.unsplash.com/photo-1505849864904-01bab8e4af1f?w=1600&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529429617124-aee711a83d92?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740740-16b083cb7421?w=1600&q=80&auto=format&fit=crop"
    ],
    tags: ["Retail premium", "Angle de rue", "Livré équipé"],
    keyFacts: [
      { label: "Surface", value: "180 m²" },
      { label: "Disponibilité", value: "Immédiate" },
      { label: "Loyer HT", value: "3 500 €/mois" },
      { label: "Charges HT", value: "420 €/mois" },
      { label: "Bail", value: "3/6/9" },
      { label: "Hauteur", value: "4,30 m" },
      { label: "Linéaire vitrine", value: "20 m" },
      { label: "Stationnement", value: "6 places dédiées" }
    ]
  },
  {
    id: "LC-002",
    slug: "showroom-lumineux-petit-bourg",
    title: "Showroom lumineux avec mezzanine",
    subtitle: "Volumes généreux et visibilité sur axe passant",
    excerpt:
      "Un espace de 240 m² doté d'une mezzanine aménageable, parfait pour recevoir vos clients dans un univers premium tout en bénéficiant d'une zone logistique à l'arrière.",
    description:
      "Situé à l'entrée de Petit-Bourg, ce local se distingue par sa façade vitrée pleine hauteur et son grand volume intérieur entièrement climatisé. L'espace se compose d'un showroom principal de 180 m², d'une mezzanine de 60 m² pouvant accueillir un espace bureaux, d'une réserve et d'un quai de déchargement couvert.",
    site: "Petit-Bourg",
    location: "Entrée de Bourg - axe RN1",
    address: "Rue du Commerce, 97170 Petit-Bourg",
    area: "240 m² dont mezzanine 60 m²",
    rent: "3 200 € HT/mois",
    charges: "360 € HT/mois",
    deposit: "4 mois de loyer HT",
    leaseType: "Bail commercial 3/6/9",
    availability: "Préavis 30 jours",
    highlights: [
      "Façade vitrée 6 m de haut",
      "Mezzanine modulable pour bureaux ou showroom",
      "Quai de livraison indépendant",
      "Signalétique sur axe RN1"
    ],
    amenities: [
      "Climatisation réversible",
      "Éclairage scénographique",
      "Système de sonorisation intégré",
      "Local technique réseaux",
      "Parking visiteurs 12 places",
      "Accès sécurisé badge 24/7"
    ],
    surroundings: [
      "Retail park en développement",
      "Axes routiers vers Basse-Terre et Grande-Terre",
      "Quartier résidentiel premium",
      "Zone artisanale adjacente"
    ],
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1529429617124-aee711a83d92?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1600&q=80&auto=format&fit=crop"
    ],
    tags: ["Showroom", "Visibilité route", "Quai livraison"],
    keyFacts: [
      { label: "Surface", value: "240 m²" },
      { label: "Disponibilité", value: "30 jours" },
      { label: "Loyer HT", value: "3 200 €/mois" },
      { label: "Charges HT", value: "360 €/mois" },
      { label: "Bail", value: "3/6/9" },
      { label: "Hauteur", value: "6,00 m" },
      { label: "Linéaire vitrine", value: "14 m" },
      { label: "Stationnement", value: "12 places visiteurs" }
    ]
  },
  {
    id: "LC-003",
    slug: "boutique-marina-bas-du-fort",
    title: "Boutique premium Marina Bas-du-Fort",
    subtitle: "Positionnement haute couture face aux yachts",
    excerpt:
      "Une boutique intimiste de 95 m² pensée pour les marques d'exception, avec terrasse privative et vue directe sur la marina.",
    description:
      "Dans l'environnement exclusif de la marina de Bas-du-Fort, ce local bénéficie d'une clientèle internationale et d'un environnement haut de gamme. L'espace principal de 65 m² est prolongé par une terrasse de 30 m² aménageable, l'ensemble étant desservi par une grande baie vitrée coulissante.",
    site: "Marina Bas-du-Fort",
    location: "Pointe-à-Pitre",
    address: "Quai Hubert, 97110 Pointe-à-Pitre",
    area: "95 m² + terrasse 30 m²",
    rent: "2 450 € HT/mois",
    charges: "290 € HT/mois",
    deposit: "4 mois de loyer HT",
    leaseType: "Bail précaire 24 mois renouvelable",
    availability: "Sous 60 jours",
    highlights: [
      "Vue directe sur la marina et flux plaisanciers",
      "Espace terrasse privatisable pour événements",
      "Finition premium parquet & éclairage sur rail",
      "Idéal luxe, galerie d'art, concept store"
    ],
    amenities: [
      "Climatisation split",
      "Rideaux lumineux LED dimmables",
      "Système d'alarme connecté",
      "Back-office kitchenette équipée",
      "Accès livraison nocturne",
      "Conciergerie disponible"
    ],
    surroundings: [
      "Restaurants gastronomiques voisins",
      "Port de plaisance international",
      "Hôtels 4 étoiles à proximité",
      "Clientèle haut pouvoir d'achat"
    ],
    heroImage:
      "https://images.unsplash.com/photo-1529429617124-aee711a83d92?w=1600&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505849864904-01bab8e4af1f?w=1600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740740-16b083cb7421?w=1600&q=80&auto=format&fit=crop"
    ],
    tags: ["Marina", "Premium", "Terrasse"],
    keyFacts: [
      { label: "Surface", value: "95 m²" },
      { label: "Disponibilité", value: "60 jours" },
      { label: "Loyer HT", value: "2 450 €/mois" },
      { label: "Charges HT", value: "290 €/mois" },
      { label: "Bail", value: "Précaire 24 mois" },
      { label: "Hauteur", value: "3,40 m" },
      { label: "Linéaire vitrine", value: "10 m" },
      { label: "Stationnement", value: "Parking marina réservé" }
    ]
  }
];

export const findListingBySlug = (slug: string) =>
  commercialListings.find((listing) => listing.slug === slug);
