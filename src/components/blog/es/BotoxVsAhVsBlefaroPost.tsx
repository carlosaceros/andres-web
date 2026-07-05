'use client';

import React from 'react';
import Link from 'next/link';

export default function BotoxVsAhVsBlefaroPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hola, bienvenido. Ya tomé mi tintico de la mañana y elevé mi oración diaria para poder aconsejarte hoy con total honestidad sobre el rejuvenecimiento de la mirada.
        </p>
        
        <p className="mb-6">
          Cuando una persona nota cansancio en los ojos, arrugas o flacidez, suele preguntarse: <strong>¿necesito botox, ácido hialurónico o una cirugía de párpados (blefaroplastia)?</strong>. Cada tratamiento tiene indicaciones anatómicas muy distintas.
        </p>
      </div>

      <h2 id="botox" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        1. Toxina Botulínica (Botox): Para arrugas de movimiento
      </h2>
      <p className="mb-6">
        El botox relaja temporalmente los músculos dinámicos. Es el tratamiento ideal para tratar las llamadas &quot;patas de gallo&quot; y elevar sutilmente la cola de la ceja al relajar el músculo orbicular.
      </p>
      <p className="mb-6">
        <strong>Límites:</strong> No elimina el exceso de piel colgante ni las bolsas de grasa del párpado inferior.
      </p>

      <h2 id="acido-hialuronico" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        2. Ácido Hialurónico: Para rellenar el surco de la ojera
      </h2>
      <p className="mb-6">
        Los rellenos inyectables devuelven el volumen perdido en la zona de la ojera (surco lagrimal), disimulando el aspecto de cansancio.
      </p>
      <p className="mb-6">
        <strong>Límites:</strong> Si tienes bolsas de grasa prominentes, inyectar relleno encima puede empeorar el problema o causar retención de líquidos (edema).
      </p>

      <h2 id="blefaroplastia" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        3. Blefaroplastia: La solución definitiva a las bolsas y piel sobrante
      </h2>
      <p className="mb-6">
        Es un procedimiento quirúrgico definitivo. Elimina físicamente la piel encapotada superior y retira o reposiciona las bolsas de grasa inferiores. Te invito a explorar nuestra página sobre la{' '}
        <Link href="/es/procedimientos/blefaroplastia" className="text-blue-500 hover:underline font-semibold">
          cirugía de párpados en Bogotá
        </Link>{' '}
        para entender los detalles de la recuperación.
      </p>
    </>
  );
}
