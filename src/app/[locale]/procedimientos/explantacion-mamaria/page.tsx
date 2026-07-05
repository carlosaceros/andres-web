import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientContent from './ClientContent'
import ProcedureFAQSchema from '@/components/ProcedureFAQSchema';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'explantacion_mamaria' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function ExplantacionMamariaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Header />
            <ProcedureFAQSchema
            locale={locale}
            namespace="explantacion_mamaria"
            procedureName="Explantación Mamaria"
            procedureUrl={`https://drandrespereznieto.com/${locale}/procedimientos/explantacion-mamaria`}
          />
          <ClientContent />
      <Footer />
    </>
  )
}
