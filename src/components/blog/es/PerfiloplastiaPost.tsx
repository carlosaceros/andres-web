'use client';

import React from 'react';
import Link from 'next/link';

export default function PerfiloplastiaPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me acabo de tomar un tintico de la mañana y puse en manos de Dios nuestro día y nuestro conocimiento, para poder hablarles hoy de un concepto clave en armonía facial: la perfiloplastia.
        </p>
        
        <p className="mb-6">
          La belleza del rostro no depende de una sola facción aislada, sino de la proporción entre ellas. La <strong>perfiloplastia en Bogotá</strong> combina la rinoplastia y la mentoplastia en un solo tiempo quirúrgico para balancear el perfil facial de forma espectacular.
        </p>
      </div>

      <h2 id="nariz-menton" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        La relación matemática entre nariz y mentón
      </h2>
      <p className="mb-6">
        A menudo, los pacientes acuden a mi consultorio en Bogotá sintiendo que su nariz es demasiado grande. Sin embargo, en el análisis tridimensional, descubrimos que lo que realmente tienen es una barbilla retraída (retrognatismo o mentón corto).
      </p>
      <p className="mb-6">
        Al realizar una mentoplastia de aumento en conjunto con la rinoplastia, logramos suavizar la proyección de la nariz sin necesidad de hacer reducciones agresivas o antinaturales en el tabique.
      </p>

      <h2 id="beneficios" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Ventajas de operarse en un solo tiempo
      </h2>
      <p className="mb-6">
        Combinar ambos procedimientos tiene enormes ventajas logísticas y clínicas:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 font-sansation">
        <li><strong>Una sola anestesia y quirófano:</strong> Ahorro significativo en costos de derechos de sala de cirugía en Bogotá.</li>
        <li><strong>Una sola recuperación:</strong> El postoperatorio transcurre de forma simultánea.</li>
        <li><strong>Resultado armónico inmediato:</strong> El balance visual del perfil se nota desde las primeras semanas.</li>
      </ul>
      <p className="mb-6">
        Te invito a informarte en nuestra página de{' '}
        <Link href="/es/procedimientos/mentoplastia" className="text-blue-500 hover:underline font-semibold">
          mentoplastia en Bogotá
        </Link>{' '}
        y ver casos clínicos relacionados.
      </p>
    </>
  );
}
