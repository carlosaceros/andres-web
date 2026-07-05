import { getTranslations, getMessages } from 'next-intl/server';

/**
 * ProcedureFAQSchema - Server component that reads FAQs from translations
 * and renders FAQPage JSON-LD schema for SEO/AEO
 */
interface ProcedureFAQSchemaProps {
  locale: string;
  namespace: string;  // e.g. 'rinoplastia', 'botox'
  procedureName: string;
  procedureUrl: string;
}

export default async function ProcedureFAQSchema({ 
  locale, 
  namespace,
  procedureName,
  procedureUrl
}: ProcedureFAQSchemaProps) {
  // Get all translation messages directly to avoid strict key-missing compilation exceptions
  const messages = await getMessages({ locale });
  const namespaceMessages = messages[namespace] as any;
  const faqsMessages = namespaceMessages?.faqs;

  const faqs: { question: string; answer: string }[] = [];

  if (faqsMessages && typeof faqsMessages === 'object') {
    Object.keys(faqsMessages).forEach((key) => {
      const faqItem = faqsMessages[key];
      if (faqItem && typeof faqItem === 'object' && 'question' in faqItem && 'answer' in faqItem) {
        faqs.push({
          question: String(faqItem.question),
          answer: String(faqItem.answer)
        });
      }
    });
  }

  if (faqs.length === 0) return null;

  // FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // MedicalProcedure schema
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": procedureName,
    "url": procedureUrl,
    "procedureType": "http://schema.org/SurgicalProcedure",
    "availableService": {
      "@type": "MedicalTherapy",
      "name": procedureName
    },
    "performedBy": {
      "@type": "Physician",
      "@id": "https://www.drandrespereznieto.com/#physician",
      "name": "Dr. Andrés Pérez Nieto"
    },
    "availableIn": {
      "@type": "MedicalClinic",
      "name": "Dr. Andrés Pérez Nieto - Cirugía Plástica",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Edificio Santa Ana Medical Center, Cl. 119 #7-14, Consultorio 814",
        "addressLocality": "Bogotá",
        "addressRegion": "Cundinamarca",
        "addressCountry": "CO",
        "postalCode": "110121"
      }
    }
  };

  // BreadcrumbList for procedure page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": locale === 'es' ? "Inicio" : "Home",
        "item": `https://www.drandrespereznieto.com/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": locale === 'es' ? "Procedimientos" : "Procedures",
        "item": `https://www.drandrespereznieto.com/${locale}/procedimientos`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": procedureName,
        "item": procedureUrl
      }
    ]
  };

  return (
    <>
      <script
        id={`faq-schema-${namespace}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id={`procedure-schema-${namespace}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        id={`breadcrumb-schema-${namespace}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
