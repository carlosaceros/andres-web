"use client"
import Image from 'next/image'
import Link from 'next/link'
import FaqSection from './FaqSection'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ClientContent() {
  const { locale } = useParams() as { locale: 'es' | 'en' };
  const activeLocale = locale === 'en' ? 'en' : 'es';
  const t = useTranslations('blefaroplastia');

  const galleryItems = [
    { src: "https://media.drandrespereznieto.com/images/blefaroplastia/Aponte-antes.webp", label: t('gallery_before'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/blefaroplastia/Aponte-despues.webp", label: t('gallery_after'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/blefaroplastia/Astrid-antes.webp", label: t('gallery_before'), procedure: t('gallery_procedure') },
    { src: "https://media.drandrespereznieto.com/images/blefaroplastia/Astrid-despues.webp", label: t('gallery_after'), procedure: t('gallery_procedure') }
  ];

  const resultsGalleryItems = [
      { src: "https://media.drandrespereznieto.com/images/blefaroplastia/Sonia-antes.webp", label: t('gallery_before').toUpperCase(), type: t('gallery_before'), procedure: t('gallery_procedure') },
      { src: "https://media.drandrespereznieto.com/images/blefaroplastia/sonia-despues.webp", label: t('gallery_after').toUpperCase(), type: t('gallery_after'), procedure: t('gallery_procedure') },
      { src: "https://media.drandrespereznieto.com/images/blefaroplastia/img3.webp", label: t('gallery_before').toUpperCase(), type: t('gallery_before'), procedure: t('gallery_procedure') },
      { src: "https://media.drandrespereznieto.com/images/blefaroplastia/img4.webp", label: t('gallery_after').toUpperCase(), type: t('gallery_after'), procedure: t('gallery_procedure') }
  ];

  const LOCAL_EXPLANATION = {
    es: {
      problem_title: "¿Sientes que tus ojos reflejan cansancio constante, incluso tras dormir bien?",
      problem_text: "Con el paso de los años, la delicada piel de los párpados superiores pierde elasticidad y comienza a descolgarse, en ocasiones dificultando la visión o creando un pliegue incómodo. Al mismo tiempo, en los párpados inferiores, los paquetes de grasa natural que rodean el ojo se desplazan hacia adelante (protrusión), formando las temidas 'bolsas' y marcando el surco de la ojera. Esto da un aspecto de fatiga crónica o tristeza que no responde a cremas ni tratamientos no invasivos.",
      eeat_title: "Cirugía de Autor con Respaldo de Especialista",
      eeat_text: "La cirugía de párpados es un procedimiento de alta precisión milimétrica. El Dr. Andrés Pérez Nieto cuenta con 30 años de experiencia como cirujano plástico facial y corporal, formado en instituciones de primer nivel de Colombia y Estados Unidos (Manhattan Eye and Ear Hospital, NY). Como miembro de la SCCP y la ISAPS, realiza la blefaroplastia con técnicas avanzadas como Fat Sliding, preservando el volumen natural y operando en las mejores clínicas de Bogotá, incluyendo el Santa Ana Medical Center.",
      videos_title: "Casos Reales y Explicaciones en Video",
      videos_subtitle: "Descubre testimonios y explicaciones del Dr. Andrés Pérez Nieto sobre cómo revitalizar tu mirada de forma natural.",
    },
    en: {
      problem_title: "Do your eyes look constantly tired, even after a good night's sleep?",
      problem_text: "Over the years, the delicate skin of the upper eyelids loses elasticity and begins to sag, sometimes making vision difficult or creating an uncomfortable fold. At the same time, in the lower eyelids, the natural fat pockets surrounding the eye shift forward (protrusion), forming the dreaded 'bags' and deep dark circle hollows. This creates an appearance of chronic fatigue or sadness that does not respond to creams or non-invasive treatments.",
      eeat_title: "Signature Surgery backed by Board Certification",
      eeat_text: "Eyelid surgery is a procedure of millimetric precision. Dr. Andres Perez Nieto has 30 years of experience as a facial and body plastic surgeon, trained in top-tier institutions in Colombia and the United States (Manhattan Eye and Ear Hospital, NY). As a certified member of SCCP and ISAPS, he performs blepharoplasty using advanced techniques like Fat Sliding, preserving natural volume and operating in Bogota's premier clinics, such as the Santa Ana Medical Center.",
      videos_title: "Real Cases and Video Explanations",
      videos_subtitle: "Discover testimonials and explanations by Dr. Andres Perez Nieto on how to revitalize your gaze naturally.",
    }
  };

  const copy = LOCAL_EXPLANATION[activeLocale];

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
                  {t('title')} {locale === 'es' ? 'en Bogotá' : 'in Colombia'}
                </h1>
                <div className="w-72 h-1 mb-6" style={{ backgroundColor: '#1d3c5d' }}></div>
                <h2 className="font-sansation text-xl lg:text-2xl mb-8 font-bold" style={{ color: '#1d3c5d' }}>
                  {t('subtitle')}
                </h2>
              </div>

              {/* EEAT & FOMO Badge */}
              <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm max-w-xl">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1d3c5d]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  {locale === 'es' ? '30+ Años de Experiencia | Miembro SCCP & ISAPS' : '30+ Years of Experience | SCCP & ISAPS Member'}
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-xs font-semibold text-amber-700 animate-pulse">
                  {locale === 'es' ? '⚠️ Cupos Quirúrgicos Limitados' : '⚠️ Limited Surgical Slots'}
                </span>
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

      {/* Eugene Schwartz - Problem Aware Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center md:text-left text-[#1d3c5d]">
            <h2 className="font-prototype text-2xl md:text-3xl lg:text-4xl mb-6">
              {copy.problem_title}
            </h2>
            <p className="font-sansation text-lg leading-relaxed opacity-90">
              {copy.problem_text}
            </p>
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
            <div className="relative rounded-lg overflow-hidden aspect-video bg-[#10140f]">
              <video playsInline
                className="w-full h-full object-cover"
                poster="https://media.drandrespereznieto.com/images/blefaroplastia/imgvideo1.webp"
                controls
              >
                <source src="https://media.drandrespereznieto.com/images/videos/cirugia-parpados.webm" type="video/webm" />
                {t('video_unsupported')}
              </video>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video bg-[#10140f]">
              <video playsInline
                className="w-full h-full object-cover"
                poster="https://media.drandrespereznieto.com/images/blefaroplastia/video2.webp"
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
            <div className="relative rounded-lg overflow-hidden aspect-video bg-[#10140f]">
              <video playsInline
                className="w-full h-full object-cover"
                poster="https://media.drandrespereznieto.com/images/blefaroplastia/cortina.webp"
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
            <div className="relative rounded-lg overflow-hidden aspect-video bg-[#10140f]">
              <video playsInline
                className="w-full h-full object-cover"
                poster="https://media.drandrespereznieto.com/images/blefaroplastia/fat-sliding.webp"
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
                <p className="font-sansation font-normal leading-relaxed text-center font-bold" style={{ color: '#1d3c5d' }}>
                  {activeLocale === 'es' 
                    ? '✓ No hunde la cuenca del ojo, preservando el volumen y la juventud de tu mirada.' 
                    : '✓ Does not hollow the eye socket, preserving youthful volume and expression.'}
                </p>
              </div>
              <div className="p-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#babdb3', minHeight: '350px', maxWidth: '280px', margin: '0 auto' }}>
                <p className="font-sansation font-normal leading-relaxed text-center font-bold" style={{ color: '#1d3c5d' }}>
                  {activeLocale === 'es' 
                    ? '✓ Camufla el color oscuro y pigmentado de la ojera al rellenar el surco de la lágrima.' 
                    : '✓ Camouflages the dark, pigmented circle color by anatomically filling the tear trough.'}
                </p>
              </div>
              <div className="p-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#babdb3', minHeight: '350px', maxWidth: '280px', margin: '0 auto' }}>
                <p className="font-sansation font-normal leading-relaxed text-center font-bold" style={{ color: '#1d3c5d' }}>
                  {activeLocale === 'es' 
                    ? '✓ Resultados naturales, estables y sumamente duraderos a largo plazo.' 
                    : '✓ Guarantees natural, stable, and highly long-lasting results in the long run.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eugene Schwartz - E-E-A-T Acreditation Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[180px_1fr] gap-8 items-center text-center md:text-left text-[#1d3c5d]">
            <div className="relative w-36 h-36 rounded-full overflow-hidden mx-auto border-4 border-gray-100 shadow-lg">
              <Image
                src="/images/dr-perez.webp"
                alt="Dr. Andrés Pérez Nieto"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <div>
              <h2 className="font-prototype text-2xl md:text-3xl mb-4">
                {copy.eeat_title}
              </h2>
              <p className="font-sansation text-base leading-relaxed opacity-90">
                {copy.eeat_text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Video Reels Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-prototype font-normal text-3xl lg:text-4xl mb-3" style={{ color: '#1d3c5d' }}>
              {copy.videos_title}
            </h2>
            <p className="font-sansation text-sm text-gray-500 max-w-xl mx-auto">
              {copy.videos_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md flex flex-col justify-between max-w-[320px] mx-auto w-full">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-black relative shadow-inner">
                <iframe
                  src="https://www.instagram.com/reel/DYQmqzmMQVC/embed/"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-sansation font-bold text-[#1d3c5d]">
                  {activeLocale === 'es' ? 'Mirada Amplia y Elevación Directa' : 'Wide Open Gaze & Direct Brow Lift'}
                </h4>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md flex flex-col justify-between max-w-[320px] mx-auto w-full">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-black relative shadow-inner">
                <iframe
                  src="https://www.instagram.com/reel/DXEnnl9iRR6/embed/"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-sansation font-bold text-[#1d3c5d]">
                  {activeLocale === 'es' ? 'Blefaroplastia: Rejuvenece con Naturalidad' : 'Blepharoplasty: Natural Rejuvenation'}
                </h4>
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
              <video playsInline
                className="w-full h-full object-cover"
                poster="https://media.drandrespereznieto.com/images/blefaroplastia/testimonio1a.webp"
                controls
              >
                <source src="https://media.drandrespereznieto.com/images/videos/Blefaroplastia-resultados.webm" type="video/webm" />
                {t('video_unsupported')}
              </video>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-lg">
              <video playsInline
                className="w-full h-full object-cover"
                poster="https://media.drandrespereznieto.com/images/blefaroplastia/testimonio1.webp"
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

      {/* FAQs */}
      
      {/* Testimonios Transcritos en Texto */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-prototype text-3xl lg:text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {activeLocale === 'es' ? 'Testimonios Reales Transcritos' : 'Transcribed Patient Testimonials'}
            </h2>
            <p className="font-sansation text-sm text-gray-500 max-w-xl mx-auto">
              {activeLocale === 'es' 
                ? 'Opiniones y vivencias de pacientes reales tomadas directamente de sus testimonios en video.' 
                : 'Real patient experiences transcribed directly from their video testimonials.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative text-[#1d3c5d]">
              <span className="text-6xl text-[#1d3c5d] opacity-10 absolute top-4 left-4 font-serif">“</span>
              <p className="font-sansation text-gray-700 text-base italic mb-6 leading-relaxed relative z-10">
                {activeLocale === 'es' ? "Vengo desde la Florida súper emocionada al ver al doctor Andrés, el arte que tiene con esas manos es espectacular... Me realicé la cirugía que consta de blefaroplastia superior, inferior, y aplicación de células madre. Estoy muy contenta, me ha dado bastante elasticidad, color y brillo a la piel. Lo recomiendo, es lo mejor." : "I came from Florida super excited to see Dr. Andres. The art he does with his hands is spectacular... I underwent upper and lower blepharoplasty combined with stem cells. I am extremely happy, my skin has gained so much elasticity, color, and brightness. I highly recommend him."}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1d3c5d] flex items-center justify-center text-white font-bold text-sm">
                  {activeLocale === 'es' ? "P" : "P"}
                </div>
                <div>
                  <h4 className="font-sansation font-bold text-[#1d3c5d] text-sm">{activeLocale === 'es' ? "Paciente de Florida" : "Patient from Florida"}</h4>
                  <p className="font-sansation text-xs text-gray-400">{activeLocale === 'es' ? "Orlando, FL" : "Orlando, FL"}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative text-[#1d3c5d]">
              <span className="text-6xl text-[#1d3c5d] opacity-10 absolute top-4 left-4 font-serif">“</span>
              <p className="font-sansation text-gray-700 text-base italic mb-6 leading-relaxed relative z-10">
                {activeLocale === 'es' ? "Como estilista de toda la vida, al principio era el detractor número uno y no quería que se operara. Pero quedé sorprendido: el doctor hizo algo súper natural, el mentón perfecto, las cicatrices son un hilo fino, los ojos no quedaron deformes, el parpadeo quedó idéntico y las cejas perfectas. Una recuperación excelente." : "As a long-time hair stylist, I was initially the number one skeptic. But I was amazed: the doctor did something super natural, the chin is perfect, the scars are like a fine thread, the eyes are not distorted, blink movement is natural, and brows are perfect. Excellent recovery."}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1d3c5d] flex items-center justify-center text-white font-bold text-sm">
                  {activeLocale === 'es' ? "V" : "V"}
                </div>
                <div>
                  <h4 className="font-sansation font-bold text-[#1d3c5d] text-sm">{activeLocale === 'es' ? "Víctor" : "Victor"}</h4>
                  <p className="font-sansation text-xs text-gray-400">{activeLocale === 'es' ? "Estilista Profesional - Bogotá" : "Professional Hair Stylist - Bogota"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <FaqSection />
    </div>
  )
}