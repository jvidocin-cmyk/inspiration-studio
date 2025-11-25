import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-sky-lounge.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="Sky Lounge" className="h-16 w-auto brightness-0 invert" />
            <p className="text-sm opacity-90">
              Espaces professionnels modernes en Guadeloupe. Bureaux, coworking et locaux commerciaux.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/sites" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Nos Sites
                </Link>
              </li>
              <li>
                <Link to="/espaces" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Espaces de Travail
                </Link>
              </li>
              <li>
                <Link to="/annuaire" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Annuaire
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">Baie-Mahault & Petit-Bourg, Guadeloupe</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">+590 5 90 XX XX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">contact@skylounge.gp</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Sky Lounge. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
