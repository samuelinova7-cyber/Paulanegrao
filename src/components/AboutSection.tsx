import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Award, 
  MessageCircle, 
  Trophy,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const whatsappUrl = "https://wa.me/5582999009222?text=Ol%C3%A1%20Paula%20Negr%C3%A3o%2C%20gostaria%20de%20conversar%20sobre%20im%C3%B3veis%20de%20alto%20padr%C3%A3o%20em%20Macei%C3%B3%20e%20no%20Litoral%20Sul.";

  // Media items provided by Paula Negrão
  const mediaItems = [
    {
      type: 'image',
      url: 'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618103/WhatsApp_Image_2026-09-03_at_11.06.59_AM_ujzlyd.jpg',
      caption: 'Paula Negrão (Paulinha do Tênis) em sua rotina de esporte e alto padrão'
    },
    {
      type: 'video',
      url: 'https://res.cloudinary.com/ddfacd0wf/video/upload/v1788618101/SnapInsta.to_AQPysDD_MZaZU5vnKm1WIICZ0IbH4tj3XcRugo-QaMtExLqY2Kzy340mO3CFhPuVch5V1ha0DRfxLeb0cxf9zuRQlM9GNugwpxIISvQ_n21fgw.mp4',
      caption: 'Momento de esporte e adrenalina com Paulinha do Tênis'
    },
    {
      type: 'image',
      url: 'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618098/SnapInsta.to_657762026_18176911843388795_614429096028725837_n_iztttg.jpg',
      caption: 'Trajetória vitoriosa no tênis e paixão pelo Litoral Sul de Alagoas'
    },
    {
      type: 'image',
      url: 'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618097/SnapInsta.to_656265823_18075705254566654_3935722329130970079_n_t1xure.jpg',
      caption: 'Consultoria imobiliária boutique com Paula Negrão'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, mediaItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#FDFCFB] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF8F5] border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase font-semibold mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Atleta, Corretora & Especialista • CRECI-AL 5494</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1A1A] tracking-tight mb-4">
            Prazer, eu sou a Paula Negrão, ou a <span className="italic text-[#B89330]">Paulinha do Tênis</span> 🎾
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-sm sm:text-base text-[#6A6560] font-light leading-relaxed">
            Conheça minha história nas quadras internacionais e como transformei minha paixão por viver bem em consultoria imobiliária de alto padrão em Alagoas.
          </p>
        </div>

        {/* Main Grid: Alternating Media Block & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Alternating Media Block (Images & Video) */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-black/15 bg-[#F5F2ED] p-3 shadow-2xl">
              <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden bg-black rounded-sm">
                
                {mediaItems[currentIndex].type === 'image' ? (
                  <img
                    src={mediaItems[currentIndex].url}
                    alt={mediaItems[currentIndex].caption}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                ) : (
                  <video
                    src={mediaItems[currentIndex].url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Overlay gradient & caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold mb-1">
                    Rotina & Esporte • {currentIndex + 1} de {mediaItems.length}
                  </span>
                  <p className="text-white text-xs sm:text-sm font-light leading-relaxed">
                    {mediaItems[currentIndex].caption}
                  </p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-black/10 transition-colors"
                    aria-label="Mídia anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-black/10 transition-colors"
                    aria-label="Próxima mídia"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="p-2 bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-black/10 transition-colors text-[10px] uppercase tracking-wider px-3 flex items-center gap-1.5"
                    title={isAutoPlay ? 'Pausar rotação automática' : 'Iniciar rotação automática'}
                  >
                    {isAutoPlay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{isAutoPlay ? 'Pausar' : 'Auto'}</span>
                  </button>
                </div>

                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {mediaItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        currentIndex === idx ? 'bg-[#D4AF37] w-6' : 'bg-black/20 hover:bg-black/40'
                      }`}
                      aria-label={`Ir para mídia ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Credential Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#1A1A1A] text-white p-4 sm:p-5 shadow-2xl border-l-2 border-[#D4AF37] max-w-[240px]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">Registro Oficial</span>
                </div>
                <div className="text-sm font-serif font-medium">CRECI-AL 5494</div>
                <div className="text-[9px] text-white/60 tracking-wider uppercase mt-0.5">Consultoria Private Alagoas</div>
              </div>
            </div>
          </div>

          {/* Paula's Personal Story & Real Estate Narrative */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4 text-[#4A4540] text-sm sm:text-base font-light leading-relaxed">
              <p className="text-base sm:text-lg font-serif text-[#1A1A1A] italic leading-relaxed border-l-2 border-[#D4AF37] pl-4">
                "Me chamo Paula Negrão, mas também sou conhecida por <strong>a Paulinha do Tênis 🎾</strong>."
              </p>

              <p>
                Jogo tênis desde os meus 7 anos e não parei mais. Participei de torneios inesquecíveis em Lima (Peru), no mundial de Miami, entre outros, e cheguei a ser a <strong>número 9 do Mundo no ranking ITF (International Tennis Federation)</strong> da minha categoria... 🏆
              </p>

              <p>
                Apaixonada pela adrenalina que o esporte me oferece, sinto a necessidade diária de praticar atividade física. Por isso, você também verá muito esporte por aqui na minha rotina!
              </p>

              <p>
                Me apaixonei pela negociação de imóveis 🏡 quando me mudei para um lindo condomínio com uma área de lazer encantadora, e que me fez querer apresentar para meus amigos todos os benefícios de morar nele, e tudo de bom que ele oferecia. Queria trazer todos para serem meus vizinhos 😅…
              </p>

              <p>
                De repente, me senti corretora de imóveis, e me formei assim! 🎓
              </p>

              <p className="font-medium text-[#1A1A1A] bg-[#FAF8F5] p-4 border border-[#D4AF37]/30">
                Hoje tenho o maior prazer em atender cada pessoa que me procura com seus planos de moradia nova. Eu realmente acredito que morar em uma casa boa, um apartamento confortável, não é um luxo, e sim uma necessidade. Posso dizer que <strong>você será muito mais feliz morando bem!</strong>
              </p>

              <p className="font-serif italic text-base text-[#B89330]">
                E eu posso ajudar você nessa busca! Vamos conversar?
              </p>
            </div>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 bg-[#F5F2ED] border border-black/5">
                <Sparkles className="w-4 h-4 text-[#D4AF37] mb-2" />
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] mb-1">
                  Curadoria Rígida
                </h4>
                <p className="text-[11px] text-[#6A6560] font-light">
                  Imóveis selecionados com padrão construtivo impecável.
                </p>
              </div>

              <div className="p-3.5 bg-[#F5F2ED] border border-black/5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] mb-2" />
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] mb-1">
                  Sigilo & Confiança
                </h4>
                <p className="text-[11px] text-[#6A6560] font-light">
                  Atendimento reservado e total segurança jurídica.
                </p>
              </div>

              <div className="p-3.5 bg-[#F5F2ED] border border-black/5">
                <HeartHandshake className="w-4 h-4 text-[#D4AF37] mb-2" />
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] mb-1">
                  Morar Bem
                </h4>
                <p className="text-[11px] text-[#6A6560] font-light">
                  Necessidade essencial para sua qualidade de vida.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-bold transition-all shadow-lg hover:shadow-emerald-500/40 animate-pulse hover:animate-none"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Conversar no WhatsApp com Paula Negrão (+55 82 99900-9222)</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

