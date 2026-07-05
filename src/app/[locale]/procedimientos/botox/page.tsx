import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientContent from './ClientContent';
import ProcedureFAQSchema from '@/components/ProcedureFAQSchema';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'botox' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function BotoxPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Header />
            <ProcedureFAQSchema
            locale={locale}
            namespace="botox"
            procedureName="Botox"
            procedureUrl={`https://drandrespereznieto.com/${locale}/procedimientos/botox`}
          />
          <ClientContent />
      <Footer />
    </>
  );
}
