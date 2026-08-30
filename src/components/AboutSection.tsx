import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  CheckCircle2, 
  Award, 
  MessageCircle, 
  Compass, 
  Building 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const whatsappUrl = "https://wa.me/5582996142244?text=Ol%C3%A1%20Paula%20Negr%C3%A3o%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20de%20consultoria%20imobili%C3%A1ria%20exclusiva.";

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#FDFCFB] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89330] font-bold block mb-3">
            Quem Sou • Consultoria Private
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight mb-4">
            Paula Negrão
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-[#6A6560] font-light leading-relaxed">
            Especialista em imóveis de alto padrão e referência em qualidade de vida e investimentos imobiliários no Litoral Sul de Alagoas.
          </p>
        </div>

        {/* Main Grid: Portrait and Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-black/10 bg-[#F5F2ED] p-3 shadow-xl">
              <div className="relative aspect-[3/4] overflow-hidden bg-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                  alt="Paula Negrão - Corretora de Alto Padrão CRECI-AL 5494"
                  className="w-full h-full object-cover object-top filter grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Bottom Credential Tag */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#1A1A1A] text-white p-5 shadow-2xl border-l-2 border-[#D4AF37] max-w-[240px]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">Credenciamento</span>
                </div>
                <div className="text-sm font-serif font-medium">CRECI-AL 5494</div>
                <div className="text-[9px] text-white/60 tracking-wider uppercase mt-0.5">Conselho Regional de Corretores de Imóveis</div>
              </div>
            </div>
          </div>

          {/* Text & Philosophy Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7326] font-semibold block mb-2">
                Atendimento Boutique & Exclusivo
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] leading-snug mb-5 italic">
                "Conectar pessoas ao lar ideal onde o luxo encontra o bem-estar e a tranquilidade à beira-mar."
              </h3>
              <p className="text-[#5A5550] text-sm sm:text-base leading-relaxed font-light mb-4">
                Com sólida atuação no mercado imobiliário alagoano, <strong>Paula Negrão</strong> desenvolveu uma metodologia de atendimento consultivo e reservado. Mais do que apresentar propriedades, o foco é compreender o estilo de vida, as aspirações de lazer e os objetivos patrimoniais de cada cliente.
              </p>
              <p className="text-[#5A5550] text-sm sm:text-base leading-relaxed font-light">
                Com presença constante e profundo trânsito nos mais prestigiados condomínios fechados da região — como o <strong>Condomínio Laguna BRL</strong>, <strong>Granville</strong> e <strong>Atlantis</strong> —, Paula oferece acesso privilegiado a oportunidades muitas vezes indisponíveis no mercado aberto.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-black/5">
              <div className="p-4 bg-[#F5F2ED]/60 border border-black/5">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] mb-1">
                  Curadoria Rígida
                </h4>
                <p className="text-[11px] text-[#6A6560] leading-normal font-light">
                  Apenas imóveis com padrão construtivo impecável e documentação 100% validada.
                </p>
              </div>

              <div className="p-4 bg-[#F5F2ED]/60 border border-black/5">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] mb-1">
                  Sigilo & Discrição
                </h4>
                <p className="text-[11px] text-[#6A6560] leading-normal font-light">
                  Tratamento de dados confidenciais e negociações diretas com total segurança jurídica.
                </p>
              </div>

              <div className="p-4 bg-[#F5F2ED]/60 border border-black/5">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
                  <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] mb-1">
                  Foco em Bem-Estar
                </h4>
                <p className="text-[11px] text-[#6A6560] leading-normal font-light">
                  Imóveis que valorizam ventilação natural, contato com as águas e desaceleração.
                </p>
              </div>
            </div>

            {/* Direct button */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white hover:bg-black px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-medium transition-all shadow-sm hover:shadow"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Agendar Consultoria com Paula Negrão</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
