"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
  isGoogle?: boolean;
  platform?: string;
}

interface VideoTestimonial {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  videoUrl: string;
  duration?: string;
  procedure?: string;
  featured?: boolean;
}

const TestimonialsSection = () => {
  const t = useTranslations('testimonials_section');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Get testimonials from translation files
  const testimonialsRaw = t.raw('testimonials') as Array<{
    name: string;
    date: string;
    text: string;
  }>;

  // Transform translation data to Testimonial interface
  const testimonials: Testimonial[] = testimonialsRaw.map((item, index) => ({
    id: String(index + 1),
    name: item.name,
    date: item.date,
    rating: 5,
    text: item.text,
    avatar: item.name.charAt(0).toUpperCase(),
    isGoogle: true,
    platform: 'Google'
  }));


  // Video testimonios mejorados con más datos
  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 'video1',
      title: '',
      subtitle: '',
      thumbnail: '/images/testimono1home.webp',
      videoUrl: 'https://media.drandrespereznieto.com/images/videos/testimonio1.webm',
      duration: '3:42',
      procedure: 'Lifting Facial en Hamaca',
      featured: true
    },
    {
      id: 'video2',
      title: '',
      subtitle: '',
      thumbnail: '/images/testimono2home.webp',
      videoUrl: 'https://media.drandrespereznieto.com/images/videos/MiriamFilmVideo.webm',
      duration: '2:18',
      procedure: 'Lifting Facial en Hamaca',
      featured: false
    },
    {
      id: 'video3',
      title: '',
      subtitle: '',
      thumbnail: '/images/testimono3home.webp',
      videoUrl: 'https://media.drandrespereznieto.com/images/videos/VideoMarlenyCatherineEE.webm',
      duration: '4:15',
      procedure: 'Lifting Facial en Hamaca',
      featured: true
    }
  ];

  // Configuración del slider automático
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  // Auto-play del slider
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentVideoTime(video.currentTime);
    const updateDuration = () => setVideoDuration(video.duration);
    const handlePlay = () => setIsVideoPlaying(true);
    const handlePause = () => setIsVideoPlaying(false);
    const handleEnded = () => setIsVideoPlaying(false);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [selectedVideo]);

  // Fullscreen handlers
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const toggleVideoPlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideoPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const seekVideo = (time: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = time;
  };

  const toggleFullscreen = () => {
    const modal = modalRef.current;
    if (!modal) return;

    if (!document.fullscreenElement) {
      modal.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play();
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section style={{ backgroundColor: '#babdb3' }} className="py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-prototype text-3xl sm:text-4xl lg:text-5xl font-normal text-blue-900 leading-tight">
            {t('main_title')}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-900 mt-4"></div>
        </div>

        {/* Header con rating de Google */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-8 sm:mb-12">
          <div className="text-center">
            <h3 className="font-prototype font-normal text-2xl sm:text-3xl text-gray-900 mb-2">{t('rating_label')}</h3>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <p className="font-sansation text-gray-600 text-sm sm:text-base">
              {t('based_on_reviews', { count: 45 })}
            </p>
            <div className="mt-4">
              <img
                src="/images/iconos/logo-google.png"
                alt="Google"
                className="h-6 sm:h-8 mx-auto"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Slider de testimonios */}
        <div
          className="relative mb-12 sm:mb-16"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Controles del slider */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>

            <div className="text-center">
              <p className="font-sansation text-sm text-gray-600">
                {currentSlide + 1} {t('pagination_of')} {totalSlides}
              </p>
            </div>

            <button
              onClick={nextSlide}
              className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Grid de testimonios (mantener igual) */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => {
                const slideTestimonials = testimonials.slice(
                  slideIndex * itemsPerSlide,
                  (slideIndex + 1) * itemsPerSlide
                );

                return (
                  <div
                    key={slideIndex}
                    className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    style={{ minWidth: '100%' }}
                  >
                    {slideTestimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        {/* Header del testimonial */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <h4 className="font-sansation font-bold text-gray-900 text-base">
                                {testimonial.name}
                              </h4>
                              <p className="font-sansation text-sm text-gray-500">
                                {testimonial.date}
                              </p>
                            </div>
                          </div>

                          {testimonial.isGoogle && (
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                                <span className="text-white text-sm font-bold">G</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            {renderStars(testimonial.rating)}
                          </div>
                          <div className="flex items-center">
                            <span className="text-blue-500 text-lg font-bold">✓</span>
                          </div>
                        </div>

                        {/* Texto del testimonial */}
                        <div className="mb-4">
                          <p className="font-sansation text-gray-700 text-sm leading-relaxed">
                            {testimonial.text}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <button className="font-sansation text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                            {t('read_more')}
                          </button>
                          <div className="font-sansation bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {t('verified')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sección de videos SIMPLIFICADA */}
        <div id="videos-testimonios" className="scroll-mt-20 mb-12 sm:mb-16">
          <div className="mb-8 sm:mb-12">
            <h3 className="font-prototype text-2xl sm:text-3xl lg:text-4xl font-normal text-blue-900 mb-4 text-center">
              {t('patient_videos_title')}
            </h3>
            <div className="w-16 sm:w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          {/* Grid horizontal de videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="group">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-black shadow-lg hover:shadow-xl transition-all duration-300">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    poster={video.thumbnail}
                    onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                      e.currentTarget.style.display = 'none';
                      // Mostrar imagen de fallback si el video falla
                      const fallbackImg = document.createElement('img');
                      fallbackImg.src = video.thumbnail;
                      fallbackImg.className = 'w-full h-full object-cover';
                      fallbackImg.alt = video.title;
                      e.currentTarget.parentNode?.appendChild(fallbackImg);
                    }}
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Tu navegador no soporta el elemento video.
                  </video>
                </div>

                {/* Información del video */}
                <div className="mt-4">
                  <h4 className="font-sansation font-bold text-gray-900 text-base mb-2">{video.title}</h4>
                  <p className="font-sansation text-gray-600 text-sm leading-relaxed mb-3">{video.subtitle}</p>
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {video.procedure}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            className="font-sansation font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-full border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer text-base sm:text-lg"
            style={{
              backgroundColor: 'transparent',  // Fondo transparente
              borderColor: '#1d3c5d',          // Borde azul
              color: '#1d3c5d'                 // Texto azul
            }}
            onClick={() => {
              window.open('/testimonios', '_blank');
            }}
            onMouseEnter={(e) => {
              // Hover effect: fondo azul, texto blanco
              e.currentTarget.style.backgroundColor = '#1d3c5d';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              // Volver al estado original
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1d3c5d';
            }}
          >
            {t('view_more_testimonials')}
          </button>
        </div>



        {/* Modal para video MEJORADO */}
        {selectedVideo && (
          <div
            ref={modalRef}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className={`relative w-full bg-black rounded-lg overflow-hidden transition-all duration-300 ${isFullscreen ? 'max-w-none max-h-none h-full' : 'max-w-5xl max-h-[90vh]'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h3 className="font-sansation font-bold text-lg">{selectedVideo.title}</h3>
                    <p className="text-sm text-gray-300">{selectedVideo.subtitle}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={toggleFullscreen}
                      className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                      title="Pantalla completa"
                    >
                      <Maximize2 size={20} className="text-white" />
                    </button>
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                      title="Cerrar"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-auto max-h-full object-contain"
                preload="metadata"
                onLoadedData={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = isMuted;
                  }
                }}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>

              {/* Controles personalizados */}
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
                {/* Barra de progreso */}
                <div className="mb-4">
                  <div className="w-full bg-gray-600 rounded-full h-2 cursor-pointer" onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const percent = (e.clientX - rect.left) / rect.width;
                    seekVideo(percent * videoDuration);
                  }}>
                    <div
                      className="bg-red-600 h-2 rounded-full transition-all duration-150"
                      style={{ width: `${(currentVideoTime / videoDuration) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Controles */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={toggleVideoPlayback}
                      className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                    >
                      {isVideoPlaying ? (
                        <div className="w-4 h-4 bg-white rounded-sm" />
                      ) : (
                        <Play className="text-white ml-1" size={20} fill="white" />
                      )}
                    </button>

                    <button
                      onClick={restartVideo}
                      className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                      title="Reiniciar"
                    >
                      <RotateCcw size={16} className="text-white" />
                    </button>

                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                      title={isMuted ? "Activar sonido" : "Silenciar"}
                    >
                      {isMuted ? (
                        <VolumeX size={16} className="text-white" />
                      ) : (
                        <Volume2 size={16} className="text-white" />
                      )}
                    </button>

                    <div className="text-white text-sm">
                      {formatTime(currentVideoTime)} / {formatTime(videoDuration)}
                    </div>
                  </div>

                  <div className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                    {selectedVideo.procedure}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section >
  );
};

export default TestimonialsSection;