import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Dumbbell, 
  Activity, 
  Heart, 
  Calendar,
  Send,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HABIT_QUIZ_QUESTIONS, DOCTOR_INFO } from '../data/nutritionData';

interface HabitQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const HabitQuizModal: React.FC<HabitQuizModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenBooking 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = HABIT_QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (optionScore: string) => {
    const updatedAnswers = { ...answers, [currentQ.id]: optionScore };
    setAnswers(updatedAnswers);

    if (currentStep < HABIT_QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };

  // Determine profile based on answers
  const primaryGoal = answers[1] || 'fat_loss';
  const routine = answers[2] || 'delivery';
  const water = answers[3] || 'low_water';
  const energy = answers[4] || 'fatigued';

  let profileTitle = 'Perfil: Em Busca de Equilíbrio & Reorganização';
  let profileDescription = 'Você tem bons objetivos, mas sua rotina corrida e oscilações de energia estão travando seus resultados metabólicos.';
  let mainKeyFocus = 'Organização de rotina simples com marmitas práticas e controle de fome noturna.';

  if (primaryGoal === 'fat_loss' && (routine === 'irregular_night' || routine === 'delivery')) {
    profileTitle = 'Perfil: Bloqueio Metabólico por Ansiedade Noturna';
    profileDescription = 'Você provavelmente passa o dia se contendo e compensa o estresse na alimentação noturna, gerando picos de insulina e retenção.';
    mainKeyFocus = 'Estratégias de densidade nutricional diurna e ceia saciante para eliminar a compulsão noturna.';
  } else if (primaryGoal === 'muscle_gain') {
    profileTitle = 'Perfil: Alta Performance & Otimização Anabólica';
    profileDescription = 'Seu foco é evolução física consistente. Pequenos ajustes no timing de carboidratos e aporte proteico vão acelerar seus ganhos.';
    mainKeyFocus = 'Periodização pré/pós-treino e guia de suplementação eficiente.';
  } else if (primaryGoal === 'gut_health' || energy === 'fatigued') {
    profileTitle = 'Perfil: Inflamação Subclínica & Eixo Intestinal';
    profileDescription = 'Sua fadiga e inchaço são reflexos diretos da microbiota intestinal desregulada e hidratação abaixo do necessário.';
    mainKeyFocus = 'Protocolo anti-inflamatório, modulação intestinal e hidratação celular.';
  }

  const handleSendQuizToWhatsApp = () => {
    const text = `Olá, Dra. Emilly! Respondi ao Quiz de Hábitos no seu site e meu resultado foi:
*${profileTitle}*
- Foco indicado: ${mainKeyFocus}

Gostaria de agendar uma consulta para trabalharmos esses pontos!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-2 rounded-xl hover:bg-stone-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Header / Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-bold text-[#3F5E48] uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#CCA056]" />
                  Quiz de Perfil Nutricional
                </span>
                <span>Etapa {currentStep + 1} de {HABIT_QUIZ_QUESTIONS.length}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#3F5E48] transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / HABIT_QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-xl sm:text-2xl font-bold text-black font-['Playfair_Display',serif] mb-6">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.score)}
                  className="w-full text-left p-4 rounded-2xl border border-stone-200 hover:border-[#3F5E48] bg-[#F8F4E8] hover:bg-[#EAF2EC] text-black font-medium text-sm sm:text-base transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="leading-snug">{opt.text}</span>
                  <div className="w-6 h-6 rounded-full border border-stone-300 group-hover:border-[#3F5E48] group-hover:bg-[#3F5E48] group-hover:text-white flex items-center justify-center shrink-0 ml-3 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              ))}
            </div>

            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="mt-6 text-xs text-stone-500 hover:text-black font-semibold cursor-pointer"
              >
                ← Voltar pergunta anterior
              </button>
            )}
          </div>
        ) : (
          /* Result Card */
          <div className="space-y-6 animate-in zoom-in-95 duration-200">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2EC] text-[#2A3F30] border border-[#D0E2D4] text-xs font-bold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#3F5E48]" />
                Diagnóstico de Hábitos Concluído
              </span>
              <h3 className="text-2xl font-bold text-black font-['Playfair_Display',serif] mt-1">
                {profileTitle}
              </h3>
            </div>

            <div className="bg-[#F8F4E8] rounded-2xl p-5 border border-stone-200 space-y-3">
              <p className="text-stone-700 text-sm leading-relaxed">
                {profileDescription}
              </p>
              
              <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                <p className="text-xs font-bold text-[#3F5E48] uppercase tracking-wider mb-1">
                  💡 Foco Estratégico Recomendado:
                </p>
                <p className="text-xs sm:text-sm text-black font-medium">
                  {mainKeyFocus}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking(`Quiz - ${profileTitle}`);
                }}
                className="w-full py-3.5 px-4 text-sm font-bold text-white bg-black hover:bg-stone-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#CCA056]" />
                <span>Agendar Consulta com Base no Meu Perfil</span>
              </button>

              <button
                onClick={handleSendQuizToWhatsApp}
                className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-black bg-[#EAF2EC] hover:bg-[#D0E2D4] border border-[#D0E2D4] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#3F5E48]" />
                <span>Enviar Perfil no WhatsApp da Nutri</span>
              </button>

              <button
                onClick={resetQuiz}
                className="text-xs text-stone-500 hover:text-black flex items-center justify-center gap-1 py-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Refazer teste
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
