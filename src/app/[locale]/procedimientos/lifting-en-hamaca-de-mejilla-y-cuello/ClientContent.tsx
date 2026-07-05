"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('lifting_hamaca_mejilla_cuello');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number | null) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
  const benefitKeys = ['benefit_1', 'benefit_2', 'benefit_3', 'benefit_4'];
  const causes = ['sign_1', 'sign_2']; // Using sign_1 and sign_2 keys for causes section based on JSON structure

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[900px]">
        <div className="absolute inset-0">
          <Image
            src="/images/lifting-hamaca-mejillas-y-cuello.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-6">
              <h1 className="font-prototype font-normal text-5xl lg:text-6xl mb-8" style={{ color: '#1d3c5d' }}>
                {t('title')}
              </h1>
              <div className="w-72 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

              <h2 className="font-sansation font-bold text-2xl lg:text-3xl mb-8" style={{ color: '#1d3c5d' }}>
                {t('subtitle')}
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* Sección explicativa con texto e imágenes */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="font-sansation font-normal text-lg leading-relaxed space-y-8 mb-16" style={{ color: '#1d3c5d' }}>
            <p>{t('description_p1')}</p>
            <p>{t('description_p2')}</p>
            <p>{t('description_p3')}</p>
            <p>{t('description_p4')}</p>
          </div>

          {/* Video Efecto Hamaca */}
          <div className="text-center mb-16">
            <div className="w-full max-w-3xl mx-auto">
              <div className="relative rounded-lg overflow-hidden aspect-video w-full" style={{ backgroundColor: '#1d3c5d' }}>
                <video
                  className="w-full h-full object-cover"
                  poster="https://media.drandrespereznieto.com/images/videos/hamaca cuello/hamaca.webp"
                  controls
                  preload="metadata"
                >
                  {/*<source src="https://media.drandrespereznieto.com/images/videos/hamaca cuello/Hammock Effect.mp4" type="video/mp4" />*/}
                  <source src="https://media.drandrespereznieto.com/images/videos/hamaca cuello/Hammock-Effect.webm" type="video/webm" />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="font-sansation font-bold text-lg">{t('video_hammock_effect')}</p>
                      <p className="font-sansation font-normal text-sm opacity-90">Hammock effect</p>
                    </div>
                  </div>
                </video>
              </div>
            </div>
          </div>

          {/* Galería de resultados con 4 imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: "https://media.drandrespereznieto.com/images/videos/hamaca cuello/img1.webp", label: "Antes", procedure: "Lifting en hamaca" },
              { src: "https://media.drandrespereznieto.com/images/videos/hamaca cuello/img2.webp", label: "Después", procedure: "Lifting en hamaca" },
              { src: "https://media.drandrespereznieto.com/images/videos/hamaca cuello/img3.webp", label: "Antes", procedure: "Lifting en hamaca" },
              { src: "https://media.drandrespereznieto.com/images/videos/hamaca cuello/img4.webp", label: "Después", procedure: "Lifting en hamaca" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Resultado ${Math.floor(index / 2) + 1} - ${item.label}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='375' viewBox='0 0 300 375'%3E%3Crect width='300' height='375' fill='%23e5e7eb'/%3E%3Ctext x='150' y='187' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3C/svg%3E`
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="px-4 py-3 text-white text-center rounded-b-lg"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.3) 30%, rgba(29, 60, 93, 0.6) 70%, rgba(29, 60, 93, 0.8) 100%)'
                      }}
                    >
                      <div className="font-sansation font-bold text-sm">{item.label}</div>
                      <div className="font-sansation font-normal text-xs opacity-90">{item.procedure}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Nuestra Técnica de Lifting en Hamaca */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('technique_title')}
            </h2>
            <div className="w-87 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

            <h3 className="font-sansation font-bold text-2xl mb-6" style={{ color: '#1d3c5d' }}>
              {t('technique_question')}
            </h3>

            <div className="font-sansation font-normal text-lg leading-relaxed space-y-6 mb-12" style={{ color: '#1d3c5d' }}>
              <p>{t('technique_intro')}</p>
              <p>{t('technique_desc')}</p>
              <p>{t('technique_signs')}</p>
            </div>

            {/* Dos tarjetas con signos */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="font-sansation font-normal text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                  <p>{t('sign_1')}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="font-sansation font-normal text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                  <p>{t('sign_2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Lifting en hamaca - una Técnica versátil */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #1d3c5d 0%, #3777ddff 40%, #1d3c5d 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white space-y-6 max-w-6xl mx-auto">
            <h2 className="font-prototype font-normal text-5xl mb-6">
              {t('versatile_technique_title')}
            </h2>

            <div className="font-sansation font-normal text-lg leading-relaxed space-y-6">
              <p>{t('versatile_technique_p1')}</p>
              <p>{t('versatile_technique_p2')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* ¿Qué variante es la adecuada para ti? */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('variant_title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mini Lifting en Hamaca */}
            <div className="rounded-lg p-8" style={{ backgroundColor: '#babdb3' }}>
              <h3 className="font-sansation font-bold text-2xl mb-6 text-center" style={{ color: '#1d3c5d' }}>
                {t('mini_lifting_title')}
              </h3>

              {/* Video vertical WebM */}
              <div className="flex justify-center mb-6">
                <div className="w-full max-w-xs">
                  <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '9/16', backgroundColor: '#1d3c5d' }}>
                    <video
                      className="w-full h-full object-cover"
                      poster=""
                      controls
                      preload="metadata"
                    >
                      <source src="https://media.drandrespereznieto.com/images/videos/Miniliftingdeepplane.webm" type="video/webm" />

                      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                        <div className="text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <p className="font-sansation font-bold text-sm">Mini Lifting</p>
                          <p className="font-sansation font-normal text-xs opacity-90">en Hamaca</p>
                        </div>
                      </div>
                    </video>
                  </div>
                </div>
              </div>

              <div className="font-sansation font-normal space-y-4 mb-8" style={{ color: '#1d3c5d' }}>
                <p className="font-sansation font-bold">
                  {t('mini_lifting_desc')}
                </p>

                <div className="space-y-2">
                  <p>{t('mini_lifting_list_1')}</p>
                  <p>{t('mini_lifting_list_2')}</p>
                  <p>{t('mini_lifting_list_3')}</p>
                  <p>{t('mini_lifting_list_4')}</p>
                </div>

                <p className="mt-6">
                  {t('mini_lifting_footer')}
                </p>
              </div>
            </div>

            {/* Lifting en Hamaca Extendido */}
            <div className="rounded-lg p-8" style={{ backgroundColor: '#babdb3' }}>
              <h3 className="font-sansation font-bold text-2xl mb-6 text-center" style={{ color: '#1d3c5d' }}>
                {t('extended_lifting_title')}
              </h3>

              {/* Video vertical WebM */}
              <div className="flex justify-center mb-6">
                <div className="w-full max-w-xs">
                  <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '9/16', backgroundColor: '#1d3c5d' }}>
                    <video
                      className="w-full h-full object-cover"
                      poster=""
                      controls
                      preload="metadata"
                    >
                      <source src="https://media.drandrespereznieto.com/images/videos/Liftingextendidodeepplane.webm" type="video/webm" />
                      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                        <div className="text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <p className="font-sansation font-bold text-sm">Lifting</p>
                          <p className="font-sansation font-normal text-xs opacity-90">Extendido</p>
                        </div>
                      </div>
                    </video>
                  </div>
                </div>
              </div>

              <div className="font-sansation font-normal space-y-4 mb-8" style={{ color: '#1d3c5d' }}>
                <p className="font-sansation font-bold">
                  {t('extended_lifting_desc')}
                </p>

                <div className="space-y-2">
                  <p>{t('extended_lifting_list_1')}</p>
                  <p>{t('extended_lifting_list_2')}</p>
                  <p>{t('extended_lifting_list_3')}</p>
                  <p>{t('extended_lifting_list_4')}</p>
                </div>

                <p className="mt-6">
                  {t('extended_lifting_footer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ¿Por qué elegir una técnica Deep Plane? */}
      <section className="py-20" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-prototype font-normal text-4xl text-white mb-8">
              {t('why_deep_plane_title')}
            </h2>

            <p className="font-sansation font-normal text-lg text-white mb-12">
              {t('why_deep_plane_desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {benefitKeys.map((key, index) => (
              <div key={index} className="rounded-lg p-6 text-center" style={{ backgroundColor: '#babdb3' }}>
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/iconos/cheque.png"
                    alt={t(key)}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23e5e7eb'/%3E%3Ctext x='32' y='37' text-anchor='middle' font-family='Arial' font-size='10' fill='%236b7280'%3EImagen%3C/text%3E%3C/svg%3E`
                    }}
                  />
                </div>
                <h3 className="font-sansation font-bold text-sm" style={{ color: '#1d3c5d' }}>
                  {t(key)}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-sansation font-normal text-lg text-white max-w-6xl mx-auto">
              {t('why_deep_plane_footer')}
            </p>
          </div>
        </div>
      </section>

      {/* Video Lifting facial */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block w-full">
            <div className="relative rounded-lg overflow-hidden aspect-video max-w-3xl mx-auto w-full" style={{ backgroundColor: '#1d3c5d' }}>
              <video
                className="w-full h-full object-cover"
                poster="https://media.drandrespereznieto.com/images/videos/hamaca cuello/lifting-facial.webp"
                controls
                preload="metadata"
              >
                <source src="https://media.drandrespereznieto.com/images/videos/hamaca cuello/animacion-lifting-hamaca.webm" type="video/mp4" />
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="font-sansation font-bold text-lg">Lifting facial</p>
                  </div>
                </div>
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* Incisiones imperceptibles */}
      <section className="bg-white py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
                {t('invisible_incisions_title')}
              </h2>
              <div className="w-87 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

              <div className="font-sansation font-normal text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                <p>
                  {t('invisible_incisions_desc')}
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '9/16', backgroundColor: '#1d3c5d' }}>
                  <video
                    className="w-full h-full object-cover"
                    poster="https://media.drandrespereznieto.com/images/lifting-hamaca/vertical.webp"
                    controls
                    preload="metadata"
                  >
                    {/* <source src="https://media.drandrespereznieto.com/images/videos/hamaca cuello/4- VIDEO INCISIONES IMPERCEPTIBLES.mp4" type="video/mp4" />*/}
                    <source src="https://media.drandrespereznieto.com/images/videos/hamaca cuello/video-incisiones-imperceptibles.webm" type="video/webm" />
                    <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#1d3c5d' }}>
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="font-sansation font-bold text-lg">LIFTING FACIAL</p>
                        <p className="font-sansation font-normal text-sm opacity-90">EN HAMACA</p>
                      </div>
                    </div>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Nuestros excelentes resultados */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left mb-16">
            <h2 className="font-prototype font-normal text-5xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('results_title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/img5.webp", label: "Antes", procedure: "Lifting en hamaca" },
              { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/img6.webp", label: "Después", procedure: "Lifting en hamaca" },
              { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/img7.webp", label: "Antes", procedure: "Lifting en hamaca" },
              { src: "https://media.drandrespereznieto.com/images/lifting-hamaca/img8.webp", label: "Después", procedure: "Lifting en hamaca" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Resultado ${Math.floor(index / 2) + 1} - ${item.label}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='375' viewBox='0 0 300 375'%3E%3Crect width='300' height='375' fill='%23e5e7eb'/%3E%3Ctext x='150' y='187' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3E${item.label}%3C/text%3E%3C/svg%3E`
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="px-4 py-3 text-white text-center rounded-b-lg"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.3) 30%, rgba(29, 60, 93, 0.6) 70%, rgba(29, 60, 93, 0.8) 100%)'
                      }}
                    >
                      <div className="font-sansation font-bold text-sm">{item.label}</div>
                      <div className="font-sansation font-normal text-xs opacity-90">{item.procedure}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón para ver más casos */}
          <div className="text-center">
            <Link
              href={`/${locale}/galeria/procedimientos-faciales/lifting-hamaca`}
              className="inline-flex items-center font-sansation font-bold border-2 px-8 py-3 rounded-lg transition-colors group"
              style={{
                borderColor: '#1d3c5d',
                color: '#1d3c5d'
              }}
            >
              {t('view_more_results')}
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


      {/* Testimonios */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-prototype font-normal text-3xl lg:text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('testimonials_title')}
            </h2>
            <div className="w-48 h-1 mx-auto mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
          </div>

          <div className="flex justify-center mb-12">
            <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-lg max-w-3xl w-full">
              <video
                className="w-full h-full object-cover"
                poster="https://media.drandrespereznieto.com/images/videos/hamaca cuello/testimonio.webp"
                controls
                preload="metadata"
                onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              >
                {/*<source src="https://media.drandrespereznieto.com/images/videos/hamaca cuello/TESTIMONIAL María Helena.mp4" type="video/mp4" />*/}
                <source src="https://media.drandrespereznieto.com/images/videos/hamaca cuello/testimonio-Maria-Helena.webm" type="video/webm" />
                Tu navegador no soporta el elemento video.
              </video>

              <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none', backgroundColor: '#1d3c5d' }}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#326dccff' }}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="font-sansation font-normal text-white text-sm">Testimonio Paciente</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/testimonios`}
              className="font-sansation font-bold inline-block border-2 px-8 py-3 rounded-full transition-colors"
              style={{
                borderColor: '#1d3c5d',
                color: '#1d3c5d'
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                const target = e.target as HTMLAnchorElement;
                target.style.backgroundColor = '#1d3c5d';
                target.style.color = 'white';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                const target = e.target as HTMLAnchorElement;
                target.style.backgroundColor = 'transparent';
                target.style.color = '#1d3c5d';
              }}
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-left mb-16">
            <h2 className="font-prototype font-normal text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-87 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
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
                    <div className="font-sansation font-normal leading-relaxed space-y-4" style={{ color: '#1d3c5d' }}>
                      {t(`faqs.${key}.answer`).split('•').map((part, partIndex) => {
                        if (partIndex === 0) {
                          return <p key={partIndex}>{part}</p>
                        } else {
                          return <p key={partIndex}>• {part}</p>
                        }
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botón Recomendaciones postoperatorias */}
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/recursos/guias/`}
              className="font-sansation font-bold inline-block border-2 px-8 py-3 rounded-full transition-colors"
              style={{
                borderColor: '#1d3c5d',
                color: '#1d3c5d'
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                const target = e.target as HTMLAnchorElement;
                target.style.backgroundColor = '#1d3c5d';
                target.style.color = 'white';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                const target = e.target as HTMLAnchorElement;
                target.style.backgroundColor = 'transparent';
                target.style.color = '#1d3c5d';
              }}
            >
              {t('postop_recommendations_btn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
