import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientContent from './ClientContent';
import ProcedureFAQSchema from '@/components/ProcedureFAQSchema';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'lipofilling_celulas_madre' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function LipofillingCelulasMadrePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div>
      <Header />
            <ProcedureFAQSchema
            locale={locale}
            namespace="lipofilling_celulas_madre"
            procedureName="Lipofilling con Células Madre"
            procedureUrl={`https://drandrespereznieto.com/${locale}/procedimientos/lipofilling-celulas-madre`}
          />
          <ClientContent />
      <Footer />
    </div>
  )
}
