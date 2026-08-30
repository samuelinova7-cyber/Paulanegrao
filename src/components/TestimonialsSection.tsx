import React from 'react';
import { TESTIMONIALS } from '../data/lifestyle';
import { Star, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-[#FDFCFB] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89330] font-bold block mb-3">
            Prova Social & Confiança
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight mb-4">
            Depoimentos de Clientes
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-5"></div>
          <p className="text-sm sm:text-base text-[#6A6560] font-light leading-relaxed">
            A satisfação e a segurança de quem escolheu a consultoria imobiliária exclusiva de Paula Negrão para realizar seus maiores investimentos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FAF8F5] border border-black/10 p-8 flex flex-col justify-between relative group hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300"
            >
              {/* Top Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1 text-[#D4AF37]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#D4AF37]/30" />
              </div>

              {/* Highlight Tag */}
              <div className="text-[11px] font-serif italic text-[#8C7326] font-semibold mb-3">
                "{testimonial.highlight}"
              </div>

              {/* Main Content */}
              <p className="text-xs sm:text-sm text-[#5A5550] leading-relaxed font-light mb-8 flex-1">
                "{testimonial.content}"
              </p>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-black/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-serif font-semibold text-[#1A1A1A]">
                      {testimonial.clientName}
                    </h3>
                    <p className="text-[10px] text-[#8C7326] font-medium">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="text-[9px] text-[#8C827A] font-mono">
                    {testimonial.date}
                  </span>
                </div>
                
                <div className="mt-2 flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-[#6A6560]">
                  <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                  <span>Consultoria Validada • {testimonial.type}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Metrics Line */}
        <div className="mt-16 bg-[#F5F2ED] border border-black/5 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-2xl sm:text-3xl font-serif font-medium text-[#1A1A1A] block">
              100%
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#7A7570]">
              Segurança Jurídica
            </span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-serif font-medium text-[#1A1A1A] block">
              CRECI-AL
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#7A7570]">
              Registro Oficial 5494
            </span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-serif font-medium text-[#1A1A1A] block">
              Laguna & Litoral
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#7A7570]">
              Alta Expertise Regional
            </span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-serif font-medium text-[#1A1A1A] block">
              Boutique
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#7A7570]">
              Atendimento Private
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
