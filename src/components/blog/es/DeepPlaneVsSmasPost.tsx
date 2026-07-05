'use client';

import React from 'react';
import Link from 'next/link';

export default function DeepPlaneVsSmasPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenidos a este rincón. Qué bueno tenerlos por acá. Como es habitual en mi consulta, me acabo de tomar mi tintico y puse en manos de Dios nuestro día y nuestro conocimiento a través de una oración, para poder transmitirles esta información técnica de la manera más sencilla, humana y transparente posible.
        </p>
        
        <p className="mb-6">
          Si estás investigando sobre rejuvenecimiento facial en Bogotá o Colombia, seguramente te has tropezado con términos como <strong>Deep Plane Facelift</strong>, <strong>Lifting SMAS</strong> y <strong>Mini Lifting</strong>. Es totalmente normal que te sientas abrumada ante tanta terminología técnica y comercial.
        </p>

        <div className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900">
          &quot;El rejuvenecimiento de la cara no consiste en estirar la piel. El secreto del éxito y de un resultado natural radica en cómo tratamos las estructuras profundas que sostienen el rostro.&quot;
        </div>
      </div>

      <h2 id="que-es-smas" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        1. Lifting SMAS Tradicional: ¿En qué consiste?
      </h2>
      <p className="mb-6">
        El SMAS (Sistema Músculo-Aponeurótico Superficial) es la capa fibromuscular que cubre los músculos profundos del rostro. En la técnica de lifting SMAS tradicional, el cirujano levanta la piel, llega a esta capa muscular y la &quot;pliega&quot; o tensiona utilizando puntos de sutura para fijarla a estructuras óseas inmóviles cerca de la oreja.
      </p>
      <p className="mb-6">
        <strong>Ventajas:</strong> Es una técnica muy probada y segura que ofrece excelentes resultados en pacientes con flacidez moderada.
      </p>
      <p className="mb-6">
        <strong>Limitaciones:</strong> Al no liberar los ligamentos de retención profundos del rostro, la tensión puede transmitirse parcialmente a la piel, lo que en algunos casos genera un aspecto de tracción horizontal (el temido rostro &quot;jalado&quot; o artificial) y suele tener una menor duración a lo largo de los años.
      </p>

      <h2 id="que-es-deep-plane" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        2. Deep Plane Facelift: La revolución de la naturalidad
      </h2>
      <p className="mb-6">
        El <strong>Deep Plane Facelift</strong> (Lifting en Plano Profundo) es considerado el &quot;Gold Standard&quot; o estándar de oro moderno en cirugía de rejuvenecimiento facial. A diferencia de la técnica tradicional, el cirujano ingresa por debajo de la capa del SMAS, liberando los ligamentos naturales que anclan los músculos a los huesos faciales.
      </p>
      <p className="mb-6">
        Al liberar estos ligamentos, toda la estructura muscular y grasa caída de las mejillas, la mandíbula y el cuello se desplaza libremente hacia arriba de forma vertical. <strong>No hay tensión sobre la piel.</strong> La piel simplemente acompaña el movimiento y se recorta el excedente sin traccionarla.
      </p>
      <p className="mb-6">
        <strong>Ventajas:</strong>
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
        <li>Resultados 100% naturales: la expresión mímica se mantiene intacta, evitando el &quot;efecto acordeón&quot; artificial.</li>
        <li>Mayor duración: al reposicionar los tejidos profundos y liberar los anclajes, el resultado puede durar de 10 a 15 años.</li>
        <li>Excelente manejo del cuello y la línea mandibular (jowls).</li>
      </ul>

      <h2 id="que-es-mini-lifting" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        3. Mini Lifting: ¿Para quién es?
      </h2>
      <p className="mb-6">
        El Mini Lifting es una versión simplificada del estiramiento facial, caracterizada por incisiones más cortas (usualmente limitadas a la zona delante de la oreja) y una disección de tejidos más pequeña.
      </p>
      <p className="mb-6">
        <strong>Indicación ideal:</strong> Pacientes jóvenes (entre 35 y 45 años) que presentan signos muy tempranos de flacidez en el tercio medio de la cara y no requieren corregir el cuello. Es una cirugía de mantenimiento preventivo, no una solución definitiva para el envejecimiento avanzado.
      </p>

      <h2 id="tabla-comparativa" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Tabla Comparativa: Deep Plane vs. SMAS vs. Mini Lifting
      </h2>
      <div className="overflow-x-auto my-6 font-sansation">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-3 border border-gray-200">Característica</th>
              <th className="p-3 border border-gray-200">Deep Plane</th>
              <th className="p-3 border border-gray-200">SMAS Tradicional</th>
              <th className="p-3 border border-gray-200">Mini Lifting</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="p-3 border border-gray-200 font-bold">Plano de trabajo</td>
              <td className="p-3 border border-gray-200">Sub-SMAS (Plano profundo)</td>
              <td className="p-3 border border-gray-200">Supra-SMAS con plicatura</td>
              <td className="p-3 border border-gray-200">Supra-SMAS limitado</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="p-3 border border-gray-200 font-bold">Liberación de ligamentos</td>
              <td className="p-3 border border-gray-200">Sí (Clave para la naturalidad)</td>
              <td className="p-3 border border-gray-200">No</td>
              <td className="p-3 border border-gray-200">No</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200 font-bold">Tensión en piel</td>
              <td className="p-3 border border-gray-200">Nula (Resultado natural)</td>
              <td className="p-3 border border-gray-200">Baja a Moderada</td>
              <td className="p-3 border border-gray-200">Baja</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="p-3 border border-gray-200 font-bold">Duración estimada</td>
              <td className="p-3 border border-gray-200">10 a 15 años</td>
              <td className="p-3 border border-gray-200">5 a 8 años</td>
              <td className="p-3 border border-gray-200">2 a 4 años</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200 font-bold">Candidato ideal</td>
              <td className="p-3 border border-gray-200">Flacidez moderada a severa (45+ años)</td>
              <td className="p-3 border border-gray-200">Flacidez moderada (45-55 años)</td>
              <td className="p-3 border border-gray-200">Flacidez leve / Preventivo (35-45 años)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="decision" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Cómo saber cuál técnica necesitas?
      </h2>
      <p className="mb-6">
        No existe una técnica única superior para todos los casos; la mejor cirugía es la que se adapta a tu anatomía y grado de envejecimiento. Si buscas un cambio estructural profundo, duradero y con una expresión totalmente fresca y natural, la técnica Deep Plane es insuperable.
      </p>
      <p className="mb-6">
        Te invito a conocer más sobre nuestra técnica quirúrgica signature en la sección de{' '}
        <Link href="/es/procedimientos/lifting-facial-hamaca" className="text-blue-500 hover:underline font-semibold">
          Lifting Facial en Hamaca en Bogotá
        </Link>
        , donde combinamos el plano profundo con vectores de elevación en hamaca para dar un soporte extraordinario al cuello.
      </p>
    </>
  );
}
