'use client';

import React from 'react';
import Link from 'next/link';

export default function QueEsRealmenteDeepPlanePost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola a todos, qué alegría saludarlos nuevamente en este espacio de la Academia Dr. Face. Hoy, como ya es costumbre en nuestras mañanas en el Santa Ana Medical Center de Bogotá, iniciamos el día compartiendo un tintico caliente con el equipo de trabajo y elevamos nuestra oración de la mañana para pedir que la sabiduría de Dios guíe cada decisión médica y quirúrgica en favor de la salud de quienes confían en nosotros.
        </p>
        
        <p className="mb-6">
          Hoy quiero desmitificar y aclarar uno de los términos más populares y, a la vez, menos comprendidos en la cirugía estética actual: <strong>¿qué significa realmente un Deep Plane Facelift o Lifting de Plano Profundo?</strong> Con el auge de las redes sociales, este término se utiliza con ligereza, pero detrás de él hay una técnica de alta precisión anatómica que redefine por completo la longevidad y la naturalidad del rejuvenecimiento facial.
        </p>

        <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
          &quot;No estiro rostros. Restauro el sistema de soporte facial.&quot;
        </blockquote>
      </div>

      <h2 id="que-es" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué es el plano profundo o Deep Plane en anatomía facial?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        El plano profundo o Deep Plane es el espacio anatómico natural que existe por debajo del Sistema Músculo-Aponeurótico Superficial (SMAS) y los músculos de la mímica, cuya disección permite movilizar en bloque la grasa y la musculatura caída sin tensionar la piel.
      </p>
      <p className="mb-6">
        La técnica original, descrita por el doctor Sam Hamra en 1990 en su publicación clásica en <em>Plastic and Reconstructive Surgery</em>, revolucionó la cirugía plástica al demostrar que no es necesario separar la piel de los músculos para levantarlos. En lugar de eso, entramos debajo del SMAS en la zona media del rostro, liberando los anclajes rígidos y reposicionando todo el bloque muscular. Esto evita el estiramiento agresivo de la piel y elimina el riesgo de cicatrices ensanchadas o marcas visibles.
      </p>

      <h2 id="beneficios" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Cuáles son las diferencias entre el Deep Plane y el lifting clásico?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        A diferencia de los liftings clásicos que tensionan la piel de forma horizontal, el Deep Plane Facelift libera por completo los ligamentos profundos cigomáticos y masetéricos para elevar verticalmente los tejidos caídos, garantizando un contorno mandibular limpio y un cuello sumamente rejuvenecido.
      </p>
      <p className="mb-6">
        En las técnicas tradicionales de SMAS, el cirujano estira la piel lateralmente y cose el músculo superficialmente. Esto genera una tensión constante en la piel que deforma la boca al sonreír y causa el estigma de cara &quot;operada&quot;. En el Deep Plane, al disecar y liberar los ligamentos retenedores descritos en la literatura médica de StatPearls (2023), la musculatura se desliza verticalmente sin resistencia, y la piel simplemente descansa sobre su nuevo soporte de forma relajada y natural.
      </p>

      <div className="my-8 max-w-xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-blue-950">
          <video 
            controls 
            playsInline 
            className="w-full h-full object-cover"
            poster="/images/todos/toma.webp"
          >
            <source src="/images/videos/Miniliftingdeepplane.mp4" type="video/mp4" />
            <source src="/images/videos/Miniliftingdeepplane.webm" type="video/webm" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          Video explicativo: Dr. Andrés Pérez Nieto explica el abordaje en plano profundo para un contorno mandibular limpio.
        </p>
      </div>

      <h2 id="candidatos" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Por qué el Deep Plane ofrece resultados más duraderos?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        Al reposicionar las estructuras musculares profundas y liberar los ligamentos retenedores caídos, el soporte estructural del rostro se restablece de forma sólida y totalmente fisiológica. Esto permite prolongar la duración y estabilidad de los resultados estéticos por un periodo estimado de 10 a 12 años.
      </p>
      <p className="mb-6">
        La piel tiene memoria elástica y cede rápidamente si se la somete a tensión (lo que explica por qué los miniliftings superficiales pierden su efecto en pocos meses). En cambio, los tejidos musculares suspendidos y fijados en el plano profundo se adhieren firmemente a su nueva posición durante el proceso de cicatrización interno. Esto detiene el reloj del envejecimiento facial de manera estructural, permitiendo que el rostro envejezca a partir de allí de forma digna y sumamente natural.
      </p>

      <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
        &quot;La cirugía más bella es aquella que nadie identifica como cirugía.&quot;
      </blockquote>

      <hr className="my-10 border-gray-200" />

      <div className="bg-gray-100 p-8 rounded-3xl font-sansation">
        <h3 className="font-prototype text-lg text-blue-950 mb-4">Referencias Científicas (Cibergrafía)</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>
            <strong>[1] Hamra ST.</strong> <em>The deep-plane rhytidectomy.</em> Plastic and Reconstructive Surgery. 1990 Jul;86(1):53-61. DOI: <a href="https://doi.org/10.1097/00006534-199007000-00009" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">10.1097/00006534-199007000-00009</a>. PMID: 2356277.
          </li>
          <li>
            <strong>[2] Raggio BS, Patel BC.</strong> <em>Deep Plane Facelift.</em> StatPearls Publishing. 2023 Jan. PMID: 31536277. Available at: <a href="https://www.ncbi.nlm.nih.gov/books/NBK545277/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">NCBI Bookshelf</a>.
          </li>
          <li>
            <strong>[3] Jacono A, et al.</strong> <em>A prospective, randomized, double-blinded comparison of superficial musculoaponeurotic system plication vs deep plane facelift.</em> Aesthetic Surgery Journal. 2020. PMID: 32866975.
          </li>
        </ul>
      </div>
    </>
  );
}
