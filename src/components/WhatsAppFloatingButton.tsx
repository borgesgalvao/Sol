import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { DOCTOR_INFO } from '../data/nutritionData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="bg-white text-stone-800 text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-xl border border-stone-200/90 flex items-center gap-2 max-w-xs animate-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Dúvidas sobre a consulta? Fale comigo!</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-600 ml-1"
          >
            ✕
          </button>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dra.%20Emilly!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20nutricionais.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#2A3F30] to-[#3F5E48] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center relative group border-2 border-white"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCA056] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#CCA056] border-2 border-white"></span>
        </span>
        <Phone className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};
