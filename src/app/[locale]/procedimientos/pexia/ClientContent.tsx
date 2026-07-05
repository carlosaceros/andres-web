"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('pexia')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqKeys = ['q1', 'q2', 'q3', 'q4']

  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="https://media.drandrespereznieto.com/images/videos/Banner-Mamoplastia-reduccion.webp"
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
                  {t('title')}
                </h1>
                <div className="w-106 h-1 mb-" style={{ backgroundColor: '#1d3c5d' }}></div>
              </div>
              <h2 className="font-sansation font-bold text-2xl lg:text-3xl mb-8" style={{ color: '#1d3c5d' }}>
                {t('subtitle')}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6 font-sansation font-normal text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
            <p>{t('description_p1')}</p>
            <p>{t('description_p2')}</p>
          </div>
        </div>
      </section>

      {/* Candidates */}
      <section className="py-20" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-prototype font-normal text-4xl text-white text-center mb-8">{t('when_to_consider_title')}</h2>
          <p className="text-white text-center mb-12 font-sansation text-lg">{t('when_to_consider_intro')}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <p className="font-sansation text-lg" style={{ color: '#1d3c5d' }}>{t('candidate_1')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-sansation text-lg" style={{ color: '#1d3c5d' }}>{t('candidate_2')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-sansation text-lg" style={{ color: '#1d3c5d' }}>{t('candidate_3')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-sansation text-lg" style={{ color: '#1d3c5d' }}>{t('candidate_4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-prototype font-normal text-4xl text-center mb-8" style={{ color: '#1d3c5d' }}>{t('types_title')}</h2>
          <p className="text-center mb-12 font-sansation text-lg" style={{ color: '#1d3c5d' }}>{t('types_intro')}</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-lg shadow-lg bg-gray-50">
              <h3 className="font-sansation font-bold text-2xl mb-4" style={{ color: '#1d3c5d' }}>{t('pexia_with_implants_title')}</h3>
              <p className="font-sansation text-lg" style={{ color: '#1d3c5d' }}>{t('pexia_with_implants_desc')}</p>
            </div>
            <div className="p-8 rounded-lg shadow-lg bg-gray-50">
              <h3 className="font-sansation font-bold text-2xl mb-4" style={{ color: '#1d3c5d' }}>{t('pexia_without_implants_title')}</h3>
              <p className="font-sansation text-lg" style={{ color: '#1d3c5d' }}>{t('pexia_without_implants_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technique */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1d3c5d 0%, #4a6fa5 50%, #1d3c5d 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h2 className="font-prototype font-normal text-4xl mb-8">{t('technique_title')}</h2>
          <p className="font-sansation text-lg mb-8">{t('technique_intro')}</p>
          <div className="space-y-4 font-sansation text-lg">
            <p>{t('technique_point_1')}</p>
            <p>{t('technique_point_2')}</p>
            <p>{t('technique_point_3')}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-prototype font-normal text-4xl mb-12" style={{ color: '#1d3c5d' }}>{t('results_title')}</h2>
          <div className="text-center">
            <Link
              href={`/${locale}/galeria/procedimientos-corporales/pexia-mamaria`}
              className="font-sansation font-bold inline-flex items-center gap-2 border-2 px-8 py-3 rounded-lg hover:bg-opacity-10 hover:scale-105 transition-all duration-300 shadow-md"
              style={{
                borderColor: '#1d3c5d',
                color: '#1d3c5d',
                backgroundColor: 'transparent'
              }}
            >
              {t('view_more_cases')}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
