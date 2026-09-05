/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { MethodologySection } from './components/MethodologySection';
import { NutritionalCalculator } from './components/NutritionalCalculator';
import { PlansSection } from './components/PlansSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { RecipesSection } from './components/RecipesSection';
import { FAQSection } from './components/FAQSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HabitQuizModal } from './components/HabitQuizModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Programa Transformação 90 Dias');
  const [calculatedSummary, setCalculatedSummary] = useState<string>('');

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingModalOpen(true);
  };

  const handleOpenCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleWithCalculatedData = (summary: string) => {
    setCalculatedSummary(summary);
    setSelectedService('Consulta com Diagnóstico Personalizado');
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F4E8] text-stone-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenCalculator={handleOpenCalculator}
        onOpenQuiz={() => setIsQuizModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenCalculator={handleOpenCalculator}
          onOpenQuiz={() => setIsQuizModalOpen(true)}
        />

        <AboutSection
          onOpenBooking={() => handleOpenBooking('Consulta Essencial 360°')}
        />

        <SpecialtiesSection
          onSelectSpecialtyForBooking={(specialtyTitle) => handleOpenBooking(`Especialidade: ${specialtyTitle}`)}
        />

        <MethodologySection
          onOpenBooking={() => handleOpenBooking('Programa Transformação 90 Dias')}
        />

        <NutritionalCalculator
          onScheduleWithData={handleScheduleWithCalculatedData}
        />

        <PlansSection
          onSelectPlan={(planTitle) => handleOpenBooking(planTitle)}
        />

        <TestimonialsSection />

        <RecipesSection />

        <FAQSection />

        <BookingSection
          onOpenBookingModal={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenCalculator={handleOpenCalculator}
        onOpenQuiz={() => setIsQuizModalOpen(true)}
      />

      {/* Floating Action Button */}
      <WhatsAppFloatingButton />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={selectedService}
        calculatedDataSummary={calculatedSummary}
      />

      <HabitQuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        onOpenBooking={(serviceName) => handleOpenBooking(serviceName || 'Quiz de Hábitos')}
      />
    </div>
  );
}
