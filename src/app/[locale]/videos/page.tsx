import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideosClientContent from './VideosClientContent';

const locales = ['es', 'en'];

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: locale === 'es' 
      ? 'Videoteca de Cirugía Plástica en Bogotá | Dr. Andrés Pérez'
      : 'Plastic Surgery Video Library in Bogota | Dr. Andres Perez',
    description: locale === 'es'
      ? 'Aprende sobre lifting facial, explantación mamaria y cirugía plástica en videos cortos explicados por el Dr. Andrés Pérez Nieto.'
      : 'Learn about facelifts, breast explants, and plastic surgery in short videos explained by Dr. Andres Perez.',
    alternates: {
      canonical: `https://www.drandrespereznieto.com/${locale}/videos/`,
      languages: {
        'es-CO': `https://www.drandrespereznieto.com/es/videos/`,
        'en-US': `https://www.drandrespereznieto.com/en/videos/`,
        'x-default': `https://www.drandrespereznieto.com/es/videos/`
      }
    }
  };
}

export default async function VideosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <VideosClientContent locale={locale} />
      </main>
      <Footer />
    </div>
  );
}
