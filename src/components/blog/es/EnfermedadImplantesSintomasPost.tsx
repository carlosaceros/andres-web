'use client';

import React from 'react';
import Link from 'next/link';

export default function EnfermedadImplantesSintomasPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenidos a este espacio. Como es mi costumbre antes de sentarme a escribir o entrar a quirófano, ya me tomé mi tintico caliente y elevé una oración sincera para que esta información traiga luz, paz y claridad a tu vida.
        </p>
        
        <p className="mb-6">
          La <strong>Enfermedad por Implantes Mamarios (BII, por sus siglas en inglés)</strong> o el <strong>Síndrome de ASIA</strong> (Síndrome Autoinmune/Inflamatorio Inducido por Adyuvantes) es una realidad que cada vez cobra más fuerza en la consulta médica en Bogotá. Muchas mujeres sufren durante años síntomas debilitantes y misteriosos sin encontrar una explicación, hasta que descubren la conexión con sus prótesis.
        </p>

        <div className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900">
          &quot;Entiendo perfectamente la neblina mental, la fatiga crónica y el dolor con el que muchas de ustedes cargan. No están solas, y aquí les explicaré con ciencia y honestidad qué está ocurriendo en su cuerpo.&quot;
        </div>
      </div>

      <h2 id="que-es" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué es el Síndrome de ASIA y la Enfermedad del Implante Mamario (BII)?
      </h2>
      <p className="mb-6">
        Aunque en la literatura médica se discuten como términos independientes, a nivel clínico la Enfermedad del Implante Mamario (BII) y el Síndrome de ASIA describen una reacción autoinmune e inflamatoria del organismo frente a un cuerpo extraño: en este caso, la silicona del implante.
      </p>
      <p className="mb-6">
        El cuerpo es sabio. Al introducir un implante de silicona, crea una barrera natural a su alrededor llamada cápsula. Sin embargo, en ciertas pacientes con susceptibilidad genética, la exposición prolongada a la silicona (incluso sin que el implante se haya roto) activa de forma persistente el sistema inmunológico. Esto desencadena una cascada de síntomas sistémicos inflamatorios que deterioran gravemente la calidad de vida de la paciente.
      </p>

      <h2 id="sintomas" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Los 10 síntomas más comunes de la Enfermedad de Implantes Mamarios
      </h2>
      <p className="mb-6">
        Los síntomas pueden aparecer meses o incluso muchos años después de la cirugía de aumento de senos. Los más frecuentes que reportan mis pacientes en Bogotá son:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8 font-sansation">
        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 shadow-sm">
          <h4 className="font-prototype text-sm text-blue-950 mb-2">Síntomas Cognitivos y de Energía</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            <li><strong>Neblina mental (Brain Fog):</strong> Dificultad para concentrarse o recordar palabras sencillas.</li>
            <li><strong>Fatiga crónica:</strong> Un cansancio extremo que no mejora con el sueño o el descanso.</li>
            <li><strong>Ansiedad y depresión:</strong> Cambios drásticos del estado de ánimo sin causa aparente.</li>
            <li><strong>Trastornos del sueño:</strong> Insomnio persistente y despertares cansados.</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h4 className="font-prototype text-sm text-blue-950 mb-2">Síntomas Físicos y Alérgicos</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            <li><strong>Dolor articular y muscular:</strong> Dolores similares a los de la fibromialgia.</li>
            <li><strong>Pérdida de cabello:</strong> Caída difusa y debilitamiento del folículo piloso.</li>
            <li><strong>Problemas de piel:</strong> Erupciones, resequedad extrema o alergias nuevas.</li>
            <li><strong>Molestias digestivas:</strong> Colon irritable, intolerancias alimentarias de inicio súbito.</li>
          </ul>
        </div>
      </div>

      <h2 id="diagnostico" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Cómo se diagnostica la Enfermedad por Implantes Mamarios?
      </h2>
      <p className="mb-6">
        Actualmente <strong>no existe una prueba de laboratorio única u examen diagnóstico definitivo</strong> para la BII o el Síndrome de ASIA. El diagnóstico clínico se realiza por descarte.
      </p>
      <p className="mb-6">
        Cuando una paciente llega a mi consultorio en Bogotá con estas sospechas, realizamos un examen físico minucioso y solicitamos un perfil inmunológico completo (pruebas de anticuerpos, reactivos inflamatorios como PCR, VSG, etc.) para descartar enfermedades autoinmunes clásicas como Lupus o Artritis Reumatoide. Si las pruebas resultan normales pero la paciente presenta los síntomas y lleva implantes, consideramos la BII como la causa probable de su malestar.
      </p>

      <h2 id="explantacion" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        La Explantación Mamaria como el único tratamiento efectivo
      </h2>
      <p className="mb-6">
        La única manera de frenar el estímulo inmunológico constante es retirar el agente causal. Esto se logra mediante una cirugía de <strong>explantación mamaria con capsulectomía total o en bloque (En Bloc)</strong>.
      </p>
      <p className="mb-6">
        Es vital que acudas con un cirujano plástico experimentado que entienda la técnica. Retirar el implante sin sacar la cápsula donde se depositan los microresiduos de silicona puede hacer que los síntomas persistan. Si deseas conocer cómo realizamos este procedimiento quirúrgico con estándares de excelencia, te invito a leer nuestra guía sobre{' '}
        <Link href="/es/procedimientos/explantacion-mamaria" className="text-blue-500 hover:underline font-semibold">
          explantación mamaria en Bogotá
        </Link>
        .
      </p>

      <h2 id="recuperacion" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        La Montaña Rusa del Postoperatorio y la Desintoxicación
      </h2>
      <p className="mb-6">
        Tras retirar los implantes, el proceso de curación no es lineal. Entrarás en lo que yo describo como la <em>montaña rusa del proceso inflamatorio</em> y el <em>duelo emocional por el volumen perdido</em>.
      </p>
      <p className="mb-6">
        Muchas pacientes reportan una mejoría mágica de la neblina mental y el dolor articular casi inmediatamente después de despertar de la anestesia. Sin embargo, el sistema inmunitario tarda meses en estabilizarse por completo. Habrá semanas de desintoxicación con ligeras recaídas inflamatorias antes de lograr el bienestar total. Ten paciencia, tu cuerpo se está sanando de adentro hacia afuera.
      </p>
    </>
  );
}
