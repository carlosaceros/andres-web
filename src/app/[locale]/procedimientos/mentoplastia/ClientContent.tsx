"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('mentoplastia')
  const t_testimonials = useTranslations('results_gallery')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqKeys = ['q1', 'q2', 'q3']

  return (
    <>
      {/* Hero Section - Responsive */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/Mentoplastia-banner.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = '/images/Mentoplastia-banner.webp';
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-20 min-h-[500px] md:min-h-[600px] lg:min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h1 className="font-prototype font-normal text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6" style={{ color: '#1d3c5d' }}>
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

                <div className="w-24 md:w-48 lg:w-87 h-1 mb-6 md:mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
              </div>

              <div className="font-sansation font-normal text-sm md:text-base lg:text-lg leading-relaxed" style={{ color: '#1d3c5d', maxWidth: '750px' }}>
                <p style={{ margin: 0, lineHeight: '1.6' }}>
                  {t('description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La técnica del Dr. Pérez - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 md:mb-12">
            <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
              {t('technique_title')}
            </h2>

            <p className="font-sansation font-normal text-sm md:text-base lg:text-lg leading-relaxed max-w-5xl mb-6 md:mb-8" style={{ color: '#1d3c5d' }}>
              {t('technique_intro')}
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 leading-relaxed" style={{ color: '#1d3c5d' }}>
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="w-2 h-2 rounded-full mt-2 md:mt-3 flex-shrink-0" style={{ backgroundColor: '#1d3c5d' }}></div>
              <p className="font-sansation font-normal text-sm md:text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: t.raw('technique_step1') }} />
            </div>

            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="w-2 h-2 rounded-full mt-2 md:mt-3 flex-shrink-0" style={{ backgroundColor: '#1d3c5d' }}></div>
              <p className="font-sansation font-normal text-sm md:text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: t.raw('technique_step2') }} />
            </div>

            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="w-2 h-2 rounded-full mt-2 md:mt-3 flex-shrink-0" style={{ backgroundColor: '#1d3c5d' }}></div>
              <p className="font-sansation font-normal text-sm md:text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: t.raw('technique_step3') }} />
            </div>
          </div>
        </div>
      </section>

      {/* Candidatos ideales - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left mb-8 md:mb-12">
            <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl text-white mb-6 md:mb-8">
              {t('candidates_title')}
            </h2>

            <p className="font-sansation font-normal text-white text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl">
              {t('candidates_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Nuestros excelentes resultados - Responsive */}
      <section className="bg-white py-8 md:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4" style={{ color: '#1d3c5d' }}>
              {t('results_title')}
            </h2>
            <div className="w-16 md:w-20 lg:w-24 h-1 mb-6 md:mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { src: "/images/mentoplastia/Paciente1Antes.webp", label: t_testimonials('before_label'), type: t('title') },
              { src: "/images/mentoplastia/Paciente1Despues.webp", label: t_testimonials('after_label'), type: t('title') },
              { src: "/images/mentoplastia/Paciente4Antes.webp", label: t_testimonials('before_label'), type: t('title') },
              { src: "/images/mentoplastia/Paciente4Despues.webp", label: t_testimonials('after_label'), type: t('title') }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Resultado Mentoplastia ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='375' viewBox='0 0 300 375'%3E%3Crect width='300' height='375' fill='%23f3f4f6'/%3E%3Ctext x='150' y='180' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='12' fill='%236b7280'%3E${item.type}%3C/text%3E%3C/svg%3E`
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="px-3 md:px-4 py-2 md:py-3 text-white text-center"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(29,60,93,0.6) 40%, rgba(29,60,93,0.8) 70%, rgba(29,60,93,1) 100%)'
                      }}
                    >
                      <div className="font-sansation font-bold text-sm md:text-base lg:text-lg mb-1">
                        {item.label}
                      </div>
                      <div className="font-sansation font-normal text-xs md:text-sm">
                        {item.type}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/galeria/procedimientos-faciales/mentoplastia`}
              className="font-sansation font-bold inline-flex items-center gap-2 border-2 px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg hover:bg-opacity-10 hover:scale-105 transition-all duration-300 shadow-md text-sm md:text-base"
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
              <span className="sm:hidden">{t('view_more_cases_short')}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ - Responsive */}
      <section className="py-8 md:py-12 lg:py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-left mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-prototype font-normal text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-16 md:w-20 lg:w-24 h-1 mb-6 md:mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqKeys.map((key, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-sansation font-bold pr-3 md:pr-4 text-sm md:text-base" style={{ color: '#1d3c5d' }}>{t(`faqs.${key}.question`)}</span>
                  <svg
                    className={`w-4 h-4 md:w-5 md:h-5 transition-transform flex-shrink-0 ${openFaq === index ? 'transform rotate-180' : ''}`}
                    style={{ color: '#1d3c5d' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-4 md:px-6 pb-3 md:pb-4">
                    <p className="font-sansation font-normal text-sm md:text-base leading-relaxed" style={{ color: '#1d3c5d' }}>{t(`faqs.${key}.answer`)}</p>
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