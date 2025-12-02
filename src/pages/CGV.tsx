import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Shield, Clock, CreditCard, AlertCircle, Scale } from "lucide-react";

const CGV = () => {
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
              Conditions Générales de Vente
            </h1>
            <p className="text-lg text-muted-foreground">
              Dernière mise à jour : Décembre 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Article 1 */}
              <div className="bg-card p-8 rounded-2xl shadow-soft mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground m-0">Article 1 - Objet</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
                  entre la société Sky Lounge, ci-après dénommée "le Prestataire", et toute personne physique 
                  ou morale, ci-après dénommée "le Client", souhaitant bénéficier des services de location 
                  d'espaces professionnels proposés par Sky Lounge.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Toute réservation implique l'acceptation sans réserve des présentes CGV par le Client.
                </p>
              </div>

              {/* Article 2 */}
              <div className="bg-card p-8 rounded-2xl shadow-soft mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground m-0">Article 2 - Tarifs et Paiement</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les tarifs en vigueur sont ceux affichés sur le site internet au moment de la réservation. 
                  Ils sont exprimés en euros et toutes taxes comprises (TTC).
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Le paiement est exigible immédiatement lors de la réservation</li>
                  <li>• Les moyens de paiement acceptés sont : carte bancaire, virement bancaire</li>
                  <li>• Une facture est émise et envoyée par email après chaque transaction</li>
                  <li>• Les tarifs peuvent être modifiés à tout moment sans préavis</li>
                </ul>
              </div>

              {/* Article 3 */}
              <div className="bg-card p-8 rounded-2xl shadow-soft mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground m-0">Article 3 - Réservation et Annulation</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Réservation :</strong> La réservation est confirmée dès réception du paiement intégral. 
                  Un email de confirmation est envoyé au Client avec les détails de sa réservation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Conditions d'annulation :</strong>
                </p>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• Annulation plus de 48h avant : remboursement intégral</li>
                  <li>• Annulation entre 24h et 48h : remboursement à 50%</li>
                  <li>• Annulation moins de 24h avant : aucun remboursement</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Toute demande d'annulation doit être effectuée par email à contact@skylounge.gp
                </p>
              </div>

              {/* Article 4 */}
              <div className="bg-card p-8 rounded-2xl shadow-soft mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground m-0">Article 4 - Responsabilités</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Responsabilité du Prestataire :</strong> Sky Lounge s'engage à mettre à disposition 
                  du Client des espaces conformes à la description et en bon état de fonctionnement.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Responsabilité du Client :</strong> Le Client s'engage à utiliser les locaux 
                  en bon père de famille et à respecter le règlement intérieur. Il est responsable 
                  de tout dommage causé aux locaux ou aux équipements durant la période de location.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sky Lounge décline toute responsabilité en cas de vol, perte ou détérioration 
                  des effets personnels du Client.
                </p>
              </div>

              {/* Article 5 */}
              <div className="bg-card p-8 rounded-2xl shadow-soft mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground m-0">Article 5 - Litiges</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les présentes CGV sont soumises au droit français. En cas de litige, une solution 
                  amiable sera recherchée avant toute action judiciaire.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  À défaut d'accord amiable, les tribunaux compétents seront ceux du ressort 
                  de Pointe-à-Pitre, Guadeloupe.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-semibold text-foreground mb-4">Une question sur nos CGV ?</h3>
                <p className="text-muted-foreground mb-4">
                  Pour toute question concernant nos conditions générales de vente, 
                  n'hésitez pas à nous contacter.
                </p>
                <p className="text-muted-foreground">
                  <strong>Email :</strong> contact@skylounge.gp<br />
                  <strong>Téléphone :</strong> +590 5 90 XX XX XX
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CGV;
