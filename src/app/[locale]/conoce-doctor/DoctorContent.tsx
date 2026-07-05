"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

// Componentes estáticos
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ✅ BANNER DEL DOCTOR - CON IMAGEN RESPONSIVE PARA TODOS LOS DISPOSITIVOS
const DoctorBanner = () => {
  const t = useTranslations('doctor_page');
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#babdb3' }}>
      {/* Imagen responsiva para móviles - centrada */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url('/images/dr-perez.webp')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Imagen para desktop - posición derecha */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url('/images/dr-perez-banner-2.webp')`,
          backgroundPosition: 'center right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-6 py-12 md:py-20 min-h-screen flex items-center">
        <div className="max-w-2xl text-white space-y-6 md:space-y-8 text-center md:text-left">
          {/* Imagen de la firma manuscrita - RESPONSIVE */}
          <div className="mb-8 md:mb-12">
            <Image
              src="/images/firma-andres.png"
              alt="Andrés Pérez - Firma"
              width={1200}
              height={800}
              className="h-40 sm:h-60 md:h-80 w-auto mb-4 mx-auto md:mx-0"
              priority
            />
          </div>

          {/* Subtítulo - CON FUENTE SANSATION RESPONSIVE */}
          <h2 className="font-sansation text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide mb-6 md:mb-8">
            {t('subtitle')}
          </h2>
        </div>
      </div>
    </section>
  );
};

// ✅ GUIADO POR SU PASIÓN - TEXTOS AZUL #1d3c5d CON FUENTES CORRECTAS Y LÍNEA
const PassionSection = () => {
  const t = useTranslations('doctor_page');
  return (
    <section className="pb-0 pt-12 md:pt-16" style={{ backgroundColor: '#babdb3' }}>
      <div className="container mx-auto px-6 max-w-5xl pb-12 md:pb-16">
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <h2 className="font-prototype text-3xl md:text-4xl lg:text-5xl font-normal mb-4" style={{ color: '#1d3c5d' }}>
            {t('passion_section_title')}
          </h2>
          {/* Línea decorativa debajo del título */}
          <div className="w-90 md:w-110 h-1 mx-auto md:mx-0 mb-6" style={{ backgroundColor: '#1d3c5d' }} />
        </div>

        <div className="font-sansation space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
          <p dangerouslySetInnerHTML={{ __html: t.raw('passion_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t.raw('passion_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t.raw('passion_p3') }} />
          <p>{t('passion_p4')}</p>
        </div>
      </div>
    </section>
  );
};

// ✅ EDUCACIÓN - TÍTULO AZUL #1d3c5d CON FUENTE PROTOTYPE
const EducationSection = () => {
  const t = useTranslations('doctor_page');
  return (
    <section className="pt-0 pb-12 md:pb-16 bg-white">
      <div className="w-full">
        {/* Barra azul de lado a lado - AZUL #1d3c5d */}
        <div className="w-full py-4 md:py-6 mb-12 md:mb-16" style={{ backgroundColor: '#1d3c5d' }}>
          <h2 className="font-prototype text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center">
            {t('education_title')}
          </h2>
        </div>

        {/* Logos de universidades - RESPONSIVE */}
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 lg:space-x-24 max-w-6xl mx-auto">
            <div className="text-center">
              <Image
                src="/images/rosario.webp"
                alt="Universidad del Rosario"
                width={200}
                height={200}
                className="w-32 h-32 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain mb-4"
              />
            </div>

            <div className="text-center">
              <Image
                src="/images/nacional.webp"
                alt="Universidad Nacional"
                width={200}
                height={200}
                className="w-32 h-32 md:w-48 md:h-48 lg:w-130 lg:h-52 object-contain mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ FILOSOFÍA DEL DOCTOR - FONDO CON DEGRADADO RADIAL AZUL Y FUENTES CORRECTAS
const PhilosophySection = () => {
  const t = useTranslations('doctor_page');
  return (
    <section
      className="py-12 md:py-20 text-white"
      style={{
        background: 'radial-gradient(circle at center,rgba(37, 100, 235, 0.92) 0%, #1d3c5d 70%)'
      }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-prototype text-2xl md:text-4xl lg:text-5xl font-normal mb-8 md:mb-12 leading-tight text-center md:text-left">
          {t('philosophy_title')}
        </h2>

        <div className="font-sansation space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
          <p>{t('philosophy_p1')}</p>
          <p>{t('philosophy_p2')}</p>
          <p>{t('philosophy_p3')}</p>
        </div>
      </div>
    </section>
  );
};

// ✅ COMPROMISO SOCIAL - TEXTOS AZUL #1d3c5d CON FUENTES CORRECTAS
const SocialCommitmentSection = () => {
  const t = useTranslations('doctor_page');
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#babdb3' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="font-prototype text-3xl md:text-4xl lg:text-5xl font-normal text-center mb-12 md:mb-16" style={{ color: '#1d3c5d' }}>
          {t('social_commitment_title')}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="font-sansation space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed order-2 lg:order-1" style={{ color: '#1d3c5d' }}>
            <p>{t('social_commitment_p1')}</p>
            <p>{t('social_commitment_p2')}</p>
          </div>

          <div className="relative order-1 lg:order-2">
            <Image
              src="/images/imgsocial.webp"
              alt="Equipo Médico - Misión Social"
              width={600}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ PÁGINA COMPLETAMENTE CORREGIDA CON FUENTES Y COLORES
export default function DoctorPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <DoctorBanner />
      <PassionSection />
      <EducationSection />
      <PhilosophySection />
      <SocialCommitmentSection />
      <Footer />
    </main>
  );
}