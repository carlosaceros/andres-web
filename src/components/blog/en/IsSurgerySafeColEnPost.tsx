'use client';

import React from 'react';
import Link from 'next/link';

export default function IsSurgerySafeColEnPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hello and welcome. I just had my morning coffee and prayed for guidance to address the number one question of international patients: Is plastic surgery in Colombia safe?
        </p>
        
        <p className="mb-6">
          It is completely normal to feel concerned about traveling abroad for surgery. Today, I want to share honest, facts-based medical advice to help you verify safety standards and make a secure decision.
        </p>
      </div>

      <h2 id="accreditation" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        1. Verifying Board Certification
      </h2>
      <p className="mb-6">
        Never get surgery with an unaccredited doctor. In Colombia, you must verify that your surgeon:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 font-sansation">
        <li>Is registered in the **RETHUS** database (the official registry of medical professionals in Colombia).</li>
        <li>Is a certified member of the **Sociedad Colombiana de Cirugía Plástica (SCCP)**.</li>
      </ul>

      <h2 id="facilities" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        2. High-Complexity Accredited Clinics
      </h2>
      <p className="mb-6">
        Always ask where your surgery will be performed. Safe surgery must be done in fully licensed, high-complexity surgical clinics authorized by the Ministry of Health, never in private offices or residential houses.
      </p>

      <h2 id="risks" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        3. Clear Risk Communication
      </h2>
      <p className="mb-6">
        An honest surgeon will explain the limitations and potential risks of your surgery based on your medical history, rather than promising 100% perfect, risk-free results. If you want to check my board credentials or read about my 30-year trajectory, please visit the{' '}
        <Link href="/es/conoce-doctor" className="text-blue-500 hover:underline font-semibold">
          meet the doctor page
        </Link>
        .
      </p>
    </>
  );
}
