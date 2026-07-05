'use client';

import React from 'react';
import Link from 'next/link';

export default function EnBlocVsCapsulectomiaPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenidos. Me tomé mi tintico y elevé una oración para que esta información sobre técnicas de capsulectomía te aclare el panorama y te brinde seguridad.
        </p>
        
        <p className="mb-6">
          Al investigar sobre el retiro de prótesis en Bogotá, sobre todo en casos relacionados con el Síndrome de ASIA o rotura, surgen términos técnicos complejos. Hoy aclaramos la diferencia entre **explantación En Bloc (en bloque)** y la **capsulectomía total**.
        </p>
      </div>

      <h2 id="en-bloc" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué es la explantación En Bloc (En Bloque)?
      </h2>
      <p className="mb-6">
        La técnica <strong>En Bloc</strong> consiste en retirar el implante y la cápsula cicatricial circundante juntos, como una sola pieza cerrada, sin abrirla en ningún momento dentro del cuerpo.
      </p>
      <p className="mb-6">
        <strong>Indicación clínica principal:</strong> Es la técnica obligatoria cuando el implante está roto o si se sospecha de un linfoma (BIA-ALCL). Evita que la silicona libre o detritos de la cápsula entren en contacto directo con los tejidos sanos de la paciente. Es una técnica exigente porque la cápsula suele estar adherida a las costillas y la pleura pulmonar.
      </p>

      <h2 id="capsulectomia-total" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué es la Capsulectomía Total?
      </h2>
      <p className="mb-6">
        En la <strong>capsulectomía total</strong>, el cirujano extrae el 100% de la cápsula, pero no necesariamente en una sola pieza cerrada. Puede abrir primero el espacio, extraer el implante y luego disecar y retirar la cápsula por secciones.
      </p>
      <p className="mb-6">
        <strong>Cuándo se prefiere:</strong> Se utiliza cuando la cápsula es extremadamente delgada o se encuentra adherida a estructuras vasculares importantes donde intentar sacarla &quot;en bloque&quot; pondría en riesgo la vida de la paciente.
      </p>

      <h2 id="seguridad" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Mi recomendación profesional en Bogotá
      </h2>
      <p className="mb-6">
        Cada técnica tiene indicaciones específicas de bioseguridad. Lo importante es retirar todo el tejido capsular enfermo para frenar el estímulo inmunológico. Si deseas conocer nuestro protocolo completo, lee la página de{' '}
        <Link href="/es/procedimientos/explantacion-mamaria" className="text-blue-500 hover:underline font-semibold">
          explantación mamaria en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
