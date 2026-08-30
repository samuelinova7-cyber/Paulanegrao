import React from 'react';
import { MessageCircle, ArrowUpRight, ShieldCheck, Compass, Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onCondoClick: (condoId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onCondoClick }) => {
  const whatsappUrl = "https://wa.me/5582996142244?text=Ol%C3%A1%20Paula%20Negr%C3%A3o%2C%20gostaria%20de%20conversar%20sobre%20im%C3%B3veis%20de%20alto%20padr%C3%A3o%20na%20Praia%20do%20Franc%C3%AAs%20e%20Litoral%20Sul.";

  return (
    <section id="hero" className="relative bg-[#FDFCFB] border-b border-black/5 overflow-hidden">
      {/* Main Hero Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[640px] items-stretch">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 px-6 sm:px-12 py-16 sm:py-24 flex flex-col justify-center bg-white z-10">
          <div className="max-w-xl">
            {/* Top Sub-tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F2ED] border border-black/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7326] font-semibold">
                Praia do Francês & Litoral Sul de Alagoas
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-[1.18] tracking-tight mb-6 italic font-normal">
              Vivencie o Alto Padrão com Exclusividade na Praia do Francês e Litoral Sul de Alagoas.
            </h1>

            {/* Subtitle with gold accent line */}
            <p className="text-base sm:text-lg text-[#5A5550] mb-10 leading-relaxed font-light border-l-2 border-[#D4AF37] pl-6">
              Mais do que imóveis, um estilo de vida focado no seu bem-estar, sofisticação e conexão com a natureza exuberante de Alagoas.
            </p>

            {/* CTAs & Credibility Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] text-white hover:bg-black px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg border border-black group"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>Fale com a Especialista</span>
              </a>

              <button
                onClick={onExploreClick}
                className="px-6 py-4 text-[11px] tracking-[0.2em] uppercase font-semibold text-[#1A1A1A] hover:text-[#B89330] transition-colors border-b border-black/20 hover:border-[#D4AF37] flex items-center justify-center gap-2"
              >
                <span>Ver Portfólio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-black/5 grid grid-cols-3 gap-4 text-[#6A6560]">
              <div>
                <span className="block text-xs font-serif text-[#1A1A1A] font-semibold">CRECI-AL 5494</span>
                <span className="text-[10px] tracking-wider uppercase opacity-80">Registro Oficial</span>
              </div>
              <div>
                <span className="block text-xs font-serif text-[#1A1A1A] font-semibold">100% Personalizado</span>
                <span className="text-[10px] tracking-wider uppercase opacity-80">Atendimento Boutique</span>
              </div>
              <div>
                <span className="block text-xs font-serif text-[#1A1A1A] font-semibold">Lagoa & Mar</span>
                <span className="text-[10px] tracking-wider uppercase opacity-80">Localizações Nobres</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Imagery Column */}
        <div className="lg:col-span-5 relative bg-[#F5F2ED] overflow-hidden min-h-[420px] lg:min-h-full flex items-center justify-center p-6 sm:p-10">
          {/* Main Visual Image container */}
          <div className="w-full h-full relative border border-black/10 overflow-hidden shadow-2xl min-h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop"
              alt="Mansão de Alto Padrão no Litoral Sul de Alagoas"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

            {/* Floating Quote Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-[320px] bg-white/95 backdrop-blur-md p-6 shadow-xl border border-black/5">
              <p className="font-serif italic text-base sm:text-lg text-[#1A1A1A] mb-2 leading-snug">
                "Onde o luxo encontra a tranquilidade e a alma encontra o lar."
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-black/5">
                <p className="text-[10px] uppercase tracking-widest text-[#7A7570] font-medium">
                  Paula Negrão — Especialista
                </p>
                <span className="text-[9px] text-[#D4AF37] font-bold">CRECI-AL 5494</span>
              </div>
            </div>

            {/* Circular Stamp Badge */}
            <div className="absolute top-6 right-6 w-24 h-24 border border-[#D4AF37] bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg p-2 text-center pointer-events-none">
              <div className="w-20 h-20 rounded-full border border-dashed border-[#D4AF37]/50 flex flex-col items-center justify-center p-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] mb-0.5" />
                <span className="text-[7.5px] uppercase tracking-wider font-bold text-[#1A1A1A] leading-tight">
                  Natureza &<br />Exclusividade
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Showcase Ribbon: Destaques Condomínios */}
      <div className="bg-[#1A1A1A] text-white py-8 px-6 sm:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="min-w-[200px]">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-1">
              Destaques Exclusivos
            </span>
            <p className="text-sm font-light text-white/90">Condomínios de Alta Performance</p>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {/* Laguna */}
            <div className="border-l border-white/15 pl-5 flex flex-col justify-center">
              <span className="text-[9px] uppercase tracking-widest text-white/50 mb-0.5">Referência Náutica</span>
              <span className="text-base font-serif text-white mb-1.5 font-medium">Condomínio Laguna</span>
              <button
                onClick={() => onCondoClick('laguna')}
                className="text-[9px] uppercase tracking-widest text-[#D4AF37] hover:text-white border-b border-[#D4AF37]/60 self-start pb-0.5 transition-colors"
              >
                Ver Detalhes & Lotes →
              </button>
            </div>

            {/* Granville */}
            <div className="border-l border-white/15 pl-5 flex flex-col justify-center">
              <span className="text-[9px] uppercase tracking-widest text-white/50 mb-0.5">Elegância & Bosque</span>
              <span className="text-base font-serif text-white mb-1.5 font-medium">Condomínio Granville</span>
              <button
                onClick={() => onCondoClick('granville')}
                className="text-[9px] uppercase tracking-widest text-[#D4AF37] hover:text-white border-b border-[#D4AF37]/60 self-start pb-0.5 transition-colors"
              >
                Explorar Imóveis →
              </button>
            </div>

            {/* Atlantis */}
            <div className="border-l border-white/15 pl-5 flex flex-col justify-center">
              <span className="text-[9px] uppercase tracking-widest text-white/50 mb-0.5">Beira-Mar / Pé na Areia</span>
              <span className="text-base font-serif text-white mb-1.5 font-medium">Condomínio Atlantis</span>
              <button
                onClick={() => onCondoClick('atlantis')}
                className="text-[9px] uppercase tracking-widest text-[#D4AF37] hover:text-white border-b border-[#D4AF37]/60 self-start pb-0.5 transition-colors"
              >
                Portfólio Oceânico →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
