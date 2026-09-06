import React from 'react';
import { Instagram, Video, ExternalLink, Sparkles } from 'lucide-react';

export const CafeDeQuintaSection: React.FC = () => {
  const episodes = [
    {
      id: 1,
      title: 'Café de Quinta com Paula Negrão — Ep. 01',
      subtitle: 'Bastidores do Mercado Imobiliário de Luxo no Litoral Sul de Alagoas',
      videoUrl: 'https://res.cloudinary.com/ddfacd0wf/video/upload/v1788618234/SnapInsta.to_AQNmSU-7Exv6FkoNjiHc-NIsRSoPBLo8-kHOcNTbHiSXCNXFS_CkfSU5RDaUdssSfwHA8t9eIt4tO45jmKhYgr99F-33tGDji0D-iLs_putt4o.mp4'
    },
    {
      id: 2,
      title: 'Café de Quinta com Paula Negrão — Ep. 02',
      subtitle: 'Arquitetura, Condomínios Fechados e Dicas de Investimento Exclusivo',
      videoUrl: 'https://res.cloudinary.com/vje6jqtb/video/upload/v1788487835/SnapInsta.to_AQPh-mmesnh8Zj82B4pLHZQns5fPlirmU9i_ME6ZGf_RtFwQECGa4MZySKKyEO8-CBLukFi6T2_tZcLrE-nj6NUsvRviRHAffLC5klE.mp4'
    }
  ];

  return (
    <section id="cafe-de-quinta" className="py-20 sm:py-28 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
            Série Especial no Instagram
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">
            Café de Quinta com Paula Negrão
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            Um bate-papo descontraído e exclusivo sobre arquitetura, tendências, lifestyle e os melhores imóveis de alto padrão na Praia do Francês e Litoral Sul.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          {episodes.map((ep) => (
            <div 
              key={ep.id}
              className="bg-white/5 border border-white/10 overflow-hidden shadow-2xl flex flex-col group hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              {/* Video Player Container */}
              <div className="relative aspect-[16/9] bg-black">
                <video
                  src={ep.videoUrl}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#1A1A1A] text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 flex items-center gap-1">
                  <Video className="w-3 h-3" />
                  <span>Episódio Exclusivo</span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {ep.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light mb-6">
                    {ep.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-[11px] text-[#D4AF37] font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Assista na íntegra</span>
                  </span>

                  <a
                    href="https://www.instagram.com/paulanegraoimoveis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 text-[10px] tracking-widest uppercase font-bold transition-colors flex items-center gap-2 shadow-md"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Seguir no Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to Follow Instagram */}
        <div className="bg-gradient-to-r from-[#222222] to-[#2B2B2B] border border-[#D4AF37]/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center shrink-0">
              <Instagram className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-lg font-serif text-white mb-1">Não perca nenhum episódio do Café de Quinta!</h4>
              <p className="text-xs text-white/70">Siga @paulanegraoimoveis no Instagram para acompanhar tours exclusivos em tempo real.</p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/paulanegraoimoveis/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-bold transition-all shadow-xl flex items-center gap-2.5 shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir @paulanegraoimoveis</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
