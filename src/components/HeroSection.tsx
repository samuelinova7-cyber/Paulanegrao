import React from 'react';
import { MessageCircle, ArrowUpRight, Award, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onCondoClick: (condoId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onCondoClick }) => {
  const whatsappUrl = "https://wa.me/5582999009222?text=Ol%C3%A1%20Paula%20Negr%C3%A3o%2C%20gostaria%20de%20conversar%20sobre%20im%C3%B3veis%20de%20alto%20padr%C3%A3o%20no%20Condom%C3%ADnio%20Laguna%20e%20Praia%20do%20Franc%C3%AAs.";

  return (
    <section id="hero" className="relative bg-[#FDFCFB] border-b border-black/5 overflow-hidden">
      {/* Main Hero Grid - Split Screen with Humanized & Professional Presence */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[660px] items-stretch">
        
        {/* Left Content Column: SEO Semantic Copy & Authority */}
        <div className="lg:col-span-7 px-6 sm:px-12 py-12 sm:py-20 flex flex-col justify-center bg-white z-10">
          <div className="max-w-xl">
            
            {/* Paula Negrão Badge / Tagline */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#FAF8F5] border border-[#D4AF37]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C7326] font-bold">
                Paula Negrão • Consultoria Private
              </span>
              <span className="text-[9px] text-[#1A1A1A]/60 font-mono border-l border-black/10 pl-2">
                CRECI-AL 5494
              </span>
            </div>

            {/* H1 SEO Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-[1.18] tracking-tight mb-6">
              Viver com Exclusividade na <span className="text-[#8C7326] italic font-normal">Praia do Francês</span>
            </h1>

            {/* Optimized Semantic Copy with 3x Repetition of Condomínio Laguna & Litoral Sul */}
            <div className="text-base sm:text-lg text-[#5A5550] mb-8 leading-relaxed font-light border-l-2 border-[#D4AF37] pl-6 space-y-3">
              <p>
                Viva a experiência única de morar no <strong className="text-[#1A1A1A] font-semibold">Condomínio Laguna</strong>, o endereço mais desejado do <strong>Litoral Sul</strong>.
              </p>
              <p className="text-sm sm:text-base text-[#6A6560]">
                Padrão construtivo incomparável, segurança e sofisticação integrados à natureza da <strong>Praia do Francês</strong>. Descubra o privilégio de chamar o <strong className="text-[#1A1A1A] font-semibold">Condomínio Laguna</strong> de seu novo lar no coração do <strong>Litoral Sul</strong>.
              </p>
            </div>

            {/* Quick Strategic Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 text-xs text-[#1A1A1A] border border-black/5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                Condomínio Laguna
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 text-xs text-[#1A1A1A] border border-black/5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Praia do Francês
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 text-xs text-[#1A1A1A] border border-black/5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Litoral Sul de Alagoas
              </span>
            </div>

            {/* CTAs with High-Contrast Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-emerald-500/40 animate-pulse hover:animate-none group"
              >
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>Conversar no WhatsApp (+55 82 99900-9222)</span>
              </a>

              <a
                href="https://linktr.ee/imoveispaulanegrao"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-[11px] tracking-[0.2em] uppercase font-semibold text-[#1A1A1A] hover:text-[#8C7326] transition-colors border-b border-black/20 hover:border-[#D4AF37] flex items-center justify-center gap-2"
              >
                <span>Acessar Linktree</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-6 border-t border-black/5 grid grid-cols-3 gap-4 text-[#6A6560]">
              <div>
                <span className="block text-xs font-serif text-[#1A1A1A] font-semibold">CRECI-AL 5494</span>
                <span className="text-[10px] tracking-wider uppercase opacity-80">Registro Oficial</span>
              </div>
              <div>
                <span className="block text-xs font-serif text-[#1A1A1A] font-semibold">Porteira Fechada</span>
                <span className="text-[10px] tracking-wider uppercase opacity-80">Opções Exclusivas</span>
              </div>
              <div>
                <span className="block text-xs font-serif text-[#1A1A1A] font-semibold">Atendimento VIP</span>
                <span className="text-[10px] tracking-wider uppercase opacity-80">Paula Negrão</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Visual Imagery Column: Prominent Gallery of Paula Negrão */}
        <div className="lg:col-span-5 relative bg-[#1A1A1A] overflow-hidden min-h-[500px] lg:min-h-full flex flex-col items-center justify-between p-6 sm:p-10">
          
          {/* Main Visual Container: Paula Negrão Portrait with Gold Accent Frame */}
          <div className="w-full flex-1 relative border border-[#D4AF37]/40 overflow-hidden shadow-2xl min-h-[420px] bg-black">
            <img
              src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618103/WhatsApp_Image_2026-09-03_at_11.06.59_AM_ujzlyd.jpg"
              alt="Paula Negrão - Especialista em Imóveis de Alto Padrão em Maceió e Condomínio Laguna"
              className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

            {/* Floating Specialist Card on Image */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-2xl border border-black/10">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#8C7326] font-bold">
                  Sua Consultora de Confiança
                </span>
              </div>
              <p className="font-serif italic text-sm sm:text-base text-[#1A1A1A] mb-2 leading-snug">
                "Você será muito mais feliz morando bem em Maceió e no Litoral Sul."
              </p>
              <div className="flex items-center justify-between pt-1.5 border-t border-black/5">
                <p className="text-xs font-semibold text-[#1A1A1A]">
                  Paula Negrão <span className="text-[10px] text-[#7A7570] font-normal font-sans">(@paulanegraoimoveis)</span>
                </p>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  CRECI-AL 5494
                </span>
              </div>
            </div>

            {/* Circular Authority Badge Top Right */}
            <div className="absolute top-4 right-4 w-20 h-20 border border-[#D4AF37] bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl p-2 text-center pointer-events-none">
              <div className="w-16 h-16 rounded-full border border-dashed border-[#D4AF37]/60 flex flex-col items-center justify-center p-1 text-white">
                <Sparkles className="w-3 h-3 text-[#D4AF37] mb-0.5" />
                <span className="text-[7.5px] uppercase tracking-wider font-bold text-white leading-tight">
                  Condomínio<br />Laguna
                </span>
              </div>
            </div>

          </div>

          {/* Additional Photos of Paula Negrão visible right on first screen */}
          <div className="w-full grid grid-cols-3 gap-3 mt-4 pt-2 border-t border-white/10">
            <div className="relative group overflow-hidden border border-white/20 aspect-video bg-black shadow">
              <img 
                src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618098/SnapInsta.to_657762026_18176911843388795_614429096028725837_n_iztttg.jpg" 
                alt="Paula Negrão nas quadras" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-1">
                <span className="text-[8px] text-white tracking-wider font-medium truncate">Atleta ITF Top 9</span>
              </div>
            </div>

            <div className="relative group overflow-hidden border border-white/20 aspect-video bg-black shadow">
              <img 
                src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618097/SnapInsta.to_656265823_18075705254566654_3935722329130970079_n_t1xure.jpg" 
                alt="Paula Negrão no litoral" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-1">
                <span className="text-[8px] text-white tracking-wider font-medium truncate">Alto Padrão AL</span>
              </div>
            </div>

            <div className="relative group overflow-hidden border border-[#D4AF37]/50 aspect-video bg-black shadow">
              <img 
                src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618101/WhatsApp_Image_2026-09-03_at_11.07.06_AM_s2kov7.jpg" 
                alt="Paula Negrão Logotipo" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-1">
                <span className="text-[8px] text-[#D4AF37] tracking-wider font-medium truncate">CRECI 5494</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Showcase Ribbon: Destaques Condomínios com Foco em Laguna */}
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
            <div className="border-l border-emerald-500/50 pl-5 flex flex-col justify-center bg-white/5 py-3 pr-3">
              <div className="flex items-center gap-1.5 text-emerald-400 text-[9px] uppercase tracking-widest font-bold mb-0.5">
                <Sparkles className="w-3 h-3" />
                <span>Porteira Fechada (580m²)</span>
              </div>
              <span className="text-base font-serif text-white mb-1.5 font-semibold">Casa Exclusiva Laguna</span>
              <button
                onClick={() => onCondoClick('laguna')}
                className="text-[9px] uppercase tracking-widest text-[#D4AF37] hover:text-white border-b border-[#D4AF37]/60 self-start pb-0.5 transition-colors font-medium"
              >
                Ver Especificações (580m²) →
              </button>
            </div>

            {/* Granville */}
            <div className="border-l border-white/15 pl-5 flex flex-col justify-center py-3">
              <span className="text-[9px] uppercase tracking-widest text-emerald-400 font-semibold mb-0.5">450m² em Terreno 1.114m²</span>
              <span className="text-base font-serif text-white mb-1.5 font-medium">Casa no Granville</span>
              <button
                onClick={() => onCondoClick('granville')}
                className="text-[9px] uppercase tracking-widest text-[#D4AF37] hover:text-white border-b border-[#D4AF37]/60 self-start pb-0.5 transition-colors"
              >
                Ver Especificações (450m²) →
              </button>
            </div>

            {/* Atlantis */}
            <div className="border-l border-white/15 pl-5 flex flex-col justify-center py-3">
              <span className="text-[9px] uppercase tracking-widest text-white/50 mb-0.5">Condomínio Fechado</span>
              <span className="text-base font-serif text-white mb-1.5 font-medium">Condomínio Atlantis</span>
              <button
                onClick={() => onCondoClick('atlantis')}
                className="text-[9px] uppercase tracking-widest text-[#D4AF37] hover:text-white border-b border-[#D4AF37]/60 self-start pb-0.5 transition-colors"
              >
                Ver Condomínio →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
