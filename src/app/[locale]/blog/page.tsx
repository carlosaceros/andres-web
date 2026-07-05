import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogClientContent from './BlogClientContent';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div>
      <Header />
      <BlogClientContent locale={locale} />
      <Footer />
    </div>
  );
}