export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPostMetadata {
  slug: string;
  locale: 'es' | 'en';
  title: string;
  subtitle: string;
  metaDescription: string;
  category: string;
  date: string;
  readingTime: string;
  quickAnswer: string;
  faqs: FAQ[];
  relatedProcedure: string; // Dynamic path prefix
  cluster: string;
  componentName: string;
  featuredImage: string;
}

export const blogPosts: BlogPostMetadata[] = [
  {
    slug: 'lifting-hamaca-deep-plane-soporte-facial',
    locale: 'es',
    title: 'Lifting Facial Hamaca Deep Plane®: El Arte de la Restauración Estructural',
    subtitle: 'Descubre por qué la clave de un rejuvenecimiento duradero está en levantar la musculatura profunda y no en estirar la piel.',
    metaDescription: 'Guía sobre el Lifting Facial Hamaca Deep Plane® en Bogotá con el Dr. Andrés Pérez. Entiende el concepto de soporte profundo y cómo lograr resultados naturales.',
    category: 'Cirugía Facial',
    date: '2026-07-06',
    readingTime: '7 min',
    quickAnswer: 'El Lifting Facial Hamaca Deep Plane® reposiciona los ligamentos y el músculo SMAS caídos en las capas profundas del rostro en lugar de traccionar la piel de forma superficial. Esto actúa como una hamaca interna de soporte, brindando resultados ultra naturales de rejuvenecimiento en mandíbula y cuello.',
    relatedProcedure: '/procedimientos/lifting-facial-hamaca',
    cluster: 'lifting-facial',
    componentName: 'LiftingHamacaDeepPlanePost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: '¿Qué es el plano profundo o Deep Plane?',
        answer: 'Es la capa anatómica que se encuentra por debajo de los músculos faciales de la expresión. Trabajar en este plano permite liberar los ligamentos de fijación y reposicionar todo el contorno facial sin tensión superficial en la piel.'
      },
      {
        question: '¿Por qué se asocia con el concepto de una hamaca?',
        answer: 'Porque al suspender y fijar la musculatura del cuello (platisma) a estructuras estables detrás del oído, se crea una red interna de suspensión cruzada idéntica a una hamaca que sostiene el peso del cuello y la papada permanentemente.'
      }
    ]
  },
  {
    slug: 'envejecimiento-facial-temprano-sintomas-lifting',
    locale: 'es',
    title: '¿Envejecimiento Facial Temprano? Por qué es el mejor momento para actuar',
    subtitle: 'Aprende a reconocer las señales iniciales del paso del tiempo y las ventajas de preservar el soporte profundo de tu rostro.',
    metaDescription: 'Descubre las ventajas del rejuvenecimiento preventivo con el Lifting Facial Hamaca Deep Plane® en Bogotá. Identifica los signos antes de que aparezcan arrugas profundas.',
    category: 'Cirugía Facial',
    date: '2026-07-06',
    readingTime: '6 min',
    quickAnswer: 'El envejecimiento del rostro comienza en las estructuras profundas (hueso, compartimentos grasos y ligamentos) mucho antes de que la piel muestre arrugas evidentes. Intervenir tempranamente mediante técnicas Deep Plane permite preservar la elasticidad natural de los tejidos, logrando una recuperación rápida y resultados más prolongados.',
    relatedProcedure: '/procedimientos/lifting-facial-hamaca',
    cluster: 'lifting-facial',
    componentName: 'EnvejecimientoTempranoPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: '¿Cuáles son los primeros signos de envejecimiento profundo?',
        answer: 'Suelen incluir el descenso de la cola de la ceja, pérdida de volumen en las mejillas, inicio de pérdida de definición en la mandíbula (aparición de jowls) y expresión de cansancio constante.'
      },
      {
        question: '¿Actuar temprano significa operarse antes de tiempo?',
        answer: 'No. Significa realizar procedimientos conservadores de reposicionamiento profundo para preservar y mantener la arquitectura facial natural de tu rostro en lugar de reconstruir daños anatómicos severos más adelante.'
      }
    ]
  },
  {
    slug: 'explantacion-mamaria-bogota-colombia',
    locale: 'es',
    title: 'Explantación mamaria en Bogotá: Salud, seguridad y un regreso a lo natural',
    subtitle: 'Todo lo que necesitas saber sobre el retiro de prótesis mamarias, el Síndrome de ASIA y la reconstrucción natural.',
    metaDescription: 'Guía honesta sobre explantación mamaria en Bogotá. Conoce los motivos, la recuperación, el Síndrome de ASIA y las opciones de reconstrucción con resultados naturales.',
    category: 'Cirugía Mamaria',
    date: '2026-04-07',
    readingTime: '8 min',
    quickAnswer: 'La explantación mamaria es el retiro definitivo de los implantes de seno y su cápsula de tejido cicatricial. Se realiza por motivos de salud (Síndrome de ASIA, contractura, rotura) o preferencia estética de volver a una silueta natural, combinándose con levantamiento (mastopexia) o lipotransferencia.',
    relatedProcedure: '/procedimientos/explantacion-mamaria',
    cluster: 'explantacion-mamaria',
    componentName: 'ExplantacionMamariaPost',
    featuredImage: '/images/blog/explantacion-mamaria.jpg',
    faqs: [
      {
        question: '¿Cuánto tiempo estaré inflamada tras la explantación?',
        answer: 'La inflamación aguda dura aproximadamente entre 2 y 3 semanas, pero la inflamación residual (la etapa tardía de nuestra "montaña rusa") puede tardar de 3 a 6 meses en resolverse completamente para ver el resultado definitivo.'
      },
      {
        question: '¿Cuándo puedo volver al trabajo?',
        answer: 'Si tu trabajo es de oficina o remoto, generalmente puedes retomarlo entre los 7 y 10 días posteriores a la cirugía, siempre evitando esfuerzos físicos o levantar peso con los brazos.'
      },
      {
        question: '¿Puedo viajar después de mi cirugía de explantación?',
        answer: 'Sí, pero no recomendamos realizar vuelos internacionales hasta que hayan pasado al menos 15 a 20 días desde el procedimiento, para evitar riesgos de trombosis y asegurar que las heridas estén en óptimas condiciones.'
      },
      {
        question: '¿Los síntomas del Síndrome de ASIA desaparean por completo?',
        answer: 'Muchas pacientes experimentan una mejoría significativa en su calidad de vida y energía; sin embargo, no podemos prometer como cirujanos que el 100% de los síntomas sistémicos desaparecerán, ya que cada sistema inmunológico es único.'
      }
    ]
  },
  {
    slug: 'lifting-facial-en-bogota-colombia-2026',
    locale: 'es',
    title: 'Lifting Facial en 2026: Rejuvenece Sin Perder Naturalidad',
    subtitle: 'La tendencia definitiva va hacia el rejuvenecimiento estructural profundo mediante técnica Deep Plane y protocols combinados.',
    metaDescription: 'Descubre el lifting facial moderno en 2026. Técnica Deep Plane en Bogotá para un rejuvenecimiento natural, sin perder tu identidad. Conoce todo el proceso y recuperación.',
    category: 'Cirugía Facial',
    date: '2026-04-07',
    readingTime: '7 min',
    quickAnswer: 'El lifting facial moderno (Deep Plane) no tensiona la piel, sino que reposiciona los músculos y ligamentos caídos de los planos profundos del rostro. Esto garantiza una expresión totalmente natural, fresca y duradera, evitando el aspecto "jalado" o artificial del pasado.',
    relatedProcedure: '/procedimientos/lifting-facial-hamaca',
    cluster: 'lifting-facial',
    componentName: 'LiftingFacialPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: '¿A qué edad conviene realizarse un lifting facial?',
        answer: 'No hay una edad exacta, depende del grado de flacidez y envejecimiento de cada paciente. En 2026, estamos viendo tanto pacientes de 50 a 65 años buscando corrección profunda, como pacientes entre 30 y 45 años optando por liftings preventivos para mantener la estructura y evitar excesos de rellenos.'
      },
      {
        question: '¿El resultado del lifting se ve verdaderamente natural?',
        answer: 'Sí, totalmente natural. Al usar técnicas como el Deep Plane, donde reposicionamos los músculos y ligamentos en lugar de solo jalar la piel superficial, logramos una apariencia fresca y descansada. Mantendrás tus expresiones y esa esencia que te caracteriza.'
      },
      {
        question: '¿Cuánto dura el tiempo de recuperación?',
        answer: 'El tiempo de recuperación principal (fase aguda) toma entre 10 a 14 días para volver a actividades sociales y laborales ligeras. Sin embargo, la desinflamación completa y el resultado final definitivo se aprecian entre los 6 y 12 meses.'
      },
      {
        question: '¿Se puede combinar con otros tratamientos como la blefaroplastia?',
        answer: '¡Es lo ideal! En la misma cirugía solemos combinar el lifting con una blefaroplastia (cirugía de párpados), elevación de cejas o lipofilling facial. Esto garantiza un rejuvenecimiento global y armónico.'
      },
      {
        question: '¿Qué diferencia hay entre lifting y rejuvenecimiento facial sin cirugía?',
        answer: 'Los tratamientos sin cirugía mejoran la calidad de la piel y suavizan arrugas, pero no pueden levantar tejidos que ya han cedido significativamente por gravedad. El lifting reposiciona anatómicamente el rostro caído, ofreciendo un resultado estructural que no se logra solo con inyectables.'
      }
    ]
  },
  {
    slug: 'rejuvenecimiento-facial-celulas-madre-bogota-colombia-2026',
    locale: 'es',
    title: 'Rejuvenecimiento con Células Madre: Qué puede aportar realmente',
    subtitle: 'Descubre la verdad sobre la medicina regenerativa facial, el lipofilling autólogo y los límites reales del tratamiento.',
    metaDescription: 'Descubre la verdad sobre el rejuvenecimiento facial con células madre en 2026. Conoce las diferencias con el PRP, exosomas y qué esperar realmente del tratamiento en Bogotá.',
    category: 'Medicina Regenerativa',
    date: '2026-04-07',
    readingTime: '6 min',
    quickAnswer: 'El rejuvenecimiento facial con células madre (vía transferencia de grasa autóloga enriquecida) permite restaurar los volúmenes perdidos de forma permanente y bioestimular los tejidos cutáneos mejorando el brillo y la elasticidad de la piel, algo que los rellenos temporales de ácido hialurónico no pueden lograr.',
    relatedProcedure: '/procedimientos/lipofilling-celulas-madre',
    cluster: 'celulas',
    componentName: 'RejuvenecimientoCelulasMadrePost',
    featuredImage: '/images/blog/inyectables.jpg',
    faqs: [
      {
        question: '¿Cuánto dura el efecto del injerto de grasa?',
        answer: 'Una vez que la grasa inyectada se vasculariza y sobrevive los primeros 3 meses (aproximadamente el 60-70% del volumen inicial), el resultado es permanente y envejecerá de forma natural con el paciente.'
      },
      {
        question: '¿De dónde se extrae la grasa?',
        answer: 'Habitualmente la extraemos de zonas con depósitos localizados como el abdomen bajo, los flancos o la parte interna de los muslos mediante una micro-liposucción suave.'
      }
    ]
  },
  {
    slug: 'cirugia-de-parpados-blefaroplastia-bogota-colombia',
    locale: 'es',
    title: 'Cirugía de párpados (Blefaroplastia): Rejuvenece tu mirada en Bogotá',
    subtitle: 'Cómo eliminar bolsas de grasa, corregir el párpado encapotado y devolver la frescura a tus ojos de forma definitiva.',
    metaDescription: 'Guía sobre la cirugía de párpados (blefaroplastia) en Bogotá con el Dr. Andrés Pérez. Conoce las técnicas, cicatrices y proceso de recuperación rápido.',
    category: 'Cirugía Facial',
    date: '2026-04-07',
    readingTime: '6 min',
    quickAnswer: 'La blefaroplastia elimina el exceso de piel flácida y reposiciona las bolsas de grasa de los párpados superiores e inferiores. Se realiza de forma ambulatoria bajo anestesia local más sedación, con una recuperación rápida de 7 a 10 días y cicatrices prácticamente imperceptibles.',
    relatedProcedure: '/procedimientos/blefaroplastia',
    cluster: 'blefaroplastia',
    componentName: 'BlefaroplastiaAprendePost',
    featuredImage: '/images/blog/blefaroplastia.jpg',
    faqs: [
      {
        question: '¿La blefaroplastia corrige las patas de gallo?',
        answer: 'No directamente. La blefaroplastia maneja el exceso de piel y bolsas de los párpados. Las arrugas dinámicas del contorno ocular se tratan complementariamente con toxina botulínica.'
      },
      {
        question: '¿Quedan cicatrices visibles en los párpados?',
        answer: 'Las incisiones se ocultan en el pliegue natural del párpado superior y justo debajo de las pestañas inferiores (o por dentro del párpado vía transconjuntival), haciéndose casi invisibles en pocas semanas.'
      }
    ]
  },
  {
    slug: 'enfermedad-implantes-mamarios-sintomas',
    locale: 'es',
    title: 'Enfermedad de los implantes mamarios (BII): 10 síntomas comunes',
    subtitle: 'Aprende a reconocer las señales del Síndrome de ASIA y cómo la explantación total ayuda a desintoxicar tu cuerpo.',
    metaDescription: '10 síntomas del Síndrome de ASIA / Enfermedad del Implante Mamario. Diagnóstico clínico, criterios y cómo la explantación total en Bogotá ayuda a tu salud.',
    category: 'Cirugía Mamaria',
    date: '2026-04-08',
    readingTime: '7 min',
    quickAnswer: 'La Enfermedad del Implante Mamario (BII) o Síndrome de ASIA es una respuesta autoinmune e inflamatoria del cuerpo ante los implantes de silicona. Los síntomas más comunes incluyen fatiga crónica, dolores articulares, niebla mental, pérdida de cabello y problemas dermatológicos, que suelen aliviarse tras un explante completo.',
    relatedProcedure: '/procedimientos/explantacion-mamaria',
    cluster: 'explantacion-mamaria',
    componentName: 'EnfermedadImplantesSintomasPost',
    featuredImage: '/images/blog/explantacion-mamaria.jpg',
    faqs: [
      {
        question: '¿Existe un examen de sangre para diagnosticar el ASIA?',
        answer: 'No hay una prueba específica única. Se diagnostica clínicamente descartando otras patologías autoinmunes y evaluando la mejoría tras el explante.'
      },
      {
        question: '¿Es obligatorio retirar la cápsula cicatricial?',
        answer: 'Sí. En sospecha de ASIA o enfermedad de implantes, realizar una capsulectomía total (retirar el 100% de la cápsula) es indispensable para eliminar el estímulo inmunológico.'
      }
    ]
  },
  {
    slug: 'deep-plane-vs-smas-vs-mini-lifting',
    locale: 'es',
    title: 'Deep Plane vs. SMAS vs. Mini Lifting: ¿Cuál es mejor para ti?',
    subtitle: 'Comparamos las tres técnicas principales de estiramiento facial, sus resultados, cicatrices y tiempos de recuperación.',
    metaDescription: 'Diferencias entre Deep Plane Facelift, lifting SMAS clásico y minilifting facial en Bogotá. Compara cicatrices, duración de resultados y cuál elegir.',
    category: 'Cirugía Facial',
    date: '2026-04-09',
    readingTime: '7 min',
    quickAnswer: 'El Deep Plane actúa debajo del plano muscular sin tracción cutánea (resultados ultra naturales de 10-15 años). El SMAS clásico tensa el músculo superficialmente (duración de 7-10 años). El minilifting es una opción simplificada para flacidez leve de piel.',
    relatedProcedure: '/procedimientos/lifting-facial-hamaca',
    cluster: 'lifting-facial',
    componentName: 'DeepPlaneVsSmasPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: '¿Qué técnica tiene una cicatriz más corta?',
        answer: 'El minilifting tiene una cicatriz más reducida, pero sus resultados también son limitados. Un cirujano experto en Deep Plane logra disimular las cicatrices perfectamente detrás del trago de la oreja.'
      },
      {
        question: '¿Qué es el SMAS?',
        answer: 'Es el Sistema Músculo Aponeurótico Superficial, la capa muscular y fibrosa profunda que sostiene las mejillas y el cuello.'
      }
    ]
  },
  {
    slug: 'lifting-en-hamaca-tecnica-perez-nieto',
    locale: 'es',
    title: 'Lifting en Hamaca (Hammock Lift): Mi técnica firma en Bogotá',
    subtitle: 'Descubre cómo reposicionamos los músculos profundos del rostro mediante vectores cruzados para un cuello y mandíbula perfectos.',
    metaDescription: 'La técnica patentada de Lifting en Hamaca (Hammock Lift) del Dr. Andrés Pérez Nieto en Bogotá. Resultados estéticos y naturales en mejillas y cuello.',
    category: 'Cirugía Facial',
    date: '2026-04-10',
    readingTime: '6 min',
    quickAnswer: 'El lifting en hamaca suspende el músculo platisma y el SMAS utilizando un anclaje bidireccional cruzado en forma de hamaca. Esto redefine de forma insuperable el ángulo del cuello y la línea mandibular, eliminando la flacidez sin producir un aspecto plano o estirado artificial.',
    relatedProcedure: '/procedimientos/lifting-facial-hamaca',
    cluster: 'lifting-facial',
    componentName: 'LiftingHamacaPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: '¿Por qué se llama técnica en hamaca?',
        answer: 'Porque las suturas profundas cruzan los vectores de tensión de lado a lado bajo el ángulo mandibular, creando una red de soporte elástica y firme similar a la suspensión de una hamaca.'
      },
      {
        question: '¿Cuánto tiempo dura el resultado?',
        answer: 'Es uno de los estiramientos más estables en el tiempo, con una duración estimada de 10 a 12 años dependiendo del estilo de vida del paciente.'
      }
    ]
  },
  {
    slug: 'bichectomia-en-ingles-buccal-fat-removal',
    locale: 'es',
    title: 'Bichectomía en inglés: ¿Qué es el Buccal Fat Removal?',
    subtitle: 'Analizamos por qué los pacientes internacionales buscan este procedimiento y las diferencias de enfoque clínico.',
    metaDescription: '¿Qué es el Buccal Fat Removal o bichectomía en inglés? Criterios de idoneidad, complicaciones a largo plazo y alternativas de perfilado facial en Bogotá.',
    category: 'Cirugía Facial',
    date: '2026-04-11',
    readingTime: '5 min',
    quickAnswer: 'El Buccal Fat Removal o bichectomía es la extracción quirúrgica de las bolsas de grasa de Bichat ubicadas en las mejillas. Permite adelgazar y perfilar el rostro. Se debe realizar con criterio médico estricto para evitar un aspecto demacrado o envejecido con los años.',
    relatedProcedure: '/procedimientos/bichectomia',
    cluster: 'bichectomia',
    componentName: 'BichectomiaInglesPost',
    featuredImage: '/images/blog/inyectables.jpg',
    faqs: [
      {
        question: '¿La bichectomía envejece la cara a largo plazo?',
        answer: 'Sí, si se realiza en pacientes con rostros ya delgados o con poca estructura ósea. La grasa de las mejillas se pierde con la edad, por lo que una extracción excesiva puede acentuar la flacidez tardía.'
      },
      {
        question: '¿Es reversible la extracción de bolsas de Bichat?',
        answer: 'La grasa retirada no se regenera. Revertir el efecto requiere rellenos de ácido hialurónico o injertos de grasa (lipofilling) en el futuro.'
      }
    ]
  },
  {
    slug: 'precio-explantacion-mamaria-bogota',
    locale: 'es',
    title: 'Precio de la explantación mamaria en Bogotá: Guía de Costos',
    subtitle: 'Desglosamos detalladamente los costos quirúrgicos, derechos de clínica, anestesiología y patología en Colombia.',
    metaDescription: '¿Cuánto cuesta un retiro de implantes mamarios en Bogotá en 2026? Guía honesta de precios de explantación, capsulectomía, mastopexia y patologías.',
    category: 'Cirugía Mamaria',
    date: '2026-04-12',
    readingTime: '6 min',
    quickAnswer: 'El precio de la explantación mamaria en Bogotá varía entre 14,000,000 COP y 25,000,000 COP ($3,500 - $6,500 USD), dependiendo de la complejidad (capsulectomía total o en bloque), la necesidad de asociar un levantamiento (mastopexia) o rellenar volumen con grasa del paciente (lipofilling).',
    relatedProcedure: '/procedimientos/explantacion-mamaria',
    cluster: 'explantacion-mamaria',
    componentName: 'PrecioExplantacionPost',
    featuredImage: '/images/blog/explantacion-mamaria.jpg',
    faqs: [
      {
        question: '¿Por qué varía tanto el precio de la explantación?',
        answer: 'Depende de si necesitas reconstruir el volumen mamario caído (mastopexia con o sin grasa) o de si la extracción de cápsula requiere técnica En Bloc de alta complejidad.'
      },
      {
        question: '¿Qué incluye el presupuesto que me entregan?',
        answer: 'Honorarios del equipo quirúrgico, alquiler de quirófano en clínica de alta complejidad, honorarios de anestesiología, controles postoperatorios y estudio de patología.'
      }
    ]
  },
  {
    slug: 'facelift-cost-colombia-vs-usa-2026',
    locale: 'en',
    title: 'Facelift Cost: Colombia vs. USA (2026 Comparison)',
    subtitle: 'Save 60% on your deep plane facelift in Bogotá while receiving world-class board-certified surgical care.',
    metaDescription: 'Compare facelift costs between Colombia and the USA in 2026. Learn about savings, safety, and why U.S. patients travel to Bogotá for Deep Plane Facelift.',
    category: 'Facial Surgery',
    date: '2026-04-13',
    readingTime: '6 min',
    quickAnswer: 'A facelift in Bogotá, Colombia costs between $5,500 and $8,500 USD, representing a 60% to 70% savings compared to the USA or Canada, where prices range from $12,000 to $30,000 USD. This price is all-inclusive of surgical fees, anesthesia, and recovery checks.',
    relatedProcedure: '/procedimientos/lifting-facial-hamaca',
    cluster: 'lifting-facial',
    componentName: 'FaceliftCostEnPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: 'Why is plastic surgery more affordable in Colombia?',
        answer: 'Lower operating and overhead expenses, coupled with a highly favorable exchange rate, allow top-tier board-certified surgeons in Colombia to charge 60-70% less than surgeons in the US or Canada.'
      },
      {
        question: 'How long do I need to stay in Colombia after a facelift?',
        answer: 'You must plan to stay in Bogotá for at least 12 to 14 days post-op to ensure proper initial wound healing, stitch removal, and dynamic clearance before your flight.'
      }
    ]
  },
  {
    slug: 'explantacion-con-o-sin-pexia',
    locale: 'es',
    title: 'Explantación con o sin pexia (levantamiento de senos): ¿Cuál necesitas?',
    subtitle: 'Comparamos los criterios médicos para decidir si necesitas asociar un levantamiento en tu explantación.',
    metaDescription: 'Descubre si necesitas asociar una mastopexia (levantamiento) a tu cirugía de explantación mamaria en Bogotá. Analizamos elasticidad, volumen y ptosis.',
    category: 'Cirugía Mamaria',
    date: '2026-04-14',
    readingTime: '6 min',
    quickAnswer: 'La mastopexia o pexia es necesaria tras un explante si presentas ptosis mamaria (pezón mirando hacia abajo), si llevaste prótesis grandes que estiraron la piel, o si tus tejidos tienen baja elasticidad. En casos de implantes pequeños y excelente tono cutáneo, puede realizarse un explante simple.',
    relatedProcedure: '/procedimientos/explantacion-mamaria',
    cluster: 'explantacion-mamaria',
    componentName: 'ExplantacionPexiaPost',
    featuredImage: '/images/blog/explantacion-mamaria.jpg',
    faqs: [
      {
        question: '¿Qué cicatriz deja el levantamiento mamario?',
        answer: 'Dependiendo del grado de caída, puede ser una cicatriz areolar (alrededor de la areola), vertical, o en forma de T invertida (ancla), diseñadas estéticamente para atenuarse.'
      },
      {
        question: '¿Puedo usar grasa para dar volumen en el levantamiento?',
        answer: 'Sí, la lipotransferencia mamaria es el complemento ideal para rellenar la parte superior del seno sin prótesis.'
      }
    ]
  },
  {
    slug: 'explantacion-en-bloque-vs-capsulectomia',
    locale: 'es',
    title: 'Explantación en bloque (En Bloc) vs. Capsulectomía total: diferencias',
    subtitle: 'Explicamos la diferencia técnica entre retirar el implante con su cápsula cerrada o disecarla por partes.',
    metaDescription: 'Diferencias clínicas entre explantación En Bloc (en bloque) y capsulectomía total en Bogotá. Conoce cuándo se indica cada una por seguridad.',
    category: 'Cirugía Mamaria',
    date: '2026-04-15',
    readingTime: '6 min',
    quickAnswer: 'La explantación En Bloc consiste en retirar el implante y toda su cápsula cicatricial intactos y cerrados como una sola pieza. La capsulectomía total remueve todo el tejido capsular pero permite abrir el espacio para extraer la prótesis primero, indicada si hay riesgos pleurales o vasculares.',
    relatedProcedure: '/procedimientos/explantacion-mamaria',
    cluster: 'explantacion-mamaria',
    componentName: 'EnBlocVsCapsulectomiaPost',
    featuredImage: '/images/blog/explantacion-mamaria.jpg',
    faqs: [
      {
        question: '¿Cuándo es obligatoria la técnica En Bloc?',
        answer: 'Se indica fundamentalmente en casos de implantes rotos con sospecha de silicona libre o ante sospechas del linfoma asociado a implantes (BIA-ALCL).'
      },
      {
        question: '¿Toda paciente con Síndrome de ASIA requiere En Bloc?',
        answer: 'Lo vital es la capsulectomía total (extraer todo el tejido cicatricial). Si se puede hacer En Bloc de forma segura, se prefiere, pero la prioridad es no dañar la pleura pulmonar.'
      }
    ]
  },
  {
    slug: 'lip-lift-cicatriz-resultados',
    locale: 'es',
    title: 'Lip lift en Bogotá: cicatriz, resultados y diferencia con rellenos',
    subtitle: 'Aprende cómo el acortamiento del labio superior rejuvenece tu sonrisa de forma permanente sin efecto boca de pato.',
    metaDescription: 'Todo sobre el Lip Lift o levantamiento de labio superior en Bogotá. Descubre dónde se ubica la cicatriz, resultados naturales y diferencia con rellenos.',
    category: 'Cirugía Facial',
    date: '2026-04-16',
    readingTime: '6 min',
    quickAnswer: 'El Lip Lift es un procedimiento quirúrgico ambulatorio que acorta la distancia entre la base de la nariz y el labio superior, evertiendo la mucosa roja. Corrige el labio largo que cubre los dientes al hablar, logrando un resultado definitivo sin la proyección artificial de los rellenos de ácido hialurónico.',
    relatedProcedure: '/procedimientos/lip-lift',
    cluster: 'lip-lift',
    componentName: 'LipLiftCicatrizPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: '¿Cuánto dura la cicatrización del Lip Lift?',
        answer: 'Los puntos se retiran a los 7 días. La cicatriz en la base de la nariz se enrojece ligeramente al principio y madura haciéndose casi invisible entre el mes 2 y 3.'
      },
      {
        question: '¿Se realiza bajo anestesia general?',
        answer: 'No, por lo general se realiza bajo anestesia local en consultorio o con sedación suave, de forma totalmente ambulatoria.'
      }
    ]
  },
  {
    slug: 'edad-ideal-lifting-facial',
    locale: 'es',
    title: '¿A qué edad hacerse un lifting facial? Señales de que es el momento',
    subtitle: 'Analizamos por qué la elasticidad de los tejidos y la caída muscular definen el momento quirúrgico y no tu edad.',
    metaDescription: '¿Cuándo hacerse un lifting facial? Conoce las señales de flacidez en mandíbula y cuello, la tendencia del lifting preventivo y la edad ideal en Bogotá.',
    category: 'Cirugía Facial',
    date: '2026-04-17',
    readingTime: '5 min',
    quickAnswer: 'La edad ideal para un lifting facial se define por la pérdida de definición del contorno mandibular (jowls) y bandas musculares en el cuello. Puede realizarse de forma preventiva entre los 35 y 45 años con recuperaciones rápidas, o como corrección profunda a partir de los 50 años mediante técnica Deep Plane.',
    relatedProcedure: '/procedimientos/lifting-facial-hamaca',
    cluster: 'lifting-facial',
    componentName: 'EdadIdealLiftingPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: '¿Tiene sentido un lifting a los 40 años?',
        answer: 'Sí. Se conoce como lifting preventivo o de mantenimiento. Ayuda a reposicionar tejidos incipientes y requiere cirugías más cortas con resultados muy sutiles.'
      },
      {
        question: '¿Qué pasa si espero hasta los 65 años?',
        answer: 'El lifting sigue siendo viable y altamente efectivo, pero requerirá una técnica de plano profundo completa para manejar la flacidez cutánea y muscular avanzada.'
      }
    ]
  },
  {
    slug: 'recuperacion-lifting-facial-dia-a-dia',
    locale: 'es',
    title: 'Recuperación del lifting facial día a día: lo que debes esperar',
    subtitle: 'Guía del postoperatorio: control de inflamación, retiro de puntos y cuándo volver a tu vida social.',
    metaDescription: 'Guía detallada del postoperatorio de un lifting facial. Qué esperar del día 1 al 14, cuidados posturales, manejo de morados y cicatrización en Bogotá.',
    category: 'Cirugía Facial',
    date: '2026-04-18',
    readingTime: '6 min',
    quickAnswer: 'La recuperación del lifting facial tiene su pico de inflamación en los primeros 3 días. Los puntos se retiran hacia el día 7 y a partir del día 10 a 14 la mayoría de las pacientes pueden retomar sus labores de oficina. Los esfuerzos físicos pesados y gimnasio se suspenden por 3 a 4 semanas.',
    relatedProcedure: '/procedimientos/lifting-facial-hamaca',
    cluster: 'lifting-facial',
    componentName: 'PrecioLiftingPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: '¿Qué cuidados debo tener para dormir?',
        answer: 'Debes dormir boca arriba y con la cabeza elevada a unos 30-45 grados (usando dos almohadas) durante la primera semana para facilitar el drenaje.'
      },
      {
        question: '¿Cuándo puedo usar maquillaje en las cicatrices?',
        answer: 'Generalmente a partir del día 10-12 postoperatorio, una vez que se retiran los puntos y las microcostras de las incisiones han sanado.'
      }
    ]
  },
  {
    slug: 'recuperacion-explantacion-mamaria',
    locale: 'es',
    title: 'Recuperación tras explantación mamaria: guía semana a semana',
    subtitle: 'El proceso físico y de desintoxicación inmunológica tras el retiro definitivo de prótesis.',
    metaDescription: 'Postoperatorio de la explantación mamaria en Bogotá. Conoce los cuidados de heridas, brasier especial, y la desintoxicación inmunológica semana a semana.',
    category: 'Cirugía Mamaria',
    date: '2026-04-19',
    readingTime: '6 min',
    quickAnswer: 'La recuperación de una explantación mamaria implica reposo relativo la primera semana (retiro de drenes día 3-5). En las semanas 2 a 4 desciende la inflamación asimétrica y se percibe la mejora sistémica del Síndrome de ASIA. La actividad física de impacto se retoma a partir del segundo mes.',
    relatedProcedure: '/procedimientos/explantacion-mamaria',
    cluster: 'explantacion-mamaria',
    componentName: 'RecuperacionExplantacionPost',
    featuredImage: '/images/blog/explantacion-mamaria.jpg',
    faqs: [
      {
        question: '¿Debo usar un brasier especial?',
        answer: 'Sí, es indispensable utilizar un brasier postoperatorio de compresión moderada y sin varillas metálicas las 24 horas del día durante el primer mes.'
      },
      {
        question: '¿Cuándo se normalizan los síntomas de ASIA?',
        answer: 'Varía según la paciente; algunas notan alivio del dolor y la fatiga en las primeras semanas, mientras que la estabilización inmunitaria total puede tomar de 3 a 6 meses.'
      }
    ]
  },
  {
    slug: 'como-quedan-senos-despues-explantacion',
    locale: 'es',
    title: '¿Cómo quedan los senos después de retirar los implantes? (Casos Reales)',
    subtitle: 'Desmitificamos el aspecto estético final, la retracción de piel y el uso de tu propia grasa.',
    metaDescription: '¿Cómo se ven los senos tras el explante? Conoce cómo la piel se retrae, el papel del levantamiento (mastopexia) y la reconstrucción con lipotransferencia en Bogotá.',
    category: 'Cirugía Mamaria',
    date: '2026-04-20',
    readingTime: '6 min',
    quickAnswer: 'Tras un explante, la piel experimenta una retracción natural durante los primeros 3 a 6 meses. Si hay caída marcada, asociamos una mastopexia para dar forma firme y estética. Además, la lipotransferencia (inyectar tu propia grasa purificada) restaura volumen en el polo superior del seno de forma natural.',
    relatedProcedure: '/procedimientos/explantacion-mamaria',
    cluster: 'explantacion-mamaria',
    componentName: 'ComoQuedanSenosPost',
    featuredImage: '/images/blog/explantacion-mamaria.jpg',
    faqs: [
      {
        question: '¿La inyección de grasa se absorbe?',
        answer: 'Un porcentaje de la grasa inyectada (alrededor del 30-40%) se reabsorbe de forma natural en los primeros 3 meses. La grasa que sobrevive permanece de forma definitiva.'
      },
      {
        question: '¿Quedaré plana tras el explante?',
        answer: 'El volumen final dependerá de tu tejido mamario natural previo. El uso de lipotransferencia y levantamiento ayuda a optimizar y destacar el volumen que posees.'
      }
    ]
  },
  {
    slug: 'parpados-caidos-causas-estetico-funcional',
    locale: 'es',
    title: 'Párpados caídos: causas, cuándo es estético y cuándo funcional',
    subtitle: 'Aprende a diferenciar el exceso de piel del párpado (dermatocalasis) de la caída muscular (ptosis palpebral).',
    metaDescription: 'Párpados caídos en Bogotá: diferencias entre exceso de piel estético y ptosis palpebral funcional que obstruye tu visión. Diagnóstico y tratamiento quirúrgico.',
    category: 'Cirugía Facial',
    date: '2026-04-21',
    readingTime: '5 min',
    quickAnswer: 'La caída de párpados se produce por exceso de piel flácida (dermatocalasis) o por debilidad del músculo elevador (ptosis). Es una cirugía estética cuando rejuvenece la mirada cansada, y funcional cuando el exceso de piel obstruye la pupila reduciendo el campo visual del paciente.',
    relatedProcedure: '/procedimientos/blefaroplastia',
    cluster: 'blefaroplastia',
    componentName: 'ParpadosCaidosPost',
    featuredImage: '/images/blog/blefaroplastia.jpg',
    faqs: [
      {
        question: '¿La cirugía funcional la cubre la medicina prepagada?',
        answer: 'Depende de la póliza y de si un examen de campos visuales computarizados demuestra obstrucción del eje visual. Nosotros te asesoramos en la evaluación.'
      },
      {
        question: '¿Cuánto dura la cirugía de párpados superiores?',
        answer: 'Dura aproximadamente 35 a 50 minutos, se realiza con anestesia local y la recuperación rápida toma de 5 a 7 días.'
      }
    ]
  },
  {
    slug: 'blefaroplastia-superior-vs-inferior',
    locale: 'es',
    title: 'Blefaroplastia superior vs. inferior vs. ambas: ¿Qué necesitas?',
    subtitle: 'Analizamos las diferencias en incisiones, objetivos quirúrgicos y la combinación para una mirada descansada.',
    metaDescription: 'Blefaroplastia superior, inferior o completa en Bogotá. Comparamos técnicas (transconjuntival, fat sliding) e indicaciones para eliminar bolsas y refrescar ojos.',
    category: 'Cirugía Facial',
    date: '2026-04-22',
    readingTime: '6 min',
    quickAnswer: 'La blefaroplastia superior elimina el encapotamiento de piel en el párpado superior. La inferior corrige las bolsas de grasa y ojeras del párpado inferior (preferiblemente vía transconjuntival sin cicatriz externa). La blefaroplastia completa combina ambas para rejuvenecer globalmente la mirada.',
    relatedProcedure: '/procedimientos/blefaroplastia',
    cluster: 'blefaroplastia',
    componentName: 'BlefaroSuperiorInferiorPost',
    featuredImage: '/images/blog/blefaroplastia.jpg',
    faqs: [
      {
        question: '¿Qué es la blefaroplastia transconjuntival?',
        answer: 'Es la técnica para operar el párpado inferior por dentro del ojo. Permite retirar o reposicionar las bolsas de grasa sin dejar cicatrices externas visibles.'
      },
      {
        question: '¿Se pueden eliminar las patas de gallo con blefaroplastia?',
        answer: 'Suaviza la piel adyacente, pero no detiene el pliegue muscular dinámico al sonreír (efecto acordeón). Para las patas de gallo se complementa con toxina botulínica.'
      }
    ]
  },
  {
    slug: 'precio-lifting-facial-bogota',
    locale: 'es',
    title: 'Lifting facial precio Bogotá 2026: rangos reales y qué incluye',
    subtitle: 'Guía de costos honesta para un estiramiento facial, honorarios médicos y valor de la seguridad en clínica.',
    metaDescription: '¿Cuánto cuesta un lifting facial en Bogotá en 2026? Rangos de precios de Deep Plane, SMAS y minilifting. Qué influye en el presupuesto y honorarios médicos.',
    category: 'Cirugía Facial',
    date: '2026-04-23',
    readingTime: '6 min',
    quickAnswer: 'El precio de un lifting facial en Bogotá oscila entre 18,000,000 COP y 35,000,000 COP ($5,500 - $8,500 USD), variando según la técnica (Deep Plane, Hamaca, SMAS), la complejidad del cuello y si se asocia blefaroplastia o injertos de grasa ricos en células madre.',
    relatedProcedure: '/procedimientos/lifting-facial-hamaca',
    cluster: 'lifting-facial',
    componentName: 'PrecioLiftingPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: '¿Por qué no elegir la opción más económica de lifting?',
        answer: 'Porque un lifting mal ejecutado o en clínicas no acreditadas puede causar asimetrías faciales, mala cicatrización o daños nerviosos irreversibles. La seguridad es primero.'
      },
      {
        question: '¿La valoración inicial tiene costo?',
        answer: 'Sí, la valoración presencial o virtual con el Dr. Andrés Pérez Nieto tiene un costo reembolsable o abono a los derechos quirúrgicos de tu procedimiento.'
      }
    ]
  },
  {
    slug: 'botox-vs-acido-hialuronico-vs-blefaroplastia',
    locale: 'es',
    title: 'Botox vs. Ácido Hialurónico vs. Blefaroplastia: ¿Qué necesitas?',
    subtitle: 'Comparamos tres enfoques distintos para rejuvenecer la mirada y eliminar el cansancio ocular.',
    metaDescription: '¿Botox, ácido hialurónico o blefaroplastia para tus ojos? Comparamos indicaciones, límites y cuándo necesitas cirugía de párpados en Bogotá.',
    category: 'Cirugía Facial',
    date: '2026-04-24',
    readingTime: '6 min',
    quickAnswer: 'El botox relaja arrugas dinámicas (patas de gallo). El ácido hialurónico rellena el surco hundido de la ojera. La blefaroplastia quirúrgica es el único tratamiento definitivo para retirar la piel sobrante y eliminar bolsas de grasa.',
    relatedProcedure: '/procedimientos/blefaroplastia',
    cluster: 'blefaroplastia',
    componentName: 'BotoxVsAhVsBlefaroPost',
    featuredImage: '/images/blog/blefaroplastia.jpg',
    faqs: [
      {
        question: '¿Se pueden combinar los tres?',
        answer: 'Sí. Es muy común realizar una blefaroplastia y complementar en el postoperatorio con botox en frente y patas de gallo para un refrescamiento total.'
      },
      {
        question: '¿El ácido hialurónico sirve para párpados caídos?',
        answer: 'No. El relleno da volumen, no recorta piel flácida. Poner relleno en un párpado muy caído puede causar aspecto inflamado.'
      }
    ]
  },
  {
    slug: 'rinoplastia-preservacion-tecnica-preserve',
    locale: 'es',
    title: 'Rinoplastia de preservación: ¿Qué es y cuáles son sus ventajas?',
    subtitle: 'Descubre cómo corregimos el dorso de la nariz sin limar ni romper el hueso de forma agresiva.',
    metaDescription: 'Todo sobre la rinoplastia de preservación en Bogotá. Conoce la técnica Let Down, ventajas de recuperación rápida y resultados naturales.',
    category: 'Cirugía Facial',
    date: '2026-04-25',
    readingTime: '6 min',
    quickAnswer: 'La rinoplastia de preservación (Preserve) consiste en descender la estructura nasal completa realizando cortes en el septum profundo, en lugar de romper o limar el puente de la nariz. Esto preserva el dorso natural, reduce la inflamación y conserva la función respiratoria intacta.',
    relatedProcedure: '/procedimientos/rinoplastia',
    cluster: 'rinoplastia',
    componentName: 'RinoplastiaPreservacionPost',
    featuredImage: '/images/blog/rinoplastia.jpg',
    faqs: [
      {
        question: '¿La técnica Preserve es para todos los casos?',
        answer: 'Es ideal para gibas primarias (narices no operadas antes). En rinoplastias secundarias o desviaciones severas, solemos preferir técnicas estructurales.'
      },
      {
        question: '¿La recuperación es más rápida?',
        answer: 'Sí. Al no dañar el periostio ni los vasos del puente nasal, los morados y la inflamación postoperatoria son mínimos.'
      }
    ]
  },
  {
    slug: 'perfiloplastia-nariz-menton',
    locale: 'es',
    title: 'Perfiloplastia en Bogotá: La armonía perfecta entre nariz y mentón',
    subtitle: 'Por qué cambiar solo la nariz a veces no basta y cómo balanceamos tu perfil en una sola cirugía.',
    metaDescription: '¿Qué es la perfiloplastia en Bogotá? Analizamos el balance entre rinoplastia y mentoplastia para un perfil armónico y natural. Casos y beneficios.',
    category: 'Cirugía Facial',
    date: '2026-04-26',
    readingTime: '6 min',
    quickAnswer: 'La perfiloplastia es la combinación quirúrgica de rinoplastia y mentoplastia en un solo tiempo quirúrgico. Permite balancear la proyección de la nariz y del mentón, logrando una simetría facial óptima que suaviza las facciones del perfil.',
    relatedProcedure: '/procedimientos/mentoplastia',
    cluster: 'rinoplastia',
    componentName: 'PerfiloplastiaPost',
    featuredImage: '/images/blog/rinoplastia.jpg',
    faqs: [
      {
        question: '¿Qué tipo de implante de mentón se utiliza?',
        answer: 'Generalmente utilizamos implantes de silicona sólida o Medpor de grado médico, con un ajuste personalizado a la anatomía de tu mandíbula.'
      },
      {
        question: '¿La cicatriz de mentón queda por fuera?',
        answer: 'No necesariamente. La mayoría de las veces el abordaje se realiza por dentro de la boca (intraoral) sin dejar cicatrices externas visibles.'
      }
    ]
  },
  {
    slug: 'recuperacion-blefaroplastia-cuidados',
    locale: 'es',
    title: 'Recuperación de blefaroplastia: Guía y cuidados postoperatorios',
    subtitle: 'Te enseñamos cómo cuidar tus párpados, aplicar frío y manejar la inflamación en casa.',
    metaDescription: 'Guía detallada de recuperación de cirugía de párpados en Bogotá. Cuidados diarios, manejo de morados, puntos y retorno al trabajo.',
    category: 'Cirugía Facial',
    date: '2026-04-27',
    readingTime: '6 min',
    quickAnswer: 'La recuperación de una blefaroplastia requiere reposo semisentado y compresas frías los primeros 3 días. Los puntos se retiran al día 6 y la mayoría de los morados desaparecen a los 10 días, permitiendo retomar actividades normales y usar gafas de sol.',
    relatedProcedure: '/procedimientos/blefaroplastia',
    cluster: 'blefaroplastia',
    componentName: 'RecuperacionBlefaroPost',
    featuredImage: '/images/blog/blefaroplastia.jpg',
    faqs: [
      {
        question: '¿Cuándo puedo usar maquillaje en los ojos?',
        answer: 'Recomendamos esperar al menos 10 a 12 días post-op, una vez que los puntos estén retirados y las incisiones estén completamente cerradas.'
      },
      {
        question: '¿Duele el postoperatorio de párpados?',
        answer: 'Es una cirugía muy poco dolorosa. Sentirás tirantez y resequedad ocular, pero se maneja fácilmente con analgésicos comunes y gotas lubricantes.'
      }
    ]
  },
  {
    slug: 'lifting-sin-cirugia-vs-quirurgico',
    locale: 'es',
    title: 'Lifting sin cirugía vs. quirúrgico: ¿Cuál elegir en 2026?',
    subtitle: 'Comparamos tecnologías no invasivas (HIFU, tensores) con el estiramiento facial real.',
    metaDescription: 'Lifting no quirúrgico vs. lifting facial en Bogotá. Comparamos resultados de hilos tensores, Morpheus y cirugía de plano profundo.',
    category: 'Cirugía Facial',
    date: '2026-04-28',
    readingTime: '6 min',
    quickAnswer: 'Los tratamientos sin cirugía (HIFU, radiofrecuencia) mejoran la calidad de la piel y previenen flacidez leve en pacientes jóvenes. Para descolgamiento moderado a severo y definición de cuello, el lifting quirúrgico es la única solución definitiva y estructural.',
    relatedProcedure: '/procedimientos/lifting-facial-hamaca',
    cluster: 'lifting-facial',
    componentName: 'LiftingSinCirugiaPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: '¿Los hilos tensores reemplazan a un lifting?',
        answer: 'No. Los hilos ofrecen una tracción temporal de pocos meses y no retiran piel sobrante. El lifting reposiciona la musculatura de forma estable por más de 10 años.'
      },
      {
        question: '¿A partir de qué nivel de flacidez es necesaria la cirugía?',
        answer: 'Cuando existe descolgamiento en la mandíbula (bolsas de jowls) y bandas musculares laxas en el cuello, los inyectables o aparatos ya no son efectivos.'
      }
    ]
  },
  {
    slug: 'pexia-mamaria-que-es',
    locale: 'es',
    title: 'Pexia mamaria (levantamiento de senos): Qué es y técnicas',
    subtitle: 'Todo sobre la mastopexia, corrección de la caída y cómo lucir un busto firme sin prótesis.',
    metaDescription: 'Guía de pexia mamaria o mastopexia en Bogotá. Descubre qué es, tipos de incisiones (dona, paleta, ancla) y cómo se reconstruye el seno caído.',
    category: 'Cirugía Mamaria',
    date: '2026-04-29',
    readingTime: '6 min',
    quickAnswer: 'La pexia mamaria es la cirugía para elevar y remodelar senos caídos (ptosis). Consiste en reposicionar el tejido mamario propio y recortar el exceso de piel flácida. Las incisiones varían entre periareolar, vertical o en T invertida según el grado de caída.',
    relatedProcedure: '/procedimientos/pexia',
    cluster: 'explantacion-mamaria',
    componentName: 'PexiaMamariaQueEsPost',
    featuredImage: '/images/blog/explantacion-mamaria.jpg',
    faqs: [
      {
        question: '¿Es obligatorio usar implantes en una pexia?',
        answer: 'No. Podemos realizar un levantamiento simple utilizando tu propia glándula mamaria para dar forma y proyección natural, o asociar transferencia de grasa.'
      },
      {
        question: '¿Cómo quedan las cicatrices de la pexia?',
        answer: 'Al principio son rojizas y firmes. Con cuidados postoperatorios adecuados, cremas cicatrizantes y el paso de los meses, se aclaran y difuminan notablemente.'
      }
    ]
  },
  {
    slug: 'rinoplastia-ultrasonica-vs-tradicional',
    locale: 'es',
    title: 'Rinoplastia Ultrasónica vs. Tradicional: Diferencias clave',
    subtitle: 'Comparamos la tecnología piezoeléctrica de alta precisión con los métodos manuales.',
    metaDescription: 'Rinoplastia ultrasónica piezoeléctrica vs. tradicional en Bogotá. Analizamos dolor, inflamación y precisión en la remodelación ósea nasal.',
    category: 'Cirugía Facial',
    date: '2026-04-30',
    readingTime: '6 min',
    quickAnswer: 'La rinoplastia ultrasónica utiliza tecnología piezoeléctrica para esculpir el hueso nasal con vibraciones ultrasónicas, respetando vasos sanguíneos y piel. El método tradicional utiliza limas mecánicas y osteótomos manuales, produciendo mayor trauma e inflamación postoperatoria.',
    relatedProcedure: '/procedimientos/rinoplastia',
    cluster: 'rinoplastia',
    componentName: 'RinoUltrasonicaVsTradicionalPost',
    featuredImage: '/images/blog/rinoplastia.jpg',
    faqs: [
      {
        question: '¿La rinoplastia ultrasónica duele menos?',
        answer: 'Sí. Al no dañar vasos sanguíneos, la inflamación inicial y el dolor postoperatorio son drásticamente menores, requiriendo menos analgésicos.'
      },
      {
        question: '¿Las incisiones externas son obligatorias?',
        answer: 'Generalmente se realiza mediante un abordaje abierto para poder visualizar directamente las estructuras óseas y aplicar el terminal ultrasónico.'
      }
    ]
  },
  {
    slug: 'combinacion-procedimientos-faciales',
    locale: 'es',
    title: 'Combinación de procedimientos faciales: Rejuvenecimiento global',
    subtitle: 'Analizamos los beneficios de asociar lifting, párpados e injertos de grasa en una sola cirugía.',
    metaDescription: 'Beneficios de combinar cirugías faciales en Bogotá. Conoce la seguridad, costos unificados y cómo lograr resultados armónicos y naturales.',
    category: 'Cirugía Facial',
    date: '2026-05-01',
    readingTime: '6 min',
    quickAnswer: 'Combinar procedimientos faciales (como lifting con blefaroplastia e injertos de grasa con células madre) permite tratar de forma simultánea la flacidez, el exceso de piel y la pérdida de volumen, logrando un resultado mucho más equilibrado y natural en una sola recuperación.',
    relatedProcedure: '/procedimientos/lipofilling-celulas-madre',
    cluster: 'lifting-facial',
    componentName: 'CombinacionProcedimientosPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: '¿Es seguro durar muchas horas en cirugía combinada?',
        answer: 'Sí, siempre que el paciente esté sano, se realicen exámenes preoperatorios estrictos y la cirugía se limite a tiempos seguros bajo anestesiólogos calificados.'
      },
      {
        question: '¿El postoperatorio es más difícil?',
        answer: 'Hay mayor área inflamada, pero la recuperación transcurre en el mismo periodo de tiempo de 10 a 14 días que requiere una sola cirugía mayor.'
      }
    ]
  },
  {
    slug: 'recuperacion-rinoplastia-mes-a-mes',
    locale: 'es',
    title: 'Recuperación de rinoplastia: Qué esperar mes a mes',
    subtitle: 'Guía detallada del proceso de desinflamación y cambios en la punta nasal durante el primer año.',
    metaDescription: 'Evolución mes a mes del postoperatorio de rinoplastia en Bogotá. Retiro de férula, desinflamación de la punta y resultado final al año.',
    category: 'Cirugía Facial',
    date: '2026-05-02',
    readingTime: '6 min',
    quickAnswer: 'El postoperatorio de rinoplastia retira la férula al día 7. A las 3 semanas baja la mayor parte de la inflamación. Entre el mes 2 y 6 la punta nasal se ablanda y desinflama, logrando el resultado final y definitivo al año de la cirugía.',
    relatedProcedure: '/procedimientos/rinoplastia',
    cluster: 'rinoplastia',
    componentName: 'RecuperacionRinoplastiaPost',
    featuredImage: '/images/blog/rinoplastia.jpg',
    faqs: [
      {
        question: '¿Cuándo puedo volver a hacer ejercicio físico?',
        answer: 'Actividad cardiovascular ligera a partir de la semana 4. Deportes de contacto o pesas pesadas deben suspenderse por al menos 2 meses.'
      },
      {
        question: '¿La punta nasal se cae después de la cirugía?',
        answer: 'Durante el primer mes la punta puede verse artificialmente elevada debido a la inflamación del labio superior. Con los meses, cede unos milímetros asentándose en su posición natural.'
      }
    ]
  },
  {
    slug: 'mentoplastia-aumento-menton',
    locale: 'es',
    title: 'Mentoplastia de aumento en Bogotá: Implante vs. avance óseo',
    subtitle: 'Analizamos las dos técnicas para definir tu perfil mandibular y proyectar el mentón corto.',
    metaDescription: 'Mentoplastia de aumento en Bogotá. Comparamos prótesis de silicona con osteotomía de avance óseo. Criterios, cicatrices y resultados.',
    category: 'Cirugía Facial',
    date: '2026-05-03',
    readingTime: '6 min',
    quickAnswer: 'El aumento de mentón mediante prótesis de silicona es un procedimiento ambulatorio corto (30 min). El avance óseo realiza un corte preciso en la barbilla para deslizar tu propio hueso hacia adelante, ideal para modificar también la altura y evitar prótesis.',
    relatedProcedure: '/procedimientos/mentoplastia',
    cluster: 'rinoplastia',
    componentName: 'MentoplastiaAumentoPost',
    featuredImage: '/images/blog/rinoplastia.jpg',
    faqs: [
      {
        question: '¿Se puede sentir el implante al tacto?',
        answer: 'Si el implante se coloca en el plano correcto (debajo del periostio) y se fija bien, no se desplaza ni se siente al tacto, integrándose a tu contorno mandibular.'
      },
      {
        question: '¿Cuál técnica tiene una recuperación más rápida?',
        answer: 'La mentoplastia de implante es menos invasiva y su desinflamación toma de 5 a 7 días. El avance óseo toma de 10 a 14 días.'
      }
    ]
  },
  {
    slug: 'deep-plane-facelift-in-colombia',
    locale: 'en',
    title: 'Deep Plane Facelift in Colombia: The Ultimate International Guide',
    subtitle: 'Why U.S. and Canadian patients choose Bogotá for advanced board-certified facial rejuvenation.',
    metaDescription: 'Complete guide for U.S. and Canadian patients seeking a Deep Plane Facelift in Bogotá, Colombia. Trajectory, costs, board certifications, and logistics.',
    category: 'Facial Surgery',
    date: '2026-05-04',
    readingTime: '7 min',
    quickAnswer: 'U.S. and Canadian patients travel to Bogotá for a Deep Plane Facelift to receive world-class, board-certified care (SCCP/ISAPS) with savings of 60% to 70% compared to North America. Dr. Andrés Pérez Nieto offers U.S. training (Illinois/Manhattan Eye & Ear) and comprehensive concierge logistics.',
    relatedProcedure: '/procedimientos/lifting-facial-hamaca',
    cluster: 'lifting-facial',
    componentName: 'DeepPlaneFaceliftColEnPost',
    featuredImage: '/images/blog/lifting-facial.jpg',
    faqs: [
      {
        question: 'Is a Deep Plane Facelift safe in Colombia?',
        answer: 'Yes, if performed by a board-certified plastic surgeon in an accredited high-complexity clinic. Dr. Andrés Pérez Nieto follows the same strict safety protocols used in U.S. surgical centers.'
      },
      {
        question: 'What is the required stay in Bogotá?',
        answer: 'You must plan to stay in Bogotá for 12 to 14 days post-op to complete stitch removal and final medical checks before flying home.'
      }
    ]
  },
  {
    slug: 'breast-explant-surgery-in-colombia',
    locale: 'en',
    title: 'Breast Explant Surgery in Colombia: Total Capsulectomy Guide',
    subtitle: 'Safe implant removal, autoimmune symptoms (BII), and natural breast reconstruction in Bogotá.',
    metaDescription: 'Breast explant surgery in Bogotá, Colombia for U.S./Canadian patients. Total capsulectomy, En Bloc technique, recovery, and natural fat transfer.',
    category: 'Breast Surgery',
    date: '2026-05-05',
    readingTime: '7 min',
    quickAnswer: 'Breast explantation in Bogotá consists of removing the implants and their surrounding scar capsule (total capsulectomy or En Bloc technique). This treatment addresses auto-immune Breast Implant Illness (BII) symptoms, with options for natural fat transfer (lipofilling) and breast lift.',
    relatedProcedure: '/procedimientos/explantacion-mamaria',
    cluster: 'explantacion-mamaria',
    componentName: 'BreastExplantColEnPost',
    featuredImage: '/images/blog/explantacion-mamaria.jpg',
    faqs: [
      {
        question: 'Do you offer En Bloc explantation?',
        answer: 'Yes. Whenever clinically safe, we prioritize the En Bloc technique to extract the implant and capsule intact to prevent any gel leakage from entering your system.'
      },
      {
        question: 'How much does explant surgery cost in Colombia?',
        answer: 'Explant surgery in Bogotá ranges from $3,500 to $6,500 USD, representing a 60% savings compared to the U.S. and Canada, including clinical fees and post-op care.'
      }
    ]
  },
  {
    slug: 'is-plastic-surgery-in-colombia-safe',
    locale: 'en',
    title: 'Is Plastic Surgery in Colombia Safe? Certified Surgeon\'s Advice',
    subtitle: 'How to verify credentials, check RETHUS, and choose accredited clinics to ensure a secure procedure.',
    metaDescription: 'Is plastic surgery safe in Colombia? Learn how to verify board certification (SCCP, RETHUS), choose accredited surgical clinics, and avoid medical red flags.',
    category: 'Patient Safety',
    date: '2026-05-06',
    readingTime: '6 min',
    quickAnswer: 'Plastic surgery in Colombia is highly safe when performed by a surgeon certified by the Sociedad Colombiana de Cirugía Plástica (SCCP), registered in RETHUS, operating in high-complexity hospitals accredited by the Ministry of Health, and providing transparent risk consultations.',
    relatedProcedure: '/conoce-doctor',
    cluster: 'consejos',
    componentName: 'IsSurgerySafeColEnPost',
    featuredImage: '/images/blog/consejos.jpg',
    faqs: [
      {
        question: 'How do I check if my surgeon is certified?',
        answer: 'You can search their name on the official RETHUS registry and confirm their active membership on the Sociedad Colombiana de Cirugía Plástica (SCCP) directory website.'
      },
      {
        question: 'What are the main red flags when choosing a clinic?',
        answer: 'Avoid clinics operating in private apartments or offices, extremely cheap prices, and doctors who promise risk-free results or refuse to show board certifications.'
      }
    ]
  }
];

export function getPostBySlug(slug: string, locale: string): BlogPostMetadata | undefined {
  return blogPosts.find(post => post.slug === slug && post.locale === locale);
}

export function getPostsByLocale(locale: string): BlogPostMetadata[] {
  return blogPosts.filter(post => post.locale === locale);
}
