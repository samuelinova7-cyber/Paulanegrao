import React from 'react';
import { Video, Instagram, Sparkles, MessageCircle } from 'lucide-react';

export const ExclusiveTourSection: React.FC = () => {
  const videoUrl = 'https://res.cloudinary.com/ddfacd0wf/video/upload/v1788618129/SnapInsta.to_AQPBbJfFdwP9Z5OZ9DzDbpz37Y9EWdf0OifdrBx-FW9XUgcHFPrst0mslwgDVO0qtQku5mHkI5vXtRq-TLGWiqSlMk7H0xx11Blzk2E_mcyteb.mp4';

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Olá Paula Negrão, vi o vídeo exclusivo da casa no Condomínio Laguna (Porteira Fechada) e gostaria de agendar uma visita.');
    window.open(`https://wa.me/5582999009222?text=${text}`, '_blank');
  };

  return (
    <section id="exclusive-tour" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89330] font-bold block mb-3">
            Exclusividade Paula Negrão
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1A1A] tracking-tight mb-4">
            Tour em Vídeo | Condomínio Laguna
          </h2>
          <p className="text-sm sm:text-base text-[#6A6560] font-light leading-relaxed">
            Conheça cada detalhe desta residência espetacular de 580m² em Porteira Fechada no Condomínio Laguna.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-black/10 shadow-xl overflow-hidden p-8 sm:p-12">
          
          {/* Video Player Column */}
          <div className="lg:col-span-6 relative aspect-[9/16] max-h-[600px] w-full bg-black rounded-lg overflow-hidden shadow-2xl mx-auto">
            <video
              src={videoUrl}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#D4AF37] text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 shadow-md flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5" />
              <span>Tour Exclusivo Laguna</span>
            </div>
          </div>

          {/* Description & Details Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#D4AF37]/30 px-3 py-1.5 text-xs text-[#8C7326] font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Modalidade Porteira Fechada</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] mb-4 leading-snug">
                Uma casa linda, espaçosa e inteligente
              </h3>

              <div className="prose text-xs sm:text-sm text-[#5A5550] font-light space-y-4 leading-relaxed mb-6">
                <p>
                  Vou te apresentar com exclusividade uma casa linda, espaçosa e construída de uma forma inteligente, onde sobram espaços no local que você realmente usa, que é a varanda, piscina e área gourmet.
                </p>
                <p>
                  Toda voltada pro nascente, a ventilação corre solta nas suas <strong>5 suítes</strong> (sendo uma master com varanda) e mais <strong>2 quartos extras e escritório</strong>.
                </p>
                <p>
                  Cozinha integrada com a sala e dependência completa, e no piso superior uma cozinha extra de apoio.
                </p>
                <p className="font-medium text-[#1A1A1A]">
                  A casa será vendida na modalidade <strong>porteira fechada</strong>, então é só fazer suas malas e mudar!
                </p>
                <p className="text-base font-serif font-semibold text-[#8C7326]">
                  580m² pra você usufruir e chamar de seu novo lar! 🏡
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-4 px-6 text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-lg flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Visita • (82) 99900-9222</span>
              </button>

              <a
                href="https://www.instagram.com/paulanegraoimoveis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-black text-white py-4 px-6 text-xs tracking-[0.2em] uppercase font-bold transition-all flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4 text-[#D4AF37]" />
                <span>@paulanegraoimoveis</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
