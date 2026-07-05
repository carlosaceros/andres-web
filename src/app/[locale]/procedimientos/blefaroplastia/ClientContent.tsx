"use client"
import Image from 'next/image'
import Link from 'next/link'
import FaqSection from './FaqSection'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('blefaroplastia');

  const galleryItems = [
    { src: "/images/blefaroplastia/Aponte-antes.webp", label: t('gallery_before'), procedure: t('gallery_procedure') },
    { src: "/images/blefaroplastia/Aponte-despues.webp", label: t('gallery_after'), procedure: t('gallery_procedure') },
    { src: "/images/blefaroplastia/Astrid-antes.webp", label: t('gallery_before'), procedure: t('gallery_procedure') },
    { src: "/images/blefaroplastia/Astrid-despues.webp", label: t('gallery_after'), procedure: t('gallery_procedure') }
  ];

  const resultsGalleryItems = [
      { src: "/images/blefaroplastia/Sonia-antes.webp", label: t('gallery_before').toUpperCase(), type: t('gallery_before'), procedure: t('gallery_procedure') },
      { src: "/images/blefaroplastia/sonia-despues.webp", label: t('gallery_after').toUpperCase(), type: t('gallery_after'), procedure: t('gallery_procedure') },
      { src: "/images/blefaroplastia/img3.webp", label: t('gallery_before').toUpperCase(), type: t('gallery_before'), procedure: t('gallery_procedure') },
      { src: "/images/blefaroplastia/img4.webp", label: t('gallery_after').toUpperCase(), type: t('gallery_after'), procedure: t('gallery_procedure') }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/blefaroplastia-banner.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="font-prototype text-4xl lg:text-5xl font-normal mb-4" style={{ color: '#1d3c5d' }}>
                  {t('title')}
                </h1>
                <div className="w-72 h-1 mb-6" style={{ backgroundColor: '#1d3c5d' }}></div>
                <h2 className="font-sansation text-xl lg:text-2xl mb-8 font-bold" style={{ color: '#1d3c5d' }}>
                  {t('subtitle')}
                </h2>
              </div>
              <div className="space-y-6 font-sansation text-lg leading-relaxed max-w-lg" style={{ color: '#1d3c5d' }}>
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Resultado ${Math.floor(index / 2) + 1} - ${item.label}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="px-4 py-3 text-white text-center rounded-b-lg"
                      style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.53) 30%, rgba(29, 60, 93, 0.73) 70%, rgba(29, 60, 93, 0.8) 100%)' }}
                    >
                      <div className="font-sansation text-sm font-bold">{item.label}</div>
                      <div className="font-sansation text-xs font-normal opacity-90">{item.procedure}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Rejuvenecimiento Section */}
        <section className="py-16" style={{ backgroundColor: '#babdb3' }}>
          <div className="container mx-auto px-4">
            <h2 className="font-prototype text-3xl lg:text-4xl font-normal mb-8" style={{ color: '#1d3c5d' }}>
              {t('rejuvenation_title')}
            </h2>
            <div className="space-y-6 font-sansation font-normal leading-relaxed mb-12 max-w-5xl" style={{ color: '#1d3c5d' }}>
              <p>{t('rejuvenation_p1')}</p>
              <p>{t('rejuvenation_p2')}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/blefaroplastia/imgvideo1.webp"
                  controls
                >
                  <source src="https://media.drandrespereznieto.com/images/videos/cirugia-parpados.webm" type="video/webm" />
                  {t('video_unsupported')}
                </video>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/blefaroplastia/video2.webp"
                  controls
                >
                  <source src="https://media.drandrespereznieto.com/images/videos/Como-realizo-blefaroplastia.webm" type="video/webm" />
                  {t('video_unsupported')}
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Blefaroplastia Superior e Inferior Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-16">
              <h2 className="font-prototype text-3xl lg:text-4xl font-normal mb-4" style={{ color: '#1d3c5d' }}>
                {t('superior_bleph_title')}
              </h2>
              <div className="w-90 h-1 mb-6" style={{ backgroundColor: '#1d3c5d' }}></div>
              <h3 className="font-sansation text-xl lg:text-2xl font-bold mb-8" style={{ color: '#1d3c5d' }}>
                {t('superior_bleph_subtitle')}
              </h3>
              <div className="space-y-6 font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                <p>{t('superior_bleph_p1')}</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-prototype text-3xl lg:text-4xl font-normal mb-4" style={{ color: '#1d3c5d' }}>
                  {t('inferior_bleph_title')}
                </h2>
                <div className="w-90 h-1 mb-6" style={{ backgroundColor: '#1d3c5d' }}></div>
                <h3 className="font-sansation text-xl lg:text-2xl font-bold mb-8" style={{ color: '#1d3c5d' }}>
                  {t('inferior_bleph_subtitle')}
                </h3>
                <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                  {t('inferior_bleph_p1')}
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/blefaroplastia/cortina.webp"
                  controls
                >
                  <source src="https://media.drandrespereznieto.com/images/videos/Efecto-cortina-efecto-ojera.webm" type="video/webm" />
                  {t('video_unsupported')}
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Fat Sliding Technique */}
        <section className="py-16 text-white" style={{ background: 'radial-gradient(ellipse at center, #2c5aa0 0%, #1d3c5d 70%, #1a3a5a 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <h2 className="font-prototype text-3xl lg:text-4xl font-normal mb-4">
                {t('fat_sliding_title')}
              </h2>
              <div className="w-79 h-1 bg-white mb-6 ml-0"></div>
              <h3 className="font-sansation text-xl lg:text-2xl font-bold mb-8">
                {t('fat_sliding_subtitle')}
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/blefaroplastia/fat-sliding.webp"
                  controls
                >
                  <source src="https://media.drandrespereznieto.com/images/videos/Blepharoplasty-Fat Slide.webm" type="video/webm" />
                  {t('video_unsupported')}
                </video>
              </div>
              <div>
                <p className="font-sansation font-normal text-lg leading-relaxed">
                  {t('fat_sliding_p1')}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-prototype text-3xl lg:text-4xl font-normal text-center mb-12">
                {t('why_different_title')}
              </h3>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="p-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#babdb3', minHeight: '350px', maxWidth: '280px', margin: '0 auto' }}>
                  <p className="font-sansation font-normal leading-relaxed text-center" style={{ color: '#1d3c5d' }}>
                    {t('why_different_c1')}
                  </p>
                </div>
                <div className="p-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#babdb3', minHeight: '350px', maxWidth: '280px', margin: '0 auto' }}>
                  <p className="font-sansation font-normal leading-relaxed text-center" style={{ color: '#1d3c5d' }}>
                    {t('why_different_c2')}
                  </p>
                </div>
                <div className="p-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#babdb3', minHeight: '350px', maxWidth: '280px', margin: '0 auto' }}>
                  <p className="font-sansation font-normal leading-relaxed text-center" style={{ color: '#1d3c5d' }}>
                    {t('why_different_c3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-prototype text-3xl lg:text-4xl font-normal text-left mb-4" style={{ color: '#1d3c5d' }}>
              {t('results_title')}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {resultsGalleryItems.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={item.src}
                      alt={`Resultado ${Math.floor(index / 2) + 1} - ${item.label}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0">
                      <div
                        className="px-4 py-3 text-white text-center rounded-b-lg"
                        style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(29, 60, 93, 0.3) 30%, rgba(29, 60, 93, 0.75) 70%, rgba(29, 60, 93, 0.8) 100%)' }}
                      >
                        <div className="font-sansation text-sm font-bold">{item.label}</div>
                        <div className="font-sansation text-xs font-normal opacity-90">{item.procedure}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 mb-18">
              <Link
                href={`/${locale}/galeria/procedimientos-faciales/blefaroplastia`}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 hover:bg-[#1d3c5d] hover:text-white transition-all duration-300 rounded-lg group"
                style={{ borderColor: '#1d3c5d', color: '#1d3c5d' }}
              >
                <span className="font-sansation font-semibold text-lg mr-3">
                  {t('view_more_cases')}
                </span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </Link>
            </div>
            <h2 className="font-prototype text-3xl lg:text-4xl font-normal mb-4" style={{ color: '#1d3c5d' }}>
              {t('testimonials_title')}
            </h2>
            <div className="w-49 h-1 mb-12" style={{ backgroundColor: '#1d3c5d' }}></div>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/blefaroplastia/testimonio1a.webp"
                  controls
                >
                  <source src="https://media.drandrespereznieto.com/images/videos/Blefaroplastia-resultados.webm" type="video/webm" />
                  {t('video_unsupported')}
                </video>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/blefaroplastia/testimonio1.webp"
                  controls
                >
                  <source src="https://media.drandrespereznieto.com/images/videos/Blefaroplastialipofillingfacialcelulasmadre.webm" type="video/webm" />
                  {t('video_unsupported')}
                </video>
              </div>
            </div>
            <div className="text-center">
              <Link href={`/${locale}/testimonios`}>
                <button
                  className="font-sansation font-bold px-8 py-3 rounded-full transition-colors border-2 hover:bg-[#1d3c5d] hover:text-white"
                  style={{ borderColor: '#1d3c5d', color: '#1d3c5d' }}
                >
                  {t('view_more_button')}
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* This is where the interactive FAQ section will be rendered */}
        <FaqSection />
    </div>
  )
}