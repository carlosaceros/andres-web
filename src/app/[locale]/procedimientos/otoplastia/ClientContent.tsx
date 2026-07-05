"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('otoplastia')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqKeys = ['q1', 'q2', 'q3']

  return (
    <>
      {/* Hero Section - Imagen 1 */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/banner-Otoplastia.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = '/images/banner-Otoplastia.webp';
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-8">
              <div>
                <h1 className="font-prototype font-normal text-5xl lg:text-6xl mb-2" style={{ color: '#1d3c5d' }}>
                  {t('title')}
                </h1>
                <h2 className="font-sansation font-bold text-4xl lg:text-5xl mb-6" style={{ color: '#1d3c5d' }}>
                  {t('subtitle')}
                </h2>
                <div className="w-71 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
              </div>

              <div className="font-sansation font-normal text-lg leading-relaxed space-y-6" style={{ color: '#1d3c5d' }}>
                <p>{t('description_p1')}</p>
                <p>{t('description_p2')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* La técnica quirúrgica del Dr. Pérez - Imagen 2 */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-prototype font-normal text-6xl mb-8" style={{ color: '#1d3c5d' }}>
              {t('technique_title')}
            </h2>

            <p className="font-sansation font-normal text-lg leading-relaxed max-w-5xl mb-8" style={{ color: '#1d3c5d' }}>
              {t('technique_intro')}
            </p>
          </div>

          <div className="space-y-6 leading-relaxed" style={{ color: '#1d3c5d' }}>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#1d3c5d' }}></div>
              <p className="font-sansation font-normal text-lg">
                {t('technique_step1')}
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#1d3c5d' }}></div>
              <p className="font-sansation font-normal text-lg">
                {t('technique_step2')}
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#1d3c5d' }}></div>
              <p className="font-sansation font-normal text-lg">
                {t('technique_step3')}
              </p>
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
              href={`/${locale}/galeria/procedimientos-faciales/otoplastia/`}
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



      {/* FAQ - Imagen 4 */}
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
                    <div className="font-sansation font-normal leading-relaxed space-y-2" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw(`faqs.${key}.answer`) }} />
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