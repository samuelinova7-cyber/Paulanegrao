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
    id: 'prop-laguna-exemplar',
    title: 'Casa Exclusiva no Condomínio Laguna — Porteira Fechada',
    code: 'PN-LAG-01',
    category: 'casas',
    typeLabel: 'Casa de Luxo Porteira Fechada',
    purpose: 'Venda',
    condominium: 'Laguna',
    location: 'Condomínio Laguna, Praia do Francês / Alagoas',
    price: 'R$ 5.300.000',
    priceRaw: 5300000,
    area: 580,
    bedrooms: 7,
    suites: 5,
    bathrooms: 7,
    parking: 4,
    tag: 'Porteira Fechada • Laguna',
    description: 'Vou te apresentar com exclusividade uma casa linda, espaçosa e construída de uma forma inteligente, onde sobram espaços no local que você realmente usa, que é a varanda, piscina e área gourmet. Toda voltada pro nascente, a ventilação corre solta nas suas 5 suítes (sendo uma master com varanda) e mais 2 quartos extras e escritório. Cozinha integrada com a sala e dependência completa, e no piso superior uma cozinha extra de apoio. A casa será vendida na modalidade porteira fechada, então é só fazer suas malas e mudar! 580m² pra você usufruir e chamar de seu novo lar!',
    wellnessHighlights: [
      'Modalidade Porteira Fechada (Mobiliada e Equipada)',
      'Toda voltada para o nascente com excelente ventilação natural',
      '5 Suítes (sendo 1 master com varanda) + 2 quartos extras + escritório',
      'Varanda, piscina e área gourmet espetaculares e integradas'
    ],
    features: [
      '580 m² de área construída',
      '5 Suítes completas + 2 quartos extras',
      'Escritório privativo',
      'Cozinha integrada + Cozinha de apoio no piso superior',
      'Dependência completa',
      'Piscina e área gourmet privativa'
    ],
    images: [
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618090/SnapInsta.to_758356754_18189077896386309_7709103473992109014_n_at2yt0.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618087/SnapInsta.to_756045877_18189077926386309_2661356699570487785_n_yju97t.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618085/SnapInsta.to_755948743_18189077944386309_7800324389826297667_n_i91mqe.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618083/SnapInsta.to_755878651_18189077917386309_2909251373878265836_n_re2vdb.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618080/SnapInsta.to_759547573_18189077908386309_829456923748175792_n_c9zdhp.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618078/SnapInsta.to_758543643_18189077941386309_2658219926359549986_n_s6og4r.jpg'
    ],
    featured: true
  },
  {
    id: 'prop-granville-exemplar',
    title: 'Casa À Venda | Granville',
    code: 'PN-GRAN-01',
    category: 'casas',
    typeLabel: 'Casa de Luxo',
    purpose: 'Venda',
    condominium: 'Granville',
    location: 'Condomínio Granville, Praia do Francês / Alagoas',
    price: 'R$ 2.450.000',
    priceRaw: 2450000,
    condoFee: 'R$ 986,37/mês',
    area: 450,
    bedrooms: 4,
    suites: 4,
    bathrooms: 6,
    parking: 4,
    tag: 'Exclusividade Granville',
    description: 'Casa à venda no Condomínio Granville com 450 m² de área construída em terreno de 1.114 m². 4 suítes, home office, dependência completa, salas amplas e integradas, piscina com 11,5m x 3m e espaço ideal para viver e receber com conforto. Tudo isso em um dos condomínios mais desejados da região, com excelente estrutura, segurança, lazer e localização privilegiada. Aceita financiamento bancário.',
    wellnessHighlights: [
      'Piscina privativa com 11,5m x 3m',
      'Home office reservado e silencioso',
      'Terreno generoso de 1.114 m² com paisagismo',
      'Salas amplas e integradas para receber com conforto'
    ],
    features: [
      '4 Suítes completas',
      'Home office',
      'Dependência completa de empregada',
      'Aceita financiamento bancário'
    ],
    images: [
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618076/SnapInsta.to_788172183_18192296329386309_8859033092567156432_n_zrcjie.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618075/SnapInsta.to_788384239_18192296257386309_1726130656819443439_n_hafoky.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618074/SnapInsta.to_787507040_18192296305386309_5496827554038165257_n_yunyzb.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618074/SnapInsta.to_787022144_18192296353386309_5263918383242873688_n_qmy5ud.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618071/SnapInsta.to_788304592_18192296509386309_2749884179022671611_n_dyydxd.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618071/SnapInsta.to_788073399_18192296485386309_3764493367527717089_n_bgf212.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618071/SnapInsta.to_787698416_18192296494386309_4640847425558260497_n_pxbnyr.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618071/SnapInsta.to_787760856_18192296524386309_2791263078630320410_n_dqzeku.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618072/SnapInsta.to_787083084_18192296338386309_1436075907121256568_n_cxafs7.jpg'
    ],
    featured: true
  }
];
