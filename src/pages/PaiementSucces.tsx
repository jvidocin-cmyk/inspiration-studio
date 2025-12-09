import { useLocation, useNavigate, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Clock, 
  Mail,
  Download,
  Home,
  Building2,
  Sparkles
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { motion } from "framer-motion";

const PaiementSucces = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Mock data for demonstration
  const bookingData = location.state || {
    spaceType: "bureau-prive",
    spaceLabel: "Bureau Privé",
    site: "baie-mahault",
    siteLabel: "Baie-Mahault",
    siteAddress: "ZAC de Houelbourg, 97122 Baie-Mahault",
    formula: "journee",
    formulaLabel: "Journée",
    date: new Date(),
    price: 75,
  };

  const bookingReference = `SKY-${Date.now().toString(36).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Success Animation */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Réservation confirmée !
            </h1>
            <p className="text-lg text-muted-foreground">
              Votre espace de travail est réservé. Un email de confirmation vous a été envoyé.
            </p>
          </motion.div>

          {/* Booking Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden mb-8">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 border-b border-border/50">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Référence de réservation</p>
                    <p className="text-2xl font-mono font-bold text-primary">{bookingReference}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-green-600">Confirmée</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 md:p-8">
                {/* Space Details */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">{bookingData.spaceLabel}</h2>
                    <p className="text-muted-foreground">Sky Lounge {bookingData.siteLabel}</p>
                  </div>
                </div>

                <Separator className="my-6 bg-border/50" />

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Adresse</p>
                      <p className="font-medium text-foreground">{bookingData.siteAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Date</p>
                      <p className="font-medium text-foreground">
                        {format(bookingData.date, "EEEE d MMMM yyyy", { locale: fr })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Formule</p>
                      <p className="font-medium text-foreground">{bookingData.formulaLabel}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Confirmation envoyée à</p>
                      <p className="font-medium text-foreground">votre@email.com</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6 bg-border/50" />

                {/* Price */}
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl">
                  <span className="text-lg font-medium text-foreground">Montant payé</span>
                  <span className="text-2xl font-bold text-primary">{bookingData.price}€</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-6 mb-8"
          >
            <h3 className="font-semibold text-foreground mb-3">Prochaines étapes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                <span>Consultez votre email pour le récapitulatif de réservation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                <span>Présentez-vous à l'accueil le jour de votre réservation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                <span>Votre espace sera prêt dès votre arrivée</span>
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              variant="outline" 
              className="flex-1 h-12 gap-2"
            >
              <Download className="w-4 h-4" />
              Télécharger la confirmation
            </Button>
            <Button 
              asChild
              className="flex-1 h-12 gap-2 bg-primary hover:bg-primary/90"
            >
              <Link to="/">
                <Home className="w-4 h-4" />
                Retour à l'accueil
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaiementSucces;
