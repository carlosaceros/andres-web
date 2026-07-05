"use client"
import Image from 'next/image'
import { useState } from 'react'
import { Heading3 } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ClientContent() {
  const t = useTranslations('international_patients')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [playVideo1, setPlayVideo1] = useState(false)
  const [playVideo2, setPlayVideo2] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* Hero Section - Imagen 1 */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/Paciente-internacional.webp"
            alt={t('title')}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-8">
              <div>
                <h1 className="font-prototype text-5xl lg:text-5xl font-normal mb-2" style={{ color: '#1d3c5d' }}>
                  {t('title')}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atención Integral para Pacientes Foráneos - Imagen 1 */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-prototype text-5xl font-normal mb-8" style={{ color: '#1d3c5d' }}>
              {t('comprehensive_care_title')}
            </h2>

            <p className="font-sansation text-lg leading-relaxed mb-8" style={{ color: '#1d3c5d' }}>
              {t('comprehensive_care_p1')}
            </p>

            <p className="font-sansation text-lg leading-relaxed mb-12" style={{ color: '#1d3c5d' }}>
              {t('comprehensive_care_p2')}
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 mb-12 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1d3c5d' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-sansation font-medium" style={{ color: '#1d3c5d' }}>{t('service_accommodation')}</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1d3c5d' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-sansation font-medium" style={{ color: '#1d3c5d' }}>{t('service_transport')}</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1d3c5d' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-sansation font-medium" style={{ color: '#1d3c5d' }}>{t('service_nursing')}</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1d3c5d' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-sansation font-medium" style={{ color: '#1d3c5d' }}>{t('service_bilingual')}</p>
              </div>
            </div>
          </div>



        </div>
      </section>

      {/* Consulta Virtual - Imagen 1 y 2 CORREGIDA */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-prototype text-4xl font-normal mb-8" style={{ color: '#1d3c5d' }}>
              {t('virtual_consultation_title')}
            </h2>

            <p className="font-sansation text-lg leading-relaxed max-w-4xl mx-auto mb-12" style={{ color: '#1d3c5d' }}>
              {t('virtual_consultation_desc')}
            </p>
          </div>

          {/* Proceso paso a paso - Imagen 1 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="rounded-lg p-8" style={{ backgroundColor: '#babdb3' }}>
              <h3 className="font-prototype text-2xl font-normal mb-8 text-center" style={{ color: '#1d3c5d' }}>
                {t('patient_role')}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/iconos/tarjeta-de-credito.png"
                    alt="Pago"
                    width={40}
                    height={40}
                    className="w-10 h-10 flex-shrink-0 mt-2"
                  />
                  <div>
                    <p className="font-sansation leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                      {t('step_payment')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/iconos/camara.png"
                    alt="Fotografías"
                    width={40}
                    height={40}
                    className="w-10 h-10 flex-shrink-0 mt-2"
                  />
                  <div>
                    <p className="font-sansation leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                      {t('step_photos')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/iconos/aprobado.png"
                    alt="Datos"
                    width={40}
                    height={40}
                    className="w-10 h-10 flex-shrink-0 mt-2"
                  />
                  <div>
                    <div className="font-sansation leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                      <p className="mb-2">{t('step_data_title')}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>{t('step_data_age')}</li>
                        <li>{t('step_data_procedure')}</li>
                        <li>{t('step_data_email')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-8" style={{ backgroundColor: '#babdb3' }}>
              <h3 className="font-prototype text-2xl font-normal mb-8 text-center" style={{ color: '#1d3c5d' }}>
                {t('doctor_role')}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/iconos/camara-de-video.png"
                    alt="Revisión"
                    width={40}
                    height={40}
                    className="w-10 h-10 flex-shrink-0 mt-2"
                  />
                  <div>
                    <p className="font-sansation leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                      {t('step_review')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/iconos/calendario.png"
                    alt="Confirmación"
                    width={40}
                    height={40}
                    className="w-10 h-10 flex-shrink-0 mt-2"
                  />
                  <div>
                    <p className="font-sansation leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                      {t('step_confirmation')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/iconos/aprobado.png"
                    alt="Presupuesto"
                    width={40}
                    height={40}
                    className="w-10 h-10 flex-shrink-0 mt-2"
                  />
                  <div>
                    <p className="font-sansation leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                      {t('step_budget')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/iconos/calendariofecha.png"
                    alt="Agendamiento"
                    width={40}
                    height={40}
                    className="w-10 h-10 flex-shrink-0 mt-2"
                  />
                  <div>
                    <p className="font-sansation leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                      {t('step_scheduling')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Título de los videos - Imagen 2 */}
          <div className="text-center mb-12">
            <h3 className="font-prototype text-2xl font-normal mb-8" style={{ color: '#1d3c5d' }}>
              {t('video_process_title')}
            </h3>

            {/* Dos videos lado a lado */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-[#1d3c5d] shadow-lg">
                {playVideo1 ? (
                  <video playsInline
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    preload="metadata"
                  >
                    <source src="/images/videos/Consulta-Virtual.mp4" type="video/mp4" />
                    <source src="/images/videos/Consulta-Virtual.webm" type="video/webm" />
                    Tu navegador no soporta el elemento video.
                  </video>
                ) : (
                  <div 
                    onClick={() => setPlayVideo1(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#152e4a] group p-6 text-center select-none"
                  >
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                      <svg className="w-10 h-10 text-white fill-current translate-x-[2px]" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="font-prototype text-xl font-normal mb-2 text-white">{t('video_consultation_label')}</div>
                    <div className="font-sansation text-sm text-white/80">Dr. Andrés Pérez</div>
                  </div>
                )}
              </div>

              <div className="relative rounded-lg overflow-hidden aspect-video bg-[#1d3c5d] shadow-lg">
                {playVideo2 ? (
                  <video playsInline
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    preload="metadata"
                  >
                    <source src="/images/videos/fotografias-consulta-virtual.mp4" type="video/mp4" />
                    <source src="/images/videos/fotografias-consulta-virtual.webm" type="video/webm" />
                    Tu navegador no soporta el elemento video.
                  </video>
                ) : (
                  <div 
                    onClick={() => setPlayVideo2(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#152e4a] group p-6 text-center select-none"
                  >
                    {/* Background image cover */}
                    <div className="absolute inset-0 opacity-20 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/images/todos/toma.webp')" }}></div>
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                        <svg className="w-10 h-10 text-white fill-current translate-x-[2px]" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="font-prototype text-xl font-normal mb-2 text-white" dangerouslySetInnerHTML={{ __html: t.raw('video_photos_label') }} />
                      <div className="font-sansation text-sm text-white/80">Dr. Andrés Pérez</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Después de la Consulta Virtual - Imagen 2 */}
          <div className="mb-16">
            <h3 className="font-prototype text-2xl font-normal mb-8" style={{ color: '#1d3c5d' }}>
              {t('after_consultation_title')}
            </h3>

            <p className="font-sansation text-lg leading-relaxed mb-6" style={{ color: '#1d3c5d' }}>
              {t('after_consultation_intro')}
            </p>

            <div className="mb-8">
              <ul className="font-sansation space-y-2" style={{ color: '#1d3c5d' }}>
                <li>{t('after_consultation_list1')}</li>
                <li>{t('after_consultation_list2')}</li>
              </ul>
            </div>

            <h4 className="font-prototype text-xl font-normal mb-4" style={{ color: '#1d3c5d' }}>
              {t('pre_surgical_exams_title')}
            </h4>

            <p className="font-sansation text-base leading-relaxed mb-12" style={{ color: '#1d3c5d' }}>
              {t('pre_surgical_exams_desc')}
            </p>

            <h4 className="font-prototype text-xl font-normal mb-4 text-center" style={{ color: '#1d3c5d' }}>
              {t('travel_logistics_title')}
            </h4>

            <p className="font-sansation text-base leading-relaxed mb-8 text-center" style={{ color: '#1d3c5d' }}>
              {t('travel_logistics_subtitle')}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-white rounded-lg p-8 text-center" style={{ backgroundColor: '#1d3c5d' }}>
                <div className="flex justify-center mx-auto mb-6">
                  <Image
                    src="/images/iconos/carro.png"
                    alt="Transporte"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                <h5 className="font-sansation text-base font-normal">
                  {t('logistics_transport_desc')}
                </h5>
              </div>

              <div className="text-white rounded-lg p-8 text-center" style={{ backgroundColor: '#1d3c5d' }}>
                <div className="flex justify-center mx-auto mb-6">
                  <Image
                    src="/images/iconos/dormido.png"
                    alt="Hospedaje"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                <h5 className="font-sansation text-base font-normal">
                  {t('logistics_accommodation_desc')}
                </h5>
              </div>

              <div className="text-white rounded-lg p-8 text-center" style={{ backgroundColor: '#1d3c5d' }}>
                <div className="flex justify-center mx-auto mb-6">
                  <Image
                    src="/images/iconos/enfermeria.png"
                    alt="Enfermería"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                <h5 className="font-sansation text-base font-normal">
                  {t('logistics_nursing_desc')}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulta Presencial - Imagen 4 */}
      <section className="py-20" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-white">
            <h2 className="font-prototype text-4xl font-normal mb-8">
              {t('face_to_face_title')}
            </h2>

            <div className="font-sansation space-y-6 text-lg leading-relaxed">
              <h3>
                {t('face_to_face_subtitle')}
              </h3>

              <p>{t('face_to_face_list1')}</p>
              <p>{t('face_to_face_list2')}</p>
              <p>{t('face_to_face_list3')}</p>
              <p>{t('face_to_face_list4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulta de Preparaciones - Imagen 5 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left">
            <h2 className="font-prototype text-4xl font-normal mb-4" style={{ color: '#1d3c5d' }}>
              {t('pre_anesthesia_title')}
            </h2>


            <p className="font-sansation text-lg leading-relaxed max-w1xl mx-auto" style={{ color: '#1d3c5d' }}>
              {t('pre_anesthesia_desc')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
