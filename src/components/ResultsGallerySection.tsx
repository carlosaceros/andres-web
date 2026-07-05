"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  image: string;
  procedure: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const ResultsGallerySection = () => {
  const t = useTranslations('results_gallery');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const patientKeys = ['sandra', 'nubia', 'angelica', 'liliana'];
  const patients: Patient[] = patientKeys.map(key => {
    const imageMap: { [key: string]: string } = {
      sandra: '/images/sandra.webp',
      nubia: '/images/nubia.webp',
      angelica: '/images/angelica.webp',
      liliana: '/images/angela.webp' // Note: liliana uses angela.webp
    };
    const beforeImageMap: { [key: string]: string } = {
        sandra: '/images/testis-home/sandra-antes.webp',
        nubia: '/images/testis-home/nidia-antes.webp',
        angelica: '/images/testis-home/angelica-antes.webp',
        liliana: '/images/testis-home/Angela-antes.webp'
    };
    const afterImageMap: { [key: string]: string } = {
        sandra: '/images/testis-home/sandra-despues.webp',
        nubia: '/images/testis-home/nidia-despues.webp',
        angelica: '/images/testis-home/angelica-despues.webp',
        liliana: '/images/testis-home/Angela-despues.webp'
    };

    return {
      id: key,
      name: t(`${key}_name`),
      image: imageMap[key],
      procedure: t(`${key}_procedure`),
      description: t(`${key}_description`),
      beforeImage: beforeImageMap[key],
      afterImage: afterImageMap[key]
    };
  });

  const openModal = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  const closeModal = () => {
    setSelectedPatient(null);
  };

  return (
    <>
      <section className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título principal */}
          <div className="mb-12 sm:mb-16">
            <h2 className="font-prototype text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight" style={{ color: '#1d3c5d' }}
                dangerouslySetInnerHTML={{ __html: t.rich('main_title_p1', { br: () => '<br />' }) + t('main_title_p2') }}
            >
            </h2>
          </div>

          {/* Grid de pacientes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className="group cursor-pointer"
                onClick={() => openModal(patient)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  {/* Imagen real del paciente */}
                  <div className="aspect-[4/5] relative">
                    <img
                      src={patient.image}
                      alt={t('result_of_patient', { patientName: patient.name })}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />

                    {/* Fallback placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 hidden items-center justify-center absolute inset-0">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">👤</div>
                        <span className="font-sansation text-sm font-medium" style={{ color: '#1d3c5d' }}>{t('photo_of_patient', { patientName: patient.name })}</span>
                        <p className="font-sansation text-xs mt-1" style={{ color: '#1d3c5d' }}>{patient.procedure}</p>
                      </div>
                    </div>
                  </div>

                  {/* Overlay con efecto hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                        <span className="font-sansation font-semibold" style={{ color: '#1d3c5d' }}>{t('view_result_btn')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información del paciente */}
                <div className="mt-4 text-center">
                  <h3 className="font-sansation text-2xl font-semibold mb-1" style={{ color: '#1d3c5d' }}>
                    {patient.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Botón ver galería */}
          <div className="text-center">
            <button
              className="font-sansation border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              style={{ borderColor: '#1d3c5d', color: '#1d3c5d' }}
              onClick={() => window.location.href = '/galeria'}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1d3c5d';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1d3c5d';
              }}
            >
              {t('view_gallery_btn')}
            </button>
          </div>
        </div>
      </section>

      {/* Modal/Popup mejorado */}
      {selectedPatient && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
              <h3 className="font-sansation text-xl sm:text-2xl font-bold" style={{ color: '#1d3c5d' }}>
                {t('modal_title', { patientName: selectedPatient.name })}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6">
                {/* Imagen Antes */}
                <div className="text-center">
                  <h4 className="font-sansation text-lg font-semibold mb-4" style={{ color: '#1d3c5d' }}>{t('before_label')}</h4>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={selectedPatient.beforeImage}
                      alt={t('before_alt', { patientName: selectedPatient.name })}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />

                    {/* Fallback para imagen before */}
                    <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 hidden items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">📸</div>
                        <span className="font-sansation text-sm font-medium" style={{ color: '#1d3c5d' }}>{t('before_photo_fallback')}</span>
                        <p className="font-sansation text-xs mt-1" style={{ color: '#1d3c5d' }}>{selectedPatient.name}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Imagen Después */}
                <div className="text-center">
                  <h4 className="font-sansation text-lg font-semibold mb-4" style={{ color: '#1d3c5d' }}>{t('after_label')}</h4>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={selectedPatient.afterImage}
                      alt={t('after_alt', { patientName: selectedPatient.name })}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />

                    {/* Fallback para imagen after */}
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 hidden items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">✨</div>
                        <span className="font-sansation text-sm font-medium" style={{ color: '#1d3c5d' }}>{t('after_photo_fallback')}</span>
                        <p className="font-sansation text-xs mt-1" style={{ color: '#1d3c5d' }}>{selectedPatient.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información del procedimiento */}
              <div className="text-center space-y-4">
                <div>
                  <h4 className="font-sansation text-xl font-bold mb-2" style={{ color: '#1d3c5d' }}>
                    {selectedPatient.procedure}
                  </h4>
                  <p className="font-sansation leading-relaxed max-w-2xl mx-auto text-sm sm:text-base" style={{ color: '#1d3c5d' }}>
                    {selectedPatient.description}
                  </p>
                </div>

                {/* Botón ir a galería */}
                <div className="pt-4 sm:pt-6">
                  <button
                    className="font-sansation text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                    style={{ backgroundColor: '#1d3c5d' }}
                    onClick={() => window.location.href = '/galeria'}
                  >
                    {t('go_to_procedure_gallery_btn')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultsGallerySection;
