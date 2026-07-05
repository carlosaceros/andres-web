"use client";
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface Procedure {
  id: string;
  title: string;
  description: string;
  position: {
    top: string;
    left: string;
  };
  positionMobile: {
    top: string;
    left: string;
  };
}

const SurgicalProceduresSection = () => {
  const t = useTranslations('surgical_procedures');
  const [hoveredProcedure, setHoveredProcedure] = useState<string | null>(null);
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Procedimientos con coordenadas optimizadas para móvil
  const procedures: Procedure[] = [
    {
      id: 'blepharoplasty',
      title: 'Blefaroplastia',
      description: 'La cirugía de Blefaroplastia la realiza con tecnología láser o de radiofrecuencia permitiendo así una mínima inflamación postoperatoria y por ende un proceso de recuperación más corto.',
      position: { top: '33%', left: '42%' }, // Desktop
      positionMobile: { top: '44%', left: '42%' } // Móvil - Zona de ojos
    },
    {
      id: 'eyebrow-lift',
      title: 'Elevación Cola de Cejas',
      description: 'Las cejas al igual que otras áreas del rostro presentan con el proceso normal de envejecimiento un descenso gradual que cambia su apariencia y posición normales.',
      position: { top: '31%', left: '34%' }, // Desktop
      positionMobile: { top: '40%', left: '35%' } // Móvil - Zona de cejas
    },
    {
      id: 'otoplasty',
      title: 'Otoplastia',
      description: 'La Otoplastia es un procedimiento quirúrgico mediante el cual se puede corregir ciertas alteraciones en la forma y el tamaño de las orejas.',
      position: { top: '39%', left: '15%' }, // Desktop
      positionMobile: { top: '49%', left: '15%' } // Móvil - Zona de orejas
    },
    {
      id: 'rhinoplasty',
      title: 'Rinoplastia',
      description: 'Una excelente cirugía de nariz no es aquella que genera un cambio dramático en la apariencia y que no guarda un equilibrio estético con el resto del rostro.',
      position: { top: '45%', left: '53%' }, // Desktop
      positionMobile: { top: '53%', left: '55%' } // Móvil - Zona de nariz
    },
    {
      id: 'bichectomy',
      title: 'Bichectomía',
      description: 'La Bichectomía es un procedimiento quirúrgico que permite la extracción de las bolsas de Bichat con el propósito de lograr rostros más delgados.',
      position: { top: '45%', left: '29%' }, // Desktop
      positionMobile: { top: '54%', left: '29%' } // Móvil - Zona de mejillas
    },
    {
      id: 'lip-lift',
      title: 'Elevación del Labio',
      description: 'Consiste en la inyección de células grasas madre purificadas, dentro del espesor de los labios.',
      position: { top: '54%', left: '48%' }, // Desktop
      positionMobile: { top: '61%', left: '50%' } // Móvil - Zona de labios
    },
    {
      id: 'facelift',
      title: 'Lifting en Hamaca de Mejillas y Cuello',
      description: 'La estructura de los tejidos blandos de las mejillas y el cuello tiene una distribución que simula a una hamaca.',
      position: { top: '59%', left: '27%' }, // Desktop
      positionMobile: { top: '67%', left: '29%' } // Móvil - Zona de cuello
    },
    {
      id: 'lipofilling',
      title: 'Lipofilling de Células Madre',
      description: 'Al referirse a células madre, hoy en día es factible obtener células madre a partir de la grasa de nuestro propio cuerpo.',
      position: { top: '64%', left: '35%' }, // Desktop
      positionMobile: { top: '61%', left: '30%' } // Móvil - Zona facial lateral
    },
    {
      id: 'mentoplasty',
      title: 'Mentoplastia',
      description: 'Con alguna frecuencia el Dr. Pérez atiende pacientes que presentan mentones pequeños y retraídos.',
      position: { top: '65%', left: '52%' }, // Desktop
      positionMobile: { top: '70%', left: '52%' } // Móvil - Zona de mentón
    }
  ];

  // URLs específicas para cada procedimiento
  const procedureUrls = {
    'blepharoplasty': '/procedimientos/blefaroplastia',
    'eyebrow-lift': '/procedimientos/blefaroplastia',
    'otoplasty': '/procedimientos/otoplastia',
    'rhinoplasty': '/procedimientos/rinoplastia',
    'bichectomy': '/procedimientos/bichectomia',
    'lip-lift': '/procedimientos/lip-lift',
    'facelift': '/procedimientos/lifting-en-hamaca-de-mejilla-y-cuello',
    'lipofilling': '/procedimientos/lipofilling-celulas-madre',
    'mentoplasty': '/procedimientos/lipofilling-celulas-madre'
  };

  // Función para renderizar puntos según el dispositivo
  const renderPoint = (procedure: Procedure) => {
    const currentPosition = isMobile ? procedure.positionMobile : procedure.position;

    if (isMobile) {
      // PUNTOS MÓVILES - OPTIMIZADOS
      return (
        <div
          key={procedure.id}
          className="absolute cursor-pointer"
          style={{
            top: currentPosition.top,
            left: currentPosition.left,
            transform: 'translate(-50%, -50%)',
            zIndex: selectedProcedure === procedure.id ? 60 : 10,
          }}
          onClick={() => setSelectedProcedure(selectedProcedure === procedure.id ? null : procedure.id)}
        >
          {/* Punto visible */}
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            border: '0.5px solid rgba(255, 255, 255, 1)',
            borderRadius: '50%',
            position: 'relative',
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}>
            <div style={{
              width: '4px',
              height: '4px',
              backgroundColor: 'rgba(29, 60, 93, 0.4)',
              borderRadius: '50%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}></div>
          </div>

          {/* Área de toque ampliada */}
          <div style={{
            position: 'absolute',
            top: '-25px',
            left: '-25px',
            width: '62px',
            height: '62px',
            backgroundColor: 'transparent'
          }}></div>
        </div>
      );
    } else {
      // PUNTOS DESKTOP - SIN CAMBIOS
      return (
        <div
          key={procedure.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{
            top: currentPosition.top,
            left: currentPosition.left,
            zIndex: hoveredProcedure === procedure.id ? 60 : 10
          }}
          onMouseEnter={() => setHoveredProcedure(procedure.id)}
          onMouseLeave={() => setHoveredProcedure(null)}
        >
          <div className="relative">
            <div className="w-5 h-5 bg-white/20 border-2 border-white/40 rounded-full shadow-md hover:scale-125 hover:bg-white hover:border-white transition-all duration-300">
              <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-10"></div>
            </div>
            <div className="absolute inset-0 w-5 h-5 border-2 border-white rounded-full animate-ping opacity-15"></div>

            {/* Tooltip desktop */}
            {hoveredProcedure === procedure.id && (
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 ${parseInt(currentPosition.top) < 50 ? 'top-10' : 'bottom-10'}`} style={{ zIndex: 70 }}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-sansation text-lg font-bold text-gray-900 mb-3">
                    {procedure.title}
                  </h4>
                  <p className="font-sansation text-gray-600 text-xs leading-relaxed mb-4 max-h-24 overflow-y-auto">
                    {procedure.description}
                  </p>
                  <button
                    className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-2 rounded-full text-sm font-sansation font-bold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                    onClick={() => {
                      const url = procedureUrls[procedure.id as keyof typeof procedureUrls];
                      if (url) {
                        window.location.href = url;
                      }
                    }}
                  >
                    {t('more_information_btn')}
                  </button>
                </div>

                <div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 ${parseInt(currentPosition.top) < 50
                  ? 'bottom-full border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white'
                  : 'top-full border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white'
                  } drop-shadow-sm`}></div>
              </div>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <section style={{ backgroundColor: '#d2c1af' }} className="relative overflow-hidden">
      <div className="min-h-screen">
        {/* Layout móvil */}
        <div className="block lg:hidden">
          <div className="px-6 py-8 text-left">
            <h2 className="font-prototype text-4xl sm:text-5xl font-normal text-white leading-tight mb-2">
              {t('title_part1')}
            </h2>
            <h2 className="font-prototype text-4xl sm:text-5xl font-normal text-white leading-tight mb-6">
              {t('title_part2')}
            </h2>

            <h3 className="font-sansation text-lg sm:text-xl text-white leading-relaxed mb-6">
              {t('subtitle')}
            </h3>

            <div className="w-24 sm:w-32 h-0.5 bg-white mb-8"></div>

            <div className="space-y-6">
              <p className="font-sansation text-base sm:text-lg text-white leading-relaxed">
                {t('description_p1')}
              </p>

              <p className="font-sansation text-base sm:text-lg text-white leading-relaxed">
                {t('description_p2')}
              </p>
            </div>

            <div className="mt-8">
              <p className="font-sansation text-white/70 text-sm italic">
                {t('mobile_hint')}
              </p>
            </div>
          </div>

          {/* Imagen móvil con puntos optimizada */}
          <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full">
            {/* Imagen específica para móvil */}
            <img
              src="/images/mujer-facial.webp"
              alt="Procedimientos Quirúrgicos"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src = "/images/mujer-facial.webp";
              }}
            />

            {/* Puntos móviles */}
            <div className="absolute inset-0">
              {procedures.map(renderPoint)}
            </div>

            {/* Modal móvil */}
            {selectedProcedure && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
                style={{ zIndex: 100 }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) setSelectedProcedure(null);
                }}>
                <div className="bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl animate-slideUp">
                  <div className="sticky top-0 bg-white p-4 border-b border-gray-100 rounded-t-3xl sm:rounded-t-2xl">
                    <div className="flex items-center justify-between">
                      <h4 className="font-sansation text-lg sm:text-xl font-bold text-gray-900">
                        {procedures.find(p => p.id === selectedProcedure)?.title}
                      </h4>
                      <button
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        onClick={() => setSelectedProcedure(null)}
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>

                    <p className="font-sansation text-gray-600 text-base leading-relaxed mb-6 text-center">
                      {procedures.find(p => p.id === selectedProcedure)?.description}
                    </p>

                    <button
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white py-4 px-6 rounded-full font-sansation font-bold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg text-base cursor-pointer"
                      onClick={() => {
                        const url = procedureUrls[selectedProcedure as keyof typeof procedureUrls];
                        if (url) {
                          window.location.href = url;
                        }
                      }}
                    >
                      {t('more_information_btn')}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Layout desktop */}
        <div className="hidden lg:block lg:h-screen">
          <div className="grid grid-cols-2 gap-0 h-full">
            <div className="flex flex-col justify-center space-y-8 p-12 xl:p-16 order-2">
              <div>
                <h2 className="font-prototype text-5xl xl:text-6xl font-normal text-white leading-tight mb-2">
                  {t('title_part1')}
                </h2>
                <h2 className="font-prototype text-5xl xl:text-6xl font-normal text-white leading-tight mb-6">
                  {t('title_part2')}
                </h2>

                <h3 className="font-sansation text-2xl text-white leading-relaxed mb-6">
                  {t('subtitle')}
                </h3>

                <div className="w-92 h-1 bg-white mb-8"></div>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="font-sansation text-xl text-white leading-relaxed">
                  {t('description_p1')}
                </p>

                <p className="font-sansation text-xl text-white leading-relaxed">
                  {t('description_p2')}
                </p>
              </div>

              <div className="mt-8">
                <p className="font-sansation text-white/70 text-base italic">
                  {t('desktop_hint')}
                </p>
              </div>
            </div>

            <div className="relative h-full order-1">
              <img
                src="/images/chica-puntos.webp"
                alt="Procedimientos Quirúrgicos"
                className="w-full h-full object-cover object-[70%_center]"
              />

              <div className="absolute inset-0">
                {procedures.map(renderPoint)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default SurgicalProceduresSection;