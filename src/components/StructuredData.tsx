import { useTranslations } from 'next-intl'

interface StructuredDataProps {
    locale: string
}

export default function StructuredData({ locale }: StructuredDataProps) {
    const t = useTranslations('structured_data')
    const isSpanish = locale === 'es'
    const baseUrl = `https://www.drandrespereznieto.com/${isSpanish ? 'es' : locale}`

    // Schema 1: Physician (enhanced with geo, credentials, aggregateRating)
    const physicianSchema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "@id": `https://www.drandrespereznieto.com/#physician`,
        "name": t('physician_name'),
        "image": t('physician_image'),
        "url": "https://www.drandrespereznieto.com",
        "telephone": t('physician_telephone'),
        "description": t('organization_description'),
        "address": {
            "@type": "PostalAddress",
            "streetAddress": t('street_address'),
            "addressLocality": t('address_locality'),
            "addressRegion": t('address_region'),
            "addressCountry": t('address_country'),
            "postalCode": t('postal_code')
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": t('geo_latitude'),
            "longitude": t('geo_longitude')
        },
        "medicalSpecialty": [t('medical_specialty_plastic'), t('medical_specialty_cosmetic')],
        "hasCredential": [
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Board Certification",
                "recognizedBy": {
                    "@type": "Organization",
                    "name": "SCCP - Sociedad Colombiana de Cirugía Plástica"
                }
            },
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "International Membership",
                "recognizedBy": {
                    "@type": "Organization",
                    "name": "ISAPS - International Society of Aesthetic Plastic Surgery"
                }
            },
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "International Membership",
                "recognizedBy": {
                    "@type": "Organization",
                    "name": "ASPS - American Society of Plastic Surgeons"
                }
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "45",
            "reviewCount": "45"
        },
        "sameAs": [
            t('facebook_url'),
            t('instagram_url'),
            t('youtube_url')
        ]
    }

    // Schema 2: MedicalBusiness (LocalBusiness with opening hours and full address)
    const medicalBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "@id": `https://www.drandrespereznieto.com/#business`,
        "name": t('organization_name'),
        "description": t('organization_description'),
        "url": "https://www.drandrespereznieto.com",
        "telephone": t('physician_telephone'),
        "email": "info@drandrespereznieto.com",
        "image": t('physician_image'),
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": t('street_address'),
            "addressLocality": t('address_locality'),
            "addressRegion": t('address_region'),
            "addressCountry": t('address_country'),
            "postalCode": t('postal_code')
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": t('geo_latitude'),
            "longitude": t('geo_longitude')
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "14:00",
                "closes": "18:00"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "45",
            "reviewCount": "45"
        },
        "sameAs": [
            t('facebook_url'),
            t('instagram_url'),
            t('youtube_url')
        ]
    }

    // Schema 3: WebSite with SearchAction (for sitelinks)
    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.drandrespereznieto.com/#website",
        "name": "Dr. Andrés Pérez Nieto - Cirugía Plástica",
        "url": "https://www.drandrespereznieto.com",
        "inLanguage": [isSpanish ? "es-CO" : "en-US"],
        "publisher": {
            "@id": "https://www.drandrespereznieto.com/#business"
        }
    }

    // Schema 4: BreadcrumbList for homepage
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": isSpanish ? "Inicio" : "Home",
                "item": baseUrl
            }
        ]
    }

    return (
        <>
            <script
                id="physician-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
            />
            <script
                id="medical-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
            />
            <script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
            <script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    )
}