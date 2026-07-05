'use client';

import React from 'react';
import Link from 'next/link';

export default function PrecioLiftingPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenidos a este artículo informativo. Me acabo de tomar mi tintico para iniciar y, como siempre, encomendé mi trabajo en una oración sincera para poder brindarles información transparente y honesta sobre los costos de un estiramiento facial.
        </p>
        
        <p className="mb-6">
          Si estás investigando sobre rejuvenecimiento facial, una de tus principales preguntas lógicamente será: <strong>¿cuánto cuesta un lifting facial en Bogotá en 2026?</strong>. Al igual que con cualquier procedimiento quirúrgico premium, el costo varía según las técnicas aplicadas y las necesidades anatómicas del paciente.
        </p>

        <div className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900">
          &quot;Un lifting facial es una inversión en tu seguridad, tu autoimagen y tu tranquilidad. Priorizar el costo más barato en cirugías complejas de rostro suele ser un grave error clínico.&quot;
        </div>
      </div>

      <h2 id="factores" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Qué determina el precio de un lifting facial?
      </h2>
      <p className="mb-6">
        El presupuesto final de una ritidectomía o estiramiento en Colombia se conforma de varios factores clave:
      </p>
      
      <ul className="space-y-4 mb-6 pl-6 border-l-2 border-blue-200 font-sansation">
        <li>
          <strong className="text-blue-950 block">Técnica quirúrgica:</strong> Un Mini Lifting es más rápido y económico que un <em>Deep Plane Facelift (plano profundo)</em>, el cual requiere liberar ligamentos profundos faciales y del cuello, consumiendo más tiempo quirúrgico.
        </li>
        <li>
          <strong className="text-blue-950 block">Procedimientos asociados:</strong> Frecuentemente combinamos el lifting con blefaroplastia (párpados), elevación de cejas o lipofilling facial para restaurar los volúmenes del rostro de forma armónica.
        </li>
        <li>
          <strong className="text-blue-950 block">Gastos hospitalarios y anestesia:</strong> El alquiler de quirófano en clínicas acreditadas de alta complejidad y la presencia de un anestesiólogo certificado garantizan tu seguridad.
        </li>
      </ul>

      <h2 id="precios" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Rangos de precios estimados en Bogotá (2026)
      </h2>
      <p className="mb-6">
        A nivel de referencia honesta, los rangos de precios en nuestro consultorio oscilan entre:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8 font-sansation">
        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 shadow-sm text-center">
          <h4 className="font-prototype text-base text-blue-950 mb-2">Rangos en Colombia</h4>
          <span className="text-2xl font-bold text-blue-900 block my-2">18,000,000 - 35,000,000 COP</span>
          <p className="text-xs text-gray-500">
            Varía según la técnica (SMAS, Deep Plane, Hamaca) y si se combinan párpados o grasa con células madre.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
          <h4 className="font-prototype text-base text-blue-950 mb-2">Comparativa Internacional (EE.UU.)</h4>
          <span className="text-2xl font-bold text-gray-700 block my-2">5,500 - 8,500 USD</span>
          <p className="text-xs text-gray-500">
            En EE.UU. o Canadá, un Deep Plane Facelift oscila entre los $15,000 y $30,000 USD. El ahorro en Colombia es de hasta un 70%.
          </p>
        </div>
      </div>

      <h2 id="valoracion" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        ¿Cómo obtener tu cotización?
      </h2>
      <p className="mb-6">
        La única manera responsable de entregarte una cotización es realizando una valoración médica. Analizaremos tu rostro, la calidad de tu piel y tus expectativas. Te invitamos a agendar una cita. Si quieres conocer más sobre nuestra técnica firma, lee la sección de{' '}
        <Link href="/es/procedimientos/lifting-facial-hamaca" className="text-blue-500 hover:underline font-semibold">
          lifting facial en hamaca en Bogotá
        </Link>
        .
      </p>
    </>
  );
}
