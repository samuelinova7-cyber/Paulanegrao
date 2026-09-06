import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Phone, ArrowUpRight } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg = encodeURIComponent("Olá Paula Negrão, gostaria de atendimento exclusivo sobre imóveis de alto padrão no Condomínio Laguna e Litoral Sul de Alagoas.");
  const whatsappUrl = `https://wa.me/5582999009222?text=${defaultMsg}`;

  const quickOptions = [
    { label: 'Casa Exclusiva no Laguna (580m²)', text: 'Olá Paula, tenho interesse na casa exclusiva de 580m² porteira fechada no Condomínio Laguna.' },
    { label: 'Casa no Granville (450m² / Terreno 1.114m²)', text: 'Olá Paula, gostaria de saber mais sobre a casa de 450m² no Condomínio Granville.' },
    { label: 'Condomínio Atlantis & Outros', text: 'Olá Paula, procuro casas e lotes no Condomínio Atlantis e região da Praia do Francês.' },
    { label: 'Imóveis de Alto Padrão em Maceió', text: 'Olá Paula, procuro imóveis de alto padrão em Maceió e Litoral Sul.' },
    { label: 'Agendar Visita com Paula Negrão', text: 'Olá Paula, gostaria de agendar um horário para visita aos imóveis.' },
  ];

  const handleOptionClick = (text: string) => {
    window.open(`https://wa.me/5582999009222?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Concierge Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white border border-black/10 shadow-2xl overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-[#1A1A1A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]">
                  <img 
                    src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618103/WhatsApp_Image_2026-09-03_at_11.06.59_AM_ujzlyd.jpg" 
                    alt="Paula Negrão" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-[#1A1A1A] animate-pulse"></span>
              </div>
              <div>
                <h4 className="font-serif text-sm">Paula Negrão</h4>
                <span className="text-[9px] uppercase tracking-wider text-[#D4AF37] block">
                  CRECI-AL 5494 • (82) 99900-9222
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white p-1"
              aria-label="Fechar popover"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message */}
          <div className="p-4 bg-[#FAF8F5] border-b border-black/5 text-xs text-[#5A5550] leading-relaxed font-light">
            Olá! Seja muito bem-vindo(a). Como posso auxiliá-lo(a) na busca pelo seu imóvel de alto padrão em Maceió ou no Condomínio Laguna?
          </div>

          {/* Quick Action Chips */}
          <div className="p-4 space-y-2 bg-white">
            <span className="text-[9px] uppercase tracking-widest text-[#8C827A] font-semibold block mb-1">
              Atalhos de Atendimento:
            </span>
            {quickOptions.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt.text)}
                className="w-full text-left p-2.5 text-xs text-[#1A1A1A] hover:bg-emerald-50/60 border border-black/5 hover:border-emerald-400 transition-all flex items-center justify-between group"
              >
                <span className="truncate">{opt.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 text-center text-[10px] tracking-[0.2em] uppercase font-bold block transition-all shadow-lg hover:shadow-emerald-500/30"
            >
              Iniciar Conversa Direta no WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button - Bright Pulsing Emerald Green */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl border-2 border-white flex items-center gap-3 transition-all duration-300 transform hover:scale-105 animate-bounce hover:animate-none"
        aria-label="Fale no WhatsApp com Paula Negrão"
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7 text-white fill-white/20 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-yellow-400 rounded-full border-2 border-emerald-600 animate-ping"></span>
        </div>
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-white">
            Falar no WhatsApp
          </span>
          <span className="text-[9px] text-emerald-100 tracking-wider">
            (82) 99900-9222
          </span>
        </div>
      </button>

    </div>
  );
};
