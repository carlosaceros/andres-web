"use client"
import { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function ClientContent() {
  const t = useTranslations('testimonios_page')
  const [activeCategory, setActiveCategory] = useState('rinoplastia')

  // State for tracking which videos have been loaded (clicked)
  const [loadedVideos, setLoadedVideos] = useState<Record<string, boolean>>({})

  // State for active playback control
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [mutedVideos, setMutedVideos] = useState<Record<string, boolean>>({})
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})

  const getYouTubeVideoId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/)
    return match ? match[1] : null
  }

  const handleVideoLoad = (id: string) => {
    setLoadedVideos(prev => ({ ...prev, [id]: true }))
    // Automatically set as playing when loaded via facade click
    setPlayingVideo(id)
  }

  const liftingVideosLocales = [
    {
      id: 'v1',
      path: 'https://media.drandrespereznieto.com/images/videos/vertical/OlgaUrdaneta.webm',
      orientacion: 'vertical',
      poster: 'https://media.drandrespereznieto.com/images/videos/vertical/tes1.webp'
    },
    {
      id: 'v2',
      path: 'https://media.drandrespereznieto.com/images/videos/vertical/tes2.webm',
      orientacion: 'vertical',
      poster: 'https://media.drandrespereznieto.com/images/videos/vertical/tes2.webp'
    },
    {
      id: 'v3',
      path: 'https://media.drandrespereznieto.com/images/videos/vertical/tes3.webm',
      orientacion: 'vertical',
      poster: 'https://media.drandrespereznieto.com/images/videos/vertical/tes3.webp'
    },
    {
      id: 'v4',
      path: 'https://media.drandrespereznieto.com/images/videos/vertical/tes4.webm',
      orientacion: 'vertical',
      poster: 'https://media.drandrespereznieto.com/images/videos/vertical/tes4.webp'
    },
    {
      id: 'v5',
      path: 'https://media.drandrespereznieto.com/images/videos/vertical/tes5.webm',
      orientacion: 'vertical',
      poster: 'https://media.drandrespereznieto.com/images/videos/vertical/tes5.webp'
    },
    {
      id: 'v6',
      path: 'https://media.drandrespereznieto.com/images/videos/vertical/tes7.webm',
      orientacion: 'vertical',
      poster: 'https://media.drandrespereznieto.com/images/videos/vertical/tes7.webp'
    },
    {
      id: 'v7',
      path: 'https://media.drandrespereznieto.com/images/videos/vertical/tes8.webm',
      orientacion: 'vertical',
      poster: 'https://media.drandrespereznieto.com/images/videos/vertical/tes8.webp'
    },
    {
      id: 'v8',
      path: 'https://media.drandrespereznieto.com/images/videos/horinzontales/MiriamFilmVideo.webm',
      orientacion: 'horizontal',
      poster: 'https://media.drandrespereznieto.com/images/videos/horinzontales/testimono2home.webp'
    },
    {
      id: 'v9',
      path: 'https://media.drandrespereznieto.com/images/videos/horinzontales/tes9.webm',
      orientacion: 'horizontal',
      poster: 'https://media.drandrespereznieto.com/images/videos/horinzontales/tes9.webp'
    },
    {
      id: 'v10',
      path: 'https://media.drandrespereznieto.com/images/videos/horinzontales/tes11.webm',
      orientacion: 'horizontal',
      poster: 'https://media.drandrespereznieto.com/images/videos/horinzontales/tes11.webp'
    },
    {
      id: 'v11',
      path: 'https://media.drandrespereznieto.com/images/videos/horinzontales/tes12.webm',
      orientacion: 'horizontal',
      poster: 'https://media.drandrespereznieto.com/images/videos/horinzontales/testimoni1.webp'
    },
    {
      id: 'v12',
      path: 'https://media.drandrespereznieto.com/images/videos/horinzontales/tes14.webm',
      orientacion: 'horizontal',
      poster: 'https://media.drandrespereznieto.com/images/videos/horinzontales/tes14.webp'
    },
    {
      id: 'v13',
      path: 'https://media.drandrespereznieto.com/images/videos/horinzontales/tes10.webm',
      orientacion: 'horizontal',
      poster: 'https://media.drandrespereznieto.com/images/videos/horinzontales/tes10.webp'
    },
    {
      id: 'v14',
      path: 'https://media.drandrespereznieto.com/images/videos/horinzontales/testimonioMariaHelena.webm',
      orientacion: 'horizontal',
      poster: 'https://media.drandrespereznieto.com/images/videos/horinzontales/testimonio.webp'
    },
    {
      id: 'v15',
      path: 'https://media.drandrespereznieto.com/images/videos/horinzontales/VideoMarlenyCatherineEE.webm',
      orientacion: 'horizontal',
      poster: 'https://media.drandrespereznieto.com/images/videos/horinzontales/testimono3home.webp'
    }
  ]

  const testimonios: Record<string, string[]> = {
    rinoplastia: [
      'https://youtu.be/YwEKt2kOA9k',
      'https://youtu.be/ioBfgmu_jJA',
      'https://youtu.be/E9ZrxAEy5hI',
      'https://youtu.be/-a8azaO3qqo',
      'https://youtu.be/0pSYMfixugk',
      'https://youtu.be/BZIASlX9-BM'
    ],
    lipofilling: [
      'https://youtu.be/dVWww2UtLGU',
      'https://youtu.be/2cu-7Q05wZ8',
      'https://youtu.be/gFx2FlD9Dl8',
      'https://youtu.be/rRs9DWhfh90',
      'https://youtu.be/mSAkkUqPhd4'
    ],
    lifting: [],
    blefaroplastia: [
      'https://youtu.be/aW6YGaZT9Uk',
      'https://youtu.be/y2unx56TgQ4',
      'https://youtu.be/6jTB8VTBf-0',
      'https://youtu.be/zC3b07iSIk8'
    ]
  }

  const categorias = [
    { id: 'rinoplastia', nombre: t('categories.rinoplastia'), tipo: 'Facial' },
    { id: 'lipofilling', nombre: t('categories.lipofilling'), tipo: 'Facial' },
    { id: 'lifting', nombre: t('categories.lifting'), tipo: 'Facial' },
    { id: 'blefaroplastia', nombre: t('categories.blefaroplastia'), tipo: 'Facial' }
  ]

  const togglePlay = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (!video) return
    if (playingVideo === videoId) {
      video.pause()
      setPlayingVideo(null)
    } else {
      Object.keys(videoRefs.current).forEach(id => {
        const v = videoRefs.current[id]
        if (v && id !== videoId) v.pause()
      })
      video.play().catch(err => {
        console.error('Error reproduciendo video:', err)
      })
      setPlayingVideo(videoId)
    }
  }

  const toggleMute = (videoId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRefs.current[videoId]
    if (!video) return
    video.muted = !video.muted
    setMutedVideos(prev => ({ ...prev, [videoId]: video.muted }))
  }

  return (
    <>
      <section
        className="py-20 text-white"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">{t('title')}</h1>
          <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            {t('description')}
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">{t('procedures_title')}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('facial_procedures_title')}</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() => setActiveCategory(categoria.id)}
                  className={`p-4 rounded-lg font-semibold transition-all duration-300 ${activeCategory === categoria.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-900 hover:bg-blue-50 border border-blue-200'
                    }`}
                >
                  {categoria.nombre}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              {categorias.find(cat => cat.id === activeCategory)?.nombre}
            </h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">{t('real_testimonials_subtitle')}</p>
          </div>

          {activeCategory === 'lifting' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {liftingVideosLocales.map((video, index) => {
                const isVertical = video.orientacion === 'vertical'
                const isPlaying = playingVideo === video.id
                const isMuted = mutedVideos[video.id] !== false
                const isLoaded = loadedVideos[video.id]

                return (
                  <div
                    key={video.id}
                    className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${isVertical ? 'md:row-span-2' : ''
                      }`}
                  >
                    <div className={`relative bg-black ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
                      {!isLoaded ? (
                        <div className="w-full h-full relative cursor-pointer" onClick={() => handleVideoLoad(video.id)}>
                          <Image
                            src={video.poster}
                            alt={`Testimonio ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl scale-90 hover:scale-100 transition-transform duration-300">
                              <Play className="w-8 h-8 text-white ml-1" fill="white" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <video
                            ref={(el) => { videoRefs.current[video.id] = el }}
                            src={video.path}
                            poster={video.poster}
                            className="w-full h-full object-cover"
                            loop
                            autoPlay
                            muted={isMuted}
                            playsInline
                            onPlay={() => setPlayingVideo(video.id)}
                            onPause={() => setPlayingVideo(null)}
                            onError={(e) => {
                              console.error('Error cargando video:', video.path)
                            }}
                          >
                            <source src={video.path} type="video/webm" />
                            Tu navegador no soporta la reproducción de videos.
                          </video>

                          {!isPlaying && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                          )}

                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePlay(video.id);
                              }}
                              className={`w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 pointer-events-auto ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100 hover:scale-110'
                                }`}
                            >
                              {isPlaying ? (
                                <Pause className="w-8 h-8 text-white" fill="white" />
                              ) : (
                                <Play className="w-8 h-8 text-white ml-1" fill="white" />
                              )}
                            </button>
                          </div>

                          <div className="absolute top-4 right-4 z-10">
                            <button
                              onClick={(e) => toggleMute(video.id, e)}
                              className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
                            >
                              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">{t('testimonio_label')} {index + 1}</h3>
                      <p className="text-gray-600 text-sm mb-3">{t('categories.lifting')}</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-500">{t('patient_verified')}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonios[activeCategory]?.map((videoUrl, index) => {
                const videoId = getYouTubeVideoId(videoUrl)
                if (!videoId) return null
                const uniqueId = `yt-${activeCategory}-${index}`
                const isLoaded = loadedVideos[uniqueId]

                return (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-video bg-black">
                      {!isLoaded ? (
                        <div className="w-full h-full relative cursor-pointer group" onClick={() => handleVideoLoad(uniqueId)}>
                          <img
                            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                            alt={`Testimonio ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to hqdefault if maxresdefault doesn't exist
                              e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                            }}
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                              <Play className="w-8 h-8 text-white ml-1" fill="white" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                          title={`${t('testimonio_label')} ${index + 1}`}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">{t('testimonio_label')} {index + 1}</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {categorias.find(cat => cat.id === activeCategory)?.nombre}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-500">{t('patient_verified')}</span>
                      </div>
                      <div className="mt-3">
                        <a
                          href={videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm underline"
                        >
                          {t('watch_on_youtube')}
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}