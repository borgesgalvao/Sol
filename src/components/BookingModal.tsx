import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Send, 
  MapPin, 
  Laptop, 
  Sparkles, 
  ShieldCheck, 
  Phone,
  User,
  Mail
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BookingFormData } from '../types';
import { DOCTOR_INFO, PLANS } from '../data/nutritionData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  calculatedDataSummary?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose,
  initialService = 'Programa Transformação 90 Dias',
  calculatedDataSummary = ''
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: initialService,
    modality: 'online',
    mainGoal: 'Emagrecimento Saudável',
    preferredPeriod: 'manha',
    preferredDate: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#059669', '#10B981', '#34D399', '#F59E0B']
    });
  };

  const handleSendToWhatsAppDirectly = () => {
    const shiftMap = {
      manha: 'Manhã (08h às 12h)',
      tarde: 'Tarde (13h às 18h)',
      noite: 'Noite (18h às 21h)'
    };

    const text = `Olá, Dra. Emilly! Gostaria de agendar uma consulta nutricional:
- *Nome:* ${formData.fullName}
- *Telefone:* ${formData.phone}
- *E-mail:* ${formData.email || 'Não informado'}
- *Serviço de Interesse:* ${formData.serviceType}
- *Modalidade:* ${formData.modality === 'online' ? '🌐 Online (Videochamada)' : '📍 Presencial (Vespasiano - MG)'}
- *Objetivo:* ${formData.mainGoal}
- *Período Preferido:* ${shiftMap[formData.preferredPeriod]}
${formData.preferredDate ? `- *Data Preferencial:* ${formData.preferredDate}` : ''}
${calculatedDataSummary ? `- *Dados da Calculadora:* ${calculatedDataSummary}` : ''}
${formData.message ? `- *Observações:* ${formData.message}` : ''}

Poderia me informar as próximas datas disponíveis na agenda? Obrigado(a)!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[92vh] overflow-y-auto">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-2 rounded-xl hover:bg-stone-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3F5E48] bg-[#EAF2EC] px-3 py-1 rounded-full border border-[#D0E2D4]">
                Agendamento de Consulta
              </span>
              <h3 className="text-2xl font-bold text-black font-['Playfair_Display',serif] mt-2">
                Dê o Primeiro Passo Rumo à Sua Nova Rotina
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Preencha seus dados para receber o contato da nossa equipe com as opções de data e horário.
              </p>
            </div>

            {calculatedDataSummary && (
              <div className="mb-4 bg-[#EAF2EC] border border-[#D0E2D4] p-3 rounded-xl text-xs text-[#2A3F30]">
                <span className="font-bold text-[#3F5E48]">✓ Diagnóstico anexado:</span> {calculatedDataSummary}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: Amanda Silva"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-black text-sm focus:outline-[#3F5E48] focus:border-[#3F5E48] font-medium"
                  />
                </div>
              </div>

              {/* WhatsApp Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                    WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="(35) 99191-6168"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-black text-sm focus:outline-[#3F5E48] focus:border-[#3F5E48] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-black text-sm focus:outline-[#3F5E48] focus:border-[#3F5E48] font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Modality Toggle (Online vs Presencial) */}
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                  Modalidade de Atendimento Desejada
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, modality: 'online' }))}
                    className={`py-2.5 px-3 text-xs font-bold rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      formData.modality === 'online'
                        ? 'bg-black text-white border-black shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <Laptop className="w-4 h-4" />
                    <span>Online (Videochamada HD)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, modality: 'presencial' }))}
                    className={`py-2.5 px-3 text-xs font-bold rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      formData.modality === 'presencial'
                        ? 'bg-black text-white border-black shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Presencial (Vespasiano - MG)</span>
                  </button>
                </div>
              </div>

              {/* Service & Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                    Plano de Interesse
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-black text-xs font-medium focus:outline-[#3F5E48]"
                  >
                    <option value="Programa Transformação 90 Dias">Programa Transformação 90 Dias (Recomendado)</option>
                    <option value="Consulta Essencial 360°">Consulta Essencial 360° (Avulsa)</option>
                    <option value="Programa Premium Performance (6 Meses)">Programa Premium Performance (6 Meses)</option>
                    <option value="Nutrição para SOP e Hormônios">Nutrição para SOP & Hormônios</option>
                    <option value="Saúde Intestinal e Microbiota">Saúde Intestinal e Microbiota</option>
                    <option value="Nutrição Esportiva e Treino">Nutrição Esportiva & Treino</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                    Objetivo Principal
                  </label>
                  <select
                    value={formData.mainGoal}
                    onChange={(e) => setFormData(prev => ({ ...prev, mainGoal: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-black text-xs font-medium focus:outline-[#3F5E48]"
                  >
                    <option value="Emagrecimento Saudável">Emagrecimento & Queima de Gordura</option>
                    <option value="Hipertrofia e Massa Muscular">Hipertrofia & Definição Muscular</option>
                    <option value="Tratar Inchaço e Digestão">Tratar Inchaço, Gases e Digestão</option>
                    <option value="Regular Exames e Saúde">Regular Colesterol / Glicose / Exames</option>
                    <option value="Reeducação Alimentar">Reeducação Alimentar & Hábitos</option>
                  </select>
                </div>
              </div>

              {/* Preferred Shift */}
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                  Melhor Período para Consulta
                </label>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { id: 'manha', label: 'Manhã', sub: '08h - 12h' },
                    { id: 'tarde', label: 'Tarde', sub: '13h - 18h' },
                    { id: 'noite', label: 'Noite', sub: '18h - 21h' },
                  ].map((shift) => (
                    <button
                      key={shift.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, preferredPeriod: shift.id as any }))}
                      className={`p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        formData.preferredPeriod === shift.id
                          ? 'bg-black text-white border-black'
                          : 'bg-stone-50 text-stone-700 border-stone-200'
                      }`}
                    >
                      <p>{shift.label}</p>
                      <p className="text-[10px] text-stone-400 font-normal">{shift.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                  Observações ou Dúvidas (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Conte um pouco sobre sua rotina ou principais desafios..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-black text-xs focus:outline-[#3F5E48]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-sm font-bold text-white bg-black hover:bg-[#3F5E48] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#CCA056]" />
                  <span>Confirmar e Solicitar Horário</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendToWhatsAppDirectly}
                  className="w-full py-2.5 px-4 text-xs font-bold text-black bg-[#FBF4E8] hover:bg-[#F5EAD4] rounded-xl border border-[#ECCB9B] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#8F6623]" />
                  <span>Enviar Dados Diretamente no WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3F5E48]" />
                <span>Seus dados são 100% confidenciais e protegidos pela LGPD médica.</span>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#EAF2EC] text-[#3F5E48] border border-[#D0E2D4] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black font-['Playfair_Display',serif]">
                Solicitação Recebida com Sucesso!
              </h3>
              <p className="text-sm text-stone-600 mt-2 max-w-md mx-auto">
                Obrigado, <strong className="text-black">{formData.fullName}</strong>! Nossa equipe entrará em contato pelo seu WhatsApp (<strong className="text-black">{formData.phone}</strong>) para confirmar a data e o melhor horário.
              </p>
            </div>

            <div className="bg-[#F8F4E8] p-4 rounded-2xl border border-stone-200 text-left text-xs space-y-1.5 max-w-md mx-auto text-stone-700">
              <p><strong>Plano:</strong> {formData.serviceType}</p>
              <p><strong>Modalidade:</strong> {formData.modality === 'online' ? 'Online' : 'Presencial (Belo Horizonte)'}</p>
              <p><strong>Período Selecionado:</strong> {formData.preferredPeriod.toUpperCase()}</p>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={handleSendToWhatsAppDirectly}
                className="w-full py-3.5 px-4 text-sm font-bold text-white bg-black hover:bg-[#3F5E48] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#CCA056]" />
                <span>Iniciar Conversa no WhatsApp Agora</span>
              </button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="py-2.5 text-xs text-stone-500 hover:text-black font-semibold"
              >
                Voltar ao site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
