'use client';

import React from 'react';
import Link from 'next/link';

export default function EdadIdealLiftingPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenidos. Me tomé mi tintico y elevé una oración para poder responder con total honestidad una pregunta recurrente: ¿cuándo es el momento adecuado para un lifting?
        </p>
        
        <p className="mb-6">
          Existe el mito de que el <strong>lifting facial</strong> es un procedimiento exclusivo para personas de la tercera edad. Sin embargo, en la cirugía plástica moderna de 2026, la edad cronológica importa mucho menos que la edad biológica de tus tejidos.
        </p>
      </div>

      <h2 id="sintomas" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Señales anatómicas de que es el momento ideal
      </h2>
      <p className="mb-6">
        Más allá de cuántos años cumplas, debes evaluar si presentas estas señales de envejecimiento estructural en el espejo:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 font-sansation">
        <li><strong>Pérdida del óvalo mandibular:</strong> Formación de bolsas de flacidez a los lados de la barbilla (los llamados <em>jowls</em>).</li>
        <li><strong>Caída del tercio medio:</strong> Aplanamiento de las mejillas y profundización del surco nasogeniano.</li>
        <li><strong>Flacidez cervical:</strong> Bandas musculares visibles en el cuello y pérdida de definición del ángulo del cuello.</li>
      </ul>

      <h2 id="lifting-preventivo" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Lifting preventivo (35 a 45 años): La tendencia actual
      </h2>
      <p className="mb-6">
        Cada vez más pacientes jóvenes nos visitan en Bogotá buscando liftings ligeros o de plano profundo incipiente. La ventaja de operar a esta edad es que los tejidos tienen excelente colágeno, la recuperación es extremadamente rápida y el resultado pasa totalmente desapercibido como un simple aspecto fresco y descansado.
      </p>

      <h2 id="rejuvenecimiento-tardio" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Lifting corrector (50 años en adelante)
      </h2>
      <p className="mb-6">
        A partir de los 50 años, la flacidez es más avanzada. Aquí realizamos reposicionamientos estructurales completos (como la técnica Deep Plane) que devuelven la frescura sin alterar tu identidad. Si deseas conocer en detalle el procedimiento, lee sobre el{' '}
        <Link href="/es/procedimientos/lifting-facial-hamaca" className="text-blue-500 hover:underline font-semibold">
          lifting facial en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
