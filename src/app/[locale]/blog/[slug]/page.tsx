import React from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogLayout, { HeadingItem } from '@/components/blog/BlogLayout';
import { getPostBySlug, blogPosts } from '@/data/blog-posts';

// es components
import ExplantacionMamariaPost from '@/components/blog/es/ExplantacionMamariaPost';
import LiftingFacialPost from '@/components/blog/es/LiftingFacialPost';
import RejuvenecimientoCelulasMadrePost from '@/components/blog/es/RejuvenecimientoCelulasMadrePost';
import BlefaroplastiaAprendePost from '@/components/blog/es/BlefaroplastiaAprendePost';
import EnfermedadImplantesSintomasPost from '@/components/blog/es/EnfermedadImplantesSintomasPost';
import DeepPlaneVsSmasPost from '@/components/blog/es/DeepPlaneVsSmasPost';
import LiftingHamacaPost from '@/components/blog/es/LiftingHamacaPost';
import BichectomiaInglesPost from '@/components/blog/es/BichectomiaInglesPost';
import PrecioExplantacionPost from '@/components/blog/es/PrecioExplantacionPost';
import ExplantacionPexiaPost from '@/components/blog/es/ExplantacionPexiaPost';
import EnBlocVsCapsulectomiaPost from '@/components/blog/es/EnBlocVsCapsulectomiaPost';
import LipLiftCicatrizPost from '@/components/blog/es/LipLiftCicatrizPost';
import EdadIdealLiftingPost from '@/components/blog/es/EdadIdealLiftingPost';
import RecuperacionLiftingPost from '@/components/blog/es/RecuperacionLiftingPost';
import RecuperacionExplantacionPost from '@/components/blog/es/RecuperacionExplantacionPost';
import ComoQuedanSenosPost from '@/components/blog/es/ComoQuedanSenosPost';
import ParpadosCaidosPost from '@/components/blog/es/ParpadosCaidosPost';
import BlefaroSuperiorInferiorPost from '@/components/blog/es/BlefaroSuperiorInferiorPost';
import PrecioLiftingPost from '@/components/blog/es/PrecioLiftingPost';

// 10 new es components
import BotoxVsAhVsBlefaroPost from '@/components/blog/es/BotoxVsAhVsBlefaroPost';
import RinoplastiaPreservacionPost from '@/components/blog/es/RinoplastiaPreservacionPost';
import PerfiloplastiaPost from '@/components/blog/es/PerfiloplastiaPost';
import RecuperacionBlefaroPost from '@/components/blog/es/RecuperacionBlefaroPost';
import LiftingSinCirugiaPost from '@/components/blog/es/LiftingSinCirugiaPost';
import PexiaMamariaQueEsPost from '@/components/blog/es/PexiaMamariaQueEsPost';
import RinoUltrasonicaVsTradicionalPost from '@/components/blog/es/RinoUltrasonicaVsTradicionalPost';
import CombinacionProcedimientosPost from '@/components/blog/es/CombinacionProcedimientosPost';
import RecuperacionRinoplastiaPost from '@/components/blog/es/RecuperacionRinoplastiaPost';
import MentoplastiaAumentoPost from '@/components/blog/es/MentoplastiaAumentoPost';
import LiftingHamacaDeepPlanePost from '@/components/blog/es/LiftingHamacaDeepPlanePost';
import EnvejecimientoTempranoPost from '@/components/blog/es/EnvejecimientoTempranoPost';
import PorQueEnvejeceRostroPost from '@/components/blog/es/PorQueEnvejeceRostroPost';
import LaPielNoSostieneRostroPost from '@/components/blog/es/LaPielNoSostieneRostroPost';
import QueEsRealmenteDeepPlanePost from '@/components/blog/es/QueEsRealmenteDeepPlanePost';
import SistemaSoporteFacialPost from '@/components/blog/es/SistemaSoporteFacialPost';
import PapelSmasRejuvenecimientoPost from '@/components/blog/es/PapelSmasRejuvenecimientoPost';
import LigamentosFacialesOlvidadosPost from '@/components/blog/es/LigamentosFacialesOlvidadosPost';
import CompartimentosGrasosFacialPost from '@/components/blog/es/CompartimentosGrasosFacialPost';
import EnvejecimientoMandibulaPost from '@/components/blog/es/EnvejecimientoMandibulaPost';
import EnvejecimientoCuelloPost from '@/components/blog/es/EnvejecimientoCuelloPost';
import LiftingDespuesRellenosPost from '@/components/blog/es/LiftingDespuesRellenosPost';
import LiftingDespuesHilosPost from '@/components/blog/es/LiftingDespuesHilosPost';
import LiftingHombresPost from '@/components/blog/es/LiftingHombresPost';
import EnvejecimientoOjosPost from '@/components/blog/es/EnvejecimientoOjosPost';
import QuitarPielParpadosPost from '@/components/blog/es/QuitarPielParpadosPost';
import ConservarGrasaParpadosPost from '@/components/blog/es/ConservarGrasaParpadosPost';
import BlefaroplastiaDeepPlanePost from '@/components/blog/es/BlefaroplastiaDeepPlanePost';
import LipofillingPeriocularPost from '@/components/blog/es/LipofillingPeriocularPost';
import ResultadosNaturalesBlefaroPost from '@/components/blog/es/ResultadosNaturalesBlefaroPost';


