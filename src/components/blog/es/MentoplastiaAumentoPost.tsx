'use client';

import React from 'react';
import Link from 'next/link';

export default function MentoplastiaAumentoPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me acabo de tomar mi tintico y elevé una oración sincera para guiarte en el entendimiento de la cirugía de aumento de mentón.
        </p>
        
        <p className="mb-6">
          Un mentón bien proyectado define la mandíbula, estiliza el cuello y da fuerza al rostro. Para pacientes con mentón retraído en Bogotá, discutimos dos opciones quirúrgicas de aumento: <strong>implante de silicona sólida o avance óseo (osteotomía)</strong>.
        </p>
      </div>

      <h2 id="implante" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        1. Implante de Mentón: Sencillo y rápido
      </h2>
      <p className="mb-6">
        Consiste en colocar una prótesis de silicona sólida o de polietileno poroso (Medpor) sobre el hueso de la mandíbula. Se realiza comúnmente a través de una pequeña incisión oculta dentro de la boca (intraoral) o debajo de la barbilla.
      </p>
      <p className="mb-6">
        <strong>Ventajas:</strong> Es una cirugía ambulatoria corta (30 minutos), de recuperación rápida y con excelentes resultados.
      </p>

      <h2 id="avance" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        2. Avance Óseo (Osteotomía): Estructural y sin prótesis
      </h2>
      <p className="mb-6">
        Es una técnica donde realizamos un corte preciso en el hueso de la barbilla, deslizándolo hacia adelante y fijándolo de forma segura con pequeñas placas y tornillos de titanio.
      </p>
      <p className="mb-6">
        <strong>Ventajas:</strong> No utiliza materiales extraños al cuerpo y permite corregir asimetrías o modificar la altura vertical del mentón.
      </p>
      <p className="mb-6">
        Te invito a informarte en nuestra página sobre la{' '}
        <Link href="/es/procedimientos/mentoplastia" className="text-blue-500 hover:underline font-semibold">
          mentoplastia en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
