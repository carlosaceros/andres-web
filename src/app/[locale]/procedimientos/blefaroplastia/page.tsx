import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientContent from './ClientContent'
import ProcedureFAQSchema from '@/components/ProcedureFAQSchema';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blefaroplastia' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

// This is now a Server Component
export default async function BlefaroplastiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div>
      <Header />
            <ProcedureFAQSchema
            locale={locale}
            namespace="blefaroplastia"
            procedureName="Blefaroplastia"
            procedureUrl={`https://drandrespereznieto.com/${locale}/procedimientos/blefaroplastia`}
          />
          <ClientContent />
      <Footer />
    </div>
  )
}