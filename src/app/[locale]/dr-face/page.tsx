import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslations } from 'next-intl/server';

export default async function DrFacePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'dr_face' });

  const commitmentKeys = ['c1', 'c2', 'c3', 'c4', 'c5'];
  const pillarKeys = ['security', 'natural_results', 'lasting_changes', 'support'];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Banner Dr Face */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/images/TodosnotaranBanner.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#666'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-2xl text-white">
            <h1 className="font-prototype font-normal text-5xl lg:text-6xl mb-4">{t('title')}</h1>
            <div className="w-64 h-1 bg-white mb-8"></div>
            <p className="font-sansation font-normal text-xl lg:text-2xl leading-relaxed max-w-lg">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Ilumina y expresa tu belleza natural */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-prototype font-normal text-4xl md:text-5xl mb-6" style={{ color: '#1d3c5d' }}>
              {t('section1_title')}
            </h2>
            <div className="w-92 h-1 mb-12" style={{ backgroundColor: '#1d3c5d' }}></div>

            <div className="space-y-6 font-sansation font-normal text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
              <p dangerouslySetInnerHTML={{ __html: t.rich('section1_p1', { strong: (chunks) => `<strong>${chunks}</strong>` }) }} />
              <p dangerouslySetInnerHTML={{ __html: t.rich('section1_p2', { strong: (chunks) => `<strong>${chunks}</strong>` }) }} />
              <p dangerouslySetInnerHTML={{ __html: t.rich('section1_p3', { strong: (chunks) => `<strong>${chunks}</strong>` }) }} />
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Nuestra Misión y Compromiso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">

            {/* Nuestra Misión */}
            <div>
              <h2 className="font-prototype font-normal text-4xl md:text-5xl mb-6" style={{ color: '#1d3c5d' }}>
                {t('mission_title')}
              </h2>
              <div className="w-79 h-1 mb-8" style={{ backgroundColor: '#1d3c5d' }}></div>

              <p className="font-sansation font-normal text-lg leading-relaxed" style={{ color: '#1d3c5d' }}>
                {t('mission_p1')}
              </p>
            </div>

            {/* Nuestro Compromiso */}
            <div>
              <h2 className="font-prototype font-normal text-4xl md:text-5xl text-center mb-4" style={{ color: '#1d3c5d' }}>
                {t('commitment_title')}
              </h2>
              <p className="font-sansation font-normal text-xl text-center mb-12" style={{ color: '#1d3c5d' }}>
                {t('commitment_subtitle')}
              </p>

              <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: '#5c8dce' }}>
                <p className="font-sansation font-normal text-lg mb-6">
                  {t('commitment_intro')}
                </p>

                <ul className="space-y-4 font-sansation font-normal text-lg">
                  {commitmentKeys.map(key => (
                    <li key={key} className="flex items-start space-x-3">
                      <span className="text-white text-xl mt-1">-</span>
                      <span>{t(`commitments.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Un planeamiento hecho a tu medida */}
      <section className="py-20" style={{ backgroundColor: '#babdb3' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-prototype font-normal text-4xl md:text-5xl mb-8" style={{ color: '#1d3c5d' }}>
              {t('planning_title')}
            </h2>

            <p className="font-sansation font-normal text-lg leading-relaxed mb-12 max-w-4xl" style={{ color: '#1d3c5d' }}>
              {t('planning_p1')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillarKeys.map(key => {
                const imageMap: { [key: string]: string } = {
                  security: 'https://media.drandrespereznieto.com/images/todos/escudo.png',
                  natural_results: 'https://media.drandrespereznieto.com/images/todos/mujer.png',
                  lasting_changes: 'https://media.drandrespereznieto.com/images/todos/reloj.png',
                  support: 'https://media.drandrespereznieto.com/images/todos/medico.png'
                };
                return (
                  <div key={key} className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <img
                        src={imageMap[key]}
                        alt={t(`pillars.${key}_alt`)}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="font-sansation font-bold text-xl mb-4" style={{ color: '#1d3c5d' }}>{t(`pillars.${key}_title`)}</h3>
                    <p className="font-sansation font-normal text-sm leading-relaxed" style={{ color: '#1d3c5d' }}>
                      {t(`pillars.${key}_desc`)}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </main>
  );
}