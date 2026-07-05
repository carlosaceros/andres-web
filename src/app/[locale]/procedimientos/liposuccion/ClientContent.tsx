"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('liposuccion')
  const t_testimonials = useTranslations('results_gallery')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqKeys = ['q1', 'q2', 'q3', 'q4']

  return (
    <>
      {/* 1. Hero Section - Imagen 1 */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/Banner-liposuccion.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = '/images/Banner-liposuccion.webp';
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

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lipoescultura Corporal - Imágenes 2 y 3 - FONDO AZUL */}
      <section className="py-20" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-white">
            <h2 className="font-prototype font-normal text-6xl mb-8">
              {t('subtitle')}
            </h2>

            <p className="font-sansation font-normal text-lg mb-12 leading-relaxed max-w-5xl">
              {t('description')}
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="font-sansation font-bold text-lg" style={{ color: '#1d3c5d' }}>
                  {t('factor_1')}
                </h3>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="font-sansation font-bold text-lg" style={{ color: '#1d3c5d' }}>
                  {t('factor_2')}
                </h3>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="font-sansation font-bold text-lg" style={{ color: '#1d3c5d' }}>
                  {t('factor_3')}
                </h3>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="font-sansation font-bold text-lg" style={{ color: '#1d3c5d' }}>
                  {t('factor_4')}
                </h3>
              </div>
            </div>

            <p className="font-sansation font-normal text-lg leading-relaxed max-w-5xl">
              {t('intro_conclusion')}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Tipos de Liposucción - Imagen 4 - FONDO GRIS */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-prototype font-normal text-6xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('types_title')}
            </h2>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

            <p className="font-sansation font-normal text-lg leading-relaxed max-w-4xl" style={{ color: '#1d3c5d' }}>
              {t('types_intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 text-white rounded-full mx-auto mb-6 text-2xl font-bold" style={{ backgroundColor: '#1d3c5d' }}>
                1
              </div>

              <h3 className="font-sansation font-bold text-xl mb-4 text-center" style={{ color: '#1d3c5d' }}>
                {t('type_1_title')}
              </h3>

              <p className="font-sansation font-normal leading-relaxed text-center mb-6" style={{ color: '#1d3c5d' }}>
                {t('type_1_desc')}
              </p>

              <div className="rounded-lg overflow-hidden" style={{ backgroundColor: '#1d3c5d' }}>
                <div className="relative aspect-video">
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
                    <source src="https://media.drandrespereznieto.com/images/videos/Liposucción Tradicional.mp4" type="video/mp4" />
                    <source src="https://media.drandrespereznieto.com/images/videos/Liposuccion-Tradicional.webm" type="video/webm" />
                    Tu navegador no soporta el elemento video.
                  </video>

                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d', display: 'none' }}>
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="font-sansation font-bold text-lg mb-2">{t('video_1_title')}</div>
                      <div className="font-sansation font-normal text-sm">Firma del Dr. Andrés Pérez</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 text-white rounded-full mx-auto mb-6 text-2xl font-bold" style={{ backgroundColor: '#1d3c5d' }}>
                2
              </div>

              <h3 className="font-sansation font-bold text-xl mb-4 text-center" style={{ color: '#1d3c5d' }}>
                {t('type_2_title')}
              </h3>

              <p className="font-sansation font-normal leading-relaxed text-center mb-6" style={{ color: '#1d3c5d' }}>
                {t('type_2_desc')}
              </p>

              <div className="rounded-lg overflow-hidden" style={{ backgroundColor: '#1d3c5d' }}>
                <div className="relative aspect-video">
                  <video playsInline
                    className="w-full h-full object-cover"
                    poster="https://media.drandrespereznieto.com/images/todos/img-lipolisis.webp"
                    controls
                    preload="metadata"
                    onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }}
                  >
                    <source src="https://media.drandrespereznieto.com/images/videos/Lipólisis Vaser.mp4" type="video/mp4" />
                    <source src="https://media.drandrespereznieto.com/images/videos/Lipolisis-Vaser.webm" type="video/webm" />
                    Tu navegador no soporta el elemento video.
                  </video>

                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d', display: 'none' }}>
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="font-sansation font-bold text-lg mb-2">{t('video_2_title')}</div>
                      <div className="font-sansation font-normal text-sm">Firma del Dr. Andrés Pérez</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="flex items-center justify-center w-16 h-16 text-white rounded-full mx-auto mb-6 text-2xl font-bold" style={{ backgroundColor: '#1d3c5d' }}>
                3
              </div>

              <h3 className="font-sansation font-bold text-xl mb-4" style={{ color: '#1d3c5d' }}>
                {t('type_3_title')}
              </h3>

              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('type_3_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Técnica Personalizada del Dr. Pérez - Imagen 5 - FONDO AZUL */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #4a6fa5 0%, #1d3c5d 50%, #1d3c5d 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-white">
            <h2 className="font-prototype font-normal text-7xl mb-8">
              {t('technique_title')}
            </h2>

            <p className="font-sansation font-normal text-lg mb-8 leading-relaxed">
              {t('technique_desc')}
            </p>

            <div className="space-y-6 font-sansation font-normal text-lg leading-relaxed mb-12">
              <p>{t('technique_point_1')}</p>
              <p>{t('technique_point_2')}</p>
              <p>{t('technique_point_3')}</p>
            </div>

            <div>
              <h3 className="font-sansation font-bold text-5xl mb-6">
                {t('hd_title')}
              </h3>

              <p className="font-sansation font-normal text-lg mb-6 leading-relaxed">
                {t('hd_desc_1')}
              </p>

              <p className="font-sansation font-normal text-lg leading-relaxed">
                {t('hd_desc_2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros excelentes resultados */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Título alineado a la izquierda */}
          <div className="text-left mb-8">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('results_title')}
            </h2>
          </div>

          {/* Botón centrado */}
          <div className="text-center">
            <Link
              href={`/${locale}/galeria/procedimientos-corporales/lipoescultura`}
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
      </section>

      {/* 5. FAQ - Imagen 6 - FONDO GRIS */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-87 h-1 mb-6" style={{ backgroundColor: '#1d3c5d' }}></div>
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
                    <div className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw(`faqs.${key}.answer`) }} />
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