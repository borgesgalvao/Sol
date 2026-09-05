import React from 'react';
import { 
  Heart, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  ShieldCheck, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { DOCTOR_INFO, SPECIALTIES } from '../data/nutritionData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenBooking, 
  onOpenCalculator,
  onOpenQuiz 
}) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Professional ID */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3F5E48] to-[#5D8467] flex items-center justify-center text-white shadow-md">
                <Heart className="w-5 h-5 fill-white/20" />
              </div>
              <div>
                <span className="font-bold text-white tracking-tight text-xl font-['Playfair_Display',serif]">
                  Dra. Emilly Juliana
                </span>
                <p className="text-[11px] text-[#CCA056] font-semibold tracking-wider uppercase -mt-0.5">
                  Nutrição Integrativa & Esportiva
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Atendimento nutricional de excelência, baseado em evidências científicas e individualidade bioquímica. Consultas presenciais em Vespasiano - MG e online no Brasil e exterior.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A261D] border border-[#3F5E48]/50 text-xs text-[#D0E2D4] font-semibold">
              <Award className="w-4 h-4 text-[#CCA056]" />
              <span>{DOCTOR_INFO.crn} • Conselho Regional de Nutricionistas</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              {['Sobre', 'Especialidades', 'Metodologia', 'Planos', 'Receitas', 'Depoimentos', 'FAQ'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                    className="hover:text-[#CCA056] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-stone-600" />
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Interactive Tools */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Ferramentas & Diagnósticos
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="text-left hover:text-[#CCA056] transition-colors flex items-start gap-1.5 cursor-pointer"
                >
                  <span className="text-[#CCA056]">▶</span>
                  <span>Calculadora de IMC & Taxa Metabólica (TDEE)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="text-left hover:text-[#CCA056] transition-colors flex items-start gap-1.5 cursor-pointer"
                >
                  <span className="text-[#CCA056]">▶</span>
                  <span>Distribuição de Macronutrientes e Água</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuiz}
                  className="text-left hover:text-[#CCA056] transition-colors flex items-start gap-1.5 cursor-pointer text-[#ECCB9B]"
                >
                  <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#CCA056]" />
                  <span>Quiz: Descubra seu Perfil Alimentar</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-left hover:text-[#CCA056] transition-colors flex items-start gap-1.5 cursor-pointer"
                >
                  <span className="text-[#CCA056]">▶</span>
                  <span>Solicitar Reembolso de Convênio</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Consultório & Contato
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#CCA056] shrink-0 mt-0.5" />
                <span>{DOCTOR_INFO.clinicAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#CCA056] shrink-0" />
                <span>{DOCTOR_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#CCA056] shrink-0" />
                <span>{DOCTOR_INFO.email}</span>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#CCA056] hover:border-[#CCA056] transition-colors"
                aria-label="Instagram da Dra. Emilly"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#CCA056] hover:border-[#CCA056] transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-stone-500">
          <p>
            © {new Date().getFullYear()} {DOCTOR_INFO.name} - Nutricionista ({DOCTOR_INFO.crn}). Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3F5E48]" />
              Em conformidade com o Código de Ética do CFN / CRN-9
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
