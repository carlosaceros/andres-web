'use client';

import React from 'react';
import Link from 'next/link';

export default function LaPielNoSostieneRostroPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, qué gusto tenerlos por aquí de nuevo en esta biblioteca de conocimiento. Como es de costumbre en nuestro día a día en el consultorio del Santa Ana Medical Center en Bogotá, nos tomamos un cafecito de la mañana para prender motores y pusimos en manos del Altísimo nuestra jornada mediante una oración sincera, pidiendo claridad y templanza para ofrecer siempre excelencia en el cuidado de nuestros pacientes.
        </p>
        
        <p className="mb-6">
          Hoy nos adentramos en uno de los mitos más grandes de la cirugía plástica y estética: la idea de que la piel es el tejido que sostiene nuestro rostro. Muchas pacientes acuden a mi consulta diciéndome: <em>&quot;Doctor, colóqueme hilos o hágame un estiramiento de piel porque la tengo suelta&quot;</em>. Hoy les voy a explicar por qué <strong>la piel no es el soporte, sino la cobertura</strong>.
        </p>

        <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
          &quot;No busco que parezcas una persona diferente. Busco que vuelvas a parecer tú.&quot;
        </blockquote>
      </div>

      <h2 id="con-pexia" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Por qué el envejecimiento ocurre debajo de la piel?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        El envejecimiento facial ocurre principalmente en las capas subdérmicas —el plano muscular del SMAS y los ligamentos de retención— que con los años se debilitan y ceden, provocando que la piel superficial simplemente acompañe este descenso y se pliegue sobre sí misma.
      </p>
      <p className="mb-6">
        En la literatura científica de cirugía estética, autores como el doctor Fred Fedok en sus guías de planificación del rostro envejecido (<em>Otolaryngologic Clinics of North America</em>) señalan que la piel es un tejido elástico que se adapta a las formas que se encuentran debajo de ella. Si la base profunda pierde volumen y tensión, la piel sobra. Por lo tanto, intentar corregir el descolgamiento facial estirando solo la piel superficial produce ese aspecto jalado y artificial de los estiramientos del pasado.
      </p>

      <h2 id="sin-pexia" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué papel juegan los ligamentos de retención faciales?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        Los ligamentos de retención faciales funcionan como verdaderos pilares de colágeno que conectan el periostio del hueso con la piel. Estas estructuras actúan como anclajes firmes que estabilizan las capas profundas, impidiendo activamente que tanto los compartimentos de grasa facial como la musculatura suprayacente se deslicen verticalmente por gravedad.
      </p>
      <p className="mb-6">
        A medida que envejecemos, estos ligamentos (como el cigomático o el masetérico) se estiran y pierden firmeza. Cuando esto ocurre, los tejidos grasos y musculares del pómulo caen libremente hacia adelante y abajo, acumulándose en los surcos nasogenianos y el borde mandibular. La técnica de Lifting Hamaca Deep Plane® se centra precisamente en liberar estos ligamentos tensados por el tiempo para reposicionar todo el complejo muscular sin forzar la piel.
      </p>

      <div className="my-8 max-w-xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-blue-950">
          <video 
            controls 
            playsInline 
            className="w-full h-full object-cover"
            poster="/images/todos/toma.webp"
          >
            <source src="/images/videos/efecto-hamaca-mejillas-cuello.mp4" type="video/mp4" />
            <source src="/images/videos/efecto-hamaca-mejillas-cuello.webm" type="video/webm" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          Video explicativo: El soporte profundo y el restablecimiento del óvalo facial sin tensión en la piel.
        </p>
      </div>

      <h2 id="lipofilling" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué es el SMAS y por qué es clave en el lifting moderno?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        El SMAS (Sistema Músculo-Aponeurótico Superficial) es una red continua de tejido muscular y fibroso que recubre el rostro y se ancla al cuello. Junto con la reabsorción ósea, la laxitud de este sistema altera severamente el soporte profundo, siendo clave reposicionarlo para rejuvenecer con naturalidad.
      </p>
      <p className="mb-6">
        En lugar de traccionar la piel, los cirujanos plásticos faciales modernos trabajamos sobre esta armadura profunda. Al realizar una disección sub-SMAS (por debajo de este sistema muscular), liberamos los anclajes rígidos y suspendemos el músculo mediante vectores de tensión vertical. La piel simplemente acompaña esta recolocación sin tensión alguna, lo que permite que las incisiones cicatricen perfectamente planas y delgadas, haciéndose prácticamente invisibles detrás de los pliegues de la oreja.
      </p>

      <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
        &quot;No estiro rostros. Restauro el sistema de soporte facial.&quot;
      </blockquote>

      <hr className="my-10 border-gray-200" />

      <div className="bg-gray-100 p-8 rounded-3xl font-sansation">
        <h3 className="font-prototype text-lg text-blue-950 mb-4">Referencias Científicas (Cibergrafía)</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>
            <strong>[1] Fedok FG.</strong> <em>Evaluation and Treatment Planning for the Aging Face.</em> Otolaryngologic Clinics of North America. 2020 Apr;53(2):181-197. DOI: <a href="https://doi.org/10.1016/j.otc.2019.11.002" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">10.1016/j.otc.2019.11.002</a>. PMID: 32088035.
          </li>
          <li>
            <strong>[2] Mendelson BC.</strong> <em>Facelift anatomy, SMAS, retaining ligaments and facial spaces.</em> In: Aesthetic Plastic Surgery of the East Asian Face. 2009. BMJ Publishing Group.
          </li>
          <li>
            <strong>[3] Silva FBR, et al.</strong> <em>Facial retention ligaments: a clinical considerations review.</em> Research, Society and Development. 2022;11(12):e45111231588. DOI: <a href="https://doi.org/10.33448/rsd-v11i12.31588" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">10.33448/rsd-v11i12.31588</a>.
          </li>
        </ul>
      </div>
    </>
  );
}
