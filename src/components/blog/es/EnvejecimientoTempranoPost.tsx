'use client';

import React from 'react';
import Link from 'next/link';

export default function EnvejecimientoTempranoPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola a todos, un saludo muy especial. Me alegra enormemente saludarlos y compartir este espacio con ustedes. Hoy, antes de iniciar la jornada en el Santa Ana Medical Center, nos tomamos un buen café de la mañana para recargar energías y pusimos todo en manos del Creador para realizar nuestro trabajo con el mayor cuidado y profesionalismo.
        </p>
        
        <p className="mb-6">
          Hoy quiero hablarles sobre un tema recurrente y de gran interés para muchos pacientes: <strong>¿cuándo es realmente el mejor momento para actuar frente al envejecimiento facial?</strong> Existe una idea muy arraigada de que debemos esperar a que los signos del paso del tiempo sean sumamente marcados para considerar una intervención quirúrgica. Sin embargo, mi filosofía clínica es opuesta.
        </p>

        <div className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900">
          &quot;Los mejores resultados se obtienen cuando actuamos a tiempo. No se trata de operar antes de ser necesario, sino de preservar la arquitectura profunda natural antes de que el descenso de los tejidos sea severo.&quot;
        </div>
      </div>

      <h2 id="sintomas" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Los primeros signos de alerta: ¿Cómo identificarlos?
      </h2>
      <p className="mb-6">
        El envejecimiento facial no comienza en la piel (en forma de arrugas), sino en las estructuras de soporte más profundas: los ligamentos faciales, los compartimentos grasos y el sistema músculo-aponeurótico (SMAS). Los primeros signos a menudo son sutiles y se manifiestan como una pérdida general de frescura:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
        <li>Descenso de la cola de la ceja, haciendo que los párpados se sientan más pesados.</li>
        <li>Pérdida de la proyección natural de las mejillas o pómulos.</li>
        <li>Aparición de pequeños &quot;jowls&quot; o descolgamientos en el borde mandibular.</li>
        <li>Profundización gradual de los surcos nasogenianos.</li>
        <li>Una expresión persistente de cansancio, incluso después de descansar adecuadamente.</li>
      </ul>

      {/* Video Demostrativo */}
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
          Video explicativo: Dr. Andrés Pérez Nieto explica el minilifting y el rejuvenecimiento estructural temprano.
        </p>
      </div>

      <h2 id="lifting-preventivo" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Por qué intervenir a tiempo marca la diferencia?
      </h2>
      <p className="mb-6">
        Cuando los tejidos aún conservan una excelente elasticidad intrínseca, los procedimientos de reposicionamiento profundo son mucho más precisos y menos invasivos. La anatomía original se preserva con mayor facilidad, la recuperación postoperatoria es significativamente más veloz y los resultados a largo plazo lucen sumamente armónicos y estables.
      </p>

      <h2 id="rejuvenecimiento-tardio" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        La importancia de la naturalidad
      </h2>
      <p className="mb-6">
        Nuestra meta nunca es cambiar las expresiones ni la identidad de nuestros pacientes. Como siempre digo: <em>&quot;El mejor rejuvenecimiento es aquel que nadie nota como una cirugía, pero todos perciben como una versión más descansada y jovial de ti mismo.&quot;</em>
      </p>
      <p className="mb-6">
        Si notas algunos de estos signos tempranos y deseas realizar un análisis personalizado de tu rostro, te invito a conocer más sobre nuestra técnica especializada de{' '}
        <Link href="/es/procedimientos/lifting-facial-hamaca" className="text-blue-500 hover:underline font-semibold">
          Lifting Facial en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
