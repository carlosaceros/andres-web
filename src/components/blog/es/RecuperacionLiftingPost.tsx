'use client';

import React from 'react';
import Link from 'next/link';

export default function RecuperacionLiftingPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Ya tomé mi tintico y elevé una oración para guiarte en el entendimiento del proceso postoperatorio de un estiramiento facial.
        </p>
        
        <p className="mb-6">
          El éxito de un <strong>lifting facial en Bogotá</strong> depende en un 50% del trabajo minucioso del cirujano en el quirófano y en otro 50% de tus cuidados y paciencia en casa. Te explico qué esperar día a día.
        </p>
      </div>

      <h2 id="primeros-dias" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Días 1 a 3: La fase de mayor inflamación
      </h2>
      <p className="mb-6">
        Durante los primeros tres días, la inflamación (edema) y los posibles morados alcanzarán su punto máximo. Sentirás tirantez alrededor de las orejas y en el cuello.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 font-sansation">
        <li><strong>Reposo postural:</strong> Debes dormir semisentado, utilizando dos almohadas grandes para facilitar el drenaje linfático.</li>
        <li><strong>Frío local:</strong> Aplica compresas frías en las mejillas de forma intermitente. Evita el calor o la exposición solar directa.</li>
      </ul>

      <h2 id="primera-semana" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Días 4 a 7: Retiro de puntos y desinflamación
      </h2>
      <p className="mb-6">
        La inflamación comenzará a descender. En el día 6 o 7 acudiremos al consultorio en Bogotá para retirar los puntos de sutura más finos ubicados alrededor de las orejas. Sentirás mayor alivio y los morados irán cambiando de color hacia amarillo.
      </p>

      <h2 id="segunda-semana" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Día 8 a 14: Retorno paulatino a la vida social
      </h2>
      <p className="mb-6">
        A partir del día 10 la mayoría de mis pacientes pueden retomar labores ligeras de oficina y teletrabajo. Las cicatrices pueden disimularse perfectamente con el cabello suelto.
      </p>
      <p className="mb-6">
        Recuerda evitar esfuerzos físicos y el gimnasio por al menos 3 semanas. Para conocer detalles completos sobre la técnica profunda, lee sobre el{' '}
        <Link href="/es/procedimientos/lifting-facial-hamaca" className="text-blue-500 hover:underline font-semibold">
          lifting facial en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