// 24 new Sep/Oct 2026 components
import Rinoplastia8MesesPost from '@/components/blog/es/Rinoplastia8MesesPost';
import BlefaroplastiaBogotaGuiaPost from '@/components/blog/es/BlefaroplastiaBogotaGuiaPost';
import RetiroImplantesBogotaPost from '@/components/blog/es/RetiroImplantesBogotaPost';
import LiftingFacialColombiaPost from '@/components/blog/es/LiftingFacialColombiaPost';
import PexiaDeSenosPost from '@/components/blog/es/PexiaDeSenosPost';
import CirugiasRejuvenecimientoFacialPost from '@/components/blog/es/CirugiasRejuvenecimientoFacialPost';
import QueEsSmasPost from '@/components/blog/es/QueEsSmasPost';
import BlefaroplastiaSuperiorBogotaPost from '@/components/blog/es/BlefaroplastiaSuperiorBogotaPost';
import OtoplastiaBogotaPost from '@/components/blog/es/OtoplastiaBogotaPost';
import PexiaMamariaBogotaPost from '@/components/blog/es/PexiaMamariaBogotaPost';
import CirugiaNarizBogotaPost from '@/components/blog/es/CirugiaNarizBogotaPost';
import DeepPlaneColombiaPost from '@/components/blog/es/DeepPlaneColombiaPost';
import ExplantacionSenosAsiaPost from '@/components/blog/es/ExplantacionSenosAsiaPost';
import BlefaroplastiaTransconjuntivalPost from '@/components/blog/es/BlefaroplastiaTransconjuntivalPost';
import PostoperatorioRinoplastiaMesAMesPost from '@/components/blog/es/PostoperatorioRinoplastiaMesAMesPost';
import LiftingCuelloPapadaPost from '@/components/blog/es/LiftingCuelloPapadaPost';
import CuantoCuestaRetirarImplantesPost from '@/components/blog/es/CuantoCuestaRetirarImplantesPost';
import LipofillingCelulasMadrePost from '@/components/blog/es/LipofillingCelulasMadrePost';
import LipLiftBogotaPost from '@/components/blog/es/LipLiftBogotaPost';
import CirugiaMamariaSecundariaPost from '@/components/blog/es/CirugiaMamariaSecundariaPost';
import BichectomiaVsLiftingMejillasPost from '@/components/blog/es/BichectomiaVsLiftingMejillasPost';
import BotoxVsBlefaroplastiaPost from '@/components/blog/es/BotoxVsBlefaroplastiaPost';
import RejuvenecimientoFacialHombresPost from '@/components/blog/es/RejuvenecimientoFacialHombresPost';
import TurismoMedicoBogotaPost from '@/components/blog/es/TurismoMedicoBogotaPost';

// en components
import FaceliftCostEnPost from '@/components/blog/en/FaceliftCostEnPost';
import DeepPlaneFaceliftColEnPost from '@/components/blog/en/DeepPlaneFaceliftColEnPost';
import BreastExplantColEnPost from '@/components/blog/en/BreastExplantColEnPost';
import IsSurgerySafeColEnPost from '@/components/blog/en/IsSurgerySafeColEnPost';

const componentMap: Record<string, React.ComponentType> = {
  ExplantacionMamariaPost,
  LiftingFacialPost,
  RejuvenecimientoCelulasMadrePost,
  BlefaroplastiaAprendePost,
  EnfermedadImplantesSintomasPost,
  DeepPlaneVsSmasPost,
  LiftingHamacaPost,
  BichectomiaInglesPost,
  PrecioExplantacionPost,
  FaceliftCostEnPost,
  ExplantacionPexiaPost,
  EnBlocVsCapsulectomiaPost,
  LipLiftCicatrizPost,
  EdadIdealLiftingPost,
  RecuperacionLiftingPost,
  RecuperacionExplantacionPost,
  ComoQuedanSenosPost,
  ParpadosCaidosPost,
  BlefaroSuperiorInferiorPost,
  PrecioLiftingPost,
  
  // 10 new es mappings
  BotoxVsAhVsBlefaroPost,
  RinoplastiaPreservacionPost,
  PerfiloplastiaPost,
  RecuperacionBlefaroPost,
  LiftingSinCirugiaPost,
  PexiaMamariaQueEsPost,
  RinoUltrasonicaVsTradicionalPost,
  CombinacionProcedimientosPost,
  RecuperacionRinoplastiaPost,
  MentoplastiaAumentoPost,
  LiftingHamacaDeepPlanePost,
  EnvejecimientoTempranoPost,
  PorQueEnvejeceRostroPost,
  LaPielNoSostieneRostroPost,
  QueEsRealmenteDeepPlanePost,
  SistemaSoporteFacialPost,
  PapelSmasRejuvenecimientoPost,
  LigamentosFacialesOlvidadosPost,
  CompartimentosGrasosFacialPost,
  EnvejecimientoMandibulaPost,
  EnvejecimientoCuelloPost,
  LiftingDespuesRellenosPost,
  LiftingDespuesHilosPost,
  LiftingHombresPost,
  EnvejecimientoOjosPost,
  QuitarPielParpadosPost,
  ConservarGrasaParpadosPost,
  BlefaroplastiaDeepPlanePost,
  LipofillingPeriocularPost,
  ResultadosNaturalesBlefaroPost,

  // 3 new en mappings
  DeepPlaneFaceliftColEnPost,
  BreastExplantColEnPost,
  IsSurgerySafeColEnPost,

  // Sep/Oct 2026 mappings
  Rinoplastia8MesesPost,
  BlefaroplastiaBogotaGuiaPost,
  RetiroImplantesBogotaPost,
  LiftingFacialColombiaPost,
  PexiaDeSenosPost,
  CirugiasRejuvenecimientoFacialPost,
  QueEsSmasPost,
  BlefaroplastiaSuperiorBogotaPost,
  OtoplastiaBogotaPost,
  PexiaMamariaBogotaPost,
  CirugiaNarizBogotaPost,
  DeepPlaneColombiaPost,
  ExplantacionSenosAsiaPost,
  BlefaroplastiaTransconjuntivalPost,
  PostoperatorioRinoplastiaMesAMesPost,
  LiftingCuelloPapadaPost,
  CuantoCuestaRetirarImplantesPost,
  LipofillingCelulasMadrePost,
  LipLiftBogotaPost,
  CirugiaMamariaSecundariaPost,
  BichectomiaVsLiftingMejillasPost,
  BotoxVsBlefaroplastiaPost,
  RejuvenecimientoFacialHombresPost,
  TurismoMedicoBogotaPost
};

