"use client"

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function FaqSection() {
  const { locale } = useParams() as { locale: 'es' | 'en' };
  const activeLocale = locale === 'en' ? 'en' : 'es';
  const t = useTranslations('blefaroplastia');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'];
  
  const localFaqs = {
    es: [
      {
        question: "¿Cuánto tiempo duran los resultados de la blefaroplastia?",
        answer: "Los resultados de la blefaroplastia son altamente duraderos. En el caso de los párpados inferiores, una vez retiradas o reposicionadas las bolsas de grasa con la técnica Fat Sliding, estas rara vez vuelven a aparecer. En los párpados superiores, el procedimiento retrocede el reloj biológico de 10 a 15 años. Aunque la piel seguirá envejeciendo de forma natural, los ojos siempre se verán significativamente más jóvenes y descansados que si no se hubiera realizado la cirugía."
      },
      {
        question: "¿Cómo son los cuidados postoperatorios y el proceso de recuperación?",
        answer: "La recuperación de la blefaroplastia es rápida y poco dolorosa. Durante las primeras 48 horas se recomienda aplicar compresas frías para minimizar la inflamación. Debes dormir con la cabeza elevada y evitar esfuerzos físicos pesados durante las primeras 2 semanas. Los puntos (en caso de blefaroplastia superior) se retiran entre los días 5 y 7. El uso de protector solar y gafas de sol es imprescindible durante los primeros 2 meses para proteger las incisiones del sol."
      },
      {
        question: "¿Quedan cicatrices visibles tras la cirugía de párpados?",
        answer: "Las cicatrices son prácticamente imperceptibles. En la blefaroplastia superior, la incisión se realiza estratégicamente sobre el pliegue natural del párpado, ocultándose por completo al abrir los ojos. En la blefaroplastia inferior, si se utiliza el abordaje transconjuntival (por dentro del párpado), no queda ninguna cicatriz externa. Si se requiere retirar exceso de piel inferior, la incisión se realiza justo debajo de la línea de las pestañas, camuflándose de forma excelente con el tiempo."
      }
    ],
    en: [
      {
        question: "How long do blepharoplasty results last?",
        answer: "Blepharoplasty results are long-lasting. For lower eyelids, once fat bags are removed or repositioned using the Fat Sliding technique, they rarely return. For upper eyelids, the procedure turns back the clock by 10 to 15 years. While skin will continue to age naturally, your eyes will always look significantly younger and more rested than if you had not undergone the surgery."
      },
      {
        question: "What is the post-operative care and recovery process like?",
        answer: "Blepharoplasty recovery is fast and involves minimal pain. Applying cold compresses is recommended during the first 48 hours to minimize swelling. You must sleep with your head elevated and avoid heavy physical exercise for the first 2 weeks. Sutures (for upper blepharoplasty) are removed between days 5 and 7. The use of sunscreen and sunglasses is essential during the first 2 months to protect incisions from solar radiation."
      },
      {
        question: "Will there be visible scars after eyelid surgery?",
        answer: "Scars are virtually invisible. In upper blepharoplasty, the incision is strategically placed along the natural crease of the eyelid, hiding completely when the eyes are open. In lower blepharoplasty, if a transconjunctival approach (inside the eyelid) is used, there is no external scar. If lower skin removal is required, the incision is placed right below the lash line, camouflaging beautifully over time."
      }
    ]
  };

  const faqData = [
    ...faqKeys.map(key => ({
      question: t(`faqs.${key}.question`),
      answer: t(`faqs.${key}.answer`)
    })),
    ...localFaqs[activeLocale]
  ];

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
                <div className="px-6 pb-6 border-t border-gray-50 pt-4">
                  <div className="font-sansation font-normal text-gray-700 leading-relaxed text-base">
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