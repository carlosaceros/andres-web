"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('mamoplastia_reduccion')
  const t_testimonials = useTranslations('results_gallery')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5']

  return (
    <>
      {/* Hero Section - Imagen 1 */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="https://media.drandrespereznieto.com/images/videos/Banner-Mamoplastia-reduccion.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = '/images/Banner-Mamoplastia-reduccion.webp';
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 h-[600px] flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-8">
              <div>
                <h1 className="font-prototype font-normal text-5xl lg:text-6xl mb-2" style={{ color: '#1d3c5d' }}>
                  {t('title')} {locale === 'es' ? 'en Bogotá' : 'in Colombia'}
                </h1>

              {/* EEAT & FOMO Badge */}
              <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm max-w-xl my-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1d3c5d]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  {locale === 'es' ? '30+ Años de Experiencia | Miembro SCCP & ISAPS' : '30+ Years of Experience | SCCP & ISAPS Member'}
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-xs font-semibold text-amber-700 animate-pulse">
                  {locale === 'es' ? '⚠️ Cupos Quirúrgicos Limitados' : '⚠️ Limited Surgical Slots'}
                </span>
              </div>

                <div className="w-106 h-1 mb-" style={{ backgroundColor: '#1d3c5d' }}></div>
              </div>

              <h2 className="font-sansation font-bold text-2xl lg:text-3xl mb-8" style={{ color: '#1d3c5d' }}>
                {t('subtitle')}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción - Imagen 2 */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="font-sansation font-normal text-lg leading-relaxed mb-6" style={{ color: '#1d3c5d' }}>
              {t('description_p1')}
            </p>

            <p className="font-sansation font-normal text-lg leading-relaxed mb-6" style={{ color: '#1d3c5d' }}>
              {t('description_p2')}
            </p>

            <div className="space-y-3 font-sansation font-normal text-lg mb-6" style={{ color: '#1d3c5d' }}>
              <p>{t('problem_1')}</p>
              <p>{t('problem_2')}</p>
              <p>{t('problem_3')}</p>
            </div>

            <p className="font-sansation font-normal text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
              {t('description_p3')}
            </p>
          </div>
        </div>
      </section>

      {/* Detalles de la Técnica - CON FONDO DEGRADADO AZUL */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #1d3c5d 0%, #4a6fa5 50%, #1d3c5d 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-white">
            <h2 className="font-prototype font-normal text-6xl mb-8">
              {t('technique_title')}
            </h2>

            <p className="font-sansation font-normal text-lg mb-8 leading-relaxed">
              {t('technique_intro')}
            </p>

            <div className="text-center mb-12">
              <h3 className="font-sansation font-bold text-4xl mb-8">
                {t('technique_subtitle')}
              </h3>
              <p className="font-sansation font-normal text-lg mb-12">
                {t('technique_desc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8" style={{ color: '#1d3c5d' }}>
                <h4 className="font-sansation font-bold text-2xl mb-6">
                  {t('vertical_tech_title')}
                </h4>

                <p className="font-sansation font-normal mb-6 leading-relaxed">
                  {t('vertical_tech_desc')}
                </p>
              </div>

              <div className="bg-white rounded-lg p-8" style={{ color: '#1d3c5d' }}>
                <h4 className="font-sansation font-bold text-2xl mb-6">
                  {t('aesthetic_results_title')}
                </h4>

                <p className="font-sansation font-normal leading-relaxed">
                  {t('aesthetic_results_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidatas + Video - Imagen 4 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-prototype font-normal text-6xl mb-8" style={{ color: '#1d3c5d' }}>
              {t('candidates_title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="font-sansation font-normal text-lg leading-relaxed mb-8" style={{ color: '#1d3c5d' }}>
                {t('candidates_intro_1')}
              </p>

              <p className="font-sansation font-normal text-lg leading-relaxed mb-6" style={{ color: '#1d3c5d' }}>
                {t('candidates_intro_2')}
              </p>

              <div className="space-y-3 font-sansation font-normal text-lg" style={{ color: '#1d3c5d' }}>
                <p>{t('candidate_1')}</p>
                <p>{t('candidate_2')}</p>
                <p>{t('candidate_3')}</p>
                <p>{t('candidate_4')}</p>
                <p>{t('candidate_5')}</p>
                <p>{t('candidate_6')}</p>
              </div>
            </div>

            {/* VIDEO EN LUGAR DE LA TARJETA AZUL */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <div className="relative rounded-lg overflow-hidden aspect-video" style={{ backgroundColor: '#1d3c5d' }}>
                  <video playsInline
                    className="w-full h-full object-cover"
                    poster=""
                    controls
                    preload="metadata"
                    onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }}
                  >
                    <source src="https://media.drandrespereznieto.com/images/videos/Mamoplástia de Reducción.mp4" type="video/mp4" />
                    <source src="https://media.drandrespereznieto.com/images/videos/Mamoplastia-Reduccion.webm" type="video/webm" />
                    Tu navegador no soporta el elemento video.
                  </video>

                  {/* FALLBACK SI NO CARGA EL VIDEO */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d', display: 'none' }}>
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="font-sansation font-bold text-2xl mb-2">{t('video_title')}</div>
                      <div className="font-sansation font-normal text-lg">Dr. Andrés Pérez</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Título alineado a la izquierda */}
            <div className="text-left mb-8">
              <h2 className="font-prototype font-normal text-5xl mb-4" style={{ color: '#1d3c5d' }}>
                {t('results_title')}
              </h2>

            </div>

            {/* Botón centrado */}
            <div className="text-center">
              <Link
                href={`/${locale}/galeria/procedimientos-corporales/mamoplastia-reduccion`}
                className="font-sansation font-bold inline-flex items-center gap-2 border-2 px-8 py-3 rounded-lg hover:bg-opacity-10 hover:scale-105 transition-all duration-300 shadow-md"
                style={{
                  borderColor: '#1d3c5d',
                  color: '#1d3c5d',
                  backgroundColor: 'transparent'
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {t('view_more_cases')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Imagen 5 */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-86 h-1 mb-6" style={{ backgroundColor: '#1d3c5d' }}></div>
          </div>

          <div className="space-y-4">
            {faqKeys.map((key, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-sansation font-bold pr-4" style={{ color: '#1d3c5d' }}>{t(`faqs.${key}.question`)}</span>
                  <svg
                    className={`w-5 h-5 transition-transform flex-shrink-0 ${openFaq === index ? 'transform rotate-180' : ''}`}
                    style={{ color: '#1d3c5d' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <div className="font-sansation font-normal leading-relaxed text-left" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw(`faqs.${key}.answer`) }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}