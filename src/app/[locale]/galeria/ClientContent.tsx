"use client";

import React from 'react';
import Link from 'next/link';
import { Eye, Heart, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function GaleriaClientContent() {
  const { locale } = useParams();
  const t = useTranslations('galeria');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">{t('title')}</h2>
        <h3 className="text-2xl font-bold text-blue-900 mb-12 text-center">{t('subtitle')}</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <Link href={`/${locale}/galeria/procedimientos-faciales`} className="relative h-[500px] rounded-xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/p-faciales.webp')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-blue-900/90 group-hover:via-blue-900/60 transition-all duration-500"></div>
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-all duration-300">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">{t('facial_procedures')}</h4>
            </div>
          </Link>

          <Link href={`/${locale}/galeria/procedimientos-corporales`} className="relative h-[500px] rounded-xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/p-corporales.webp')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-blue-900/90 group-hover:via-blue-900/60 transition-all duration-500"></div>
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-all duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">{t('body_procedures')}</h4>

            </div>
          </Link>

          <Link href={`/${locale}/testimonios`} className="relative h-[500px] rounded-xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/testimonios .webp')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-blue-900/90 group-hover:via-blue-900/60 transition-all duration-500"></div>
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-all duration-300">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">{t('testimonials')}</h4>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
