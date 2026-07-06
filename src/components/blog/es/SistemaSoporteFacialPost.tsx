'use client';

import React from 'react';
import Link from 'next/link';

export default function SistemaSoporteFacialPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola a todos, un saludo muy especial desde nuestro consultorio en el Santa Ana Medical Center en Bogotá. Qué alegría poder compartir un nuevo artículo con ustedes. Hoy, antes de iniciar nuestra agenda quirúrgica, compartimos un tintico bien caliente para despertar el intelecto y pusimos el día en manos de Dios en nuestra oración matutina, pidiendo que nos brinde la destreza necesaria para esculpir resultados bellos y seguros.
        </p>
        
        <p className="mb-6">
          Hoy nos adentramos en el núcleo de mi filosofía y práctica quirúrgica: <strong>el sistema de soporte facial y la ciencia detrás del Método Hamaca®</strong>. Para entender por qué un rostro luce cansado o envejecido, debemos comprender que la cara posee una compleja arquitectura de ingeniería biológica interna. Si esta arquitectura cede, el exterior colapsa.
        </p>

        <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
          &quot;No estiro rostros. Restauro el sistema de soporte facial.&quot;
        </blockquote>
      </div>

      <h2 id="que-es" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué es el sistema de soporte facial y cómo se compone?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        El sistema de soporte facial es una compleja red anatómica tridimensional integrada por la base ósea, los ligamentos de retención, los compartimentos de grasa y el plano músculo-aponeurótico (SMAS), cuya función primordial es mantener los tejidos blandos suspendidos firmemente contra los efectos de la gravedad.
      </p>
      <p className="mb-6">
        Estudios clásicos del doctor Bryan Mendelson sobre anatomía del lifting explican que las estructuras faciales están dispuestas en capas bien delimitadas. Con el tiempo, no envejecemos porque nos sobre piel, sino porque los cimientos óseos se reabsorben y los ligamentos fibrosos que sujetan los compartimentos grasos se estiran. Cuando estos ligamentos ceden, toda la grasa de los pómulos se desplaza, causando los surcos y los descolgamientos mandibulares característicos.
      </p>

      <h2 id="beneficios" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Cómo actúa la analogía de la hamaca en el soporte profundo?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        La analogía de la hamaca ilustra de forma clara cómo, mediante vectores de tensión cruzados y estratégicos, suspendemos el músculo platisma y el SMAS profundo. Esto recrea una red elástica y biológica de soporte estructural que redefine por completo el cuello y el óvalo facial del paciente.
      </p>
      <p className="mb-6">
        Cuando colocamos una hamaca en el jardín, la fijamos a dos puntos rígidos y estables para suspender su peso central. En el rostro y cuello, hacemos exactamente lo mismo con el Método Hamaca®. Diseccionamos el plano profundo sub-SMAS para liberar las bandas del platisma, cruzamos las fibras musculares de manera bidireccional y las anclamos a las estructuras óseas y fasciales fijas detrás de la oreja. Esto levanta el cuello y la papada sin jalar la piel del rostro lateralmente.
      </p>

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
          Video explicativo: El Dr. Andrés Pérez Nieto detalla la red de suspensión del músculo platisma (efecto hamaca).
        </p>
      </div>

      <h2 id="candidatos" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué papel juegan los compartimentos grasos en esta estructura?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        Los compartimentos grasos del rostro se dividen anatómicamente en superficiales y profundos. Ambos aportan un volumen esencial y juventud tridimensional que deben ser reposicionados y restaurados quirúrgicamente mediante el facelift, evitando así que la cara adquiera un aspecto plano, artificial o carente de proyección.
      </p>
      <p className="mb-6">
        La investigación del doctor Joel Pessa y el doctor Val Lambros demuestra que la pérdida de volumen y la atrofia grasa en la región orbitaria y de las sienes acentúa el aspecto cansado y demacrado. Al reponer el soporte profundo con el lifting, asociamos a menudo el lipofilling con células madre para restaurar la proyección del pómulo y rellenar las sienes vacías. Esto equilibra las luces y sombras del rostro, devolviendo un aspecto fresco y rejuvenecido.
      </p>

      <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
        &quot;No busco que parezcas una persona diferente. Busco que vuelvas a parecer tú.&quot;
      </blockquote>

      <hr className="my-10 border-gray-200" />

      <div className="bg-gray-100 p-8 rounded-3xl font-sansation">
        <h3 className="font-prototype text-lg text-blue-950 mb-4">Referencias Científicas (Cibergrafía)</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>
            <strong>[1] Rohrich RJ, Pessa JE.</strong> <em>The fat compartments of the face: anatomy and clinical implications for cosmetic surgery.</em> Plastic and Reconstructive Surgery. 2007 Jun;119(7):2219-2227. PMID: 17519724.
          </li>
          <li>
            <strong>[2] Mendelson BC.</strong> <em>Facelift anatomy, SMAS, retaining ligaments and facial spaces.</em> In: Aesthetic Plastic Surgery of the East Asian Face. 2009. BMJ Publishing Group.
          </li>
          <li>
            <strong>[3] Silva FBR, et al.</strong> <em>Facial retention ligaments: a clinical considerations review.</em> Research, Society and Development. 2022;11(12):e45111231588. DOI: <a href="https://doi.org/10.33448/rsd-v11i12.31588" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">10.33448/rsd-v11i12.31588</a>.
          </li>
        </ul>
      </div>
    </>
  );
}
