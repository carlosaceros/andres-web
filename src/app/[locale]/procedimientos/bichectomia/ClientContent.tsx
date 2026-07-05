"use client"
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('bichectomia')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqKeys = ['q1', 'q2']

  return (
    <>
      {/* Hero Section - Banner */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/banner-Bichectomia.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = '/images/banner-Bichectomia.webp';
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-8">
              <div>
                <h1 className="font-prototype font-normal text-5xl lg:text-4xl mb-4" style={{ color: '#1d3c5d' }}>{t('title')} {locale === 'es' ? 'en Bogotá' : 'in Colombia'}</h1>

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

                <div className="w-52 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
                <h2 className="font-sansation font-bold text-2xl lg:text-3xl mb-6" style={{ color: '#1d3c5d' }}>
                  {t('subtitle')}
                </h2>

              </div>

              <div className="font-sansation font-normal text-lg leading-relaxed space-y-6" style={{ color: '#1d3c5d' }}>
                <p>{t('description_p1')}</p>
                <p>{t('description_p2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* La técnica personalizada del Dr. Pérez */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-prototype font-normal text-4xl mb-8" style={{ color: '#1d3c5d' }}>
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

      {/* Candidatos ideales */}
      <section
        className="py-20"
        style={{ backgroundColor: '#1d3c5d' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-prototype font-normal text-4xl text-white mb-8">
              {t('candidates_title')}
            </h2>

            <p className="font-sansation font-normal text-white text-lg mb-12">
              {t('candidates_intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="rounded-lg p-8 text-center min-h-[280px] flex items-center justify-center" style={{ backgroundColor: '#babdb3' }}>
              <div>
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {/* AQUÍ SUBES TU ICONO PNG #1 */}
                  <img
                    src="/images/iconos/cheque.png"
                    alt="Icono bichectomia 1"
                    className="w-12 h-12 object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = '/images/fallback-icon.png';
                    }}
                  />
                </div>
                <h3 className="font-sansation font-bold text-xl" style={{ color: '#1d3c5d' }}>
                  {t('candidate_1')}
                </h3>
              </div>
            </div>

            <div className="rounded-lg p-8 text-center min-h-[280px] flex items-center justify-center" style={{ backgroundColor: '#babdb3' }}>
              <div>
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {/* AQUÍ SUBES TU ICONO PNG #2 */}
                  <img
                    src="/images/iconos/cheque.png"
                    alt="Icono bichectomia 2"
                    className="w-12 h-12 object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = '/images/fallback-icon.png';
                    }}
                  />
                </div>
                <h3 className="font-sansation font-bold text-xl" style={{ color: '#1d3c5d' }}>
                  {t('candidate_2')}
                </h3>
              </div>
            </div>

            <div className="rounded-lg p-8 text-center min-h-[280px] flex items-center justify-center" style={{ backgroundColor: '#babdb3' }}>
              <div>
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {/* AQUÍ SUBES TU ICONO PNG #3 */}
                  <img
                    src="/images/iconos/cheque.png"
                    alt="Icono bichectomia 3"
                    className="w-12 h-12 object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = '/images/fallback-icon.png';
                    }}
                  />
                </div>
                <h3 className="font-sansation font-bold text-xl" style={{ color: '#1d3c5d' }}>
                  {t('candidate_3')}
                </h3>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-sansation font-bold text-3xl text-white mb-8">
              {t('decision_title')}
            </h3>

            <p className="font-sansation font-normal text-white text-lg leading-relaxed max-w-4xl mx-auto">
              {t('decision_desc')}
            </p>
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
            <div className="w-32 h-1 mb-6" style={{ backgroundColor: '#1d3c5d' }}></div>
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
