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
import { Building2, Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirection vers WhatsApp", {
      description: "Votre message a été préparé, complétez l'envoi sur WhatsApp.",
    });
    
    setIsOpen(false);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader className="space-y-4 pb-6">
          <SheetTitle className="text-2xl">Demande d'informations</SheetTitle>
          <SheetDescription className="text-base leading-relaxed">
            {listingTitle ? (
              <>
                Intéressé par <span className="font-semibold text-foreground">{listingTitle}</span> ? 
                Remplissez ce formulaire et nous vous recontacterons rapidement pour organiser une visite 
                et vous transmettre toutes les informations complémentaires.
              </>
            ) : (
              <>
                Remplissez ce formulaire pour nous contacter au sujet de nos locaux commerciaux. 
                Nous vous recontacterons rapidement pour échanger sur votre projet.
              </>
            )}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              Nom complet *
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Jean Dupont"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="jean.dupont@entreprise.com"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              Téléphone *
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="0690 00 00 00"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              Entreprise
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Nom de votre entreprise"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Votre projet / Questions
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Décrivez brièvement votre projet, vos besoins en termes de surface, d'aménagement, de date de disponibilité souhaitée..."
              className="min-h-[120px] resize-none"
            />
          </div>

          <div className="pt-4 space-y-4">
            <Button type="submit" size="lg" className="w-full">
              Envoyer ma demande
            </Button>
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe 
              concernant votre demande. Vos données ne seront pas partagées avec des tiers.
            </p>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CommercialContactSheet;
