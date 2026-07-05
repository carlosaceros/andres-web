'use client';

import React from 'react';
import Link from 'next/link';

export default function RecuperacionBlefaroPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me tomé mi tintico matutino y elevé una oración para guiarte en el entendimiento del proceso de recuperación tras una blefaroplastia.
        </p>
        
        <p className="mb-6">
          La <strong>cirugía de párpados (blefaroplastia)</strong> es una de las intervenciones estéticas faciales con recuperación más rápida, pero requiere de tu disciplina y paciencia para optimizar la cicatrización.
        </p>
      </div>

      <h2 id="primeros-dias" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Días 1 a 3: El manejo de la inflamación
      </h2>
      <p className="mb-6">
        Es de esperarse inflamación (edema) y morados (equimosis) de diferente intensidad a nivel de los párpados. Las principales recomendaciones para esta etapa son:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 font-sansation">
        <li><strong>Compresas frías:</strong> Aplicar bolsas de gel frío o gasas estériles frías durante 15 minutos cada hora para contener la inflamación.</li>
        <li><strong>Postura al dormir:</strong> Dormir con la cabeza elevada (dos almohadas grandes) para evitar la acumulación de líquidos en los párpados.</li>
      </ul>

      <h2 id="puntos" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Día 5 a 7: Retiro de suturas
      </h2>
      <p className="mb-6">
        En este periodo asistiremos al consultorio en Bogotá para retirar los puntos finos de la blefaroplastia superior. A partir de este momento la desinflamación es mucho más acelerada. Las cicatrices irán aclarando paulatinamente.
      </p>

      <h2 id="cuidados" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Recomendaciones generales
      </h2>
      <p className="mb-6">
        Evita el uso de lentes de contacto y maquillaje durante las primeras dos semanas. Es fundamental el uso de gafas de sol y protector solar estricto. Conoce más sobre el procedimiento en la sección de{' '}
        <Link href="/es/procedimientos/blefaroplastia" className="text-blue-500 hover:underline font-semibold">
          blefaroplastia en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
