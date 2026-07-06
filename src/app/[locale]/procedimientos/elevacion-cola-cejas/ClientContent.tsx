"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ClientContent() {
  const { locale } = useParams() as { locale: 'es' | 'en' };
  const activeLocale = locale === 'en' ? 'en' : 'es';
  const t = useTranslations('elevacion_cola_cejas');
  const t_testimonials = useTranslations('results_gallery');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqKeys = ['q1', 'q2', 'q3', 'q4'];

  const LOCAL_EXPLANATION = {
    es: {
      problem_title: "¿Es el párpado o es la ceja? El origen de la mirada cansada",
      problem_text: "Muchas personas consultan buscando una blefaroplastia porque sienten peso en sus párpados superiores, sin darse cuenta de que la verdadera causa es el descenso (ptosis) de las cejas. Cuando la cola de la ceja cae por debajo del borde óseo orbital, empuja la piel del párpado hacia abajo, creando una mirada triste, cansada o envejecida que no se corrige únicamente operando los párpados.",
      eeat_title: "Cirugía de Autor con Respaldo de Especialista",
      eeat_text: "La elevación de cola de cejas requiere un conocimiento profundo de la anatomía facial para evitar la expresión de 'sorpresa constante'. El Dr. Andrés Pérez Nieto tiene 30 años de experiencia internacional. Formado en The University of Illinois y Manhattan Eye and Ear Hospital, diseña cada elevación de cejas de forma artística para reabrir la mirada de manera natural y segura en el Santa Ana Medical Center.",
      videos_title: "Casos Reales y Explicaciones del Dr. Andrés Pérez",
      videos_subtitle: "Mira cómo la elevación de cejas combinada con blefaroplastia rejuvenece la mirada por completo.",
    },
    en: {
      problem_title: "Is it the eyelid or the eyebrow? The source of a tired gaze",
      problem_text: "Many patients consult for a blepharoplasty because they feel heaviness in their upper eyelids, unaware that the actual cause is the drooping (ptosis) of their eyebrows. When the tail of the eyebrow falls below the orbital bone edge, it pushes the eyelid skin downward, creating a sad, tired, or aged look that cannot be corrected by eyelid surgery alone.",
      eeat_title: "Signature Surgery backed by Board Certification",
      eeat_text: "Elevating the eyebrow tail requires a deep understanding of facial anatomy to avoid a constant 'surprised' expression. Dr. Andres Perez Nieto has 30 years of international experience. Trained at The University of Illinois and Manhattan Eye and Ear Hospital, he artistically designs each brow lift to open up the eyes naturally and safely at the Santa Ana Medical Center.",
      videos_title: "Real Cases and Explanations by Dr. Andres Perez",
      videos_subtitle: "See how combining a brow lift with blepharoplasty completely rejuvenates the eyes.",
    }
  };

  const localFaqs = {
    es: [
      {
        question: "¿Qué diferencia hay entre la elevación de cejas directa y un lifting de cejas temporal?",
        answer: "La elevación de cejas directa (resección de un arco de piel justo encima del límite del vello de la ceja) es la técnica más potente y precisa para corregir la caída del tercio lateral de la ceja (ptosis lateral). Permite al Dr. Andrés Pérez Nieto esculpir de manera milimétrica la altura y arco deseados. Por otro lado, un lifting temporal se realiza mediante incisiones en las sienes dentro del cuero cabelludo, ofreciendo una tracción más difusa pero ocultando la cicatriz por completo dentro del pelo."
      },
      {
        question: "What is the recovery period and when are sutures removed?",
        answer: "Recovery is fast and requires very little downtime. Swelling and mild bruising around the outer eye area are normal during the first 5 to 7 days. Sutures are meticulously removed on day 7. Most patients return to their social and professional activities within a week, using makeup to conceal any temporary redness."
      },
      {
        question: "Will the scars from a direct brow lift be noticeable?",
        answer: "The scar from a direct brow lift is designed to be exceptionally discreet. By placing the incision precisely along the upper edge of the eyebrow hair, it blends with the natural transition of the skin and hair. Over a period of 2 to 3 months, the scar fades, turning into a fine, flat line that can be easily concealed with makeup or the brow hair itself."
      },
      {
      "question": "¿Cuánto tiempo debo permanecer en Colombia para mi recuperación antes de poder viajar en avión?",
      "answer": "El tiempo recomendado de estadía para una recuperación segura depende del procedimiento. Para cirugías mayores como el lifting facial (Deep Plane), se requiere una permanencia mínima de 10 a 14 días. Para procedimientos de menor complejidad como blefaroplastia, elevación de cejas, transferencia de grasa o explantación mamaria, el tiempo mínimo sugerido es de 7 a 10 días. Esto permite retirar suturas, realizar controles presenciales indispensables y garantizar que estés en condiciones óptimas para viajar de regreso."
},
      {
      "question": "¿Qué apoyo logístico y de acompañamiento ofrecen para pacientes internacionales?",
      "answer": "Nuestro consultorio brinda un acompañamiento integral para pacientes que viajan desde el extranjero. Te asistimos recomendándote hoteles y casas de recuperación aliadas con tarifas especiales en Bogotá, coordinamos transporte privado bilingüe seguro desde y hacia el aeropuerto, y te conectamos con enfermeras profesionales especializadas en cuidados postquirúrgicos domiciliarios en caso de que viajes sin acompañante."
},
      {
      "question": "¿Cuáles son los métodos de pago aceptados y ofrecen financiación?",
      "answer": "Aceptamos diversos medios de pago para tu comodidad, incluyendo tarjetas de crédito internacionales (Visa, Mastercard, Amex), transferencias bancarias internacionales registradas (Swift), pagos locales electrónicos mediante PSE, y transferencias o tarjetas de débito/crédito nacionales. Es importante aclarar que no manejamos opciones de financiación local directa; toda la inversión del procedimiento debe quedar cubierta en su totalidad antes del día programado de la cirugía."
}
    ],
    en: [
      {
        question: "What is the difference between a direct brow lift and a temporal brow lift?",
        answer: "A direct brow lift involves removing a precise strip of skin right above the eyebrow hair. It is the most powerful technique to customize and correct sagging of the outer brow. A temporal brow lift uses small incisions hidden inside the hairline at the temples, providing a lifting effect that pulls diagonally and hides the scar completely within the hair."
      },
      {
        question: "What is the recovery period and when are sutures removed?",
        answer: "Recovery is fast and requires very little downtime. Swelling and mild bruising around the outer eye area are normal during the first 5 to 7 days. Sutures are meticulously removed on day 7. Most patients return to their social and professional activities within a week, using makeup to conceal any temporary redness."
      },
      {
        question: "Will the scars from a direct brow lift be noticeable?",
        answer: "The scar from a direct brow lift is designed to be exceptionally discreet. By placing the incision precisely along the upper edge of the eyebrow hair, it blends with the natural transition of the skin and hair. Over a period of 2 to 3 months, the scar fades, turning into a fine, flat line that can be easily concealed with makeup or the brow hair itself."
      },
      {
      "question": "How long do I need to stay in Colombia for my recovery before flying back?",
      "answer": "The recommended stay for a safe recovery depends on the procedure. For major surgeries like the Deep Plane Facelift, a minimum stay of 10 to 14 days in Bogota is required. For less complex procedures like blepharoplasty, brow lifts, fat transfer, or breast explant, the suggested stay is 7 to 10 days. This allows for suture removal, essential in-person checkups, and guarantees you are in optimal health to travel home."
},
      {
      "question": "What logistical support and post-op accompaniment do you offer for international patients?",
      "answer": "We provide comprehensive guidance for patients traveling from abroad. We assist you with accommodation recommendations at trusted hotels or recovery houses in Bogota with special partner rates, coordinate safe private bilingual transportation to and from the airport, and connect you with certified private nursing care services for your hotel stay if you are traveling alone."
},
      {
      "question": "What payment methods do you accept, and do you offer financing?",
      "answer": "We accept multiple secure payment methods for your convenience, including international credit cards (Visa, Mastercard, Amex), international bank wire transfers (Swift), local Colombian PSE transfers, and national debit/credit cards. Please note that we do not offer local financing options; all fees must be fully settled prior to the scheduled date of your procedure."
}
    ]
  };

  const copy = LOCAL_EXPLANATION[activeLocale];
  const mergedFaqs = [
    ...faqKeys.map((key) => ({
      question: t(`faqs.${key}.question`),
      answer: t(`faqs.${key}.answer`)
    })),
    ...localFaqs[activeLocale]
  ];

  return (
    <div>
      {/* Banner Principal */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 block sm:hidden"
          style={{
            background: `linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.2) 100%), url('/images/Elevacion-Cola-cejas-movil.webp') center/cover no-repeat`
          }}
        ></div>
        <div
          className="absolute inset-0 hidden sm:block lg:hidden"
          style={{
            background: `linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.15) 100%), url('/images/Elevacion-Cola-cejas-tablet.webp') center/cover no-repeat`
          }}
        ></div>
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: `linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.15) 100%), url('/images/Elevacion-Cola-cejas-banner.webp') center/cover no-repeat`
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-12 lg:px-6 pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 min-h-screen flex items-center">
          <div className="max-w-5xl mt-4 sm:mt-8 md:mt-12 lg:mt-16 w-full">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="mb-6 sm:mb-10 md:mb-14 lg:mb-12 mt-6 sm:mt-10 md:mt-14 lg:mt-12">
                <h1 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-3 sm:mb-4 md:mb-5 lg:mb-4 leading-tight" style={{ color: '#1d3c5d' }}>
                  {t('title')} {locale === 'es' ? 'en Bogotá' : 'in Colombia'}
                </h1>
                <div className="w-16 sm:w-24 md:w-40 lg:w-48 xl:w-73 h-1 mb-4 sm:mb-6 md:mb-7 lg:mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
                <h2 className="font-sansation text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 sm:mb-6 md:mb-7 lg:mb-8 font-medium leading-tight max-w-4xl" style={{ color: '#1d3c5d' }}>
                  {t('subtitle')}
                </h2>

                {/* EEAT & FOMO Badge */}
                <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm max-w-xl mb-6 md:mb-8">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1d3c5d]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {locale === 'es' ? '30+ Años de Experiencia | Miembro SCCP & ISAPS' : '30+ Years of Experience | SCCP & ISAPS Member'}
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-xs font-semibold text-amber-700 animate-pulse">
                    {locale === 'es' ? '⚠️ Cupos Quirúrgicos Limitados' : '⚠️ Limited Surgical Slots'}
                  </span>
                </div>
                <div className="font-sansation space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl" style={{ color: '#1d3c5d' }}>
                  <p>{t('description_p1')}</p>
                  <p>{t('description_p2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visión estética */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                  {t('vision_title')}
                </h2>
                <div className="font-sansation space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                  <p>{t('vision_p1')}</p>
                  <p>{t('vision_p2')}</p>
                </div>
              </div>
              <div className="lg:col-span-1 flex justify-center order-first lg:order-last">
                <div className="w-full max-w-sm sm:max-w-md lg:w-80">
                  <video playsInline
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    controls
                    poster="/images/cejas/img-video.webp"
                  >
                    <source src="https://media.drandrespereznieto.com/images/videos/Elevación-Cola-Cejas.webm" type="video/webm" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eugene Schwartz - Problem Aware Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-[#1d3c5d]">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="font-prototype text-2xl md:text-3xl lg:text-4xl mb-6">
              {copy.problem_title}
            </h2>
            <p className="font-sansation text-lg leading-relaxed opacity-90">
              {copy.problem_text}
            </p>
          </div>
        </div>
      </section>

      {/* Eugene Schwartz - E-E-A-T Acreditation Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-[#1d3c5d]">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[180px_1fr] gap-8 items-center text-center md:text-left">
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

      {/* Detalles Técnica */}
      <section
        className="py-12 sm:py-16 lg:py-20 text-white"
        style={{
          background: 'radial-gradient(circle at center, #2563eb 0%, #1d3c5d 70%)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-12 sm:mb-16">
              <h2 className="font-prototype text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8">
                {t('technique_title')}
              </h2>
              <p className="font-sansation text-base sm:text-lg md:text-3xl opacity-100 max-w-5xl leading-relaxed">
                {t('technique_subtitle')}
              </p>
            </div>
            <div className="font-sansation mb-12 sm:mb-16 text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl text-left">
              <p>{t('technique_desc')}</p>
            </div>
            <h3 className="font-prototype text-xl sm:text-2xl md:text-3xl font-normal mb-8 sm:mb-12 text-left">
              {t('benefits_title')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-300 rounded-lg p-4 sm:p-6 text-center">
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('benefit_1')}
                </p>
              </div>
              <div className="bg-gray-300 rounded-lg p-4 sm:p-6 text-center">
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('benefit_2')}
                </p>
              </div>
              <div className="bg-gray-300 rounded-lg p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('benefit_3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Técnicas personalizadas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                {t('custom_techniques_title')}
              </h2>
              <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto" style={{ color: '#1d3c5d' }}>
                {t('custom_techniques_intro')}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="rounded-2xl p-4 sm:p-6 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col" style={{ backgroundColor: '#babdb3' }}>
                <h3 className="font-prototype text-xl sm:text-2xl md:text-3xl font-normal mb-4 sm:mb-6 text-center leading-tight" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw('short_temporal_title') }} />
                <div className="mb-4 sm:mb-6 flex justify-center flex-shrink-0">
                  <img
                    src="/images/elevacion-temporal.webp"
                    alt="Elevación Temporal Corta"
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Crect width='320' height='320' fill='%23e5e7eb'/%3E%3Ctext x='160' y='160' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3ETécnica Temporal%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                <div className="font-sansation space-y-3 sm:space-y-4 flex-grow text-left" style={{ color: '#1d3c5d' }}>
                  <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
                    {t('short_temporal_desc')}
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg">
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('short_temporal_point_1')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('short_temporal_point_2')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('short_temporal_point_3')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl p-4 sm:p-6 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col" style={{ backgroundColor: '#babdb3' }}>
                <h3 className="font-prototype text-xl sm:text-2xl md:text-3xl font-normal mb-4 sm:mb-6 text-center leading-tight" style={{ color: '#1d3c5d' }} dangerouslySetInnerHTML={{ __html: t.raw('extended_temporal_title') }} />
                <div className="mb-4 sm:mb-6 flex justify-center flex-shrink-0">
                  <img
                    src="/images/elevacion-temporal-extendida.webp"
                    alt="Elevación Temporal Extendida"
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Crect width='320' height='320' fill='%23e5e7eb'/%3E%3Ctext x='160' y='160' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3ETécnica Extendida%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                <div className="font-sansation space-y-3 sm:space-y-4 flex-grow text-left" style={{ color: '#1d3c5d' }}>
                  <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
                    {t('extended_temporal_desc')}
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg">
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('extended_temporal_point_1')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('extended_temporal_point_2')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('extended_temporal_point_3')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('extended_temporal_point_4')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-lg sm:text-xl mt-0.5" style={{ color: '#1d3c5d' }}>✓</span>
                      <span>{t('extended_temporal_point_5')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidatos */}
      <section className="py-12 sm:py-16 lg:py-20 text-white" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8">
                {t('candidates_title')}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-300 rounded-lg p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-transparent rounded-full flex items-center justify-center" style={{ border: '4px solid #1d3c5d' }}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('candidate_1')}
                </p>
              </div>
              <div className="bg-gray-300 rounded-lg p-6 sm:p-8 text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-transparent rounded-full flex items-center justify-center" style={{ border: '4px solid #1d3c5d' }}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('candidate_2')}
                </p>
              </div>
              <div className="bg-gray-300 rounded-lg p-6 sm:p-8 text-center sm:col-start-1 sm:col-end-3 lg:col-start-auto lg:col-end-auto">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-transparent rounded-full flex items-center justify-center" style={{ border: '4px solid #1d3c5d' }}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sansation text-sm sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: '#1d3c5d' }}>
                  {t('candidate_3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Galería */}
      < section className="py-12 sm:py-16 lg:py-20 bg-white" >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-12 sm:mb-16">
              <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                {t('results_title')}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { src: "/images/cejas/MiryamAntes.webp", label: t_testimonials('before_label'), procedure: t('title') },
                { src: "/images/cejas/MiryamDespues.webp", label: t_testimonials('after_label'), procedure: t('title') },
                { src: "/images/cejas/galeria/Betty2a.webp", label: t_testimonials('before_label'), procedure: t('title') },
                { src: "/images/cejas/galeria/Betty2b.webp", label: t_testimonials('after_label'), procedure: t('title') }
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
                        <div className="text-sm font-medium font-sansation font-bold">{item.label}</div>
                        <div className="text-xs opacity-90 font-sansation font-normal">{item.procedure}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={`/${locale}/galeria/procedimientos-faciales/elevacion-cejas`}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 hover:bg-white hover:text-gray-800 transition-all duration-300 rounded-lg group"
                style={{
                  borderColor: '#1d3c5d',
                  color: '#1d3c5d'
                }}
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
          </div>
        </div>
      </section >

      {/* Instagram Video Reels Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
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
                  {activeLocale === 'es' ? 'Elevación Directa de Cejas' : 'Direct Brow Lift'}
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
                  {activeLocale === 'es' ? 'Blefaroplastia & Mirada' : 'Blepharoplasty & Gaze'}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      
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
                {activeLocale === 'es' ? "Sorprendido, el doctor hizo algo súper natural. Las cejas quedaron perfectas, en una mejor ubicación, despejando la mirada y haciéndola ver más luminosa sin ningún rasgo artificial." : "Amazed, the doctor did something super natural. The eyebrows look perfect, in a better position, opening up the eyes and making them look brighter without any artificial look."}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1d3c5d] flex items-center justify-center text-white font-bold text-sm">
                  {activeLocale === 'es' ? "V" : "V"}
                </div>
                <div>
                  <h4 className="font-sansation font-bold text-[#1d3c5d] text-sm">{activeLocale === 'es' ? "Víctor" : "Victor"}</h4>
                  <p className="font-sansation text-xs text-gray-400">{activeLocale === 'es' ? "Estilista - Bogotá" : "Hair Stylist - Bogota"}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative text-[#1d3c5d]">
              <span className="text-6xl text-[#1d3c5d] opacity-10 absolute top-4 left-4 font-serif">“</span>
              <p className="font-sansation text-gray-700 text-base italic mb-6 leading-relaxed relative z-10">
                {activeLocale === 'es' ? "Optamos por realizar elevación de cejas y blefaroplastia. El cambio en la mirada es inmediato: los párpados lucen despejados, el arco de las cejas está ubicado de forma muy precisa y la cicatriz quedó completamente camuflada en el borde del pelo, siendo invisible." : "We opted for a brow lift and blepharoplasty. The change in the eyes is immediate: the eyelids look open, the brow arch is precisely located, and the scar is completely camouflaged at the hairline, making it invisible."}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1d3c5d] flex items-center justify-center text-white font-bold text-sm">
                  {activeLocale === 'es' ? "T" : "C"}
                </div>
                <div>
                  <h4 className="font-sansation font-bold text-[#1d3c5d] text-sm">{activeLocale === 'es' ? "Testimonio Clínico" : "Clinical Testimony"}</h4>
                  <p className="font-sansation text-xs text-gray-400">{activeLocale === 'es' ? "Paciente de Bogotá" : "Patient from Bogota"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* FAQ */}
      < section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-20 sm:w-32 md:w-48 lg:w-114 h-1 mb-8 sm:mb-12" style={{ backgroundColor: '#1d3c5d' }}></div>
            <div className="space-y-3 sm:space-y-4">
              {mergedFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md">
                  <button
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  >
                    <span className="font-sansation text-base sm:text-lg font-semibold pr-4" style={{ color: '#1d3c5d' }}>
                      {faq.question}
                    </span>
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`}
                      style={{ color: '#1d3c5d' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openQuestion === index && (
                    <div className="px-4 sm:px-6 pb-3 sm:pb-4 border-t border-gray-100">
                      <p className="font-sansation leading-relaxed pt-3 sm:pt-4 text-sm sm:text-base text-gray-700" style={{ color: '#1d3c5d' }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
