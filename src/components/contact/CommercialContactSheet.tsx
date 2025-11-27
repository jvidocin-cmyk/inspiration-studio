import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Building2, Mail, Phone, User, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom est trop long"),
  email: z.string().trim().email("Email invalide").max(255, "L'email est trop long"),
  phone: z.string().trim().min(10, "Numéro de téléphone invalide").max(20, "Numéro trop long"),
  company: z.string().trim().max(100, "Le nom de l'entreprise est trop long").optional(),
  message: z.string().trim().max(1000, "Le message est trop long").optional(),
});

interface CommercialContactSheetProps {
  listingTitle?: string;
  listingId?: string;
  children: React.ReactNode;
}

const CommercialContactSheet = ({ 
  listingTitle, 
  listingId,
  children 
}: CommercialContactSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    
    // Validation
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      toast.error("Veuillez corriger les erreurs dans le formulaire");
      return;
    }
    
    // Construction du message WhatsApp
    const whatsappMessage = `Demande d'informations - Baux Commerciaux
${listingId ? `\nLocal: ${listingTitle} (Réf: ${listingId})` : ""}
    
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
${formData.company ? `Entreprise: ${formData.company}` : ""}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/590690000000?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Simuler un léger délai pour l'animation
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      
      toast.success("Message préparé avec succès", {
        description: "Complétez l'envoi sur WhatsApp",
        icon: <CheckCircle2 className="h-5 w-5" />,
      });
      
      setIsSubmitting(false);
      setIsOpen(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 800);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader className="space-y-3 pb-8">
          <div className="inline-flex items-center gap-2 text-primary">
            <Building2 className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Sky Lounge</span>
          </div>
          <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Demande d'informations
          </SheetTitle>
          <SheetDescription className="text-base leading-relaxed">
            {listingTitle ? (
              <>
                Intéressé par <span className="font-semibold text-foreground">{listingTitle}</span> ?<br />
                Notre équipe vous recontactera sous 24h pour organiser une visite et répondre à vos questions.
              </>
            ) : (
              <>
                Notre équipe est à votre écoute pour vous accompagner dans votre projet d'implantation. 
                Réponse garantie sous 24h.
              </>
            )}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5 py-6">
          {/* Nom */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              Nom complet *
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              placeholder="Jean Dupont"
              className={`h-12 transition-all ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
            />
            {errors.name && (
              <p className="text-xs text-destructive flex items-center gap-1 animate-in fade-in-50 slide-in-from-top-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              Email professionnel *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              placeholder="contact@entreprise.com"
              className={`h-12 transition-all ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
            />
            {errors.email && (
              <p className="text-xs text-destructive flex items-center gap-1 animate-in fade-in-50 slide-in-from-top-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Téléphone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-semibold flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              Téléphone *
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: "" });
              }}
              placeholder="0690 00 00 00"
              className={`h-12 transition-all ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
            />
            {errors.phone && (
              <p className="text-xs text-destructive flex items-center gap-1 animate-in fade-in-50 slide-in-from-top-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Entreprise */}
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-semibold flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              Entreprise
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => {
                setFormData({ ...formData, company: e.target.value });
                if (errors.company) setErrors({ ...errors, company: "" });
              }}
              placeholder="Nom de votre entreprise ou projet"
              className="h-12"
            />
            {errors.company && (
              <p className="text-xs text-destructive flex items-center gap-1 animate-in fade-in-50 slide-in-from-top-1">
                {errors.company}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-semibold">
              Votre projet
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              placeholder="Surface recherchée, type d'activité, date de disponibilité souhaitée, besoins spécifiques..."
              className={`min-h-[120px] resize-none transition-all ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
            />
            {errors.message && (
              <p className="text-xs text-destructive flex items-center gap-1 animate-in fade-in-50 slide-in-from-top-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-4 space-y-4">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full h-12 text-base font-semibold group relative overflow-hidden"
              disabled={isSubmitting}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    Envoyer ma demande
                  </>
                )}
              </span>
            </Button>
            
            <div className="rounded-lg bg-muted/50 p-4 space-y-2">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Engagement confidentialité :</span> Vos informations sont traitées de manière confidentielle et ne seront jamais partagées avec des tiers. Elles servent uniquement à vous recontacter concernant votre demande.
              </p>
            </div>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CommercialContactSheet;
