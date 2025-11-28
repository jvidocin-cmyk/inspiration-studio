import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sites from "./pages/Sites";
import Espaces from "./pages/Espaces";
import BureauPrive from "./pages/BureauPrive";
import SalleReunion from "./pages/SalleReunion";
import Reserver from "./pages/Reserver";
import Annuaire from "./pages/Annuaire";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BauxCommerciaux from "./pages/BauxCommerciaux";
import AnnonceCommerciale from "./pages/AnnonceCommerciale";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/espaces" element={<Espaces />} />
          <Route path="/espaces/bureau-prive" element={<BureauPrive />} />
          <Route path="/espaces/salle-reunion" element={<SalleReunion />} />
          <Route path="/reserver" element={<Reserver />} />
          <Route path="/annuaire" element={<Annuaire />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/baux-commerciaux" element={<BauxCommerciaux />} />
          <Route path="/annonces/:slug" element={<AnnonceCommerciale />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
