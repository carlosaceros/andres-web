"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ProcedimientosFacialesClientContent() {
  const { locale } = useParams();
    const t = useTranslations('galeria_faciales');

    const procedimientos = [
        {
            title: t('blefaroplastia_title'),
            description: t('blefaroplastia_desc'),
            casos: 25,
            image: "/images/blefaroplastia/galeria/fotonicialgaleria.webp",
            href: `/${locale}/galeria/procedimientos-faciales/blefaroplastia`
        },
        {
            title: t('rinoplastia_title'),
            description: t('rinoplastia_desc'),
            casos: 24,
            image: "/images/rinoplastia/galeria/fotoinicialgaleria.webp",
            href: `/${locale}/galeria/procedimientos-faciales/rinoplastia`
        },
        {
            title: t('lifting_hamaca_title'),
            description: t('lifting_hamaca_desc'),
            casos: 34,
            image: "/images/lifting-hamaca/galeria/fotoiniciogaleria.webp",
            href: `/${locale}/galeria/procedimientos-faciales/lifting-hamaca`
        },
        {
            title: t('lipofilling_title'),
            description: t('lipofilling_desc'),
            casos: 44,
            image: "/images/lipofilling/galeria/fotoiniciogaleria.webp",
            href: `/${locale}/galeria/procedimientos-faciales/lipofilling`
        },
        {
            title: t('lip_lift_title'),
            description: t('lip_lift_desc'),
            casos: 10,
            image: "/images/lip lift/galeria/fotoiniciogaleria.webp",
            href: `/${locale}/galeria/procedimientos-faciales/lip-lift`
        },
        {
            title: t('elevacion_cejas_title'),
            description: t('elevacion_cejas_desc'),
            casos: 16,
            image: "/images/cejas/galeria/iniciofotogaleria.webp",
            href: `/${locale}/galeria/procedimientos-faciales/elevacion-cejas`
        },
        {
            title: t('mentoplastia_title'),
            description: t('mentoplastia_desc'),
            casos: 16,
            image: "/images/mentoplastia/galeria/fotoinicialgleria.webp",
            href: `/${locale}/galeria/procedimientos-faciales/mentoplastia`
        },
        {
            title: t('otoplastia_title'),
            description: t('otoplastia_desc'),
            casos: 20,
            image: "/images/otoplastia/galeria/fotonicialgaleria.webp",
            href: `/${locale}/galeria/procedimientos-faciales/otoplastia`
        }
    ];

    return (
        <>
            {/* Navegación */}
            <div className="bg-gray-100 py-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center">
                    <Link href={`/${locale}/galeria`} className="flex items-center text-gray-600 hover:text-gray-800 text-sm">
                        <ArrowLeft size={16} className="mr-2" />
                        {t('back_to_gallery')}
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
                <div className="max-w-7xl mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
                    <p className="text-xl opacity-90">{t('subtitle')}</p>
                </div>
            </section>

            {/* Grid de Procedimientos */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {procedimientos.map((procedimiento, index) => (
                            <Link
                                key={index}
                                href={procedimiento.href}
                                className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${procedimiento.image}')` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                                        <Eye className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <h3 className="text-xl font-bold mb-1">{procedimiento.title}</h3>
                                        <p className="text-sm opacity-90">{procedimiento.casos} {t('available_cases')}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{procedimiento.description}</p>
                                    <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-colors">
                                        {t('view_clinical_cases')}
                                        <Eye className="w-4 h-4 ml-2" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
