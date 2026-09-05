import React, { useState } from 'react';
import { 
  Clock, 
  Flame, 
  ChefHat, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Filter
} from 'lucide-react';
import { RECIPES } from '../data/nutritionData';
import { Recipe } from '../types';
import { RecipeModal } from './RecipeModal';

export const RecipesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

  const categories = [
    { id: 'todos', label: 'Todas as Receitas' },
    { id: 'cafe', label: 'Café da Manhã' },
    { id: 'refeicoes', label: 'Almoço & Jantar' },
    { id: 'lanches', label: 'Lanches & Shakes' },
    { id: 'doces', label: 'Doces Saudáveis' },
  ];

  const filteredRecipes = selectedCategory === 'todos'
    ? RECIPES
    : RECIPES.filter(r => r.category === selectedCategory);

  return (
    <section id="receitas" className="py-20 md:py-28 bg-[#F8F4E8] border-b border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3F5E48] bg-[#EAF2EC] px-3.5 py-1.5 rounded-full border border-[#D0E2D4]">
            Cozinha Prática & Nutritiva
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-['Playfair_Display',serif] mt-4 tracking-tight">
            Receitas Rápidas & Dicas da Nutri
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Comida saudável precisa ser gostosa e rápida de fazer. Todas as receitas foram testadas clinicamente para saciedade e equilíbrio de macros.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-[#FBF4E8] border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => setActiveRecipe(recipe)}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#8F6623] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Recipe Image */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-bold text-black flex items-center gap-1 shadow-xs">
                    <Clock className="w-3 h-3 text-[#3F5E48]" />
                    <span>{recipe.prepTimeMinutes} min</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-bold text-white flex items-center gap-1 shadow-xs">
                    <Flame className="w-3 h-3 text-[#CCA056]" />
                    <span>{recipe.calories} kcal</span>
                  </div>
                </div>

                {/* Recipe Body */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {recipe.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-[#3F5E48] bg-[#EAF2EC] px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base font-bold text-black font-['Playfair_Display',serif] group-hover:text-[#3F5E48] transition-colors line-clamp-2 mb-2">
                    {recipe.title}
                  </h3>

                  <p className="text-xs text-stone-500 line-clamp-2 mb-4">
                    {recipe.shortDesc}
                  </p>

                  {/* Macros mini bar */}
                  <div className="grid grid-cols-3 gap-1 bg-[#F8F4E8] p-2 rounded-xl border border-stone-200/60 text-center text-[10px]">
                    <div>
                      <span className="text-stone-400">Prot</span>
                      <p className="font-bold text-black">{recipe.protein}g</p>
                    </div>
                    <div>
                      <span className="text-stone-400">Carb</span>
                      <p className="font-bold text-black">{recipe.carbs}g</p>
                    </div>
                    <div>
                      <span className="text-stone-400">Gord</span>
                      <p className="font-bold text-black">{recipe.fats}g</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveRecipe(recipe)}
                  className="w-full py-2.5 px-3 text-xs font-bold text-black bg-[#FBF4E8] group-hover:bg-black group-hover:text-white border border-[#ECCB9B] rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#8F6623] group-hover:text-[#CCA056]" />
                  <span>Ver Modo de Preparo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Recipe Full Modal */}
      {activeRecipe && (
        <RecipeModal
          recipe={activeRecipe}
          onClose={() => setActiveRecipe(null)}
        />
      )}
    </section>
  );
};
