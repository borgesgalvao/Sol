import React from 'react';
import { 
  Calendar, 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Heart, 
  ArrowRight,
  Star,
  Users,
  Smartphone
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/nutritionData';
import doctorPhoto from '../assets/images/dra_emilly_juliana_1786724839191.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenBooking, 
  onOpenCalculator,
  onOpenQuiz 
}) => {
  return (
    <section id="hero" className="relative pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden bg-[#F8F4E8]">
      {/* Decorative subtle background elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#edf4ee]/80 via-[#fbf5eb]/60 to-[#edf4ee]/40 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#edf4ee] rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2EC] border border-[#C6DCB] text-[#32523B] text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#5D8467] animate-pulse" />
              <span>{DOCTOR_INFO.crn} • Nutrição com Base em Evidências</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black font-['Playfair_Display',serif] leading-[1.15]">
              Comer com prazer, sem culpa e com <span className="text-[#3F5E48] italic relative inline-block">
                ciência
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#F5EAD4] -z-10 rounded-sm"></span>
              </span>.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Atendimento nutricional humanizado para <strong className="text-black font-semibold">emagrecimento definitivo</strong>, <strong className="text-black font-semibold">hipertrofia</strong> e <strong className="text-black font-semibold">saúde intestinal</strong>. Um plano que se adapta à sua rotina real, sem proibições radicais.
            </p>

            {/* Quick Value Props Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-sm text-stone-800 bg-white px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#5D8467] shrink-0" />
                <span>Sem alimentos proibidos ou dietas restritivas</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-800 bg-white px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] shadow-xs">
                <Smartphone className="w-4 h-4 text-[#5D8467] shrink-0" />
                <span>Aplicativo no celular & Suporte WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-800 bg-white px-3.5 py-2.5 rounded-xl border border-[#F3E7D3] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#B88737] shrink-0" />
                <span>Presencial em BH ou Online para todo o Mundo</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-800 bg-white px-3.5 py-2.5 rounded-xl border border-[#F3E7D3] shadow-xs">
                <Sparkles className="w-4 h-4 text-[#B88737] shrink-0" />
                <span>Avaliação de Bioimpedância & Exames</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                id="hero-schedule-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-[#3F5E48] hover:bg-[#2E4736] rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Minha Consulta</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-calc-btn"
                onClick={onOpenCalculator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-black bg-[#FBF4E8] hover:bg-[#F5EAD4] border-2 border-[#ECCB9B] rounded-2xl shadow-xs transition-all cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-[#8F6623]" />
                <span>Calcular IMC & Macros Grátis</span>
              </button>
            </div>

            {/* Social Proof Mini Bar */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-stone-200">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" 
                    alt="Paciente" 
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" 
                    alt="Paciente" 
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120" 
                    alt="Paciente" 
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-black text-white text-xs font-bold flex items-center justify-center">
                    +2k
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#CCA056] text-[#CCA056]" />
                    ))}
                    <span className="text-xs font-bold text-black ml-1">4.9/5</span>
                  </div>
                  <p className="text-xs text-stone-600">Mais de 2.500 pacientes transformados</p>
                </div>
              </div>

              <div className="h-8 w-px bg-stone-200 hidden sm:block"></div>

              <button 
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#8F6623] hover:text-black bg-[#FBF4E8] hover:bg-[#F5EAD4] px-3.5 py-2 rounded-xl border border-[#ECCB9B] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#CCA056]" />
                <span>Descobrir meu perfil alimentar (1 min)</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EAF2EC] to-[#FBF4E8] rounded-3xl blur-xl transform rotate-2"></div>
            
            {/* Main Card Container */}
            <div className="relative w-full max-w-md bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
              
              {/* Doctor Main Portrait */}
              <div className="relative h-96 sm:h-[430px] rounded-2xl overflow-hidden bg-stone-100">
                <img 
                  src={doctorPhoto} 
                  alt="Dra. Emilly Juliana - Nutricionista" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Floating Overlay Badge: Active Patients */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-stone-100 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5D8467] animate-ping" />
                  <span className="text-xs font-bold text-black">Agenda Aberta em Vespasiano & Online</span>
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold text-[#F5EAD4] uppercase tracking-wider">
                    {DOCTOR_INFO.crn} • {DOCTOR_INFO.title}
                  </p>
                  <h3 className="text-xl font-bold font-['Playfair_Display',serif]">
                    {DOCTOR_INFO.name}
                  </h3>
                  <p className="text-xs text-stone-200 line-clamp-1">
                    Atendimento Humanizado & Nutrição Baseada em Evidências
                  </p>
                </div>
              </div>

              {/* Interactive micro-feature highlights below photo */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                  <p className="text-xs text-stone-500">Experiência</p>
                  <p className="text-sm font-bold text-black">8+ Anos</p>
                </div>
                <div className="bg-[#EAF2EC] p-2.5 rounded-xl border border-[#D0E2D4]">
                  <p className="text-xs text-[#3F5E48]">Pacientes</p>
                  <p className="text-sm font-bold text-[#27402F]">2.500+</p>
                </div>
                <div className="bg-[#FBF4E8] p-2.5 rounded-xl border border-[#ECCB9B]">
                  <p className="text-xs text-[#8F6623]">Satisfação</p>
                  <p className="text-sm font-bold text-[#573E14]">99.4%</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
