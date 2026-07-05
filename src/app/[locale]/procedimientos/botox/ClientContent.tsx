"use client"
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ApplicationZone {
  zone: string;
  description: string;
}

interface MedicalUse {
  title: string;
  description: string;
}

interface TechniqueFeature {
  feature: string;
}

interface SideEffect {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function ClientContent() {
  const { locale } = useParams();
  const t = useTranslations('botox');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const applicationZoneKeys = ["forehead", "glabellar", "crows_feet", "perioral", "neck", "brow_lift"];
  const applicationZones: ApplicationZone[] = applicationZoneKeys.map(key => ({
    zone: t(`application_zones.${key}`),
    description: t(`application_zones.${key}_desc`)
  }));

  const medicalUseKeys = ["migraine", "hyperhidrosis", "bruxism", "blepharospasm", "facial_asymmetry"];
  const medicalUses: MedicalUse[] = medicalUseKeys.map(key => ({
    title: t(`medical_uses.${key}`),
    description: t(`medical_uses.${key}_desc`)
  }));

  const techniqueFeatureKeys = ["needles", "anesthesia", "natural_effect", "custom_dose"];
  const techniqueFeatures: TechniqueFeature[] = techniqueFeatureKeys.map(key => ({
    feature: t(`technique_features.${key}`)
  }));

  const sideEffectKeys = ["discomfort", "redness", "swelling", "downtime"];
  const sideEffects: SideEffect[] = sideEffectKeys.map(key => ({
    title: t(`side_effects.${key}`),
    description: t(`side_effects.${key}_desc`)
  }));

  const faqKeys = ["q1", "q2", "q3", "q4"];
  const faqs: FAQ[] = faqKeys.map(key => ({
    question: t(`faqs.${key}.question`),
    answer: t(`faqs.${key}.answer`)
  }));

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Imagen 1 como fondo */}
        <section
          className="relative py-16 min-h-[600px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%), url('/images/Botox.webp')`
          }}
        >
          <div className="container mx-auto px-6 lg:px-8 h-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
              <div className="max-w-lg">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-900">
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

                <div className="w-64 h-1 bg-blue-900 mb-8"></div>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  {t('main_description_1')}{' '}
                  <span className="text-blue-600 font-semibold">{t('main_description_highlight')}</span>
                  {' '}{t('main_description_2')}
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  {t('main_description_3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is and How it works - Imagen 2 */}
        <section className="py-16 text-white" style={{ backgroundColor: '#1e3a5f' }}>
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              {t('what_is_it_title')}
            </h2>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg leading-relaxed mb-8">
                {t('what_is_it_p1')}
              </p>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6">{t('application_areas_title')}</h3>
                <div className="bg-blue-100 p-8 rounded-lg">
                  <div className="grid gap-4">
                    {applicationZones.map((zone, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#1e3a5f' }}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium" style={{ color: '#1e3a5f' }}>{zone.zone}</span>
                          <span className="ml-1" style={{ color: '#1e3a5f', opacity: 0.7 }}>{zone.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                {t('result_description')}
              </p>
            </div>
          </div>
        </section>

        {/* Medical Uses - Imagen 3 */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-blue-900">
              {t('medical_uses_title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              {t('medical_uses_p1')}
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid gap-6">
                  {medicalUses.map((use, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium" style={{ color: '#1e3a5f' }}>{use.title}</span>
                        <span className="ml-1" style={{ color: '#1e3a5f', opacity: 0.7 }}>{use.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Pérez Technique - Imagen 4 */}
        <section
          className="py-16 text-white"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #306dcfff 50%, #1d4ed8 100%)'
          }}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              {t('technique_title')}
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl leading-relaxed mb-12 text-center">
                {t('technique_p1')}
              </p>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-8 text-center">{t('technique_features_title')}</h3>
                <div className="grid gap-6 max-w-4xl mx-auto">
                  {techniqueFeatures.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-lg">{item.feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Duration - Imagen 5 */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                {t('duration_title')}
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                {t('duration_p1')}
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                <strong>{t('duration_result')}</strong> {t('duration_result_time')}
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                {t('duration_varies_p1')}
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 ml-6">
                {Object.keys(t.raw('duration_factors') || {}).map((key, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{t(`duration_factors.${key}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700">
                {t('duration_recommendation')}
              </p>
            </div>
          </div>
        </section>

        {/* Side Effects - Imagen 6 */}
        <section className="py-16 text-white" style={{ backgroundColor: '#1e3a5f' }}>
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {t('side_effects_title')}
            </h2>
            <p className="text-lg leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              {t('side_effects_p1')}
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
              {sideEffects.map((effect, index) => (
                <div key={index} className="bg-blue-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <img
                      src="/images/iconos/cheque.png"
                      alt={effect.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="font-medium text-center leading-tight text-sm" style={{ color: '#1e3a5f' }}>
                    {effect.title}
                  </h4>
                  <p className="text-xs mt-2" style={{ color: '#1e3a5f', opacity: 0.7 }}>
                    {effect.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold max-w-4xl mx-auto">
                {t('side_effects_recommendation')}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ - Imagen 7 */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-blue-900">
                {t('faq_title')}
              </h2>
              <div className="w-24 h-1 bg-blue-900 mb-12"></div>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-blue-900 pr-4">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-blue-900 transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}