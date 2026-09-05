import React from 'react';
import { 
  Check, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Smartphone, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { PLANS } from '../data/nutritionData';

interface PlansSectionProps {
  onSelectPlan: (planTitle: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="planos" className="py-20 md:py-28 bg-[#F8F4E8] border-y border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3F5E48] bg-[#EAF2EC] px-3.5 py-1.5 rounded-full border border-[#D0E2D4]">
            Investimento em Você
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-['Playfair_Display',serif] mt-4 tracking-tight">
            Planos & Modalidades de Atendimento
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Transparência total. Escolha entre consulta individual ou programas completos de acompanhamento contínuo.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-white border-2 border-black shadow-2xl scale-100 lg:-translate-y-2'
                  : 'bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#8F6623]'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#CCA056]" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="border-b border-stone-100 pb-5 mb-5">
                  <span className="text-xs font-bold text-[#8F6623] uppercase tracking-wider">
                    {plan.modality}
                  </span>
                  <h3 className="text-2xl font-bold text-black font-['Playfair_Display',serif] mt-1">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-black">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    {plan.period}
                  </p>
                </div>

                {/* Included Highlights Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {plan.includedItems.map((item, idx) => (
                    <span key={idx} className="text-[11px] font-semibold text-[#3F5E48] bg-[#EAF2EC] px-2.5 py-1 rounded-lg border border-[#D0E2D4]">
                      ✓ {item}
                    </span>
                  ))}
                </div>

                {/* Full Features List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-black">
                    O que está incluso:
                  </p>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600">
                      <div className="w-4 h-4 rounded-full bg-[#EAF2EC] text-[#3F5E48] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-stone-100">
                <button
                  onClick={() => onSelectPlan(plan.title)}
                  className={`w-full py-4 px-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    plan.isPopular
                      ? 'bg-black hover:bg-[#3F5E48] text-white hover:shadow-lg'
                      : 'bg-[#FBF4E8] hover:bg-[#F5EAD4] text-black border border-[#ECCB9B]'
                  }`}
                >
                  <Calendar className="w-4 h-4 text-[#CCA056]" />
                  <span>Escolher {plan.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-stone-400 mt-2.5">
                  Emitimos nota fiscal para reembolso no seu convênio
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Corporate / Family Notice */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] border border-[#D0E2D4] flex items-center justify-center text-[#3F5E48] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-black">
                Atendimento para Casais, Famílias ou Corporativo
              </h4>
              <p className="text-xs sm:text-sm text-stone-500">
                Oferecemos condições especiais para consultas em dupla ou palestras/workshops de nutrição empresarial.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('Plano Casal / Corporativo')}
            className="px-5 py-2.5 text-xs font-bold text-black bg-[#FBF4E8] hover:bg-[#F5EAD4] border border-[#ECCB9B] rounded-xl transition-colors shrink-0 cursor-pointer"
          >
            Consultar Condições
          </button>
        </div>

      </div>
    </section>
  );
};
