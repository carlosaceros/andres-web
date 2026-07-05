import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface PhilosophySectionProps {
  buttonUrl?: string;
  buttonText?: string;
  isExternalLink?: boolean;
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  buttonUrl = "/dr-face",
  buttonText, // Remove default here, set in component
  isExternalLink = false
}) => {
  const t = useTranslations('home');
  const finalButtonText = buttonText || t('more_information_btn');

  const ButtonComponent = () => (
    <button className="border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-sansation font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 cursor-pointer">
      {finalButtonText}
    </button>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo para desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/images/fondo-negro-chica.webp"
          alt={t('philosophy_bg_desktop_alt')}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block';
          }}
        />
        {/* Fallback para desktop */}
        <div className="w-full h-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 hidden">
          <div className="w-full h-full bg-gradient-to-br from-black/60 to-black/40 flex items-center justify-center">
            <div className="text-center text-white/30">
              <p className="text-sm font-sansation">{t('philosophy_bg_desktop_fallback')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen de fondo para móvil */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <img
          src="/images/fondo-negro-movil.png"
          alt={t('philosophy_bg_mobile_alt')}
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block';
          }}
        />
        {/* Fallback para móvil */}
        <div className="w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 hidden">
          <div className="w-full h-full bg-gradient-to-br from-black/60 to-black/40 flex items-center justify-center">
            <div className="text-center text-white/30">
              <p className="text-sm font-sansation">{t('philosophy_bg_mobile_fallback')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/40 z-10"></div>

      {/* Contenido principal */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Contenido de texto */}
          <div className="space-y-6 md:space-y-8 text-white text-center md:text-left">
            {/* Título con fuente Prototype - Responsivo */}
            <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
              {t('philosophy_title')}
            </h2>

            <div className="space-y-4 md:space-y-6">
              {/* Texto descriptivo con fuente Sansation - Responsivo */}
              <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed text-white/90 max-w-2xl mx-auto md:mx-0">
                {t('philosophy_p1_part1')}
                <span className="font-sansation font-bold">{t('philosophy_p1_part2')}</span>
                {t('philosophy_p1_part3')}
              </p>
            </div>

            <div className="pt-2 md:pt-4">
              {isExternalLink ? (
                <a href={buttonUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <ButtonComponent />
                </a>
              ) : (
                <Link href={buttonUrl} className="cursor-pointer">
                  <ButtonComponent />
                </Link>
              )}
            </div>
          </div>

          {/* Espacio reservado para el lado derecho en desktop */}
          <div className="relative hidden lg:block">
            {/* Esta área está cubierta por la imagen de fondo en desktop */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;