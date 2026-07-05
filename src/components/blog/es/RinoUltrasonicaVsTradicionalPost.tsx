'use client';

import React from 'react';
import Link from 'next/link';

export default function RinoUltrasonicaVsTradicionalPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me tomé mi tintico matutino y elevé mi oración diaria para guiarte hoy en el entendimiento de las diferencias entre la rinoplastia ultrasónica y el método tradicional.
        </p>
        
        <p className="mb-6">
          Si estás evaluando operarte la nariz en Bogotá, seguramente habrás escuchado hablar del <strong>piezotomo o rinoplastia ultrasónica</strong>. Analizamos los beneficios de esta tecnología de precisión frente a la clásica escofina y martillo.
        </p>
      </div>

      <h2 id="ultrasonica" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Rinoplastia Ultrasónica: Precisión milimétrica
      </h2>
      <p className="mb-6">
        La rinoplastia ultrasónica utiliza un dispositivo piezoeléctrico de alta frecuencia. Este instrumento corta y modela selectivamente el hueso denso sin lesionar los tejidos blandos adyacentes (mucosa, vasos sanguíneos y piel).
      </p>
      <p className="mb-6">
        <strong>Ventajas:</strong> Permite realizar cortes limpios con precisión microscópica, reduciendo el sangrado, los morados alrededor de los ojos y la inflamación de forma significativa.
      </p>

      <h2 id="tradicional" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Rinoplastia Tradicional: El método mecánico
      </h2>
      <p className="mb-6">
        La técnica convencional utiliza instrumental manual (escofinas, limas y osteótomos mecánicos). Aunque es un método efectivo en manos de un cirujano experto, genera mayor trauma en los tejidos blandos circundantes, traduciéndose en una recuperación con más hematomas.
      </p>
      <p className="mb-6">
        Si deseas profundizar en cómo planificamos tu cirugía, te invito a visitar la sección de{' '}
        <Link href="/es/procedimientos/rinoplastia" className="text-blue-500 hover:underline font-semibold">
          rinoplastia en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
