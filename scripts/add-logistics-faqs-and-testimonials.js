const fs = require('fs');
const path = require('path');

const baseDir = '/Users/carlosaceros/Documents/dr-andres-web-2026/web-andres';

// 1. Logistical FAQs to be added
const newFaqsEs = [
  {
    question: "¿Cuánto tiempo debo permanecer en Colombia para mi recuperación antes de poder viajar en avión?",
    answer: "El tiempo recomendado de estadía para una recuperación segura depende del procedimiento. Para cirugías mayores como el lifting facial (Deep Plane), se requiere una permanencia mínima de 10 a 14 días. Para procedimientos de menor complejidad como blefaroplastia, elevación de cejas, transferencia de grasa o explantación mamaria, el tiempo mínimo sugerido es de 7 a 10 días. Esto permite retirar suturas, realizar controles presenciales indispensables y garantizar que estés en condiciones óptimas para viajar de regreso."
  },
  {
    question: "¿Qué apoyo logístico y de acompañamiento ofrecen para pacientes internacionales?",
    answer: "Nuestro consultorio brinda un acompañamiento integral para pacientes que viajan desde el extranjero. Te asistimos recomendándote hoteles y casas de recuperación aliadas con tarifas especiales en Bogotá, coordinamos transporte privado bilingüe seguro desde y hacia el aeropuerto, y te conectamos con enfermeras profesionales especializadas en cuidados postquirúrgicos domiciliarios en caso de que viajes sin acompañante."
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados y ofrecen financiación?",
    answer: "Aceptamos diversos medios de pago para tu comodidad, incluyendo tarjetas de crédito internacionales (Visa, Mastercard, Amex), transferencias bancarias internacionales registradas (Swift), pagos locales electrónicos mediante PSE, y transferencias o tarjetas de débito/crédito nacionales. Es importante aclarar que no manejamos opciones de financiación local directa; toda la inversión del procedimiento debe quedar cubierta en su totalidad antes del día programado de la cirugía."
  }
];

const newFaqsEn = [
  {
    question: "How long do I need to stay in Colombia for my recovery before flying back?",
    answer: "The recommended stay for a safe recovery depends on the procedure. For major surgeries like the Deep Plane Facelift, a minimum stay of 10 to 14 days in Bogota is required. For less complex procedures like blepharoplasty, brow lifts, fat transfer, or breast explant, the suggested stay is 7 to 10 days. This allows for suture removal, essential in-person checkups, and guarantees you are in optimal health to travel home."
  },
  {
    question: "What logistical support and post-op accompaniment do you offer for international patients?",
    answer: "We provide comprehensive guidance for patients traveling from abroad. We assist you with accommodation recommendations at trusted hotels or recovery houses in Bogota with special partner rates, coordinate safe private bilingual transportation to and from the airport, and connect you with certified private nursing care services for your hotel stay if you are traveling alone."
  },
  {
    question: "What payment methods do you accept, and do you offer financing?",
    answer: "We accept multiple secure payment methods for your convenience, including international credit cards (Visa, Mastercard, Amex), international bank wire transfers (Swift), local Colombian PSE transfers, and national debit/credit cards. Please note that we do not offer local financing options; all fees must be fully settled prior to the scheduled date of your procedure."
  }
];

