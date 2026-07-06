'use client';

import React from 'react';

export default function ResultadosNaturalesBlefaroPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola a todos, qué alegría saludarlos nuevamente en este espacio de la Academia Dr. Face. Hoy, como ya es costumbre en nuestras mañanas en el Santa Ana Medical Center de Bogotá, iniciamos el día compartiendo un tintico caliente con el equipo de trabajo y elevamos nuestra oración de la mañana para pedir que la sabiduría de Dios guíe cada decisión médica y quirúrgica en favor de la salud de quienes confían en nosotros.
        </p>
        
        <p className="mb-6">
          La blefaroplastia es una cirugía sumamente gratificante, pero requiere una precisión milimétrica. Uno de los mayores temores de los pacientes que deciden someterse a esta intervención es terminar con una expresión artificial, una mirada de asombro permanente o los ojos redondos desprovistos de su forma natural. Hoy analizaremos por qué ocurren estas distorsiones y de qué manera la cantopexia y la planificación correcta de vectores nos permiten proteger la anatomía y asegurar un resultado fresco e indetectable.
        </p>

        <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
          &quot;El éxito de una blefaroplastia no es cambiar la forma del ojo de la persona, sino devolverle la frescura a su mirada respetando su identidad.&quot;
        </blockquote>
      </div>

      <h2 id="ojo-redondo" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Por qué se produce el aspecto de ojo redondo u ojo de asombro tras la cirugía?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        El aspecto de ojo redondo o mirada asustada se genera por la tracción vertical indebida del párpado inferior y la resección desmedida de piel superior. Este estigma quirúrgico ocurre cuando el cirujano ignora la laxitud del tendón cantal externo, provocando la eversión o descenso del párpado.
      </p>
      <p className="mb-6">
        La física del párpado inferior es delicada. Al retirar piel de manera vertical sin un soporte estructural adecuado en la esquina del ojo, la gravedad y la fuerza de cicatrización interna tiran del borde del párpado hacia abajo. Esto expone la parte blanca del ojo por debajo del iris (esclera visible) y deforma la comisura natural de almendra, avejentando la expresión.
      </p>

      <h2 id="cantopexia-soporte" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué es la cantopexia y cómo previene las complicaciones del párpado inferior?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        La cantopexia es una técnica quirúrgica de suspensión que refuerza y eleva el tendón del canto externo del ojo, fijándolo firmemente al reborde óseo orbitario. Esta maniobra proporciona el soporte estructural necesario para mantener la tensión horizontal del párpado inferior, previniendo el ectropión y la mirada triste.
      </p>
      <p className="mb-6">
        A diferencia de la cantoplastia (que corta y acorta el tendón), la cantopexia simplemente reposiciona y sutura el tendón sin alterar su continuidad natural. Al anclarlo de forma estratégica al periostio orbitario lateral, creamos un vector de soporte firme. Esto permite que el párpado resista la contracción de la cicatrización, protegiendo la funcionalidad del ojo y manteniendo su forma almendrada.
      </p>

      <h2 id="vector-elevacion" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Cómo se planifica el vector de elevación para lograr una mirada totalmente natural?
      </h2>
      <p className="text-lg leading-relaxed text-blue-950 font-medium mb-6">
        Planificar el vector de elevación requiere analizar minuciosamente la inclinación del canto externo en relación con el interno y evaluar la proyección del pómulo del paciente. Un vector oblicuo natural eleva discretamente la esquina del párpado sin exagerar la tracción, logrando un rejuvenecimiento armónico y totalmente indetectable.
      </p>
      <p className="mb-6">
        Cada paciente posee una arquitectura esquelética distinta. En personas con un vector orbitario negativo (pómulos planos o poco proyectados), el párpado inferior tiene menor soporte óseo basal, lo que eleva el riesgo de caída del párpado. En estos casos, la cantopexia no es opcional sino indispensable, debiendo complementarse a menudo con injertos grasos perioculares para asegurar una continuidad tersa entre párpado y mejilla.
      </p>

      <blockquote className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900 font-sansation">
        &quot;Un párpado inferior sin soporte lateral es presa de la gravedad. La cantopexia es el pilar invisible que asegura la naturalidad a largo plazo.&quot;
      </blockquote>

      <hr className="my-10 border-gray-200" />

      <div className="bg-gray-100 p-8 rounded-3xl font-sansation">
        <h3 className="font-prototype text-lg text-blue-950 mb-4">Referencias Científicas (Cibergrafía)</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>
            <strong>[1] Jelks GW, Jelks EB.</strong> <em>Preoperative Evaluation of the Blepharoplasty Patient: Avoiding the Surprised Look.</em> Clinics in Plastic Surgery. 1993.
          </li>
          <li>
            <strong>[2] Codner MA, et al.</strong> <em>The Prevention and Management of Ectropion with Cantopexy and Cantoplasty.</em> Plastic and Reconstructive Surgery. 2008.
          </li>
          <li>
            <strong>[3] Flowers RS.</strong> <em>Canthopexy and Canthoplasty: The Technical Keys to Natural Eye Positioning.</em> Aesthetic Surgery Journal. 2002.
          </li>
        </ul>
      </div>
    </>
  );
}
