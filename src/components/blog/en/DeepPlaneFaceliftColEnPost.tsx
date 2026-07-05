'use client';

import React from 'react';
import Link from 'next/link';

export default function DeepPlaneFaceliftColEnPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hello and welcome. I just had my morning coffee and prayed for guidance to explain to you why so many international patients choose Bogotá, Colombia for their deep plane facelift.
        </p>
        
        <p className="mb-6">
          In recent years, Colombia has emerged as a world-class hub for advanced plastic surgery. Patients from the U.S. and Canada travel here to receive top-tier, board-certified care at a fraction of the cost.
        </p>
      </div>

      <h2 id="why-colombia" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Why choose Bogotá for your Deep Plane Facelift?
      </h2>
      <p className="mb-6">
        Bogotá is home to highly accredited, state-of-the-art medical facilities. Dr. Andrés Pérez Nieto combines over 30 years of surgical experience with prestigious international training:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 font-sansation">
        <li><strong>U.S. Training:</strong> Fellow observer in aesthetic facial surgery at the University of Illinois (Chicago) and Manhattan Eye & Ear Hospital (New York).</li>
        <li><strong>Familiarity with U.S. standards:</strong> We understand the exact quality and safety standards that North American patients expect.</li>
      </ul>

      <h2 id="deep-plane" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        The Deep Plane Facelift advantage
      </h2>
      <p className="mb-6">
        Unlike traditional facelifts that pull the skin and create a tight, artificial look, the **Deep Plane Facelift** lifts the deep muscle layer (SMAS) without tension. This technique repositions the deep tissues of the cheeks, jawline, and neck, restoring a youthful facial structure that looks completely natural.
      </p>

      <h2 id="travel" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Safety and Logistics
      </h2>
      <p className="mb-6">
        We offer a complete concierge service for international patients: virtual consultations, translation services, private recovery houses, and medical checkups before you fly back. Learn more on our{' '}
        <Link href="/es/procedimientos/lifting-facial-hamaca" className="text-blue-500 hover:underline font-semibold">
          facelift procedure in Bogota
        </Link>{' '}
        page.
      </p>
    </>
  );
}
