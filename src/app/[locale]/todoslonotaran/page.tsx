import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function TodosLoNotaranPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'dr_face' });

  const commitmentKeys = ['c1', 'c2', 'c3', 'c4', 'c5'];
  const pillarKeys = ['security', 'natural_results', 'lasting_changes', 'support'];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - BANNER MÁS ALTO */}
      <section className="relative h-[800px] lg:h-[900px] bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400">
        <div className="absolute inset-0">
          <Image
            src="/images/TodosnotaranBanner.webp"
            alt={t('title')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 h-full flex items-center">
          <div className="max-w-lg text-white">
            <h1
              className="text-5xl lg:text-6xl font-bold mb-8"
              style={{
                fontFamily: "'Sansation', Arial, sans-serif",
                fontWeight: 700
              }}
            >
              {t('title')}
            </h1>
            <div className="w-64 h-1 bg-white mb-8"></div>
            <p
              className="text-xl leading-relaxed"
              style={{
                fontFamily: "'Sansation', Arial, sans-serif",
                fontWeight: 400
              }}
            >
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Ilumina y expresa tu belleza natural - TEXTOS AZUL #1e3a5f */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2
              className="text-4xl font-bold mb-6"
              style={{
                fontFamily: "'Sansation', Arial, sans-serif",
                fontWeight: 700,
                color: '#1e3a5f'
              }}
            >
              {t('section1_title')}
            </h2>
            <div
              className="w-64 h-1 mb-8"
              style={{ backgroundColor: '#1e3a5f' }}
            ></div>
          </div>

          <div
            className="space-y-8 text-lg leading-relaxed"
            style={{
              fontFamily: "'Sansation', Arial, sans-serif",
              fontWeight: 400,
              color: '#1e3a5f'
            }}
          >
            <p dangerouslySetInnerHTML={{ __html: t.rich('section1_p1', { strong: (chunks) => `<strong>${chunks}</strong>` }) }} />
            <p dangerouslySetInnerHTML={{ __html: t.rich('section1_p2', { strong: (chunks) => `<strong>${chunks}</strong>` }) }} />
            <p dangerouslySetInnerHTML={{ __html: t.rich('section1_p3', { strong: (chunks) => `<strong>${chunks}</strong>` }) }} />
          </div>
        </div>
      </section>

      {/* Nuestra Misión y Compromiso - TEXTOS AZUL #1e3a5f */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Nuestra Misión */}
          <div className="mb-16">
            <h2
              className="text-4xl font-bold mb-6"
              style={{
                fontFamily: "'Sansation', Arial, sans-serif",
                fontWeight: 700,
                color: '#1e3a5f'
              }}
            >
              {t('mission_title')}
            </h2>
            <div
              className="w-32 h-1 mb-8"
              style={{ backgroundColor: '#1e3a5f' }}
            ></div>

            <p
              className="text-lg leading-relaxed max-w-5xl"
              style={{
                fontFamily: "'Sansation', Arial, sans-serif",
                fontWeight: 400,
                color: '#1e3a5f'
              }}
            >
              {t('mission_p1')}
            </p>
          </div>

          {/* Nuestro Compromiso */}
          <div>
            <h2
              className="text-4xl font-bold mb-4 text-center"
              style={{
                fontFamily: "'Sansation', Arial, sans-serif",
                fontWeight: 700,
                color: '#1e3a5f'
              }}
            >
              {t('commitment_title')}
            </h2>
            <p
              className="text-xl mb-12 text-center"
              style={{
                fontFamily: "'Sansation', Arial, sans-serif",
                fontWeight: 400,
                color: '#1e3a5f'
              }}
            >
              {t('commitment_subtitle')}
            </p>

            <div
              className="rounded-lg p-8 text-white"
              style={{ backgroundColor: '#1e3a5f' }}
            >
              <p
                className="text-lg mb-6"
                style={{
                  fontFamily: "'Sansation', Arial, sans-serif",
                  fontWeight: 400
                }}
              >
                {t('commitment_intro')}
              </p>

              <ul
                className="space-y-4 text-lg"
                style={{
                  fontFamily: "'Sansation', Arial, sans-serif",
                  fontWeight: 400
                }}
              >
                {commitmentKeys.map(key => (
                  <li key={key} className="flex items-start space-x-3">
                    <span className="text-white font-bold">•</span>
                    <span>{t(`commitments.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Un planeamiento hecho a tu medida - TEXTOS AZUL #1e3a5f */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2
              className="text-4xl font-bold mb-6"
              style={{
                fontFamily: "'Sansation', Arial, sans-serif",
                fontWeight: 700,
                color: '#1e3a5f'
              }}
            >
              {t('planning_title')}
            </h2>

            <p
              className="text-lg leading-relaxed max-w-5xl"
              style={{
                fontFamily: "'Sansation', Arial, sans-serif",
                fontWeight: 400,
                color: '#1e3a5f'
              }}
            >
              {t('planning_p1')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {pillarKeys.map(key => {
              const imageMap: { [key: string]: string } = {
                security: '/images/todos/escudo.png',
                natural_results: '/images/todos/mujer.png',
                lasting_changes: '/images/todos/reloj.png',
                support: '/images/todos/medico.png'
              };
              const fallbackSvgPaths: { [key: string]: string } = {
                security: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
                natural_results: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
                lasting_changes: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2Z",
                support: "M16,4C18.11,4 20.11,4.89 21.61,6.39C23.11,7.89 24,9.89 24,12A8,8 0 0,1 16,20H6A6,6 0 0,1 0,14C0,10.69 2.69,8 6,8C7.06,8 8.09,8.33 8.97,8.92C10.17,6.64 12.84,5.11 15.97,5.01C16,4.67 16,4.34 16,4Z"
              }
              return (
                <div key={key} className="bg-white rounded-lg p-8 text-center shadow-lg">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <img
                      src={imageMap[key]}
                      alt={t(`pillars.${key}_alt`)}
                      className="w-16 h-16 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(50%) saturate(1647%) hue-rotate(203deg) brightness(94%) contrast(96%)' }}
                    />
                    <svg
                      className="w-16 h-16 hidden"
                      style={{ color: '#1e3a5f' }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={fallbackSvgPaths[key]} />
                    </svg>
                  </div>

                  <h3
                    className="text-xl font-bold mb-4"
                    style={{
                      fontFamily: "'Sansation', Arial, sans-serif",
                      fontWeight: 700,
                      color: '#1e3a5f'
                    }}
                  >
                    {t(`pillars.${key}_title`)}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Sansation', Arial, sans-serif",
                      fontWeight: 400,
                      color: '#1e3a5f'
                    }}
                  >
                    {t(`pillars.${key}_desc`)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
