'use client';

import React from 'react';
import Link from 'next/link';

export default function ParpadosCaidosPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me acabo de tomar un tintico de la mañana y puse en manos de Dios nuestro día y nuestro conocimiento, para guiarte en el entendimiento de la cirugía de párpados.
        </p>
        
        <p className="mb-6">
          Los <strong>párpados caídos</strong> no solo envejecen y dan un aspecto de cansancio constante a la mirada; en muchos casos avanzados, pueden convertirse en un problema funcional que limita el campo visual.
        </p>
      </div>

      <h2 id="causas" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Por qué se caen los párpados?
      </h2>
      <p className="mb-6">
        La caída del párpado superior suele deberse a dos factores principales que debemos diferenciar en la consulta médica en Bogotá:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 font-sansation">
        <li><strong>Dermatocalasis:</strong> Exceso y descolgamiento de la piel del párpado debido a la pérdida de colágeno y la gravedad. Es la causa estética más común.</li>
        <li><strong>Ptosis Palpebral:</strong> Debilitamiento o estiramiento del músculo elevador del párpado. En estos casos, el párpado completo cae tapando la pupila del ojo.</li>
      </ul>

      <h2 id="estetico-vs-funcional" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Cuándo es Estético y cuándo es Funcional
      </h2>
      <p className="mb-6">
        Consideramos que la cirugía es <strong>estética</strong> cuando el paciente desea eliminar el aspecto cansado, la pesadez y refrescar su mirada.
      </p>
      <p className="mb-6">
        Es <strong>funcional</strong> cuando el exceso de piel es tan marcado que sobrepasa la línea de las pestañas, reduciendo el campo visual superior y obligando al paciente a levantar constantemente las cejas o inclinar la cabeza hacia atrás para ver bien, lo que suele causar fatiga muscular y dolores de cabeza recurrentes.
      </p>

      <h2 id="solucion" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        La Blefaroplastia como solución definitiva
      </h2>
      <p className="mb-6">
        La blefaroplastia superior permite resolver ambos problemas retirando la piel sobrante y ajustando el músculo elevador si es necesario. Te invito a explorar nuestra página de{' '}
        <Link href="/es/procedimientos/blefaroplastia" className="text-blue-500 hover:underline font-semibold">
          cirugía de párpados en Bogotá
        </Link>{' '}
        para ver cómo realizamos este procedimiento con anestesia local y mínima inflamación.
      </p>
    </>
  );
}
