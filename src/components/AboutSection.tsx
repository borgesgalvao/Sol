import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle, 
  HeartHandshake, 
  BookOpen, 
  Activity, 
  Apple, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/nutritionData';
import doctorPhoto from '../assets/images/regenerated_image_1788975535714.webp';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#F8F4E8] border-y border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage & Credentials */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Main Clinical Photo */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-stone-50 bg-stone-100 aspect-4/5">
                <img 
                  src={doctorPhoto} 
                  alt="Dra. Emilly Juliana no consultório"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badge 1: Clinic */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white p-4 rounded-2xl shadow-xl border border-stone-200 max-w-[250px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] flex items-center justify-center text-[#3F5E48] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black leading-tight">Formada pela UFLA</p>
                    <p className="text-[11px] text-stone-500">Univ. Federal de Lavras</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Modern Bioimpedance */}
              <div className="absolute -top-4 -right-4 sm:right-2 bg-black text-white p-3.5 rounded-2xl shadow-lg border border-stone-800 max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-[#CCA056] shrink-0" />
                  <div>
                    <p className="text-xs font-bold leading-tight">Bioimpedância Médica</p>
                    <p className="text-[10px] text-stone-300">InBody de Alta Precisão</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio, Academic Credentials & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#3F5E48] bg-[#EAF2EC] px-3.5 py-1 rounded-full border border-[#D0E2D4]">
                Conheça sua Nutricionista
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-black font-['Playfair_Display',serif] mt-3">
                “Meu papel não é tirar o que você ama comer, mas te ensinar a comer com estratégia.”
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Olá! Sou a <strong className="text-black font-semibold">{DOCTOR_INFO.name}</strong> ({DOCTOR_INFO.crn}). Há quase uma década me dedico a transformar a saúde e a autoestima de pessoas reais que estão cansadas de dietas restritivas e promessas milagrosas.
              </p>
              <p>
                Acredito profundamente na <strong className="text-black font-semibold">Nutrição com Ciência e Empatia</strong>. Seja para perder peso de forma sustentável, ganhar massa muscular, controlar a SOP ou curar um intestino inflamado, o plano alimentar precisa caber na sua rotina de trabalho, viagens e família — e não o contrário.
              </p>
            </div>

            {/* Academic Track & Formations */}
            <div className="pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#8F6623]" />
                Formação Acadêmica & Especializações
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DOCTOR_INFO.education.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-stone-200 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-[#5D8467] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-stone-800 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#3F5E48] font-bold text-sm">
                  <Apple className="w-4 h-4 text-[#5D8467]" />
                  <span>Comida de Verdade</span>
                </div>
                <p className="text-xs text-stone-600">Sem pós mágicos caros, focando em alimentos nutritivos e acessíveis.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#3F5E48] font-bold text-sm">
                  <HeartHandshake className="w-4 h-4 text-[#5D8467]" />
                  <span>Atendimento Afetivo</span>
                </div>
                <p className="text-xs text-stone-600">Escuta ativa sem julgamentos sobre suas dificuldades e deslizes.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#8F6623] font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-[#CCA056]" />
                  <span>Autonomia Eterna</span>
                </div>
                <p className="text-xs text-stone-600">Você aprende a fazer escolhas conscientes para a vida toda.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-black hover:bg-[#3F5E48] rounded-xl transition-colors shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta com a Dra. Emilly</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
