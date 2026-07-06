'use client';

import React from 'react';

export default function EnvejecimientoOjosPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola a todos, qué alegría saludarlos nuevamente en este espacio de la Academia Dr. Face. Hoy, como ya es costumbre en nuestras mañanas en el Santa Ana Medical Center de Bogotá, iniciamos el día compartiendo un tintico caliente con el equipo de trabajo y elevamos nuestra oración de la mañana para pedir que la sabiduría de Dios guíe cada decisión médica y quirúrgica en favor de la salud de quienes confían en nosotros.
        </p>
        
        <p className="mb-6">
          Los ojos son la ventana del alma y, al mismo tiempo, el primer punto de nuestro rostro en reflejar los signos del cansancio y del envejecimiento. A menudo pensamos que las bolsas y la flacidez son problemas exclusivos de la madurez, pero la realidad anatómica es que el área periocular experimenta cambios estructurales mucho antes de lo que imaginas. Hoy analizaremos cómo la pérdida de soporte, la atrofia grasa y la diferenciación clínica entre problemas musculares y de piel son claves para un diagnóstico exitoso.
        </p>

        <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
          &quot;Una mirada cansada casi nunca es por falta de sueño, sino por la pérdida de volumen y el descenso de las estructuras perioculares.&quot;
        </blockquote>
      </div>

      <h2 id="primeros-signos" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Cuáles son los primeros signos del envejecimiento periorbital?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        El envejecimiento de la mirada se inicia con una sutil pérdida de volumen periorbital, la aparición de finas arrugas dinámicas y un aspecto de mirada cansada. Estos cambios tempranos suelen manifestarse antes de cumplir los treinta años, afectando significativamente la expresión de vitalidad de nuestro rostro.
      </p>
      <p className="mb-6">
        Con el paso del tiempo, la delgada piel de los párpados pierde colágeno y elastina de forma acelerada. Esto, sumado al movimiento constante del músculo orbicular de los ojos al sonreír o gesticular, da lugar a las llamadas &quot;patas de gallo&quot;. Simultáneamente, se produce la reabsorción del compartimento graso suborbicular, acentuando la cuenca de los ojos y el surco de las lágrimas.
      </p>

      <h2 id="ptosis-vs-dermatocalasis" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Cuál es la diferencia real entre ptosis palpebral y dermatocalasis?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        La dermatocalasis consiste en el exceso de piel flácida en el párpado superior que cuelga sobre las pestañas, mientras que la ptosis palpebral es la caída del borde del párpado debido a la debilidad del músculo elevador. Distinguir ambas condiciones es crucial para definir el tratamiento correcto.
      </p>
      <p className="mb-6">
        La dermatocalasis es principalmente un problema cutáneo que se resuelve resecando el exceso de piel con una blefaroplastia convencional. Por el contrario, la ptosis es un problema funcional y muscular que requiere reparar o acortar la aponeurosis del músculo elevador del párpado superior. Confundir estas condiciones puede llevar a una cirugía ineficaz o a retirar piel de forma excesiva sin corregir la caída real del párpado.
      </p>

      <h2 id="perdida-volumen" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Por qué la pérdida de volumen acentúa el aspecto de cansancio ocular?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        La atrofia de la grasa periocular y la reabsorción ósea de la órbita crean sombras oscuras y surcos profundos alrededor de los ojos. Este vacío estructural refleja menos luz, proyectando una apariencia de cansancio crónico y vejez que no desaparece únicamente descansando o aplicando cremas cosméticas superficiales.
      </p>
      <p className="mb-6">
        El tratamiento moderno del envejecimiento ocular no busca simplemente &quot;vaciar&quot; los párpados eliminando bolsas grasas, sino preservar y redistribuir los tejidos. El reposicionamiento de la grasa palpebral y la inyección de microinjertos grasos ricos en células madre en el surco lagrimal restauran el volumen perdido, eliminando las sombras oscuras y devolviendo la frescura de manera natural.
      </p>

      <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
        &quot;El rejuvenecimiento de la mirada exige entender la frontera entre lo estético cutáneo y lo funcional muscular.&quot;
      </blockquote>

      <hr className="my-10 border-gray-200" />

      <div className="bg-gray-100 p-8 rounded-3xl font-sansation">
        <h3 className="font-prototype text-lg text-blue-950 mb-4">Referencias Científicas (Cibergrafía)</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>
            <strong>[1] Goldberg RA.</strong> <em>The Anatomy of the Periorbital Area and its Aging Process.</em> Facial Plastic Surgery Clinics. 2015.
          </li>
          <li>
            <strong>[2] Fagien S.</strong> <em>Eyebrow and Eyelid Rejuvenation: Distinguishing Ptosis from Dermatochalasis.</em> Plastic and Reconstructive Surgery. 2018.
          </li>
          <li>
            <strong>[3] Lambros V.</strong> <em>Volumetric Changes of the Aging Face and the Role of Fat Preservation Blepharoplasty.</em> Aesthetic Surgery Journal. 2020.
          </li>
        </ul>
      </div>
    </>
  );
}