// 2. Testimonials data per page type
const testimonialsData = {
  facelift: {
    es: [
      {
        name: "Carolina",
        location: "Paciente de Miami, FL",
        text: "Definitivamente me siento fantástica, mucho más bonita. Me quité por lo menos 10 años de encima, me veo más fresca y menos cansada. Al cuarto y quinto día sentí mucha inflamación y me asusté, pero hoy que han pasado cinco semanas digo que vuelvo a amar el resultado. Quedé preciosa y no sufrí ningún cambio en mi fisionomía original."
      },
      {
        name: "Lucy & Hija",
        location: "Paciente de Chicago, IL",
        text: "Averigüé y me dieron muchas recomendaciones a nivel nacional e internacional, lo que me permite tener total confiabilidad. Mi hija confiesa: 'Al principio estaba nerviosa, pero empezamos a ver los videos del doctor, nos llegaron muy buenas referencias y conocerlo me dio absoluta tranquilidad. Sé que mi mamá está con un cirujano profesional y certificado'."
      }
    ],
    en: [
      {
        name: "Carolina",
        location: "Patient from Miami, FL",
        text: "I feel fantastic, much more beautiful. I look at least 10 years younger, fresher, and less tired. On the 4th and 5th day after surgery I was very swollen and got scared, but now that 5 weeks have passed, I love the result. I look beautiful and my facial structure remains natural."
      },
      {
        name: "Lucy & Daughter",
        location: "Patient from Chicago, IL",
        text: "I researched and received many recommendations nationally and internationally, which gave me total confidence. My daughter confesses: 'At first I was nervous, but we started watching the doctor\'s videos and got great references. Meeting him gave me absolute peace of mind. I knew my mother was in the hands of a certified, professional surgeon'."
      }
    ]
  },
  blefaroplastia: {
    es: [
      {
        name: "Paciente de Florida",
        location: "Orlando, FL",
        text: "Vengo desde la Florida súper emocionada al ver al doctor Andrés, el arte que tiene con esas manos es espectacular... Me realicé la cirugía que consta de blefaroplastia superior, inferior, y aplicación de células madre. Estoy muy contenta, me ha dado bastante elasticidad, color y brillo a la piel. Lo recomiendo, es lo mejor."
      },
      {
        name: "Víctor",
        location: "Estilista Profesional - Bogotá",
        text: "Como estilista de toda la vida, al principio era el detractor número uno y no quería que se operara. Pero quedé sorprendido: el doctor hizo algo súper natural, el mentón perfecto, las cicatrices son un hilo fino, los ojos no quedaron deformes, el parpadeo quedó idéntico y las cejas perfectas. Una recuperación excelente."
      }
    ],
    en: [
      {
        name: "Patient from Florida",
        location: "Orlando, FL",
        text: "I came from Florida super excited to see Dr. Andres. The art he does with his hands is spectacular... I underwent upper and lower blepharoplasty combined with stem cells. I am extremely happy, my skin has gained so much elasticity, color, and brightness. I highly recommend him."
      },
      {
        name: "Victor",
        location: "Professional Hair Stylist - Bogota",
        text: "As a long-time hair stylist, I was initially the number one skeptic. But I was amazed: the doctor did something super natural, the chin is perfect, the scars are like a fine thread, the eyes are not distorted, blink movement is natural, and brows are perfect. Excellent recovery."
      }
    ]
  },
  explantacion: {
    es: [
      {
        name: "Paciente de Chicago",
        location: "Chicago, IL",
        text: "Decidir explantarme con el Dr. Andrés Pérez Nieto fue la mejor decisión para mi salud. Desde la primera consulta me explicó detalladamente la técnica de Capsulectomía En Bloc y la reconstrucción. Hoy me siento libre de los síntomas de BII, con una recuperación maravillosa y un pecho con forma muy bonita y natural."
      },
      {
        name: "Paciente Anónima",
        location: "Paciente de Bogotá",
        text: "El doctor estuvo absolutamente pendiente después del procedimiento. La asesoría que brinda es de un profesional íntegro: tiene la capacidad de decirte qué te queda bien y qué no de manera honesta. El acompañamiento y el cuidado de cada detalle postquirúrgico es excepcional."
      }
    ],
    en: [
      {
        name: "Patient from Chicago",
        location: "Chicago, IL",
        text: "Choosing Dr. Andres Perez Nieto for my explant surgery was the best decision for my health. From the first consultation, he explained the En Bloc Capsulectomy and reconstruction. Today I am free of BII symptoms, had a wonderful recovery, and my breasts look very natural and beautiful."
      },
      {
        name: "Anonymous Patient",
        location: "Patient from Bogota",
        text: "The doctor was absolutely attentive after the procedure. The advice he provides is highly professional: he has the integrity to tell you what looks good on you and what doesn't. The follow-up care and attention to post-op details are exceptional."
      }
    ]
  },
  lipofilling: {
    es: [
      {
        name: "Paciente de Orlando",
        location: "Paciente de Florida",
        text: "La mejor decisión que he tomado con mi cara fue haber venido con el doctor Face. Las células madre de verdad es algo que tienen que probar, cuando sientan que el rostro se ve cansado o le falta vitalidad. Le da un aspecto natural y no es un relleno sintético, la piel lo agradece."
      },
      {
        name: "Paciente de Miami",
        location: "Miami, FL",
        text: "Me apliqué células madre de la cual me ha dado bastante elasticidad, color, y brillo a la piel. Muy contenta, recomendar al doctor es lo mejor. Se ve el rostro más brillante, irradiante y con un contorno natural."
      }
    ],
    en: [
      {
        name: "Patient from Orlando",
        location: "Patient from Florida",
        text: "The best decision I made for my face was coming to Dr. Face. Stem cells are truly something you have to try when your face starts looking tired or lacking vitality. It gives a natural look, not a synthetic filler, and the skin is grateful."
      },
      {
        name: "Patient from Miami",
        location: "Miami, FL",
        text: "I had stem cells injected, which gave my skin incredible elasticity, color, and shine. I am very happy, recommending the doctor is the best. My face looks brighter, radiant, and with a natural contour."
      }
    ]
  },
  cejas: {
    es: [
      {
        name: "Víctor",
        location: "Estilista - Bogotá",
        text: "Sorprendido, el doctor hizo algo súper natural. Las cejas quedaron perfectas, en una mejor ubicación, despejando la mirada y haciéndola ver más luminosa sin ningún rasgo artificial."
      },
      {
        name: "Testimonio Clínico",
        location: "Paciente de Bogotá",
        text: "Optamos por realizar elevación de cejas y blefaroplastia. El cambio en la mirada es inmediato: los párpados lucen despejados, el arco de las cejas está ubicado de forma muy precisa y la cicatriz quedó completamente camuflada en el borde del pelo, siendo invisible."
      }
    ],
    en: [
      {
        name: "Victor",
        location: "Hair Stylist - Bogota",
        text: "Amazed, the doctor did something super natural. The eyebrows look perfect, in a better position, opening up the eyes and making them look brighter without any artificial look."
      },
      {
        name: "Clinical Testimony",
        location: "Patient from Bogota",
        text: "We opted for a brow lift and blepharoplasty. The change in the eyes is immediate: the eyelids look open, the brow arch is precisely located, and the scar is completely camouflaged at the hairline, making it invisible."
      }
    ]
  }
};

