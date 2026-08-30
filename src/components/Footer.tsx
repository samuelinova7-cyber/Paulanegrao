import React from 'react';
import { 
  Instagram, 
  Mail, 
  Phone, 
  MessageCircle, 
  Award, 
  ShieldCheck, 
  ArrowUp,
  MapPin
} from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'sitemap') => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/5582996142244?text=Ol%C3%A1%20Paula%20Negr%C3%A3o%2C%20visitei%20seu%20site%20e%20gostaria%20de%20conversar.";

  return (
    <footer className="bg-[#1A1A1A] text-white border-t border-black/10">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand & Credibility Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif tracking-[0.2em] uppercase text-white">
                Paula Negrão
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-semibold">
                Consultoria Imobiliária de Alto Padrão
              </span>
            </div>
            
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Especialista em imóveis de luxo, casas de alto padrão e terrenos em condomínios fechados na Praia do Francês e Litoral Sul de Alagoas.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37]">
              <Award className="w-4 h-4" />
              <span className="font-serif">CRECI-AL 5494 • Registro Oficial</span>
            </div>
          </div>

          {/* Direct Channels Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              Canais Diretos
            </h4>
            <ul className="space-y-3 text-xs text-white/80 font-light">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-2.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>WhatsApp: (82) 99614-2244</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@paulanegraoimoveis.com.br"
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-2.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="break-all">contato@paulanegraoimoveis.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/paulanegraoinoveis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-2.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Instagram: @paulanegraoinoveis</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/60 text-[11px] pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Praia do Francês, Marechal Deodoro & Maceió - AL</span>
              </li>
            </ul>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-light">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Início (Hero)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sobre')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Sobre a Corretora
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('condominios')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Condomínios (Laguna, Granville, Atlantis)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Portfólio de Imóveis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('bem-estar')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Estilo de Vida & Bem-Estar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('depoimentos')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Depoimentos de Clientes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contato')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Atendimento & Agendamento
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Legal & Back to top */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-light">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#D4AF37] transition-colors text-left underline-offset-4 hover:underline"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#D4AF37] transition-colors text-left underline-offset-4 hover:underline"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('sitemap')}
                  className="hover:text-[#D4AF37] transition-colors text-left underline-offset-4 hover:underline"
                >
                  Mapa do Site
                </button>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 p-2.5 bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A1A1A] text-white text-[10px] uppercase tracking-wider font-semibold transition-all border border-white/15"
                title="Voltar ao topo da página"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Voltar ao Topo</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Footer Bar */}
      <div className="bg-[#111111] border-t border-white/10 py-5 px-6 sm:px-12 text-[10px] tracking-[0.2em] uppercase font-light text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Paula Negrão — Todos os Direitos Reservados
          </div>
          <div className="flex items-center gap-6">
            <span>Instagram: @paulanegraoinoveis</span>
            <span className="text-[#D4AF37] font-semibold">CRECI-AL 5494</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
