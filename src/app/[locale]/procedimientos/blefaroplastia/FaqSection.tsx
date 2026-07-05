"use client"

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FaqSection() {
  const t = useTranslations('blefaroplastia');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'];
  const faqData = faqKeys.map(key => ({
    question: t(`faqs.${key}.question`),
    answer: t(`faqs.${key}.answer`)
  }));

  return (
    <section className="py-16" style={{ backgroundColor: '#babdb3' }}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="font-prototype text-3xl lg:text-4xl font-normal mb-4" style={{ color: '#1d3c5d' }}>
            {t('faq_title')}
          </h2>
          <div className="w-86 h-1" style={{ backgroundColor: '#1d3c5d' }}></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div
                className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-sansation text-lg font-bold" style={{ color: '#1d3c5d' }}>{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  style={{ color: '#1d3c5d' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <div className="font-sansation font-normal text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}