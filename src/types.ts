export interface Specialty {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  idealFor: string[];
  tag: string;
}

export interface Plan {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  period: string;
  features: string[];
  includedItems: string[];
  modality: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  occupation: string;
  goal: string;
  achievement: string;
  quote: string;
  stars: number;
  timeframe: string;
  avatarUrl: string;
  highlightMetric?: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: 'cafe' | 'refeicoes' | 'lanches' | 'doces';
  prepTimeMinutes: number;
  servings: number;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  shortDesc: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  imageUrl: string;
  nutriTip: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'consultas' | 'online' | 'pagamento';
}

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'high' | 'athlete';
export type GoalType = 'fat_loss' | 'muscle_gain' | 'maintenance' | 'health_longevity';
export type Gender = 'female' | 'male';

export interface CalculatorState {
  gender: Gender;
  age: number;
  weightKg: number;
  heightCm: number;
  activityLevel: ActivityLevel;
  goal: GoalType;
  pace: 'moderate' | 'intense';
}

export interface CalculationResult {
  bmi: number;
  bmiCategory: string;
  bmiColor: string;
  bmr: number;
  tdee: number;
  targetCalories: number;
  calorieDifference: number;
  waterIntakeMl: number;
  waterBottles: number;
  macros: {
    proteinGrams: number;
    proteinCals: number;
    carbsGrams: number;
    carbsCals: number;
    fatsGrams: number;
    fatsCals: number;
  };
  recommendations: string[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  modality: 'online' | 'presencial';
  mainGoal: string;
  preferredPeriod: 'manha' | 'tarde' | 'noite';
  preferredDate?: string;
  message?: string;
  hasCalculatedData?: boolean;
}
