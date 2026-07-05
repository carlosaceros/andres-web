"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ProcedimientosCorporalesClientContent() {
    const { locale } = useParams();
    const t = useTranslations('galeria_corporales');

    const procedimientos = [
        {
            title: t('abdominoplastia_title'),
            description: t('abdominoplastia_desc'),
            casos: 18,
            image: "https://media.drandrespereznieto.com/images/todos/Abdominoplastia/fotoinicial.webp",
            href: `/${locale}/galeria/procedimientos-corporales/abdominoplatia`
        },
        {
            title: t('lipoescultura_title'),
            description: t('lipoescultura_desc'),
            casos: 20,
            image: "https://media.drandrespereznieto.com/images/todos/Lipoescultura/fotoinicial.webp",
            href: `/${locale}/galeria/procedimientos-corporales/lipoescultura`
        },
        {
            title: t('mamoplastia_aumento_title'),
            description: t('mamoplastia_aumento_desc'),
            casos: 25,
            image: "https://media.drandrespereznieto.com/images/todos/Mamoplastiaaumento/fotoinicial.webp",
            href: `/${locale}/galeria/procedimientos-corporales/mamoplastia-aumento`
        },
        {
            title: t('mamoplastia_reduccion_title'),
            description: t('mamoplastia_reduccion_desc'),
            casos: 15,
            image: "https://media.drandrespereznieto.com/images/todos/Mamoplastiareduccion/fotoinicial.webp",
            href: `/${locale}/galeria/procedimientos-corporales/mamoplastia-reduccion`
        },
        {
            title: t('explantacion_mamaria_title'),
            description: t('explantacion_mamaria_desc'),
            casos: 15,
            image: "https://media.drandrespereznieto.com/images/todos/Pexia/fotoinicial.webp",
            href: `/${locale}/galeria/procedimientos-corporales/explantacion-mamaria`
        },
        {
            title: t('pexia_title'),
            description: t('pexia_desc'),
            casos: 10,
            image: "https://media.drandrespereznieto.com/images/todos/Pexia/fotoinicial.webp",
            href: `/${locale}/galeria/procedimientos-corporales/bbl-elevacion-senos`
        }
    ];

    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-gray-100 py-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center">
                    <Link href={`/${locale}/galeria`} className="flex items-center text-gray-600 hover:text-gray-800 text-sm transition-colors">
                        <ArrowLeft size={16} className="mr-2" />
                        {t('back_to_gallery')}
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700">
                <div className="max-w-7xl mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
                    <p className="text-xl opacity-90">{t('subtitle')}</p>
                </div>
            </section>

            {/* Procedures Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {procedimientos.map((procedimiento, index) => (
                            <Link
                                key={index}
                                href={procedimiento.href}
                                className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    {/* Imagen principal */}
                                    <Image
                                        src={procedimiento.image}
                                        alt={`Procedimiento de ${procedimiento.title} - Dr. Andrés Pérez`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1536px) 33vw, 25vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        quality={85}
                                        priority={index < 4} // Prioridad para las primeras 4 imágenes
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                                    {/* Badge con icono */}
                                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-300 group-hover:bg-white/30">
                                        <Eye className="w-4 h-4 text-white" />
                                    </div>

                                    {/* Contador de casos */}
                                    <div className="absolute top-3 left-3 bg-purple-600/80 backdrop-blur-sm rounded-lg px-3 py-1">
                                        <div className="text-white text-sm font-bold">
                                            {procedimiento.casos} {t('cases_label')}
                                        </div>
                                    </div>

                                    {/* Título sobre la imagen */}
                                    <div className="absolute bottom-3 left-3 right-3 text-white">
                                        <h3 className="text-lg font-bold mb-1 drop-shadow-lg">
                                            {procedimiento.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Contenido de la tarjeta */}
                                <div className="p-4">
                                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                                        {procedimiento.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex items-center text-purple-600 font-semibold text-xs group-hover:text-purple-800 transition-colors">
                                            {t('view_clinical_cases')}
                                            <Eye className="w-3 h-3 ml-1" />
                                        </span>
                                        <div className="text-gray-400 text-xs">
                                            {procedimiento.casos} {t('results_label')}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
