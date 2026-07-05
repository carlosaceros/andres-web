'use client'

import { useState, useRef } from 'react'
import { useTranslations } from 'next-intl';

export default function WelcomeSection() {
  const t = useTranslations('home');
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section style={{ backgroundColor: '#babdb3' }} className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h2
                className="font-prototype text-4xl lg:text-5xl xl:text-6xl font-normal mb-4 leading-tight"
                style={{ color: '#1d3c5d' }}
              >
                {t('welcome_title')}
              </h2>
              <div className="w-32 lg:w-66 h-1" style={{ backgroundColor: '#1d3c5d' }}></div>
            </div>

            {/* Description Text */}
            <div className="font-sansation text-lg lg:text-xl leading-relaxed space-y-4" style={{ color: '#1d3c5d' }}>
              <p>
                {t('welcome_p1')}
              </p>
              <p>
                {t('welcome_p2')}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 max-w-md">
              <button
                className="w-full bg-white border-2 px-8 py-4 rounded-full font-sansation font-bold text-base hover:text-white transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
                style={{
                  borderColor: '#1d3c5d',
                  color: '#1d3c5d'
                }}
                onClick={() => window.open(`https://wa.me/573164953755?text=${encodeURIComponent(t('whatsapp_message_welcome'))}`, '_blank')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1d3c5d';
                  e.currentTarget.style.color = 'white';
                  // Cambiar icono a blanco
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#1d3c5d';
                  // Regresar icono a azul
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.style.color = '#1d3c5d';
                }}
              >
                {/* Icono de agenda */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src="/images/iconos/flotante.webp"
                    alt={t('schedule_appointment')}
                    className="w-20 h-20 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  {/* SVG de respaldo para agenda */}
                  <svg className="w-6 h-6 hidden transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#1d3c5d' }}>
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                  </svg>
                </div>
                {t('schedule_appointment')}
              </button>

              <button
                className="w-full bg-white border-2 px-8 py-4 rounded-full font-sansation font-bold text-base hover:text-white transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
                style={{
                  borderColor: '#1d3c5d',
                  color: '#1d3c5d'
                }}
                onClick={() => window.open(`https://wa.me/573164953755?text=${encodeURIComponent(t('whatsapp_message_welcome'))}`, '_blank')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1d3c5d';
                  e.currentTarget.style.color = 'white';
                  // Cambiar icono a blanco
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#1d3c5d';
                  // Regresar icono a azul
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.style.color = '#1d3c5d';
                }}
              >
                {/* Icono de consulta virtual */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src="/images/iconos/video-llamada2.webp"
                    alt={t('virtual_consultation_btn')}
                    className="w-20 h-20 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  {/* SVG de respaldo para consulta virtual */}
                  <svg className="w-6 h-6 hidden transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#1d3c5d' }}>
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                </div>
                {t('virtual_consultation_btn')}
              </button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative max-w-2xl lg:max-w-3xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[450px] lg:max-h-[600px]"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                controls
                preload="metadata"
                poster="/images/img-bienvenida.webp"
              >
                {/*<source src="https://media.drandrespereznieto.com/images/videos/Bienvenida.mp4" type="video/mp4" />*/}
                <source src="https://media.drandrespereznieto.com/images/videos/Bienvenida.webm" type="video/webm" />
                {t('video_unsupported')}
              </video>

              {/* Video Overlay with Play Button - Solo cuando está pausado */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <button
                    onClick={handlePlayPause}
                    className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl border-4 border-white cursor-pointer"
                  >
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#1d3c5d' }}>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Video Description */}
            <div className="mt-6 text-center">
              <p className="font-sansation text-gray-600 text-sm lg:text-base">
                {t('video_description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}