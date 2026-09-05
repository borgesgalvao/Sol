import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { FAQS } from '../data/nutritionData';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('convenio');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(f => 
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8F4E8] border-b border-stone-300/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3F5E48] bg-[#EAF2EC] px-3.5 py-1.5 rounded-full border border-[#D0E2D4]">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-['Playfair_Display',serif] mt-4 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Tudo o que você precisa saber sobre o funcionamento das consultas, reembolso de convênio e o acompanhamento.
          </p>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar dúvida (ex: convênio, online, exames)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-stone-200 bg-white text-black text-sm focus:outline-[#3F5E48] transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBF4E8] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-black font-['Playfair_Display',serif] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#EAF2EC] border-[#D0E2D4]' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-[#3F5E48]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-stone-700 text-sm sm:text-base leading-relaxed border-t border-stone-200/60 bg-white animate-in fade-in-50 duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-stone-500 text-sm">
              Nenhuma pergunta encontrada para sua busca. Envie sua dúvida diretamente para a Nutri pelo WhatsApp!
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
