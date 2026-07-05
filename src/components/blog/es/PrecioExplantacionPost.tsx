'use client';

import React from 'react';
import Link from 'next/link';

export default function PrecioExplantacionPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenidos a este artículo informativo. Me acabo de tomar mi tintico para iniciar y, como siempre, encomendé mi trabajo en una oración sincera para poder brindarles información transparente y honesta sobre un tema crucial: los costos del retiro de implantes.
        </p>
        
        <p className="mb-6">
          Si estás considerando retirar tus implantes, una de tus principales preguntas lógicamente será: <strong>¿cuánto cuesta una explantación mamaria en Bogotá en 2026?</strong>. Es fundamental entender que el precio no es una cifra estandarizada, ya que depende de la complejidad quirúrgica de cada caso.
        </p>

        <div className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900">
          &quot;En cirugía plástica, el precio nunca debe ser el único factor de decisión. La seguridad del quirófano, la experiencia del cirujano y la minuciosidad de la técnica son las que protegen tu salud y tu vida.&quot;
        </div>
      </div>

      <h2 id="factores" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Factores que determinan el costo de la explantación mamaria
      </h2>
      <p className="mb-6">
        El presupuesto de una cirugía de retiro de implantes en Colombia se compone de varios elementos quirúrgicos e institucionales:
      </p>
      
      <ul className="space-y-4 mb-6 pl-6 border-l-2 border-blue-200 font-sansation">
        <li>
          <strong className="text-blue-950 block">Tipo de Capsulectomía:</strong> Si la cápsula está delgada, puede realizarse una capsulectomía parcial. Pero en casos de sospecha de rotura, siliconomas o Síndrome de ASIA, se requiere una <em>capsulectomía total en bloque (En Bloc)</em>. Esta técnica es más compleja y minuciosa, lo que incrementa el tiempo de quirófano y los honorarios.
        </li>
        <li>
          <strong className="text-blue-950 block">Necesidad de Levantamiento (Mastopexia):</strong> Al retirar el volumen del implante, la piel suele quedar flácida o caída. Para lograr un pecho estético y firme, casi siempre es necesario asociar un levantamiento mamario en el mismo procedimiento.
        </li>
        <li>
          <strong className="text-blue-950 block">Reconstrucción con Grasa (Lipotransferencia):</strong> Muchas pacientes eligen inyectar grasa de su propio cuerpo para rellenar y dar forma natural al seno tras el retiro.
        </li>
        <li>
          <strong className="text-blue-950 block">Derechos de Clínica y Anestesia:</strong> El alquiler del quirófano en clínicas de alta complejidad acreditadas y la presencia de un anestesiólogo certificado garantizan tu seguridad.
        </li>
        <li>
          <strong className="text-blue-950 block">Examen de Patología:</strong> Es obligatorio enviar las cápsulas retiradas a análisis de patología para descartar cualquier alteración celular o malignidad (como el linfoma BIA-ALCL).
        </li>
      </ul>

      <h2 id="precios" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Rangos de precios estimados en Bogotá (2026)
      </h2>
      <p className="mb-6">
        Para darte una idea clara y honesta, los rangos de precios en Bogotá para este año oscilan entre:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8 font-sansation">
        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 shadow-sm text-center">
          <h4 className="font-prototype text-base text-blue-950 mb-2">Explantación Simple a Compleja</h4>
          <span className="text-2xl font-bold text-blue-900 block my-2">14,000,000 - 25,000,000 COP</span>
          <p className="text-xs text-gray-500">
            Varía según la necesidad de capsulectomía en bloque, mastopexia y lipotransferencia de grasa autóloga.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
          <h4 className="font-prototype text-base text-blue-950 mb-2">Comparativa Internacional (EE.UU.)</h4>
          <span className="text-2xl font-bold text-gray-700 block my-2">3,500 - 6,500 USD</span>
          <p className="text-xs text-gray-500">
            En EE.UU. o Canadá, esta misma cirugía oscila entre los $10,000 y $18,000 USD. Esto representa un ahorro de hasta el 70% viajando a Colombia.
          </p>
        </div>
      </div>

      <h2 id="valoracion" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Cómo obtener un presupuesto exacto?
      </h2>
      <p className="mb-6">
        La única forma de brindarte una cotización precisa es realizando una valoración médica. Analizaremos tus antecedentes médicos, el estado de tus tejidos y tus expectativas estéticas para definir el plan de reconstrucción ideal.
      </p>
      <p className="mb-6">
        Te invitamos a agendar una cita virtual o presencial. Si deseas conocer en profundidad el paso a paso del procedimiento, te recomiendo leer nuestra sección principal de{' '}
        <Link href="/es/procedimientos/explantacion-mamaria" className="text-blue-500 hover:underline font-semibold">
          explantación mamaria en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
