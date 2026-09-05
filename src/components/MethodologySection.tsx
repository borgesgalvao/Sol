import React from 'react';
import { 
  MessageSquareText, 
  BarChart3, 
  Utensils, 
  Smartphone, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/nutritionData';

interface MethodologySectionProps {
  onOpenBooking: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareText': return <MessageSquareText className="w-6 h-6 text-[#3F5E48]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#8F6623]" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-[#3F5E48]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#8F6623]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#3F5E48]" />;
      default: return <Sparkles className="w-6 h-6 text-[#CCA056]" />;
    }
  };

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-[#F8F4E8] border-y border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3F5E48] bg-[#EAF2EC] px-3.5 py-1.5 rounded-full border border-[#D0E2D4]">
            Como Funciona o Acompanhamento
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-['Playfair_Display',serif] mt-4 tracking-tight">
            Uma Metodologia Estruturada Passo a Passo para o Seu Sucesso
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Sem receitas prontas de gaveta. Seu tratamento é desenhado com precisão científica e acompanhado bem de perto.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#D0E2D4] -translate-y-12 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {METHODOLOGY_STEPS.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white hover:bg-[#FDFBF7] rounded-3xl p-6 border border-stone-200 shadow-xs hover:shadow-xl hover:border-[#CCA056] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-['Playfair_Display',serif] text-black group-hover:text-[#3F5E48] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-center justify-center group-hover:bg-[#EAF2EC] group-hover:border-[#D0E2D4] transition-colors">
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-black font-['Playfair_Display',serif] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-200 flex items-center gap-1 text-[11px] font-bold text-[#8F6623]">
                  <span>Etapa {item.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Differential Banner: App & WhatsApp */}
        <div className="mt-14 bg-black rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-stone-800">
          
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-[#3F5E48]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-700 text-[#CCA056] text-xs font-semibold">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Aplicativo Móvel Exclusivo para Pacientes</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif]">
                A Nutri no seu bolso: Sua dieta, receitas e suporte contínuo onde você estiver
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Você nunca mais vai passar aperto no mercado ou no restaurante. Com o app exclusivo, você consulta suas refeições, visualiza substituições inteligentes de alimentos, marca seu consumo de água e conversa diretamente com a Dra. Emilly no WhatsApp.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-stone-900 border border-stone-800 p-3 rounded-xl text-center">
                  <p className="text-xs text-[#CCA056]">Plano no Celular</p>
                  <p className="text-sm font-bold text-white">100% Digital</p>
                </div>
                <div className="bg-stone-900 border border-stone-800 p-3 rounded-xl text-center">
                  <p className="text-xs text-[#CCA056]">Lista de Compras</p>
                  <p className="text-sm font-bold text-white">Automática</p>
                </div>
                <div className="bg-stone-900 border border-stone-800 p-3 rounded-xl text-center">
                  <p className="text-xs text-[#CCA056]">Canal WhatsApp</p>
                  <p className="text-sm font-bold text-white">Dúvidas Rápidas</p>
                </div>
                <div className="bg-stone-900 border border-stone-800 p-3 rounded-xl text-center">
                  <p className="text-xs text-[#CCA056]">Evolução em Fotos</p>
                  <p className="text-sm font-bold text-white">Métricas Claras</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-black bg-[#FBF4E8] hover:bg-[#F5EAD4] border border-[#ECCB9B] rounded-2xl shadow-xl transition-all hover:scale-105 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#8F6623]" />
                <span>Começar Meu Acompanhamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-stone-400 mt-2 text-center">
                Presencial em Vespasiano - MG ou Online no Brasil e Exterior
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
