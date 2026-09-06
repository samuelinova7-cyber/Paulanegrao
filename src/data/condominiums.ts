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
    name: 'Casa Exclusiva | Laguna (580m²)',
    subtitle: 'Residência inteligente de 580m² em Porteira Fechada com 5 suítes + 2 quartos',
    highlightBadge: 'Casa Exclusiva Porteira Fechada',
    description: 'O Condomínio Laguna é a grande referência de alto padrão do Litoral Sul alagoano. Destacamos com exclusividade esta residência de 580m² de área construída em modalidade porteira fechada (totalmente mobiliada e decorada), 100% voltada para o nascente com ventilação constante, 5 suítes (master com varanda privativa), mais 2 quartos extras, escritório, cozinha gourmet integrada com a sala, cozinha de apoio superior, varandão e piscina privativa.',
    keyExpertise: 'Paula Negrão apresenta com exclusividade esta mansão porteira fechada no Laguna, pronta para morar com sofisticação absoluta e acesso à infraestrutura náutica completa do condomínio.',
    location: 'Condomínio Laguna BRL, Praia do Francês / Marechal Deodoro - AL',
    distanceFrances: '5 min da Praia do Francês',
    distanceMaceio: '18 min de Maceió',
    amenities: [
      'Modalidade Porteira Fechada (Mobiliada e Equipada)',
      '5 Suítes completas (Master com varanda) + 2 quartos extras',
      'Escritório privativo + Cozinha de apoio no piso superior',
      'Varanda gourmet ampla e piscina privativa integradas',
      '100% voltada para o nascente com ventilação abundante',
      'Marina náutica, heliponto, tênis saibro e segurança 24h no condomínio'
    ],
    specs: [
      { label: 'Área Construída', value: '580 m²' },
      { label: 'Dormitórios', value: '7 Quartos (5 Suítes + 2 Quartos)' },
      { label: 'Posição Solar', value: '100% Nascente (Ventilação Solta)' },
      { label: 'Modalidade', value: 'Porteira Fechada (Só fazer as malas)' },
      { label: 'Investimento', value: 'R$ 5.300.000,00' },
      { label: 'Estrutura Extra', value: 'Escritório + Cozinha Apoio Superior' }
    ],
    heroImage: 'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618090/SnapInsta.to_758356754_18189077896386309_7709103473992109014_n_at2yt0.jpg',
    gallery: [
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618087/SnapInsta.to_756045877_18189077926386309_2661356699570487785_n_yju97t.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618085/SnapInsta.to_755948743_18189077944386309_7800324389826297667_n_i91mqe.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618083/SnapInsta.to_755878651_18189077917386309_2909251373878265836_n_re2vdb.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618080/SnapInsta.to_759547573_18189077908386309_829456923748175792_n_c9zdhp.jpg',
      'https://res.cloudinary.com/ddfacd0wf/image/upload/v1788618078/SnapInsta.to_758543643_18189077941386309_2658219926359549986_n_s6og4r.jpg'
    ]
  },
  {
    id: 'granville',
    name: 'Casa À Venda | Granville (450m²)',
    subtitle: 'Mansão de 450m² construída em terreno de 1.114m² com 4 suítes e piscina de 11,5m',
    highlightBadge: 'Destaque Exclusivo Granville',
    description: 'Casa à venda no Condomínio Granville com 450 m² de área construída implantada em um generoso terreno de 1.114 m². Composta por 4 suítes completas, home office dedicado, dependência completa de empregada, salas amplas integradas com múltiplos ambientes e uma deslumbrante piscina privativa de 11,5m x 3m. Excelente infraestrutura de condomínio fechado com segurança armada 24h, lazer e localização nobre na Praia do Francês. Aceita financiamento bancário.',
    keyExpertise: 'Paula Negrão destaca esta mansão como a escolha perfeita para quem busca terreno amplo de mais de 1.100m², privacidade, piscina semiolímpica e acabamento de alto padrão no Granville.',
    location: 'Condomínio Granville, Praia do Francês, Alagoas',
    distanceFrances: '3 min da Praia do Francês',
    distanceMaceio: '20 min de Maceió',
    amenities: [
      'Piscina privativa semiolímpica com 11,5m x 3m',
      'Terreno generoso de 1.114 m² com paisagismo exuberante',
      '4 Suítes completas com excelente iluminação e ventilação',
      'Home office reservado e silencioso para trabalho/estudos',
      'Dependência completa de empregada (DCE)',
      'Salas amplas com pé-direito imponente integradas à área externa',
      'Aceita financiamento bancário',
      'Segurança armada 24h com portaria e controle rigoroso'
    ],
    specs: [
      { label: 'Área Construída', value: '450 m²' },
      { label: 'Área do Terreno', value: '1.114 m²' },
      { label: 'Dormitórios', value: '4 Suítes completas' },
      { label: 'Piscina Privativa', value: '11,5m x 3m' },
      { label: 'Home Office & DCE', value: 'Escritório + Dependência Completa' },
      { label: 'Investimento', value: 'R$ 2.450.000,00 (Condomínio: R$ 986,37/mês)' }
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
    subtitle: 'Condomínio fechado exclusivo e arborizado na Praia do Francês',
    highlightBadge: 'Condomínio Fechado',
    description: 'O Condomínio Atlantis é um dos mais tradicionais e procurados condomínios fechados da Praia do Francês. Oferece ruas pavimentadas e tranquilas, portaria com controle de acesso rigoroso 24 horas, excelente integração com a natureza local e proximidade estratégica com o comércio, serviços e a praia.',
    keyExpertise: 'Paula Negrão atua com residências de alto padrão e lotes exclusivos no Condomínio Atlantis com atendimento personalizado e seguro.',
    location: 'Praia do Francês, Marechal Deodoro - AL',
    distanceFrances: 'A poucos minutos da orla da Praia do Francês',
    distanceMaceio: '20 min de Maceió',
    amenities: [
      'Portaria 24 horas com controle de acesso e monitoramento',
      'Ruas arborizadas, tranquilas e seguras para caminhada',
      'Excelente padrão construtivo das residências',
      'Área verde preservada e praça de convivência',
      'A poucos minutos de restaurantes e da praia'
    ],
    specs: [
      { label: 'Perfil dos Imóveis', value: 'Casas e Lotes Residenciais' },
      { label: 'Localização', value: 'Região Nobre da Praia do Francês' },
      { label: 'Segurança', value: 'Portaria 24h + Vigilância' },
      { label: 'Acesso', value: 'Fácil acesso à rodovia AL-101 Sul' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1000&auto=format&fit=crop'
    ]
  }
];
