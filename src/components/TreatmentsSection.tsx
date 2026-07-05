import React from 'react';
import { useTranslations } from 'next-intl';

const TreatmentsSection = () => {
  const t = useTranslations('home');
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="font-prototype text-4xl lg:text-5xl font-normal leading-tight" style={{ color: '#1d3c5d' }}>
            {t('treatments_main_title')}
          </h2>
        </div>

        {/* Grid de tratamientos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Regeneración Celular */}
          <div style={{ backgroundColor: '#babdb3' }} className="rounded-2xl p-6 shadow-lg border border-gray-200 max-w-sm mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-sansation text-xl font-bold mb-8" style={{ color: '#1d3c5d' }}>
                {t('cellular_regeneration_title')}
              </h3>

              {/* Imagen real */}
              <div className="w-56 h-56 mx-auto bg-gray-300 rounded-lg mb-8 overflow-hidden shadow-md">
                <img
                  src="/images/1.webp"
                  alt={t('cellular_regeneration_alt')}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Si no encuentra la imagen, muestra el placeholder
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-300 hidden items-center justify-center">
                  <span className="font-sansation text-sm" style={{ color: '#1d3c5d' }}>{t('cellular_regeneration_fallback')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-sansation text-lg font-bold text-center" style={{ color: '#1d3c5d' }}>
                {t('lipofilling_subtitle')}
              </h4>

              <p className="font-sansation text-center leading-relaxed text-sm px-2" style={{ color: '#1d3c5d' }}>
                {t('lipofilling_description')}
              </p>

              <div className="pt-8 text-center">
                <button
                  className="border-2 px-6 py-2 rounded-full font-sansation font-bold hover:text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm cursor-pointer"
                  style={{
                    borderColor: '#1d3c5d',
                    color: '#1d3c5d'
                  }}
                  onClick={() => window.location.href = '/procedimientos/lipofilling-celulas-madre'}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1d3c5d';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1d3c5d';
                  }}
                >
                  {t('more_info_btn')}
                </button>
              </div>
            </div>
          </div>

          {/* Rejuvenecimiento Facial */}
          <div style={{ backgroundColor: '#babdb3' }} className="rounded-2xl p-6 shadow-lg border border-gray-200 max-w-sm mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-sansation text-xl font-bold mb-8" style={{ color: '#1d3c5d' }}>
                {t('facial_rejuvenation_title')}
              </h3>

              {/* Imagen real */}
              <div className="w-56 h-56 mx-auto bg-gray-300 rounded-lg mb-8 overflow-hidden shadow-md">
                <img
                  src="/images/chica-lifting-hamaca.webp"
                  alt={t('facial_rejuvenation_alt')}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Si no encuentra la imagen, muestra el placeholder
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 hidden items-center justify-center">
                  <span className="font-sansation text-sm" style={{ color: '#1d3c5d' }}>{t('facial_rejuvenation_fallback')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-sansation text-lg font-bold text-center" style={{ color: '#1d3c5d' }}>
                {t('hammock_facelift_subtitle')}
              </h4>

              <p className="font-sansation text-center leading-relaxed text-sm px-2" style={{ color: '#1d3c5d' }}>
                {t('hammock_facelift_description_p1')}
              </p>

              <p className="font-sansation text-center leading-relaxed text-sm px-2" style={{ color: '#1d3c5d' }}>
                {t('hammock_facelift_description_p2')}
              </p>

              <div className="pt-8 text-center">
                <button
                  className="border-2 px-6 py-2 rounded-full font-sansation font-bold hover:text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm cursor-pointer"
                  style={{
                    borderColor: '#1d3c5d',
                    color: '#1d3c5d'
                  }}
                  onClick={() => window.location.href = '/procedimientos/lifting-facial-hamaca'}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1d3c5d';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1d3c5d';
                  }}
                >
                  {t('more_info_btn')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;