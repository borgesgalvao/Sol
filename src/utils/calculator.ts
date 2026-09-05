import { CalculatorState, CalculationResult } from '../types';

export function calculateNutritionMetrics(state: CalculatorState): CalculationResult {
  const { gender, age, weightKg, heightCm, activityLevel, goal, pace } = state;

  // 1. BMI Calculation
  const heightMeters = heightCm / 100;
  const bmi = Number((weightKg / (heightMeters * heightMeters)).toFixed(1));

  let bmiCategory = 'Peso Saudável';
  let bmiColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';

  if (bmi < 18.5) {
    bmiCategory = 'Abaixo do Peso';
    bmiColor = 'text-amber-600 bg-amber-50 border-amber-200';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'Peso Saudável (Eutrofia)';
    bmiColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Sobrepeso';
    bmiColor = 'text-amber-600 bg-amber-50 border-amber-200';
  } else if (bmi >= 30 && bmi < 34.9) {
    bmiCategory = 'Obesidade Grau I';
    bmiColor = 'text-orange-600 bg-orange-50 border-orange-200';
  } else if (bmi >= 35 && bmi < 39.9) {
    bmiCategory = 'Obesidade Grau II';
    bmiColor = 'text-red-600 bg-red-50 border-red-200';
  } else {
    bmiCategory = 'Obesidade Grau III';
    bmiColor = 'text-rose-700 bg-rose-50 border-rose-200';
  }

  // 2. Basal Metabolic Rate (Mifflin-St Jeor Equation)
  // Men: BMR = (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) + 5
  // Women: BMR = (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) - 161
  let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
  if (gender === 'male') {
    bmr += 5;
  } else {
    bmr -= 161;
  }
  bmr = Math.round(bmr);

  // 3. Activity Level Multiplier -> Total Daily Energy Expenditure (TDEE)
  const activityFactors: Record<string, number> = {
    sedentary: 1.2,       // Pouco ou nenhum exercício
    light: 1.375,         // Exercício leve 1-3 dias/semana
    moderate: 1.55,       // Exercício moderado 3-5 dias/semana
    high: 1.725,          // Exercício pesado 6-7 dias/semana
    athlete: 1.9,         // Treino 2x ao dia ou atleta
  };

  const factor = activityFactors[activityLevel] || 1.375;
  const tdee = Math.round(bmr * factor);

  // 4. Target Calories based on Goal & Pace
  let targetCalories = tdee;
  let calorieDifference = 0;

  if (goal === 'fat_loss') {
    const deficit = pace === 'intense' ? 500 : 350;
    targetCalories = Math.max(bmr, tdee - deficit);
    calorieDifference = targetCalories - tdee;
  } else if (goal === 'muscle_gain') {
    const surplus = pace === 'intense' ? 400 : 250;
    targetCalories = tdee + surplus;
    calorieDifference = surplus;
  } else if (goal === 'maintenance' || goal === 'health_longevity') {
    targetCalories = tdee;
    calorieDifference = 0;
  }

  // 5. Water Intake (35ml per kg base, 40ml if active/hot climate)
  const waterRate = (activityLevel === 'high' || activityLevel === 'athlete') ? 40 : 35;
  const waterIntakeMl = Math.round((weightKg * waterRate) / 50) * 50; // rounded to nearest 50ml
  const waterBottles = Number((waterIntakeMl / 500).toFixed(1));

  // 6. Macronutrient Distribution
  // Protein: ~1.6g to 2.2g per kg depending on goal
  let proteinPerKg = 1.6;
  if (goal === 'fat_loss') proteinPerKg = 2.0;
  if (goal === 'muscle_gain') proteinPerKg = 2.0;
  if (activityLevel === 'athlete') proteinPerKg = 2.2;

  const proteinGrams = Math.round(weightKg * proteinPerKg);
  const proteinCals = proteinGrams * 4;

  // Fats: ~25-30% of target calories
  const fatsPercentage = goal === 'fat_loss' ? 0.25 : 0.28;
  const fatsCals = Math.round(targetCalories * fatsPercentage);
  const fatsGrams = Math.round(fatsCals / 9);

  // Carbs: Remainder of calories
  const carbsCals = Math.max(0, targetCalories - (proteinCals + fatsCals));
  const carbsGrams = Math.round(carbsCals / 4);

  // 7. Personalized Recommendations
  const recommendations: string[] = [];

  if (goal === 'fat_loss') {
    recommendations.push(
      `Mantenha sua meta proteica de ${proteinGrams}g/dia para garantir saciedade e preservar sua massa muscular durante o déficit.`,
      `Distribua o consumo de água (${(waterIntakeMl / 1000).toFixed(1)}L) ao longo do dia, com um copo de 300ml 20 min antes das principais refeições.`,
      `Priorize vegetais folhosos e legumes com baixo índice glicêmico para preencher o volume do prato sem estourar calorias.`
    );
  } else if (goal === 'muscle_gain') {
    recommendations.push(
      `Concentre cerca de 40g a 50g de carboidratos complexos no pré e pós-treino imediato para reposição de glicogênio.`,
      `Considere a suplementação de Creatina Monohidratada (3g a 5g/dia) de uso contínuo para força e recuperação.`,
      `Fracione as ${targetCalories} kcal em 4 a 5 refeições diárias para não sobrecarregar a digestão.`
    );
  } else {
    recommendations.push(
      `Foque na variedade de cores no prato: mínimo de 3 cores de vegetais no almoço e jantar para diversidade de fitoquímicos.`,
      `Inclua fontes de gorduras anti-inflamatórias como azeite extravirgem, sementes de abóbora, chia e nozes.`,
      `Mantenha horários regulares para suas refeições principais para estabilizar os hormônios circadianos (leptina e grelina).`
    );
  }

  if (bmi >= 25) {
    recommendations.push(
      `Uma reeducação alimentar gradual é mais eficaz e sustentável do que restrições drásticas que diminuem a taxa metabólica basal.`
    );
  }

  return {
    bmi,
    bmiCategory,
    bmiColor,
    bmr,
    tdee,
    targetCalories,
    calorieDifference,
    waterIntakeMl,
    waterBottles,
    macros: {
      proteinGrams,
      proteinCals,
      carbsGrams,
      carbsCals,
      fatsGrams,
      fatsCals,
    },
    recommendations,
  };
}
