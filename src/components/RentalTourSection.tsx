import React from 'react';
import { Video, Instagram, Sparkles, MessageCircle, Home } from 'lucide-react';

export const RentalTourSection: React.FC = () => {
  const videoUrl = 'https://res.cloudinary.com/ddfacd0wf/video/upload/v1788618119/SnapInsta.to_AQN0MO0lZtgqpIh9YJjcTZgjkM5ehecdKvQ2oJUL5IPEfozzjr_v7i1B7L9teFqYbNc7vyTiGfzo2H2TlXQ7xlaIs2yn_Cs0oTiOODE_qwmtfw.mp4';

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Olá Paula Negrão, vi a casa de alto padrão disponível para locação por R$ 10.000,00 e gostaria de agendar uma visita.');
    window.open(`https://wa.me/5582999009222?text=${text}`, '_blank');
  };

  return (
    <section id="rental-tour" className="py-20 sm:py-28 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
            Oportunidade para Locação • Exclusividade
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">
            Casa de Alto Padrão para Locação
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            Exclusividade, conforto e localização perfeita. 100% mobiliada e pronta para morar.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/5 border border-white/10 shadow-2xl overflow-hidden p-8 sm:p-12">
          
          {/* Video Player Column */}
          <div className="lg:col-span-6 relative aspect-[9/16] max-h-[600px] w-full bg-black rounded-lg overflow-hidden shadow-2xl mx-auto">
            <video
              src={videoUrl}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 shadow-md flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5" />
              <span>Locação • R$ 10.000/mês</span>
            </div>
          </div>

          {/* Description & Details Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/40 px-3 py-1.5 text-xs text-[#D4AF37] font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>IPTU e Condomínio Inclusos no Valor</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-4 leading-snug">
                Casa de alto padrão disponível para locação! 🏡✨
              </h3>

              <div className="prose text-xs sm:text-sm text-white/80 font-light space-y-4 leading-relaxed mb-6">
                <p>
                  Se você procura por exclusividade, conforto e localização, essa é a oportunidade perfeita. O imóvel conta com:
                </p>
                <ul className="space-y-2 list-disc pl-4 text-white/90">
                  <li><strong>4 quartos</strong>, sendo 3 suítes (a master com closet e varanda privativa)</li>
                  <li><strong>100% mobiliada</strong> e pronta para morar</li>
                  <li>Área de lazer com <strong>piscina privativa</strong></li>
                </ul>
                <p className="p-3 bg-white/5 border-l-2 border-[#D4AF37] text-white">
                  <strong>Valor do Aluguel:</strong> R$ 10.000,00 <span className="text-xs text-[#D4AF37] block mt-0.5">(já inclusos IPTU e Condomínio)</span>
                </p>
                <p className="italic text-white/70 text-xs">
                  Corre que uma casa assim não fica muito tempo disponível no mercado! Bora mudar de vida hoje?
                </p>
              </div>
            </div>

            {/* Action Buttons (Bright Green WhatsApp & Instagram Gradient) */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto flex-1 bg-emerald-500 hover:bg-emerald-400 text-black py-4 px-6 text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-xl flex items-center justify-center gap-2.5 rounded-sm"
              >
                <MessageCircle className="w-5 h-5 text-black fill-current" />
                <span>WhatsApp • (82) 99900-9222</span>
              </button>

              <a
                href="https://www.instagram.com/paulanegraoimoveis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white py-4 px-6 text-xs tracking-[0.2em] uppercase font-bold transition-all flex items-center justify-center gap-2 shadow-xl rounded-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>@paulanegraoimoveis</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
