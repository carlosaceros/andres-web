import { getTranslations } from 'next-intl/server';
import DoctorContent from './DoctorContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'doctor_page' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function DoctorPage() {
  return <DoctorContent />;
}
