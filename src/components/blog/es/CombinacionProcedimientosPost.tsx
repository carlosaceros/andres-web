'use client';

import React from 'react';
import Link from 'next/link';

export default function CombinacionProcedimientosPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me tomé mi tintico de la mañana y elevé mi oración diaria para guiarte hoy en la comprensión de la cirugía estética combinada.
        </p>
        
        <p className="mb-6">
          El envejecimiento o los cambios estéticos del rostro raramente ocurren de forma aislada. Por ello, en el rejuvenecimiento facial moderno en Bogotá, la <strong>combinación de procedimientos</strong> suele ofrecer el resultado más equilibrado, armónico y natural.
        </p>
      </div>

      <h2 id="combinaciones" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Las combinaciones más frecuentes
      </h2>
      <p className="mb-6">
        En el quirófano realizamos comúnmente combinaciones sinérgicas:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 font-sansation">
        <li><strong>Lifting Facial + Blefaroplastia:</strong> Reposiciona el óvalo de la cara y elimina la mirada cansada al mismo tiempo.</li>
        <li><strong>Lifting + Lipofilling con Células Madre:</strong> Restaura la tensión profunda y repone el volumen perdido en pómulos, ojeras y labios con tu propia grasa.</li>
        <li><strong>Rinoplastia + Mentoplastia (Perfiloplastia):</strong> Balancea las proporciones del perfil nasal y la barbilla.</li>
      </ul>

      <h2 id="seguridad" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Seguridad ante todo
      </h2>
      <p className="mb-6">
        Combinar cirugías ahorra costos quirúrgicos (sala de cirugía, honorarios de anestesia) y unifica el tiempo de recuperación. Sin embargo, la seguridad es primero. Establecemos límites estrictos de tiempo quirúrgico según el estado de salud del paciente.
      </p>
      <p className="mb-6">
        Te invito a informarte en nuestra página de{' '}
        <Link href="/es/procedimientos/lipofilling-celulas-madre" className="text-blue-500 hover:underline font-semibold">
          lipofilling con células madre en Bogotá
        </Link>{' '}
        y ver opciones faciales.
      </p>
    </>
  );
}