// Define headings per post for the sticky Table of Contents
const headingsMap: Record<string, HeadingItem[]> = {
  'explantacion-mamaria-bogota-colombia': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: '¿Qué es la explantación?' },
    { id: 'motivos', text: 'Motivos para el retiro' },
    { id: 'recuperacion', text: 'El proceso inflamatorio' },
    { id: 'reconstruccion', text: 'Opciones de reconstrucción' },
    { id: 'turismo-medico', text: 'Turismo Médico' }
  ],
  'lifting-facial-en-bogota-colombia-2026': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: 'El Lifting Moderno' },
    { id: 'tendencias', text: 'Tendencias 2026' },
    { id: 'para-quien', text: '¿Para quién?' },
    { id: 'complementos', text: 'Complementos Perfectos' },
    { id: 'recuperacion', text: 'La Montaña Rusa' },
    { id: 'testimonios', text: 'Testimonios Reales' }
  ],
  'rejuvenecimiento-facial-celulas-madre-bogota-colombia-2026': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: 'Medicina Regenerativa' },
    { id: 'para-quien', text: '¿Para quién es ideal?' },
    { id: 'resultados', text: 'La Montaña Rusa' },
    { id: 'seguridad', text: 'Límites y Seguridad' },
    { id: 'compromiso', text: 'Mi Compromiso' },
    { id: 'videos', text: 'Casos y Testimonios' }
  ],
  'cirugia-de-parpados-blefaroplastia-bogota-colombia': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'impacto-pantallas', text: 'Impacto de Pantallas' },
    { id: 'que-es', text: '¿En qué consiste?' },
    { id: 'efecto-acordeon', text: 'El Efecto Acordeón' },
    { id: 'recuperacion', text: 'La Montaña Rusa' },
    { id: 'cuidados', text: 'Cuidados Postoperatorios' },
    { id: 'turismo-medico', text: 'Turismo Médico' }
  ],
  'enfermedad-implantes-mamarios-sintomas': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: '¿Qué es el ASIA?' },
    { id: 'sintomas', text: '10 Síntomas Comunes' },
    { id: 'diagnostico', text: 'Diagnóstico Clínico' },
    { id: 'explantacion', text: 'La Explantación' },
    { id: 'recuperacion', text: 'La Desintoxicación' }
  ],
  'deep-plane-vs-smas-vs-mini-lifting': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es-smas', text: 'Lifting SMAS' },
    { id: 'que-es-deep-plane', text: 'Deep Plane Facelift' },
    { id: 'que-es-mini-lifting', text: 'Mini Lifting' },
    { id: 'tabla-comparativa', text: 'Tabla Comparativa' },
    { id: 'decision', text: '¿Cuál necesitas?' }
  ],
  'lifting-en-hamaca-tecnica-perez-nieto': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: '¿Qué es la Hamaca?' },
    { id: 'beneficios', text: 'Beneficios' },
    { id: 'candidatos', text: 'Candidatos' },
    { id: 'recuperacion', text: 'Recuperación' }
  ],
  'bichectomia-en-ingles-buccal-fat-removal': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: '¿Qué es la Bichectomía?' },
    { id: 'por-que-ingles', text: 'Término en Inglés' },
    { id: 'candidatos', text: '¿Para quién sí/no?' },
    { id: 'alternativas', text: 'Alternativas' }
  ],
  'precio-explantacion-mamaria-bogota': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'factores', text: 'Factores de Costo' },
    { id: 'precios', text: 'Rangos de Precio' },
    { id: 'valoracion', text: 'Presupuesto Exacto' }
  ],
  'facelift-cost-colombia-vs-usa-2026': [
    { id: 'introduccion', text: 'Introduction' },
    { id: 'comparison', text: 'Cost Comparison' },
    { id: 'why-cheaper', text: 'Why Colombia?' },
    { id: 'safety', text: 'Safety Standards' },
    { id: 'logistics', text: 'Travel Logistics' }
  ],
  'explantacion-con-o-sin-pexia': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'con-pexia', text: 'Con Pexia' },
    { id: 'sin-pexia', text: 'Sin Pexia' },
    { id: 'lipofilling', text: 'Lipotransferencia' }
  ],
  'explantacion-en-bloque-vs-capsulectomia': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'en-bloc', text: 'En Bloc' },
    { id: 'capsulectomia-total', text: 'Capsulectomía Total' },
    { id: 'seguridad', text: 'Recomendación' }
  ],
  'lip-lift-cicatriz-resultados': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: '¿Qué es?' },
    { id: 'cicatriz', text: 'La Cicatriz' },
    { id: 'vs-relleno', text: 'Vs Rellenos' }
  ],
  'edad-ideal-lifting-facial': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'sintomas', text: 'Señales' },
    { id: 'lifting-preventivo', text: 'Lifting Preventivo' },
    { id: 'rejuvenecimiento-tardio', text: 'Lifting Corrector' }
  ],
  'recuperacion-lifting-facial-dia-a-dia': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'primeros-dias', text: 'Días 1-3' },
    { id: 'primera-semana', text: 'Días 4-7' },
    { id: 'segunda-semana', text: 'Días 8-14' }
  ],
  'recuperacion-explantacion-mamaria': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'semana-1', text: 'Semana 1' },
    { id: 'semana-2', text: 'Semanas 2-4' },
    { id: 'semana-5', text: 'A partir de Mes 2' }
  ],
  'como-quedan-senos-despues-explantacion': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'retraccion', text: 'Retracción Natural' },
    { id: 'mastopexia', text: 'Levantamiento' },
    { id: 'lipotransferencia', text: 'Grasa Autóloga' }
  ],
  'parpados-caidos-causas-estetico-funcional': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'causas', text: '¿Por qué caen?' },
    { id: 'estetico-vs-funcional', text: 'Estético vs Funcional' },
    { id: 'solucion', text: 'La Solución' }
  ],
  'blefaroplastia-superior-vs-inferior': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'superior', text: 'Párpado Superior' },
    { id: 'inferior', text: 'Párpado Inferior' },
    { id: 'ambas', text: 'Completa' }
  ],
  'precio-lifting-facial-bogota': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'factores', text: 'Qué influye' },
    { id: 'precios', text: 'Rangos de Precio' },
    { id: 'valoracion', text: 'Presupuesto' }
  ],
  
  // 10 new es mappings
  'botox-vs-acido-hialuronico-vs-blefaroplastia': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'botox', text: 'Toxina Botulínica' },
    { id: 'acido-hialuronico', text: 'Ácido Hialurónico' },
    { id: 'blefaroplastia', text: 'Blefaroplastia' }
  ],
  'rinoplastia-preservacion-tecnica-preserve': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: '¿Qué es?' },
    { id: 'beneficios', text: 'Beneficios' },
    { id: 'candidatos', text: 'Candidatos' }
  ],
  'perfiloplastia-nariz-menton': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'nariz-menton', text: 'Relación Nariz-Mentón' },
    { id: 'beneficios', text: 'Beneficios' }
  ],
  'recuperacion-blefaroplastia-cuidados': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'primeros-dias', text: 'Días 1-3' },
    { id: 'puntos', text: 'Retiro de Suturas' },
    { id: 'cuidados', text: 'Recomendaciones' }
  ],
  'lifting-sin-cirugia-vs-quirurgico': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'no-quirurgico', text: 'No Quirúrgico' },
    { id: 'quirurgico', text: 'Lifting Quirúrgico' }
  ],
  'pexia-mamaria-que-es': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: '¿Qué es?' },
    { id: 'tecnicas', text: 'Técnicas' }
  ],
  'rinoplastia-ultrasonica-vs-tradicional': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'ultrasonica', text: 'Rinoplastia Ultrasónica' },
    { id: 'tradicional', text: 'Rinoplastia Tradicional' }
  ],
  'combinacion-procedimientos-faciales': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'combinaciones', text: 'Combinaciones Comunes' },
    { id: 'seguridad', text: 'Seguridad' }
  ],
  'recuperacion-rinoplastia-mes-a-mes': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'mes-1', text: 'Primer Mes' },
    { id: 'mes-3', text: 'Meses 2 a 6' },
    { id: 'mes-12', text: 'Un Año' }
  ],
  'mentoplastia-aumento-menton': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'implante', text: 'Implante de Mentón' },
    { id: 'avance', text: 'Osteotomía de Avance' }
  ],
  
  // 3 new en mappings
  'deep-plane-facelift-in-colombia': [
    { id: 'introduccion', text: 'Introduction' },
    { id: 'why-colombia', text: 'Why Bogotá' },
    { id: 'deep-plane', text: 'Deep Plane' },
    { id: 'travel', text: 'Concierge Travel' }
  ],
  'breast-explant-surgery-in-colombia': [
    { id: 'introduccion', text: 'Introduction' },
    { id: 'safety', text: 'Safety First' },
    { id: 'capsulectomy', text: 'Total Capsulectomy' },
    { id: 'logistics', text: 'Logistics' }
  ],
  'is-plastic-surgery-in-colombia-safe': [
    { id: 'introduccion', text: 'Introduction' },
    { id: 'accreditation', text: 'Board Certification' },
    { id: 'facilities', text: 'Accredited Clinics' },
    { id: 'risks', text: 'Risk Details' }
  ],
  'lifting-hamaca-deep-plane-soporte-facial': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: 'La analogía de la Hamaca' },
    { id: 'beneficios', text: 'Beneficios estructurales' },
    { id: 'candidatos', text: '¿Quién es candidato?' }
  ],
  'envejecimiento-facial-temprano-sintomas-lifting': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'sintomas', text: 'Signos de alerta' },
    { id: 'lifting-preventivo', text: '¿Por qué actuar a tiempo?' },
    { id: 'rejuvenecimiento-tardio', text: 'La naturalidad primero' }
  ],
  'por-que-envejece-realmente-el-rostro': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: 'Envejecimiento tridimensional' },
    { id: 'sintomas', text: 'Cambios óseos y musculares' },
    { id: 'lifting-preventivo', text: 'Compartimentos grasos' },
    { id: 'rejuvenecimiento-tardio', text: 'Soporte vs Piel' }
  ],
  'la-piel-no-sostiene-el-rostro-verdadero-origen-envejecimiento': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'con-pexia', text: 'Envejecimiento profundo' },
    { id: 'sin-pexia', text: 'Ligamentos de retención' },
    { id: 'lipofilling', text: 'El papel del SMAS' }
  ],
  'que-es-un-deep-plane-facelift': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: 'Qué es el Deep Plane' },
    { id: 'diferencias', text: 'Deep Plane vs Técnicas' },
    { id: 'candidatos', text: 'Candidatos Ideales' },
    { id: 'recuperacion', text: 'Recuperación Paso a Paso' },
    { id: 'resultados', text: 'Duración de Resultados' },
    { id: 'bogota', text: 'Deep Plane en Bogotá' },
    { id: 'faq', text: 'Preguntas Frecuentes' }
  ],
  'sistema-soporte-facial-metodo-hamaca': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: 'El sistema de soporte' },
    { id: 'beneficios', text: 'La analogía de la hamaca' },
    { id: 'candidatos', text: 'Compartimentos grasos' }
  ],
  'papel-del-smas-rejuvenecimiento-facial': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: 'El SMAS y su función' },
    { id: 'beneficios', text: 'Evitar cara operada' },
    { id: 'candidatos', text: 'Rejuvenecimiento moderno' }
  ],
  'ligamentos-faciales-grandes-olvidados-envejecimiento': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: 'Ligamentos de retención' },
    { id: 'con-pexia', text: 'El descolgamiento' },
    { id: 'sin-pexia', text: 'Liberación sub-SMAS' }
  ],
  'compartimentos-grasos-facial-deslizamiento': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: 'Compartimentos grasos' },
    { id: 'beneficios', text: 'Bolsas y surcos' },
    { id: 'candidatos', text: 'Lifting y volumen' }
  ],
  'envejecimiento-mandibula-ovalo-facial': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: 'Envejecimiento óseo' },
    { id: 'beneficios', text: 'Papada y jowls' },
    { id: 'candidatos', text: 'Método Hamaca®' }
  ],
  'envejecimiento-cuello-bandas-platismales': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'que-es', text: '¿Por qué se forman?' },
    { id: 'beneficios', text: 'El Hamaca Lift' },
    { id: 'candidatos', text: 'Transección del platisma' }
  ],
  'lifting-facial-despues-rellenos-complicaciones': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'anatomia-rellenos', text: 'Impacto de los Rellenos' },
    { id: 'complicaciones-tecnicas', text: 'Complicaciones Técnicas' },
    { id: 'preparacion-hialuronidasa', text: 'Uso de Hialuronidasa' }
  ],
  'lifting-facial-despues-hilos-tensores-fibrosis': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'efectos-biologicos', text: 'Efectos Biológicos' },
    { id: 'retos-quirurgicos', text: 'Retos Quirúrgicos' },
    { id: 'recuperacion-tejidos', text: 'Recuperación de Tejidos' }
  ],
  'lifting-facial-hombres-cicatriz-patilla': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'cicatrices-hombres', text: 'Cicatrices en Hombres' },
    { id: 'redistribucion-folicular', text: 'Redistribución Folicular' },
    { id: 'riesgo-hematoma', text: 'Riesgo de Hematoma' }
  ],
  'envejecimiento-ojos-mirada-cansada': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'primeros-signos', text: 'Primeros Signos' },
    { id: 'ptosis-vs-dermatocalasis', text: 'Ptosis vs Dermatocalasis' },
    { id: 'perdida-volumen', text: 'Pérdida de Volumen' }
  ],
  'quitar-piel-parpados-error-blefaroplastia': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'reseccion-excesiva', text: 'Resección Excesiva' },
    { id: 'piel-vs-estructuras', text: 'Piel vs Estructuras' },
    { id: 'posicion-natural', text: 'Posición Natural' }
  ],
  'conservar-grasa-parpados-ojo-hundido': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'tradicional-obsoleta', text: 'Técnica Tradicional Obsoleta' },
    { id: 'surco-lagrimal', text: 'Surco Lagrimal' },
    { id: 'transposicion-grasa', text: 'Transposición de Grasa' }
  ],
  'blefaroplastia-deep-plane-grasa-orbital': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'abordaje-deep-plane', text: 'Abordaje Deep Plane' },
    { id: 'transposicion-submuscular', text: 'Transposición Submuscular' },
    { id: 'rol-ligamentos', text: 'Rol de los Ligamentos' }
  ],
  'lipofilling-periocular-grasa-ojos': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'volumen-perdido', text: 'Volumen Perdido' },
    { id: 'microfat-vs-nanofat', text: 'Microfat vs Nanofat' },
    { id: 'regeneracion-cutanea', text: 'Regeneración Cutánea' }
  ],
  'resultados-naturales-blefaroplastia-evitar-mirada-operada': [
    { id: 'introduccion', text: 'Introducción' },
    { id: 'ojo-redondo', text: 'Evitar Ojo Redondo' },
    { id: 'cantopexia-soporte', text: 'Soporte y Cantopexia' },
    { id: 'vector-elevacion', text: 'Vector de Elevación' }
  ],
  // Sep/Oct 2026 Headings
  'rinoplastia-8-meses-postoperatorio-evolucion':   [
      {
          "id": "introduccion",
          "text": "Introducción y Estado a los 8 Meses"
      },
      {
          "id": "porcentaje-desinflamacion",
          "text": "Porcentaje de Desinflamación y Edema"
      },
      {
          "id": "rigidez-punta",
          "text": "Rigidez y Asimetrías Temporales"
      },
      {
          "id": "cuidados-seguimiento",
          "text": "Cuidados y Criterios de Retoque"
      }
  ],
  'blefaroplastia-bogota-guia-completa-tecnicas':   [
      {
          "id": "introduccion",
          "text": "Introducción y Diagnóstico de la Mirada"
      },
      {
          "id": "tecnicas-superior-inferior",
          "text": "Blefaroplastia Superior vs Inferior"
      },
      {
          "id": "prevencion-ojo-redondo",
          "text": "Prevención de Mirada Asustada y Cantopexia"
      },
      {
          "id": "recuperacion-bogota",
          "text": "Tiempos de Recuperación y Cuidados en Bogotá"
      }
  ],
  'retiro-implantes-mamarios-bogota-explantacion':   [
      {
          "id": "introduccion",
          "text": "Introducción y Tendencia de la Explantación"
      },
      {
          "id": "motivos-principales",
          "text": "Motivos Médicos y Personales para el Retiro"
      },
      {
          "id": "importancia-capsulectomia",
          "text": "La Relevancia de la Capsulectomía Completa"
      },
      {
          "id": "reconstruccion-estetica",
          "text": "Reconstrucción Mamaria sin Prótesis"
      }
  ],
  'lifting-facial-colombia-deep-plane-bogota':   [
      {
          "id": "introduccion",
          "text": "Introducción y Posicionamiento de Colombia"
      },
      {
          "id": "deep-plane-superioridad",
          "text": "La Revolución del Plano Profundo vs SMAS Clásico"
      },
      {
          "id": "seguridad-infraestructura",
          "text": "Infraestructura Hospitalaria en Bogotá"
      },
      {
          "id": "turismo-medico-experiencia",
          "text": "Acompañamiento Integral al Paciente Internacional"
      }
  ],
  'pexia-de-senos-levantamiento-sin-protesis':   [
      {
          "id": "introduccion",
          "text": "Introducción y Grados de Ptosis Mamaria"
      },
      {
          "id": "tecnica-autoprotensis",
          "text": "El Colgajo Glandular Auto-Protésico"
      },
      {
          "id": "cicatrices-evolucion",
          "text": "Diseño y Evolución de las Cicatrices"
      },
      {
          "id": "recuperacion-resultados",
          "text": "Cuidados Postoperatorios y Durabilidad"
      }
  ],
  'cirugias-de-rejuvenecimiento-facial-guia-edad':   [
      {
          "id": "introduccion",
          "text": "Introducción: La Edad Biológica vs Cronológica"
      },
      {
          "id": "decada-40",
          "text": "A los 40 Años: Mirada y Reposición Celular"
      },
      {
          "id": "decada-50",
          "text": "A los 50 Años: Mandíbula, Cuello y Lifting Hamaca"
      },
      {
          "id": "decada-60",
          "text": "A los 60+ Años: Deep Plane y Rejuvenecimiento Estructural"
      }
  ],
  'que-es-el-smas-cirugia-facial-natural':   [
      {
          "id": "introduccion",
          "text": "Introducción y Definición Anatómica del SMAS"
      },
      {
          "id": "piel-vs-smas",
          "text": "La Piel no Sostiene: La Falacia del Estiramiento Cutáneo"
      },
      {
          "id": "vectores-hamaca",
          "text": "Vectores de Tracción y la Técnica Hamaca"
      },
      {
          "id": "longevidad-resultados",
          "text": "Durabilidad y Conservación de la Mímica Facial"
      }
  ],
  'blefaroplastia-superior-bogota-parpados-pesados':   [
      {
          "id": "introduccion",
          "text": "Introducción y Signos de Párpados Caídos"
      },
      {
          "id": "procedimiento-paso-a-paso",
          "text": "El Procedimiento Quirúrgico en 45 Minutos"
      },
      {
          "id": "dermatocalasis-vs-ptosis",
          "text": "Dermatocalasis vs Ptosis Palpebral Verdadera"
      },
      {
          "id": "postoperatorio-inmediato",
          "text": "Recuperación y Retiro de Puntos al 5° Día"
      }
  ],
  'otoplastia-bogota-cirugia-orejas-aladas':   [
      {
          "id": "introduccion",
          "text": "Introducción y Repercusión Emocional"
      },
      {
          "id": "anatomia-defecto",
          "text": "Anatomía de las Orejas en Asa o Prominentes"
      },
      {
          "id": "tecnica-mustarde-furnas",
          "text": "La Técnica Quirúrgica de Plegado y Fijación"
      },
      {
          "id": "recuperacion-banda",
          "text": "Postoperatorio y Uso de la Balaca Protectora"
      }
  ],
  'pexia-mamaria-bogota-tecnicas-mastopexia':   [
      {
          "id": "introduccion",
          "text": "Introducción y Valoración Clínica"
      },
      {
          "id": "con-vs-sin-protesis",
          "text": "¿Mastopexia con Implantes o con Tejido Propio?"
      },
      {
          "id": "patrones-incisiones",
          "text": "Patrones de Incisión: Periareolar, Vertical y T Invertida"
      },
      {
          "id": "preservacion-lactancia",
          "text": "Sensibilidad y Preservación de la Función Mamaria"
      }
  ],
  'cirugia-de-nariz-bogota-rinoplastia-moderna':   [
      {
          "id": "introduccion",
          "text": "Introducción y Filosofía de la Nariz Natural"
      },
      {
          "id": "mitos-vs-verdades",
          "text": "Mitos vs Verdades de la Rinoplastia Actual"
      },
      {
          "id": "estetica-y-funcion",
          "text": "Armonía Estética y Función Respiratoria Inseparable"
      },
      {
          "id": "tecnologias-preservacion",
          "text": "Preservación Dorsal e Instrumental de Precisión"
      }
  ],
  'deep-plane-facelift-colombia-dr-andres-perez':   [
      {
          "id": "introduccion",
          "text": "Introducción y Filosofía del Plano Profundo"
      },
      {
          "id": "liberacion-ligamentos",
          "text": "La Clave Médica: Liberación de los Ligamentos Retenedores"
      },
      {
          "id": "metodo-hamaca-profundo",
          "text": "El Método Hamaca y la Reconstrucción Cervical"
      },
      {
          "id": "durabilidad-seguridad",
          "text": "Durabilidad de 15 Años y Seguridad Anatómica"
      }
  ],
  'explantacion-de-senos-bogota-sindrome-asia':   [
      {
          "id": "introduccion",
          "text": "Introducción y Comprensión del Síndrome de ASIA"
      },
      {
          "id": "sintomas-criterios",
          "text": "Criterios Diagnósticos de Shoenfeld y Síntomas"
      },
      {
          "id": "capsulectomia-en-bloque",
          "text": "La Técnica Quirúrgica En-Bloc vs Total"
      },
      {
          "id": "recuperacion-salud",
          "text": "Evolución Clínica y Desintoxicación Biológica"
      }
  ],
  'blefaroplastia-transconjuntival-sin-cicatriz-bolsas':   [
      {
          "id": "introduccion",
          "text": "Introducción y Ventajas del Abordaje Interno"
      },
      {
          "id": "candidato-ideal",
          "text": "¿Quién es el Candidato Perfecto para esta Técnica?"
      },
      {
          "id": "transposicion-grasa-ojera",
          "text": "Transposición Grasa para Rellenar el Surco Lagrimal"
      },
      {
          "id": "recuperacion-sin-marcas",
          "text": "Postoperatorio Cómodo y Sin Cicatrices"
      }
  ],
  'postoperatorio-rinoplastia-mes-a-mes-guia-completa':   [
      {
          "id": "introduccion",
          "text": "Introducción y Fases de la Cicatrización Nasal"
      },
      {
          "id": "semana-1-a-4",
          "text": "Del Día 1 al Primer Mes: Retiro de Férula y Primeros Cambios"
      },
      {
          "id": "mes-2-a-6",
          "text": "De los 2 a los 6 Meses: Desinflamación del Dorso y Movilidad"
      },
      {
          "id": "mes-8-a-12",
          "text": "De los 8 a los 12 Meses: Afinamiento Definitivo de la Punta"
      }
  ],
  'lifting-cuello-papada-platismoplastia-bogota':   [
      {
          "id": "introduccion",
          "text": "Introducción y Anatomía del Envejecimiento Cervical"
      },
      {
          "id": "grasa-superficial-vs-profunda",
          "text": "Grasa Preplatismal vs Grasa Subplatismal Profunda"
      },
      {
          "id": "corse-platismoplastia",
          "text": "Platismoplastia en Corsé y Suspensión Lateral"
      },
      {
          "id": "recuperacion-resultados",
          "text": "Recuperación, Fajas Mentoneras y Resultados"
      }
  ],
  'cuanto-cuesta-retirar-implantes-senos-colombia':   [
      {
          "id": "introduccion",
          "text": "Introducción y Rangos de Precios en Colombia"
      },
      {
          "id": "factores-costo",
          "text": "¿Qué Factores Determinan el Costo de la Cirugía?"
      },
      {
          "id": "que-incluye-presupuesto",
          "text": "Desglose Transparente: Qué Debe Incluir el Presupuesto"
      },
      {
          "id": "seguridad-ahorro",
          "text": "La Seguridad del Paciente: Por Qué lo Barato Sale Caro"
      }
  ],
  'lipofilling-facial-celulas-madre-rejuvenecimiento':   [
      {
          "id": "introduccion",
          "text": "Introducción y Pérdida Volumétrica Facial"
      },
      {
          "id": "ciencia-celulas-madre",
          "text": "La Ciencia de las Células Madre Mesenquimales (SVF)"
      },
      {
          "id": "microfat-vs-nanofat",
          "text": "Microfat para Volumen vs Nanofat para la Calidad de Piel"
      },
      {
          "id": "durabilidad-seguridad",
          "text": "Integración Tisular y Durabilidad Permanente"
      }
  ],
  'lip-lift-bogota-rejuvenecimiento-labio-superior':   [
      {
          "id": "introduccion",
          "text": "Introducción y el Envejecimiento del Labio Superior"
      },
      {
          "id": "tecnica-bullhorn",
          "text": "La Técnica Subnasal Bullhorn y Cicatriz Oculta"
      },
      {
          "id": "lip-lift-vs-rellenos",
          "text": "Lip Lift vs Rellenos: Por Qué Menos es Más"
      },
      {
          "id": "recuperacion-sonrisa",
          "text": "Recuperación, Puntos y Exposición Dental Juvenil"
      }
  ],
  'cirugia-mamaria-secundaria-bogota-contractura-capsular':   [
      {
          "id": "introduccion",
          "text": "Introducción y Desafíos de la Cirugía Secundaria"
      },
      {
          "id": "contractura-capsular-grados",
          "text": "Grados de Contractura Capsular y Síntomas"
      },
      {
          "id": "cambio-bolsillo-dual-plane",
          "text": "Cambio de Bolsillo al Plano Dual-Plane"
      },
      {
          "id": "matrices-injertos-rescate",
          "text": "Refuerzo Tisular y Recuperación Exitosa"
      }
  ],
  'bichectomia-vs-lifting-mejillas-afinar-rostro':   [
      {
          "id": "introduccion",
          "text": "Introducción y el Auge de la Bichectomía"
      },
      {
          "id": "anatomia-bolsa-bichat",
          "text": "La Bolsa Grasa de Bichat y su Función de Soporte"
      },
      {
          "id": "riesgos-envejecimiento",
          "text": "El Peligro del 'Rostro Cadavérico' a Mediano Plazo"
      },
      {
          "id": "lifting-mejillas-solucion",
          "text": "El Lifting de Mejillas como Alternativa Fisiológica"
      }
  ],
  'botox-vs-blefaroplastia-arrugas-parpados-diferencias':   [
      {
          "id": "introduccion",
          "text": "Introducción y Confusiones Habituales"
      },
      {
          "id": "arrugas-dinamicas-vs-estaticas",
          "text": "Arrugas Dinámicas (Botox) vs Flacidez de Piel (Cirugía)"
      },
      {
          "id": "peligro-sobreinyectar",
          "text": "El Peligro de Sobreinyectar la Zona Periocular"
      },
      {
          "id": "sinergia-tratamientos",
          "text": "Cómo Combinar Ambos Métodos para una Mirada Radiante"
      }
  ],
  'rejuvenecimiento-facial-hombres-bogota-dr-andres':   [
      {
          "id": "introduccion",
          "text": "Introducción y el Auge de la Cirugía Masculina"
      },
      {
          "id": "diferencias-anatomicas",
          "text": "Diferencias Anatómicas Clave: Piel, Barba y Vascularización"
      },
      {
          "id": "diseno-patilla-cicatrices",
          "text": "Preservación de la Patilla y Cicatrices Camufladas"
      },
      {
          "id": "vectores-masculinos",
          "text": "Vectores de Tracción y Fuerza Mandibular"
      }
  ],
  'turismo-medico-cirugia-plastica-bogota-seguridad':   [
      {
          "id": "introduccion",
          "text": "Introducción y el Liderazgo Médico de Bogotá"
      },
      {
          "id": "verificacion-credenciales",
          "text": "Cómo Verificar Credenciales Médicas (RETHUS y SCCP)"
      },
      {
          "id": "clinicas-acreditadas",
          "text": "La Importancia de Clínicas de Cuarto Nivel"
      },
      {
          "id": "cronograma-viaje-seguro",
          "text": "Cronograma de Viaje, Estadía y Regreso Fit-to-Fly"
      }
  ],
};

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  blogPosts.forEach(post => {
    params.push({
      locale: post.locale,
      slug: post.slug
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) return {};

  const langKey = locale === 'es' ? 'es-CO' : 'en-US';

  return {
    title: `${post.title} | Dr. Andrés Pérez Nieto`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.drandrespereznieto.com/${locale}/blog/${slug}/`,
      languages: {
        [langKey]: `https://www.drandrespereznieto.com/${locale}/blog/${slug}/`,
        'x-default': `https://www.drandrespereznieto.com/es/blog/${slug}/`
      }
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const PostBodyComponent = componentMap[post.componentName];
  if (!PostBodyComponent) {
    notFound();
  }

  const headings = headingsMap[post.slug] || [];

  // Generate structured schemas
  const schemas: any[] = [
    {
      '@type': 'MedicalWebPage',
      '@id': `https://www.drandrespereznieto.com/${locale}/blog/${post.slug}/#webpage`,
      'url': `https://www.drandrespereznieto.com/${locale}/blog/${post.slug}/`,
      'name': `${post.title} | Dr. Andrés Pérez Nieto`,
      'headline': post.title,
      'description': post.metaDescription,
      'datePublished': post.date,
      'inLanguage': locale === 'es' ? 'es-CO' : 'en-US',
      'author': {
        '@type': 'Person',
        'name': 'Dr. Andrés Pérez Nieto',
        'jobTitle': 'Cirujano Plástico Estético y Reconstructivo',
        'url': `https://www.drandrespereznieto.com/${locale}/conoce-doctor/`,
        'memberOf': {
          '@type': 'MedicalOrganization',
          'name': 'Sociedad Colombiana de Cirugía Plástica (SCCP)'
        },
        'worksFor': {
          '@type': 'MedicalOrganization',
          'name': 'Santa Ana Medical Center',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Bogotá',
            'addressCountry': 'CO'
          }
        }
      }
    }
  ];

  // If post has FAQs, inject FAQPage schema automatically
  if (post.faqs && post.faqs.length > 0) {
    schemas.push({
      '@type': 'FAQPage',
      'mainEntity': post.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    });
  }

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': schemas
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <main className="flex-grow">
        <BlogLayout post={post} headings={headings}>
          <PostBodyComponent />
        </BlogLayout>
      </main>
      <Footer />
    </div>
  );
}
