import React, { useState } from 'react';
import { 
  Phone, 
  Instagram, 
  Menu, 
  X, 
  MessageCircle,
  Sparkles,
  Trophy
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'sobre', label: 'Sobre a Paula' },
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

  const whatsappUrl = "https://wa.me/5582996142244?text=Ol%C3%A1%20Paula%20Negr%C3%A3o%20(Paulinha%20do%20T%C3%ênis)%2C%20visitei%20seu%20site%20e%20gostaria%20de%20conversar.";

  const logoUrl = "https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618101/WhatsApp_Image_2026-09-03_at_11.07.06_AM_s2kov7.jpg";

  return (
    <header className="sticky top-0 z-50 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-black/10 transition-all shadow-sm">
      
      {/* Top Running Contact Marquee Strip (Follows Scroll as Sticky) */}
      <div className="bg-[#1A1A1A] text-white text-[11px] tracking-[0.2em] uppercase py-2 overflow-hidden whitespace-nowrap border-b border-[#D4AF37]/30">
        <div className="animate-marquee flex items-center gap-12 text-[#FAF8F5]">
          <span className="flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Paula Negrão (Paulinha do Tênis 🎾) • CRECI-AL 5494</span>
          </span>
          <span className="text-[#D4AF37]">•</span>
          <span className="flex items-center gap-2">
            <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>WhatsApp Atendimento: (82) 99614-2244</span>
          </span>
          <span className="text-[#D4AF37]">•</span>
          <span>Praia do Francês, Condomínio Laguna, Granville e Atlantis • Litoral Sul de Alagoas</span>
          <span className="text-[#D4AF37]">•</span>
          <span className="text-[#D4AF37] font-serif italic lowercase tracking-normal text-xs">
            "Você será muito mais feliz morando bem!"
          </span>

          {/* Repeat for seamless infinite loop */}
          <span className="text-[#D4AF37]">•</span>
          <span className="flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Paula Negrão (Paulinha do Tênis 🎾) • CRECI-AL 5494</span>
          </span>
          <span className="text-[#D4AF37]">•</span>
          <span className="flex items-center gap-2">
            <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>WhatsApp Atendimento: (82) 99614-2244</span>
          </span>
          <span className="text-[#D4AF37]">•</span>
          <span>Praia do Francês, Condomínio Laguna, Granville e Atlantis • Litoral Sul de Alagoas</span>
          <span className="text-[#D4AF37]">•</span>
          <span className="text-[#D4AF37] font-serif italic lowercase tracking-normal text-xs">
            "Você será muito mais feliz morando bem!"
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Glow Effect */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3.5 group focus:outline-none text-left"
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] animate-glow shadow-xl bg-white shrink-0">
              <img 
                src={logoUrl} 
                alt="Paula Negrão Logo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#D4AF37] text-[#1A1A1A] rounded-full flex items-center justify-center text-[9px] font-bold shadow">
              ✓
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-serif tracking-[0.15em] uppercase text-[#1A1A1A] group-hover:text-[#B89330] transition-colors leading-tight">
              Paula Negrão
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#8C827A] uppercase font-semibold">
              Paulinha do Tênis • CRECI 5494
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] tracking-[0.2em] uppercase font-medium text-[#4A4540]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`pb-1 transition-all hover:text-[#1A1A1A] relative ${
                activeSection === item.id 
                  ? 'text-[#1A1A1A] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D4AF37]' 
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
            className="bg-[#1A1A1A] text-white hover:bg-black px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center gap-2.5 border border-[#1A1A1A] hover:border-[#D4AF37] shadow-sm hover:shadow"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Fale com a Paula</span>
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
              <span>WhatsApp Direto (82) 99614-2244</span>
            </a>
            <div className="text-center text-[10px] text-[#7A7570] pt-2">
              Paula Negrão (Paulinha do Tênis) • CRECI-AL 5494
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

