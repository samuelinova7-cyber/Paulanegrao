export interface LifestylePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
  tag: string;
}

export const LIFESTYLE_PILLARS: LifestylePillar[] = [
  {
    id: 'natureza',
    title: 'Energia Revigorante do Mar & Lagoa',
    subtitle: 'Conexão profunda com as águas cristalinas de Alagoas',
    description: 'Viver no Litoral Sul é usufruir diariamente da calma dos recifes de corais, do mar morno em tons de turquesa e do espelho d’água da Lagoa Manguaba. Uma rotina onde o amanhecer começa com uma remada ou caminhada na areia fina.',
    iconName: 'Waves',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
    tag: 'Saúde & Conexão'
  },
  {
    id: 'seguranca',
    title: 'Privacidade Absoluta em Condomínios Fechados',
    subtitle: 'A tranquilidade de deixar seus filhos livres',
    description: 'Os condomínios de alto padrão da região combinam portarias blindadas, controle biométrico, vigilância armada 24h e rondas náuticas. Um ecossistema seguro onde a vida ao ar livre floresce sem preocupações.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    tag: 'Paz & Proteção'
  },
  {
    id: 'nautico',
    title: 'Estilo de Vida Náutico & Esportes ao Ar Livre',
    subtitle: 'Marina, stand-up, kitesurf e beach tennis',
    description: 'Para quem ama a vida na água, ter sua embarcação ancorada a passos de casa na marina do Laguna ou desfrutar dos ventos constantes para esportes de vela transforma os fins de semana em experiências inesquecíveis.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
    tag: 'Esporte & Lazer'
  },
  {
    id: 'gastronomia',
    title: 'Gastronomia Nobre e Cultura Alagoana',
    subtitle: 'Polo gastronômico de Marechal e Maceió',
    description: 'A poucos minutos do polo de restaurantes de frutos do mar da Massagueira e da alta gastronomia da capital Maceió. Uma harmonia perfeita entre a autenticidade dos sabores locais e o requinte da culinária internacional.',
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    tag: 'Cultura & Sabor'
  }
];

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  type: string;
  content: string;
  rating: number;
  highlight: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Dr. Roberto & Mariana Siqueira',
    location: 'Proprietários no Condomínio Laguna',
    type: 'Aquisição de Mansão Beira-Lagoa',
    content: 'A consultoria da Paula Negrão foi simplesmente impecável. Ela entendeu exatamente o nosso desejo de ter um refúgio com píer para nosso barco sem abrir mão da segurança para nossos netos. O atendimento discreto, pontual e altamente técnico fez toda a diferença na negociação.',
    rating: 5,
    highlight: 'Discrição, precisão e profundo conhecimento do Laguna',
    date: 'Dezembro de 2024'
  },
  {
    id: 't-2',
    clientName: 'Carlos Eduardo Fontes',
    location: 'Investidor e Proprietário no Granville',
    type: 'Compra de Lote & Assessoria de Projeto',
    content: 'Moro em São Paulo e buscava um terreno para construir nossa casa de férias em Alagoas. A Paula me apresentou as melhores oportunidades do Granville com vídeos detalhados de insolação, topografia e suporte documental junto ao cartório. Profissional de padrão internacional!',
    rating: 5,
    highlight: 'Assessoria completa para quem compra de fora do estado',
    date: 'Fevereiro de 2025'
  },
  {
    id: 't-3',
    clientName: 'Helena Montenegro',
    location: 'Residente no Condomínio Atlantis',
    type: 'Casa de Alto Padrão Pé na Areia',
    content: 'Encontrar uma casa pé na areia com toda a segurança que minha família exigia parecia um desafio. Paula selecionou apenas opções cirúrgicas e encontrou o imóvel dos nossos sonhos. Hoje nosso bem-estar mudou completamente acordando em frente ao mar do Francês.',
    rating: 5,
    highlight: 'Acesso às opções mais exclusivas e confidenciais do litoral',
    date: 'Novembro de 2024'
  }
];
