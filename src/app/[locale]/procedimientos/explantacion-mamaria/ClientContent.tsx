"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ClientContent() {
  const { locale } = useParams() as { locale: 'es' | 'en' };
  const activeLocale = locale === 'en' ? 'en' : 'es';
  const t = useTranslations('explantacion_mamaria');
  const t_testimonials = useTranslations('results_gallery');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number | null) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

  const LOCAL_EXPLANATION = {
    es: {
      problem_title: "¿Por qué cada vez más mujeres deciden retirar sus implantes?",
      problem_text: "La decisión de retirar los implantes mamarios va más allá de un cambio estético. Muchas mujeres experimentan un conjunto de síntomas inflamatorios y autoinmunes agrupados bajo el término de Enfermedad de Implantes Mamarios (BII, por sus siglas en inglés) o el Síndrome de ASIA. El dolor muscular constante, la fatiga crónica inexplicable, la niebla mental y la caída del cabello son señales de alerta de que el organismo podría estar reaccionando negativamente a un cuerpo extraño.",
      eeat_title: "Cirugía de Autor con Respaldo de Especialista",
      eeat_text: "El Dr. Andrés Pérez Nieto es cirujano plástico reconstructivo con 30 años de trayectoria. Miembro de número de la Sociedad Colombiana de Cirugía Plástica (SCCP) y de la ISAPS, ha perfeccionado la técnica En Bloc para garantizar la extracción total de la cápsula inflamatoria, disminuyendo riesgos y favoreciendo la depuración biológica del cuerpo. Todas las cirugías se llevan a cabo en quirófanos certificados de alta complejidad en el Santa Ana Medical Center de Bogotá.",
      videos_title: "Videos Explicativos del Dr. Andrés Pérez Nieto",
      videos_subtitle: "Aprende de la mano del doctor sobre la seguridad, protocolos de anestesia y lo que debes verificar antes de operarte.",
      faq_extra_title: "Preguntas Clave sobre Duración y Recuperación",
    },
    en: {
      problem_title: "Why are more women choosing to remove their breast implants?",
      problem_text: "The decision to remove breast implants goes far beyond an aesthetic choice. Many women experience a cluster of inflammatory and autoimmune symptoms grouped under Breast Implant Illness (BII) or ASIA Syndrome. Constant muscle pain, unexplained chronic fatigue, brain fog, and hair loss are warning signs that the body might be reacting negatively to a foreign object.",
      eeat_title: "Signature Surgery backed by Board Certification",
      eeat_text: "Dr. Andres Perez Nieto is a reconstructive plastic surgeon with 30 years of experience. As a certified member of the Colombian Society of Plastic Surgery (SCCP) and ISAPS, he has perfected the En Bloc technique to guarantee the total removal of the inflammatory capsule, reducing risks and supporting the body's natural detoxification. All surgeries are performed in certified high-complexity operating rooms at the Santa Ana Medical Center in Bogota.",
      videos_title: "Educational Videos by Dr. Andres Perez Nieto",
      videos_subtitle: "Learn directly from the doctor about safety protocols, anesthesia choices, and what you must verify before surgery.",
      faq_extra_title: "Key Questions on Duration and Recovery",
    }
  };

  const localFaqs = {
    es: [
      {
        question: "¿Qué síntomas alivia la explantación mamaria?",
        answer: "La explantación mamaria con capsulectomía en bloc está altamente asociada con la mejoría drástica o desaparición completa de los síntomas sistémicos del Síndrome de Asia o Enfermedad de Implantes Mamarios (BII). Pacientes reportan alivio inmediato en la fatiga crónica, dolores articulares, niebla mental, problemas dermatológicos y migrañas."
      },
      {
        question: "¿Cómo queda el pecho estéticamente tras retirar los implantes?",
        answer: "La apariencia final depende del volumen previo, calidad de piel y si se realiza mastopexia (elevación) simultánea. El Dr. Andrés Pérez Nieto realiza una reconstrucción anatómica detallada utilizando tus propios tejidos grasos y glandulares para restaurar un contorno mamario armónico, redondeado y sumamente natural, evitando el aspecto de pecho vacío."
      },
      {
        question: "¿Qué tipo de anestesia y medidas de seguridad se utilizan?",
        answer: "Para tu total tranquilidad, la cirugía se realiza bajo anestesia general controlada y monitorización anestésica continua en clínicas certificadas como el Santa Ana Medical Center. Esto nos permite un control quirúrgico absoluto y máxima seguridad para la paciente durante el procedimiento."
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
        question: "What symptoms does breast explant surgery relieve?",
        answer: "Breast explant surgery with en bloc capsulectomy is highly associated with the drastic improvement or complete resolution of systemic symptoms related to Breast Implant Illness (BII) or ASIA syndrome. Patients report immediate relief from chronic fatigue, joint pain, brain fog, skin issues, and headaches."
      },
      {
        question: "How will my breasts look aesthetically after removing the implants?",
        answer: "The final appearance depends on your initial tissue volume, skin elasticity, and whether a simultaneous mastopexy (lift) is performed. Dr. Andres Perez Nieto performs a detailed anatomical reconstruction using your own glandular and fat tissues to restore a harmonious, rounded, and natural breast contour, avoiding a hollowed look."
      },
      {
        question: "What type of anesthesia and safety protocols are used?",
        answer: "For your complete peace of mind, the surgery is performed under controlled general anesthesia with continuous monitoring by a certified anesthesiologist in authorized clinics like the Santa Ana Medical Center. This ensures absolute surgical control and maximum patient safety."
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
      answer: t.raw(`faqs.${key}.answer`)
    })),
    ...localFaqs[activeLocale]
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <Image
          src="/images/Explantacionbanner.webp"
          alt={t('title')}
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-prototype font-normal text-4xl lg:text-5xl mb-6" style={{ color: '#1d3c5d' }}>
              {t('title')} {locale === 'es' ? 'en Bogotá' : 'in Colombia'}
            </h1>
            <h2 className="font-sansation font-bold text-xl lg:text-2xl mb-6" style={{ color: '#1d3c5d' }}>
              {t('subtitle')}
            </h2>

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
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-6 font-sansation font-normal text-xl leading-relaxed text-[#1d3c5d]">
            <p>{t('intro_p1')}</p>
            <p>{t('intro_p2')}</p>
          </div>
        </div>
      </section>

      {/* Eugene Schwartz - Problem Aware Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="font-prototype text-2xl md:text-3xl lg:text-4xl mb-6" style={{ color: '#1d3c5d' }}>
              {copy.problem_title}
            </h2>
            <p className="font-sansation text-lg leading-relaxed text-[#1d3c5d] opacity-90">
              {copy.problem_text}
            </p>
          </div>
        </div>
      </section>

      {/* Cuándo considerar */}
      <section className="py-16" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="container mx-auto px-4">
          <h2 className="font-prototype font-normal text-3xl lg:text-4xl text-white text-center mb-4">
            {t('when_to_consider_title')}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>

          <p className="font-sansation font-normal text-lg text-center text-white mb-12 max-w-4xl mx-auto">
            {t('when_to_consider_intro')}
          </p>

          <div className="bg-white p-8 rounded-lg max-w-4xl mx-auto" style={{ color: '#1d3c5d' }}>
            <div className="space-y-4">
              {['reason_1', 'reason_2', 'reason_3', 'reason_4', 'reason_5'].map((key, i) => (
                <div key={i} className="flex items-start gap-4">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#1d3c5d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="font-sansation font-normal text-lg leading-relaxed">
                    {t(key)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Explantación */}
      <section className="py-16" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-4">
          <h2 className="font-prototype font-normal text-3xl lg:text-4xl text-center mb-4" style={{ color: '#1d3c5d' }}>
            {t('types_title')}
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

          <p className="font-sansation font-normal text-lg text-center mb-12 max-w-4xl mx-auto" style={{ color: '#1d3c5d' }}>
            {t('types_intro')}
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-sansation font-bold text-xl mb-6" style={{ color: '#1d3c5d' }}>
                {t('simple_explantation_title')}
              </h3>
              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('simple_explantation_desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-sansation font-bold text-xl mb-6" style={{ color: '#1d3c5d' }}>
                {t('capsulectomy_title')}
              </h3>
              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('capsulectomy_desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="font-sansation font-bold text-xl mb-6" style={{ color: '#1d3c5d' }}>
                {t('pexia_title')}
              </h3>
              <p className="font-sansation font-normal leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('pexia_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detalles de la Técnica */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #4a6fa5 0%, #1d3c5d 50%, #1d3c5d 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-white">
            <h2 className="font-prototype font-normal text-4xl mb-8">
              {t('technique_title')}
            </h2>

            <div className="space-y-6 font-sansation font-normal text-lg leading-relaxed">
              <p>{t('technique_point_1')}</p>
              <p>{t('technique_point_2')}</p>
              <p>{t('technique_point_3')}</p>
              <p>{t('technique_point_4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eugene Schwartz - E-E-A-T Acreditation Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
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
              <h2 className="font-prototype text-2xl md:text-3xl mb-4" style={{ color: '#1d3c5d' }}>
                {copy.eeat_title}
              </h2>
              <p className="font-sansation text-base leading-relaxed text-[#1d3c5d] opacity-90">
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
                  src="https://www.instagram.com/reel/DYtA-jQsXKe/embed/"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-sansation font-bold text-[#1d3c5d]">
                  {activeLocale === 'es' ? '¿Cómo verificar a tu cirujano?' : 'How to verify your surgeon?'}
                </h4>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md flex flex-col justify-between max-w-[320px] mx-auto w-full">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-black relative shadow-inner">
                <iframe
                  src="https://www.instagram.com/reel/DUYHTyLETVF/embed/"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-sansation font-bold text-[#1d3c5d]">
                  {activeLocale === 'es' ? 'Protocolo de Anestesia Seguro' : 'Safe Anesthesia Protocol'}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-12 sm:mb-16">
              <h2 className="font-prototype text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8" style={{ color: '#1d3c5d' }}>
                {t('results_title')}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { src: "https://media.drandrespereznieto.com/images/todos/mamaria/Paciente1lateralAntes.webp", label: t_testimonials('before_label'), procedure: t('title') },
                { src: "https://media.drandrespereznieto.com/images/todos/mamaria/Paciente1lateralDespues.webp", label: t_testimonials('after_label'), procedure: t('title') },
                { src: "https://media.drandrespereznieto.com/images/todos/mamaria/Paciente4lateralAntes.webp", label: t_testimonials('before_label'), procedure: t('title') },
                { src: "https://media.drandrespereznieto.com/images/todos/mamaria/Paciente4lateralDespues.webp", label: t_testimonials('after_label'), procedure: t('title') }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-[4/6] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={item.src}
                      alt={`Resultado ${Math.floor(index / 2) + 1} - ${item.label}`}
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
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
                href={`/${locale}/galeria/procedimientos-corporales/explantacion-mamaria`}
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
                {activeLocale === 'es' ? "Decidir explantarme con el Dr. Andrés Pérez Nieto fue la mejor decisión para mi salud. Desde la primera consulta me explicó detalladamente la técnica de Capsulectomía En Bloc y la reconstrucción. Hoy me siento libre de los síntomas de BII, con una recuperación maravillosa y un pecho con forma muy bonita y natural." : "Choosing Dr. Andres Perez Nieto for my explant surgery was the best decision for my health. From the first consultation, he explained the En Bloc Capsulectomy and reconstruction. Today I am free of BII symptoms, had a wonderful recovery, and my breasts look very natural and beautiful."}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1d3c5d] flex items-center justify-center text-white font-bold text-sm">
                  {activeLocale === 'es' ? "P" : "P"}
                </div>
                <div>
                  <h4 className="font-sansation font-bold text-[#1d3c5d] text-sm">{activeLocale === 'es' ? "Paciente de Chicago" : "Patient from Chicago"}</h4>
                  <p className="font-sansation text-xs text-gray-400">{activeLocale === 'es' ? "Chicago, IL" : "Chicago, IL"}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative text-[#1d3c5d]">
              <span className="text-6xl text-[#1d3c5d] opacity-10 absolute top-4 left-4 font-serif">“</span>
              <p className="font-sansation text-gray-700 text-base italic mb-6 leading-relaxed relative z-10">
                {activeLocale === 'es' ? "El doctor estuvo absolutamente pendiente después del procedimiento. La asesoría que brinda es de un profesional íntegro: tiene la capacidad de decirte qué te queda bien y qué no de manera honesta. El acompañamiento y el cuidado de cada detalle postquirúrgico es excepcional." : "The doctor was absolutely attentive after the procedure. The advice he provides is highly professional: he has the integrity to tell you what looks good on you and what doesn't. The follow-up care and attention to post-op details are exceptional."}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1d3c5d] flex items-center justify-center text-white font-bold text-sm">
                  {activeLocale === 'es' ? "P" : "A"}
                </div>
                <div>
                  <h4 className="font-sansation font-bold text-[#1d3c5d] text-sm">{activeLocale === 'es' ? "Paciente Anónima" : "Anonymous Patient"}</h4>
                  <p className="font-sansation text-xs text-gray-400">{activeLocale === 'es' ? "Paciente de Bogotá" : "Patient from Bogota"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* FAQ Section */}
      <section className="py-16" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-prototype font-normal text-3xl lg:text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {t('faq_title')}
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#1d3c5d' }}></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {mergedFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div
                  className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-sansation font-bold text-lg text-left flex-1 pr-4" style={{ color: '#1d3c5d' }}>
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                    style={{ color: '#1d3c5d' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openFaq === index && (
                  <div className="px-6 pb-6 border-t border-gray-50 pt-4">
                    <div className="font-sansation font-normal leading-relaxed text-left text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}