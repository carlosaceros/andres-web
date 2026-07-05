import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientContent from './ClientContent'
import ProcedureFAQSchema from '@/components/ProcedureFAQSchema';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'lifting_hamaca_mejilla_cuello' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function LiftingHamacaMejillaCuelloPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div>
      <Header />
            <ProcedureFAQSchema
            locale={locale}
            namespace="lifting_hamaca_mejilla_cuello"
            procedureName="Lifting en Hamaca de Mejilla y Cuello"
            procedureUrl={`https://drandrespereznieto.com/${locale}/procedimientos/lifting-en-hamaca-de-mejilla-y-cuello`}
          />
          <ClientContent />
      <Footer />
    </div>
  )
}
