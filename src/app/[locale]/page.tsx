"use client";
import dynamic from 'next/dynamic';

// Componentes estáticos (sin useState)
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import PhilosophySection from '@/components/PhilosophySection';
import TreatmentsSection from '@/components/TreatmentsSection';
import DrFaceSection from '@/components/DrFaceSection';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import FloatingContactButton from '@/components/FloatingContactButton';

// Componente reutilizable para los estados de carga
const LoadingFallback = ({
  className,
  textKey,
  textColor = "text-blue-900"
}: {
  className: string,
  textKey: string,
  textColor?: string
}) => {
  const t = useTranslations('ui');
  return (
    <div className={className}>
      <div className={`${textColor} text-xl`}>{t(textKey)}</div>
    </div>
  );
};

// Componentes dinámicos (con useState) - se cargan solo en el cliente
const HeroSlider = dynamic(() => import('@/components/HeroSlider'), {
  ssr: false,
  loading: () => (
    <LoadingFallback
      className="h-screen bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 flex items-center justify-center"
      textKey="loading"
      textColor="text-white"
    />
  )
});

const SurgicalProceduresSection = dynamic(() => import('@/components/SurgicalProceduresSection'), {
  ssr: false,
  loading: () => (
    <LoadingFallback
      className="h-96 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center"
      textKey="loading_procedures"
      textColor="text-amber-800"
    />
  )
});

const ResultsGallerySection = dynamic(() => import('@/components/ResultsGallerySection'), {
  ssr: false,
  loading: () => (
    <LoadingFallback
      className="h-96 bg-white flex items-center justify-center"
      textKey="loading_gallery"
    />
  )
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  ssr: false,
  loading: () => (
    <LoadingFallback
      className="h-96 bg-gray-50 flex items-center justify-center"
      textKey="loading_testimonials"
    />
  )
});

const AccreditationsSection = dynamic(() => import('@/components/AccreditationsSection'), {
  ssr: false,
  loading: () => (
    <LoadingFallback
      className="h-64 bg-white flex items-center justify-center"
      textKey="loading_accreditations"
    />
  )
});

const FourCardsSection = dynamic(() => import('@/components/FourCardsSection'), {
  ssr: false,
  loading: () => (
    <LoadingFallback
      className="h-96 bg-gray-100 flex items-center justify-center"
      textKey="loading_services"
      textColor="text-gray-800"
    />
  )
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <AccreditationsSection />
      <WelcomeSection />
      <FourCardsSection />
      <PhilosophySection />
      <TreatmentsSection />
      <SurgicalProceduresSection />
      <ResultsGallerySection />
      <TestimonialsSection />
      <DrFaceSection />
      <Footer />

      {/* Botón flotante de contacto */}
      <FloatingContactButton />
    </main>
  );
}