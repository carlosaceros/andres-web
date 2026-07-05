"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import { useTranslations } from 'next-intl';

// Componente dinámico para el botón flotante
const FloatingContactButton = dynamic(() => import('@/components/FloatingContactButton'), {
  ssr: false
});

// Sección: Video Banner con Título
const VideoBanner = () => {
  const t = useTranslations('instalaciones');

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
            // Si el video falla, mostrar imagen de respaldo
            e.currentTarget.style.display = 'none';
            const nextSibling = e.currentTarget.nextElementSibling;
            if (nextSibling) {
              (nextSibling as HTMLElement).style.display = 'block';
            }
          }}
        >
          {/* Múltiples formatos para mejor compatibilidad */}
          <source src="https://media.drandrespereznieto.com/images/videos/edificio.webm" type="video/webm" />
          {/*<source src="https://media.drandrespereznieto.com/images/videos/edificio.mp4" type="video/mp4" />*/}
          Tu navegador no soporta el elemento video.
        </video>

        {/* Imagen de respaldo si el video no carga */}
        <div
          className="w-full h-full hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,0.1) 50%, rgba(0, 0, 0, 0) 100%),
              url('/images/santa-ana.jpg'),
              linear-gradient(135deg, #34495e 0%, #2c3e50 100%)
            `
          }}
        />
      </div>

      {/* Overlay oscuro para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <div className="text-white">
            <h1 className="font-prototype text-4xl md:text-5xl lg:text-6xl font-normal text-white drop-shadow-lg">
              {t('title')}
            </h1>
            <p className="font-sansation text-lg md:text-xl lg:text-2xl mt-6 text-white/90 drop-shadow">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Consultorio
const ConsultorioSection = () => {
  const t = useTranslations('instalaciones');

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackText: string) => {
    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${encodeURIComponent(fallbackText)}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-prototype text-3xl md:text-4xl lg:text-5xl font-normal mb-4 text-[#1d3c5d]">
              {t('consultorio_title')}
            </h2>
            <div className="w-40 md:w-58 h-1 mb-8 bg-[#1d3c5d]" />

            <div className="font-sansation space-y-4 text-base md:text-lg leading-relaxed max-w-4xl text-[#1d3c5d]">
              <p dangerouslySetInnerHTML={{ __html: t.raw('consultorio_p1') }} />
              <p>{t('consultorio_p2')}</p>
            </div>
          </div>

          {/* Galería de imágenes del consultorio */}
          <div className="space-y-8">
            {/* Primera fila - 3 fotos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Imagen 1 - Placa del consultorio */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/placa-andres.webp"
                  alt="Placa del consultorio Dr. Andrés Pérez"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => handleImageError(e, 'Placa Consultorio')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Imagen 2 - Consultorio principal */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/ofis1.webp"
                  alt="Consultorio principal"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => handleImageError(e, 'Consultorio Principal')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Imagen 3 - Sala de espera */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/ofis2.webp"
                  alt="Sala de espera"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => handleImageError(e, 'Sala de Espera')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Segunda fila - 2 fotos centradas */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                {/* Imagen 4 - Recepción */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/ofis3.webp"
                    alt="Área de recepción"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => handleImageError(e, 'Recepción')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Imagen 5 - Oficina */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/ofis4.webp"
                    alt="Oficina del doctor"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => handleImageError(e, 'Oficina del Doctor')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección: Salas de cirugía
const SalasCirugiaSection = () => {
  const t = useTranslations('instalaciones');

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='300' y='200' text-anchor='middle' font-family='Arial' font-size='18' fill='%236b7280'%3ESala de Cirugía%3C/text%3E%3C/svg%3E`;
  };

  return (
    <section className="py-20 bg-[#babdb3]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Contenido de texto */}
            <div className="space-y-6">
              <h2 className="font-prototype text-3xl md:text-4xl lg:text-5xl font-normal mb-8 text-[#1d3c5d]">
                {t('surgery_rooms_title')}
              </h2>

              <div className="font-sansation space-y-6 text-base md:text-lg leading-relaxed text-[#1d3c5d]">
                <p>{t('surgery_rooms_p1')}</p>
                <p>{t('surgery_rooms_p2')}</p>
                <p>{t('surgery_rooms_p3')}</p>
              </div>
            </div>

            {/* Imagen de la sala de cirugía */}
            <div className="relative">
              <div className="relative group overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/images/sala-opera.webp"
                  alt="Sala de cirugía especializada"
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Elementos decorativos con color azul #1d3c5d */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-2xl bg-[#1d3c5d]/10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full blur-3xl bg-[#1d3c5d]/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ClientContent() {
  return (
    <>
      {/* Video Banner: Instalaciones y Staff */}
      <VideoBanner />

      {/* Sección: Consultorio */}
      <ConsultorioSection />

      {/* Sección: Salas de cirugía */}
      <SalasCirugiaSection />

      {/* Botón flotante de contacto */}
      <FloatingContactButton />
    </>
  );
}
