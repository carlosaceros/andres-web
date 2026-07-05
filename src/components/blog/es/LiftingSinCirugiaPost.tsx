'use client';

import React from 'react';
import Link from 'next/link';

export default function LiftingSinCirugiaPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Ya tomé mi tintico y puse en manos de Dios nuestro día y nuestro conocimiento, para poder hablarles hoy sobre las diferencias reales entre el lifting quirúrgico y las opciones no invasivas.
        </p>
        
        <p className="mb-6">
          La publicidad moderna de tratamientos como hilos tensores, ultrasonido focalizado (HIFU/Ultherapy) o radiofrecuencia fraccionada (Morpheus) promete a menudo un &quot;lifting sin cirugía&quot;. Analizamos qué consiguen realmente y cuáles son sus límites.
        </p>
      </div>

      <h2 id="no-quirurgico" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Tratamientos no invasivos: Bioestimulación
      </h2>
      <p className="mb-6">
        Los dispositivos no invasivos e inyectables son fantásticos para mejorar la calidad de la piel, cerrar poros, atenuar líneas de expresión finas y estimular colágeno nuevo.
      </p>
      <p className="mb-6">
        <strong>Cuándo sirven:</strong> En pacientes jóvenes (menores de 40 años) con flacidez muy incipiente que solo buscan prevención o mantenimiento.
      </p>

      <h2 id="quirurgico" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        El lifting quirúrgico: Reposicionamiento profundo
      </h2>
      <p className="mb-6">
        Ningún dispositivo externo puede eliminar el exceso de piel flácida ni tensar la musculatura profunda caída (SMAS). Cuando existe pérdida del óvalo mandibular (jowls) o descolgamiento cervical notable, la única solución efectiva y duradera es la cirugía.
      </p>
      <p className="mb-6">
        Te invito a explorar los detalles científicos de nuestra técnica firma en la sección de{' '}
        <Link href="/es/procedimientos/lifting-facial-hamaca" className="text-blue-500 hover:underline font-semibold">
          lifting facial en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
