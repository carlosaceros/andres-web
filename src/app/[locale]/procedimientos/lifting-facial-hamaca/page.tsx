import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientContent from './Content';
import ProcedureFAQSchema from '@/components/ProcedureFAQSchema';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'lifting_facial_hamaca' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function LiftingFacialHamacaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div>
      <Header />
            <ProcedureFAQSchema
            locale={locale}
            namespace="lifting_facial_hamaca"
            procedureName="Lifting Facial en Hamaca"
            procedureUrl={`https://drandrespereznieto.com/${locale}/procedimientos/lifting-facial-hamaca`}
          />
          <ClientContent />
      <Footer />
    </div>
  )
}