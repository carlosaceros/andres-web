"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('lifting_facial_hamaca');
  const t_testimonials = useTranslations('results_gallery');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number | null) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [1, 2, 3, 4, 5].map((i) => ({
    question: t(`faqs.q${i}.question`),
    answer: t(`faqs.q${i}.answer`)
  }));

  const gallery1 = [
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/Nelly-Lado-Antes.webp", label: t_testimonials('before_label'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/Nelly-Lado-despues.webp", label: t_testimonials('after_label'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/Nelly-frente-Antes.webp", label: t_testimonials('before_label'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/Nelly-fente-despues.webp", label: t_testimonials('after_label'), procedure: t('gallery_procedure') }
  ];

  const causes = ['c1', 'c2', 'c3'];

  const gallery2 = [
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/img1.webp", label: t_testimonials('before_label'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/img2.webp", label: t_testimonials('after_label'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/img3.webp", label: t_testimonials('before_label'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/img4.webp", label: t_testimonials('after_label'), procedure: t('gallery_procedure') }
  ];

  const procedures = ['p1', 'p2', 'p3', 'p4'];
  const procedureImages = [
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/otras/1a.webp", label: t_testimonials('before_label') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/otras/1b.webp", label: t_testimonials('after_label') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/otras/2a.webp", label: t_testimonials('before_label') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/otras/2b.webp", label: t_testimonials('after_label') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/otras/3a.webp", label: t_testimonials('before_label') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/otras/3b.webp", label: t_testimonials('after_label') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/otras/4a.webp", label: t_testimonials('before_label') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/otras/4b.webp", label: t_testimonials('after_label') }
  ];

  const gallery3 = [
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/antes.webp", label: t_testimonials('before_label'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/despues.webp", label: t_testimonials('after_label'), procedure: t('gallery_procedure') }
  ];

  const gallery4 = [
    { src: "/images/blefaroplastia/Ruby-antes.webp", label: t_testimonials('before_label'), procedure: t('gallery_procedure') },
    { src: "/images/blefaroplastia/Ruby-despues.webp", label: t_testimonials('after_label'), procedure: t('gallery_procedure') }
  ];

  const gallery5 = [
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/LuzAntes.webp", label: t_testimonials('before_label'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/LuzDespues.webp", label: t_testimonials('after_label'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/hamaca1.webp", label: t_testimonials('before_label'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/hamaca.webp", label: t_testimonials('after_label'), procedure: t('gallery_procedure') }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Responsive */}
      <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-screen">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/images/Lifting-Facial-Hamaca-Banner.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = '/images/placeholder-hero.jpg';
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-20 min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
            {/* Contenido de texto - Responsive */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
                {t('title')}
              </h1>
              <div className="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg leading-relaxed font-sansation font-normal" style={{ color: '#1d3c5d' }}>
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Resultados Reales - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {gallery1.map((item, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Resultado ${Math.floor(index / 2) + 1} - ${item.label}`}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='375' viewBox='0 0 300 375'%3E%3Crect width='300' height='375' fill='%23e5e7eb'/%3E%3Ctext x='150' y='187' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  {/* Etiqueta responsive */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="px-3 md:px-4 py-2 md:py-3 text-white text-center rounded-b-lg"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.3) 30%, rgba(29, 60, 93, 0.6) 70%, rgba(29, 60, 93, 0.8) 100%)'
                      }}
                    >
                      <div className="text-xs md:text-sm font-medium font-sansation font-bold">{item.label}</div>
                      <div className="text-xs opacity-90 font-sansation font-normal">{item.procedure}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Redescubre tu mejor versión - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Texto responsive */}
            <div>
              <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                {t('section2_title')}
              </h2>

              <div className="space-y-4 md:space-y-6 font-sansation font-normal" style={{ color: '#1d3c5d' }}>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">{t('section2_p1')}</p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">{t('section2_p2')}</p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">{t('section2_p3')}</p>
              </div>
            </div>

            {/* Video responsive */}
            <div className="flex justify-center order-first md:order-last">
              <div className="w-full max-w-sm md:max-w-lg">
                <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-800">
                  <video playsInline
                    className="w-full h-full object-cover"
                    poster=""
                    controls
                    preload="metadata"
                  >
                    <source src="https://media.drandrespereznieto.com/images/videos/EFECTO HAMACA MEJILLAS Y CUELLO.mp4" type="video/mp4" />
                    <source src="https://media.drandrespereznieto.com/images/videos/efecto-hamaca-mejillas-cuello.webm" type="video/webm" />
                    {/* Fallback responsive */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                      <div className="text-center text-white">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                          <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-base md:text-lg font-semibold font-sansation font-bold">{t('video1_title')}</p>
                        <p className="text-xs md:text-sm opacity-90 font-sansation font-normal">{t('video1_subtitle')}</p>
                      </div>
                    </div>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Garantía de excelentes resultados - Responsive */}
      <section
        className="py-8 md:py-12 lg:py-20"
        style={{
          background: 'linear-gradient(135deg, #1d3c5d 0%, #326dccff 50%, #1d3c5d 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-6 md:mb-8">
              {t('section3_title')}
            </h2>

            <div className="space-y-4 md:space-y-6 text-white leading-relaxed max-w-5xl mx-auto font-sansation font-normal" style={{ textAlign: 'center' }}>
              <p className="text-sm md:text-base lg:text-lg">{t('section3_p1')}</p>
              <p className="text-sm md:text-base lg:text-lg">{t('section3_p2')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {causes.map((key, index) => (
              <div key={index} className="rounded-lg p-4 md:p-6 lg:p-8 text-center min-h-[120px] md:min-h-[160px] lg:min-h-[200px] flex items-center justify-center" style={{ backgroundColor: '#babdb3' }}>
                <h3 className="font-sansation font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl" style={{ color: '#1d3c5d' }}>
                  {t(`causes.${key}`)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Elevación de tejidos blandos - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
              {t('section4_title')}
            </h2>

            <div className="text-left max-w-6xl mx-auto mb-8 md:mb-12">
              <p className="font-sansation font-normal text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
                {t('section4_p1')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {gallery2.map((item, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Resultado ${Math.floor(index / 2) + 1} - ${item.label}`}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='375' viewBox='0 0 300 375'%3E%3Crect width='300' height='375' fill='%23e5e7eb'/%3E%3Ctext x='150' y='187' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="px-3 md:px-4 py-2 md:py-3 text-white text-center rounded-b-lg"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.3) 30%, rgba(29, 60, 93, 0.6) 70%, rgba(29, 60, 93, 0.8) 100%)'
                      }}
                    >
                      <div className="text-xs md:text-sm font-medium font-sansation font-bold">{item.label}</div>
                      <div className="text-xs opacity-90 font-sansation font-normal">{item.procedure}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg leading-relaxed font-sansation font-normal" style={{ color: '#1d3c5d' }}>
              <p>{t('section4_p2')}</p>
              <p>{t('section4_p3')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Deep Plane - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#baac9e' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 order-2 md:order-1">
              <video playsInline
                className="w-full h-full object-cover"
                controls
                poster="https://media.drandrespereznieto.com/images/lifting-hamaca/deep-plane.webp"
                onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              >
                <source src="https://media.drandrespereznieto.com/images/videos/Video Lifting Deep.mp4" type="video/mp4" />
                <source src="https://media.drandrespereznieto.com/images/lifting-hamaca/Video-Lifting-Deep.webm" type="video/webm" />
                {t('video2_unsupported')}
              </video>

              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white" style={{ display: 'none' }}>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl mb-4">🎥</div>
                  <p className="font-sansation text-sm md:text-base">{t('video2_title')}</p>
                </div>
              </div>
            </div>

            <div className="text-white order-1 md:order-2">
              <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2">
                {t('section5_title')}
              </h2>
              <h3 className="font-sansation font-bold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                {t('section5_subtitle')}
              </h3>
              <div className="w-32 md:w-40 lg:w-52 h-1 bg-white mb-6 md:mb-8"></div>

              <div className="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg leading-relaxed font-sansation font-normal">
                <p>{t('section5_p1')}</p>
                <p>{t('section5_p2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Procedimientos - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-prototype font-normal text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
              {t('section6_title')}
            </h2>

            <div className="space-y-3 md:space-y-4 leading-relaxed max-w-5xl font-sansation font-normal" style={{ color: '#1d3c5d' }}>
              <p className="text-sm md:text-base lg:text-lg">{t('section6_p1')}</p>
              <p className="text-sm md:text-base lg:text-lg font-sansation font-bold">{t('section6_p2')}</p>
            </div>
          </div>

          {/* Galería de procedimientos en formato 2x2 */}
          <div className="space-y-8 md:space-y-12 mb-6 md:mb-8">
            {/* Primera fila */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {procedures.slice(0, 2).map((key, procIndex) => (
                <div key={key} className="space-y-3 md:space-y-4">
                  <div className="text-center">
                    <h3 className="font-prototype text-lg md:text-xl lg:text-2xl font-normal mb-2" style={{ color: '#1d3c5d' }}>
                      {t(`procedures.${key}`)}
                    </h3>
                    <div className="w-12 md:w-16 h-0.5 mx-auto" style={{ backgroundColor: '#1d3c5d' }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {procedureImages.slice(procIndex * 2, procIndex * 2 + 2).map((item, imgIndex) => (
                      <div key={imgIndex} className="relative group">
                        <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                          <img
                            src={item.src}
                            alt={`${t(`procedures.${key}`)} - ${item.label}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450' viewBox='0 0 300 450'%3E%3Crect width='300' height='450' fill='%23e5e7eb'/%3E%3Ctext x='150' y='210' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3Ctext x='150' y='235' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3E${encodeURIComponent(t(`procedures.${key}`))}%3C/text%3E%3C/svg%3E`;
                            }}
                          />
                          <div className="absolute bottom-0 left-0 right-0">
                            <div
                              className="px-3 md:px-4 py-2 md:py-3 text-white text-center rounded-b-lg"
                              style={{
                                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.3) 30%, rgba(29, 60, 93, 0.6) 70%, rgba(29, 60, 93, 0.8) 100%)'
                              }}
                            >
                              <div className="font-sansation font-bold text-xs md:text-sm">{item.label}</div>
                              <div className="font-sansation font-normal text-xs opacity-90">{t(`procedures.${key}`)}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Segunda fila */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {procedures.slice(2, 4).map((key, procIndex) => (
                <div key={key} className="space-y-3 md:space-y-4">
                  <div className="text-center">
                    <h3 className="font-prototype text-lg md:text-xl lg:text-2xl font-normal mb-2" style={{ color: '#1d3c5d' }}>
                      {t(`procedures.${key}`)}
                    </h3>
                    <div className="w-12 md:w-16 h-0.5 mx-auto" style={{ backgroundColor: '#1d3c5d' }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {procedureImages.slice((procIndex + 2) * 2, (procIndex + 2) * 2 + 2).map((item, imgIndex) => (
                      <div key={imgIndex} className="relative group">
                        <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                          <img
                            src={item.src}
                            alt={`${t(`procedures.${key}`)} - ${item.label}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450' viewBox='0 0 300 450'%3E%3Crect width='300' height='450' fill='%23e5e7eb'/%3E%3Ctext x='150' y='210' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3Ctext x='150' y='235' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3E${encodeURIComponent(t(`procedures.${key}`))}%3C/text%3E%3C/svg%3E`;
                            }}
                          />
                          <div className="absolute bottom-0 left-0 right-0">
                            <div
                              className="px-3 md:px-4 py-2 md:py-3 text-white text-center rounded-b-lg"
                              style={{
                                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.3) 30%, rgba(29, 60, 93, 0.6) 70%, rgba(29, 60, 93, 0.8) 100%)'
                              }}
                            >
                              <div className="font-sansation font-bold text-xs md:text-sm">{item.label}</div>
                              <div className="font-sansation font-normal text-xs opacity-90">{t(`procedures.${key}`)}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Restaurar el volumen facial - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
                {t('section7_title')}
              </h2>

              <div className="space-y-4 md:space-y-6 leading-relaxed font-sansation font-normal" style={{ color: '#1d3c5d' }}>
                <p className="text-sm md:text-base lg:text-lg">{t('section7_p1')}</p>
                <p className="text-sm md:text-base lg:text-lg">{t('section7_p2')}</p>
                <p className="text-sm md:text-base lg:text-lg">{t('section7_p3')}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {gallery3.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={item.src}
                      alt={`${item.label} - Restauración volumen facial`}
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='375' viewBox='0 0 300 375'%3E%3Crect width='300' height='375' fill='%23f3f4f6'/%3E%3Ctext x='150' y='180' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='12' fill='%236b7280'%3EVolumen Facial%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0">
                      <div
                        className="px-3 md:px-4 py-2 md:py-3 text-white text-center rounded-b-lg"
                        style={{
                          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.3) 30%, rgba(29, 60, 93, 0.6) 70%, rgba(29, 60, 93, 0.8) 100%)'
                        }}
                      >
                        <div className="text-xs md:text-sm font-medium font-sansation font-bold">{item.label}</div>
                        <div className="text-xs opacity-90 font-sansation font-normal">{item.procedure}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Devolver la lozanía - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
                {t('section8_title')}
              </h2>

              <div className="space-y-4 md:space-y-6 leading-relaxed font-sansation font-normal" style={{ color: '#1d3c5d' }}>
                <p className="text-sm md:text-base lg:text-lg">{t('section8_p1')}</p>
                <p className="text-sm md:text-base lg:text-lg">{t('section8_p2')}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {gallery4.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                    <img
                      src={item.src}
                      alt={`${item.label} - Lozanía facial`}
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='375' viewBox='0 0 300 375'%3E%3Crect width='300' height='375' fill='%23f3f4f6'/%3E%3Ctext x='150' y='180' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='12' fill='%236b7280'%3ELozanía Facial%3C/text%3E%3C/svg%3E`;
                      }}
                    />

                    <div className="absolute bottom-0 left-0 right-0">
                      <div
                        className="px-3 md:px-4 py-2 md:py-3 text-white text-center"
                        style={{
                          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(29, 60, 93, 0.38) 40%, rgba(29, 60, 93, 0.57) 70%, rgba(29, 60, 93, 0.67) 100%)'
                        }}
                      >
                        <div className="text-sm md:text-lg font-sansation font-bold mb-1">
                          {item.label}
                        </div>
                        <div className="text-xs md:text-sm font-sansation font-normal">
                          {item.procedure}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Sección VS - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#baac9e' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            <div className="rounded-lg px-4 md:px-6 lg:px-8 py-4 md:py-6 shadow-lg" style={{ backgroundColor: '#babdb3' }}>
              <h3 className="font-sansation font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center" style={{ color: '#1d3c5d' }}>
                {t('section9_vs_title1')}
              </h3>
            </div>

            <div className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
              VS
            </div>

            <div className="rounded-lg px-4 md:px-6 lg:px-8 py-4 md:py-6 shadow-lg" style={{ backgroundColor: '#babdb3' }}>
              <h3 className="font-sansation font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center" style={{ color: '#1d3c5d' }}>
                {t('section9_vs_title2')}
              </h3>
            </div>
          </div>

          <div className="text-center text-white space-y-4 md:space-y-6 max-w-6xl mx-auto mb-8 md:mb-12 font-sansation font-normal">
            <h4 className="font-sansation font-bold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
              {t('section9_title')}
            </h4>

            <div className="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg leading-relaxed">
              <p>{t('section9_p1')}</p>
              <p>{t('section9_p2')}</p>
              <p className="font-sansation font-bold">{t('section9_result_title')}</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-lg px-6 md:px-8 lg:px-12 py-6 md:py-8 shadow-lg max-w-4xl" style={{ backgroundColor: '#babdb3' }}>
              <h3 className="font-sansation font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center" style={{ color: '#1d3c5d' }}>
                {t('section9_result_p1')}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Nuestros excelentes resultados - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4" style={{ color: '#1d3c5d' }}>
              {t('section10_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {gallery5.map((item, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Resultado ${Math.floor(index / 2) + 1} - ${item.label}`}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='375' viewBox='0 0 300 375'%3E%3Crect width='300' height='375' fill='%23e5e7eb'/%3E%3Ctext x='150' y='187' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="px-3 md:px-4 py-2 md:py-3 text-white text-center rounded-b-lg"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.3) 30%, rgba(29, 60, 93, 0.6) 70%, rgba(29, 60, 93, 0.8) 100%)'
                      }}
                    >
                      <div className="text-xs md:text-sm font-medium font-sansation font-bold">{item.label}</div>
                      <div className="text-xs opacity-90 font-sansation font-normal">{item.procedure}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Ver más - Responsive */}
          <div className="text-center mt-6 md:mt-8">
            <Link
              href={`/${locale}/galeria/procedimientos-faciales/lifting-hamaca`}
              className="inline-flex items-center px-4 md:px-6 lg:px-8 py-3 md:py-4 bg-transparent border-2 hover:bg-white hover:text-gray-800 transition-all duration-300 rounded-lg group text-sm md:text-base"
              style={{
                borderColor: '#1d3c5d',
                color: '#1d3c5d'
              }}
            >
              <span className="font-sansation font-semibold mr-2 md:mr-3">
                <span className="hidden sm:inline">{t('view_more_cases_btn')}</span>
                <span className="sm:hidden">{t('view_more_cases_btn_mobile')}</span>
              </span>
              <svg
                className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonios - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 md:mb-12">
            <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4" style={{ color: '#1d3c5d' }}>
              {t('testimonials_title')}
            </h2>
            <div className="w-32 md:w-48 h-1 mb-4 md:mb-6" style={{ backgroundColor: '#1d3c5d' }}></div>
          </div>
          <div className="flex justify-center gap-6 md:gap-8 mb-8 md:mb-12">

            <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-lg max-w-2xl w-full">
              <video playsInline
                className="w-full h-full object-cover"
                poster="https://media.drandrespereznieto.com/images/lifting-hamaca/testimoni1.webp"
                controls
                preload="metadata"
                onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              >
                <source src="https://media.drandrespereznieto.com/images/videos/Testimonial Ivette - Lifting Facial en Hamaca.mp4" type="video/mp4" />
                <source src="https://media.drandrespereznieto.com/images/videos/Testimonial-Ivette-Lifting-Facial-Hamaca.webm" type="video/webm" />
                {t('video3_unsupported')}
              </video>

              <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none', backgroundColor: '#1d3c5d' }}>
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#326dccff' }}>
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="text-white text-xs md:text-sm font-sansation font-normal">{t('video3_title')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/testimonios`}
              className="inline-block border-2 px-6 md:px-8 py-2 md:py-3 rounded-full transition-colors font-sansation font-bold text-sm md:text-base"
              style={{
                borderColor: '#1d3c5d',
                color: '#1d3c5d'
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                const target = e.target as HTMLAnchorElement;
                target.style.backgroundColor = '#1d3c5d';
                target.style.color = 'white';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                const target = e.target as HTMLAnchorElement;
                target.style.backgroundColor = 'transparent';
                target.style.color = '#1d3c5d';
              }}
            >
              {t('view_more_btn')}
            </Link>
          </div>
        </div>
      </section>

      {/* Tu recuperación - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
                {t('recovery_title')}
              </h2>
              <div className="w-20 md:w-40 lg:w-85 h-1 mb-6 md:mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

              <div className="space-y-4 md:space-y-6 leading-relaxed font-sansation font-normal" style={{ color: '#1d3c5d' }}>
                <p className="text-sm md:text-base lg:text-lg">{t('recovery_p1')}</p>
                <p className="text-sm md:text-base lg:text-lg">{t('recovery_p2')}</p>
                <p className="text-sm md:text-base lg:text-lg">{t('recovery_p3')}</p>
                <p className="text-sm md:text-base lg:text-lg">{t('recovery_p4')}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-xs md:max-w-sm">
                <div className="relative rounded-lg overflow-hidden bg-gray-800" style={{ aspectRatio: '9/16' }}>
                  <video playsInline
                    className="w-full h-full object-cover"
                    poster="https://media.drandrespereznieto.com/images/lifting-hamaca/montaña.webp"
                    controls
                    preload="metadata"
                  >
                    <source src="https://media.drandrespereznieto.com/images/videos/Montana-Rusa-Proceso-Inflamatorio.mp4" type="video/mp4" />
                    <source src="https://media.drandrespereznieto.com/images/lifting-hamaca/MontanaRusaProcesoInflamatorio.webm" type="video/webm" />
                    <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                      <div className="text-center text-white">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                          <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-sm md:text-lg font-semibold font-sansation font-bold">{t('video4_title')}</p>
                        <p className="text-xs md:text-sm opacity-90 font-sansation font-normal">{t('video4_subtitle')}</p>
                      </div>
                    </div>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-24 md:w-48 lg:w-87 h-1 mb-6 md:mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
            {faqList.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-left font-medium flex justify-between items-center transition-colors duration-200"
                  style={{
                    backgroundColor: openFaq === index ? '#babdb3' : '#ffffff',
                    color: '#1d3c5d'
                  }}
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-prototype text-sm md:text-base lg:text-lg pr-3 md:pr-4">{faq.question}</span>
                  <svg
                    className={`w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-200 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-4 md:px-6 py-3 md:py-4 bg-white border-t">
                    <p className="font-sansation text-gray-700 text-sm md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}