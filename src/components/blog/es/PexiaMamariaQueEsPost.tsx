'use client';

import React from 'react';
import Link from 'next/link';

export default function PexiaMamariaQueEsPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me acabo de tomar mi tintico y elevé una pequeña oración para guiarte en el entendimiento de la cirugía de levantamiento de senos o mastopexia.
        </p>
        
        <p className="mb-6">
          Con el paso del tiempo, las fluctuaciones de peso, la lactancia o el uso de implantes pesados, la gravedad estira los tejidos mamarios provocando que el seno caiga. La <strong>pexia mamaria (o mastopexia)</strong> es el procedimiento quirúrgico diseñado para devolver el seno a su posición juvenil.
        </p>
      </div>

      <h2 id="que-es" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué es la Pexia Mamaria?
      </h2>
      <p className="mb-6">
        A diferencia del aumento simple, la pexia consiste en recortar el exceso de piel flácida y remodelar la glándula mamaria para elevar la areola y el pezón a una ubicación más alta y estética.
      </p>

      <h2 id="tecnicas" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Técnicas según el grado de caída (Ptosis)
      </h2>
      <p className="mb-6">
        El tipo de incisión se define según la severidad de la caída mamaria:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 font-sansation">
        <li><strong>Pexia Periareolar (Cicatriz en Dona):</strong> Para caídas muy leves. La incisión rodea únicamente el borde externo de la areola.</li>
        <li><strong>Pexia Vertical (Cicatriz en Paleta):</strong> Para caídas moderadas. Incluye una incisión periareolar y otra vertical descendente.</li>
        <li><strong>Pexia en T Invertida (Ancla):</strong> Para caídas severas. Es la técnica más confiable y que permite dar la forma más bonita, firme y redonda al pecho.</li>
      </ul>
      <p className="mb-6">
        Te invito a informarte a fondo sobre este procedimiento en la sección de{' '}
        <Link href="/es/procedimientos/pexia" className="text-blue-500 hover:underline font-semibold">
          mastopexia en Bogotá
        </Link>{' '}
        o explorar sobre el retiro de prótesis y pexia.
      </p>
    </>
  );
}
