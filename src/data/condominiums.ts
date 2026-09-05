export interface Condominium {
  id: string;
  name: string;
  subtitle: string;
  highlightBadge: string;
  description: string;
  keyExpertise: string;
  location: string;
  distanceFrances: string;
  distanceMaceio: string;
  amenities: string[];
  specs: {
    label: string;
    value: string;
  }[];
  heroImage: string;
  gallery: string[];
}

export const CONDOMINIUMS: Condominium[] = [
  {
    id: 'laguna',
    name: 'Condomínio Laguna BRL',
    subtitle: 'O maior e mais sofisticado complexo náutico e residencial fechado de Alagoas',
    highlightBadge: 'Referência & Alta Expertise',
    description: 'O Condomínio Laguna é a grande referência de alto padrão do Litoral Sul alagoano. Situado às margens da Lagoa Manguaba e a poucos minutos da Praia do Francês, oferece aos seus moradores uma marina exclusiva com vaga molhada, heliponto homologado, complexo esportivo internacional e segurança armada rigorosa 24 horas.',
    keyExpertise: 'Paula Negrão possui histórico consolidado de negociações no Laguna, com acesso direto aos melhores lotes na fase náutica e mansões de alto luxo com píer privativo.',
    location: 'Marechal Deodoro / Praia do Francês, Alagoas',
    distanceFrances: '5 min da Praia do Francês',
    distanceMaceio: '18 min de Maceió',
    amenities: [
      'Marina privativa com rampa náutica e píer',
      'Heliponto privativo com operação diurna/noturna',
      'Complexo de tênis (saibro) e beach tennis',
      'Piscina club resort com borda infinita sobre a lagoa',
      'Academia climatizada de última geração com instrutores',
      'Segurança armada 24h, circuito CFTV e controle biométrico'
    ],
    specs: [
      { label: 'Perfil dos Lotes', value: '500m² a 1.500m²' },
      { label: 'Estilo Arquitetônico', value: 'Contemporâneo Tropical & Neoclássico' },
      { label: 'Segurança', value: 'Portaria Blindada + Ronda Náutica e Terrestre 24h' },
      { label: 'Atividades', value: 'Stand-up Paddle, Wakeboard, Jetski, Vela, Tênis' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 'granville',
    name: 'Casa À Venda | Granville',
    subtitle: 'Exclusividade e sofisticação em um dos condomínios mais desejados da região',
    highlightBadge: 'Destaque Exclusivo Granville',
    description: 'Casa à venda no Condomínio Granville com 450 m² de área construída em terreno de 1.114 m². 4 suítes, home office, dependência completa, salas amplas e integradas, piscina com 11,5m x 3m e espaço ideal para viver e receber com conforto. Tudo isso em um condomínio com excelente estrutura, segurança, lazer e localização privilegiada.',
    keyExpertise: 'Paula Negrão destaca esta mansão como uma das melhores oportunidades para quem valoriza espaço, exclusividade e a experiência de morar bem no Granville.',
    location: 'Condomínio Granville, Praia do Francês, Alagoas',
    distanceFrances: '3 min da Praia do Francês',
    distanceMaceio: '20 min de Maceió',
    amenities: [
      'Piscina privativa com 11,5m x 3m',
      'Home office reservado e silencioso',
      'Dependência completa de empregada',
      'Salas amplas e integradas em múltiplos ambientes',
      'Terreno generoso de 1.114 m² com paisagismo',
      'Segurança armada 24h e portaria blindada'
    ],
    specs: [
      { label: 'Área Construída', value: '450 m²' },
      { label: 'Terreno', value: '1.114 m²' },
      { label: 'Suítes', value: '4 Suítes completas' },
      { label: 'Investimento', value: 'R$ 2.450.000,00 (Condomínio: R$ 986,37)' }
    ],
    heroImage: 'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618076/SnapInsta.to_788172183_18192296329386309_8859033092567156432_n_zrcjie.jpg',
    gallery: [
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618075/SnapInsta.to_788384239_18192296257386309_1726130656819443439_n_hafoky.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618074/SnapInsta.to_787507040_18192296305386309_5496827554038165257_n_yunyzb.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618074/SnapInsta.to_787022144_18192296353386309_5263918383242873688_n_qmy5ud.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618071/SnapInsta.to_788304592_18192296509386309_2749884179022671611_n_dyydxd.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618071/SnapInsta.to_788073399_18192296485386309_3764493367527717089_n_bgf212.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618071/SnapInsta.to_787698416_18192296494386309_4640847425558260497_n_pxbnyr.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618071/SnapInsta.to_787760856_18192296524386309_2791263078630320410_n_dqzeku.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618072/SnapInsta.to_787083084_18192296338386309_1436075907121256568_n_cxafs7.jpg'
    ]
  },
  {
    id: 'atlantis',
    name: 'Condomínio Atlantis',
    subtitle: 'Exclusividade beira-mar com o privilégio da brisa eterna do oceano',
    highlightBadge: 'Pé na Areia & Alto Luxo',
    description: 'Projetado para quem não abre mão de acordar com o som das ondas e a vista para o mar azul-turquesa inconfundível de Alagoas. O Atlantis une a máxima privacidade de um condomínio fechado com acesso direto às areias douradas e piscinas de coral do Francês.',
    keyExpertise: 'Portfólio confidencial de mansões frente mar e oportunidades exclusivas de investimento com altíssima valorização patrimonial.',
    location: 'Orla Nobre, Praia do Francês, Alagoas',
    distanceFrances: 'Pé na areia (0 min da praia)',
    distanceMaceio: '22 min de Maceió',
    amenities: [
      'Acesso privativo e seguro direto à praia',
      'Deck lounge beira-mar com serviços de praia exclusivos',
      'Piscina infinita com vista panorâmica da costa',
      'Spa relaxante com salas de massagem e sauna',
      'Monitoramento 24h de ponta com equipe especializada'
    ],
    specs: [
      { label: 'Perfil dos Imóveis', value: 'Mansões de 400m² a 900m²' },
      { label: 'Estilo Arquitetônico', value: 'Modernismo Tropical com grandes panos de vidro' },
      { label: 'Segurança', value: 'Vigilância 24h na praia e vias internas' },
      { label: 'Localização', value: 'Trecho mais preservado e nobre da costa' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1000&auto=format&fit=crop'
    ]
  }
];
