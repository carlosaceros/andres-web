"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('elevacion_cola_cejas');
  const t_testimonials = useTranslations('results_gallery');
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqKeys = ['q1', 'q2', 'q3', 'q4'];

  return (
    <div>
      {/* Banner Principal */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 block sm:hidden"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%), url('/images/Elevacion-Cola-cejas-movil.webp') center/cover no-repeat`
          }}
        ></div>
        <div
          className="absolute inset-0 hidden sm:block lg:hidden"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%), url('/images/Elevacion-Cola-cejas-tablet.webp') center/cover no-repeat`
          }}
        ></div>
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%), url('/images/Elevacion-Cola-cejas-banner.webp') center/cover no-repeat`
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-12 lg:px-6 pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 min-h-screen flex items-center">
          <div className="max-w-5xl mt-4 sm:mt-8 md:mt-12 lg:mt-16 w-full">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="mb-6 sm:mb-10 md:mb-14 lg:mb-12 mt-6 sm:mt-10 md:mt-14 lg:mt-12">
                <h1 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-3 sm:mb-4 md:mb-5 lg:mb-4 leading-tight" style={{ color: '#1d3c5d' }}>
                  {t('title')}
                </h1>
                <div className="w-16 sm:w-24 md:w-40 lg:w-48 xl:w-73 h-1 mb-4 sm:mb-6 md:mb-7 lg:mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
                <h2 className="font-sansation text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 sm:mb-6 md:mb-7 lg:mb-8 font-medium leading-tight max-w-4xl" style={{ color: '#1d3c5d' }}>
                  {t('subtitle')}
                </h2>
                <div className="font-sansation space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl" style={{ color: '#1d3c5d' }}>
                  <p>{t('description_p1')}</p>
                  <p>{t('description_p2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visión estética */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                  {t('vision_title')}
                </h2>
                <div className="font-sansation space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                  <p>{t('vision_p1')}</p>
                  <p>{t('vision_p2')}</p>
                </div>
              </div>
              <div className="lg:col-span-1 flex justify-center order-first lg:order-last">
                <div className="w-full max-w-sm sm:max-w-md lg:w-80">
                  <video
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    controls
                    poster="/images/cejas/img-video.webp"
                  >
                    <source src="https://media.drandrespereznieto.com/images/videos/Elevación-Cola-Cejas.webm" type="video/webm" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detalles Técnica */}
      <section
        className="py-12 sm:py-16 lg:py-20 text-white"
        style={{
          background: 'radial-gradient(circle at center, #2563eb 0%, #1d3c5d 70%)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-12 sm:mb-16">
              <h2 className="font-prototype text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8">
                {t('technique_title')}
              </h2>
              <p className="font-sansation text-base sm:text-lg md:text-3xl opacity-100 max-w-5xl leading-relaxed">
                {t('technique_subtitle')}
              </p>
            </div>
            <div className="font-sansation mb-12 sm:mb-16 text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl text-left">
              <p>{t('technique_desc')}</p>
            </div>
            <h3 className="font-prototype text-xl sm:text-2xl md:text-3xl font-normal mb-8 sm:mb-12 text-left">
              {t('benefits_title')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-300 rounded-lg p-4 sm:p-6 text-center">
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('benefit_1')}
                </p>
              </div>
              <div className="bg-gray-300 rounded-lg p-4 sm:p-6 text-center">
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('benefit_2')}
                </p>
              </div>
              <div className="bg-gray-300 rounded-lg p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('benefit_3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Técnicas personalizadas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                {t('custom_techniques_title')}
              </h2>
              <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto" style={{ color: '#1d3c5d' }}>
                {t('custom_techniques_intro')}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="rounded-2xl p-4 sm:p-6 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col" style={{ backgroundColor: '#babdb3' }}>
                <h3 className="font-prototype text-xl sm:text-2xl md:text-3xl font-normal mb-4 sm:mb-6 text-center leading-tight" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw('short_temporal_title') }} />
                <div className="mb-4 sm:mb-6 flex justify-center flex-shrink-0">
                  <img
                    src="/images/elevacion-temporal.webp"
                    alt="Elevación Temporal Corta"
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Crect width='320' height='320' fill='%23e5e7eb'/%3E%3Ctext x='160' y='160' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3ETécnica Temporal%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                <div className="font-sansation space-y-3 sm:space-y-4 flex-grow text-left" style={{ color: '#1d3c5d' }}>
                  <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
                    {t('short_temporal_desc')}
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg">
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('short_temporal_point_1')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('short_temporal_point_2')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('short_temporal_point_3')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl p-4 sm:p-6 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col" style={{ backgroundColor: '#babdb3' }}>
                <h3 className="font-prototype text-xl sm:text-2xl md:text-3xl font-normal mb-4 sm:mb-6 text-center leading-tight" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw('extended_temporal_title') }} />
                <div className="mb-4 sm:mb-6 flex justify-center flex-shrink-0">
                  <img
                    src="/images/elevacion-temporal-extendida.webp"
                    alt="Elevación Temporal Extendida"
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Crect width='320' height='320' fill='%23e5e7eb'/%3E%3Ctext x='160' y='160' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3ETécnica Extendida%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                <div className="font-sansation space-y-3 sm:space-y-4 flex-grow text-left" style={{ color: '#1d3c5d' }}>
                  <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
                    {t('extended_temporal_desc')}
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg">
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('extended_temporal_point_1')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('extended_temporal_point_2')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('extended_temporal_point_3')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('extended_temporal_point_4')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('extended_temporal_point_5')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidatos */}
      <section className="py-12 sm:py-16 lg:py-20 text-white" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8">
                {t('candidates_title')}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-300 rounded-lg p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-transparent rounded-full flex items-center justify-center" style={{ border: '4px solid #1d3c5d' }}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('candidate_1')}
                </p>
              </div>
              <div className="bg-gray-300 rounded-lg p-6 sm:p-8 text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-transparent rounded-full flex items-center justify-center" style={{ border: '4px solid #1d3c5d' }}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('candidate_2')}
                </p>
              </div>
              <div className="bg-gray-300 rounded-lg p-6 sm:p-8 text-center sm:col-start-1 sm:col-end-3 lg:col-start-auto lg:col-end-auto">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-transparent rounded-full flex items-center justify-center" style={{ border: '4px solid #1d3c5d' }}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('candidate_3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Galería */}
      < section className="py-12 sm:py-16 lg:py-20 bg-white" >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-12 sm:mb-16">
              <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                {t('results_title')}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { src: "/images/cejas/MiryamAntes.webp", label: t_testimonials('before_label'), procedure: t('title') },
                { src: "/images/cejas/MiryamDespues.webp", label: t_testimonials('after_label'), procedure: t('title') },
                { src: "/images/cejas/galeria/Betty2a.webp", label: t_testimonials('before_label'), procedure: t('title') },
                { src: "/images/cejas/galeria/Betty2b.webp", label: t_testimonials('after_label'), procedure: t('title') }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={item.src}
                      alt={`Resultado ${Math.floor(index / 2) + 1} - ${item.label}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
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
            <div className="text-center mt-8">
              <Link
                href={`/${locale}/galeria/procedimientos-faciales/elevacion-cejas`}
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
      </section >

      {/* FAQ */}
      < section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-20 sm:w-32 md:w-48 lg:w-114 h-1 mb-8 sm:mb-12" style={{ backgroundColor: '#1d3c5d' }}></div>
            <div className="space-y-3 sm:space-y-4">
              {faqKeys.map((key, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md">
                  <button
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  >
                    <span className="font-sansation text-base sm:text-lg font-semibold pr-4" style={{ color: '#1d3c5d' }}>
                      {t(`faqs.${key}.question`)}
                    </span>
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`}
                      style={{ color: '#1d3c5d' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openQuestion === index && (
                    <div className="px-4 sm:px-6 pb-3 sm:pb-4 border-t border-gray-100">
                      <p className="font-sansation leading-relaxed pt-3 sm:pt-4 text-sm sm:text-base" style={{ color: '#1d3c5d' }}>
                        {t(`faqs.${key}.answer`)}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
