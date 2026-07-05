"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('abdominoplastia')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqKeys = ['q1', 'q2', 'q3']

  return (
    <>
      {/* Hero Section - Imagen 1 */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/Banner-Abdominoplastia.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
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

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remodela tu Abdomen - Imagen 2 */}
      <section
        className="py-20"
        style={{ backgroundColor: '#1d3c5d' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-white">
            <h2 className="font-prototype font-normal text-6xl mb-8">
              {t('subtitle')}
            </h2>

            <p className="font-sansation font-normal text-lg mb-12 leading-relaxed max-w-4xl">
              {t('description')}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="font-sansation font-bold text-lg mb-4" style={{ color: '#1d3c5d' }}>
                  {t('cause_1')}
                </h3>
              </div>

              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="font-sansation font-bold text-lg mb-4" style={{ color: '#1d3c5d' }}>
                  {t('cause_2')}
                </h3>
              </div>

              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="font-sansation font-bold text-lg mb-4" style={{ color: '#1d3c5d' }}>
                  {t('cause_3')}
                </h3>
              </div>
            </div>

            <p className="font-sansation font-normal text-lg leading-relaxed max-w-5xl mx-auto text-center">
              {t('intro_p2')}
            </p>
          </div>
        </div>
      </section>

      {/* Candidatos - Imagen 3 */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-prototype font-normal text-6xl mb-8" style={{ color: '#1d3c5d' }}>
              {t('candidates_title')}
            </h2>

            <p className="font-sansation font-normal text-lg leading-relaxed max-w-4xl mx-auto mb-12" style={{ color: '#1d3c5d' }}>
              {t('candidates_intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <img
                  src="/images/iconos/cheque.png"
                  alt="Icono exceso de piel"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="font-sansation font-bold text-xl mb-4" style={{ color: '#1d3c5d' }}>
                {t('candidate_1_title')}
              </h3>

              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('candidate_1_desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <img
                  src="/images/iconos/cheque.png"
                  alt="Icono flacidez muscular"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="font-sansation font-bold text-xl mb-4" style={{ color: '#1d3c5d' }}>
                {t('candidate_2_title')}
              </h3>

              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('candidate_2_desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <img
                  src="/images/iconos/cheque.png"
                  alt="Icono cicatrices"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="font-sansation font-bold text-xl mb-4" style={{ color: '#1d3c5d' }}>
                {t('candidate_3_title')}
              </h3>

              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('candidate_3_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Técnica HD - Imagen 4 */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #4a6fa5 0%, #1d3c5d 50%, #1d3c5d 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-white">
            <h2 className="font-prototype font-normal text-6xl mb-6">
              {t('technique_title')}
            </h2>

            <h3 className="font-sansation font-bold text-4xl mb-8">
              {t('technique_subtitle')}
            </h3>

            <p className="font-sansation font-normal text-lg mb-12 leading-relaxed">
              {t('technique_intro')}
            </p>

            <div className="space-y-8">
              <h4 className="font-sansation font-bold text-3xl mb-4">
                {t('technique_advantages_title')}
              </h4>

              <div className="space-y-6 font-sansation font-normal text-lg leading-relaxed">
                <div>
                  <h5 className="font-sansation font-bold mb-3">{t('advantage_1_title')}</h5>
                  <p className="ml-4">
                    {t('advantage_1_desc')}
                  </p>
                </div>

                <div>
                  <h5 className="font-sansation font-bold mb-3">{t('advantage_2_title')}</h5>
                  <p className="ml-4">
                    {t('advantage_2_desc')}
                  </p>
                </div>

                <div>
                  <h5 className="font-sansation font-bold mb-3">{t('advantage_3_title')}</h5>
                  <p className="ml-4">
                    {t('advantage_3_desc')}
                  </p>
                </div>

                <div>
                  <h5 className="font-sansation font-bold mb-3">{t('advantage_4_title')}</h5>
                  <p className="ml-4">
                    {t('advantage_4_desc')}
                  </p>
                </div>

                <div>
                  <h5 className="font-sansation font-bold mb-3">{t('advantage_5_title')}</h5>
                  <p className="ml-4">
                    {t('advantage_5_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Imagen 5 */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
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
                  <source src="https://media.drandrespereznieto.com/images/videos/Abdominoplástia.mp4" type="video/mp4" />
                  <source src="https://media.drandrespereznieto.com/images/videos/Abdominoplastia.webm" type="video/webm" />
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
                    <div className="font-sansation font-bold text-3xl mb-4">Abdominoplastia</div>
                    <div className="font-sansation font-normal text-xl">Firma del Dr. Andrés Pérez</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Otras Técnicas - Imagen 6 */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-prototype font-normal text-6xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('other_techniques_title')}
            </h2>
            <div className="w-131 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

            <p className="font-sansation font-normal text-lg leading-relaxed max-w-5xl mb-12" style={{ color: '#1d3c5d' }}>
              {t('other_techniques_intro')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-sansation font-bold text-2xl mb-6 text-center" style={{ color: '#1d3c5d' }}>
                {t('mini_tummy_tuck_title')}
              </h3>

              <p className="font-sansation font-normal leading-relaxed mb-6 text-center" style={{ color: '#1d3c5d' }}>
                {t('mini_tummy_tuck_desc')}
              </p>

              <div className="space-y-4" style={{ color: '#1d3c5d' }}>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#1d3c5d' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-sansation font-normal leading-relaxed">
                    {t('mini_tummy_tuck_point_1')}
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#1d3c5d' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-sansation font-normal leading-relaxed">
                    {t('mini_tummy_tuck_point_2')}
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#1d3c5d' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-sansation font-normal leading-relaxed">
                    {t('mini_tummy_tuck_point_3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados - Imagen 7 */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Título alineado a la izquierda */}
          <div className="text-left mb-8">
            <h2 className="font-prototype font-normal text-5xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('results_title')}
            </h2>
          </div>

          {/* Botón centrado */}
          <div className="text-center">
            <Link
              href={`/${locale}/galeria/procedimientos-corporales/abdominoplatia`}
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

      {/* FAQ - Imagen 8 */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="font-prototype font-normal text-5xl mb-4" style={{ color: '#1d3c5d' }}>
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