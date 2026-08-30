import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Phone, ArrowUpRight } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg = encodeURIComponent("Olá Paula Negrão, gostaria de atendimento exclusivo sobre imóveis de alto padrão no Litoral Sul de Alagoas.");
  const whatsappUrl = `https://wa.me/5582996142244?text=${defaultMsg}`;

  const quickOptions = [
    { label: 'Mansões no Condomínio Laguna', text: 'Olá Paula, tenho interesse em conhecer casas no Condomínio Laguna.' },
    { label: 'Lotes e Terrenos em Condomínio', text: 'Olá Paula, gostaria de ver os terrenos disponíveis nos condomínios fechados.' },
    { label: 'Imóveis Pé na Areia no Francês', text: 'Olá Paula, procuro imóveis pé na areia / beira-mar na Praia do Francês.' },
    { label: 'Agendar Visita Personalizada', text: 'Olá Paula, gostaria de agendar um horário para visita aos imóveis.' },
  ];

  const handleOptionClick = (text: string) => {
    window.open(`https://wa.me/5582996142244?text=${encodeURIComponent(text)}`, '_blank');
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
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#1A1A1A] flex items-center justify-center font-serif text-sm font-bold border border-[#D4AF37]">
                  PN
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#1A1A1A]"></span>
              </div>
              <div>
                <h4 className="font-serif text-sm">Paula Negrão</h4>
                <span className="text-[9px] uppercase tracking-wider text-[#D4AF37] block">
                  CRECI-AL 5494 • Online para Atendimento
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
            Olá! Seja muito bem-vindo(a). Como posso auxiliá-lo(a) na busca pelo seu imóvel de alto padrão ou refúgio à beira-mar?
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
                className="w-full text-left p-2.5 text-xs text-[#1A1A1A] hover:bg-[#FAF8F5] border border-black/5 hover:border-[#D4AF37] transition-all flex items-center justify-between group"
              >
                <span className="truncate">{opt.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full bg-[#1A1A1A] text-white hover:bg-black py-3 text-center text-[10px] tracking-[0.2em] uppercase font-semibold block transition-colors shadow-sm"
            >
              Iniciar Conversa no WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-[#1A1A1A] hover:bg-black text-white p-4 rounded-full shadow-2xl border-2 border-[#D4AF37] flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
        aria-label="Fale no WhatsApp com Paula Negrão"
      >
        <MessageCircle className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline text-[11px] tracking-[0.2em] uppercase font-medium pr-1">
          Fale com Paula
        </span>
      </button>

    </div>
  );
};
