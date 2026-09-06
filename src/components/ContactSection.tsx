import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Instagram, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Comprar Casa de Luxo',
    condominium: 'Laguna',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp pre-formatted message
    const msg = `Olá Paula Negrão! Mensagem enviada pelo site:\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*E-mail:* ${formData.email}\n*Interesse:* ${formData.interest}\n*Condomínio:* ${formData.condominium}\n*Mensagem:* ${formData.message || 'Gostaria de um atendimento personalizado.'}`;
    
    const whatsappUrl = `https://wa.me/5582999009222?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        interest: 'Comprar Casa de Luxo',
        condominium: 'Laguna',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89330] font-bold block mb-3">
            Atendimento Personalizado
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight mb-4">
            Fale com a Especialista
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-5"></div>
          <p className="text-sm sm:text-base text-[#6A6560] font-light leading-relaxed">
            Inicie sua jornada rumo ao imóvel perfeito na Praia do Francês e Litoral Sul de Alagoas com total privacidade e excelência técnica.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Contact Card */}
            <div className="bg-[#FAF8F5] border border-black/10 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-black/10">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-lg">
                  PN
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#1A1A1A]">Paula Negrão</h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#8C7326] font-semibold uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    <span>CRECI-AL 5494</span>
                  </div>
                </div>
              </div>

              {/* Channels List */}
              <div className="space-y-5">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5582999009222?text=Ol%C3%A1%20Paula%20Negr%C3%A3o%2C%20gostaria%20de%20um%20atendimento%20personalizado."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 bg-emerald-50/50 hover:bg-emerald-50 transition-colors border border-emerald-200 group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold block">
                      WhatsApp Direto (Oficial)
                    </span>
                    <span className="text-sm font-bold text-[#1A1A1A]">
                      +55 (82) 99900-9222
                    </span>
                    <span className="text-[10px] text-emerald-700 block font-medium">Atendimento Imediato & Agendamento</span>
                  </div>
                </a>

                {/* Linktree */}
                <a
                  href="https://linktr.ee/imoveispaulanegrao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 hover:bg-white transition-colors border border-transparent hover:border-black/5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-[#1A1A1A] transition-colors">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7A7570] block">
                      Linktree Oficial
                    </span>
                    <span className="text-sm font-semibold text-[#1A1A1A]">
                      linktr.ee/imoveispaulanegrao
                    </span>
                    <span className="text-[10px] text-[#8C7326] block">Acesse todos os canais e materiais</span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/paulanegraoimoveis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 hover:bg-white transition-colors border border-transparent hover:border-black/5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white flex items-center justify-center shrink-0 shadow">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7A7570] block">
                      Instagram Oficial
                    </span>
                    <span className="text-sm font-semibold text-[#1A1A1A]">
                      @paulanegraoimoveis
                    </span>
                    <span className="text-[10px] text-[#7A7570] block">Vídeos, reels de imóveis & lifestyle</span>
                  </div>
                </a>

                {/* Localização */}
                <div className="flex items-start gap-4 p-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-black/10 flex items-center justify-center shrink-0 text-[#1A1A1A]">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7A7570] block">
                      Região de Atuação
                    </span>
                    <span className="text-xs font-medium text-[#1A1A1A]">
                      Maceió, Litoral Sul de Alagoas (Praia do Francês, Condomínio Laguna, Granville e Atlantis)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Promise */}
            <div className="p-4 bg-[#F5F2ED] border-l-2 border-[#D4AF37] text-xs text-[#5A5550] leading-relaxed">
              <strong className="text-[#1A1A1A] block mb-1">Garantia de Confidencialidade:</strong>
              Suas informações são tratadas com absoluto sigilo, em conformidade com as diretrizes do CRECI e da LGPD.
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white border border-black/10 p-8 sm:p-12 shadow-lg">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7326] font-semibold block mb-1">
                Formulário de Contato Direto
              </span>
              <h3 className="text-2xl font-serif text-[#1A1A1A]">
                Agende uma Reunião ou Solicite Detalhes
              </h3>
              <p className="text-xs text-[#6A6560] font-light mt-1">
                Preencha os campos abaixo. Ao clicar em enviar, você será direcionado para o WhatsApp com todos os dados preenchidos.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#FAF8F5] border border-[#D4AF37] text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto" />
                <h4 className="font-serif text-lg text-[#1A1A1A]">Mensagem Encaminhada com Sucesso!</h4>
                <p className="text-xs text-[#6A6560]">
                  O WhatsApp da consultoria foi aberto para dar continuidade ao seu atendimento personalizado com Paula Negrão.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A] font-semibold mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex.: Dr. Carlos Eduardo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-3 text-xs text-[#1A1A1A] placeholder:text-[#8C827A] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A] font-semibold mb-1.5">
                      Telefone / WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(82) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-3 text-xs text-[#1A1A1A] placeholder:text-[#8C827A] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A] font-semibold mb-1.5">
                    Seu E-mail Preferencial *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-3 text-xs text-[#1A1A1A] placeholder:text-[#8C827A] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A] font-semibold mb-1.5">
                      Objetivo Principal
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Comprar Casa de Luxo">Comprar Casa de Luxo</option>
                      <option value="Comprar Terreno em Condomínio">Comprar Terreno em Condomínio</option>
                      <option value="Imóvel Mobiliado">Imóvel Mobiliado</option>
                      <option value="Locação de Temporada">Locação de Temporada</option>
                      <option value="Vender meu Imóvel de Alto Padrão">Vender meu Imóvel de Alto Padrão</option>
                      <option value="Consultoria de Investimento">Consultoria de Investimento</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A] font-semibold mb-1.5">
                      Condomínio de Preferência
                    </label>
                    <select
                      value={formData.condominium}
                      onChange={(e) => setFormData({ ...formData, condominium: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Condomínio Laguna">Condomínio Laguna (Marechal/Francês)</option>
                      <option value="Condomínio Granville">Condomínio Granville (Francês)</option>
                      <option value="Condomínio Atlantis">Condomínio Atlantis (Pé na Areia)</option>
                      <option value="Praia do Francês Geral">Praia do Francês (Geral)</option>
                      <option value="Litoral Sul e Maceió">Litoral Sul de Alagoas / Maceió</option>
                      <option value="Ainda avaliando opções">Ainda avaliando opções</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#1A1A1A] font-semibold mb-1.5">
                    Mensagem ou Requisitos Específicos (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex.: Busco uma casa com 4 ou 5 suítes, píer para barco e piscina com vista lagoa."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-3 text-xs text-[#1A1A1A] placeholder:text-[#8C827A] focus:outline-none focus:border-[#D4AF37]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 px-6 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/40 animate-pulse hover:animate-none"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Enviar & Falar no WhatsApp (+55 82 99900-9222)</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
