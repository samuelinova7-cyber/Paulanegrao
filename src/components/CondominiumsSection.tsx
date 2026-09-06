import React, { useState } from 'react';
import { CONDOMINIUMS } from '../data/condominiums';
import { 
  Waves, 
  Anchor, 
  MapPin, 
  Check, 
  MessageCircle, 
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface CondominiumsSectionProps {
  onSelectCondoFilter: (condoName: string) => void;
}

export const CondominiumsSection: React.FC<CondominiumsSectionProps> = ({ onSelectCondoFilter }) => {
  const [selectedCondoId, setSelectedCondoId] = useState<string>('laguna');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const selectedCondo = CONDOMINIUMS.find(c => c.id === selectedCondoId) || CONDOMINIUMS[0];
  const allImages = [selectedCondo.heroImage, ...(selectedCondo.gallery || [])];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handleSelectTab = (id: string) => {
    setSelectedCondoId(id);
    setActiveImageIndex(0);
  };

  const handleWhatsAppCondo = (condoName: string) => {
    const text = encodeURIComponent(`Olá Paula Negrão, tenho interesse em conhecer os imóveis e lotes disponíveis no ${condoName} em Maceió / Litoral Sul. Poderia me enviar mais informações?`);
    window.open(`https://wa.me/5582999009222?text=${text}`, '_blank');
  };

  return (
    <section id="condominios" className="py-20 sm:py-28 bg-[#F5F2ED] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89330] font-bold block mb-3">
            Localizações Privilegiadas
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight mb-4">
            Áreas de Atuação & Condomínios de Destaque
          </h2>
          <p className="text-base text-[#5A5550] font-light leading-relaxed">
            A <strong>Praia do Francês</strong> é o refúgio perfeito entre o mar azul e a tranquilidade. Nossa atuação abrange os condomínios fechados mais cobiçados da região e os pontos mais nobres do <strong>Litoral Sul de Alagoas e Maceió</strong>.
          </p>
        </div>

        {/* Regional Overview Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Praia do Francês */}
          <div className="bg-white p-6 border border-black/5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Waves className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-serif text-lg text-[#1A1A1A]">Praia do Francês</h3>
            </div>
            <p className="text-xs text-[#6A6560] leading-relaxed font-light">
              Famosa pelas águas mornas, piscinas de corais calmas e trecho com ondas ideais para surfe. Um ecossistema de lazer praiano e sossego.
            </p>
          </div>

          {/* Card 2: Litoral Sul & Marechal */}
          <div className="bg-white p-6 border border-black/5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Anchor className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-serif text-lg text-[#1A1A1A]">Complexo Náutico & Lagoa</h3>
            </div>
            <p className="text-xs text-[#6A6560] leading-relaxed font-light">
              Encontro magistral entre a Lagoa Manguaba e o oceano. Acesso a marinas, passeios de lancha e gastronomia à beira da água.
            </p>
          </div>

          {/* Card 3: Proximidade com Maceió */}
          <div className="bg-white p-6 border border-black/5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-serif text-lg text-[#1A1A1A]">Maceió & Região Sul</h3>
            </div>
            <p className="text-xs text-[#6A6560] leading-relaxed font-light">
              Apenas 15 a 20 minutos de pista duplicada até a capital Maceió, permitindo residir no paraíso com acesso veloz aos serviços urbanos.
            </p>
          </div>
        </div>

        {/* Condos Tab Selector */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 border-b border-black/10 pb-4">
          {CONDOMINIUMS.map((condo) => (
            <button
              key={condo.id}
              onClick={() => handleSelectTab(condo.id)}
              className={`px-6 py-3 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-200 border ${
                selectedCondoId === condo.id
                  ? 'bg-[#1A1A1A] text-white border-black shadow-md'
                  : 'bg-white text-[#5A5550] border-black/10 hover:border-black/30 hover:bg-[#FAF8F5]'
              }`}
            >
              {condo.name}
            </button>
          ))}
        </div>

        {/* Selected Condo Showcase Card */}
        <div className="bg-white border border-black/10 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Visual Gallery with Carousel Controls */}
          <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-full flex flex-col justify-between bg-black">
            <div className="absolute inset-0">
              <img
                src={allImages[activeImageIndex % allImages.length]}
                alt={selectedCondo.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            
            {/* Top Badge & Image Counter */}
            <div className="relative z-10 p-6 flex items-center justify-between">
              <span className="bg-[#D4AF37] text-white text-[10px] tracking-[0.2em] uppercase font-bold px-3.5 py-1.5 shadow-sm">
                {selectedCondo.highlightBadge}
              </span>
              <span className="bg-black/60 text-white/90 text-[10px] px-3 py-1 tracking-widest uppercase backdrop-blur-sm border border-white/20">
                Foto {activeImageIndex + 1} de {allImages.length}
              </span>
            </div>

            {/* Middle Arrows for Carousel */}
            <div className="relative z-10 flex items-center justify-between px-4 my-auto">
              <button
                onClick={handlePrevImage}
                className="p-2.5 bg-black/60 hover:bg-[#D4AF37] hover:text-[#1A1A1A] text-white rounded-full transition-all border border-white/20"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextImage}
                className="p-2.5 bg-black/60 hover:bg-[#D4AF37] hover:text-[#1A1A1A] text-white rounded-full transition-all border border-white/20"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption & Dots */}
            <div className="relative z-10 p-6 text-white space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedCondo.location}</span>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-1.5 pt-1">
                {allImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeImageIndex === idx ? 'bg-[#D4AF37] w-6' : 'bg-white/40 hover:bg-white/70 w-2'
                    }`}
                    aria-label={`Ir para foto ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Details Info */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7326] font-semibold">
                  Perfil em Destaque
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#7A7570] font-medium">
                  CRECI-AL 5494
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] mb-2 font-normal">
                {selectedCondo.name}
              </h3>
              
              <p className="text-xs font-serif italic text-[#8C7326] mb-4">
                {selectedCondo.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#5A5550] leading-relaxed font-light mb-6">
                {selectedCondo.description}
              </p>

              {/* Paula's Expertise Note */}
              <div className="p-3.5 bg-[#FAF8F5] border-l-2 border-[#D4AF37] mb-6 text-xs text-[#4A4540] leading-relaxed">
                <strong className="text-[#1A1A1A] font-semibold block mb-0.5">Diferencial Paula Negrão:</strong>
                {selectedCondo.keyExpertise}
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {selectedCondo.specs.map((spec, i) => (
                  <div key={i} className="border border-black/5 p-2.5 bg-[#FDFCFB]">
                    <span className="text-[9px] uppercase tracking-wider text-[#8C827A] block font-medium">
                      {spec.label}
                    </span>
                    <span className="text-xs font-medium text-[#1A1A1A]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Amenities List */}
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-wider text-[#1A1A1A] font-semibold block mb-2.5">
                  Itens de Destaque & Conforto:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCondo.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-[#5A5550]">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-black/5">
              <button
                onClick={() => onSelectCondoFilter(selectedCondo.name.includes('Laguna') ? 'Laguna' : selectedCondo.name.includes('Granville') ? 'Granville' : 'Atlantis')}
                className="flex-1 bg-[#1A1A1A] text-white hover:bg-black py-3 px-4 text-[10px] tracking-[0.2em] uppercase font-semibold text-center transition-all flex items-center justify-center gap-2"
              >
                <span>Ver Portfólio Completo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleWhatsAppCondo(selectedCondo.name)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-4 text-[10px] tracking-[0.2em] uppercase font-bold text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

