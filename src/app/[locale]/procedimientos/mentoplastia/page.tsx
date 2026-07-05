import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientContent from './ClientContent'
import ProcedureFAQSchema from '@/components/ProcedureFAQSchema';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'mentoplastia' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function MentoplastiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-white">
      <Header />
            <ProcedureFAQSchema
            locale={locale}
            namespace="mentoplastia"
            procedureName="Mentoplastia"
            procedureUrl={`https://drandrespereznieto.com/${locale}/procedimientos/mentoplastia`}
          />
          <ClientContent />
      <Footer />
    </div>
  )
}
