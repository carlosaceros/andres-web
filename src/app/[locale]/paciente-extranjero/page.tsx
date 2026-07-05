import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientContent from './ClientContent'
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'international_patients' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function PacientesInternacionalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientContent />
      <Footer />
    </div>
  )
}
