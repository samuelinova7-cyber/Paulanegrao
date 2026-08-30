import React from 'react';
import { X, Shield, FileText, Map, Award } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'sitemap' | null;
  onClose: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, onNavigateSection }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-[#FDFCFB] w-full max-w-3xl max-h-[85vh] overflow-y-auto border border-black/10 shadow-2xl p-6 sm:p-10 relative text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white p-2 text-[#1A1A1A] hover:bg-black hover:text-white transition-colors border border-black/10"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Privacy Policy Content */}
        {type === 'privacy' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-black/10 pb-4">
              <Shield className="w-6 h-6 text-[#D4AF37]" />
              <div>
                <h3 className="font-serif text-2xl">Política de Privacidade</h3>
                <span className="text-[10px] uppercase tracking-wider text-[#7A7570]">Paula Negrão — CRECI-AL 5494</span>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[#5A5550] leading-relaxed space-y-4 font-light">
              <p>
                Esta Política de Privacidade descreve como <strong>Paula Negrão Corretora de Imóveis (CRECI-AL 5494)</strong> coleta, utiliza e protege os dados fornecidos voluntariamente por clientes e usuários em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
              
              <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] pt-2">1. Coleta e Finalidade dos Dados</h4>
              <p>
                Os dados cadastrados através de nossos formulários de contato (nome, telefone/WhatsApp, e-mail e preferências de imóveis) são utilizados estritamente para o envio de propostas comerciais, agendamento de visitas a imóveis e prestação de consultoria imobiliária personalizada.
              </p>

              <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] pt-2">2. Sigilo e Compartilhamento</h4>
              <p>
                Garantimos o sigilo absoluto de seus dados. Nenhuma informação pessoal é vendida, alugada ou cedida a terceiros para fins de marketing em massa. Informações somente são compartilhadas com cartórios e instituições financeiras mediante prévia e expressa autorização do cliente durante a formalização de transações imobiliárias.
              </p>

              <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] pt-2">3. Seus Direitos</h4>
              <p>
                Você poderá solicitar a qualquer momento a confirmação, alteração ou exclusão definitiva de seus dados de nossa base de contatos pelo e-mail <strong>contato@paulanegraoimoveis.com.br</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Terms of Use Content */}
        {type === 'terms' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-black/10 pb-4">
              <FileText className="w-6 h-6 text-[#D4AF37]" />
              <div>
                <h3 className="font-serif text-2xl">Termos de Uso</h3>
                <span className="text-[10px] uppercase tracking-wider text-[#7A7570]">Paula Negrão — CRECI-AL 5494</span>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[#5A5550] leading-relaxed space-y-4 font-light">
              <p>
                Ao navegar neste portal imobiliário, você concorda com as condições descritas nestes Termos de Uso.
              </p>
              
              <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] pt-2">1. Disponibilidade e Valores</h4>
              <p>
                Os valores de venda, taxas de condomínio e disponibilidades dos imóveis e lotes listados (Condomínios Laguna, Granville, Atlantis e adjacências) estão sujeitos a alterações sem aviso prévio por determinação de seus respectivos proprietários ou incorporadores. A confirmação é realizada formalmente durante a consultoria direta.
              </p>

              <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] pt-2">2. Propriedade Intelectual</h4>
              <p>
                Todas as fotografias, textos, marcas, identidades visuais e conteúdos presentes neste site são de titularidade de Paula Negrão ou de seus parceiros autorizados, sendo expressamente vedada sua cópia ou reprodução sem autorização por escrito.
              </p>

              <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] pt-2">3. Intermediação e Registro Profissional</h4>
              <p>
                Todas as intermediações imobiliárias são realizadas sob a responsabilidade técnica de <strong>Paula Negrão, inscrita no CRECI-AL sob o número 5494</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Site Map Content */}
        {type === 'sitemap' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-black/10 pb-4">
              <Map className="w-6 h-6 text-[#D4AF37]" />
              <div>
                <h3 className="font-serif text-2xl">Mapa do Site</h3>
                <span className="text-[10px] uppercase tracking-wider text-[#7A7570]">Estrutura de Páginas & Seções</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="space-y-3">
                <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider border-b border-black/5 pb-1">
                  Seções Principais
                </h4>
                <ul className="space-y-2 text-[#5A5550]">
                  <li>
                    <button onClick={() => { onClose(); onNavigateSection?.('hero'); }} className="hover:text-[#B89330] text-left">
                      1. Início / Hero Section (Apresentação & CTA)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { onClose(); onNavigateSection?.('sobre'); }} className="hover:text-[#B89330] text-left">
                      2. Sobre a Corretora (Paula Negrão - CRECI-AL 5494)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { onClose(); onNavigateSection?.('condominios'); }} className="hover:text-[#B89330] text-left">
                      3. Áreas de Atuação (Laguna, Granville, Atlantis, Francês)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { onClose(); onNavigateSection?.('portfolio'); }} className="hover:text-[#B89330] text-left">
                      4. Portfólio de Imóveis & Filtros por Categoria
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { onClose(); onNavigateSection?.('bem-estar'); }} className="hover:text-[#B89330] text-left">
                      5. Estilo de Vida & Bem-Estar no Litoral Sul
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { onClose(); onNavigateSection?.('depoimentos'); }} className="hover:text-[#B89330] text-left">
                      6. Depoimentos & Prova Social
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { onClose(); onNavigateSection?.('contato'); }} className="hover:text-[#B89330] text-left">
                      7. Contato & Agendamento Personalizado
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider border-b border-black/5 pb-1">
                  Condomínios em Foco
                </h4>
                <ul className="space-y-2 text-[#5A5550]">
                  <li>• Condomínio Laguna BRL (Marina & Heliponto)</li>
                  <li>• Condomínio Granville (Bosque & Elegância)</li>
                  <li>• Condomínio Atlantis (Pé na Areia & Alto Luxo)</li>
                  <li>• Praia do Francês & Litoral Sul de Alagoas</li>
                  <li>• Maceió & Região Metropolitana</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-black/10 text-right">
          <button
            onClick={onClose}
            className="bg-[#1A1A1A] text-white px-6 py-2.5 text-[10px] tracking-widest uppercase font-semibold hover:bg-black"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
