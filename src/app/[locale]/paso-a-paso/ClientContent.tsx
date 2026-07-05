"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ClientContent() {
  const t = useTranslations('paso_a_paso');
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, title: t('steps.1'), active: true },
    { id: 2, title: t('steps.2'), active: false },
    { id: 3, title: t('steps.3'), active: false },
    { id: 4, title: t('steps.4'), active: false },
    { id: 5, title: t('steps.5'), active: false },
    { id: 6, title: t('steps.6'), active: false },
    { id: 7, title: t('steps.7'), active: false }
  ];

  const getStepContent = (stepId: number) => {
    switch (stepId) {
      case 1:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <p className="font-sansation font-normal text-base md:text-lg mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {t('content.1.p1')}
              </p>
              <p className="font-sansation font-normal text-base md:text-lg mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
                {t('content.1.p2')}
              </p>
              <ul className="space-y-2 md:space-y-3" style={{ color: '#1d3c5d' }}>
                {(t.raw('content.1.list') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2" style={{ color: '#1d3c5d' }}>•</span>
                    <span className="font-sansation font-normal text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <img
                src="/images/tu experiencia/Contacto.webp"
                alt="Contacto"
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <div className="mb-6 md:mb-8">
                <h4 className="font-sansation font-bold text-lg md:text-xl mb-3 md:mb-4" style={{ color: '#1d3c5d' }}>{t('content.2.sub1_title')}</h4>
                <p className="font-sansation font-normal text-base md:text-lg" style={{ color: '#1d3c5d' }}>
                  {t('content.2.sub1_text')}
                </p>
              </div>
              <div>
                <h4 className="font-sansation font-bold text-lg md:text-xl mb-3 md:mb-4" style={{ color: '#1d3c5d' }}>{t('content.2.sub2_title')}</h4>
                <p className="font-sansation font-normal text-base md:text-lg mb-3 md:mb-4" style={{ color: '#1d3c5d' }}>
                  {t('content.2.sub2_text1')}
                </p>
                <p className="font-sansation font-normal text-base md:text-lg" style={{ color: '#1d3c5d' }}>
                  {t('content.2.sub2_text2')}
                </p>
              </div>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <img
                src="/images/tu experiencia/Tu-cita.webp"
                alt="Primera Cita"
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <p className="font-sansation font-normal text-base md:text-lg mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {t('content.3.p1')}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {(t.raw('content.3.list') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2" style={{ color: '#1d3c5d' }}>•</span>
                    <span className="font-sansation font-normal text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sansation font-normal text-base md:text-lg" style={{ color: '#1d3c5d' }}>
                {t('content.3.p2')}
              </p>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <img
                src="/images/tu experiencia/Asesora.webp"
                alt="Tu Asistente"
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <p className="font-sansation font-normal text-base md:text-lg mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {t('content.4.p1')}
              </p>
              <p className="font-sansation font-normal text-base md:text-lg mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {t('content.4.p2')}
              </p>
              <ul className="space-y-2 md:space-y-3" style={{ color: '#1d3c5d' }}>
                {(t.raw('content.4.list') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2" style={{ color: '#1d3c5d' }}>•</span>
                    <span className="font-sansation font-normal text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <img
                src="/images/tu experiencia/Pasaporte.webp"
                alt="Pasaporte Cirugía"
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <p className="font-sansation font-normal text-base md:text-lg mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {t('content.5.p1')}
              </p>
              <p className="font-sansation font-normal text-base md:text-lg mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {t('content.5.p2')}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {(t.raw('content.5.list1') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2" style={{ color: '#1d3c5d' }}>•</span>
                    <span className="font-sansation font-normal text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sansation font-normal text-base md:text-lg mb-4 md:mb-6" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t('content.5.p3') }} />
              <ul className="space-y-2 md:space-y-3" style={{ color: '#1d3c5d' }}>
                {(t.raw('content.5.list2') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2" style={{ color: '#1d3c5d' }}>•</span>
                    <span className="font-sansation font-normal text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <img
                src="/images/tu experiencia/Tu.cirugia.webp"
                alt="Tu Cirugía"
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 6:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <p className="font-sansation font-normal text-base md:text-lg mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {t('content.6.p1')}
              </p>
              <p className="font-sansation font-normal text-base md:text-lg mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {t('content.6.p2')}
              </p>
              <p className="font-sansation font-normal text-base md:text-lg mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {t('content.6.p3')}
              </p>
              <p className="font-sansation font-normal text-base md:text-lg" style={{ color: '#1d3c5d' }}>
                {t('content.6.p4')}
              </p>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <img
                src="/images/tu experiencia/TU SEGUIMIENTO.webp"
                alt="Tu Seguimiento"
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 7:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <p className="font-sansation font-normal text-base md:text-lg mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {t('content.7.p1')}
              </p>
              <p className="font-sansation font-normal text-base md:text-lg" style={{ color: '#1d3c5d' }}>
                {t('content.7.p2')}
              </p>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <img
                src="/images/tu experiencia/regreso-normalidad.webp"
                alt="Regreso a la Normalidad"
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#babdb3' }}>
      {/* Hero Section */}
      <section className="py-8 md:py-12 lg:py-16" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-8 md:mb-12 lg:mb-16" style={{ color: '#1d3c5d' }}>
            {t('title')}
          </h1>

          {/* Navigation Steps */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 mb-8 md:mb-12 lg:mb-16">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`font-sansation font-bold px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-lg transition-colors text-xs md:text-sm lg:text-base ${activeStep === step.id
                    ? 'text-white'
                    : 'bg-white hover:bg-blue-50'
                  }`}
                style={{
                  backgroundColor: activeStep === step.id ? '#1d3c5d' : undefined,
                  color: activeStep === step.id ? 'white' : '#1d3c5d'
                }}
              >
                {step.title}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 xl:p-12">
            <div className="mb-6 md:mb-8">
              <h2 className="font-prototype font-normal text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 md:mb-4" style={{ color: '#1d3c5d' }}>
                {t(`content.${activeStep}.title`)}
              </h2>
              <h3 className="font-sansation font-bold text-lg md:text-xl mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
                {t(`content.${activeStep}.subtitle`)}
              </h3>
            </div>

            {getStepContent(activeStep)}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 md:mt-12">
            <button
              onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
              disabled={activeStep === 1}
              className={`font-sansation font-bold px-6 md:px-8 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base w-full sm:w-auto ${activeStep === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'text-white hover:opacity-90'
                }`}
              style={{
                backgroundColor: activeStep === 1 ? undefined : '#1d3c5d'
              }}
            >
              {t('nav.prev')}
            </button>

            <button
              onClick={() => setActiveStep(Math.min(7, activeStep + 1))}
              disabled={activeStep === 7}
              className={`font-sansation font-bold px-6 md:px-8 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base w-full sm:w-auto ${activeStep === 7
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'text-white hover:opacity-90'
                }`}
              style={{
                backgroundColor: activeStep === 7 ? undefined : '#1d3c5d'
              }}
            >
              {t('nav.next')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
