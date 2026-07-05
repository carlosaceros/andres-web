'use client';

import React from 'react';
import Link from 'next/link';

export default function BlefaroSuperiorInferiorPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenidos. Me acabo de tomar mi tintico de la mañana y puse en manos de Dios nuestro día y nuestro conocimiento, para poder hablarles hoy de cómo refrescar la mirada de forma armónica.
        </p>
        
        <p className="mb-6">
          Cuando los pacientes consultan por rejuvenecimiento de la mirada en Bogotá, solemos discutir tres opciones quirúrgicas: **blefaroplastia superior, inferior o la combinación de ambas (blefaroplastia completa)**. Analizamos qué corrige cada una.
        </p>
      </div>

      <h2 id="superior" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        1. Blefaroplastia Superior: Despejar el párpado
      </h2>
      <p className="mb-6">
        Se enfoca exclusivamente en el párpado superior. Consiste en retirar el exceso de piel encapotada que cuelga sobre el ojo y, en algunos casos, extraer una pequeña porción de las bolsas de grasa internas que causan abultamiento cerca de la nariz.
      </p>
      <p className="mb-6">
        <strong>Ventajas:</strong> Es una cirugía rápida (30-40 minutos), se realiza bajo anestesia local y la cicatriz queda oculta en el pliegue natural del párpado superior.
      </p>

      <h2 id="inferior" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        2. Blefaroplastia Inferior: Adiós a las bolsas y ojeras
      </h2>
      <p className="mb-6">
        Se realiza en el párpado inferior para corregir las bolsas de grasa y la laxitud de la piel que da aspecto de cansancio.
      </p>
      <p className="mb-6">
        <strong>Enfoque moderno (Preservación y Fat Sliding):</strong> En lugar de extirpar toda la grasa (lo que dejaría el ojo hundido), preferimos redistribuir o reposicionar las bolsas de grasa para rellenar el surco de la ojera. A menudo realizamos el abordaje de forma <em>transconjuntival</em> (por dentro del párpado), evitando cicatrices externas.
      </p>

      <h2 id="ambas" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        3. Blefaroplastia Completa (Ambos Párpados)
      </h2>
      <p className="mb-6">
        Es la opción recomendada cuando el envejecimiento afecta tanto a la parte superior como inferior de los ojos. Brinda un rejuvenecimiento global y armónico a toda la mirada. Te invito a explorar los detalles de la{' '}
        <Link href="/es/procedimientos/blefaroplastia" className="text-blue-500 hover:underline font-semibold">
          cirugía de párpados en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
