'use client';

import React from 'react';
import Link from 'next/link';

export default function BreastExplantColEnPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hello and welcome. I just had my morning coffee and prayed for guidance to explain why U.S. and Canadian patients travel to Bogotá for breast explant surgery.
        </p>
        
        <p className="mb-6">
          Breast implant illness (BII) and systemic auto-immune symptoms have led many women to choose a permanent implant removal. Bogotá, Colombia is a leading destination for safe, board-certified explantation.
        </p>
      </div>

      <h2 id="safety" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Clinical Safety in Bogotá
      </h2>
      <p className="mb-6">
        Safety is our absolute priority. We perform all explantations in fully accredited, high-complexity clinics in Bogotá. Dr. Andrés Pérez Nieto is a board-certified member of the Colombian Society of Plastic Surgery (SCCP) and ISAPS, ensuring international safety protocols.
      </p>

      <h2 id="capsulectomy" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Total Capsulectomy & En Bloc Technique
      </h2>
      <p className="mb-6">
        For patients suffering from auto-immune symptoms, it is vital to perform a **total capsulectomy** (removing all scar tissue surrounding the implant). Whenever clinically safe and indicated, we utilize the **En Bloc** technique to remove the implant and capsule intact as a single unit, preventing any silicone leakage.
      </p>

      <h2 id="logistics" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Travel Logistics for Explantation
      </h2>
      <p className="mb-6">
        International patients need to plan a stay of 12 to 14 days in Bogotá. This allows us to perform the pre-op checkup, the surgery, remove the surgical drains between days 3 and 5, and run the final post-op clearance before you fly back. Learn more on our{' '}
        <Link href="/es/procedimientos/explantacion-mamaria" className="text-blue-500 hover:underline font-semibold">
          breast explant page
        </Link>
        .
      </p>
    </>
  );
}
