import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslations } from 'next-intl/server';

export default async function GuiasPrePostPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guias' });

  const postOperativeSymptoms = [
    {
      title: t('symptoms.inflammation.title'),
      description: t('symptoms.inflammation.description')
    },
    {
      title: t('symptoms.pain.title'),
      description: t('symptoms.pain.description')
    },
    {
      title: t('symptoms.bleeding.title'),
      description: t('symptoms.bleeding.description')
    },
    {
      title: t('symptoms.numbness.title'),
      description: t('symptoms.numbness.description')
    },
    {
      title: t('symptoms.nausea.title'),
      description: t('symptoms.nausea.description')
    },
    {
      title: t('symptoms.redness.title'),
      description: t('symptoms.redness.description')
    }
  ];

  const facialProcedures = [
    {
      category: t('maintenance.facial.skincare.title'),
      items: [
        t('maintenance.facial.skincare.items.0'),
        t('maintenance.facial.skincare.items.1')
      ]
    },
    {
      category: t('maintenance.facial.lipofilling.title'),
      items: [
        t('maintenance.facial.lipofilling.items.0')
      ]
    },
    {
      category: t('maintenance.facial.botox.title'),
      items: [
        t('maintenance.facial.botox.items.0')
      ]
    }
  ];

  const corporalProcedures = [
    {
      category: t('maintenance.corporal.nutrition.title'),
      items: [
        t('maintenance.corporal.nutrition.items.0')
      ]
    },
    {
      category: t('maintenance.corporal.exercise.title'),
      items: [
        t('maintenance.corporal.exercise.items.0')
      ]
    }
  ];

  return (
    <div>
      <Header />

      <div className="min-h-screen" style={{ backgroundColor: '#babdb3' }}>
        {/* Hero Section - Imagen 1 */}
        <section className="py-8 sm:py-16" style={{ backgroundColor: '#babdb3' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h1 className="font-prototype font-normal text-2xl sm:text-4xl lg:text-6xl mb-4" style={{ color: '#1d3c5d' }}>
                {t('title')}
              </h1>
              <div className="w-32 sm:w-150 h-1" style={{ backgroundColor: '#1d3c5d' }}></div>
            </div>
          </div>
        </section>

        {/* Introducción - Imagen 2 */}
        <section className="py-8 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <p className="font-sansation font-normal text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('intro_p1')}
              </p>

              <p className="font-sansation font-normal text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('intro_p2')}
              </p>

              <div className="p-4 sm:p-8 rounded-lg" style={{ backgroundColor: '#fff' }}>
                <h2 className="font-sansation font-bold text-2xl sm:text-4xl mb-4 sm:mb-6" style={{ color: '#1d3c5d' }}>{t('general_considerations_title')}</h2>

                <p className="font-sansation font-normal text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed" style={{ color: '#1d3c5d' }}>
                  {t('general_considerations_p1')}
                </p>

                <p className="font-sansation font-normal text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed" style={{ color: '#1d3c5d' }}>
                  {t('general_considerations_p2')}
                </p>

                <p className="font-sansation font-normal text-base sm:text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                  {t('general_considerations_p3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fases de Recuperación - Imagen 3 */}
        <section className="py-8 sm:py-16" style={{ backgroundColor: '#babdb3' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-prototype font-normal text-3xl sm:text-6xl mb-8 sm:mb-12" style={{ color: '#1d3c5d' }}>
                {t('recovery_phases_title')}
              </h2>
              <div className="w-32 sm:w-170 h-1 mb-8 sm:mb-12" style={{ backgroundColor: '#1d3c5d' }}></div>

              <div className="space-y-8 sm:space-y-12">
                <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
                  <h3 className="font-sansation font-bold text-lg sm:text-2xl mb-4 sm:mb-6" style={{ color: '#1d3c5d' }}>
                    {t('phase_early_title')}
                  </h3>
                  <p className="font-sansation font-normal text-base sm:text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                    {t('phase_early_desc')}
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
                  <h3 className="font-sansation font-bold text-lg sm:text-2xl mb-4 sm:mb-6" style={{ color: '#1d3c5d' }}>
                    {t('phase_late_title')}
                  </h3>
                  <p className="font-sansation font-normal text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed" style={{ color: '#1d3c5d' }}>
                    {t('phase_late_desc_1')}
                  </p>
                  <p className="font-sansation font-normal text-base sm:text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                    {t('phase_late_desc_2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Videos y Timeline - Imagen 4 */}
        <section className="py-8 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

              {/* Estamos Contigo */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
                <div>
                  <h2 className="font-prototype font-normal text-3xl sm:text-6xl mb-4 sm:mb-6" style={{ color: '#1d3c5d' }}>
                    {t('with_you_title')}
                  </h2>
                  <p className="font-sansation font-normal text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed" style={{ color: '#1d3c5d' }}>
                    {t('with_you_p1')}
                  </p>
                  <p className="font-sansation font-normal text-base sm:text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                    {t('with_you_p2')}
                  </p>
                </div>
                {/* VIDEO 1: La montaña rusa de la recuperación */}
                <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-xl bg-gray-900">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="https://media.drandrespereznieto.com/images/videos/montana.webp"
                  >
                    {/*<source src="https://media.drandrespereznieto.com/images/videos/Montana-Rusa-Proceso-Inflamatorio.mp4" type="video/mp4" />*/}
                    <source src="https://media.drandrespereznieto.com/images/videos/MontanaRusaProcesoInflamatorio.webm" type="video/webm" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                </div>
              </div>

              {/* Indicaciones Preoperatorias */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
                <div className="order-2 lg:order-1">
                  <h2 className="font-prototype font-normal text-3xl sm:text-6xl mb-4 sm:mb-6" style={{ color: '#1d3c5d' }}>
                    {t('preop_instructions_title')}
                  </h2>
                  <p className="font-sansation font-normal text-base sm:text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                    {t('preop_instructions_p1')}
                  </p>
                </div>
                {/* VIDEO 2: Recomendaciones Preoperatorias */}
                <div className="order-1 lg:order-2 aspect-video rounded-lg overflow-hidden shadow-xl bg-gray-900">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="/images/recomentaciones.webp"
                  >
                    {/*<source src="https://media.drandrespereznieto.com/images/videos/Recomendaciones Preoperatorias.mp4" type="video/mp4" />*/}
                    <source src="https://media.drandrespereznieto.com/images/videos/Recomendaciones-Preoperatorias.webm" type="video/webm" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                </div>
              </div>

              {/* Timeline - Imagen 2 */}
              <div className="p-4 sm:p-8 rounded-lg" style={{ backgroundColor: '#babdb3' }}>
                <h3 className="font-sansation font-bold text-3xl sm:text-6xl mb-6 sm:mb-8 text-center" style={{ color: '#1d3c5d' }}>
                  {t('timeline_title')}
                </h3>

                {/* Imagen del timeline */}
                <div className="text-center">
                  <Image
                    src="/images/Lineatiempo.webp"
                    alt="Línea de tiempo pre y postoperatoria para cirugía"
                    width={800}
                    height={600}
                    className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Síntomas Postoperatorios - Imagen 5 */}
        <section className="py-8 sm:py-16 text-white" style={{ backgroundColor: '#1d3c5d' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-prototype font-normal text-3xl sm:text-6xl mb-6 sm:mb-8 text-center">
                {t('what_to_expect_title')}
              </h2>

              <p className="font-sansation font-normal text-base sm:text-lg mb-8 sm:mb-12 text-center leading-relaxed">
                {t('what_to_expect_p1')}
              </p>

              <p className="font-sansation font-normal text-base sm:text-lg mb-8 sm:mb-12 text-center leading-relaxed">
                {t('what_to_expect_p2')}
              </p>

              <div className="grid gap-4 sm:gap-6">
                {postOperativeSymptoms.map((symptom, index) => (
                  <div key={index} className="p-4 sm:p-6 rounded-lg" style={{ backgroundColor: '#babdb3', color: '#1d3c5d' }}>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#1d3c5d' }}>
                        <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-sansation font-bold text-lg sm:text-xl mb-2 sm:mb-3">{symptom.title}</h3>
                        <p className="font-sansation font-normal text-sm sm:text-base leading-relaxed">{symptom.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-12 text-center">
                <p className="font-sansation font-bold text-base sm:text-lg">
                  <span dangerouslySetInnerHTML={{ __html: t.raw('reminder_text') }} />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Videos de Cuidado - SOLO 3 VIDEOS */}
        <section className="py-8 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-prototype font-normal text-3xl sm:text-6xl mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                {t('postop_care_title')}
              </h2>

              <p className="font-sansation font-normal text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('postop_care_p1')}
              </p>

              <p className="font-sansation font-normal text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('postop_care_p2')}
              </p>

              <div className="mb-8 sm:mb-12">
                <p className="font-sansation font-bold text-base sm:text-lg mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                  {t('postop_care_rec_1')}
                </p>

                <p className="font-sansation font-normal text-base sm:text-lg mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                  {t('postop_care_rec_2')}
                </p>
              </div>

              {/* Video Grid - SOLO 3 VIDEOS - Responsive */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {/* VIDEO 3: Lifting Facial */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-sansation font-bold text-base sm:text-lg text-center" style={{ color: '#1d3c5d' }}>
                    {t('video_lifting_title')}
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-xl bg-gray-900">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster="/images/video1.webp"
                    >
                      {/*<source src="https://media.drandrespereznieto.com/images/videos/guias/Recomendaciones Post Lifting Baja.mp4" type="video/mp4" />*/}
                      <source src="https://media.drandrespereznieto.com/images/videos/Recomendaciones-Post-Lifting-Baja.webm" type="video/webm" />
                      Tu navegador no soporta la reproducción de video.
                    </video>
                  </div>
                </div>

                {/* VIDEO 4: Blefaroplastia */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-sansation font-bold text-base sm:text-lg text-center" style={{ color: '#1d3c5d' }}>
                    {t('video_blefaro_title')}
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-xl bg-gray-900">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster="https://media.drandrespereznieto.com/images/videos/guias/video2.webp"
                    >
                      {/*<source src="https://media.drandrespereznieto.com/images/videos/guias/Recomendaciones Post Blefaro Español.mp4" type="video/mp4" />*/}
                      <source src="https://media.drandrespereznieto.com/images/videos/RecomendacionesPostBlefaroEspanol.webm" type="video/webm" />
                      Tu navegador no soporta la reproducción de video.
                    </video>
                  </div>
                </div>

                {/* VIDEO 5: Rinoplastia */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-sansation font-bold text-base sm:text-lg text-center" style={{ color: '#1d3c5d' }}>
                    {t('video_rino_title')}
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-xl bg-gray-900">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster="https://media.drandrespereznieto.com/images/videos/guias/vide-3.webp"
                    >
                      {/*<source src="https://media.drandrespereznieto.com/images/videos/guias/Recuperación Rino_ ESP_Whatsaap.mp4" type="video/mp4" />*/}
                      <source src="https://media.drandrespereznieto.com/images/videos/Recuperacion-Rino-ESP.webm" type="video/webm" />
                      Tu navegador no soporta la reproducción de video.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mantenimiento de Resultados - Imagen 7 */}
        <section className="py-8 sm:py-16" style={{ backgroundColor: '#babdb3' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-prototype font-normal text-3xl sm:text-6xl mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                {t('maintenance_title')}
              </h2>

              <p className="font-sansation font-normal text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('maintenance_p1')}
              </p>

              <p className="font-sansation font-normal text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('maintenance_p2')}
              </p>

              <p className="font-sansation font-normal text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('maintenance_p3')}
              </p>

              {/* Procedimientos Faciales */}
              <div className="mb-8 sm:mb-12">
                <h3 className="font-sansation font-bold text-xl sm:text-2xl mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>{t('facial_procedures_title')}</h3>

                <div className="space-y-6 sm:space-y-8">
                  {facialProcedures.map((procedure, index) => (
                    <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                      <h4 className="font-sansation font-bold text-lg sm:text-xl mb-3 sm:mb-4" style={{ color: '#1d3c5d' }}>• {procedure.category}</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {procedure.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="font-sansation font-normal text-sm sm:text-lg leading-relaxed pl-3 sm:pl-4" style={{ color: '#1d3c5d' }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedimientos Corporales */}
              <div>
                <h3 className="font-sansation font-bold text-2xl sm:text-5xl mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>{t('corporal_procedures_title')}</h3>

                <div className="space-y-6 sm:space-y-8">
                  {corporalProcedures.map((procedure, index) => (
                    <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                      <h4 className="font-sansation font-bold text-lg sm:text-xl mb-3 sm:mb-4" style={{ color: '#1d3c5d' }}>• {procedure.category}</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {procedure.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="font-sansation font-normal text-sm sm:text-lg leading-relaxed pl-3 sm:pl-4" style={{ color: '#1d3c5d' }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}