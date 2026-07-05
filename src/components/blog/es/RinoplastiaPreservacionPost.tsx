'use client';

import React from 'react';
import Link from 'next/link';

export default function RinoplastiaPreservacionPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me acabo de tomar mi tintico y elevé una oración sincera para guiarte en el entendimiento de las técnicas modernas de nariz.
        </p>
        
        <p className="mb-6">
          La <strong>rinoplastia de preservación</strong> (o técnica Preserve/Let Down) es una de las mayores revoluciones en la cirugía nasal. A diferencia del método tradicional donde se lima o rompe el hueso del dorso, aquí lo conservamos intacto.
        </p>
      </div>

      <h2 id="que-es" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué es y cómo funciona la preservación nasal?
      </h2>
      <p className="mb-6">
        En lugar de destruir el techo de la nariz para quitar una giba, realizamos cortes muy precisos en la parte profunda del tabique (septum) para debilitarlo de forma controlada. Esto nos permite descender la nariz completa como una sola unidad estructurada.
      </p>

      <h2 id="beneficios" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Beneficios sobre la rinoplastia tradicional
      </h2>
      <p className="mb-6">
        Al mantener el dorso nasal natural (los cartílagos y el hueso sin limar), logramos:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 font-sansation">
        <li><strong>Resultados ultra naturales:</strong> Se conservan las líneas estéticas de tu nariz de nacimiento.</li>
        <li><strong>Excelente función respiratoria:</strong> Evita el colapso de las válvulas nasales internas.</li>
        <li><strong>Menor inflamación:</strong> El postoperatorio es mucho más cómodo y rápido.</li>
      </ul>

      <h2 id="candidatos" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Quién es candidata a esta técnica?
      </h2>
      <p className="mb-6">
        Es ideal para pacientes con gibas moderadas que nunca han tenido cirugías nasales previas. Si deseas conocer en detalle este procedimiento, visita nuestra sección de{' '}
        <Link href="/es/procedimientos/rinoplastia" className="text-blue-500 hover:underline font-semibold">
          rinoplastia en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
