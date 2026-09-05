import React from 'react';
import { 
  Calendar, 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Laptop
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/nutritionData';

interface BookingSectionProps {
  onOpenBookingModal: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8F6623]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5D8467]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A261D] border border-[#3F5E48]/40 text-[#D0E2D4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#CCA056]" />
              Sua Saúde em Primeiro Lugar
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display',serif] leading-tight text-white">
              Pronto para transformar sua alimentação com suporte e ciência?
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              Diga adeus às dietas que te deixam sem energia e com culpa. Agende sua consulta inicial e construa uma rotina saudável, prática e duradoura.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <MapPin className="w-5 h-5 text-[#CCA056] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Atendimento Presencial</h4>
                  <p className="text-xs text-stone-300 mt-0.5">{DOCTOR_INFO.clinicAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <Laptop className="w-5 h-5 text-[#CCA056] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Atendimento Online</h4>
                  <p className="text-xs text-stone-300 mt-0.5">{DOCTOR_INFO.onlineAvailability}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-2 text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#CCA056]" />
                {DOCTOR_INFO.workingHours}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#CCA056]" />
                Recibo para Reembolso
              </span>
            </div>
          </div>

          {/* Right Action Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-black rounded-3xl p-7 sm:p-9 shadow-2xl border border-stone-200 space-y-6">
              <div className="space-y-1 text-center">
                <h3 className="text-2xl font-bold font-['Playfair_Display',serif] text-black">
                  Agendar Agora
                </h3>
                <p className="text-xs text-stone-500">
                  Vagas limitadas para acompanhamentos mensais
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={onOpenBookingModal}
                  className="w-full py-4 px-6 text-sm font-bold text-white bg-black hover:bg-[#3F5E48] rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#CCA056]" />
                  <span>Preencher Formulário de Agendamento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-stone-200"></div>
                  <span className="flex-shrink mx-3 text-stone-400 text-xs uppercase font-bold">ou</span>
                  <div className="flex-grow border-t border-stone-200"></div>
                </div>

                <a
                  href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dra.%20Emilly!%20Gostaria%20de%20consultar%20a%20agenda%20de%20hor%C3%A1rios%20dispon%C3%ADveis.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold text-black bg-[#FBF4E8] hover:bg-[#F5EAD4] border border-[#ECCB9B] rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#8F6623]" />
                  <span>Falar no WhatsApp: {DOCTOR_INFO.phone}</span>
                </a>
              </div>

              <div className="bg-[#F8F4E8] p-3.5 rounded-xl border border-stone-200 text-center">
                <p className="text-[11px] text-stone-500">
                  Tem dúvidas antes de agendar? Chame no WhatsApp que tiramos todas as suas dúvidas sobre planos e consultas.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
