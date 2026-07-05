'use client';

import React from 'react';
import Link from 'next/link';

export default function ComoQuedanSenosPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Me acabo de tomar mi tintico y puse en manos de Dios nuestro día, para poder responder con total honestidad a uno de los temores estéticos más grandes: cómo se verán tus senos tras retirar los implantes.
        </p>
        
        <p className="mb-6">
          Es totalmente comprensible sentir miedo al cambio físico. Muchas pacientes temen quedar con el pecho completamente desinflado o asimétrico. Hoy desmitificamos qué ocurre realmente con los tejidos.
        </p>
      </div>

      <h2 id="retraccion" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        1. La capacidad de retracción natural de tu piel
      </h2>
      <p className="mb-6">
        El cuerpo es increíble. Tras retirar el implante, se genera un espacio vacío. En los primeros 3 a 6 meses, la piel experimenta un proceso de retracción progresivo. Si tenías buena elasticidad, el seno recuperará un volumen natural más compacto de lo que imaginabas al principio.
      </p>

      <h2 id="mastopexia" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        2. El papel del levantamiento (Mastopexia)
      </h2>
      <p className="mb-6">
        En pacientes con flacidez marcada o que llevaron implantes grandes, la piel por sí sola no se retraerá lo suficiente. Aquí recurrimos a la mastopexia en el mismo acto quirúrgico. Recortamos el exceso cutáneo y reacomodamos la glándula mamaria existente para darle una forma hemisférica, bonita y firme, aunque más pequeña.
      </p>

      <h2 id="lipotransferencia" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        3. Restaurar el polo superior con tu propia grasa
      </h2>
      <p className="mb-6">
        Para evitar el aspecto &quot;vacío&quot; en la parte superior del pecho, una de las técnicas estrella es inyectar grasa purificada de tu propio cuerpo. Te invito a conocer más detalles en la sección de{' '}
        <Link href="/es/procedimientos/lipofilling-celulas-madre" className="text-blue-500 hover:underline font-semibold">
          lipofilling con células madre en Bogotá
        </Link>
        . De esta manera, esculpimos un escote natural sin usar prótesis.
      </p>
    </>
  );
}
