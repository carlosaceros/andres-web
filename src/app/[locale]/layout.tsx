import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
import StructuredData from '@/components/StructuredData'
import FloatingContactButton from '@/components/FloatingContactButton'
import '../globals.css'

const GA_MEASUREMENT_ID = 'AW-18045573652'

const locales = ['es', 'en']
const BASE_URL = 'https://www.drandrespereznieto.com';

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const prototype = localFont({
    src: '../fonts/prototype/Prototype.ttf',
    variable: '--font-prototype',
    display: 'swap',
})

const sansation = localFont({
    src: [
        {
            path: '../fonts/sansation/Sansation_Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/sansation/Sansation_Bold.ttf',
            weight: '700',
            style: 'normal',
        }
    ],
    variable: '--font-sansation',
    display: 'swap',
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: 'metadata' });
    const isSpanish = locale === 'es'
    const canonicalUrl = `${BASE_URL}/${locale}`;

    return {
        metadataBase: new URL(BASE_URL),
        title: t('title'),
        description: t('description'),
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'es-CO': `${BASE_URL}/es`,
                'en-US': `${BASE_URL}/en`,
                'x-default': `${BASE_URL}/es`
            }
        },
        openGraph: {
            type: 'website',
            locale: isSpanish ? 'es_CO' : 'en_US',
            url: canonicalUrl,
            siteName: 'Dr. Andrés Pérez Nieto - Cirugía Plástica en Bogotá',
            title: t('title'),
            description: t('description'),
            images: [
                {
                    url: `${BASE_URL}/images/dr-perez.webp`,
                    width: 1200,
                    height: 630,
                    alt: 'Dr. Andrés Pérez Nieto - Cirujano Plástico en Bogotá'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('description'),
            images: [`${BASE_URL}/images/dr-perez.webp`],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}

import FloatingChat from '@/components/FloatingChat'

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    // if (!locales.includes(locale)) notFound()

    const messages = await getMessages()

    return (
        <html lang={locale} suppressHydrationWarning>
            <head />
            {/* Google Ads tag — loaded after page interactive to not block rendering */}
            <Script 
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}');
                `}
            </Script>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${prototype.variable} ${sansation.variable} antialiased`}
                suppressHydrationWarning
            >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <StructuredData locale={locale} />
                    {children}
                    <FloatingContactButton iconImage="/images/rostros.png" />
                    <FloatingChat />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}