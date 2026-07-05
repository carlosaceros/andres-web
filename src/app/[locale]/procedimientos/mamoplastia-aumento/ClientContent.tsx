"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('mamoplastia_aumento')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/Banner-Mamoplastia-aumento.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = '/images/Banner-Mamoplastia-aumento.webp';
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 h-[600px] flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-8">
              <div>
                <h1 className="font-prototype font-normal text-5xl lg:text-6xl mb-2" style={{ color: '#1d3c5d' }}>
                  {t('title')}
                </h1>
                <div className="w-108 h-1 mb-" style={{ backgroundColor: '#1d3c5d' }}></div>
              </div>

              <h2 className="font-sansation font-bold text-2xl lg:text-3xl mb-8" style={{ color: '#1d3c5d' }}>
                {t('subtitle')}
              </h2>

              <div className="font-sansation font-normal text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                <p>
                  {t('description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Quiénes suelen consultar? */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-prototype font-normal text-6xl mb-8" style={{ color: '#1d3c5d' }}>
              {t('candidates_title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="font-sansation font-bold text-xl mb-4" style={{ color: '#1d3c5d' }}>
                {t('candidates_group1_title')}
              </h3>
              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('candidates_group1_desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="font-sansation font-bold text-xl mb-4" style={{ color: '#1d3c5d' }}>
                {t('candidates_group2_title')}
              </h3>
              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('candidates_group2_desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="font-sansation font-bold text-xl mb-4" style={{ color: '#1d3c5d' }}>
                {t('candidates_group3_title')}
              </h3>
              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('candidates_group3_desc')}
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="font-sansation font-bold text-3xl mb-8" style={{ color: '#1d3c5d' }}>
              {t('important_note_title')}
            </h3>

            <p className="font-sansation font-normal text-lg leading-relaxed max-w-4xl mx-auto mb-8" style={{ color: '#1d3c5d' }}>
              {t('important_note_desc')}
            </p>
          </div>

          {/* Video Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="relative rounded-lg overflow-hidden aspect-video" style={{ backgroundColor: '#1d3c5d' }}>
                <video
                  className="w-full h-full object-cover"
                  poster=""
                  controls
                  preload="metadata"
                >
                  {/*} <source src="/images/videos/Mamoplástia de Aumento.mp4" type="video/mp4" />*/}
                  <source src="/images/videos/Mamoplastia-Aumento.webm" type="video/webm" />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="font-sansation font-bold text-2xl mb-2">{t('video_title')}</div>
                      <div className="font-sansation font-normal text-lg">{t('video_subtitle')}</div>
                    </div>
                  </div>
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detalles de la Técnica con fondo degradado */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #1d3c5d 0%, #4a6fa5 50%, #1d3c5d 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-white">
            <h2 className="font-prototype font-normal text-4xl mb-8">
              {t('technique_title')}
            </h2>

            <p className="font-sansation font-normal text-lg mb-8 leading-relaxed">
              {t('technique_desc')}
            </p>

            <div className="space-y-6 text-lg leading-relaxed mb-8">
              <div>
                <h3 className="font-sansation font-bold text-xl mb-4">{t('planning_title')}</h3>
                <p className="font-sansation font-normal mb-4">
                  {t('planning_desc')}
                </p>
                <div className="space-y-2 ml-4 font-sansation font-normal" dangerouslySetInnerHTML={{ __html: t.raw('planning_list') }} />
              </div>

              <div>
                <h3 className="font-sansation font-bold text-xl mb-4">{t('incision_title')}</h3>
                <p className="font-sansation font-normal">
                  {t('incision_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Técnica Dual Plane y Cierre */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-lg p-8" style={{ backgroundColor: '#babdb3' }}>
              <h3 className="font-sansation font-bold text-2xl mb-6" style={{ color: '#1d3c5d' }}>
                {t('dual_plane_title')}
              </h3>

              <p className="font-sansation font-normal mb-6 leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('dual_plane_desc')}
              </p>

              <div className="space-y-3 font-sansation font-normal" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw('dual_plane_list') }} />
            </div>

            <div className="rounded-lg p-8" style={{ backgroundColor: '#babdb3' }}>
              <h3 className="font-sansation font-bold text-2xl mb-6" style={{ color: '#1d3c5d' }}>
                {t('closure_title')}
              </h3>

              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('closure_desc')}
              </p>
            </div>
          </div>

          <div>
            {/* Título alineado a la izquierda */}
            <div className="text-left mb-8">
              <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
                {t('results_title')}
              </h2>
            </div>

            {/* Botón centrado */}
            <div className="text-center">
              <Link
                href={`/${locale}/galeria/procedimientos-corporales/mamoplastia-aumento`}
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

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-88 h-1 mb-6" style={{ backgroundColor: '#1d3c5d' }}></div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(0)}
              >
                <span className="font-sansation font-bold pr-4" style={{ color: '#1d3c5d' }}>{t('faqs.q1.question')}</span>
                <svg
                  className={`w-5 h-5 transition-transform flex-shrink-0 ${openFaq === 0 ? 'transform rotate-180' : ''}`}
                  style={{ color: '#1d3c5d' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-4">
                  <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                    {t('faqs.q1.answer')}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(1)}
              >
                <span className="font-sansation font-bold pr-4" style={{ color: '#1d3c5d' }}>{t('faqs.q2.question')}</span>
                <svg
                  className={`w-5 h-5 transition-transform flex-shrink-0 ${openFaq === 1 ? 'transform rotate-180' : ''}`}
                  style={{ color: '#1d3c5d' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-4">
                  <div className="font-sansation font-normal leading-relaxed space-y-2" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw('faqs.q2.answer') }} />
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(2)}
              >
                <span className="font-sansation font-bold pr-4" style={{ color: '#1d3c5d' }}>{t('faqs.q3.question')}</span>
                <svg
                  className={`w-5 h-5 transition-transform flex-shrink-0 ${openFaq === 2 ? 'transform rotate-180' : ''}`}
                  style={{ color: '#1d3c5d' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-4">
                  <div className="font-sansation font-normal leading-relaxed space-y-2" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw('faqs.q3.answer') }} />
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(3)}
              >
                <span className="font-sansation font-bold pr-4" style={{ color: '#1d3c5d' }}>{t('faqs.q4.question')}</span>
                <svg
                  className={`w-5 h-5 transition-transform flex-shrink-0 ${openFaq === 3 ? 'transform rotate-180' : ''}`}
                  style={{ color: '#1d3c5d' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-4">
                  <div className="font-sansation font-normal leading-relaxed space-y-2" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw('faqs.q4.answer') }} />
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(4)}
              >
                <span className="font-sansation font-bold pr-4" style={{ color: '#1d3c5d' }}>{t('faqs.q5.question')}</span>
                <svg
                  className={`w-5 h-5 transition-transform flex-shrink-0 ${openFaq === 4 ? 'transform rotate-180' : ''}`}
                  style={{ color: '#1d3c5d' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-4">
                  <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                    {t('faqs.q5.answer')}
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}