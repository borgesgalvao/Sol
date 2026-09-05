import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Flame, 
  Droplets, 
  Dumbbell, 
  Heart, 
  Sparkles, 
  Send, 
  Calendar, 
  HelpCircle, 
  CheckCircle2, 
  ChevronRight, 
  RefreshCw, 
  Scale,
  Activity
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CalculatorState, Gender, ActivityLevel, GoalType } from '../types';
import { calculateNutritionMetrics } from '../utils/calculator';
import { DOCTOR_INFO } from '../data/nutritionData';

interface NutritionalCalculatorProps {
  onScheduleWithData: (calculatedData: string) => void;
}

export const NutritionalCalculator: React.FC<NutritionalCalculatorProps> = ({ 
  onScheduleWithData 
}) => {
  const [formState, setFormState] = useState<CalculatorState>({
    gender: 'female',
    age: 32,
    weightKg: 68,
    heightCm: 165,
    activityLevel: 'moderate',
    goal: 'fat_loss',
    pace: 'moderate',
  });

  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const results = useMemo(() => {
    return calculateNutritionMetrics(formState);
  }, [formState]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setHasCalculated(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#059669', '#10B981', '#34D399', '#F59E0B']
    });
  };

  const handleSendToWhatsApp = () => {
    const goalTextMap: Record<GoalType, string> = {
      fat_loss: 'Emagrecimento & Queima de Gordura',
      muscle_gain: 'Ganho de Massa Muscular / Hipertrofia',
      maintenance: 'Manutenção de Peso & Reeducação',
      health_longevity: 'Saúde Geral & Longevidade',
    };

    const text = `Olá, Dra. Emilly! 👋 Calculei minhas métricas nutricionais no seu site e gostaria de agendar uma consulta:
- *Sexo:* ${formState.gender === 'female' ? 'Feminino' : 'Masculino'} | *Idade:* ${formState.age} anos
- *Peso:* ${formState.weightKg} kg | *Altura:* ${formState.heightCm} cm
- *IMC:* ${results.bmi} (${results.bmiCategory})
- *Objetivo Principal:* ${goalTextMap[formState.goal]}
- *Gasto Diário Estimado (TDEE):* ${results.tdee} kcal
- *Meta Calórica Sugerida:* ${results.targetCalories} kcal/dia
- *Meta de Água:* ${(results.waterIntakeMl / 1000).toFixed(1)} Litros/dia
- *Macros:* ${results.macros.proteinGrams}g Prot | ${results.macros.carbsGrams}g Carb | ${results.macros.fatsGrams}g Gord

Gostaria de saber os horários disponíveis para iniciarmos o acompanhamento!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodedText}`, '_blank');
  };

  const handleScheduleFromCalc = () => {
    const summary = `IMC: ${results.bmi} (${results.bmiCategory}) | Meta: ${results.targetCalories} kcal/dia | Água: ${(results.waterIntakeMl / 1000).toFixed(1)}L | Peso: ${formState.weightKg}kg`;
    onScheduleWithData(summary);
  };

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-[#F8F4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2EC] text-[#3F5E48] border border-[#D0E2D4] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-[#5D8467]" />
            <span>Ferramenta Clínica Interativa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-['Playfair_Display',serif] tracking-tight">
            Calculadora Nutricional Inteligente & Diagnóstico Inicial
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Descubra seu IMC, sua Taxa Metabólica Basal, estimativa de gasto calórico, meta de água e distribuição ideal de macronutrientes.
          </p>
        </div>

        {/* Main 2-Column Calculator Box */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-stone-200 bg-[#F8F4E8]">
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-black font-['Playfair_Display',serif] flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#8F6623]" />
                  Seus Dados Antropométricos
                </h3>
                <span className="text-xs text-stone-500 font-bold bg-[#FBF4E8] px-2.5 py-1 rounded-full border border-[#ECCB9B]">100% Gratuito</span>
              </div>

              <form onSubmit={handleCalculate} className="space-y-5">
                {/* Gender Toggle */}
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-2">
                    Sexo Biológico
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormState(prev => ({ ...prev, gender: 'female' }))}
                      className={`py-2.5 px-4 text-sm font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        formState.gender === 'female'
                          ? 'bg-black text-white border-black shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <span>Feminino</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormState(prev => ({ ...prev, gender: 'male' }))}
                      className={`py-2.5 px-4 text-sm font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        formState.gender === 'male'
                          ? 'bg-black text-white border-black shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <span>Masculino</span>
                    </button>
                  </div>
                </div>

                {/* Age, Weight, Height Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                      Idade (anos)
                    </label>
                    <input
                      type="number"
                      min={12}
                      max={100}
                      value={formState.age}
                      onChange={(e) => setFormState(prev => ({ ...prev, age: Number(e.target.value) || 18 }))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-black font-semibold focus:outline-[#3F5E48]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                      Peso (kg)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min={35}
                      max={250}
                      value={formState.weightKg}
                      onChange={(e) => setFormState(prev => ({ ...prev, weightKg: Number(e.target.value) || 50 }))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-black font-semibold focus:outline-[#3F5E48]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                      Altura (cm)
                    </label>
                    <input
                      type="number"
                      min={120}
                      max={230}
                      value={formState.heightCm}
                      onChange={(e) => setFormState(prev => ({ ...prev, heightCm: Number(e.target.value) || 160 }))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-black font-semibold focus:outline-[#3F5E48]"
                    />
                  </div>
                </div>

                {/* Activity Level Selector */}
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                    Nível de Atividade Física Atual
                  </label>
                  <select
                    value={formState.activityLevel}
                    onChange={(e) => setFormState(prev => ({ ...prev, activityLevel: e.target.value as ActivityLevel }))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 font-medium focus:outline-[#3F5E48]"
                  >
                    <option value="sedentary">Sedentário (Trabalho sentado, pouco ou nenhum exercício)</option>
                    <option value="light">Leve (Exercício leve / caminhadas 1 a 3 dias por semana)</option>
                    <option value="moderate">Moderado (Treino de musculação ou aeróbico 3 a 5 dias/semana)</option>
                    <option value="high">Intenso (Treino pesado 6 a 7 dias por semana)</option>
                    <option value="athlete">Atleta / Rendimento (Treinos diários intensos ou 2x ao dia)</option>
                  </select>
                </div>

                {/* Goal Selector */}
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                    Qual é o seu Objetivo Principal?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: 'fat_loss', label: 'Emagrecimento', desc: 'Queimar gordura e definir' },
                      { id: 'muscle_gain', label: 'Hipertrofia', desc: 'Ganhar massa magra' },
                      { id: 'maintenance', label: 'Reeducação', desc: 'Manter peso e regular hábitos' },
                      { id: 'health_longevity', label: 'Saúde & Intestino', desc: 'Mais energia e exames' },
                    ].map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setFormState(prev => ({ ...prev, goal: g.id as GoalType }))}
                        className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                          formState.goal === g.id
                            ? 'bg-[#EAF2EC] border-[#3F5E48] text-black ring-1 ring-[#3F5E48]'
                            : 'bg-white border-stone-200 text-stone-700 hover:bg-[#F8F4E8]'
                        }`}
                      >
                        <p className="text-xs font-bold">{g.label}</p>
                        <p className="text-[11px] text-stone-500">{g.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pace (if fat loss or muscle gain) */}
                {(formState.goal === 'fat_loss' || formState.goal === 'muscle_gain') && (
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                      Ritmo Desejado
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormState(prev => ({ ...prev, pace: 'moderate' }))}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                          formState.pace === 'moderate'
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-stone-700 border-stone-200'
                        }`}
                      >
                        Moderado & Sustentável
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormState(prev => ({ ...prev, pace: 'intense' }))}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                          formState.pace === 'intense'
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-stone-700 border-stone-200'
                        }`}
                      >
                        Acelerado (Com Foco)
                      </button>
                    </div>
                  </div>
                )}

                <button
                  id="calc-submit-btn"
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-bold text-white bg-black hover:bg-[#3F5E48] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#CCA056]" />
                  <span>Calcular Meu Diagnóstico Nutricional</span>
                </button>

              </form>

            </div>

            {/* Right Column: Interactive Diagnostic Results */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 bg-white flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3F5E48] bg-[#EAF2EC] px-2.5 py-1 rounded-md border border-[#D0E2D4]">
                      Resultado Personalizado
                    </span>
                    <h3 className="text-2xl font-bold text-black font-['Playfair_Display',serif] mt-1">
                      Suas Necessidades Metabólicas
                    </h3>
                  </div>
                  <button 
                    onClick={() => {
                      setFormState({
                        gender: 'female',
                        age: 30,
                        weightKg: 65,
                        heightCm: 165,
                        activityLevel: 'moderate',
                        goal: 'fat_loss',
                        pace: 'moderate',
                      });
                    }}
                    title="Redefinir valores"
                    className="p-2 text-stone-400 hover:text-black hover:bg-[#F8F4E8] rounded-lg transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                {/* IMC Card & Gauge */}
                <div className="bg-[#F8F4E8] rounded-2xl p-4 border border-stone-200 mb-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-500 font-medium">Índice de Massa Corporal (IMC)</span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-3xl font-black text-black">{results.bmi}</span>
                        <span className="text-xs text-stone-500 font-normal">kg/m²</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border ${results.bmiColor}`}>
                      {results.bmiCategory}
                    </span>
                  </div>

                  {/* IMC visual scale bar */}
                  <div className="mt-3 relative">
                    <div className="h-2 w-full bg-gradient-to-r from-stone-300 via-[#8F6623] to-[#3F5E48] rounded-full"></div>
                    <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                      <span>18.5 (Baixo)</span>
                      <span>24.9 (Normal)</span>
                      <span>29.9 (Sobrepeso)</span>
                      <span>35+ (Obesidade)</span>
                    </div>
                  </div>
                </div>

                {/* Calorie Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                  <div className="bg-[#EAF2EC] border border-[#D0E2D4] p-3.5 rounded-2xl">
                    <div className="flex items-center gap-1.5 text-[#3F5E48] text-xs font-bold">
                      <Flame className="w-4 h-4 text-[#5D8467]" />
                      <span>Meta Calórica</span>
                    </div>
                    <p className="text-2xl font-black text-black mt-1">
                      {results.targetCalories} <span className="text-xs font-normal">kcal</span>
                    </p>
                    <p className="text-[10px] text-[#3F5E48]">Por dia para seu objetivo</p>
                  </div>

                  <div className="bg-[#F8F4E8] border border-stone-200 p-3.5 rounded-2xl">
                    <div className="flex items-center gap-1.5 text-stone-700 text-xs font-bold">
                      <Activity className="w-4 h-4 text-[#8F6623]" />
                      <span>Gasto Total (TDEE)</span>
                    </div>
                    <p className="text-2xl font-black text-black mt-1">
                      {results.tdee} <span className="text-xs font-normal">kcal</span>
                    </p>
                    <p className="text-[10px] text-stone-500">Taxa Basal: {results.bmr} kcal</p>
                  </div>

                  <div className="col-span-2 sm:col-span-1 bg-[#FBF4E8] border border-[#ECCB9B] p-3.5 rounded-2xl">
                    <div className="flex items-center gap-1.5 text-[#8F6623] text-xs font-bold">
                      <Droplets className="w-4 h-4 text-[#CCA056]" />
                      <span>Meta de Água</span>
                    </div>
                    <p className="text-2xl font-black text-black mt-1">
                      {(results.waterIntakeMl / 1000).toFixed(1)} <span className="text-xs font-normal">L</span>
                    </p>
                    <p className="text-[10px] text-[#8F6623]">~{results.waterBottles} garrafas (500ml)</p>
                  </div>
                </div>

                {/* Macronutrient Distribution Bars */}
                <div className="bg-[#F8F4E8] rounded-2xl p-4 border border-stone-200 mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-3 flex items-center justify-between">
                    <span>Estimativa de Macronutrientes Diários</span>
                    <span className="text-[10px] font-normal text-stone-500">Baseado no seu peso</span>
                  </h4>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                      <span className="text-[11px] font-bold text-[#8F6623]">Proteínas</span>
                      <p className="text-lg font-black text-black">{results.macros.proteinGrams}g</p>
                      <span className="text-[10px] text-stone-400">{results.macros.proteinCals} kcal</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                      <span className="text-[11px] font-bold text-[#CCA056]">Carboidratos</span>
                      <p className="text-lg font-black text-black">{results.macros.carbsGrams}g</p>
                      <span className="text-[10px] text-stone-400">{results.macros.carbsCals} kcal</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                      <span className="text-[11px] font-bold text-[#3F5E48]">Gorduras Boas</span>
                      <p className="text-lg font-black text-black">{results.macros.fatsGrams}g</p>
                      <span className="text-[10px] text-stone-400">{results.macros.fatsCals} kcal</span>
                    </div>
                  </div>
                </div>

                {/* Nutri Insights Recommendations */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-black">
                    Orientações da Dra. Emilly para você:
                  </p>
                  {results.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 bg-[#F8F4E8] p-2 rounded-lg border border-stone-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5D8467] shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons for Calculation */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                <button
                  id="calc-send-whatsapp-btn"
                  onClick={handleSendToWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-black hover:bg-[#3F5E48] rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#CCA056]" />
                  <span>Enviar Diagnóstico no WhatsApp</span>
                </button>

                <button
                  id="calc-schedule-with-data-btn"
                  onClick={handleScheduleFromCalc}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-black bg-[#FBF4E8] hover:bg-[#F5EAD4] rounded-xl transition-all border border-[#ECCB9B] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#8F6623]" />
                  <span>Agendar Consulta</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[11px] text-stone-400 mt-4 max-w-2xl mx-auto">
          * Os cálculos utilizam as equações de Mifflin-St Jeor e diretrizes da Sociedade Brasileira de Nutrição. Os valores são estimativas orientativas e não substituem uma avaliação clínica individualizada com exame de bioimpedância.
        </p>

      </div>
    </section>
  );
};