// 3. Helper to build Testimonials JSX
function getTestimonialsJsx(type) {
  const cards = testimonialsData[type];
  if (!cards) return '';
  return `
      {/* Testimonios Transcritos en Texto */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-prototype text-3xl lg:text-4xl mb-4" style={{ color: '#1d3c5d' }}>
              {activeLocale === 'es' ? 'Testimonios Reales Transcritos' : 'Transcribed Patient Testimonials'}
            </h2>
            <p className="font-sansation text-sm text-gray-500 max-w-xl mx-auto">
              {activeLocale === 'es' 
                ? 'Opiniones y vivencias de pacientes reales tomadas directamente de sus testimonios en video.' 
                : 'Real patient experiences transcribed directly from their video testimonials.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative text-[#1d3c5d]">
              <span className="text-6xl text-[#1d3c5d] opacity-10 absolute top-4 left-4 font-serif">“</span>
              <p className="font-sansation text-gray-700 text-base italic mb-6 leading-relaxed relative z-10">
                {activeLocale === 'es' ? "${cards.es[0].text}" : "${cards.en[0].text}"}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1d3c5d] flex items-center justify-center text-white font-bold text-sm">
                  {activeLocale === 'es' ? "${cards.es[0].name.charAt(0)}" : "${cards.en[0].name.charAt(0)}"}
                </div>
                <div>
                  <h4 className="font-sansation font-bold text-[#1d3c5d] text-sm">{activeLocale === 'es' ? "${cards.es[0].name}" : "${cards.en[0].name}"}</h4>
                  <p className="font-sansation text-xs text-gray-400">{activeLocale === 'es' ? "${cards.es[0].location}" : "${cards.en[0].location}"}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative text-[#1d3c5d]">
              <span className="text-6xl text-[#1d3c5d] opacity-10 absolute top-4 left-4 font-serif">“</span>
              <p className="font-sansation text-gray-700 text-base italic mb-6 leading-relaxed relative z-10">
                {activeLocale === 'es' ? "${cards.es[1].text}" : "${cards.en[1].text}"}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1d3c5d] flex items-center justify-center text-white font-bold text-sm">
                  {activeLocale === 'es' ? "${cards.es[1].name.charAt(0)}" : "${cards.en[1].name.charAt(0)}"}
                </div>
                <div>
                  <h4 className="font-sansation font-bold text-[#1d3c5d] text-sm">{activeLocale === 'es' ? "${cards.es[1].name}" : "${cards.en[1].name}"}</h4>
                  <p className="font-sansation text-xs text-gray-400">{activeLocale === 'es' ? "${cards.es[1].location}" : "${cards.en[1].location}"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  `;
}

