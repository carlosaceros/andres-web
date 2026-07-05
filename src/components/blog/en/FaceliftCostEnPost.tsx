'use client';

import React from 'react';
import Link from 'next/link';

export default function FaceliftCostEnPost() {
  return (
    <>
      <div id="introduccion" className="scroll-mt-32">
        <p className="text-xl leading-relaxed text-blue-950 font-medium mb-6">
          Hello and welcome. Before we dive into the numbers, as is my morning ritual, I have enjoyed my warm cup of Colombian coffee (our beloved &quot;tintico&quot;) and offered a prayer to guide this discussion with honesty, science, and clarity.
        </p>
        
        <p className="mb-6">
          If you are considering a surgical facial rejuvenation to restore a youthful, rested look, you are probably asking: <strong>How much does a facelift cost in Colombia compared to the USA in 2026?</strong>. While cost is an important factor, ensuring you receive world-class care and a natural-looking result is paramount.
        </p>

        <div className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl my-6 italic text-blue-900">
          &quot;In plastic surgery, safety and natural results are non-negotiable. Rejuvenating the face is not about stretching the skin; it is about restoring the deep muscle structures and ligaments of the face.&quot;
        </div>
      </div>

      <h2 id="comparison" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Facelift Cost Comparison: Colombia vs. USA
      </h2>
      <p className="mb-6">
        Travelling to Bogotá, Colombia for a facelift offers premium medical quality at a fraction of the cost in North America. Here is a realistic breakdown of the price differences:
      </p>

      <div className="overflow-x-auto my-6 font-sansation">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-3 border border-gray-200">Procedure Details</th>
              <th className="p-3 border border-gray-200">United States / Canada</th>
              <th className="p-3 border border-gray-200">Bogotá, Colombia</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="p-3 border border-gray-200 font-bold">Deep Plane Facelift</td>
              <td className="p-3 border border-gray-200">$15,000 - $30,000 USD</td>
              <td className="p-3 border border-gray-200">$5,500 - $8,500 USD</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="p-3 border border-gray-200 font-bold">SMAS Facelift</td>
              <td className="p-3 border border-gray-200">$10,000 - $18,000 USD</td>
              <td className="p-3 border border-gray-200">$4,500 - $6,500 USD</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200 font-bold">What is Included?</td>
              <td className="p-3 border border-gray-200">Often surgical fees only (anesthesia & OR extra)</td>
              <td className="p-3 border border-gray-200">All-inclusive (OR, Anesthesiologist, Post-op checks)</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="p-3 border border-gray-200 font-bold">Average Savings</td>
              <td className="p-3 border border-gray-200">Baseline Price</td>
              <td className="p-3 border border-gray-200"><strong>Save 60% to 70%</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="why-cheaper" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Why is the cost lower in Colombia without sacrificing quality?
      </h2>
      <p className="mb-6">
        Many international patients worry that lower prices imply lower quality. In Colombia, this is not the case. The difference in price is driven entirely by economic factors:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
        <li><strong>Lower cost of living:</strong> Rent, salaries, insurance, and facility maintenance cost significantly less in Colombia than in the USA.</li>
        <li><strong>Favorable exchange rate:</strong> The exchange rate between the USD and the Colombian Peso (COP) gives international travelers strong purchasing power.</li>
        <li><strong>Highly competitive hub:</strong> Bogotá is a global hub for plastic surgery. To stand out, clinics maintain top-tier infrastructure and competitive pricing.</li>
      </ul>

      <h2 id="safety" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Safety Standards: Credentials You Can Trust
      </h2>
      <p className="mb-6">
        When traveling abroad, credentials are your shield. Dr. Andrés Pérez Nieto offers a unique bridge of trust for North American patients:
      </p>
      <ul className="space-y-4 mb-6 pl-6 border-l-2 border-blue-200 font-sansation">
        <li>
          <strong className="text-blue-950 block">U.S. Training & Fellowships:</strong> Dr. Pérez completed observer fellowships in facial aesthetic surgery at the <strong>University of Illinois (Chicago)</strong> and the world-renowned <strong>Manhattan Eye & Ear Hospital (New York City)</strong>.
        </li>
        <li>
          <strong className="text-blue-950 block">30 Years of Experience:</strong> Over three decades of surgical practice in Colombia, specializing in structural face and neck lifting.
        </li>
        <li>
          <strong className="text-blue-950 block">Board Certification:</strong> Active member of the Colombian Society of Plastic Surgery (SCCP) and ISAPS.
        </li>
      </ul>

      <h2 id="logistics" className="font-prototype text-2xl text-blue-900 mt-10 mb-4 scroll-mt-32">
        Travel Logistics for Facelift Patients
      </h2>
      <p className="mb-6">
        A facelift requires a recovery window. You cannot fly immediately after surgery due to cabin pressure and safety guidelines.
      </p>
      <p className="mb-6">
        You will need to stay in Bogotá for at least <strong>12 to 14 days</strong> post-surgery. This allows us to monitor your early recovery, remove sutures around day 7 to 10, and ensure you are fully cleared by Dr. Andrés before boarding your flight back home.
      </p>
      <p className="mb-6">
        To learn more about the deep plane suspension technique, please read our dedicated guide on{' '}
        <Link href="/en/procedimientos/lifting-facial-hamaca" className="text-blue-500 hover:underline font-semibold">
          Facelift in Bogotá
        </Link>
        .
      </p>
    </>
  );
}
