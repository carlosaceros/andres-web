'use client';

import React from 'react';
import Link from 'next/link';

export default function RecuperacionRinoplastiaPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me tomé mi tintico y puse en manos de Dios nuestro día y nuestro conocimiento, para guiarte en el proceso de recuperación tras tu rinoplastia.
        </p>
        
        <p className="mb-6">
          La <strong>recuperación de una rinoplastia en Bogotá</strong> es un camino que requiere paciencia. Aunque la cirugía es rápida y no duele, el tejido nasal tarda meses en desinflamarse por completo. Te explico qué esperar paso a paso.
        </p>
      </div>

      <h2 id="mes-1" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Primer Mes: Desinflamación inicial y retiro de férula
      </h2>
      <p className="mb-6">
        Durante la primera semana, llevarás una férula termoplástica rígida para proteger la nariz. Los puntos se retiran hacia el día 7. La mayor parte de la inflamación socialmente visible desaparece a las 3 semanas.
      </p>

      <h2 id="mes-3" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Meses 2 a 6: Asentamiento y ablandamiento de la punta
      </h2>
      <p className="mb-6">
        La punta nasal es la última zona en desinflamar. Sentirás la nariz algo rígida al sonreír, lo cual es totalmente normal y mejorará progresiva y simétricamente.
      </p>

      <h2 id="mes-12" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Un Año: El resultado definitivo
      </h2>
      <p className="mb-6">
        El proceso de cicatrización y remodelación de los cartílagos nasales toma un año completo. En ese momento es cuando evaluamos el resultado definitivo y refinado. Si quieres conocer más detalles sobre el procedimiento, visita la sección de{' '}
        <Link href="/es/procedimientos/rinoplastia" className="text-blue-500 hover:underline font-semibold">
          rinoplastia en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
