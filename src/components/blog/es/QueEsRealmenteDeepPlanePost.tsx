'use client';

import React from 'react';
import Link from 'next/link';

export default function QueEsRealmenteDeepPlanePost() {
  return (
    <>
      {/* ── FAQ Schema JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Qué es un Deep Plane Facelift?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Es una técnica quirúrgica de rejuvenecimiento facial que trabaja por debajo del músculo SMAS y libera los ligamentos de retención para elevar toda la estructura facial en bloque, sin tensar la piel. Los resultados son naturales y pueden durar entre 10 y 15 años."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuál es la diferencia entre el Deep Plane y el lifting SMAS clásico?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "El SMAS clásico tensa la capa muscular superficialmente sin liberar los ligamentos profundos. El Deep Plane entra por debajo del SMAS y libera los ligamentos cigomáticos y masetéricos, permitiendo elevar los tejidos sin ninguna tracción en la piel."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Por qué no se estira la piel en el Deep Plane?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Porque al reposicionar la capa muscular profunda (SMAS) de forma vertical, la piel acompaña el movimiento sin tensión horizontal. Esto elimina el aspecto jalado o de máscara que caracteriza a las técnicas superficiales."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuánto duran los resultados de un Deep Plane Facelift?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Al trabajar sobre estructuras musculares y ligamentosas en lugar de la piel, los resultados son significativamente más estables. La mayoría de los pacientes mantiene resultados visibles entre 10 y 15 años, dependiendo de su genética y estilo de vida."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Quién es candidato ideal para un Deep Plane Facelift?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Personas con flacidez moderada a severa en mejillas, pérdida de definición del óvalo facial, papada o bandas del cuello. También quienes buscan resultados naturales duraderos y no desean retocarse frecuentemente con rellenos o procedimientos superficiales."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuánto dura la recuperación del Deep Plane Facelift?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "La fase aguda de inflamación dura de 10 a 14 días. La mayoría de los pacientes retoma sus actividades sociales y de oficina hacia el día 14. El resultado definitivo se aprecia entre los 3 y 6 meses."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuánto cuesta un Deep Plane Facelift en Bogotá, Colombia?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "El costo de un Deep Plane Facelift en Bogotá oscila entre USD 5,500 y USD 8,500, incluyendo honorarios quirúrgicos, anestesia y controles postoperatorios. Esto representa un ahorro del 60–70% frente a los precios de Estados Unidos o Europa, con el mismo nivel de calidad y seguridad."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Qué ligamentos se liberan en un Deep Plane Facelift?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Se liberan los ligamentos cigomático (en el área del pómulo) y masetérico (en la mejilla), que son los principales anclajes de colágeno que, al ceder con la edad, producen el descenso de los tejidos y los surcos profundos."
                    }
                  }
                ]
              },
              {
                "@type": "VideoObject",
                "name": "Deep Plane Facelift explicado por el Dr. Andrés Pérez Nieto",
                "description": "El Dr. Andrés Pérez Nieto explica el abordaje en plano profundo, la liberación de ligamentos y el reposicionamiento muscular en el Santa Ana Medical Center, Bogotá.",
                "thumbnailUrl": "https://www.drandrespereznieto.com/images/todos/toma.webp",
                "contentUrl": "https://www.drandrespereznieto.com/images/videos/Miniliftingdeepplane.mp4",
                "uploadDate": "2026-07-06",
                "author": {
                  "@type": "Person",
                  "name": "Dr. Andrés Pérez Nieto",
                  "jobTitle": "Cirujano Plástico Estético y Reconstructivo",
                  "worksFor": {
                    "@type": "MedicalOrganization",
                    "name": "Santa Ana Medical Center",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Bogotá",
                      "addressCountry": "CO"
                    }
                  }
                }
              }
            ]
          })
        }}
      />

      {/* ── INTRO ── */}
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Buenos días. Como cada mañana en el Santa Ana Medical Center de Bogotá, empezamos el día con un tintico y una oración de gratitud antes de entrar al quirófano. Hoy quiero dedicar este espacio a una pregunta que me hacen con frecuencia, tanto pacientes de Colombia como de Estados Unidos, México y España: <strong>¿qué es realmente un Deep Plane Facelift y en qué se diferencia de un lifting convencional?</strong>
        </p>

        <p className="mb-6">
          El término "Deep Plane" se usa hoy con mucha ligereza en redes sociales y clínicas de todo el mundo, pero detrás de él hay una técnica de alta precisión anatómica que <strong>redefine por completo la longevidad y la naturalidad del rejuvenecimiento facial</strong>. En este artículo le voy a explicar todo: la anatomía, las diferencias con otras técnicas, quién es candidato, cómo es la recuperación y por qué en Bogotá, Colombia, usted puede acceder a este procedimiento con la misma calidad de centros de referencia mundiales.
        </p>

        <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
          &quot;No estiro rostros. Restauro el sistema de soporte facial que el tiempo fue debilitando.&quot; — Dr. Andrés Pérez Nieto
        </blockquote>
      </div>

      {/* ── QUÉ ES ── */}
      <h2 id="que-es" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué es exactamente un Deep Plane Facelift o lifting de plano profundo?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-4">
        El <strong>Deep Plane Facelift</strong> es la técnica quirúrgica que opera en el espacio anatómico situado por debajo del <strong>SMAS (Sistema Músculo-Aponeurótico Superficial)</strong> y los músculos de la mímica facial. Esta disección permite movilizar en un solo bloque la grasa profunda, los músculos y los tejidos caídos sin ejercer ninguna tensión sobre la piel.
      </p>
      <p className="mb-6">
        La técnica fue descrita originalmente por el Dr. Sam Hamra en 1990 en su publicación clásica en <em>Plastic and Reconstructive Surgery</em> (DOI: 10.1097/00006534-199007000-00009), y desde entonces ha evolucionado hasta convertirse en el estándar de oro del rejuvenecimiento facial estructural. En mi práctica en el Santa Ana Medical Center, he desarrollado el <strong>Método Hamaca®</strong>, una variación que incorpora vectores de tensión cruzados en el músculo platisma para lograr un resultado más estable y natural en el cuello y la mandíbula.
      </p>
      <p className="mb-6">
        La disección sub-SMAS nos permite acceder a los <strong>ligamentos de retención faciales</strong>, específicamente el ligamento cigomático y el masetérico, que son los pilares de colágeno que, al ceder con los años, producen el descenso de los tejidos y la aparición de surcos nasogenianos, jowls mandibulares y papada. Al liberarlos quirúrgicamente, los tejidos se pueden reposicionar verticalmente de forma libre y natural.
      </p>

      {/* ── VIDEO ── */}
      <div className="my-8 max-w-xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-blue-950">
          <video
            controls
            playsInline
            className="w-full h-full object-cover"
            poster="/images/todos/toma.webp"
          >
            <source src="/images/videos/Miniliftingdeepplane.mp4" type="video/mp4" />
            <source src="/images/videos/Miniliftingdeepplane.webm" type="video/webm" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          El Dr. Andrés Pérez Nieto explica el abordaje en plano profundo y la liberación de ligamentos en el Santa Ana Medical Center, Bogotá, Colombia.
        </p>
      </div>

      {/* ── DIFERENCIAS ── */}
      <h2 id="diferencias" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Cuáles son las diferencias entre el Deep Plane, el SMAS clásico, el minilifting y los hilos tensores?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        No todas las técnicas de lifting son equivalentes. La diferencia fundamental está en el plano anatómico donde se actúa y en si se liberan o no los ligamentos de retención. Esta distinción determina la naturalidad, la durabilidad y la seguridad del resultado final.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-3 text-left">Técnica</th>
              <th className="p-3 text-left">Plano de trabajo</th>
              <th className="p-3 text-left">Ligamentos</th>
              <th className="p-3 text-left">Duración</th>
              <th className="p-3 text-left">Naturalidad</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-50 border-b border-blue-100">
              <td className="p-3 font-bold text-blue-900">Deep Plane / Método Hamaca®</td>
              <td className="p-3">Sub-SMAS profundo</td>
              <td className="p-3">Liberados totalmente</td>
              <td className="p-3">10–15 años</td>
              <td className="p-3">⭐⭐⭐⭐⭐</td>
            </tr>
            <tr className="bg-white border-b border-blue-100">
              <td className="p-3 font-bold">SMAS Plicatura clásica</td>
              <td className="p-3">Sobre el SMAS</td>
              <td className="p-3">No liberados</td>
              <td className="p-3">5–8 años</td>
              <td className="p-3">⭐⭐⭐</td>
            </tr>
            <tr className="bg-blue-50 border-b border-blue-100">
              <td className="p-3 font-bold">Minilifting superficial</td>
              <td className="p-3">Subcutáneo / piel</td>
              <td className="p-3">No liberados</td>
              <td className="p-3">2–4 años</td>
              <td className="p-3">⭐⭐</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 font-bold">Hilos tensores</td>
              <td className="p-3">Subcutáneo</td>
              <td className="p-3">No</td>
              <td className="p-3">6–18 meses</td>
              <td className="p-3">⭐⭐</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-6">
        En las técnicas superficiales, el cirujano aplica tracción directamente sobre la piel hacia los lados. Esto genera tensión constante que deforma la sonrisa, estira los lóbulos de las orejas y produce el estigma de cara &quot;operada&quot;. En el Deep Plane, al disecar y liberar los ligamentos de retención —descritos en detalle en la literatura de StatPearls (Raggio & Patel, 2023)— la musculatura se desliza verticalmente sin resistencia, y la piel simplemente descansa de forma relajada y natural sobre su nuevo soporte.
      </p>

      {/* ── CANDIDATOS ── */}
      <h2 id="candidatos" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Quién es el candidato ideal para un Deep Plane Facelift?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-4">
        Esta técnica es ideal para pacientes con signos de envejecimiento <strong>moderados a severos</strong> en las estructuras profundas del rostro. No se trata de una decisión por edad cronológica, sino por el grado de descenso de los tejidos profundos.
      </p>
      <p className="mb-4">Usted puede ser candidato si presenta:</p>
      <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">
        <li>Descolgamiento de las mejillas y pérdida de volumen en los pómulos</li>
        <li>Surcos nasogenianos marcados que no responden a rellenos temporales</li>
        <li>Pérdida de la definición del ángulo mandibular (<em>jowls</em>)</li>
        <li>Bandas verticales en el cuello (platisma) y papada submental</li>
        <li>Mirada de cansancio crónico o expresión de tristeza</li>
        <li>Pacientes que buscan resultados duraderos y naturales, sin retocarse frecuentemente</li>
      </ul>
      <p className="mb-6">
        No es necesariamente la mejor opción para flacidez leve o para personas muy jóvenes. En esos casos, puede ser más apropiado un lifting preventivo menos invasivo. La valoración personalizada en consulta es siempre el primer paso.
      </p>

      <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
        &quot;La cirugía más bella es aquella que nadie identifica como cirugía. El paciente debe verse descansado, no diferente.&quot; — Dr. Andrés Pérez Nieto
      </blockquote>

      {/* ── RECUPERACIÓN ── */}
      <h2 id="recuperacion" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Cómo es la recuperación de un Deep Plane Facelift paso a paso?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-4">
        La recuperación del Deep Plane es más completa que la de técnicas superficiales porque se trabaja en un plano más profundo, pero el beneficio en durabilidad y naturalidad compensa ampliamente este período de restauración.
      </p>

      <div className="bg-blue-50 rounded-2xl p-6 mb-6 space-y-4">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">Días 1–3</div>
          <div>
            <p className="font-semibold text-blue-900">Pico de inflamación y reposo activo</p>
            <p className="text-sm text-gray-600">Inflamación máxima, morados periorbitales, drenajes si aplica. Cabeza elevada 30°, dieta blanda, hielo suave.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">Días 4–7</div>
          <div>
            <p className="font-semibold text-blue-900">Inicio de resolución</p>
            <p className="text-sm text-gray-600">La inflamación comienza a bajar. Retiro de drenajes. Primeras curaciones. El paciente se levanta y camina en su residencia.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">Día 10–14</div>
          <div>
            <p className="font-semibold text-blue-900">Retiro de puntos y vida social</p>
            <p className="text-sm text-gray-600">Se retiran las suturas. La mayoría de los pacientes puede retomar actividades de oficina y salir socialmente con maquillaje.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">Mes 3–6</div>
          <div>
            <p className="font-semibold text-blue-900">Resultado definitivo</p>
            <p className="text-sm text-gray-600">La inflamación profunda se resuelve completamente. Las cicatrices maduran y el resultado final es visible en toda su expresión natural.</p>
          </div>
        </div>
      </div>

      {/* ── RESULTADOS ── */}
      <h2 id="resultados" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Por qué el Deep Plane ofrece resultados que duran 10 a 15 años?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-4">
        Al reposicionar las estructuras musculares profundas y liberar los ligamentos retenedores, el soporte estructural del rostro se restablece de forma sólida y completamente fisiológica. Esto permite prolongar la estabilidad de los resultados estéticos por un período estimado de 10 a 15 años.
      </p>
      <p className="mb-6">
        La piel tiene memoria elástica y cede rápidamente si se la somete a tensión —lo que explica por qué los miniliftings superficiales pierden su efecto en pocos meses—. En cambio, los tejidos musculares suspendidos y fijados en el plano profundo se adhieren firmemente a su nueva posición durante el proceso de cicatrización interna. Un estudio de Jacono et al. (Aesthetic Surgery Journal, 2020, PMID: 32866975) demostró que los pacientes de Deep Plane presentan mayor satisfacción y durabilidad de resultados a los 5 años frente a los de técnica SMAS convencional.
      </p>

      {/* ── BOGOTÁ ── */}
      <h2 id="bogota" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Por qué elegir el Deep Plane Facelift en Bogotá, Colombia?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-4">
        Colombia se ha convertido en uno de los destinos de turismo médico más importantes de América Latina para procedimientos faciales complejos. El <strong>Santa Ana Medical Center en Bogotá</strong> cumple con los estándares de habilitación del Ministerio de Salud de Colombia y opera con protocolos de seguridad equivalentes a los de centros de referencia en Estados Unidos o Europa.
      </p>
      <p className="mb-6">
        El costo de un Deep Plane Facelift en Bogotá oscila entre <strong>USD 5,500 y USD 8,500</strong> (honorarios, anestesia y controles incluidos), lo que representa un ahorro del 60–70% frente a los precios en Estados Unidos (USD 12,000–30,000) o Europa, sin comprometer la calidad quirúrgica. Muchos de mis pacientes vienen de Miami, Nueva York, Ciudad de México, Medellín y Cali precisamente por esta combinación de experiencia técnica y accesibilidad económica.
      </p>

      <div className="bg-blue-900 text-white rounded-2xl p-6 mb-8 text-center">
        <p className="font-prototype text-xl mb-3">¿Es usted candidato para un Deep Plane Facelift?</p>
        <p className="text-blue-200 text-sm mb-4">Agenda una valoración personalizada en el Santa Ana Medical Center, Bogotá.</p>
        <Link href="/es/procedimientos/lifting-facial-hamaca" className="inline-block bg-white text-blue-900 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
          Ver el Procedimiento Lifting Hamaca
        </Link>
      </div>

      {/* ── FAQ ── */}
      <h2 id="faq" className="font-prototype text-2xl text-blue-900 mt-10 mb-6 scroll-mt-32">
        Preguntas frecuentes sobre el Deep Plane Facelift
      </h2>

      <div className="space-y-5 mb-10">
        {[
          {
            q: '¿Qué es un Deep Plane Facelift?',
            a: 'Es una técnica quirúrgica de rejuvenecimiento facial que trabaja por debajo del músculo SMAS y libera los ligamentos de retención para elevar toda la estructura facial en bloque, sin tensar la piel. Los resultados son naturales y pueden durar entre 10 y 15 años.'
          },
          {
            q: '¿Cuál es la diferencia entre el Deep Plane y el lifting SMAS clásico?',
            a: 'El SMAS clásico tensa la capa muscular superficialmente sin liberar los ligamentos profundos. El Deep Plane entra por debajo del SMAS y libera los ligamentos cigomáticos y masetéricos, permitiendo elevar los tejidos sin ninguna tracción en la piel, con resultados más naturales y duraderos.'
          },
          {
            q: '¿Por qué no se estira la piel en el Deep Plane?',
            a: 'Porque al reposicionar la capa muscular profunda (SMAS) de forma vertical, la piel simplemente acompaña el movimiento sin tensión horizontal. Esto elimina el aspecto jalado o de máscara que caracteriza a los liftings superficiales.'
          },
          {
            q: '¿Cuánto duran los resultados?',
            a: 'Al trabajar sobre estructuras musculares y ligamentosas, los resultados son significativamente más estables. La mayoría de los pacientes mantiene resultados visibles entre 10 y 15 años, dependiendo de genética y estilo de vida.'
          },
          {
            q: '¿Quién es candidato ideal?',
            a: 'Personas con flacidez moderada a severa en mejillas, pérdida de definición del óvalo facial, papada o bandas del cuello. También quienes buscan resultados naturales duraderos y no desean retocarse frecuentemente con rellenos o procedimientos superficiales.'
          },
          {
            q: '¿Cuánto dura la recuperación?',
            a: 'La fase aguda de inflamación dura de 10 a 14 días. La mayoría de los pacientes retoma sus actividades sociales y de oficina hacia el día 14. El resultado definitivo y la desinflamación completa se aprecian entre los 3 y 6 meses.'
          },
          {
            q: '¿Cuánto cuesta en Bogotá, Colombia?',
            a: 'El costo oscila entre USD 5,500 y USD 8,500, incluyendo honorarios quirúrgicos, anestesia y controles postoperatorios. Esto representa un ahorro del 60–70% frente a los precios de Estados Unidos o Europa, con el mismo nivel de calidad y seguridad.'
          },
          {
            q: '¿Se puede combinar con blefaroplastia o lipofilling?',
            a: 'Sí, de hecho es lo ideal para un rejuvenecimiento global. En la misma cirugía combinamos frecuentemente el Deep Plane con blefaroplastia (párpados), lipofilling facial (restauración de volumen con grasa propia) y elevación de cejas, garantizando armonía y naturalidad en todo el tercio facial.'
          }
        ].map(({ q, a }, i) => (
          <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <p className="font-bold text-blue-900 mb-2">{q}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      {/* ── AUTHOR BIO (E-E-A-T) ── */}
      <div className="bg-blue-950 text-white rounded-2xl p-6 mb-8 flex gap-5 items-start">
        <img
          src="/images/todos/toma.webp"
          alt="Dr. Andrés Pérez Nieto, Cirujano Plástico en Bogotá"
          className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-blue-400"
        />
        <div>
          <p className="font-bold text-lg">Dr. Andrés Pérez Nieto</p>
          <p className="text-blue-300 text-sm mb-2">Cirujano Plástico, Estético y Reconstructivo · Santa Ana Medical Center, Bogotá, Colombia</p>
          <p className="text-blue-200 text-xs leading-relaxed">
            Especialista en técnicas de plano profundo (Deep Plane) y creador del <strong>Método Hamaca®</strong>. Certificado por la Sociedad Colombiana de Cirugía Plástica (SCCP). Con más de 15 años de experiencia en rejuvenecimiento facial estructural, atiende pacientes nacionales e internacionales en el Santa Ana Medical Center de Bogotá.
          </p>
        </div>
      </div>

      {/* ── LINKS INTERNOS ── */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
        <p className="font-prototype text-blue-900 mb-3">Artículos relacionados en la Academia Dr. Face</p>
        <ul className="space-y-2 text-sm">
          <li>→ <Link href="/es/blog/deep-plane-vs-smas-vs-mini-lifting" className="text-blue-600 hover:underline">Deep Plane vs. SMAS vs. Minilifting: ¿cuál es mejor para ti?</Link></li>
          <li>→ <Link href="/es/blog/ligamentos-faciales-grandes-olvidados-envejecimiento" className="text-blue-600 hover:underline">Los ligamentos faciales: grandes olvidados del envejecimiento</Link></li>
          <li>→ <Link href="/es/blog/sistema-soporte-facial-metodo-hamaca" className="text-blue-600 hover:underline">El sistema de soporte facial y el Método Hamaca®</Link></li>
          <li>→ <Link href="/es/procedimientos/lifting-facial-hamaca" className="text-blue-600 hover:underline">Ver el procedimiento completo: Lifting Hamaca Deep Plane®</Link></li>
        </ul>
      </div>

      {/* ── REFERENCES ── */}
      <hr className="my-10 border-gray-200" />
      <div className="bg-gray-100 p-8 rounded-3xl font-sansation">
        <h3 className="font-prototype text-lg text-blue-950 mb-4">Referencias Científicas (Cibergrafía)</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>
            <strong>[1] Hamra ST.</strong> <em>The deep-plane rhytidectomy.</em> Plastic and Reconstructive Surgery. 1990 Jul;86(1):53-61. DOI: <a href="https://doi.org/10.1097/00006534-199007000-00009" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">10.1097/00006534-199007000-00009</a>. PMID: 2356277.
          </li>
          <li>
            <strong>[2] Raggio BS, Patel BC.</strong> <em>Deep Plane Facelift.</em> StatPearls Publishing. 2023 Jan. PMID: 31536277. Available at: <a href="https://www.ncbi.nlm.nih.gov/books/NBK545277/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">NCBI Bookshelf</a>.
          </li>
          <li>
            <strong>[3] Jacono A, et al.</strong> <em>A prospective, randomized, double-blinded comparison of superficial musculoaponeurotic system plication vs deep plane facelift.</em> Aesthetic Surgery Journal. 2020. PMID: 32866975.
          </li>
          <li>
            <strong>[4] Mendelson BC, Wong CH.</strong> <em>Changes in the facial skeleton with aging: implications and clinical applications in facial rejuvenation.</em> Aesthetic Plastic Surgery. 2012;36(4):753-760. DOI: <a href="https://doi.org/10.1007/s00266-012-9904-3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">10.1007/s00266-012-9904-3</a>.
          </li>
        </ul>
      </div>
    </>
  );
}
