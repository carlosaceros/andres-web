import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientContent from './ClientContent';
import ProcedureFAQSchema from '@/components/ProcedureFAQSchema';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'acido_hialuronico' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function AcidoHialuronicoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Header />
            <ProcedureFAQSchema
            locale={locale}
            namespace="acido_hialuronico"
            procedureName="Ácido Hialurónico"
            procedureUrl={`https://drandrespereznieto.com/${locale}/procedimientos/acido-hialuronico`}
          />
          <ClientContent />
      <Footer />
    </>
  );
}
