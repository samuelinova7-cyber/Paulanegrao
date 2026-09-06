import React, { useState } from 'react';
import { Property } from '../data/properties';
import { 
  X, 
  MapPin, 
  Maximize2, 
  BedDouble, 
  Bath, 
  Car, 
  Sparkles, 
  Check, 
  MessageCircle, 
  Phone, 
  Share2, 
  Heart,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  if (!property) return null;

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá Paula Negrão! Gostaria de receber mais informações e agendar uma visita para o imóvel ${property.title} (Código: ${property.code}) no valor de ${property.price}.`
  );
  const whatsappUrl = `https://wa.me/5582999009222?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="bg-[#FDFCFB] w-full max-w-5xl max-h-[92vh] overflow-y-auto border border-black/10 shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-black hover:text-white p-2.5 text-[#1A1A1A] transition-colors shadow-md border border-black/10 focus:outline-none"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Carousel Header */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#1A1A1A] overflow-hidden">
          <img
            src={property.images[currentImgIndex]}
            alt={`${property.title} - Foto ${currentImgIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          {/* Tag & Code Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-[#D4AF37] text-white text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 shadow-md">
              {property.tag}
            </span>
            <span className="bg-[#1A1A1A]/90 text-white text-[10px] tracking-widest px-3 py-1 font-mono">
              CÓD: {property.code}
            </span>
          </div>

          {/* Navigation Arrows */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image Dots & Count */}
          <div className="absolute bottom-3 right-4 bg-black/70 text-white text-[10px] tracking-widest px-2.5 py-1">
            {currentImgIndex + 1} / {property.images.length}
          </div>
        </div>

        {/* Thumbnails Row */}
        {property.images.length > 1 && (
          <div className="flex gap-2 p-3 bg-[#F5F2ED] border-b border-black/5 overflow-x-auto">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImgIndex(idx)}
                className={`w-20 h-14 shrink-0 overflow-hidden border-2 transition-all ${
                  currentImgIndex === idx ? 'border-[#D4AF37] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-black/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#8C7326] font-semibold uppercase tracking-[0.2em] mb-1.5">
                <span>{property.typeLabel}</span>
                <span>•</span>
                <span>{property.condominium}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-normal mb-2">
                {property.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-[#6A6560]">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Price & Purpose Card */}
            <div className="bg-[#FAF8F5] border border-black/10 p-4 sm:text-right shrink-0 min-w-[220px]">
              <span className="text-[10px] uppercase tracking-widest text-[#7A7570] block font-medium">
                {property.purpose === 'Locação' ? 'Valor da Locação' : 'Valor de Investimento'}
              </span>
              <span className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-medium block">
                {property.price}
              </span>
              {property.condoFee && (
                <span className="text-[11px] text-[#8C827A] block mt-0.5">
                  Taxa Condominial: {property.condoFee}
                </span>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F5F2ED] p-4 border border-black/5">
            <div className="flex items-center gap-3">
              <Maximize2 className="w-5 h-5 text-[#D4AF37]" />
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#7A7570] block">Área Total</span>
                <span className="text-xs font-semibold text-[#1A1A1A]">{property.area} m²</span>
              </div>
            </div>

            {property.bedrooms > 0 && (
              <div className="flex items-center gap-3">
                <BedDouble className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#7A7570] block">Dormitórios</span>
                  <span className="text-xs font-semibold text-[#1A1A1A]">{property.bedrooms} Quartos ({property.suites} Suítes)</span>
                </div>
              </div>
            )}

            {property.bathrooms > 0 && (
              <div className="flex items-center gap-3">
                <Bath className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#7A7570] block">Banheiros</span>
                  <span className="text-xs font-semibold text-[#1A1A1A]">{property.bathrooms} Banheiros</span>
                </div>
              </div>
            )}

            {property.parking > 0 && (
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#7A7570] block">Garagem</span>
                  <span className="text-xs font-semibold text-[#1A1A1A]">{property.parking} Vagas</span>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A] font-semibold mb-3">
              Descrição & Arquitetura
            </h3>
            <p className="text-sm text-[#5A5550] leading-relaxed font-light">
              {property.description}
            </p>
          </div>

          {/* Wellness Differentials */}
          <div className="p-5 bg-[#FAF8F5] border-l-2 border-[#D4AF37]">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A] font-semibold">
                Diferenciais de Bem-Estar & Estilo de Vida
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.wellnessHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#4A4540]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A] font-semibold mb-3">
              Características Principais
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#5A5550]">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA & Paula's Contact Bar */}
          <div className="bg-[#1A1A1A] text-white p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block font-semibold">
                Consultora Responsável
              </span>
              <h4 className="text-lg font-serif">Paula Negrão</h4>
              <span className="text-xs text-white/70">CRECI-AL 5494 • Atendimento Direto e Exclusivo</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleShare}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 text-[10px] tracking-widest uppercase font-semibold transition-colors flex items-center justify-center gap-2 border border-white/15"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copiado!' : 'Compartilhar'}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/40 animate-pulse hover:animate-none"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Falar no WhatsApp (+55 82 99900-9222)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
