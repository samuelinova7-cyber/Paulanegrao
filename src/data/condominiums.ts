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
    name: 'Condomínio Granville',
    subtitle: 'Charme, sofisticação e exuberante bosque tropical a minutos do mar',
    highlightBadge: 'Elegância & Natureza',
    description: 'Um condomínio boutique caracterizado por sua atmosfera serena, alamedas arborizadas com espécies nativas da Mata Atlântica e casas com projetos de integração total entre interior e paisagismo. Perfeito para famílias que valorizam tranquilidade, privacidade e bem-estar.',
    keyExpertise: 'Assessoria completa na aquisição de terrenos com topografia favorável e casas térreas e duplex de alto padrão construtivo.',
    location: 'Praia do Francês, Alagoas',
    distanceFrances: '3 min da Praia do Francês',
    distanceMaceio: '20 min de Maceió',
    amenities: [
      'Bosque preservado com trilhas de caminhada ecológicas',
      'Clubhouse social com espaço gourmet e lounge',
      'Quadra poliesportiva e campo society com grama natural',
      'Playground lúdico integrado à natureza',
      'Portaria 24 horas com clausura de segurança e monitoramento perimetral'
    ],
    specs: [
      { label: 'Perfil dos Lotes', value: '450m² a 800m²' },
      { label: 'Estilo Arquitetônico', value: 'Biofílico, Rústico Chic e Contemporâneo' },
      { label: 'Segurança', value: 'Portaria 24h + Cerca Elétrica & Câmeras Térmicas' },
      { label: 'Ambiente', value: 'Estritamente residencial de baixa densidade' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1000&auto=format&fit=crop'
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
