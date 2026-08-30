import React, { useState } from 'react';
import { 
  Phone, 
  Instagram, 
  Menu, 
  X, 
  Compass, 
  Home, 
  Shield, 
  Building2, 
  Sparkles, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'condominios', label: 'Condomínios' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'bem-estar', label: 'Estilo de Vida' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const whatsappUrl = "https://wa.me/5582996142244?text=Ol%C3%A1%20Paula%20Negr%C3%A3o%2C%20visitei%20seu%20site%20e%20gostaria%20de%20um%20atendimento%20exclusivo%20sobre%20im%C3%B3veis%20no%20Litoral%20Sul%20de%20Alagoas.";

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-black/5 transition-all">
      {/* Top micro bar */}
      <div className="bg-[#1A1A1A] text-white/80 text-[10px] tracking-[0.25em] uppercase py-1.5 px-6 sm:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-[#D4AF37] font-semibold">CRECI-AL 5494</span>
          <span className="hidden sm:inline opacity-60">|</span>
          <span className="hidden sm:inline opacity-80">Praia do Francês & Litoral Sul de Alagoas</span>
        </div>
        <div className="flex items-center gap-6 text-[10px]">
          <a 
            href="https://www.instagram.com/paulanegraoinoveis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
            title="Siga no Instagram"
          >
            <Instagram className="w-3 h-3 text-[#D4AF37]" />
            <span className="hidden md:inline">@paulanegraoinoveis</span>
          </a>
          <a 
            href="tel:+5582996142244"
            className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3 h-3 text-[#D4AF37]" />
            <span>(82) 99614-2244</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex flex-col text-left group focus:outline-none"
        >
          <span className="text-xl sm:text-2xl font-serif tracking-[0.18em] uppercase text-[#1A1A1A] group-hover:text-[#B89330] transition-colors">
            Paula Negrão
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#8C827A] uppercase font-medium">
            Imóveis de Alto Padrão
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase font-medium text-[#4A4540]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`pb-1 transition-all hover:text-[#1A1A1A] relative ${
                activeSection === item.id 
                  ? 'text-[#1A1A1A] font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#D4AF37]' 
                  : 'text-[#6A6560]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] text-white hover:bg-black px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center gap-2.5 border border-black hover:border-[#D4AF37] shadow-sm hover:shadow"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Fale com a Especialista</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#D4AF37] focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFCFB] border-b border-black/10 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-xs tracking-[0.2em] uppercase py-2 border-b border-black/5 ${
                  activeSection === item.id ? 'text-[#D4AF37] font-bold' : 'text-[#2D2A26]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1A1A1A] text-white text-center py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>WhatsApp Direto</span>
            </a>
            <div className="text-center text-[10px] text-[#7A7570] pt-2">
              Paula Negrão • CRECI-AL 5494
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
