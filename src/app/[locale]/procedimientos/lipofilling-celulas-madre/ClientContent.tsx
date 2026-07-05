"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ClientContent() {
  const { locale } = useParams() as { locale: 'es' | 'en' };
  const activeLocale = locale === 'en' ? 'en' : 'es';
  const t = useTranslations('lipofilling_celulas_madre');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number | null) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
  const comparisonKeys = ['item_1', 'item_2', 'item_3', 'item_4', 'item_5', 'item_6', 'item_7', 'item_8', 'item_9'];

  const LOCAL_EXPLANATION = {
    es: {
      problem_title: "¿Por qué el rostro pierde volumen, definición y luminosidad con el tiempo?",
      problem_text: "A partir de los 30 años, el rostro comienza a perder de forma natural sus compartimentos grasos estructurales. Esto provoca que los pómulos se aplanen, las mejillas se hundan y aparezca un surco profundo bajo la ojera. Además, la renovación celular de la piel se ralentiza, haciéndola lucir opaca y deshidratada. Los rellenos sintéticos tradicionales a menudo se limitan a inflar el rostro de agua temporalmente, sin regenerar verdaderamente el tejido celular.",
      eeat_title: "Biocirugía Regenerativa Avanzada en Bogotá",
      eeat_text: "El Dr. Andrés Pérez Nieto es pionero en la aplicación de células madre derivadas de tejido graso (ADSCs) con técnicas de ultra-purificación en Colombia. Con 30 años de experiencia internacional y miembro activo de la SCCP y la ISAPS, el Dr. Pérez Nieto realiza transferencias celulares personalizadas en instalaciones médicas de primer nivel (Santa Ana Medical Center), garantizando la máxima viabilidad de las células y un resultado duradero que rejuvenece desde adentro.",
      videos_title: "Instagram Reels y Casos Clínicos",
      videos_subtitle: "Mira cómo aplicamos las células madre purificadas en quirófano y conoce la diferencia entre las técnicas explicadas por el Dr. Pérez Nieto.",
    },
    en: {
      problem_title: "Why does the face lose volume, definition, and glow over time?",
      problem_text: "Starting in our 30s, the face naturally begins to lose its structural fat compartments. This causes cheekbones to flatten, cheeks to hollow out, and deep grooves to appear beneath the dark circles. Additionally, skin cell turnover slows down, making it look dull and dehydrated. Traditional synthetic fillers often only inflate the face with water temporarily, without truly regenerating cell tissue.",
      eeat_title: "Advanced Regenerative Bio-Surgery in Bogota",
      eeat_text: "Dr. Andres Perez Nieto is a pioneer in the application of adipose-derived stem cells (ADSCs) with ultra-purification techniques in Colombia. With 30 years of international experience and active membership in SCCP and ISAPS, Dr. Perez Nieto performs custom cellular transfers in first-class medical facilities (Santa Ana Medical Center), guaranteeing maximum cell viability and a long-lasting rejuvenation from within.",
      videos_title: "Instagram Reels and Clinical Cases",
      videos_subtitle: "Watch how we apply purified stem cells in the operating room and understand the technical differences explained by Dr. Perez Nieto.",
    }
  };

  const localFaqs = {
    es: [
      {
        question: "¿Cuánto tiempo duran los resultados del lipofilling con células madre?",
        answer: "Los resultados del lipofilling facial son permanentes. Durante las primeras semanas posteriores al procedimiento, el cuerpo reabsorbe aproximadamente entre un 20% y un 30% de la grasa transferida. Sin embargo, las células grasas y células madre que se integran con éxito y reciben flujo sanguíneo sobreviven para siempre, convirtiéndose en tejido vivo y permanente que responderá de manera natural al envejecimiento y cambios de peso."
      },
      {
        question: "¿Cuál es la diferencia real entre MicroFat y NanoFat?",
        answer: "MicroFat consiste en micro-injertos de grasa que conservan su estructura celular, utilizados principalmente para restaurar volúmenes perdidos en pómulos, mejillas, sienes o mandíbula. Por otro lado, NanoFat es una emulsión líquida ultra-filtrada que no contiene adipocitos grandes (no genera volumen), sino que concentra una alta cantidad de células madre y factores de crecimiento, ideal para regenerar la calidad de la piel, eliminar ojeras oscuras y atenuar líneas finas."
      },
      {
        question: "¿Cómo es el postoperatorio de una transferencia de grasa facial?",
        answer: "El postoperatorio es muy noble. Se experimenta una leve inflamación tanto en el rostro como en las zonas donantes (generalmente abdomen o muslos) durante los primeros 5 a 7 días. Se recomienda evitar masajes fuertes en el rostro para no desplazar las células grasas transferidas, no dormir boca abajo y utilizar protección solar estricta. Podrás retomar tus actividades cotidianas no deportivas en una semana."
      }
    ],
    en: [
      {
        question: "How long do the results of stem cell lipofilling last?",
        answer: "Facial lipofilling results are permanent. During the first few weeks following the procedure, the body reabsorbs approximately 20% to 30% of the transferred fat. However, the fat cells and stem cells that successfully integrate and establish blood flow survive forever, becoming permanent living tissue that ages naturally with your face."
      },
      {
        question: "What is the real difference between MicroFat and NanoFat?",
        answer: "MicroFat consists of fat micro-grafts that preserve their cellular structure, used mainly to restore lost volumes in cheekbones, cheeks, temples, or jawlines. On the other hand, NanoFat is an ultra-filtered liquid emulsion that does not contain large fat cells (meaning it does not add volume), but rather concentrates stem cells and growth factors, perfect for skin regeneration, smoothing dark circles, and fading fine lines."
      },
      {
        question: "What is the recovery process like after facial fat transfer?",
        answer: "Post-operative recovery is highly manageable. Mild swelling is expected in both the face and donor areas (typically abdomen or thighs) for the first 5 to 7 days. You should avoid rubbing or massaging your face to keep the transferred cells in place, avoid sleeping face down, and use strict solar protection. Most patients resume non-sporting daily activities within a week."
      }
    ]
  };

  const copy = LOCAL_EXPLANATION[activeLocale];
  const mergedFaqs = [
    ...faqKeys.map((key) => ({
      question: t(`faqs.${key}.question`),
      answer: t(`faqs.${key}.answer`)
    })),
    ...localFaqs[activeLocale]
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Banner Original con Responsive */}
      <section className="relative min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner-Lipofilling-celular-madre.webp"
            alt={t('title_part1') + ' ' + t('title_part2')}
            fill
            className="object-cover"
            priority
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.style.background = 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)';
              }
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contenido de texto - Lado izquierdo */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <h1 className="font-prototype font-normal text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4" style={{ color: '#1d3c5d' }}>
                  {t('title_part1')}
                </h1>
                <h2 className="font-prototype font-normal text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
                  {t('title_part2')} {locale === 'es' ? 'en Bogotá' : 'in Bogota'}
                </h2>
                <div className="w-48 md:w-60 h-1 mb-6 md:mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explicación Lipofilling - Responsive */}
      <section className="py-8 md:py-12 lg:py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="font-sansation font-normal text-sm md:text-base leading-relaxed mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
              {t('intro_p1')}
            </p>

            <p className="font-sansation font-normal text-sm md:text-base leading-relaxed mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
              {t('intro_p2')}
            </p>

            <p className="font-sansation font-normal text-sm md:text-base leading-relaxed mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
              {t('intro_p3')}
            </p>

            <p className="font-sansation font-normal text-sm md:text-base leading-relaxed mb-8 md:mb-12" style={{ color: '#1d3c5d' }}>
              {t('intro_p4')}
            </p>

            {/* Video Responsive */}
            <div className="flex justify-center">
              <div className="relative rounded-lg overflow-hidden aspect-video w-full max-w-2xl">
                <video playsInline
                  className="w-full h-full object-cover"
                  poster=""
                  controls
                  onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                >
                  <source src="https://media.drandrespereznieto.com/images/videos/Lipofilling Subtitulado en inglés - Detalles de la técnica LIPOFILLING DE CÉLULAS MADRE.mp4" type="video/mp4" />
                  <source src="https://media.drandrespereznieto.com/images/videos/lipofillingdetallestecnicacelulasmadre.webm" type="video/webm" />
                  Tu navegador no soporta el elemento video.
                </video>

                <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none', backgroundColor: '#1d3c5d' }}>
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#326dccff' }}>
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <h3 className="font-sansation font-bold text-white text-base md:text-lg mb-4 md:mb-8">
                      {t('video_title')}
                    </h3>
                    <div className="font-sansation font-normal text-white text-xs md:text-sm italic">
                      {t('video_subtitle')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eugene Schwartz - Problem Aware Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-[#1d3c5d]">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="font-prototype text-2xl md:text-3xl lg:text-4xl mb-6">
              {copy.problem_title}
            </h2>
            <p className="font-sansation text-lg leading-relaxed opacity-90">
              {copy.problem_text}
            </p>
          </div>
        </div>
      </section>

      {/* Eugene Schwartz - E-E-A-T Acreditation Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-[#1d3c5d]">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[180px_1fr] gap-8 items-center text-center md:text-left">
            <div className="relative w-36 h-36 rounded-full overflow-hidden mx-auto border-4 border-gray-100 shadow-lg">
              <Image
                src="/images/dr-perez.webp"
                alt="Dr. Andrés Pérez Nieto"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <div>
              <h2 className="font-prototype text-2xl md:text-3xl mb-4">
                {copy.eeat_title}
              </h2>
              <p className="font-sansation text-base leading-relaxed opacity-90">
                {copy.eeat_text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de lipofilling - Responsive */}
      <section className="py-8 md:py-12 lg:py-16" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-8 md:mb-12">
            <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4" style={{ color: '#1d3c5d' }}>
              {t('types_title_1')}
            </h2>
            <h3 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
              {t('types_title_2')}
            </h3>
            <div className="w-24 md:w-32 h-1 mb-8 md:mb-12" style={{ backgroundColor: '#1d3c5d' }}></div>

            <p className="font-sansation font-normal text-sm md:text-base leading-relaxed mb-8 md:mb-12" style={{ color: '#1d3c5d' }}>
              {t('types_intro')}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
            {/* Microfat */}
            <div
              className="p-6 md:p-8 rounded-lg shadow-sm"
              style={{
                backgroundColor: '#ffffff',
                minHeight: '400px',
                maxWidth: '350px',
                width: '100%'
              }}
            >
              <h3 className="font-sansation font-bold text-xl md:text-2xl mb-4 md:mb-6 text-center" style={{ color: '#1d3c5d' }}>{t('microfat_title')}</h3>

              <p className="font-sansation font-normal text-sm md:text-base leading-relaxed mb-4 md:mb-6 text-center" style={{ color: '#1d3c5d' }}>
                {t('microfat_desc')}
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" style={{ color: '#1d3c5d' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-sansation font-normal text-xs md:text-sm" style={{ color: '#1d3c5d' }}>
                    {t('microfat_point_1')}
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" style={{ color: '#1d3c5d' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-sansation font-normal text-xs md:text-sm" style={{ color: '#1d3c5d' }}>
                    {t('microfat_point_2')}
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" style={{ color: '#1d3c5d' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-sansation font-normal text-xs md:text-sm" style={{ color: '#1d3c5d' }}>
                    {t('microfat_point_3')}
                  </p>
                </div>
              </div>
            </div>

            {/* Nanofat */}
            <div
              className="p-6 md:p-8 rounded-lg shadow-sm"
              style={{
                backgroundColor: '#ffffff',
                minHeight: '400px',
                maxWidth: '350px',
                width: '100%'
              }}
            >
              <h3 className="font-sansation font-bold text-xl md:text-2xl mb-4 md:mb-6 text-center" style={{ color: '#1d3c5d' }}>{t('nanofat_title')}</h3>

              <p className="font-sansation font-normal text-sm md:text-base leading-relaxed mb-4 md:mb-6 text-center" style={{ color: '#1d3c5d' }}>
                {t('nanofat_desc')}
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" style={{ color: '#1d3c5d' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-sansation font-normal text-xs md:text-sm" style={{ color: '#1d3c5d' }}>
                    {t('nanofat_point_1')}
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" style={{ color: '#1d3c5d' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-sansation font-normal text-xs md:text-sm" style={{ color: '#1d3c5d' }}>
                    {t('nanofat_point_2')}
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" style={{ color: '#1d3c5d' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-sansation font-normal text-xs md:text-sm" style={{ color: '#1d3c5d' }}>
                    {t('nanofat_point_3')}
                  </p>
                </div>
              </div>
            </div>

            <p className="font-sansation font-normal text-sm md:text-base leading-relaxed text-center max-w-4xl mx-auto" style={{ color: '#1d3c5d' }}>
              {t('types_conclusion')}
            </p>
          </div>
        </div>
      </section>

      {/* Detalles de la técnica - Responsive */}
      <section
        className="py-8 md:py-12 lg:py-16 text-white"
        style={{
          background: 'linear-gradient(135deg, #1d3c5d 0%, #326dccff 50%, #1d3c5d 100%)'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-prototype font-normal text-2xl md:text-4xl lg:text-6xl mb-6 md:mb-9">
            {t('technique_title')}
          </h2>

          <div className="space-y-6 md:space-y-8 max-w-5xl mx-auto">
            <p className="font-sansation font-normal text-sm md:text-base lg:text-lg leading-relaxed">
              {t('technique_intro')}
            </p>

            <div className="space-y-4 md:space-y-6 text-left">
              <div>
                <h3 className="font-sansation font-bold text-lg md:text-xl mb-2 md:mb-3">{t('step_1_title')}</h3>
                <p className="font-sansation font-normal text-sm md:text-base leading-relaxed">
                  {t('step_1_desc')}
                </p>
              </div>

              <div>
                <h3 className="font-sansation font-bold text-lg md:text-xl mb-2 md:mb-3">{t('step_2_title')}</h3>
                <p className="font-sansation font-normal text-sm md:text-base leading-relaxed">
                  {t('step_2_desc')}
                </p>
              </div>

              <div>
                <h3 className="font-sansation font-bold text-lg md:text-xl mb-2 md:mb-3">{t('step_3_title')}</h3>
                <p className="font-sansation font-normal text-sm md:text-base leading-relaxed">
                  {t('step_3_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidatos - Responsive */}
      <section className="py-8 md:py-12 lg:py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 text-center" style={{ color: '#1d3c5d' }}>
            {t('candidates_title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                text: t('candidate_1'),
                icon: "/images/iconos/cheque-blanco.png"
              },
              {
                text: t('candidate_2'),
                icon: "/images/iconos/cheque-blanco.png"
              },
              {
                text: t('candidate_3'),
                icon: "/images/iconos/cheque-blanco.png"
              },
              {
                text: t('candidate_4'),
                icon: "/images/iconos/cheque-blanco.png"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-lg text-white text-center flex flex-col items-center justify-center"
                style={{
                  backgroundColor: '#338dd4',
                  minHeight: '280px',
                  width: '100%'
                }}
              >
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  <img
                    src={item.icon}
                    alt={`Ícono candidato ${index + 1}`}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23ffffff' fill-opacity='0.2' rx='8'/%3E%3Ctext x='32' y='37' text-anchor='middle' font-family='Arial' font-size='10' fill='%23ffffff'%3EÍcono%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>
                <p className="font-sansation font-normal text-xs md:text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas - Responsive */}
      <section className="py-8 md:py-12 lg:py-16 text-white" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="container mx-auto px-4">
          <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-12">
            {t('advantages_title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                text: t('advantage_1'),
                icon: "/images/iconos/cheque.png"
              },
              {
                text: t('advantage_2'),
                icon: "/images/iconos/cheque.png"
              },
              {
                text: t('advantage_3'),
                icon: "/images/iconos/cheque.png"
              },
              {
                text: t('advantage_4'),
                icon: "/images/iconos/cheque.png"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-lg flex flex-col items-center justify-center text-center"
                style={{
                  backgroundColor: '#babdb3',
                  minHeight: '280px',
                  width: '100%'
                }}
              >
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  <img
                    src={item.icon}
                    alt={`Ícono ventaja ${index + 1}`}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%231d3c5d' fill-opacity='0.2' rx='8'/%3E%3Ctext x='32' y='37' text-anchor='middle' font-family='Arial' font-size='10' fill='%231d3c5d'%3EÍcono%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>
                <p className="font-sansation font-normal text-xs md:text-sm leading-relaxed" style={{ color: '#1d3c5d' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparación VS - Responsive */}
      <section className="py-8 md:py-12 lg:py-16" style={{ backgroundColor: '#2b81c4' }}>
        <div className="container mx-auto px-4">
          {/* Encabezados de columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-8">
            <div className="px-4 md:px-6 py-3 md:py-4 rounded-lg text-center" style={{ backgroundColor: '#c1dcf2' }}>
              <h2 className="font-sansation font-bold text-lg md:text-xl lg:text-2xl" style={{ color: '#1d3c5d' }}>
                {t('comparison_lipofilling_title')}
              </h2>
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4 rounded-lg text-center">
              <span className="font-prototype font-normal text-lg md:text-xl lg:text-2xl text-white">
                {t('comparison_vs')}
              </span>
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4 rounded-lg text-center" style={{ backgroundColor: '#c1dcf2' }}>
              <h2 className="font-sansation font-bold text-lg md:text-xl lg:text-2xl" style={{ color: '#1d3c5d' }}>
                {t('comparison_fillers_title')}
              </h2>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {comparisonKeys.map((key, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
                {/* Columna izquierda - Lipofilling */}
                <div className="p-3 md:p-4 rounded-lg text-center" style={{ backgroundColor: '#c1dcf2' }}>
                  <p className="font-sansation font-bold text-xs md:text-sm" style={{ color: '#1d3c5d' }}>
                    {t(`comparison_items.${key}_lipo`)}
                  </p>
                </div>

                {/* Columna central - Criterio */}
                <div className="p-3 md:p-4 text-center">
                  <p className="font-sansation font-bold text-xs md:text-sm text-white">
                    {t(`comparison_items.${key}_criteria`)}
                  </p>
                </div>

                {/* Columna derecha - Rellenos */}
                <div className="p-3 md:p-4 rounded-lg text-center" style={{ backgroundColor: '#c1dcf2' }}>
                  <p className="font-sansation font-bold text-xs md:text-sm" style={{ color: '#1d3c5d' }}>
                    {t(`comparison_items.${key}_filler`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Gallery - Responsive */}
      <section className="py-8 md:py-12 lg:py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl text-left mb-8 md:mb-12" style={{ color: '#1d3c5d' }}>
            {t('results_title')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {[
              { src: "/images/lipofilling/MonicaFrenteAntes.webp", label: "ANTES", procedure: "Lipofilling con Células Madre" },
              { src: "/images/lipofilling/MonicaFrenteDespues.webp", label: "DESPUÉS", procedure: "Lipofilling con Células Madre" },
              { src: "/images/lipofilling/VeronicaFrenteAntes.webp", label: "ANTES", procedure: "Lipofilling con Células Madre" },
              { src: "/images/lipofilling/VeronicaFrenteDespues.webp", label: "DESPUÉS", procedure: "Lipofilling con Células Madre" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4 shadow-lg">
                  <img
                    src={item.src}
                    alt={`Resultado ${Math.floor(index / 2) + 1} - ${item.label}`}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3C/svg%3E`;
                    }}
                  />

                  {/* Etiqueta inferior con degradado azul */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="px-3 md:px-4 py-2 md:py-3 text-white text-center rounded-b-lg"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.3) 30%, rgba(29, 60, 93, 0.6) 70%, rgba(29, 60, 93, 0.8) 100%)'
                      }}
                    >
                      <div className="font-sansation font-bold text-xs md:text-sm">{item.label}</div>
                      <div className="font-sansation font-normal text-xs opacity-90">{item.procedure}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón específico - Responsive */}
          <div className="text-center mb-12 md:mb-16">
            <Link
              href={`/${locale}/galeria/procedimientos-faciales/lipofilling`}
              className="font-sansation font-bold inline-flex items-center gap-2 border-2 px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-opacity-10 hover:scale-105 transition-all duration-300 shadow-md text-sm md:text-base"
              style={{
                borderColor: '#1d3c5d',
                color: '#1d3c5d',
                backgroundColor: 'transparent'
              }}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="hidden sm:inline">{t('view_more_cases')}</span>
              <span className="sm:hidden">{t('view_more_cases')}</span>
            </Link>
          </div>

          {/* Testimonios */}
          <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4" style={{ color: '#1d3c5d' }}>
            {t('testimonials_title')}
          </h2>
          <div className="w-32 md:w-48 h-1 mb-8 md:mb-12" style={{ backgroundColor: '#1d3c5d' }}></div>

          {/* Video testimonio - Responsive */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative rounded-lg overflow-hidden aspect-video w-full max-w-2xl">
              <video playsInline
                className="w-full h-full object-cover"
                poster="/images/testimonio-lipo.webp"
                controls
                onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              >
                <source src="https://media.drandrespereznieto.com/images/videos/Lipofilling facial con células madre.mp4" type="video/mp4" />
                <source src="https://media.drandrespereznieto.com/images/videos/video-lipofilling-facial-celulas-madre.webm" type="video/webm" />
                Tu navegador no soporta el elemento video.
              </video>

              <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none', backgroundColor: '#1d3c5d' }}>
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#326dccff' }}>
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="font-sansation font-normal text-white text-xs md:text-sm">Testimonio Paciente</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/testimonios`}
              className="font-sansation font-bold inline-block border-2 px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-opacity-90 transition-colors text-sm md:text-base"
              style={{
                borderColor: '#1d3c5d',
                color: '#1d3c5d',
                backgroundColor: 'transparent'
              }}
            >
              {t('view_more_testimonials')}
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Video Reels Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-prototype font-normal text-3xl lg:text-4xl mb-3" style={{ color: '#1d3c5d' }}>
              {copy.videos_title}
            </h2>
            <p className="font-sansation text-sm text-gray-500 max-w-xl mx-auto">
              {copy.videos_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md flex flex-col justify-between max-w-[320px] mx-auto w-full">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-black relative shadow-inner">
                <iframe
                  src="https://www.instagram.com/reel/DY6E1bsphct/embed/"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-sansation font-bold text-[#1d3c5d]">
                  {activeLocale === 'es' ? 'Lipofilling vs. Lifting' : 'Lipofilling vs. Facelift'}
                </h4>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md flex flex-col justify-between max-w-[320px] mx-auto w-full">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-black relative shadow-inner">
                <iframe
                  src="https://www.instagram.com/reel/DYljFiupPUA/embed/"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-sansation font-bold text-[#1d3c5d]">
                  {activeLocale === 'es' ? 'Células Madre y Elasticidad' : 'Stem Cells & Elasticity'}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Responsive */}
      <section className="py-8 md:py-12 lg:py-16" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12">
            <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-64 md:w-86 h-1" style={{ backgroundColor: '#1d3c5d' }}></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
            {mergedFaqs.map((faq, index) => (
              <div key={index} className="rounded-lg shadow-sm overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
                <div
                  className="flex justify-between items-center cursor-pointer p-4 md:p-6 hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-sansation font-bold text-sm md:text-lg pr-4" style={{ color: '#1d3c5d' }}>{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                    style={{ color: '#1d3c5d' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openFaq === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-gray-50 pt-4">
                    <div className="font-sansation font-normal text-sm md:text-base leading-relaxed text-gray-700">
                      {faq.answer}
                    </div>
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