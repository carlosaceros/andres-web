"use client"
import { useParams } from 'next/navigation'
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('acido_hialuronico');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const applicationZones = [
    { zone: t('zone_nasolabial'), description: t('zone_nasolabial_desc') },
    { zone: t('zone_marionette'), description: t('zone_marionette_desc') },
    { zone: t('zone_lips'), description: t('zone_lips_desc') },
    { zone: t('zone_dark_circles'), description: t('zone_dark_circles_desc') },
    { zone: t('zone_cheekbones'), description: t('zone_cheekbones_desc') },
    { zone: t('zone_chin'), description: t('zone_chin_desc') },
    { zone: t('zone_rhinomodeling'), description: t('zone_rhinomodeling_desc') },
    { zone: t('zone_perioral'), description: t('zone_perioral_desc') }
  ];

  const techniqueFeatures = [
    t('technique_feature_1'),
    t('technique_feature_2'),
    t('technique_feature_3'),
    t('technique_feature_4')
  ];

  const sideEffects = [
    t('side_effect_1'),
    t('side_effect_2')
  ];

  return (
    <div className="min-h-screen bg-white">
       {/* Hero Section */}
      <section 
        className="relative py-16 min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.1) 100%), url('/images/Acido-Hialuronico.webp')`
        }}
      >
        <div className="container mx-auto px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="max-w-lg">
              <h1 className="font-prototype font-normal text-4xl lg:text-5xl mb-6" style={{ color: '#1d3c5d' }}>
                {t('title')} {locale === 'es' ? 'en Bogotá' : 'in Colombia'}
              </h1>

              {/* EEAT & FOMO Badge */}
              <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm max-w-xl my-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1d3c5d]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  {locale === 'es' ? '30+ Años de Experiencia | Miembro SCCP & ISAPS' : '30+ Years of Experience | SCCP & ISAPS Member'}
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-xs font-semibold text-amber-700 animate-pulse">
                  {locale === 'es' ? '⚠️ Cupos Quirúrgicos Limitados' : '⚠️ Limited Surgical Slots'}
                </span>
              </div>

              <div className="w-100 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>
              <p className="font-sansation font-normal text-lg leading-relaxed mb-6" style={{ color: '#1d3c5d' }}>
                {t('intro_p1')} <span className="font-sansation font-bold" style={{ color: '#1d3c5d' }}> {t('intro_highlight')}</span> {t('intro_p2')}
              </p>
              <p className="font-sansation font-normal text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('intro_p3')}
              </p>
            </div>
            <div className="lg:block hidden">
              {/* Espacio para la imagen de fondo */}
            </div>
          </div>
        </div>
      </section>

      {/* What is and How it works */}
      <section className="py-16 text-white" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-prototype font-normal text-3xl lg:text-6xl text-center mb-12">
            {t('what_is_title')}
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="font-sansation font-normal text-lg leading-relaxed mb-8">
              {t('what_is_desc')}
            </p>
            
            <div className="mb-8">
              <h3 className="font-sansation font-bold text-2xl mb-6">{t('mechanism_title')}</h3>
              <p className="font-sansation font-normal text-lg leading-relaxed">
                {t('mechanism_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types and Applications */}
      <section className="py-16" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-prototype font-normal text-3xl lg:text-4xl text-center mb-4" style={{ color: '#1d3c5d' }}>
            {t('types_title')}
          </h2>
          <p className="font-sansation font-normal text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            {t('types_intro')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full border-4 rounded-full flex items-center justify-center bg-blue-50" style={{ borderColor: '#1d3c5d' }}>
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#1d3c5d' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="font-sansation font-bold text-lg mb-4" style={{ color: '#1d3c5d' }}>
                {t('type_low_title')}
              </h3>
              <p className="font-sansation font-normal text-gray-600 text-sm">
                {t('type_low_desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full border-4 rounded-full flex items-center justify-center bg-blue-50" style={{ borderColor: '#1d3c5d' }}>
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#1d3c5d' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="font-sansation font-bold text-lg mb-4" style={{ color: '#1d3c5d' }}>
                {t('type_medium_title')}
              </h3>
              <p className="font-sansation font-normal text-gray-600 text-sm">
                {t('type_medium_desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full border-4 rounded-full flex items-center justify-center bg-blue-50" style={{ borderColor: '#1d3c5d' }}>
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#1d3c5d' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="font-sansation font-bold text-lg mb-4" style={{ color: '#1d3c5d' }}>
                {t('type_high_title')}
              </h3>
              <p className="font-sansation font-normal text-gray-600 text-sm">
                {t('type_high_desc')}
              </p>
            </div>
          </div>

          {/* Application Zones */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-sansation font-bold text-4xl mb-6" style={{ color: '#1d3c5d' }}>
              {t('zones_title')}
            </h3>
            <p className="font-sansation font-normal text-gray-600 mb-8">
              {t('zones_intro')}
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid gap-4">
                {applicationZones.map((zone, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#1d3c5d' }}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-sansation font-bold" style={{ color: '#1d3c5d' }}>{zone.zone}</span>
                      <span className="font-sansation font-normal text-gray-600 ml-1">{zone.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Pérez Technique */}
      <section 
        className="py-16 text-white"
        style={{
          background: 'linear-gradient(135deg, #4a6fa5 0%, #1d3c5d 50%, #1d3c5d 100%)'
        }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-prototype font-normal text-3xl lg:text-6xl text-left mb-8">
              {t('technique_title')}
            </h2>
            <p className="font-sansation font-normal text-xl leading-relaxed mb-12 text-left">
              {t('technique_intro')}
            </p>
            
            <div className="mb-8">
              <h3 className="font-sansation font-bold text-2xl mb-8 text-left">{t('technique_features_title')}</h3>
              <div className="grid gap-6">
                {techniqueFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-sansation font-normal text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Duration and Side Effects */}
      <section className="py-16" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-6 lg:px-8">
          {/* Duration */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-prototype font-normal text-3xl mb-6" style={{ color: '#1d3c5d' }}>
              {t('duration_title')}
            </h2>
            <p className="font-sansation font-normal text-lg leading-relaxed mb-6" style={{ color: '#1d3c5d' }}>
              {t('duration_intro')}
            </p>
            <ul className="space-y-2 mb-6 ml-4" style={{ color: '#1d3c5d' }}>
              <li className="flex items-start space-x-2">
                <span className="font-sansation font-bold" style={{ color: '#1d3c5d' }}>•</span>
                <span className="font-sansation font-normal">{t('duration_factor_1')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-sansation font-bold" style={{ color: '#1d3c5d' }}>•</span>
                <span className="font-sansation font-normal">{t('duration_factor_2')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-sansation font-bold" style={{ color: '#1d3c5d' }}>•</span>
                <span className="font-sansation font-normal">{t('duration_factor_3')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-sansation font-bold" style={{ color: '#1d3c5d' }}>•</span>
                <span className="font-sansation font-normal">{t('duration_factor_4')}</span>
              </li>
            </ul>
            <p className="font-sansation font-normal" style={{ color: '#1d3c5d' }}>
              {t('duration_conclusion')}
            </p>
          </div>

          {/* Side Effects */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-prototype font-normal text-3xl mb-6 text-center" style={{ color: '#1d3c5d' }}>
              {t('side_effects_title')}
            </h2>
            <p className="font-sansation font-normal text-lg leading-relaxed mb-8 text-center" style={{ color: '#1d3c5d' }}>
              {t('side_effects_intro')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
              {sideEffects.map((effect, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-6">
                    <div className="w-full h-full border-4 rounded-full flex items-center justify-center bg-white" style={{ borderColor: '#1d3c5d' }}>
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#1d3c5d' }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-sansation font-normal text-center leading-tight" style={{ color: '#1d3c5d' }}>{effect}</h4>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="font-sansation font-bold text-lg" style={{ color: '#1d3c5d' }}>
                {t('side_effects_conclusion')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
