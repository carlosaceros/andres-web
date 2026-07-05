"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

export default function LiftingHamacaPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [currentPatientImages, setCurrentPatientImages] = useState([]);

  // Todas las fotos del procedimiento Lifting Hamaca - 34 pacientes con múltiples vistas cada una
  const procedureImages = [
    // 1-Sandra Ibañez
    {
      before: "/images/lifting-hamaca/galeria/SandraIbanezFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/SandraIbanezFrenteDespues.webp",
      view: "Paciente 1 - Frontal",
      patient: "Paciente 1",
      description: (
        <div>
          <p className="font-semibold mb-2">Paciente a quien se le realizaron los siguientes procedimientos:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia</li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/SandrabanezCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/SandraIbanezCuelloDespues.webp",
      view: "Paciente 1 - Perfil",
      patient: "Paciente 1",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista lateral del resultado:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia</li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/SandraIbanezLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/SandraIbanezLadoDespues.webp",
      view: "Paciente 1 - Perfil",
      patient: "Paciente 1",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista lateral del resultado:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia</li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    // 2-Eva
    {
      before: "/images/lifting-hamaca/galeria/eva1a.webp",
      after: "/images/lifting-hamaca/galeria/eva1b.webp",
      view: "Paciente 2 - Frontal",
      patient: "Paciente 2",
      description: (
        <div>
          <p className="font-semibold mb-2">Lifting facial con técnica de precisión:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevacion cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lipofilling con células madre</li>
            <li>Lifting Hamaca de mejillas y cuello </li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/Eva2a.webp",
      after: "/images/lifting-hamaca/galeria/eva2b.webp",
      view: "Paciente 2 - Perfil",
      patient: "Paciente 2",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista lateral del resultado:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevacion cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lipofilling con células madre</li>
            <li>Lifting Hamaca de mejillas y cuello </li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/Eva3a.webp",
      after: "/images/lifting-hamaca/galeria/Eva3b.webp",
      view: "Paciente 2 - Frontal",
      patient: "Paciente 2",
      description: (
        <div>
          <p className="font-semibold mb-2">Lifting facial con técnica de precisión:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevacion cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lipofilling con células madre</li>
            <li>Lifting Hamaca de mejillas y cuello </li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/eva4a.webp",
      after: "/images/lifting-hamaca/galeria/Eva4b.webp",
      view: "Paciente 2 - Perfil",
      patient: "Paciente 2",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista lateral del resultado:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevacion cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lipofilling con células madre</li>
            <li>Lifting Hamaca de mejillas y cuello </li>
          </ul>
        </div>
      )
    },
    // 3-Sandra Navarro
    {
      before: "/images/lifting-hamaca/galeria/SandraNFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/SandraNFrenteDespues.webp",
      view: "Paciente 3 - Frontal",
      patient: "Paciente 3",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/SandraNLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/SandraNLadoDespues.webp",
      view: "Paciente 3 - Perfil",
      patient: "Paciente 3",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/SandraNLateralAntes.webp",
      after: "/images/lifting-hamaca/galeria/SandraNLateralDespues.webp",
      view: "Paciente 3 - Perfil",
      patient: "Paciente 3",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/SandraNCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/SandraNCuelloDespues.webp",
      view: "Paciente 3 - Perfil",
      patient: "Paciente 3",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/SandraNOjosAntes.webp",
      after: "/images/lifting-hamaca/galeria/SandraNOjosDespues.webp",
      view: "Paciente 3 - Perfil",
      patient: "Paciente 3",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    // 4-Aponte

    {
      before: "/images/lifting-hamaca/galeria/AponteFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/AponteFrenteDespues.webp",
      view: "Paciente 4 - Perfil",
      patient: "Paciente 4",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AponteCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/AponteCuelloDespues.webp",
      view: "Paciente 4- Perfil",
      patient: "Paciente 4",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AponteLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/AponteLadoDespues.webp",
      view: "Paciente 4 - Perfil",
      patient: "Paciente 4",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    // 5-Aura
    {
      before: "/images/lifting-hamaca/galeria/AuraFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/AuraFrenteDespues.webp",
      view: "Paciente 5 - Frontal",
      patient: "Paciente 5",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
            <li>Elevación del labio Lip lift</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AuraLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/AuraLadoDespues.webp",
      view: "Paciente 5 - Perfil",
      patient: "Paciente 5",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
            <li>Elevación del labio Lip lift</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AuraLateralAntes.webp",
      after: "/images/lifting-hamaca/galeria/AuraLateralDespues.webp",
      view: "Paciente 5 - Detalle",
      patient: "Paciente 5",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
            <li>Elevación del labio Lip lift</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AuraCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/AuraCuelloDespues.webp",
      view: "Paciente 5 - Detalle",
      patient: "Paciente 5",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
            <li>Elevación del labio Lip lift</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AuraLipAntes.webp",
      after: "/images/lifting-hamaca/galeria/AuraLipDespues.webp",
      view: "Paciente 5 - Detalle",
      patient: "Paciente 5",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
            <li>Elevación del labio Lip lift</li>
          </ul>
        </div>
      )
    },
    // 6-Martha Marin
    {
      before: "/images/lifting-hamaca/galeria/MarthaMarinFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/MarthaMarinFrenteDespues.webp",
      view: "Paciente 6 - Frontal",
      patient: "Paciente 6",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MarthaMarinLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/MarthaMarinLadoDespues.webp",
      view: "Paciente 6 - Frontal",
      patient: "Paciente 6",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MarthaMarinAntes.webp",
      after: "/images/lifting-hamaca/galeria/MarthaMarinDespues.webp",
      view: "Paciente 6 - Frontal",
      patient: "Paciente 6",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MarthaMarinCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/MarthaMarinCuelloDespues.webp",
      view: "Paciente 6 - Frontal",
      patient: "Paciente 6",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    // 7-Carolina Lucena
    {
      before: "/images/lifting-hamaca/galeria/LucenaFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/LucenaFrenteDespues.webp",
      view: "Paciente 7 - Frontal",
      patient: "Paciente 7",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lipofilling con células madre</li>
            <li></li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LucenaAntes.webp",
      after: "/images/lifting-hamaca/galeria/LucenaDespues.webp",
      view: "Paciente 7 - Frontal",
      patient: "Paciente 7",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lipofilling con células madre</li>
            <li></li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LucenaCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/LucenaCeulloDespues.webp",
      view: "Paciente 7 - Frontal",
      patient: "Paciente 7",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lipofilling con células madre</li>
            <li></li>
          </ul>
        </div>
      )
    },
    // 8-Adriana Bermudez
    {
      before: "/images/lifting-hamaca/galeria/AdrianaBermuudezFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/AdrianaBermudezFrenteDespues.webp",
      view: "Paciente 8 - Frontal",
      patient: "Paciente 8",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AdrianaBermudezLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/AdrianaBermudezLadoDespues.webp",
      view: "Paciente 8 - Frontal",
      patient: "Paciente 8",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AdrianaBermudezAntes.webp",
      after: "/images/lifting-hamaca/galeria/AdrianaBermudezDespues.webp",
      view: "Paciente 8 - Frontal",
      patient: "Paciente 8",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AdrianaBermudezCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/AdrianaBermudezCuelloDespues.webp",
      view: "Paciente 8 - Frontal",
      patient: "Paciente 8",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastia </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Lipofilling con células madre</li>
          </ul>
        </div>
      )
    },
    // 9-Castaneda
    {
      before: "/images/lifting-hamaca/galeria/CastanedaFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/CastanedaFrenteDespues.webp",
      view: "Paciente 9 - Frontal",
      patient: "Paciente 9",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/CastanedaLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/CastanedaLadoDespues.webp",
      view: "Paciente 9 - Frontal",
      patient: "Paciente 9",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/CastanedaLateralAntes.webp",
      after: "/images/lifting-hamaca/galeria/CastanedaLateralDespues.webp",
      view: "Paciente 9 - Frontal",
      patient: "Paciente 9",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/CastanedaCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/CastanedaCuelloDespues.webp",
      view: "Paciente 9 - Frontal",
      patient: "Paciente 9",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    // 10-Ivette
    {
      before: "/images/lifting-hamaca/galeria/IvetteFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/IvetteFrenteDespues.webp",
      view: "Paciente 10 - Frontal",
      patient: "Paciente 10",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía  superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de las mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/IvetteLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/IvetteLadoDespues.webp",
      view: "Paciente 10 - Frontal",
      patient: "Paciente 10",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía  superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de las mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/IvetteAntes.webp",
      after: "/images/lifting-hamaca/galeria/IvetteDespues.webp",
      view: "Paciente 10 - Frontal",
      patient: "Paciente 10",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía  superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de las mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    // 11-Leonor
    {
      before: "/images/lifting-hamaca/galeria/LeonorFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/LeonorFrenteDespues.webp",
      view: "Paciente 11 - Frontal",
      patient: "Paciente 11",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting  de mejillas y cuello</li>
            <li>Elevación del labio Lip lift</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LeonorLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/LeonorLadoDespues.webp",
      view: "Paciente 11 - Lateral",
      patient: "Paciente 11",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting  de mejillas y cuello</li>
            <li>Elevación del labio Lip lift</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LeonorAntes.webp",
      after: "/images/lifting-hamaca/galeria/LeonorDespues.webp",
      view: "Paciente 11 - Frontal",
      patient: "Paciente 11",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting  de mejillas y cuello</li>
            <li>Elevación del labio Lip lift</li>
          </ul>
        </div>
      )
    },
    // 12-Beatriz Gonzalez
    {
      before: "/images/lifting-hamaca/galeria/BeatrizGFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/BeatrizGFrenteDespues.webp",
      view: "Paciente 12 - Frontal",
      patient: "Paciente 12",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting  de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/BeatrizGLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/BeatrizGLadoDespues.webp",
      view: "Paciente 12 - Lateral",
      patient: "Paciente 12",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting  de mejillas y cuello</li>
          </ul>
        </div>
      )
    },

    {
      before: "/images/lifting-hamaca/galeria/BeatrizGCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/BeatrizGCuelloDespues.webp",
      view: "Paciente 12 - Lateral",
      patient: "Paciente 12",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting  de mejillas y cuello</li>
          </ul>
        </div>
      )
    },

    // 13-Maria Helena
    {
      before: "/images/lifting-hamaca/galeria/MariaHelenaFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/MariaHelenaFrenteDespues.webp",
      view: "Paciente 13 - Frontal",
      patient: "Paciente 13",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting  facial en hamaca de mejillas y cuello</li>
            <li>Lip Lift de elevación de labio</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MariaHelenaAntes.webp",
      after: "/images/lifting-hamaca/galeria/MariaHelenaDespues.webp",
      view: "Paciente 13 - Lateral",
      patient: "Paciente 13",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting  facial en hamaca de mejillas y cuello</li>
            <li>Lip Lift de elevación de labio</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MariaHelenaCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/MariaHelenaCuelloDespues.webp",
      view: "Paciente 13 - Frontal",
      patient: "Paciente 13",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting  facial en hamaca de mejillas y cuello</li>
            <li>Lip Lift de elevación de labio</li>
          </ul>
        </div>
      )
    },
    // 14-Harold
    {
      before: "/images/lifting-hamaca/galeria/HaroldFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/HaroldFrenteDespues.webp",
      view: "Paciente 14",
      patient: "paciente 14",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/HaroldLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/HaroldLadoDespues.webp",
      view: "Paciente 14 - Lateral",
      patient: "paciente 14",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/HaroldLateralAntes.webp",
      after: "/images/lifting-hamaca/galeria/HaroldLateralDespues.webp",
      view: "Paciente 14 - Lateral",
      patient: "paciente 14",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/HaroldCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/HaroldCuelloDespues.webp",
      view: "paciente 14 - Frontal",
      patient: "paciente 14",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    // 15-Adriana Pilar
    {
      before: "/images/lifting-hamaca/galeria/AdrianaPilarFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/AdrianaPilarFrenteDespues.webp",
      view: "paciente 15 - Frontal",
      patient: "paciente 15",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AdrianaPilarLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/AdrianaPilarLadoDespues.webp",
      view: "paciente 15 - Lateral",
      patient: "paciente 15",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AdrianaPilarLateralAntes.webp",
      after: "/images/lifting-hamaca/galeria/AdrianaPilarLateralDespues.webp",
      view: "paciente 15 - Lateral",
      patient: "paciente 15",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/AdrianaPilarCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/AdrianaPilarCuelloDespues.webp",
      view: "paciente 15 - Frontal",
      patient: "paciente 15",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    // 16-Laura
    {
      before: "/images/lifting-hamaca/galeria/LauraFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/LauraFrenteDespues.webp",
      view: "paciente 16- Frontal",
      patient: "paciente 16",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Bralefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LauraLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/LauraLadoDespues.webp",
      view: "paciente 16 - Lateral",
      patient: "paciente 16",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LauraLateralDespues.webp",
      after: "/images/lifting-hamaca/galeria/LauraLateralDespues.webp",
      view: "paciente 16 - Frontal",
      patient: "paciente 16",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LauraCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/LauraCuelloDespues.webp",
      view: "paciente 16 - Lateral",
      patient: "paciente 16",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },

    // 17-Fanny Rubiela
    {
      before: "/images/lifting-hamaca/galeria/FannyRubielaFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/FannyRubielaFrenteDespues.webp",
      view: "paciente 17 - Frontal",
      patient: "paciente 17",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/FannyRubielaLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/FannyRubielaLadoDespues.webp",
      view: "paciente 17  - Lateral",
      patient: "paciente 17",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/FannyRubiela Antes.webp",
      after: "/images/lifting-hamaca/galeria/FannyRubielaDespues.webp",
      view: "paciente 17- Frontal",
      patient: "paciente 17",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/FannyRubielaCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/FannyRubielaCuelloDespues.webp",
      view: "paciente 17 - Frontal",
      patient: "paciente 17",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    // 18-Liliana
    {
      before: "/images/lifting-hamaca/galeria/LilianaFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/LilianaFrenteDespues.webp",
      view: "paciente 18 - Frontal",
      patient: "paciente 18",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LilianaLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/LilianaLadoDespues.webp",
      view: "paciente 18 - Lateral",
      patient: "paciente 18",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LilianaAntes.webp",
      after: "/images/lifting-hamaca/galeria/LilianaDespues.webp",
      view: "paciente 18 - Frontal",
      patient: "paciente 18",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LilianaOjosAntes.webp",
      after: "/images/lifting-hamaca/galeria/LilianaOjosDespues.webp",
      view: "paciente 18 - Lateral",
      patient: "paciente 18",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LilianaCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/LilianaCuelloDespues.webp",
      view: "paciente 18 - Frontal",
      patient: "paciente 18",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LilianaRetratoAntes.webp",
      after: "/images/lifting-hamaca/galeria/LilianaRestratoDespues.webp",
      view: "paciente 18 - Frontal",
      patient: "paciente 18",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    // 19-BAHDRA
    {
      before: "/images/lifting-hamaca/galeria/BahdraFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/BahdraFrenteDespues.webp",
      view: "paciente 19 - Frontal",
      patient: "paciente 19",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/BahdraLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/BahdraLadoDespues.webp",
      view: "paciente 19 - Frontal",
      patient: "paciente 19",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/BahdraAntes.webp",
      after: "/images/lifting-hamaca/galeria/BahdraDespues.webp",
      view: "paciente 19 - Frontal",
      patient: "paciente 19",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    // 20-Claudia
    {
      before: "/images/lifting-hamaca/galeria/ClaudiaFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/ClaudiaFrenteDespues.webp",
      view: "paciente 20 - Frontal",
      patient: "paciente 20",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación del labio Lip lift</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/ClaudiaLado2Antes.webp",
      after: "/images/lifting-hamaca/galeria/ClaudiaLado2Despues.webp",
      view: "paciente 20 - Frontal",
      patient: "paciente 20",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación del labio Lip lift</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/ClaudiaLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/ClaudiaLadoDespues.webp",
      view: "paciente 20 - Frontal",
      patient: "paciente 20",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación del labio Lip lift</li>
          </ul>
        </div>
      )
    },
    // 21-Lucy
    {
      before: "/images/lifting-hamaca/galeria/LucyFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/LucyFrenteDespues.webp",
      view: "paciente 21 - Frontal",
      patient: "paciente 21",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LucyLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/LucyLadoDespues.webp",
      view: "paciente 21 - Lateral",
      patient: "paciente 21",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },

    {
      before: "/images/lifting-hamaca/galeria/LucyLateralAntes.webp",
      after: "/images/lifting-hamaca/galeria/LucyLateralDespues.webp",
      view: "paciente 21 - Lateral",
      patient: "paciente 21",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },

    {
      before: "/images/lifting-hamaca/galeria/LucyCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/LucyCuelloDespues.webp",
      view: "paciente 21 - Frontal",
      patient: "paciente 21",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },


    // 22-Luz
    {
      before: "/images/lifting-hamaca/galeria/LuzFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/LuzFrenteDespues.webp",
      view: "paciente 22 - Frontal",
      patient: "paciente 22",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación del labio Lip Lif</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/Luz ladoderechoAntes.webp",
      after: "/images/lifting-hamaca/galeria/LuzladoderechoDespues.webp",
      view: "paciente 22 - Frontal",
      patient: "paciente 22",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación del labio Lip Lif</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/LuzAntes.webp",
      after: "/images/lifting-hamaca/galeria/LuzDespues.webp",
      view: "paciente 22 - Frontal",
      patient: "paciente 22",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía</li>
            <li>Elevación cola de cejas</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación del labio Lip Lif</li>
          </ul>
        </div>
      )
    },
    // 23-Beatriz
    {
      before: "/images/lifting-hamaca/galeria/BeatrizFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/BeatrizFrenteDespues.webp",
      view: "paciente 23 - Frontal",
      patient: "paciente 23",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía  superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/BetarizLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/BeatrizLadoDespues.webp",
      view: "paciente 23 - Lateral",
      patient: "paciente 23",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía  superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting en hamaca de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    // 24-Martha Garcia

    {
      before: "/images/lifting-hamaca/galeria/MarthaFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/MarthaFrenteDespues.webp",
      view: "paciente 24 - Frontal",
      patient: "paciente 24",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MarthaLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/MarthaLadoDespues.webp",
      view: "paciente 24 - Lateral",
      patient: "paciente 24",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MarthaLateralAntes.webp",
      after: "/images/lifting-hamaca/galeria/MarthaLateralDespues.webp",
      view: "paciente 24 - Lateral",
      patient: "paciente 24",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },
    // 25-Myriam
    {
      before: "/images/lifting-hamaca/galeria/MyriamFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/MyriamFrenteDespues.webp",
      view: "paciente 25 - Frontal",
      patient: "paciente 25",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MyriamAntes.webp",
      after: "/images/lifting-hamaca/galeria/MyriamDespues.webp",
      view: "paciente 25 - Frontal",
      patient: "paciente 25",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },
    // 26-Marcela Molina
    {
      before: "/images/lifting-hamaca/galeria/MarcelaFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/MarcelaFrenteDespues.webp",
      view: "paciente 26 - Frontal",
      patient: "paciente 26",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MarcelaladoAntes.webp",
      after: "/images/lifting-hamaca/galeria/MarcelaladoDespues.webp",
      view: "paciente 26 - Lateral",
      patient: "paciente 26",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MarcelaOjosAntes.webp",
      after: "/images/lifting-hamaca/galeria/MarcelaOjosDespues.webp",
      view: "paciente 26 - Frontal",
      patient: "paciente 26",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MarcelaCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/MarcelaCuelloDespues.webp",
      view: "paciente 26 - Frontal",
      patient: "paciente 26",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },
    // 27-Maria Fernanda
    {
      before: "/images/lifting-hamaca/galeria/MariaFFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/MariaFFrenteDespues.webp",
      view: "paciente 27 - Frontal",
      patient: "paciente 27",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MariaFLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/MariaFLadoDespues.webp",
      view: "paciente 27 - Lateral",
      patient: "paciente 27",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MariaFLateralAntes.webp",
      after: "/images/lifting-hamaca/galeria/MariaFLateralDespues.webp",
      view: "paciente 27 - Lateral",
      patient: "paciente 27",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación cola de cejas</li>
          </ul>
        </div>
      )
    },

    // 28-Nelly 2
    {
      before: "/images/lifting-hamaca/galeria/NellyFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/NellyFrenteDespues.webp",
      view: "paciente 28 - Frontal",
      patient: "paciente 28",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía inferior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación de labio lip lif</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/NellyOjosAntes.webp",
      after: "/images/lifting-hamaca/galeria/NellyOjosDespues.webp",
      view: "paciente 28- Frontal",
      patient: "paciente 28",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía inferior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación de labio lip lif</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/NellyCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/NellyCuelloDespues.webp",
      view: "paciente 28 - Frontal",
      patient: "paciente 28",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía inferior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevación de labio lip lif</li>
          </ul>
        </div>
      )
    },
    // 29-Miryam
    {
      before: "/images/lifting-hamaca/galeria/MiryamFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/MiryamFrenteDespues.webp",
      view: "paciente 29 - Frontal",
      patient: "paciente 29",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Rinoplastia</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MiryamLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/MiryamLadoDespues.webp",
      view: "paciente 29  - Frontal",
      patient: "paciente 29 ",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Rinoplastia</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MiryamAntes.webp",
      after: "/images/lifting-hamaca/galeria/MiryamDespues.webp",
      view: "paciente 29 - Frontal",
      patient: "paciente 29",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Rinoplastia</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MiryamOjosAntes.webp",
      after: "/images/lifting-hamaca/galeria/MiryamOjosDespues.webp",
      view: "paciente 29 - Frontal",
      patient: "paciente 29",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Rinoplastia</li>
          </ul>
        </div>
      )
    },


    // 30-Nubia
    {
      before: "/images/lifting-hamaca/galeria/Nubia3FrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/Nubia3FrenteDespues.webp",
      view: "paciente 30 - Frontal",
      patient: "paciente 30",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/Nubia3LadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/Nubia3LadoDespues.webp",
      view: "paciente 30 - Frontal",
      patient: "paciente 30",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/NubiaAntes.webp",
      after: "/images/lifting-hamaca/galeria/NubiaDespues.webp",
      view: "paciente 30 - Frontal",
      patient: "paciente 30",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    // 31-Paciente 31
    {
      before: "/images/lifting-hamaca/galeria/31FrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/31FrenteDespues.webp",
      view: "Paciente 31 - Frontal",
      patient: "Paciente 31",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/31ladoAntes.webp",
      after: "/images/lifting-hamaca/galeria/312LadoDespues.webp",
      view: "Paciente 31 - Lateral",
      patient: "Paciente 31",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Blefaroplastía superior e inferior</li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
          </ul>
        </div>
      )
    },
    // 32-Monica Velasquez
    {
      before: "/images/lifting-hamaca/galeria/MonicaVFrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/MonicaVFrenteDespues.webp",
      view: "Paciente 32- Frontal",
      patient: "Paciente 32",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevacion del labio Lip lift </li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MonicaVLadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/MonicaVLadoDespues.webp",
      view: "Paciente 32 - Lateral",
      patient: "Paciente 32",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevacion del labio Lip lift </li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MonicaVLateralAntes.webp",
      after: "/images/lifting-hamaca/galeria/MonicaVLateralDespues.webp",
      view: "Paciente 32 - Lateral",
      patient: "Paciente 32",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevacion del labio Lip lift </li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/MonicaVCuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/MonicaVCuelloDespues.webp",
      view: "Paciente 32- Frontal",
      patient: "Paciente 32",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
            <li>Lifting de mejillas y cuello</li>
            <li>Elevacion del labio Lip lift </li>
          </ul>
        </div>
      )
    },
    // 33-NElly
    {
      before: "/images/lifting-hamaca/galeria/Nelly2FrenteAntes.webp",
      after: "/images/lifting-hamaca/galeria/Nelly2FrenteDespues.webp",
      view: "Paciente 33- Frontal",
      patient: "Paciente 33",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/nelly2LadoAntes.webp",
      after: "/images/lifting-hamaca/galeria/nel2-LadoDespues.webp",
      view: "Paciente 33 - Lateral",
      patient: "Paciente 33",
      description: (
        <div>
          <p className="font-semibold mb-2">Vista detallada del resultado quirúrgico:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Elevación cola de cejas</li>
            <li>Blefaroplastía </li>
            <li>Lipofilling con células madre </li>
          </ul>
        </div>
      )
    },
    {
      before: "/images/lifting-hamaca/galeria/Nelly2CuelloAntes.webp",
      after: "/images/lifting-hamaca/galeria/Nelly2CuelloDespues.webp",
      view: "Paciente 33 - Frontal",
      patient: "Paciente 33",
      description: (
        <div>
          <p className="font-semibold mb-2">paciente a quien se le realizaron los siguientes procedimientos:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>blefaroplastia superior e inferior</li>
            <li>elevación de cola de cejas</li>
            <li>lifting facial en hamaca de mejillas y cuello </li>
            <li>lipofilling facial con células madre</li>
          </ul>
        </div>
      )
    },
  ];

  // Agrupar imágenes por paciente
  const groupedByPatient = procedureImages.reduce((acc, image, index) => {
    const patientName = image.patient;
    if (!acc[patientName]) {
      acc[patientName] = [];
    }
    acc[patientName].push({ ...image, originalIndex: index });
    return acc;
  }, {});

  const patientNames = Object.keys(groupedByPatient);

  // Inicializar con el primer paciente
  useEffect(() => {
    if (patientNames.length > 0 && !selectedPatient) {
      const firstPatient = patientNames[0];
      setSelectedPatient(firstPatient);
      setCurrentPatientImages(groupedByPatient[firstPatient]);
    }
  }, [patientNames, selectedPatient, groupedByPatient]);

  const currentImagePair = selectedPatient && currentPatientImages.length > 0
    ? currentPatientImages[selectedImage] || currentPatientImages[0]
    : procedureImages[0];

  const selectPatient = (patientName) => {
    setSelectedPatient(patientName);
    setCurrentPatientImages(groupedByPatient[patientName]);
    setSelectedImage(0);
  };

  const goBack = () => {
    router.push('/galeria');
  };

  const nextImage = () => {
    if (currentPatientImages.length > 0) {
      setSelectedImage((prev) =>
        prev >= currentPatientImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (currentPatientImages.length > 0) {
      setSelectedImage((prev) =>
        prev === 0 ? currentPatientImages.length - 1 : prev - 1
      );
    }
  };

  // Funciones para mover el slider de pacientes
  const scrollSlider = (direction) => {
    const slider = document.querySelector('.patient-slider');
    if (slider) {
      const scrollAmount = 150; // Cantidad de scroll en píxeles
      slider.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Navegación superior */}
      <div className="bg-gray-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={goBack}
            className="flex items-center text-gray-600 hover:text-gray-800 text-sm"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver a Galería
          </button>

          <div className="bg-gray-800 text-white px-4 py-2 rounded text-sm">
            Lifting Hamaca
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Layout principal como en tu imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">

          {/* Panel principal - 3 columnas */}
          <div className="lg:col-span-3">
            <div className="rounded-lg overflow-hidden border">
              <div className="grid grid-cols-2">
                {/* ANTES - Con imagen real */}
                <div className="relative">
                  <img
                    src={currentImagePair.before}
                    alt={`${currentImagePair.patient} - Antes`}
                    className="w-full h-[500px] object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23e9d5ff'/%3E%3Ctext x='200' y='250' text-anchor='middle' font-family='Arial' font-size='18' fill='%237c3aed'%3EANTES%3C/text%3E%3C/svg%3E`
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ANTES
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="text-white p-4 rounded-b-lg"
                      style={{
                        background: 'linear-gradient(to top, rgba(124, 58, 237, 0.85) 0%, rgba(139, 92, 246, 0.6) 40%, rgba(167, 139, 250, 0.3) 70%, rgba(0, 0, 0, 0) 100%)'
                      }}
                    >
                      <p className="font-medium text-lg">{currentImagePair.view}</p>
                      <p className="text-sm opacity-90">{currentImagePair.patient}</p>
                    </div>
                  </div>
                </div>

                {/* DESPUÉS - Con imagen real */}
                <div className="relative">
                  <img
                    src={currentImagePair.after}
                    alt={`${currentImagePair.patient} - Después`}
                    className="w-full h-[500px] object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23fef3c7'/%3E%3Ctext x='200' y='250' text-anchor='middle' font-family='Arial' font-size='18' fill='%23d97706'%3EDESPUÉS%3C/text%3E%3C/svg%3E`
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      DESPUÉS
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0">
                    <div
                      className="text-white p-4 rounded-b-lg"
                      style={{
                        background: 'linear-gradient(to top, rgba(217, 119, 6, 0.85) 0%, rgba(245, 158, 11, 0.6) 40%, rgba(251, 191, 36, 0.3) 70%, rgba(0, 0, 0, 0) 100%)'
                      }}
                    >
                      <p className="font-medium text-lg">{currentImagePair.view}</p>
                      <p className="text-sm opacity-90">Resultado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información del procedimiento */}
            <div className="mt-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">Lifting Facial Hamaca</h1>
              <p className="text-xl text-gray-600 mb-3">{currentImagePair.patient}</p>
              <div className="text-gray-700 text-lg mb-3">
                {currentImagePair.description}
              </div>
              <p className="text-sm text-gray-500 italic">Los resultados individuales pueden variar.</p>
            </div>
          </div>

          {/* Panel "Otras Vistas" - 1 columna */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Otras Vistas</h3>

            {/* Vistas del paciente seleccionado */}
            {selectedPatient && currentPatientImages.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Vistas de {selectedPatient}:</h4>
                <div className="space-y-3">
                  {currentPatientImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-full bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 border-2 ${selectedImage === index ? 'border-purple-500 ring-1 ring-purple-200' : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="grid grid-cols-2 gap-0.5">
                        <div className="w-full h-24 relative">
                          <img
                            src={image.before}
                            alt={`${image.view} - Antes`}
                            className="w-full h-full object-cover rounded-tl-lg"
                            onError={(e) => {
                              e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='96' viewBox='0 0 60 96'%3E%3Crect width='60' height='96' fill='%23f3f4f6'/%3E%3Ctext x='30' y='48' text-anchor='middle' font-family='Arial' font-size='8' fill='%23666'%3EA%3C/text%3E%3C/svg%3E`
                            }}
                          />
                          <div className="absolute top-1 left-1">
                            <span className="text-white text-xs font-bold bg-purple-600 bg-opacity-90 px-1 py-0.5 rounded">A</span>
                          </div>
                        </div>
                        <div className="w-full h-24 relative">
                          <img
                            src={image.after}
                            alt={`${image.view} - Después`}
                            className="w-full h-full object-cover rounded-tr-lg"
                            onError={(e) => {
                              e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='96' viewBox='0 0 60 96'%3E%3Crect width='60' height='96' fill='%23f3f4f6'/%3E%3Ctext x='30' y='48' text-anchor='middle' font-family='Arial' font-size='8' fill='%23666'%3ED%3C/text%3E%3C/svg%3E`
                            }}
                          />
                          <div className="absolute top-1 right-1">
                            <span className="text-white text-xs font-bold bg-yellow-600 bg-opacity-90 px-1 py-0.5 rounded">D</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Mensaje cuando no hay paciente seleccionado */}
            {!selectedPatient && (
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-gray-500 text-sm">Selecciona un paciente del slider inferior para ver sus vistas</p>
              </div>
            )}
          </div>
        </div>

        {/* Navegación entre imágenes */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => scrollSlider('prev')}
            className="bg-gray-200 text-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-300 transition-colors"
          >
            ← Anterior
          </button>
          <div className="text-sm text-gray-600">
            {selectedPatient && currentPatientImages.length > 0
              ? `Vista ${selectedImage + 1} de ${currentPatientImages.length} - ${selectedPatient}`
              : `Imagen ${selectedImage + 1} de ${procedureImages.length}`
            }
          </div>
          <button
            onClick={() => scrollSlider('next')}
            className="bg-gray-200 text-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-300 transition-colors"
          >
            Siguiente →
          </button>
        </div>

        {/* Slider horizontal de pacientes - SCROLL SIMPLE */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Todas las Pacientes de Lifting Hamaca</h2>
          </div>

          <div className="overflow-x-auto patient-slider">
            <div className="flex space-x-2 pb-4">
              {patientNames.map((patientName) => {
                const patientImages = groupedByPatient[patientName];
                const firstImage = patientImages[0];
                return (
                  <div key={patientName} className="flex-shrink-0">
                    <div
                      className={`cursor-pointer transition-all duration-200 ${selectedPatient === patientName ? 'transform scale-105' : 'hover:scale-102'}`}
                      onClick={() => selectPatient(patientName)}
                    >
                      <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border-2 w-32 ${selectedPatient === patientName ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'}`}>
                        <div className="grid grid-cols-2">
                          <div className="w-full h-40 relative">
                            <img
                              src={firstImage.before}
                              alt="Antes"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='160' viewBox='0 0 80 160'%3E%3Crect width='80' height='160' fill='%23c084fc'/%3E%3Ctext x='40' y='80' text-anchor='middle' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3EA%3C/text%3E%3C/svg%3E`
                              }}
                            />
                            <div className="absolute top-1 left-1">
                              <span className="text-white text-xs font-bold bg-purple-600 px-2 py-1 rounded">A</span>
                            </div>
                          </div>
                          <div className="w-full h-40 relative">
                            <img
                              src={firstImage.after}
                              alt="Después"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='160' viewBox='0 0 80 160'%3E%3Crect width='80' height='160' fill='%23fbbf24'/%3E%3Ctext x='40' y='80' text-anchor='middle' font-family='Arial' font-size='16' fill='white' font-weight='bold'%3ED%3C/text%3E%3C/svg%3E`
                              }}
                            />
                            <div className="absolute top-1 right-1">
                              <span className="text-white text-xs font-bold bg-yellow-600 px-2 py-1 rounded">D</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 text-center">
                          <div className="text-sm font-medium text-gray-700 mb-1 truncate">{patientName}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}