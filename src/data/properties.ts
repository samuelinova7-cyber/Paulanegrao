export interface Property {
  id: string;
  title: string;
  code: string;
  category: 'casas' | 'terrenos' | 'mobiliados' | 'locacao' | 'venda';
  typeLabel: string;
  purpose: 'Venda' | 'Locação' | 'Venda ou Locação';
  condominium: 'Laguna' | 'Granville' | 'Atlantis' | 'Praia do Francês' | 'Litoral Sul / Maceió';
  location: string;
  price: string;
  priceRaw: number;
  condoFee?: string;
  area: number; // m²
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parking: number;
  tag: string;
  description: string;
  wellnessHighlights: string[];
  features: string[];
  images: string[];
  featured?: boolean;
}

export const PROPERTIES: Property[] = [
  {
    id: 'prop-laguna-01',
    title: 'Villa Paradiso — Residência Neoclássica Beira-Lagoa',
    code: 'PN-8821',
    category: 'casas',
    typeLabel: 'Casa de Luxo',
    purpose: 'Venda',
    condominium: 'Laguna',
    location: 'Condomínio Laguna BRL, Praia do Francês / Marechal Deodoro',
    price: 'R$ 4.850.000',
    priceRaw: 4850000,
    condoFee: 'R$ 1.150/mês',
    area: 520,
    bedrooms: 5,
    suites: 5,
    bathrooms: 7,
    parking: 4,
    tag: 'Exclusividade Laguna',
    description: 'Espetacular residência de alto padrão com projeto assinado, integrando living com pé-direito duplo de 6 metros à varanda gourmet e piscina com borda infinita debruçada sobre a Lagoa Manguaba. Acabamentos em mármore travertino, automação residencial completa e píer privativo para atracação de embarcações.',
    wellnessHighlights: [
      'Píer privativo para stand-up paddle e lancha',
      'Piscina ionizada com spa e hidromassagem aquecida',
      'Espaço zen integrado com paisagismo tropical',
      'Ambientes com ventilação cruzada natural e iluminação zenital'
    ],
    features: [
      '5 Suítes master com closet e varanda',
      'Espaço Gourmet com churrasqueira a gás e adega climatizada',
      'Energia solar fotovoltaica e aquecimento solar',
      'Dependência completa de serviço',
      'Garagem para 4 veículos cobertos'
    ],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: true
  },
  {
    id: 'prop-granville-02',
    title: 'Casa Bosque Tropical — Arquitetura Contemporânea',
    code: 'PN-7419',
    category: 'mobiliados',
    typeLabel: 'Imóvel Mobiliado',
    purpose: 'Venda',
    condominium: 'Granville',
    location: 'Condomínio Fechado Granville, Praia do Francês',
    price: 'R$ 2.950.000',
    priceRaw: 2950000,
    condoFee: 'R$ 780/mês',
    area: 380,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    parking: 3,
    tag: 'Totalmente Mobiliada',
    description: 'Imóvel 100% decorado e mobiliado com curadoria de alto padrão em madeira de demolição, linho e pedras naturais. Sala ampla em 3 ambientes integrada ao deck molhado e jardim vertical exuberante. Localizada na área mais nobre e silenciosa do condomínio.',
    wellnessHighlights: [
      'Jardim sensorial com cascata natural',
      'Sauna a vapor integrada à piscina com hidro',
      'Cozinha com conceito aberto e horta de ervas orgânicas',
      'Isolamento acústico nas suítes'
    ],
    features: [
      '4 Suítes completas (sendo 1 no térreo acessível)',
      'Mobiliário assinado por designers brasileiros',
      'Climatização inverter em todos os cômodos',
      'Piscina de alvenaria com iluminação em LED',
      'Sistema de irrigação automatizado'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: true
  },
  {
    id: 'prop-atlantis-03',
    title: 'Mansão Atlantis Breeze — Pé na Areia & Exclusividade',
    code: 'PN-9102',
    category: 'casas',
    typeLabel: 'Casa de Luxo',
    purpose: 'Venda ou Locação',
    condominium: 'Atlantis',
    location: 'Condomínio Atlantis, Orla Sul / Praia do Francês',
    price: 'R$ 6.200.000',
    priceRaw: 6200000,
    condoFee: 'R$ 1.400/mês',
    area: 640,
    bedrooms: 6,
    suites: 6,
    bathrooms: 8,
    parking: 6,
    tag: 'Frente Mar / Alto Luxo',
    description: 'A joia do Litoral Sul de Alagoas. Uma mansão com vista panorâmica para as piscinas naturais do Francês e mar aberto. Design biofílico com uso intensivo de ripados de cumaru, vidro structural glazing e ventilação perene da brisa alagoana.',
    wellnessHighlights: [
      'Acesso direto privativo à faixa de areia do Francês',
      'Rooftop com lounge de meditação e vista 360° do pôr do sol',
      'Piscina semiolímpica com raia de 20 metros',
      'Academia privativa climatizada com vista mar'
    ],
    features: [
      '6 Suítes com closet privativo e terraço panorâmico',
      'Elevador panorâmico silencioso',
      'Adega para 400 rótulos',
      'Home Cinema com projeção 4K e som surround',
      'Guarita de apoio e segurança armada 24h no condomínio'
    ],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: true
  },
  {
    id: 'prop-terreno-laguna-04',
    title: 'Lote Exclusivo Vista Laguna — Fase Náutica',
    code: 'PN-3312',
    category: 'terrenos',
    typeLabel: 'Terreno em Condomínio Fechado',
    purpose: 'Venda',
    condominium: 'Laguna',
    location: 'Quadra Náutica, Condomínio Laguna BRL, Marechal Deodoro',
    price: 'R$ 980.000',
    priceRaw: 980000,
    condoFee: 'R$ 650/mês',
    area: 720,
    bedrooms: 0,
    suites: 0,
    bathrooms: 0,
    parking: 0,
    tag: 'Posição Nascente / Frente Lagoa',
    description: 'Terreno 100% plano com 720m² de área privativa situado na quadra nobre do Condomínio Laguna. Posição nascente total com ventilação privilegiada e acesso direto à marina e ao heliponto do complexo. Ideal para projeto arquitetônico arrojado.',
    wellnessHighlights: [
      'Tranquilidade absoluta cercada pela restinga preservada',
      'Acesso direto às pistas de cooper arborizadas da marina',
      'Visual deslumbrante do espelho d’água da Lagoa Manguaba'
    ],
    features: [
      'Topografia totalmente plana e pronta para construir',
      'Escritura pública e registro 100% regularizados',
      'Projeto arquitetônico conceitual pré-aprovado opcional',
      'Rede subterrânea de energia e saneamento ecológico'
    ],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: false
  },
  {
    id: 'prop-frances-locacao-05',
    title: 'Casa Coral Mar — Refúgio de Bem-Estar e Veraneio',
    code: 'PN-5540',
    category: 'locacao',
    typeLabel: 'Locação de Temporada / Venda',
    purpose: 'Locação',
    condominium: 'Praia do Francês',
    location: 'Área Nobre Residencial, Praia do Francês',
    price: 'R$ 2.200/diária',
    priceRaw: 2200,
    condoFee: 'Incluso',
    area: 320,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    parking: 3,
    tag: 'Disponível para Temporada',
    description: 'Imóvel encantador a apenas 250 metros da praia do Francês. Perfeito para famílias e grupos que desejam desfrutar de dias inesquecíveis com conforto 5 estrelas, piscina com prainha, quiosque de churrasco e redário rodeado de coqueiros.',
    wellnessHighlights: [
      'Redário sombreado sob coqueiral nativo',
      'Piscina privativa com iluminação relaxante e hidromassagem',
      'Caminhada matinal rápida até as piscinas naturais',
      'Equipamentos de praia e stand-up paddle inclusos'
    ],
    features: [
      'Wi-Fi Starlink de altíssima velocidade',
      'Roupas de cama e banho em algodão egípcio',
      'Cozinha completa com eletros gourmets',
      'Ar-condicionado em todas as suítes',
      'Serviço opcional de cozinheira e arrumadeira'
    ],
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: false
  },
  {
    id: 'prop-terreno-granville-06',
    title: 'Lote de Esquina Bosque — Condomínio Granville',
    code: 'PN-4418',
    category: 'terrenos',
    typeLabel: 'Terreno em Condomínio Fechado',
    purpose: 'Venda',
    condominium: 'Granville',
    location: 'Alameda das Palmeiras, Condomínio Granville',
    price: 'R$ 690.000',
    priceRaw: 690000,
    condoFee: 'R$ 550/mês',
    area: 540,
    bedrooms: 0,
    suites: 0,
    bathrooms: 0,
    parking: 0,
    tag: 'Esquina / Posição Solar Ideal',
    description: 'Excelente lote de esquina com 540m² em um dos condomínios mais consolidados e elegantes da Praia do Francês. Arborização madura, vizinhança de alto padrão já consolidada e proximidade da portaria e clube social.',
    wellnessHighlights: [
      'Rodeado pela reserva ecológica do condomínio',
      'Quadras de tênis de saibro e beach tennis a 100m',
      'Ambiente estritamente residencial e familiar'
    ],
    features: [
      'Lote murado lateralmente por vegetação ornamental',
      'Documentação 100% desembaraçada para financiamento',
      'Segurança e ronda motorizada 24h',
      'Taxa condominial atrativa'
    ],
    images: [
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: false
  },
  {
    id: 'prop-maceio-litoral-07',
    title: 'Casa Al Mare — Reserva Privativa Litoral Sul',
    code: 'PN-6019',
    category: 'venda',
    typeLabel: 'Casa de Luxo',
    purpose: 'Venda',
    condominium: 'Litoral Sul / Maceió',
    location: 'Enseada Sul, Litoral Alagoano (Próx. Maceió & Francês)',
    price: 'R$ 3.600.000',
    priceRaw: 3600000,
    condoFee: 'R$ 920/mês',
    area: 450,
    bedrooms: 5,
    suites: 5,
    bathrooms: 6,
    parking: 4,
    tag: 'Oportunidade Única',
    description: 'Arquitetura que celebra a claridade tropical com amplas esquadrias pretas minimalistas, ripado em alumínio amadeirado e piscina com borda infinita voltada para a brisa marítima. A apenas 15 minutos do centro de Maceió e 8 minutos do Francês.',
    wellnessHighlights: [
      'Solarium privativo com vista panorâmica da costa',
      'Pátio interno com espelho d’água e jardim de samambaias',
      'Espaço para academia e ioga'
    ],
    features: [
      '5 Suítes, sendo 1 Master com banheira de imersão',
      'Living integrado à varanda de 80m²',
      'Poço artesiano de alta vazão e água mineral',
      'Garagem para barcos de até 26 pés'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: true
  }
];
