"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('rinoplastia')
  const t_testimonials = useTranslations('results_gallery')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8']

  return (
    <>
      {/* Hero Section - Imagen 1 */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/banner-Rinoplastia.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = '/images/fallback-image.jpg';
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-8">
              <h1 className="font-prototype font-normal text-5xl lg:text-6xl mb-8" style={{ color: '#1d3c5d' }}>
                {t('title')}
              </h1>
              <div className="w-72 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
              <h2 className="font-sansation font-bold text-2xl lg:text-3xl mb-8" style={{ color: '#1d3c5d' }}>
                {t('subtitle')}
              </h2>

              <div className="font-sansation font-normal text-lg leading-relaxed space-y-4" style={{ color: '#1d3c5d' }}>
                <p>{t('description_p1')}</p>
                <p>{t('description_p2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Imagen 2 */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative rounded-lg overflow-hidden aspect-video" style={{ backgroundColor: '#1d3c5d' }}>
                <video
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
                  {/*<source src="/images/videos/Rinoplastia.mp4" type="video/mp4" />*/}
                  <source src="/images/videos/Rinoplastia.webm" type="video/webm" />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="bg-white px-6 py-2 rounded-full inline-block" style={{ color: '#1d3c5d' }}>
                        <span className="font-sansation font-bold text-lg">{t('video_label')}</span>
                      </div>
                      <div className="mt-4 text-lg font-sansation font-normal">{t('video_sublabel')}</div>
                    </div>
                  </div>
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enfoque Integral - Imagen 3 */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('integral_focus_title')}
            </h2>
            <div className="w-87 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

            <h3 className="font-sansation font-bold text-2xl mb-6" style={{ color: '#1d3c5d' }}>
              {t('integral_focus_subtitle')}
            </h3>

            <p className="font-sansation font-normal text-lg leading-relaxed max-w-4xl mb-12" style={{ color: '#1d3c5d' }}>
              {t('integral_focus_desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-sansation font-bold text-2xl mb-6 text-center" style={{ color: '#1d3c5d' }}>
                {t('respiratory_function_title')}
              </h3>
              <h4 className="font-sansation font-bold text-lg mb-4 text-center" style={{ color: '#1d3c5d' }}>
                {t('respiratory_function_subtitle')}
              </h4>

              <p className="font-sansation font-normal text-center leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('respiratory_function_desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-sansation font-bold text-2xl mb-6 text-center" style={{ color: '#1d3c5d' }}>
                {t('naturalness_title')}
              </h3>
              <h4 className="font-sansation font-bold text-lg mb-4 text-center" style={{ color: '#1d3c5d' }}>
                {t('naturalness_subtitle')}
              </h4>

              <p className="font-sansation font-normal text-center leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('naturalness_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La técnica del Dr Pérez - CON FONDO DEGRADADO AZUL */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #1d3c5d 0%, #3777ddff 40%, #1d3c5d 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-white">
            <h2 className="font-prototype font-normal text-5xl mb-6" dangerouslySetInnerHTML={{ __html: t.raw('technique_title') }} />

            <p className="font-sansation font-normal text-lg mb-8 leading-relaxed">
              {t('technique_desc')}
            </p>

            <div className="space-y-6 font-sansation font-normal text-lg leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: t.raw('technique_list_1') }} />
              <div dangerouslySetInnerHTML={{ __html: t.raw('technique_list_2') }} />
              <div dangerouslySetInnerHTML={{ __html: t.raw('technique_list_3') }} />
              <div dangerouslySetInnerHTML={{ __html: t.raw('technique_list_4') }} />
            </div>

            <p className="font-sansation font-normal text-lg mt-8 leading-relaxed">
              {t('technique_conclusion')}
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section - Imagen 5 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="relative rounded-lg overflow-hidden aspect-video" style={{ backgroundColor: '#1d3c5d' }}>
              <video
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
                {/*<source src="/images/videos/1-RINOPLASTIA ABIERTA DE PRESERVACION.mp4" type="video/mp4" />*/}
                <source src="/images/videos/rinoplastia-abierta-preservacion.webm" type="video/webm" />
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="font-sansation font-bold text-lg">{t('video_open_rhinoplasty_label')}</div>
                    <div className="font-sansation font-normal text-sm">{t('video_preservation_label')}</div>
                    <div className="font-sansation font-normal text-sm mt-2">Dr. Andrés Pérez</div>
                  </div>
                </div>
              </video>
            </div>

            {/* Video 2 */}
            <div className="relative rounded-lg overflow-hidden aspect-video" style={{ backgroundColor: '#1d3c5d' }}>
              <video
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
                {/*<source src="/images/videos/2- RINOPLASTIA ABIERTA DE PRESERVACION.mp4" type="video/mp4" />*/}
                <source src="/images/videos/rinoplastia-abierta-preservacion-2.webm" type="video/webm" />
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="font-sansation font-bold text-lg">{t('video_open_rhinoplasty_label')}</div>
                    <div className="font-sansation font-normal text-sm">{t('video_preservation_label')}</div>
                    <div className="font-sansation font-normal text-sm mt-2">Dr. Andrés Pérez</div>
                  </div>
                </div>
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Candidatos ideales - Imagen 6 */}
      <section className="py-20" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-prototype font-normal text-4xl text-white mb-8">
              {t('candidates_title')}
            </h2>
            <p className="font-sansation font-normal text-white text-lg max-w-4xl mx-auto leading-relaxed">
              {t('candidates_intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg p-8 text-center shadow-lg" style={{ backgroundColor: '#babdb3' }}>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <img
                  src="/images/iconos/cheque.png"
                  alt="Icono candidato 1"
                  className="w-12 h-12 object-contain"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = '/images/fallback-icon.png';
                  }}
                />
              </div>
              <h3 className="font-sansation font-bold text-lg mb-4" style={{ color: '#1d3c5d' }}>
                {t('candidate_1')}
              </h3>
            </div>

            <div className="rounded-lg p-8 text-center shadow-lg" style={{ backgroundColor: '#babdb3' }}>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <img
                  src="/images/iconos/cheque.png"
                  alt="Icono candidato 2"
                  className="w-12 h-12 object-contain"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = '/images/fallback-icon.png';
                  }}
                />
              </div>
              <h3 className="font-sansation font-bold text-lg mb-4" style={{ color: '#1d3c5d' }}>
                {t('candidate_2')}
              </h3>
            </div>

            <div className="rounded-lg p-8 text-center shadow-lg" style={{ backgroundColor: '#babdb3' }}>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <img
                  src="/images/iconos/cheque.png"
                  alt="Icono candidato 3"
                  className="w-12 h-12 object-contain"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = '/images/fallback-icon.png';
                  }}
                />
              </div>
              <h3 className="font-sansation font-bold text-lg mb-4" style={{ color: '#1d3c5d' }}>
                {t('candidate_3')}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros excelentes resultados - Imagen 7 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left mb-16">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('results_title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { src: "/images/rinoplastia/PacienteFrenteAntes.webp", label: t_testimonials('before_label'), type: t('title') },
              { src: "/images/rinoplastia/PacienteFrenteDespues.webp", label: t_testimonials('after_label'), type: t('title') },
              { src: "/images/rinoplastia/Paciente1FrenteAntes.webp", label: t_testimonials('before_label'), type: t('title') },
              { src: "/images/rinoplastia/Paciente1FrenteDespues.webp", label: t_testimonials('after_label'), type: t('title') }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Resultado Rinoplastia ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='375' viewBox='0 0 300 375'%3E%3Crect width='300' height='375' fill='%23f3f4f6'/%3E%3Ctext x='150' y='180' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='12' fill='%236b7280'%3E${item.type}%3C/text%3E%3C/svg%3E`
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="px-4 py-3 text-white text-center"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(29,60,93,0.6) 40%, rgba(29,60,93,0.8) 70%, rgba(29,60,93,1) 100%)'
                      }}
                    >
                      <div className="font-sansation font-bold text-lg mb-1">
                        {item.label}
                      </div>
                      <div className="font-sansation font-normal text-sm">
                        {item.type}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón para ver más casos */}
          <div className="text-center mb-16">
            <Link
              href={`/${locale}/galeria/procedimientos-faciales/rinoplastia`}
              className="inline-flex items-center font-sansation font-bold border-2 px-8 py-3 rounded-lg transition-colors group"
              style={{
                borderColor: '#1d3c5d',
                color: '#1d3c5d'
              }}
            >
              {t('view_more_cases')}
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mb-12">
            <h2 className="font-prototype font-normal text-3xl lg:text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('testimonials_title')}
            </h2>
            <div className="w-48 h-1 mb-12" style={{ backgroundColor: '#1d3c5d' }}></div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/rinoplastia/testimonio1.webp"
                  controls
                  preload="metadata"
                  onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                >
                  {/*<source src="/images/videos/historia-resultado-Rinoplastia.mp4" type="video/mp4" />*/}
                  <source src="/images/videos/historia-resultado-Rinoplastia.webm" type="video/webm" />
                  Tu navegador no soporta el elemento video.
                </video>

                <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none', backgroundColor: '#1d3c5d' }}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#326dccff' }}>
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="font-sansation font-normal text-white text-sm">Testimonio Paciente 1</div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/rinoplastia/testimonio2.webp"
                  controls
                  preload="metadata"
                  onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                >
                  {/*<source src="/images/videos/TESTIMONIAL RINOPLASTIA2.mp4" type="video/mp4" />*/}
                  <source src="/images/videos/testimonial-rinoplastia2.webm" type="video/webm" />
                  Tu navegador no soporta el elemento video.
                </video>

                <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none', backgroundColor: '#1d3c5d' }}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#326dccff' }}>
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="font-sansation font-normal text-white text-sm">Testimonio Paciente 2</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href={`/${locale}/testimonios`}
                className="font-sansation font-bold inline-block border-2 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                style={{
                  borderColor: '#1d3c5d',
                  color: '#1d3c5d'
                }}
              >
                {t('view_more_testimonials')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ - Imagen 8 */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-left mb-16">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-87 h-1 mb-12" style={{ backgroundColor: '#1d3c5d' }}></div>
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
                    <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>{t(`faqs.${key}.answer`)}</p>
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