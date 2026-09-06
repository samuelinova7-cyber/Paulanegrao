import React from 'react';
import { LIFESTYLE_PILLARS } from '../data/lifestyle';
import { 
  Waves, 
  ShieldCheck, 
  Compass, 
  Utensils, 
  Sun, 
  Heart, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const LifestyleSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Waves':
        return <Waves className="w-5 h-5 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#D4AF37]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="bem-estar" className="py-20 sm:py-28 bg-[#F5F2ED] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89330] font-bold block mb-3">
            O Privilégio do Litoral Sul
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight mb-4">
            Estilo de Vida & Bem-Estar à Beira-Mar
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-5"></div>
          <p className="text-base text-[#5A5550] font-light leading-relaxed">
            Morar no Litoral Sul de Alagoas não é apenas adquirir um imóvel; é transformar completamente a sua qualidade de vida, unindo privacidade inegociável, segurança de condomínio fechado e a energia revigorante do mar e das lagoas.
          </p>
        </div>

        {/* 4 Lifestyle Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {LIFESTYLE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white border border-black/10 shadow-sm overflow-hidden flex flex-col sm:flex-row group hover:shadow-lg transition-all duration-300"
            >
              {/* Pillar Image */}
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto relative overflow-hidden bg-[#1A1A1A]">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-sm text-white text-[9px] uppercase tracking-widest px-2.5 py-1">
                  {pillar.tag}
                </div>
              </div>

              {/* Pillar Narrative */}
              <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-black/5 flex items-center justify-center mb-4">
                    {getIcon(pillar.iconName)}
                  </div>
                  
                  <h3 className="font-serif text-lg text-[#1A1A1A] mb-1.5 font-medium">
                    {pillar.title}
                  </h3>

                  <div className="text-[11px] text-[#8C7326] uppercase tracking-wider font-semibold mb-3">
                    {pillar.subtitle}
                  </div>

                  <p className="text-xs text-[#6A6560] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/5 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#1A1A1A] font-semibold">
                  <span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span>
                  <span>Experiência Exclusiva</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Wellness Quote Banner */}
        <div className="bg-[#FAF8F5] border-l-4 border-[#D4AF37] p-8 sm:p-12 border-y border-r border-black/5 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="font-serif italic text-2xl sm:text-3xl text-[#1A1A1A] mb-3 leading-snug">
              "A verdadeira sofisticação é ter tempo, paz e o mar azul de Alagoas como extensão do seu jardim."
            </h3>
            <p className="text-xs sm:text-sm text-[#6A6560] font-light">
              — <strong>Paula Negrão</strong>, CRECI-AL 5494. Ajudando famílias e investidores a descobrirem o equilíbrio ideal no litoral sul alagoano.
            </p>
          </div>

          <a
            href="https://wa.me/5582999009222?text=Ol%C3%A1%20Paula%20Negr%C3%A3o%2C%20quero%20conhecer%20mais%20sobre%20o%20estilo%20de%20vida%20e%20im%C3%B3veis%20em%20Macei%C3%B3%20e%20Litoral%20Sul."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-bold transition-all whitespace-nowrap shadow-lg hover:shadow-emerald-500/40 animate-pulse hover:animate-none shrink-0"
          >
            Conversar no WhatsApp (+55 82 99900-9222)
          </a>
        </div>

      </div>
    </section>
  );
};
