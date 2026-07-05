"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('explantacion_mamaria');
  const t_testimonials = useTranslations('results_gallery');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number | null) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

  return (
    <div>
      {/* Hero Section - Banner funcional */}
      <section className="relative min-h-[500px] flex items-center">
        <Image
          src="/images/Explantacionbanner.webp"
          alt={t('title')}
          fill
          priority
          className="object-cover"
          quality={90}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-prototype font-normal text-4xl lg:text-5xl mb-6" style={{ color: '#1d3c5d' }}>
              {t('title')}
            </h1>

            <h2 className="font-sansation font-bold text-xl lg:text-2xl" style={{ color: '#1d3c5d' }}>
              {t('subtitle')}
            </h2>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="max-w-5xl mx-auto space-y-6 font-sansation font-normal text-xl leading-relaxed" style={{ color: '#1d3c5d' }}>
            <p>{t('intro_p1')}</p>
            <p>{t('intro_p2')}</p>
          </div>
        </div>
      </section>

      {/* Cuándo considerar */}
      <section className="py-16" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="container mx-auto px-4">
          <h2 className="font-prototype font-normal text-3xl lg:text-4xl text-white text-center mb-4">
            {t('when_to_consider_title')}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>

          <p className="font-sansation font-normal text-lg text-center text-white mb-12 max-w-4xl mx-auto">
            {t('when_to_consider_intro')}
          </p>

          <div className="bg-white p-8 rounded-lg max-w-4xl mx-auto" style={{ color: '#1d3c5d' }}>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-sansation font-normal text-lg leading-relaxed">
                  {t('reason_1')}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-sansation font-normal text-lg leading-relaxed">
                  {t('reason_2')}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-sansation font-normal text-lg leading-relaxed">
                  {t('reason_3')}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-sansation font-normal text-lg leading-relaxed">
                  {t('reason_4')}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-sansation font-normal text-lg leading-relaxed">
                  {t('reason_5')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Explantación */}
      <section className="py-16" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-4">
          <h2 className="font-prototype font-normal text-3xl lg:text-4xl text-center mb-4" style={{ color: '#1d3c5d' }}>
            {t('types_title')}
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

          <p className="font-sansation font-normal text-lg text-center mb-12 max-w-4xl mx-auto" style={{ color: '#1d3c5d' }}>
            {t('types_intro')}
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-sansation font-bold text-xl mb-6" style={{ color: '#1d3c5d' }}>
                {t('simple_explantation_title')}
              </h3>
              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('simple_explantation_desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-sansation font-bold text-xl mb-6" style={{ color: '#1d3c5d' }}>
                {t('capsulectomy_title')}
              </h3>
              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('capsulectomy_desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-sansation font-bold text-xl mb-6" style={{ color: '#1d3c5d' }}>
                {t('pexia_title')}
              </h3>
              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('pexia_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detalles de la Técnica */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #4a6fa5 0%, #1d3c5d 50%, #1d3c5d 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-white">
            <h2 className="font-prototype font-normal text-4xl mb-8">
              {t('technique_title')}
            </h2>

            <div className="space-y-6 font-sansation font-normal text-lg leading-relaxed">
              <p>{t('technique_point_1')}</p>
              <p>{t('technique_point_2')}</p>
              <p>{t('technique_point_3')}</p>
              <p>{t('technique_point_4')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-12 sm:mb-16">
              <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                {t('results_title')}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { src: "https://media.drandrespereznieto.com/images/todos/mamaria/Paciente1lateralAntes.webp", label: t_testimonials('before_label'), procedure: t('title') },
                { src: "https://media.drandrespereznieto.com/images/todos/mamaria/Paciente1lateralDespues.webp", label: t_testimonials('after_label'), procedure: t('title') },
                { src: "https://media.drandrespereznieto.com/images/todos/mamaria/Paciente4lateralAntes.webp", label: t_testimonials('before_label'), procedure: t('title') },
                { src: "https://media.drandrespereznieto.com/images/todos/mamaria/Paciente4lateralDespues.webp", label: t_testimonials('after_label'), procedure: t('title') }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={item.src}
                      alt={`Resultado ${Math.floor(index / 2) + 1} - ${item.label}`}
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='375' viewBox='0 0 300 375'%3E%3Crect width='300' height='375' fill='%23e5e7eb'/%3E%3Ctext x='150' y='187' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3C/svg%3E`
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0">
                      <div
                        className="px-4 py-3 text-white text-center rounded-b-lg"
                        style={{
                          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.3) 30%, rgba(29, 60, 93, 0.6) 70%, rgba(29, 60, 93, 0.8) 100%)'
                        }}
                      >
                        <div className="text-sm font-medium font-sansation font-bold">{item.label}</div>
                        <div className="text-xs opacity-90 font-sansation font-normal">{item.procedure}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón Ver más */}
            <div className="text-center mt-8">
              <Link
                href={`/${locale}/galeria/procedimientos-corporales/explantacion-mamaria`}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 hover:bg-white hover:text-gray-800 transition-all duration-300 rounded-lg group"
                style={{
                  borderColor: '#1d3c5d',
                  color: '#1d3c5d'
                }}
              >
                <span className="font-sansation font-semibold text-lg mr-3">
                  {t('view_more_cases')}
                </span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-prototype font-normal text-3xl lg:text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#1d3c5d' }}></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqKeys.map((key, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div
                  className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-sansation font-bold text-lg text-left flex-1 pr-4" style={{ color: '#1d3c5d' }}>
                    {t(`faqs.${key}.question`)}
                  </h3>
                  <svg
                    className={`w-6 h-6 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                    style={{ color: '#1d3c5d' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="font-sansation font-normal leading-relaxed text-left" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw(`faqs.${key}.answer`) }} />
                  </div>
                )}
              </div>
            ))}
          </div>


        </div>
      </section >
    </div >
  );
}