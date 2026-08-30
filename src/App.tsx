import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CondominiumsSection } from './components/CondominiumsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { LifestyleSection } from './components/LifestyleSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { LegalModal } from './components/LegalModals';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Property } from './data/properties';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [condoFilter, setCondoFilter] = useState<string | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'sitemap' | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCondoHighlightClick = (condoId: string) => {
    const condoNameMap: Record<string, string> = {
      laguna: 'Laguna',
      granville: 'Granville',
      atlantis: 'Atlantis'
    };
    const targetName = condoNameMap[condoId] || 'Laguna';
    setCondoFilter(targetName);
    handleNavigate('portfolio');
  };

  const handleSelectCondoFilter = (condoName: string) => {
    setCondoFilter(condoName);
    handleNavigate('portfolio');
  };

  const handleClearCondoFilter = () => {
    setCondoFilter(null);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#D4AF37]/20 selection:text-[#1A1A1A] relative flex flex-col">
      {/* Top Fixed Header Navbar */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home / Hero Section */}
        <HeroSection 
          onExploreClick={() => handleNavigate('portfolio')}
          onCondoClick={handleCondoHighlightClick}
        />

        {/* 2. Sobre a Corretora (Quem Sou) */}
        <AboutSection />

        {/* 3. Áreas de Atuação e Condomínios de Destaque */}
        <CondominiumsSection 
          onSelectCondoFilter={handleSelectCondoFilter}
        />

        {/* 4. Portfólio / Imóveis em Destaque */}
        <PortfolioSection 
          onOpenPropertyModal={(prop) => setSelectedProperty(prop)}
          selectedCondoFilter={condoFilter}
          onClearCondoFilter={handleClearCondoFilter}
        />

        {/* 5. Seção de Estilo de Vida e Bem-Estar */}
        <LifestyleSection />

        {/* 6. Depoimentos / Prova Social */}
        <TestimonialsSection />

        {/* 7. Contato e Agendamento */}
        <ContactSection />
      </main>

      {/* Footer & Legal Information */}
      <Footer 
        onOpenLegal={(type) => setLegalModalType(type)}
        onNavigate={handleNavigate}
      />

      {/* Property Details Modal */}
      <PropertyModal 
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      {/* Legal Modals (Privacy, Terms, Sitemap) */}
      <LegalModal 
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        onNavigateSection={handleNavigate}
      />

      {/* Floating WhatsApp Concierge Button */}
      <FloatingWhatsApp />
    </div>
  );
}
