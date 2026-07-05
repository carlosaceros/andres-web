import { getTranslations } from 'next-intl/server';
import ContactContent from './ContactContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'contact_page' });

    return {
        title: t('meta_title'),
        description: t('meta_description'),
    };
}

export default function ContactPage() {
    return <ContactContent />;
}
