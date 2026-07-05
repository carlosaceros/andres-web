"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

export default function AccreditationsSection() {
  const t = useTranslations('accreditations');
  const accreditations = [
    { 
      logo: "/images/isaps.png", // Logo real de ISAPS
      url: "https://www.isaps.org/",
      name: t('isaps_name'),
      fullName: t('isaps_full_name'),
      placeholder: "🏥"
    },
    {
      logo: "/images/asps-logo.png", // Logo real de ASPS
      url: "https://www.plasticsurgery.org/",
      name: t('asps_name'),
      fullName: t('asps_full_name'),
      placeholder: "🏥"
    },
    {
      logo: "/images/logo-sccp.png", // Logo real de SCCP
      url: "https://www.cirugiaplastica.org.co/",
      name: t('sccp_name'),
      fullName: t('sccp_full_name'),
      placeholder: "🏥"
    },
    {
      logo: "/images/LogoWeb2025Desktop.png", // Logo real de FILACP
      url: "https://www.filacp.org/",
      name: t('filacp_name'),
      fullName: t('filacp_full_name'),
      placeholder: "🏥"
    }
  ];

  return (
    <section className="bg-white">
      {/* Header con el color azul correcto */}
      <div style={{ backgroundColor: '#1d3c5d' }} className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-prototype text-white text-3xl md:text-4xl font-normal text-center">
            {t('main_title')}
          </h2>
        </div>
      </div>

      {/* Logos Grid con líneas divisorias */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 items-center relative">
          {accreditations.map((accreditation, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Líneas divisorias verticales (solo en desktop) */}
              {index < accreditations.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-20 bg-gray-300"></div>
              )}
              
              {/* Logo Container */}
              <a
                href={accreditation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center transition-all duration-300 hover:scale-105 px-8"
              >
                {/* Logo */}
                <div className="w-32 h-24 md:w-40 md:h-28 mb-4 flex items-center justify-center">
                  <img
                    src={accreditation.logo}
                    alt={accreditation.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      // Si no encuentra la imagen, muestra el placeholder
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-full bg-gray-100 rounded-lg hidden items-center justify-center group-hover:bg-gray-50 transition-colors">
                    <span className="text-4xl md:text-6xl opacity-50">{accreditation.placeholder}</span>
                  </div>
                </div>

                {/* Organization Name */}
                <div className="text-center">
                  <h3 className="font-sansation font-bold text-sm md:text-base text-gray-800 mb-1 group-hover:text-[#1d3c5d] transition-colors">
                    {accreditation.name}
                  </h3>
                  <p className="font-sansation text-xs md:text-sm text-gray-600 leading-tight max-w-xs">
                    {accreditation.fullName}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}