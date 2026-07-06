'use client';

import React from 'react';
import Link from 'next/link';

export default function LiftingHamacaDeepPlanePost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, qué alegría saludarlos. Me alegra mucho que nos encontremos en este espacio de aprendizaje. Como es costumbre en nuestro consultorio en el Santa Ana Medical Center de Bogotá, antes de empezar nos tomamos un tintico para inspirar las ideas y encomendamos nuestra jornada a Dios en nuestra oración matutina, pidiendo que cada procedimiento traiga bienestar y seguridad.
        </p>
        
        <p className="mb-6">
          Hoy quiero hablarles en profundidad sobre la filosofía de mi técnica firma: el <strong>Lifting Facial Hamaca Deep Plane®</strong>. Este concepto surgió de una observación clínica fundamental en mis más de 30 años de experiencia: la piel no sostiene la cara; el verdadero soporte del rostro se encuentra en sus capas profundas.
        </p>

        <div className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900">
          &quot;No se trata de estirar la piel ni de crear rostros artificiales o planos. Se trata de reconstruir y devolver la tensión a la hamaca muscular profunda que el tiempo ha descendido, devolviéndote tu propia frescura.&quot;
        </div>
      </div>

      <h2 id="que-es" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        La analogía de la Hamaca: ¿Cómo funciona en el rostro?
      </h2>
      <p className="mb-6">
        Imagina una hamaca suspendida firmemente entre dos árboles. Cuando está bien tensada, sostiene cualquier peso con total estabilidad. Sin embargo, con los años y el uso, las cuerdas pierden tensión y el centro comienza a colgar. Eso es exactamente lo que ocurre en el rostro: el Sistema Músculo-Aponeurótico Superficial (SMAS) y los ligamentos retenedores pierden su firmeza.
      </p>
      
      <p className="mb-6">
        Con el <strong>Lifting Facial Hamaca Deep Plane®</strong>, actuamos directamente en ese plano profundo. Liberamos los ligamentos caídos de forma segura y reposicionamos la musculatura en un vector cruzado de suspensión bidireccional, reconstruyendo esa &quot;hamaca&quot; interna. Al recaer toda la tensión en las capas musculares, la piel queda completamente relajada y libre de tracción, garantizando cicatrices imperceptibles y un resultado sumamente natural.
      </p>

      {/* Video Demostrativo */}
      <div className="my-8 max-w-xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-blue-950">
          <video 
            controls 
            playsInline 
            className="w-full h-full object-cover"
            poster="/images/todos/toma.webp"
          >
            <source src="/images/videos/efecto-hamaca-mejillas-cuello.mp4" type="video/mp4" />
            <source src="/images/videos/efecto-hamaca-mejillas-cuello.webm" type="video/webm" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          Video explicativo: El Dr. Andrés Pérez Nieto detalla el efecto hamaca en la reconstrucción del cuello y las mejillas.
        </p>
      </div>

      <h2 id="beneficios" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Beneficios estructurales del Lifting en Hamaca
      </h2>
      <p className="mb-6">
        A diferencia de los estiramientos tradicionales, este enfoque reposiciona los tejidos como una sola unidad anatómica:
      </p>
      
      <ul className="space-y-4 mb-6 pl-6 border-l-2 border-blue-200 font-sansation">
        <li>
          <strong className="text-blue-950 block">Redefinición del óvalo facial y mandíbula:</strong> Elimina los jowls y la pesadez del tercio inferior del rostro de raíz.
        </li>
        <li>
          <strong className="text-blue-950 block">Cuello rejuvenecido y elegante:</strong> La suspensión del músculo platisma recrea un ángulo cervical firme y limpio.
        </li>
        <li>
          <strong className="text-blue-950 block">Expresión natural de descanso:</strong> No altera tus facciones, solo te devuelve la frescura que tenías hace 10 o 15 años.
        </li>
        <li>
          <strong className="text-blue-950 block">Resultados perdurables:</strong> Al ser una fijación muscular estable, la duración se extiende de 10 a 12 años de forma natural.
        </li>
      </ul>

      <h2 id="candidatos" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Quién es el candidato ideal?
      </h2>
      <p className="mb-6">
        Este procedimiento está especialmente diseñado para hombres y mujeres con flacidez moderada a avanzada en mejillas y cuello, pérdida de la definición mandibular, o que sienten que su reflejo en el espejo denota cansancio constante.
      </p>
      
      <p className="mb-6">
        Si deseas profundizar más en el proceso y agendar una valoración personalizada en Bogotá, te invito a explorar nuestra página informativa del{' '}
        <Link href="/es/procedimientos/lifting-facial-hamaca" className="text-blue-500 hover:underline font-semibold">
          Lifting Facial en Hamaca en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
