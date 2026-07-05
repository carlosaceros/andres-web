'use client';

import React from 'react';
import Link from 'next/link';

export default function RecuperacionExplantacionPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me acabo de tomar mi tintico y elevé una pequeña oración para guiarte en tu proceso de recuperación física y emocional tras el retiro de implantes.
        </p>
        
        <p className="mb-6">
          La recuperación de una <strong>explantación mamaria en Bogotá</strong> no es solo física; es una desintoxicación profunda del organismo. Te detallo el proceso semana a semana.
        </p>
      </div>

      <h2 id="semana-1" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Semana 1: Reposo y cuidados de heridas
      </h2>
      <p className="mb-6">
        Durante los primeros 7 días, debes mantener un reposo relativo. Sentirás opresión en el pecho e inflamación muscular.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 font-sansation">
        <li><strong>Soporte constante:</strong> Uso obligatorio y permanente del brasier postoperatorio especial.</li>
        <li><strong>Movilidad de brazos:</strong> Puedes mover los brazos para comer o asearte, pero evita levantarlos por encima de los hombros o cargar peso.</li>
        <li><strong>Drenajes:</strong> Si dejamos drenajes, los retiramos usualmente entre el día 3 y 5 en el consultorio.</li>
      </ul>

      <h2 id="semana-2" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Semana 2 a 4: Asentamiento y desintoxicación
      </h2>
      <p className="mb-6">
        La inflamación aguda comienza a descender de forma asimétrica (es común ver un seno más inflamado que el otro, evita el <em>efecto lupa</em>). Si padecías Síndrome de ASIA, notarás mejoras progresivas en la fatiga y neblina mental.
      </p>

      <h2 id="semana-5" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        A partir del segundo mes: Retorno al deporte
      </h2>
      <p className="mb-6">
        Generalmente, a partir de la sexta semana autorizamos el retorno gradual al ejercicio de impacto y gimnasio. Los tejidos continuarán acomodándose y ablandándose hasta cumplir el sexto mes. Para leer en profundidad sobre esta cirugía, visita nuestra sección de{' '}
        <Link href="/es/procedimientos/explantacion-mamaria" className="text-blue-500 hover:underline font-semibold">
          explantación mamaria en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
