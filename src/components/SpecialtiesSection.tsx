import React, { useState } from 'react';
import { 
  Flame, 
  Dumbbell, 
  Activity, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { SPECIALTIES } from '../data/nutritionData';
import { Specialty } from '../types';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking: (title: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ 
  onSelectSpecialtyForBooking 
}) => {
  const [activeTab, setActiveTab] = useState<string>('todas');
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-6 h-6 text-orange-500" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-emerald-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-teal-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-rose-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-indigo-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      default: return <Sparkles className="w-6 h-6 text-emerald-600" />;
    }
  };

  const filteredSpecialties = activeTab === 'todas'
    ? SPECIALTIES
    : SPECIALTIES.filter(s => {
        if (activeTab === 'emagrecimento') return s.id === 'emagrecimento' || s.id === 'reeducacao';
        if (activeTab === 'esporte') return s.id === 'esportiva';
        if (activeTab === 'saude') return s.id === 'intestinal' || s.id === 'saude-mulher' || s.id === 'doencas-cronicas';
        return true;
      });

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-[#F8F4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3F5E48] bg-[#EAF2EC] px-3.5 py-1.5 rounded-full border border-[#D0E2D4]">
            Áreas de Atuação Especializada
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-['Playfair_Display',serif] mt-4 tracking-tight">
            Tratamentos Nutricionais Personalizados para Cada Momento da Sua Vida
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Cada organismo possui uma bioquímica única. Conheça as principais áreas em que desenvolvemos protocolos clínicos de alta precisão.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'todas', label: 'Todas as Áreas' },
              { id: 'emagrecimento', label: 'Emagrecimento & Hábitos' },
              { id: 'esporte', label: 'Performance & Hipertrofia' },
              { id: 'saude', label: 'Saúde Integrativa & Clínica' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-[#F8F4E8] border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredSpecialties.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#CCA056] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Icon & Tag */}
                <div className="flex items-start justify-between gap-2 mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-[#F8F4E8] border border-stone-200 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#EAF2EC] transition-all">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-[#3F5E48] bg-[#EAF2EC] px-2.5 py-1 rounded-full border border-[#D0E2D4]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black font-['Playfair_Display',serif] mb-2.5 group-hover:text-[#3F5E48] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs font-semibold text-[#8F6623] uppercase tracking-wider mb-2">
                  {item.category}
                </p>

                <p className="text-stone-600 text-sm leading-relaxed mb-5">
                  {item.shortDesc}
                </p>

                {/* Key Benefits Bullets */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <p className="text-xs font-bold text-black uppercase tracking-wider">
                    O que inclui:
                  </p>
                  {item.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-stone-600">
                      <Check className="w-3.5 h-3.5 text-[#5D8467] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedSpecialty(item)}
                  className="text-xs font-bold text-stone-700 hover:text-black flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Ver detalhes completos
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectSpecialtyForBooking(item.title)}
                  className="px-3.5 py-2 text-xs font-bold text-black bg-[#FBF4E8] hover:bg-[#3F5E48] hover:text-white border border-[#ECCB9B] rounded-xl transition-all cursor-pointer"
                >
                  Agendar Esta Área
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Banner */}
        <div className="mt-12 bg-black text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-stone-800">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-['Playfair_Display',serif]">
              Não tem certeza de qual é a área ideal para o seu momento?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Na primeira consulta realizamos uma anamnese diagnóstica 360° para mapear exatamente suas necessidades.
            </p>
          </div>
          <button
            onClick={() => onSelectSpecialtyForBooking('Consulta Geral 360°')}
            className="px-6 py-3 text-xs sm:text-sm font-bold text-black bg-[#FBF4E8] hover:bg-[#F5EAD4] border border-[#ECCB9B] rounded-xl transition-all shrink-0 cursor-pointer shadow-md"
          >
            Conversar com a Nutri
          </button>
        </div>

      </div>

      {/* Modal for Full Specialty Details */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] border border-[#D0E2D4] flex items-center justify-center">
                  {getIcon(selectedSpecialty.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#3F5E48] uppercase tracking-wider">
                    {selectedSpecialty.category}
                  </span>
                  <h3 className="text-xl font-bold text-black font-['Playfair_Display',serif]">
                    {selectedSpecialty.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="text-stone-400 hover:text-black p-1.5 rounded-lg hover:bg-stone-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-5">
              {selectedSpecialty.fullDesc}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#5D8467]" />
                  Diferenciais do Protocolo:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {selectedSpecialty.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5D8467] shrink-0 mt-1.5"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#8F6623]" />
                  Para quem é ideal:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {selectedSpecialty.idealFor.map((ideal, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CCA056] shrink-0 mt-1.5"></span>
                      <span>{ideal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
              <button
                onClick={() => {
                  const title = selectedSpecialty.title;
                  setSelectedSpecialty(null);
                  onSelectSpecialtyForBooking(title);
                }}
                className="w-full py-3.5 text-sm font-bold text-white bg-black hover:bg-[#3F5E48] rounded-xl transition-all shadow-md cursor-pointer"
              >
                Agendar Consulta para esta Especialidade
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
