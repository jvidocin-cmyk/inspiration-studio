import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  XCircle, 
  ArrowLeft,
  RefreshCw,
  MessageCircle,
  Phone
} from "lucide-react";
import { motion } from "framer-motion";

const PaiementAnnule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Error Animation */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg shadow-red-500/30">
              <XCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Paiement annulé
            </h1>
            <p className="text-lg text-muted-foreground">
              Votre paiement a été annulé. Aucun montant n'a été débité.
            </p>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm mb-8">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Que s'est-il passé ?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Le paiement a été interrompu avant d'être finalisé. Cela peut arriver si vous avez 
                  fermé la fenêtre de paiement ou cliqué sur "Annuler". Votre réservation n'a pas 
                  été enregistrée.
                </p>

                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Bon à savoir :</strong> Votre espace préféré est peut-être encore disponible ! 
                    N'hésitez pas à recommencer votre réservation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <Button 
              asChild
              className="w-full h-14 text-lg gap-2 bg-primary hover:bg-primary/90"
            >
              <Link to="/reserver">
                <RefreshCw className="w-5 h-5" />
                Recommencer ma réservation
              </Link>
            </Button>

            <div className="grid sm:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                asChild
                className="h-12 gap-2"
              >
                <Link to="/">
                  <ArrowLeft className="w-4 h-4" />
                  Retour à l'accueil
                </Link>
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="h-12 gap-2"
              >
                <Link to="/contact">
                  <MessageCircle className="w-4 h-4" />
                  Nous contacter
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Besoin d'aide pour finaliser votre réservation ?
            </p>
            <a 
              href="tel:0590000000" 
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <Phone className="w-4 h-4" />
              0590 XX XX XX
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaiementAnnule;
