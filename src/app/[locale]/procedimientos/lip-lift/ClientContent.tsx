"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('lip_lift')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7']

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section - BANNER RESPONSIVE */}
      <section className="relative w-full overflow-hidden">
        {/* Contenedor responsive para la imagen */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
          {/* Imagen de fondo para desktop y tablet */}
          <div
            className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/banner-lip-lift.webp')`
            }}
          />

          {/* Imagen de fondo para móviles */}
          <div
            className="block sm:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/banner-lip-lift.webp')` // Using same image as fallback if mobile version not available
            }}
          />

          {/* Contenedor del texto - POSICIÓN RESPONSIVE */}
          <div className="relative z-10 h-full flex items-center">
            <div className="w-full md:w-1/2 px-4 sm:px-6 md:pl-8 lg:pl-12 xl:pl-16">
              <div className="max-w-none pr-4">
                {/* Título principal - RESPONSIVE */}
                <h1 className="font-prototype font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl mb-2 leading-tight" style={{ color: '#1d3c5d' }}>
                  {t('title')}
                </h1>

                {/* Subtítulo - RESPONSIVE */}
                <h2 className="font-prototype font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-4 leading-tight" style={{ color: '#1d3c5d' }}>
                  {t('subtitle')}
                </h2>

                {/* Descripción - RESPONSIVE */}
                <p className="font-sansation font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl leading-relaxed" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw('description') }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de texto después del banner - AHORA CON SOLO EL PÁRRAFO */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-4">
          <p className="font-sansation font-normal text-lg leading-relaxed text-justify" style={{ color: '#1d3c5d' }}>
            {t('intro_text')}
          </p>
        </div>
      </section>
      {/* ¿Por qué cambia el labio con el tiempo? - Imagen 2 */}
      <section className="py-20" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left mb-16">
            <h2 className="font-prototype font-normal text-6xl text-white mb-8" dangerouslySetInnerHTML={{ __html: t.raw('why_changes_title') }} />

            <p className="font-sansation font-normal text-white text-lg mb-12 leading-relaxed">
              {t('why_changes_intro')}
            </p>
          </div>

          {/* Imagen centrada - Más estrecha y alta */}
          <div className="mb-12 flex justify-center">
            <div className="max-w-2xl w-full">
              <img
                src="/images/lip lift/img1.webp"
                alt="Cambios en los labios con el tiempo"
                className="w-full rounded-lg shadow-lg object-cover"
                style={{ height: '400px' }}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='300' y='200' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3ECambios en los labios%3C/text%3E%3C/svg%3E`
                }}
              />
            </div>
          </div>

          {/* Tarjetas más angostas y altas como en la imagen de referencia */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-4 max-w-6xl">
              <div
                className="rounded-lg p-4 text-center flex items-center justify-center"
                style={{
                  backgroundColor: '#babdb3',
                  minHeight: '300px',
                  maxWidth: '180px',
                  margin: '0 auto'
                }}
              >
                <div>
                  <p className="font-sansation font-normal text-xs leading-relaxed" style={{ color: '#1d3c5d' }}>
                    {t('change_1')}
                  </p>
                </div>
              </div>

              <div
                className="rounded-lg p-4 text-center flex items-center justify-center"
                style={{
                  backgroundColor: '#babdb3',
                  minHeight: '300px',
                  maxWidth: '180px',
                  margin: '0 auto'
                }}
              >
                <div>
                  <p className="font-sansation font-normal text-xs leading-relaxed" style={{ color: '#1d3c5d' }}>
                    {t('change_2')}
                  </p>
                </div>
              </div>

              <div
                className="rounded-lg p-4 text-center flex items-center justify-center"
                style={{
                  backgroundColor: '#babdb3',
                  minHeight: '300px',
                  maxWidth: '180px',
                  margin: '0 auto'
                }}
              >
                <div>
                  <p className="font-sansation font-normal text-xs leading-relaxed" style={{ color: '#1d3c5d' }}>
                    {t('change_3')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="font-sansation font-normal text-white text-lg max-w-4xl mx-auto leading-relaxed">
              {t('changes_conclusion')}
            </p>
          </div>
        </div>
      </section>


      {/* Detalles de la Técnica del Dr. Pérez - CON FONDO DEGRADADO AZUL */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #1d3c5d 0%, #326dccff 50%, #1d3c5d 100%)'
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

            <div className="space-y-6 text-lg leading-relaxed font-sansation font-normal">
              <p>
                {t('technique_intro')}
              </p>

              <div className="space-y-4">
                <p>
                  {t('technique_point_1')}
                </p>

                <p>
                  {t('technique_point_2')}
                </p>

                <p>
                  {t('technique_point_3')}
                </p>

                <p>
                  {t('technique_point_4')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section - Imagen 5 */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative rounded-lg overflow-hidden aspect-video" style={{ backgroundColor: '#1d3c5d' }}>
                <video playsInline
                  className="w-full h-full object-cover"
                  poster="/images/lip lift/video.webp"
                  controls
                  preload="metadata"
                >
                  <source src="https://media.drandrespereznieto.com/images/videos/ELEVACION DEL LABIO - LIP LIFT.mp4" type="video/mp4" />
                  <source src="https://media.drandrespereznieto.com/images/videos/elevacion-labio-lip-lift.webm" type="video/webm" />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="bg-white px-6 py-2 rounded-full inline-block" style={{ color: '#1d3c5d' }}>
                        <span className="font-sansation font-bold text-lg">Lip Lift</span>
                      </div>
                      <div className="mt-4 text-lg font-sansation font-normal">Elevación del Labio Superior</div>
                    </div>
                  </div>
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lipofilling de Células Madre - Imagen 6 */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('lipofilling_title')}
            </h2>
            <div className="w-63 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

            <div className="space-y-4 max-w-4xl" style={{ color: '#1d3c5d' }}>
              <p className="font-sansation font-bold text-lg">
                {t('lipofilling_subtitle_bold')}
              </p>
              <p className="font-sansation font-normal text-lg">
                {t('lipofilling_subtitle')}
              </p>
            </div>
          </div>

          <div className="rounded-lg p-8 shadow-lg mb-12" style={{ backgroundColor: '#ffffff' }}>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                {/* Check más grande sin fondo en color azul */}
                <div className="mt-1">
                  <svg className="w-8 h-8" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sansation font-normal text-lg" style={{ color: '#1d3c5d' }}>
                  {t('lipofilling_point_1')}
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <svg className="w-8 h-8" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sansation font-normal text-lg" style={{ color: '#1d3c5d' }}>
                  {t('lipofilling_point_2')}
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <svg className="w-8 h-8" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sansation font-normal text-lg" style={{ color: '#1d3c5d' }}>
                  {t('lipofilling_point_3')}
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <svg className="w-8 h-8" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sansation font-normal text-lg" style={{ color: '#1d3c5d' }}>
                  {t('lipofilling_point_4')}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl font-sansation font-normal text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
            <p>
              {t('lipofilling_conclusion')}
            </p>
          </div>
        </div>
      </section>


      {/* Nuestros excelentes resultados - Imagen 7 */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left mb-16">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('results_title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { src: "/images/lip lift/Helena-antes.webp", label: "Antes", type: "LipLift" },
              { src: "/images/lip lift/Helena-despues.webp", label: "Después", type: "LipLift" },
              { src: "/images/lip lift/paciente-antes.webp", label: "Antes", type: "LipLift" },
              { src: "/images/lip lift/paciente-despues.webp", label: "Después", type: "LipLift" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Resultado Lip Lift ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='375' viewBox='0 0 300 375'%3E%3Crect width='300' height='375' fill='%23f3f4f6'/%3E%3Ctext x='150' y='180' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3Ctext x='150' y='200' text-anchor='middle' font-family='Arial' font-size='12' fill='%236b7280'%3E${item.type}%3C/text%3E%3C/svg%3E`
                    }}
                  />

                  {/* Etiqueta inferior con degradado azul */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="px-4 py-3 text-white text-center"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(29, 60, 93, 0.6) 40%, rgba(29, 60, 93, 0.8) 70%, rgba(29, 60, 93, 1) 100%)'
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
          <div className="text-center">
            <Link
              href={`/${locale}/galeria/procedimientos-faciales/lip-lift`}
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
        </div>
      </section>

      {/* FAQ - Imagen 8 */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-left mb-16">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-87 h-1 ml-0 mb-0" style={{ backgroundColor: '#1d3c5d' }}></div>
          </div>

          <div className="space-y-4">
            {faqKeys.map((key, index) => (
              <div key={index} className="rounded-lg shadow-sm overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
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
    </div>
  )
}