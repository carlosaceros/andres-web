"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function HeroBanner() {
  const t = useTranslations('home');
  const [showConsultaMenu, setShowConsultaMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowConsultaMenu(false);
      }
    };

    if (showConsultaMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showConsultaMenu]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        {/* Imagen para móvil */}
        <img
          src="/images/slider1movil.webp"
          alt={t('dr_perez_nieto')}
          className="block md:hidden w-full h-full object-cover object-center"
        />

        {/* Imagen para desktop */}
        <img
          src="/images/slider1.webp"
          alt={t('dr_perez_nieto')}
          className="hidden md:block w-full h-full object-cover object-right"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = "/images/slider1.webp";
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="container mx-auto px-6 mb-8 md:mb-0">
          <div className="max-w-xs mx-auto md:max-w-2xl md:mx-0 text-center md:text-left">
            {/* Título */}
            <h1 className="font-prototype text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white leading-tight mb-3 md:mb-4">
              {t('dr_perez_nieto')}
            </h1>

            {/* Subtítulo */}
            <h2 className="font-sansation font-bold text-base md:text-lg lg:text-3xl text-white mb-3 md:mb-4">
              {t('international_plastic_surgeon')}
            </h2>

            {/* Línea */}
            <div className="w-40 sm:w-49 md:w-84 lg:w-97 h-0.5 bg-white mx-auto md:mx-0 mb-4 md:mb-4"></div>

            {/* Descripción */}
            <p className="font-sansation font-normal text-sm md:text-base lg:text-lg text-white mb-14 md:mb-12">
              {t('experience_makes_difference')}
            </p>

            {/* Botones de navegación */}
            <div className="grid grid-cols-4 gap-2 md:gap-4 justify-center md:justify-start max-w-md mx-auto md:mx-0">
              {/* Botón 1 - Conoce al Doctor */}
              <button
                className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer hover:opacity-90"
                style={{ backgroundColor: '#babdb3' }}
                onClick={() => window.location.href = '/conoce-doctor'}
              >
                <img
                  src="/images/iconos/doctor.png"
                  alt={t('doctor_icon_alt')}
                  className="w-6 h-6 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain mb-1"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) nextElement.style.display = 'block';
                  }}
                />
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-1 hidden"
                  style={{ color: '#1d3c5d' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span className="font-sansation font-bold text-[9px] md:text-xs text-gray-700 text-center leading-tight">
                  {t('meet_the_doctor_btn')}
                </span>
              </button>

              {/* Botón 2 - Consulta Virtual CON MENÚ */}
              <div className="relative" ref={menuRef}>
                <button
                  className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer hover:opacity-90"
                  style={{ backgroundColor: '#babdb3' }}
                  onClick={() => setShowConsultaMenu(!showConsultaMenu)}
                >
                  <img
                    src="/images/iconos/video-llamada.png"
                    alt={t('virtual_consultation_icon_alt')}
                    className="w-6 h-6 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain mb-1"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) nextElement.style.display = 'block';
                    }}
                  />
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-1 hidden"
                    style={{ color: '#1d3c5d' }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                  <span className="font-sansation font-bold text-[9px] md:text-xs text-gray-700 text-center leading-tight">
                    {t('virtual_consultation_btn_drface')}
                  </span>
                </button>

                {/* Menú desplegable */}
                {showConsultaMenu && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl border border-gray-200 p-2 min-w-[200px] z-50">
                    <button
                      onClick={() => {
                        window.open(`https://wa.me/573164953755?text=${encodeURIComponent(t('whatsapp_virtual_consultation_message'))}`, '_blank')
                        setShowConsultaMenu(false)
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-50 transition-colors text-left"
                    >
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <div>
                        <div className="font-sansation font-bold text-gray-800 text-sm">{t('whatsapp_chat_title')}</div>
                        <div className="font-sansation text-xs text-gray-500">{t('whatsapp_chat_description')}</div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        window.location.href = '/paciente-extranjero'
                        setShowConsultaMenu(false)
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors text-left mt-1"
                    >
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <div>
                        <div className="font-sansation font-bold text-gray-800 text-sm">{t('website_page_title')}</div>
                        <div className="font-sansation text-xs text-gray-500">{t('more_information_description')}</div>
                      </div>
                    </button>

                    {/* Flecha del menú */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45"></div>
                  </div>
                )}
              </div>

              {/* Botón 3 - Agenda Cita */}
              <button
                className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer hover:opacity-90"
                style={{ backgroundColor: '#babdb3' }}
                onClick={() => window.open(`https://wa.me/573164953755?text=${encodeURIComponent(t('whatsapp_schedule_appointment_message'))}`, '_blank')}
              >
                <img
                  src="/images/iconos/calendario.png"
                  alt={t('schedule_appointment_icon_alt')}
                  className="w-6 h-6 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain mb-1"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) nextElement.style.display = 'block';
                  }}
                />
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-1 hidden"
                  style={{ color: '#1d3c5d' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
                <span className="font-sansation font-bold text-[9px] md:text-xs text-gray-700 text-center leading-tight">
                  {t('schedule_appointment_btn_drface')}
                </span>
              </button>

              {/* Botón 4 - Galería */}
              <button
                className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer hover:opacity-90"
                style={{ backgroundColor: '#babdb3' }}
                onClick={() => window.location.href = '/galeria'}
              >
                <img
                  src="/images/iconos/imagen.png"
                  alt={t('gallery_icon_alt')}
                  className="w-6 h-6 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain mb-1"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) nextElement.style.display = 'block';
                  }}
                />
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-1 hidden"
                  style={{ color: '#1d3c5d' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                <span className="font-sansation font-bold text-[9px] md:text-xs text-gray-700 text-center leading-tight">
                  {t('gallery_btn')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}