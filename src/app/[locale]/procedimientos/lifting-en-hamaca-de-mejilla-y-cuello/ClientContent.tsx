"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ClientContent() {
  const { locale } = useParams() as { locale: 'es' | 'en' };
  const activeLocale = locale === 'en' ? 'en' : 'es';
  const t = useTranslations('lifting_hamaca_mejilla_cuello');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number | null) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
  const benefitKeys = ['benefit_1', 'benefit_2', 'benefit_3', 'benefit_4'];
  const causes = ['sign_1', 'sign_2'];

  const LOCAL_EXPLANATION = {
    es: {
      problem_title: "¿Sientes que la flacidez del rostro y el cuello no reflejan tu energía vital?",
      problem_text: "Con el transcurso de los años, la gravedad y la pérdida de colágeno provocan el descenso de las mejillas, borrando la definición de la línea mandibular y acentuando los surcos nasogenianos. El cuello también sufre flacidez, formando bandas y papada. Aunque existen hilos y rellenos no quirúrgicos, el estiramiento superficial de la piel no resuelve el problema de fondo: la caída de las estructuras musculares profundas.",
      eeat_title: "Cirugía de Autor con Respaldo de Especialista",
      eeat_text: "El Dr. Andrés Pérez Nieto es un cirujano plástico reconstructivo con 30 años de experiencia, formado en la Universidad del Rosario y la Universidad Nacional, con entrenamientos en The University of Illinois y Manhattan Eye and Ear Hospital en Nueva York. Miembro activo de la SCCP y de la ISAPS, realiza cirugías de autor personalizadas bajo estrictas medidas de seguridad y en las mejores clínicas de Bogotá, tales como el Santa Ana Medical Center.",
      videos_title: "Instagram Reels y Casos Clínicos",
      videos_subtitle: "Aprende de primera mano con explicaciones e ilustraciones en video realizadas por el Dr. Andrés Pérez.",
    },
    en: {
      problem_title: "Do sagging facial and neck tissues hide your true vitality?",
      problem_text: "Over the years, gravity and the depletion of collagen lead to drooping cheeks, erasing the definition of your jawline and deepening the nasolabial folds. The neck also loses its firmness, forming vertical bands and a saggy wattle. While non-surgical threads and fillers exist, stretching the skin superficially doesn't solve the core issue: the descent of deep muscle structures.",
      eeat_title: "Signature Surgery backed by Board Certification",
      eeat_text: "Dr. Andres Perez Nieto is a reconstructive plastic surgeon with 30 years of experience, educated at Universidad del Rosario and Universidad Nacional, with advanced training at The University of Illinois and Manhattan Eye and Ear Hospital in New York. An active member of SCCP and ISAPS, he performs personalized signature surgeries under strict safety standards in Bogota's premier clinics, such as the Santa Ana Medical Center.",
      videos_title: "Instagram Reels and Clinical Cases",
      videos_subtitle: "Learn first-hand with video explanations and surgical highlights by Dr. Andres Perez.",
    }
  };

  const localFaqs = {
    es: [
      {
        question: "¿Qué es el Lifting Facial Deep Plane?",
        answer: "El Deep Plane Facelift (Lifting en Plano Profundo) es la técnica más avanzada y anatómica de rejuvenecimiento facial. A diferencia de las técnicas tradicionales que solo estiran la piel de forma superficial (lo que a menudo provoca un aspecto artificial de cara estirada o tensada), el Deep Plane trabaja por debajo de la capa muscular (SMAS). Esto permite liberar y reposicionar los músculos y tejidos profundos a la posición exacta que tenían en su juventud. Los resultados son sumamente naturales y estables a largo plazo."
      },
      {
        question: "¿En qué consiste la técnica de la Hamaca perfeccionada por el Dr. Andrés Pérez Nieto?",
        answer: "La técnica de la Hamaca, desarrollada y perfeccionada por el Dr. Andrés Pérez Nieto, realiza una elevación vertical de los tejidos profundos del rostro (en sentido opuesto a la gravedad). A diferencia del estiramiento horizontal tradicional hacia las orejas (que ensancha la boca y aplana el rostro), la elevación vertical distribuye la tensión sobre la estructura muscular interna (efecto hamaca). Esto garantiza que el paciente conserve su identidad, sus rasgos naturales y su óvalo facial sin ningún aspecto operado."
      },
      {
        question: "¿Cuánto tiempo duran los resultados del Lifting Facial?",
        answer: "Al reposicionar las estructuras musculares profundas y no solo la piel, los resultados de un lifting facial Deep Plane suelen perdurar entre 10 y 15 años. Es importante destacar que la cirugía retrasa de manera definitiva el reloj biológico, pero el proceso natural de envejecimiento continuará a partir de este nuevo punto rejuvenecido."
      },
      {
        question: "¿Dónde quedan las cicatrices y son muy notorias?",
        answer: "Las incisiones se diseñan de manera estratégica para quedar completamente ocultas en los pliegues naturales del rostro: por delante y por detrás de la oreja, y dentro de la línea del cuero cabelludo. Con la meticulosa técnica de sutura plástica del Dr. Pérez Nieto y un adecuado cuidado postoperatorio, las cicatrices se vuelven prácticamente invisibles con el tiempo."
      },
      {
        question: "¿Cómo es el postoperatorio y cuánto tarda la recuperación social?",
        answer: "La recuperación social inicial toma entre 10 y 14 días. Durante la primera semana es normal presentar inflamación y algunos hematomas leves, los cuales disminuyen rápidamente gracias a que la técnica Deep Plane genera menos trauma y sangrado que las cirugías superficiales antiguas. El dolor es mínimo y se controla fácilmente con analgésicos comunes."
      },
      {
        question: "¿Es muy doloroso el lifting facial?",
        answer: "No. La gran mayoría de los pacientes informan que el lifting facial no es doloroso. En cambio, describen una sensación de tensión, tirantez o adormecimiento temporal en las mejillas y el cuello durante las primeras semanas. Cualquier molestia leve es manejada de forma efectiva con la medicación recetada."
      },
      {
        question: "¿Cuánto cuesta un estiramiento facial en Bogotá?",
        answer: "El costo de un lifting facial es personalizado y depende de la evaluación anatómica detallada de cada paciente. Varía según si se requiere un lifting de tercio medio, cuello completo, o si se combina con otros procedimientos (como blefaroplastia o transferencia de grasa). Te invitamos a agendar una consulta de valoración para proporcionarte un presupuesto transparente e integral."
      },
      {
        question: "¿Se puede combinar el lifting con otras cirugías faciales?",
        answer: "Sí, es lo más recomendado. Combinar el lifting con una cirugía de párpados (blefaroplastia) o una transferencia de grasa facial (lipofilling con células madre) permite lograr un rejuvenecimiento completo y equilibrado de todo el rostro en una sola intervención y bajo el mismo período de recuperación."
      },
      {
        question: "¿Cuáles son los riesgos asociados al lifting facial?",
        answer: "Como en cualquier cirugía estética mayor, existen riesgos como hematomas, seromas, infección, asimetría o pérdida temporal de la sensibilidad en la piel. Sin embargo, al ser operado por un cirujano plástico certificado con 30 años de experiencia en clínicas autorizadas de alta complejidad, el índice de complicaciones se minimiza drásicamente."
      },
      {
        question: "¿A qué edad es recomendable hacerse un lifting facial?",
        answer: "No hay una edad específica, sino un estado de los tejidos. Generalmente, los pacientes buscan este procedimiento entre los 45 y los 65 años, cuando la flacidez en las mejillas, el contorno mandibular y el cuello es evidente y no puede ser resuelta mediante tratamientos no invasivos."
      },
      {
        question: "¿Cuándo puedo volver a hacer ejercicio físico?",
        answer: "Se recomienda realizar caminatas suaves desde los primeros días para favorecer la circulación. Sin embargo, las actividades físicas intensas, el ejercicio de impacto, el levantamiento de pesas o los deportes que generen sudoración deben evitarse por un período de 4 a 6 semanas para evitar el aumento de la presión arterial y asegurar una cicatrización óptima."
      },
      {
        question: "¿Si ya me he realizado rellenos o hilos tensores, me puedo hacer un lifting?",
        answer: "Sí, por supuesto. De hecho, la mayoría de los pacientes que deciden realizarse un lifting quirúrgico lo hacen buscando un resultado duradero tras haber usado hilos o ácido hialurónico por años. En la consulta de valoración se evaluará tu historial de tratamientos para planificar la cirugía de manera segura."
      },
      {
        question: "¿El lifting facial funciona también en hombres?",
        answer: "Totalmente. El lifting facial muscular es un procedimiento altamente demandado. La técnica quirúrgica se adapta meticulosamente para respetar la línea de la patilla, evitar la feminización de los rasgos y preservar la masculinidad y definición del contorno mandibular del paciente."
      },
      {
        question: "¿Qué tipo de anestesia se utiliza?",
        answer: "El lifting facial se realiza bajo anestesia general o sedación profunda combinada con anestesia local. Esto garantiza que el paciente se encuentre en un estado de absoluta tranquilidad y monitoreo continuo por parte del anestesiólogo durante todo el procedimiento."
      },
      {
        question: "¿Es necesario usar protector solar después de la cirugía?",
        answer: "Sí, es vital. Debes evitar la exposición directa al sol durante los primeros 3 meses. El sol puede causar inflamación persistente y oscurecer las cicatrices en proceso de maduración. El uso de protector solar de amplio espectro será tu mejor aliado postquirúrgico."
      },
      {
        question: "El Dr. Andrés Pérez Nieto interviene quirúrgicamente en las mejores clínicas de Bogotá, avaladas y certificadas por los entes de salud, tales como el Santa Ana Medical Center. Esto asegura que cuentes con quirófanos de última tecnología y atención de emergencia integral."
      }
    ],
    en: [
      {
        question: "What is a Deep Plane Facelift?",
        answer: "The Deep Plane Facelift is the most advanced and anatomical technique for facial rejuvenation. Unlike traditional techniques that merely stretch the skin superficially (which often results in an unnatural, windswept, or tight appearance), the Deep Plane approach operates beneath the muscle layer (SMAS). This allows the surgeon to release and reposition the deep muscles and tissues back to the exact positions they occupied in your youth. The results are highly natural and long-lasting."
      },
      {
        question: "What is the Hammock Lift technique perfected by Dr. Andres Perez Nieto?",
        answer: "The Hammock Lift technique, developed and perfected by Dr. Andres Perez Nieto, performs a vertical elevation of the deep facial tissues (opposing gravity). Unlike the traditional horizontal pull toward the ears (which widens the mouth and flattens the face), the vertical lift distributes tension across the internal muscle structure (hammock effect). This guarantees that patients retain their identity, natural features, and facial contours without looking operated on."
      },
      {
        question: "How long do the results of a Facelift last?",
        answer: "By repositioning the deep muscular structures rather than just the skin, the results of a Deep Plane facelift typically last between 10 and 15 years. It is important to note that the surgery permanently sets back the biological clock, though the natural aging process will continue from this newly rejuvenated baseline."
      },
      {
        question: "Where are the scars located and are they very noticeable?",
        answer: "Incisions are strategically designed to be hidden within the natural creases of the face: in front of and behind the ear, and inside the hairline. With Dr. Perez Nieto's meticulous plastic suture technique and proper post-operative care, the scars become virtually invisible over time."
      },
      {
        question: "What is the recovery process and social downtime like?",
        answer: "Initial social downtime takes about 10 to 14 days. During the first week, mild swelling and some bruising are normal. These resolve quickly because the Deep Plane technique causes less trauma and bleeding than older superficial surgeries. Pain is minimal and easily managed with standard pain relievers."
      },
      {
        question: "Is a facelift very painful?",
        answer: "No. The vast majority of patients report that a facelift is not painful. Instead, they describe a feeling of tension, tightness, or temporary numbness in the cheeks and neck during the first few weeks. Any mild discomfort is effectively managed with prescribed medication."
      },
      {
        question: "How much does a facelift cost in Bogota?",
        answer: "The cost of a facelift is personalized and depends on a detailed anatomical evaluation of each patient. It varies based on whether a mid-face lift, full neck lift, or a combination with other procedures (such as blepharoplasty or fat transfer) is required. We invite you to schedule a valuation appointment for a transparent and comprehensive quote."
      },
      {
        question: "Can a facelift be combined with other facial surgeries?",
        answer: "Yes, this is highly recommended. Combining a facelift with eyelid surgery (blepharoplasty) or a facial fat transfer (stem cell lipofilling) achieves a comprehensive and balanced rejuvenation of the entire face under a single recovery period."
      },
      {
        question: "What are the risks associated with a facelift?",
        answer: "As with any major cosmetic surgery, there are risks including hematoma, seroma, infection, asymmetry, or temporary loss of skin sensation. However, being operated on by a certified plastic surgeon with 30 years of experience in authorized, high-complexity clinics minimizes these risks drastically."
      },
      {
        question: "At what age is a facelift recommended?",
        answer: "There is no specific age, but rather a state of the facial tissues. Generally, patients seek this procedure between 45 and 65, when sagging in the cheeks, jawline, and neck is prominent and cannot be resolved with non-surgical treatments."
      },
      {
        question: "When can I resume physical exercise?",
        answer: "Gentle walks are encouraged from the first few days to aid circulation. However, intense physical activities, high-impact exercise, weightlifting, or sports that cause heavy sweating should be avoided for 4 to 6 weeks to prevent blood pressure spikes and ensure optimal healing."
      },
      {
        question: "Can I get a facelift if I've already had fillers or thread lifts?",
        answer: "Yes, absolutely. In fact, most patients who decide to undergo a surgical facelift do so seeking a long-lasting result after having used threads or hyaluronic acid for years. Your treatment history will be evaluated during your consultation to plan a safe surgery."
      },
      {
        question: "Does a facelift work for men as well?",
        answer: "Totally. Male facelifts are in high demand. The surgical technique is meticulously adapted to respect the sideburn line, avoid feminizing features, and preserve the masculinity and definition of the patient's jawline."
      },
      {
        question: "What type of anesthesia is used?",
        answer: "A facelift is performed under general anesthesia or deep sedation combined with local anesthesia. This ensures that the patient is completely comfortable and continuously monitored by the anesthesiologist throughout the procedure."
      },
      {
        question: "Is it necessary to use sunscreen after surgery?",
        answer: "Yes, it is vital. You must avoid direct sun exposure for the first 3 months. The sun can cause persistent swelling and darken healing scars. Using a broad-spectrum sunscreen will be your best post-surgical ally."
      },
      {
        question: "Which clinics does Dr. Andres Perez Nieto operate in?",
        answer: "Dr. Andres Perez Nieto performs all surgeries in the finest certified clinics in Bogota that meet all standards and technology required by the Ministry of Health, such as the Santa Ana Medical Center. This ensures the highest level of hospital safety and emergency care."
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
  ]; // Using sign_1 and sign_2 keys for causes section based on JSON structure

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
                {t('title')} {locale === 'es' ? 'en Bogotá' : 'in Colombia'}
              </h1>
              <div className="w-72 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

              <h2 className="font-sansation font-bold text-2xl lg:text-3xl mb-8" style={{ color: '#1d3c5d' }}>
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
        </div>
      </section>

      {/* Eugene Schwartz - Problem Aware Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-[#1d3c5d]">
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
        <div className="max-w-7xl mx-auto px-4 text-[#1d3c5d]">
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
                <video playsInline
                  className="w-full h-full object-cover"
                  poster="https://media.drandrespereznieto.com/images/videos/hamaca cuello/hamaca.webp"
                  controls
                  preload="metadata"
                >
                  <source src="https://media.drandrespereznieto.com/images/videos/hamaca cuello/Hammock Effect.mp4" type="video/mp4" />
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
                    <video playsInline
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
                    <video playsInline
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
              <video playsInline
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
                  <video playsInline
                    className="w-full h-full object-cover"
                    poster="https://media.drandrespereznieto.com/images/lifting-hamaca/vertical.webp"
                    controls
                    preload="metadata"
                  >
                    <source src="https://media.drandrespereznieto.com/images/videos/hamaca cuello/4- VIDEO INCISIONES IMPERCEPTIBLES.mp4" type="video/mp4" />
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
              <video playsInline
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
                <source src="https://media.drandrespereznieto.com/images/videos/hamaca cuello/TESTIMONIAL María Helena.mp4" type="video/mp4" />
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
                  src="https://www.instagram.com/reel/DaTuQ0RBs34/embed/"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-sansation font-bold text-[#1d3c5d]">
                  {activeLocale === 'es' ? 'Lifting Facial Natural' : 'Natural Facelift'}
                </h4>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md flex flex-col justify-between max-w-[320px] mx-auto w-full">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-black relative shadow-inner">
                <iframe
                  src="https://www.instagram.com/reel/DaOkmfkhKtg/embed/"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-sansation font-bold text-[#1d3c5d]">
                  {activeLocale === 'es' ? 'Lifting con Células Madre' : 'Stem Cell Facelift'}
                </h4>
              </div>
            </div>
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
            {mergedFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-sansation font-bold pr-4" style={{ color: '#1d3c5d' }}>{faq.question}</span>
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
                  <div className="px-6 pb-4 border-t border-gray-50 pt-4">
                    <div className="font-sansation font-normal leading-relaxed text-gray-700 text-base">
                      {faq.answer}
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
