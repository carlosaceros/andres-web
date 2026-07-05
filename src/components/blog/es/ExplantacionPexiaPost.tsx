'use client';

import React from 'react';
import Link from 'next/link';

export default function ExplantacionPexiaPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me acabo de tomar un tintico y elevé mi oración diaria para que esta información te guíe con total honestidad en tu decisión sobre reconstrucción mamaria.
        </p>
        
        <p className="mb-6">
          Uno de los dilemas más comunes en consulta tras decidir retirar los implantes es: <strong>¿necesito una explantación con levantamiento (mastopexia) o mi piel se acomodará de forma natural?</strong>. Aquí analizamos los criterios médicos clave.
        </p>
      </div>

      <h2 id="con-pexia" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Explantación con Pexia: ¿Cuándo es obligatoria?
      </h2>
      <p className="mb-6">
        La mastopexia o pexia mamaria es la cirugía que recorta el exceso de piel y reposiciona la areola y el pezón en una posición más elevada y juvenil. Es casi indispensable en los siguientes casos:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
        <li><strong>Grados de Ptosis (caída):</strong> Si tu pezón ya mira hacia abajo o se sitúa por debajo del surco inframamario.</li>
        <li><strong>Implantes grandes:</strong> Si llevaste prótesis de gran volumen (+300cc) durante muchos años, la piel se estiró excesivamente y perdió su elasticidad (efecto muelle vencido).</li>
        <li><strong>Piel delgada y estrías:</strong> Tejidos con poca fuerza estructural que no se retraerán por sí solos tras el retiro.</li>
      </ul>

      <h2 id="sin-pexia" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Explantación Simple (Sin Pexia): ¿Quién califica?
      </h2>
      <p className="mb-6">
        Calificas para un retiro de prótesis simple si:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
        <li>Llevaste implantes pequeños y durante un corto periodo de tiempo.</li>
        <li>Tienes excelente calidad de piel, sin estrías y con buena elasticidad.</li>
        <li>Tu areola y pezón se encuentran en una posición anatómicamente alta y adecuada.</li>
      </ul>

      <h2 id="lipofilling" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        La Lipoinyección como alternativa de volumen
      </h2>
      <p className="mb-6">
        Tanto si requieres pexia como si no, podemos complementar tu explantación utilizando grasa de tu propio cuerpo para rellenar las zonas desinfladas. Te invito a conocer más sobre nuestra técnica de{' '}
        <Link href="/es/procedimientos/lipofilling-celulas-madre" className="text-blue-500 hover:underline font-semibold">
          lipofilling con células madre
        </Link>
        .
      </p>
    </>
  );
}
