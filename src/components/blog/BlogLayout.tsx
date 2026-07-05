'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPostMetadata } from '@/data/blog-posts';

export interface HeadingItem {
  id: string;
  text: string;
}

interface BlogLayoutProps {
  post: BlogPostMetadata;
  headings: HeadingItem[];
  children: React.ReactNode;
}

export default function BlogLayout({ post, headings, children }: BlogLayoutProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = '';
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160) {
            currentActive = heading.id;
          }
        }
      }
      setActiveId(currentActive || (headings[0]?.id || ''));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  // Schema LD+JSON injection
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": post.title,
        "about": {
          "@type": "MedicalProcedure",
          "name": post.category
        },
        "reviewedBy": {
          "@type": "Physician",
          "name": "Dr. Andrés Pérez Nieto",
          "url": "https://www.drandrespereznieto.com/"
        }
      },
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.metaDescription,
        "author": {
          "@type": "Person",
          "name": "Dr. Andrés Pérez Nieto",
          "jobTitle": "Cirujano Plástico Facial y Reconstructivo"
        },
        "datePublished": post.date,
        "publisher": {
          "@type": "Organization",
          "name": "Clínica Dr. Andrés Pérez Nieto",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.drandrespereznieto.com/images/logo-footer.png"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": post.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMxYjM2NTMiLz48L3N2Zz4=')]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-xs font-semibold uppercase tracking-wider mb-6 font-sansation">
            {post.category}
          </div>
          
          <h1 className="font-prototype text-3xl md:text-5xl text-blue-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="font-sansation text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {post.subtitle}
          </p>

          {/* Author Badge */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 font-sansation">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src="/images/dr-perez.webp"
                  alt="Dr. Andrés Pérez Nieto"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-blue-950 text-sm">Dr. Andrés Pérez Nieto</p>
                <p className="text-xs text-gray-500">Cirujano Plástico Reconstructivo</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Revisión Médica
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Lectura: {post.readingTime}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              {post.date}
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Table of Contents sidebar */}
          <aside className="w-full lg:w-1/4 sticky top-28 hidden lg:block font-sansation">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-prototype text-xs text-blue-900 mb-4 uppercase tracking-wider">
                Contenido
              </h4>
              <nav className="flex flex-col space-y-3 text-sm">
                {headings.map(heading => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`pl-3 border-l-2 transition-all duration-200 ${
                      activeId === heading.id
                        ? 'border-blue-500 text-blue-600 font-bold'
                        : 'border-transparent text-gray-500 hover:text-blue-500'
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>

            {/* CTA Box */}
            <div className="mt-6 bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden">
              <h5 className="font-prototype text-base mb-2">¿Buscas resultados naturales?</h5>
              <p className="text-xs text-blue-200 mb-6">Agenda una valoración presencial en Bogotá o teleconsulta.</p>
              <a
                href="https://wa.me/573164953755"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-blue-900 font-bold py-3 rounded-full hover:bg-gray-100 transition shadow-md text-xs uppercase tracking-wider"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </aside>

          {/* Post Content */}
          <div className="w-full lg:w-3/4">
            <article className="bg-white p-6 sm:p-12 rounded-3xl border border-gray-100 shadow-sm font-sansation text-lg text-gray-700 leading-relaxed">
              
              {/* Quick Answer Block */}
              {post.quickAnswer && (
                <div className="border-l-4 border-blue-400 bg-blue-50/50 p-6 rounded-r-2xl mb-8 italic text-blue-950">
                  {post.quickAnswer}
                </div>
              )}

              {/* Dynamic Child Component containing full post body */}
              <div className="blog-content-body space-y-6">
                {children}
              </div>

              {/* Closing Section */}
              <hr className="my-12 border-gray-100" />
              <div className="text-center">
                <p className="italic text-gray-500 mb-8">
                  &quot;Los resultados mágicos no existen, pero el trabajo ético, seguro y con mucho cariño sí.&quot;
                </p>
                <a
                  href="https://wa.me/573164953755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.514-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.015-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.084 1.758-.705 2.006-1.401.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Agendar valoración por WhatsApp
                </a>
              </div>
            </article>

            {/* Mini FAQ Section */}
            <div id="faq" className="mt-12 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm font-sansation">
              <h3 className="font-prototype text-xl text-blue-900 mb-8 text-center">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                {post.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-gray-200 rounded-2xl bg-white overflow-hidden cursor-pointer"
                  >
                    <summary className="flex justify-between items-center p-5 font-bold text-blue-950 hover:bg-gray-50 list-none outline-none">
                      {faq.question}
                      <span className="transition group-open:rotate-180 text-blue-500 font-normal">▼</span>
                    </summary>
                    <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2 text-base">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
