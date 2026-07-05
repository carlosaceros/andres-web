import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientContent from './ClientContent';
import ProcedureFAQSchema from '@/components/ProcedureFAQSchema';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'elevacion_cola_cejas' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function ElevacionCejasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen">
      <Header />
            <ProcedureFAQSchema
            locale={locale}
            namespace="surgical_procedures.elevacion_cola_cejas"
            procedureName="Elevación Cola de Cejas"
            procedureUrl={`https://drandrespereznieto.com/${locale}/procedimientos/elevacion-cola-cejas`}
          />
          <ClientContent />
      <Footer />
    </div>
  );
}
