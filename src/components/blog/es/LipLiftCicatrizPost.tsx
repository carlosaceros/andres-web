'use client';

import React from 'react';
import Link from 'next/link';

export default function LipLiftCicatrizPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenidos. Ya me tomé mi tintico y puse en manos de Dios nuestro día y nuestro conocimiento, para poder hablarles hoy de un procedimiento que me encanta: el Lip Lift.
        </p>
        
        <p className="mb-6">
          El <strong>Lip Lift</strong> (o levantamiento de labio superior) es uno de los secretos mejor guardados en el rejuvenecimiento facial en Bogotá. Muchas personas creen que la única forma de lucir labios jóvenes y carnosos es usando rellenos de ácido hialurónico, pero en muchos casos el problema es estructural.
        </p>
      </div>

      <h2 id="que-es" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué es el Lip Lift y en qué consiste?
      </h2>
      <p className="mb-6">
        Con el paso de los años, el labio superior se elonga (se estira hacia abajo) y se adelgaza, tapando los dientes superiores al hablar o sonreír. El Lip Lift consiste en retirar una pequeña tira de piel justo debajo de la nariz (con forma de &quot;asta de toro&quot; o <em>bullhorn</em>) para acortar esa distancia filtral.
      </p>
      <p className="mb-6">
        Esto permite elevar el labio superior, evertir la mucosa roja (exponer más labio rojo) y rejuvenecer de forma permanente la sonrisa, mostrando sutilmente los dientes superiores.
      </p>

      <h2 id="cicatriz" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿La cicatriz del Lip Lift es visible?
      </h2>
      <p className="mb-6">
        El gran temor de mis pacientes es: <span className="italic text-blue-950 font-semibold">&quot;Doctor, ¿se me va a ver una cicatriz en el centro de la cara?&quot;</span>.
      </p>
      <p className="mb-6">
        La respuesta es <strong>no, si se realiza con microcirugía</strong>. La incisión se diseña siguiendo meticulosamente los pliegues naturales de la base de la nariz y las fosas nasales. Al cabo de unas semanas, tras el proceso de maduración de los tejidos, la cicatriz se vuelve clínicamente imperceptible.
      </p>

      <h2 id="vs-relleno" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Diferencia con el relleno de labios común
      </h2>
      <p className="mb-6">
        Los rellenos inyectables dan volumen, pero no pueden acortar un labio largo. Poner ácido hialurónico en un labio muy largo suele producir el temido &quot;labio de pato&quot;. El Lip Lift es una solución estructural y definitiva. Te invito a explorar nuestra página de{' '}
        <Link href="/es/procedimientos/lip-lift" className="text-blue-500 hover:underline font-semibold">
          procedimiento de Lip Lift en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
