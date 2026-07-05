import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientContent from './ClientContent'
import ProcedureFAQSchema from '@/components/ProcedureFAQSchema';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'mamoplastia_aumento' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function MamoplastiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-white">
      <Header />
            <ProcedureFAQSchema
            locale={locale}
            namespace="mamoplastia_aumento"
            procedureName="Mamoplastia de Aumento"
            procedureUrl={`https://drandrespereznieto.com/${locale}/procedimientos/mamoplastia-aumento`}
          />
          <ClientContent />
      <Footer />
    </div>
  )
}
