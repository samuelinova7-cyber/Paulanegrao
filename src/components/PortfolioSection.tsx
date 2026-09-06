import React, { useState } from 'react';
import { Property, PROPERTIES } from '../data/properties';
import { 
  Maximize2, 
  BedDouble, 
  Bath, 
  MapPin, 
  Sparkles, 
  ArrowUpRight, 
  MessageCircle,
  Search,
  Filter,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

interface PortfolioSectionProps {
  onOpenPropertyModal: (property: Property) => void;
  selectedCondoFilter?: string | null;
  onClearCondoFilter?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  onOpenPropertyModal,
  selectedCondoFilter,
  onClearCondoFilter
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todos os Imóveis' },
    { id: 'casas', label: 'Casas de Luxo' },
    { id: 'terrenos', label: 'Terrenos em Condomínio' },
    { id: 'mobiliados', label: 'Imóveis Mobiliados' },
    { id: 'locacao', label: 'Locação de Temporada' },
    { id: 'venda', label: 'Venda' },
  ];

  const filteredProperties = PROPERTIES.filter((prop) => {
    // Category match
    if (activeCategory === 'casas' && prop.category !== 'casas') return false;
    if (activeCategory === 'terrenos' && prop.category !== 'terrenos') return false;
    if (activeCategory === 'mobiliados' && prop.category !== 'mobiliados') return false;
    if (activeCategory === 'locacao' && prop.purpose !== 'Locação' && prop.purpose !== 'Venda ou Locação' && prop.category !== 'locacao') return false;
    if (activeCategory === 'venda' && prop.purpose === 'Locação') return false;

    // Condominium external filter match
    if (selectedCondoFilter) {
      if (!prop.condominium.toLowerCase().includes(selectedCondoFilter.toLowerCase())) {
        return false;
      }
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = prop.title.toLowerCase().includes(q);
      const matchCode = prop.code.toLowerCase().includes(q);
      const matchLoc = prop.location.toLowerCase().includes(q);
      const matchCondo = prop.condominium.toLowerCase().includes(q);
      if (!matchTitle && !matchCode && !matchLoc && !matchCondo) return false;
    }

    return true;
  });

  const handleWhatsAppQuick = (prop: Property, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(`Olá Paula Negrão, vi o imóvel "${prop.title}" (${prop.code}) no seu site e gostaria de mais detalhes.`);
    window.open(`https://wa.me/5582999009222?text=${text}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FDFCFB] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89330] font-bold block mb-3">
              Curadoria de Alto Padrão
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight mb-3">
              Portfólio & Imóveis em Destaque
            </h2>
            <p className="text-sm sm:text-base text-[#6A6560] font-light">
              Propriedades exclusivas com projetos arquitetônicos refinados, proximidade do mar e ambientes projetados para o seu bem-estar.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Buscar por código ou condomínio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-3 pl-10 text-xs text-[#1A1A1A] placeholder:text-[#8C827A] focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <Search className="w-4 h-4 text-[#8C827A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#7A7570] hover:text-[#1A1A1A]"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Condominium Active Filter Alert */}
        {selectedCondoFilter && (
          <div className="mb-6 bg-[#F5F2ED] border-l-2 border-[#D4AF37] p-3.5 flex items-center justify-between">
            <div className="text-xs text-[#1A1A1A]">
              Filtrando imóveis no condomínio: <strong className="font-semibold text-[#8C7326]">{selectedCondoFilter}</strong>
            </div>
            {onClearCondoFilter && (
              <button
                onClick={onClearCondoFilter}
                className="text-[10px] uppercase tracking-wider text-[#1A1A1A] hover:text-[#B89330] underline font-semibold"
              >
                Mostrar todos os condomínios
              </button>
            )}
          </div>
        )}

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-black/5 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase font-semibold whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#1A1A1A] text-white border-black shadow-sm'
                  : 'bg-white text-[#5A5550] border-black/10 hover:border-black/30 hover:bg-[#FAF8F5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16 bg-[#F5F2ED] border border-black/5 p-8">
            <p className="text-base font-serif text-[#1A1A1A] mb-2">Nenhum imóvel encontrado nesta categoria.</p>
            <p className="text-xs text-[#6A6560] mb-6">Temos outras oportunidades em carteira confidencial que não estão publicadas no site.</p>
            <button
              onClick={() => { setActiveCategory('todos'); setSearchQuery(''); if (onClearCondoFilter) onClearCondoFilter(); }}
              className="bg-[#1A1A1A] text-white text-[10px] tracking-widest uppercase px-6 py-3 font-semibold"
            >
              Ver todos os imóveis
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((prop) => (
                <div
                  key={prop.id}
                  onClick={() => onOpenPropertyModal(prop)}
                  className="group bg-white border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                      <span className="bg-[#D4AF37] text-white text-[9px] tracking-[0.2em] uppercase font-bold px-2.5 py-1 shadow-sm">
                        {prop.tag}
                      </span>
                      <span className="bg-[#1A1A1A]/80 backdrop-blur-sm text-white text-[9px] tracking-wider px-2 py-1 font-mono">
                        {prop.code}
                      </span>
                    </div>

                    {/* Condominium Chip Bottom */}
                    <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-white text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="drop-shadow-sm">{prop.condominium}</span>
                    </div>
                  </div>

                  {/* Content Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category / Type */}
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#8C7326] font-semibold mb-1">
                        {prop.typeLabel}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#8C7326] transition-colors leading-snug mb-2.5">
                        {prop.title}
                      </h3>

                      {/* Wellness highlight feature snippet */}
                      <div className="flex items-center gap-1.5 text-[11px] text-[#5A5550] mb-4 bg-[#FAF8F5] p-2 border-l border-[#D4AF37]">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="truncate">{prop.wellnessHighlights[0]}</span>
                      </div>

                      {/* Specs Row */}
                      <div className="flex items-center gap-4 text-xs text-[#6A6560] pt-3 border-t border-black/5 mb-5">
                        <div className="flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[#8C827A]" />
                          <span>{prop.area} m²</span>
                        </div>

                        {prop.bedrooms > 0 && (
                          <div className="flex items-center gap-1">
                            <BedDouble className="w-3.5 h-3.5 text-[#8C827A]" />
                            <span>{prop.bedrooms} Q ({prop.suites} S)</span>
                          </div>
                        )}

                        {prop.parking > 0 && (
                          <div className="flex items-center gap-1">
                            <Bath className="w-3.5 h-3.5 text-[#8C827A]" />
                            <span>{prop.bathrooms} B</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price & Action Row */}
                    <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#7A7570] block">
                          {prop.purpose === 'Locação' ? 'Diária' : 'Valor'}
                        </span>
                        <span className="text-lg font-serif font-semibold text-[#1A1A1A]">
                          {prop.price}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => handleWhatsAppQuick(prop, e)}
                          className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
                          title="Conversar no WhatsApp sobre este imóvel"
                          aria-label="WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </button>

                        <span className="p-2.5 bg-[#1A1A1A] text-white group-hover:bg-black transition-colors flex items-center justify-center">
                          <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Infinite Rolling Photo Gallery Showcase */}
            <div className="bg-[#FAF8F5] border border-black/10 py-8 overflow-hidden">
              <div className="px-6 sm:px-12 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-1">
                    Galeria Imersiva em Rolagem Contínua
                  </span>
                  <h3 className="text-2xl font-serif text-[#1A1A1A]">
                    Explore os Detalhes e Ambientes das Nossas Exclusividades
                  </h3>
                </div>
                <span className="text-xs text-[#7A7570] italic">
                  Role horizontalmente ou clique para ampliar qualquer foto
                </span>
              </div>

              {/* Infinite Marquee Track of Photos */}
              <div className="relative w-full overflow-hidden flex whitespace-nowrap py-4">
                <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
                  {filteredProperties.flatMap(p => p.images).concat(filteredProperties.flatMap(p => p.images)).map((imgUrl, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        // Find property containing this image and open modal
                        const found = filteredProperties.find(p => p.images.includes(imgUrl));
                        if (found) onOpenPropertyModal(found);
                      }}
                      className="w-72 sm:w-80 h-48 sm:h-56 shrink-0 relative overflow-hidden group cursor-pointer border border-black/10 bg-black shadow-md"
                    >
                      <img
                        src={imgUrl}
                        alt="Ambiente Exclusivo"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-0.5">
                          Paula Negrão Imóveis
                        </span>
                        <span className="text-xs font-serif truncate block">
                          Clique para ver detalhes do imóvel
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner for Custom Property Inquiry */}
        <div className="mt-16 bg-[#1A1A1A] text-white p-8 sm:p-12 border border-black flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-2">
              Carteira Confidencial / Off-Market
            </span>
            <h3 className="text-xl sm:text-2xl font-serif mb-2">
              Procura um imóvel ou lote com características específicas?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Dispomos de propriedades cujos proprietários optaram pela não divulgação pública. Fale diretamente com Paula Negrão para atendimento sob sigilo.
            </p>
          </div>

          <a
            href="https://wa.me/5582999009222?text=Ol%C3%A1%20Paula%20Negr%C3%A3o%2C%20procuro%20um%20im%C3%B3vel%20espec%C3%ADfico%20em%20Macei%C3%B3%2C%20no%20Condom%C3%ADnio%20Laguna%20ou%20Litoral%20Sul%20e%20gostaria%20de%20consultar%20sua%20carteira%20privada."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-bold transition-all whitespace-nowrap shadow-lg hover:shadow-emerald-500/40 animate-pulse hover:animate-none flex items-center gap-2.5"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Consultar Carteira Privada (+55 82 99900-9222)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
