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

  // 3 new en mappings
  DeepPlaneFaceliftColEnPost,
  BreastExplantColEnPost,
  IsSurgerySafeColEnPost
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
  ]
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <BlogLayout post={post} headings={headings}>
          <PostBodyComponent />
        </BlogLayout>
      </main>
      <Footer />
    </div>
  );
}