// 4. Update explantacion-mamaria/ClientContent.tsx
function updateExplantacion() {
  const file = path.join(baseDir, 'src/app/[locale]/procedimientos/explantacion-mamaria/ClientContent.tsx');
  let content = fs.readFileSync(file, 'utf8');

  // Inject New FAQs
  if (content.includes('¿Cuánto tiempo debo permanecer')) {
    console.log('Skipping explantacion FAQs (already done)');
  } else {
    content = content.replace(
      /const localFaqs = \{[\s\S]*?\n  \};/,
      `const localFaqs = {
    es: [
      {
        question: "¿Qué síntomas alivia la explantación mamaria?",
        answer: "La explantación mamaria con capsulectomía en bloc está altamente asociada con la mejoría drástica o desaparición completa de los síntomas sistémicos del Síndrome de Asia o Enfermedad de Implantes Mamarios (BII). Pacientes reportan alivio inmediato en la fatiga crónica, dolores articulares, niebla mental, problemas dermatológicos y migrañas."
      },
      {
        question: "¿Cómo queda el pecho estéticamente tras retirar los implantes?",
        answer: "La apariencia final depende del volumen previo, calidad de piel y si se realiza mastopexia (elevación) simultánea. El Dr. Andrés Pérez Nieto realiza una reconstrucción anatómica detallada utilizando tus propios tejidos grasos y glandulares para restaurar un contorno mamario armónico, redondeado y sumamente natural, evitando el aspecto de pecho vacío."
      },
      {
        question: "¿Qué tipo de anestesia y medidas de seguridad se utilizan?",
        answer: "Para tu total tranquilidad, la cirugía se realiza bajo anestesia general controlada y monitorización anestésica continua en clínicas certificadas como el Santa Ana Medical Center. Esto nos permite un control quirúrgico absoluto y máxima seguridad para la paciente durante el procedimiento."
      },
      ${JSON.stringify(newFaqsEs[0], null, 6)},
      ${JSON.stringify(newFaqsEs[1], null, 6)},
      ${JSON.stringify(newFaqsEs[2], null, 6)}
    ],
    en: [
      {
        question: "What symptoms does breast explant surgery relieve?",
        answer: "Breast explant surgery with en bloc capsulectomy is highly associated with the drastic improvement or complete resolution of systemic symptoms related to Breast Implant Illness (BII) or ASIA syndrome. Patients report immediate relief from chronic fatigue, joint pain, brain fog, skin issues, and headaches."
      },
      {
        question: "How will my breasts look aesthetically after removing the implants?",
        answer: "The final appearance depends on your initial tissue volume, skin elasticity, and whether a simultaneous mastopexy (lift) is performed. Dr. Andres Perez Nieto performs a detailed anatomical reconstruction using your own glandular and fat tissues to restore a harmonious, rounded, and natural breast contour, avoiding a hollowed look."
      },
      {
        question: "What type of anesthesia and safety protocols are used?",
        answer: "For your complete peace of mind, the surgery is performed under controlled general anesthesia with continuous monitoring by a certified anesthesiologist in authorized clinics like the Santa Ana Medical Center. This ensures absolute surgical control and maximum patient safety."
      },
      ${JSON.stringify(newFaqsEn[0], null, 6)},
      ${JSON.stringify(newFaqsEn[1], null, 6)},
      ${JSON.stringify(newFaqsEn[2], null, 6)}
    ]
  };`
    );
  }

  // Inject Testimonials Section
  if (!content.includes('Testimonios Reales Transcritos')) {
    content = content.replace(
      /\{\/\* FAQ Section \*\/\}/,
      `${getTestimonialsJsx('explantacion')}\n      {/* FAQ Section */}`
    );
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated Explantación Mamaria');
}

// 5. Update blefaroplastia/FaqSection.tsx & ClientContent.tsx
function updateBlefaroplastia() {
  const fileFaq = path.join(baseDir, 'src/app/[locale]/procedimientos/blefaroplastia/FaqSection.tsx');
  let contentFaq = fs.readFileSync(fileFaq, 'utf8');

  if (contentFaq.includes('¿Cuánto tiempo debo permanecer')) {
    console.log('Skipping blefaroplastia FAQs (already done)');
  } else {
    contentFaq = contentFaq.replace(
      /const localFaqs = \{[\s\S]*?\n  \};/,
      `const localFaqs = {
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
      },
      ${JSON.stringify(newFaqsEs[0], null, 6)},
      ${JSON.stringify(newFaqsEs[1], null, 6)},
      ${JSON.stringify(newFaqsEs[2], null, 6)}
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
      },
      ${JSON.stringify(newFaqsEn[0], null, 6)},
      ${JSON.stringify(newFaqsEn[1], null, 6)},
      ${JSON.stringify(newFaqsEn[2], null, 6)}
    ]
  };`
    );
    fs.writeFileSync(fileFaq, contentFaq, 'utf8');
  }

  // Inject Testimonials to ClientContent
  const fileContent = path.join(baseDir, 'src/app/[locale]/procedimientos/blefaroplastia/ClientContent.tsx');
  let content = fs.readFileSync(fileContent, 'utf8');
  if (!content.includes('Testimonios Reales Transcritos')) {
    content = content.replace(
      /<FaqSection \/>/,
      `${getTestimonialsJsx('blefaroplastia')}\n      <FaqSection />`
    );
    fs.writeFileSync(fileContent, content, 'utf8');
  }
  console.log('Updated Blefaroplastia');
}

// 6. Update lipofilling-celulas-madre/ClientContent.tsx
function updateLipofilling() {
  const file = path.join(baseDir, 'src/app/[locale]/procedimientos/lipofilling-celulas-madre/ClientContent.tsx');
  let content = fs.readFileSync(file, 'utf8');

  if (content.includes('¿Cuánto tiempo debo permanecer')) {
    console.log('Skipping lipofilling FAQs (already done)');
  } else {
    content = content.replace(
      /const localFaqs = \{[\s\S]*?\n  \};/,
      `const localFaqs = {
    es: [
      {
        question: "¿El lipofilling facial con células madre ofrece resultados permanentes?",
        answer: "Sí, a diferencia de los rellenos de ácido hialurónico que el cuerpo reabsorbe en 12 a 18 meses, la grasa transferida que sobrevive al proceso inicial de integración (típicamente entre el 60% y el 70%) permanece de forma definitiva en su nueva ubicación. Esta grasa se comporta exactamente como el resto del tejido adiposo del cuerpo, envejeciendo de forma natural y respondiendo a los cambios de peso del paciente."
      },
      {
        question: "What is the real difference between MicroFat and NanoFat?",
        answer: "MicroFat consists of fat micro-grafts that preserve their cellular structure, used mainly to restore lost volumes in cheekbones, cheeks, temples, or jawlines. On the other hand, NanoFat is an ultra-filtered liquid emulsion that does not contain large fat cells (meaning it does not add volume), but rather concentrates stem cells and growth factors, perfect for skin regeneration, smoothing dark circles, and fading fine lines."
      },
      {
        question: "What is the recovery process like after facial fat transfer?",
        answer: "Post-operative recovery is highly manageable. Mild swelling is expected in both the face and donor areas (typically abdomen or thighs) for the first 5 to 7 days. You should avoid rubbing or massaging your face to keep the transferred cells in place, avoid sleeping face down, and use strict solar protection. Most patients resume non-sporting daily activities within a week."
      },
      ${JSON.stringify(newFaqsEs[0], null, 6)},
      ${JSON.stringify(newFaqsEs[1], null, 6)},
      ${JSON.stringify(newFaqsEs[2], null, 6)}
    ],
    en: [
      {
        question: "Is facial fat transfer with stem cells permanent?",
        answer: "Yes. Unlike synthetic fillers like hyaluronic acid which are absorbed by the body within 12 to 18 months, the fat cells that successfully integrate and survive the initial healing phase (typically 60% to 70%) remain permanently in their new location. These cells behave like any other fat tissue in your body, responding naturally to weight fluctuations and the aging process."
      },
      {
        question: "What is the real difference between MicroFat and NanoFat?",
        answer: "MicroFat consists of fat micro-grafts that preserve their cellular structure, used mainly to restore lost volumes in cheekbones, cheeks, temples, or jawlines. On the other hand, NanoFat is an ultra-filtered liquid emulsion that does not contain large fat cells (meaning it does not add volume), but rather concentrates stem cells and growth factors, perfect for skin regeneration, smoothing dark circles, and fading fine lines."
      },
      {
        question: "What is the recovery process like after facial fat transfer?",
        answer: "Post-operative recovery is highly manageable. Mild swelling is expected in both the face and donor areas (typically abdomen or thighs) for the first 5 to 7 days. You should avoid rubbing or massaging your face to keep the transferred cells in place, avoid sleeping face down, and use strict solar protection. Most patients resume non-sporting daily activities within a week."
      },
      ${JSON.stringify(newFaqsEn[0], null, 6)},
      ${JSON.stringify(newFaqsEn[1], null, 6)},
      ${JSON.stringify(newFaqsEn[2], null, 6)}
    ]
  };`
    );
  }

  // Inject Testimonials
  if (!content.includes('Testimonios Reales Transcritos')) {
    content = content.replace(
      /\{\/\* FAQ Section - Responsive \*\/\}/,
      `${getTestimonialsJsx('lipofilling')}\n      {/* FAQ Section - Responsive */}`
    );
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated Lipofilling');
}

// 7. Update elevacion-cola-cejas/ClientContent.tsx
function updateCejas() {
  const file = path.join(baseDir, 'src/app/[locale]/procedimientos/elevacion-cola-cejas/ClientContent.tsx');
  let content = fs.readFileSync(file, 'utf8');

  if (content.includes('¿Cuánto tiempo debo permanecer')) {
    console.log('Skipping cejas FAQs (already done)');
  } else {
    content = content.replace(
      /const localFaqs = \{[\s\S]*?\n  \};/,
      `const localFaqs = {
    es: [
      {
        question: "¿Qué diferencia hay entre la elevación de cejas directa y un lifting de cejas temporal?",
        answer: "La elevación de cejas directa (resección de un arco de piel justo encima del límite del vello de la ceja) es la técnica más potente y precisa para corregir la caída del tercio lateral de la ceja (ptosis lateral). Permite al Dr. Andrés Pérez Nieto esculpir de manera milimétrica la altura y arco deseados. Por otro lado, un lifting temporal se realiza mediante incisiones en las sienes dentro del cuero cabelludo, ofreciendo una tracción más difusa pero ocultando la cicatriz por completo dentro del pelo."
      },
      {
        question: "What is the recovery period and when are sutures removed?",
        answer: "Recovery is fast and requires very little downtime. Swelling and mild bruising around the outer eye area are normal during the first 5 to 7 days. Sutures are meticulously removed on day 7. Most patients return to their social and professional activities within a week, using makeup to conceal any temporary redness."
      },
      {
        question: "Will the scars from a direct brow lift be noticeable?",
        answer: "The scar from a direct brow lift is designed to be exceptionally discreet. By placing the incision precisely along the upper edge of the eyebrow hair, it blends with the natural transition of the skin and hair. Over a period of 2 to 3 months, the scar fades, turning into a fine, flat line that can be easily concealed with makeup or the brow hair itself."
      },
      ${JSON.stringify(newFaqsEs[0], null, 6)},
      ${JSON.stringify(newFaqsEs[1], null, 6)},
      ${JSON.stringify(newFaqsEs[2], null, 6)}
    ],
    en: [
      {
        question: "What is the difference between a direct brow lift and a temporal brow lift?",
        answer: "A direct brow lift involves removing a precise strip of skin right above the eyebrow hair. It is the most powerful technique to customize and correct sagging of the outer brow. A temporal brow lift uses small incisions hidden inside the hairline at the temples, providing a lifting effect that pulls diagonally and hides the scar completely within the hair."
      },
      {
        question: "What is the recovery period and when are sutures removed?",
        answer: "Recovery is fast and requires very little downtime. Swelling and mild bruising around the outer eye area are normal during the first 5 to 7 days. Sutures are meticulously removed on day 7. Most patients return to their social and professional activities within a week, using makeup to conceal any temporary redness."
      },
      {
        question: "Will the scars from a direct brow lift be noticeable?",
        answer: "The scar from a direct brow lift is designed to be exceptionally discreet. By placing the incision precisely along the upper edge of the eyebrow hair, it blends with the natural transition of the skin and hair. Over a period of 2 to 3 months, the scar fades, turning into a fine, flat line that can be easily concealed with makeup or the brow hair itself."
      },
      ${JSON.stringify(newFaqsEn[0], null, 6)},
      ${JSON.stringify(newFaqsEn[1], null, 6)},
      ${JSON.stringify(newFaqsEn[2], null, 6)}
    ]
  };`
    );
  }

  // Inject Testimonials
  if (!content.includes('Testimonios Reales Transcritos')) {
    content = content.replace(
      /\{\/\* FAQ \*\/\}/,
      `${getTestimonialsJsx('cejas')}\n      {/* FAQ */}`
    );
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated Elevación Cola de Cejas');
}

// 8. Update lifting-facial-hamaca/Content.tsx & lifting-en-hamaca-de-mejilla-y-cuello/ClientContent.tsx
function updateFacelifts() {
  const files = [
    path.join(baseDir, 'src/app/[locale]/procedimientos/lifting-facial-hamaca/Content.tsx'),
    path.join(baseDir, 'src/app/[locale]/procedimientos/lifting-en-hamaca-de-mejilla-y-cuello/ClientContent.tsx')
  ];

  files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');

    if (content.includes('¿Cuánto tiempo debo permanecer')) {
      console.log(`Skipping FAQs for ${file} (already done)`);
    } else {
      content = content.replace(
        /const localFaqs = \{\s*es: \[\s*\{[\s\S]*?\}\s*\]\s*,\s*en: \[\s*\{[\s\S]*?\}\s*\]\s*\};/,
        (m) => {
          let esSection = m.match(/es: \[\s*\{[\s\S]*?\}\s*\]/)[0];
          let enSection = m.match(/en: \[\s*\{[\s\S]*?\}\s*\]/)[0];

          const newEs = esSection.replace(/\]$/, `,\n      ${JSON.stringify(newFaqsEs[0], null, 6)},\n      ${JSON.stringify(newFaqsEs[1], null, 6)},\n      ${JSON.stringify(newFaqsEs[2], null, 6)}\n    ]`);
          const newEn = enSection.replace(/\]$/, `,\n      ${JSON.stringify(newFaqsEn[0], null, 6)},\n      ${JSON.stringify(newFaqsEn[1], null, 6)},\n      ${JSON.stringify(newFaqsEn[2], null, 6)}\n    ]`);

          return `const localFaqs = {\n    es: ${newEs.slice(4)},\n    en: ${newEn.slice(4)}\n  };`;
        }
      );
    }

    // Inject Testimonials
    if (!content.includes('Testimonios Reales Transcritos')) {
      if (file.includes('lifting-facial-hamaca')) {
        content = content.replace(
          /\{\/\* Preguntas Frecuentes - Responsive \*\/\}/,
          `${getTestimonialsJsx('facelift')}\n      {/* Preguntas Frecuentes - Responsive */}`
        );
      } else {
        content = content.replace(
          /\{\/\* FAQ Section \*\/\}/,
          `${getTestimonialsJsx('facelift')}\n      {/* FAQ Section */}`
        );
      }
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated facelift page: ${file}`);
  });
}

// Run updates
updateExplantacion();
updateBlefaroplastia();
updateLipofilling();
updateCejas();
updateFacelifts();
console.log('All enrichment scripts successfully completed!');
