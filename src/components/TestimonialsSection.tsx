import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { TESTIMONIALS } from '../data/nutritionData';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filteredTestimonials = activeFilter === 'todos'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => {
        if (activeFilter === 'emagrecimento') return t.goal.toLowerCase().includes('emagrecimento');
        if (activeFilter === 'hipertrofia') return t.goal.toLowerCase().includes('hipertrofia');
        if (activeFilter === 'saude') return t.goal.toLowerCase().includes('saúde') || t.goal.toLowerCase().includes('esteatose');
        return true;
      });

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#F8F4E8] border-b border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3F5E48] bg-[#EAF2EC] px-3.5 py-1.5 rounded-full border border-[#D0E2D4]">
            Histórias de Transformação
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-['Playfair_Display',serif] mt-4 tracking-tight">
            Resultados Reais de Pacientes que Transformaram sua Saúde
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            O sucesso de um acompanhamento nutricional se mede em mais energia, exames normalizados, autoestima e autonomia.
          </p>

          {/* Metric Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-stone-200 shadow-2xs">
              <Star className="w-4 h-4 fill-[#CCA056] text-[#CCA056]" />
              <span className="text-xs font-bold text-black">4.9 / 5.0 no Google Avaliações</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-stone-200 shadow-2xs">
              <TrendingUp className="w-4 h-4 text-[#3F5E48]" />
              <span className="text-xs font-bold text-black">+2.500 Vidas Impactadas</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Top: Star rating & Achievement badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#CCA056] text-[#CCA056]" />
                    ))}
                  </div>
                  {testimonial.highlightMetric && (
                    <span className="text-xs font-bold text-[#2A3F30] bg-[#EAF2EC] px-3 py-1 rounded-full border border-[#D0E2D4]">
                      {testimonial.highlightMetric}
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  “{testimonial.quote}”
                </p>

                {/* Goal and Achievement highlights */}
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200 mb-6">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-stone-500">Objetivo:</span>
                    <span className="font-semibold text-black">{testimonial.goal}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">Conquista:</span>
                    <span className="font-bold text-[#3F5E48]">{testimonial.achievement}</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Patient Profile */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#3F5E48]/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-black">
                      {testimonial.name}, {testimonial.age} anos
                    </h4>
                    <p className="text-xs text-stone-500">
                      {testimonial.occupation} • {testimonial.city}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-medium text-stone-400">
                  {testimonial.timeframe}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
