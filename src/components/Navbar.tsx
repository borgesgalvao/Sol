import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  Calculator, 
  Heart, 
  Award,
  ChevronRight
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/nutritionData';

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
  onOpenCalculator: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenBooking, 
  onOpenCalculator,
  onOpenQuiz 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Calculadora & IMC', href: '#calculadora' },
    { label: 'Planos', href: '#planos' },
    { label: 'Receitas', href: '#receitas' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F8F4E8]/95 backdrop-blur-md shadow-xs border-b border-stone-300/60 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top micro bar for CRN and contact */}
      <div className="hidden lg:block border-b border-stone-200 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-stone-600">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#3F5E48] bg-[#EAF2EC] px-2.5 py-0.5 rounded-full border border-[#D0E2D4]">
              <Award className="w-3.5 h-3.5 text-[#5D8467]" />
              {DOCTOR_INFO.crn}
            </span>
            <span className="text-stone-600 font-medium">
              Consultas Presenciais (Vespasiano - MG) & Online (Mundo)
            </span>
          </div>
          <div className="flex items-center gap-5">
            <button 
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 text-[#8F6623] hover:text-black font-semibold cursor-pointer transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CCA056]" />
              Quiz: Descubra seu Perfil Nutricional
            </button>
            <span className="text-stone-300">|</span>
            <a 
              href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dra.%20Emilly!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20nutricionais.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-800 hover:text-[#3F5E48] font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#5D8467]" />
              {DOCTOR_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#3F5E48] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-white fill-white/20" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-black tracking-tight text-lg sm:text-xl font-['Playfair_Display',serif]">
                  Dra. Emilly Juliana
                </span>
              </div>
              <p className="text-[11px] text-[#3F5E48] font-semibold tracking-wider uppercase -mt-0.5">
                Nutrição Integrativa & Esportiva
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-stone-700 hover:text-[#3F5E48] transition-colors py-1 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-calculator-btn"
              onClick={onOpenCalculator}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-black bg-[#F8F4E8] hover:bg-[#F5EAD4] rounded-xl transition-colors border border-[#ECCB9B]"
            >
              <Calculator className="w-3.5 h-3.5 text-[#8F6623]" />
              Calculadora de Macros
            </button>

            <button
              id="nav-booking-cta-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-black hover:bg-[#3F5E48] rounded-xl shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#CCA056]" />
              Agendar Consulta
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3.5 py-1.5 text-xs font-bold text-white bg-black rounded-lg"
            >
              Agendar
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-[#3F5E48] hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 shadow-xl px-4 pt-3 pb-6 mt-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="py-2 border-b border-stone-100">
            <span className="text-xs font-semibold text-[#3F5E48] bg-[#EAF2EC] px-2.5 py-1 rounded-md">
              {DOCTOR_INFO.crn} • {DOCTOR_INFO.title}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-1 py-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between text-left text-sm font-medium text-stone-800 hover:text-[#3F5E48] hover:bg-[#EAF2EC] px-3 py-2 rounded-lg transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-[#8F6623] bg-[#FBF4E8] border border-[#ECCB9B] rounded-xl"
            >
              <Sparkles className="w-4 h-4 text-[#CCA056]" />
              Fazer Quiz do Perfil Nutricional
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-black hover:bg-[#3F5E48] rounded-xl shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#CCA056]" />
              Agendar Consulta Agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
