import React from 'react';
import { 
  X, 
  Clock, 
  Flame, 
  Users, 
  Check, 
  Sparkles, 
  Utensils, 
  Heart,
  Share2
} from 'lucide-react';
import { Recipe } from '../types';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-stone-200 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-xs text-stone-700 hover:text-stone-900 p-2 rounded-full shadow-md transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex flex-wrap gap-2 mb-2">
              {recipe.tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-semibold bg-black/70 border border-[#CCA056]/40 text-[#ECCB9B] backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif]">
              {recipe.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8F4E8] p-4 rounded-2xl border border-stone-200 text-center">
            <div>
              <span className="text-[11px] text-stone-500 font-medium">Preparo</span>
              <p className="text-sm font-bold text-black flex items-center justify-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#3F5E48]" />
                {recipe.prepTimeMinutes} min
              </p>
            </div>
            <div>
              <span className="text-[11px] text-stone-500 font-medium">Rendimento</span>
              <p className="text-sm font-bold text-black flex items-center justify-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-[#3F5E48]" />
                {recipe.servings} porção
              </p>
            </div>
            <div>
              <span className="text-[11px] text-stone-500 font-medium">Calorias</span>
              <p className="text-sm font-bold text-black flex items-center justify-center gap-1 mt-0.5">
                <Flame className="w-3.5 h-3.5 text-[#CCA056]" />
                {recipe.calories} kcal
              </p>
            </div>
            <div>
              <span className="text-[11px] text-stone-500 font-medium">Proteína</span>
              <p className="text-sm font-bold text-[#3F5E48] mt-0.5">
                {recipe.protein}g
              </p>
            </div>
          </div>

          {/* Nutri Tip Box */}
          <div className="bg-[#EAF2EC] border border-[#D0E2D4] p-4 rounded-2xl flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#8F6623] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A3F30]">
                Dica da Dra. Emilly Juliana:
              </h4>
              <p className="text-xs sm:text-sm text-[#2A3F30] mt-1 leading-relaxed">
                {recipe.nutriTip}
              </p>
            </div>
          </div>

          {/* Ingredients Section */}
          <div>
            <h4 className="text-base font-bold text-black font-['Playfair_Display',serif] mb-3 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#3F5E48]" />
              Ingredientes
            </h4>
            <ul className="space-y-2 text-sm text-stone-700">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-[#F8F4E8] p-2.5 rounded-xl border border-stone-200/60">
                  <div className="w-4 h-4 rounded-full bg-[#EAF2EC] text-[#3F5E48] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h4 className="text-base font-bold text-black font-['Playfair_Display',serif] mb-3">
              Modo de Preparo
            </h4>
            <ol className="space-y-3 text-sm text-stone-700">
              {recipe.instructions.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action */}
          <div className="pt-4 border-t border-stone-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-bold text-black bg-[#FBF4E8] hover:bg-[#F5EAD4] border border-[#ECCB9B] rounded-xl transition-colors cursor-pointer"
            >
              Fechar Receita
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
