'use client';

import React, { useState, useMemo } from 'react';
import { Play, X, ArrowUpRight, Instagram } from 'lucide-react';
import { useTranslations } from 'next-intl';
import rawVideos from '@/data/videos.json';

interface VideoItem {
  igId: string;
  cat: string;
  title: string;
  summary: string;
  dur: string;
  thumbnail?: string;
  transcription?: string;
}

interface VideosClientContentProps {
  locale: string;
}

export default function VideosClientContent({ locale }: VideosClientContentProps) {
  const t = useTranslations('videoteca');

  const CATEGORIES = [
    { id: "todos", label: t('categories.all'), href: "" },
    { id: "lifting", label: t('categories.lifting'), href: "/es/procedimientos/lifting-facial-hamaca/" },
    { id: "explantacion", label: t('categories.explantacion'), href: "/es/procedimientos/explantacion-mamaria/" },
    { id: "parpados", label: t('categories.parpados'), href: "/es/procedimientos/blefaroplastia/" },
    { id: "rinoplastia", label: t('categories.rinoplastia'), href: "/es/procedimientos/rinoplastia/" },
    { id: "celulas", label: t('categories.celulas'), href: "/es/procedimientos/lipofilling-celulas-madre/" },
    { id: "consejos", label: t('categories.consejos'), href: "" },
  ];

  const VIDEOS: VideoItem[] = rawVideos as VideoItem[];

  const [active, setActive] = useState("todos");
  const [open, setOpen] = useState<VideoItem | null>(null);
  const [embedLoaded, setEmbedLoaded] = useState(false);

  const visible = useMemo(
    () => (active === "todos" ? VIDEOS : VIDEOS.filter((v) => v.cat === active)),
    [active]
  );

  const openVideo = (v: VideoItem) => {
    setOpen(v);
    setEmbedLoaded(false);
  };

  const catLabel = (id: string) => CATEGORIES.find((c) => c.id === id)?.label ?? id;
  const catHref = (id: string) => CATEGORIES.find((c) => c.id === id)?.href;

  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#161d1a] py-24">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto px-6 pt-14 pb-8 font-sansation">
        <p className="uppercase tracking-[0.3em] text-xs text-[#8a7a55] flex items-center gap-2 font-bold">
          <Instagram size={14} strokeWidth={2} />
          {t('header_tag')}
        </p>
        <h1
          className="mt-4 text-4xl md:text-5xl leading-tight text-[#1c2723] font-prototype font-normal"
        >
          {t('title_main')}
          <span className="text-[#8a7a55] italic"> {t('title_accent')}</span>
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#4c554f]">
          {t('subtitle')}
        </p>
      </header>

      {/* Categories filter navigation */}
      <nav
        aria-label="Filtrar videos por procedimiento"
        className="max-w-6xl mx-auto px-6 flex flex-wrap gap-2 pb-8 font-sansation"
      >
        {CATEGORIES.map((c) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={
                "px-4 py-1.5 text-sm rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a7a55] font-bold cursor-pointer " +
                (isActive
                  ? "bg-[#1c2723] text-[#f7f5f1] border-[#1c2723]"
                  : "bg-transparent text-[#3c453f] border-[#c9c2b2] hover:border-[#1c2723]")
              }
              aria-pressed={isActive}
            >
              {c.label}
            </button>
          );
        })}
      </nav>

      {/* Grid of video cards */}
      <main className="max-w-6xl mx-auto px-6 pb-20 font-sansation">
        <p className="text-xs uppercase tracking-widest text-[#8a8578] mb-6 font-bold">
          {visible.length} video{visible.length !== 1 && "s"}
          {active !== "todos" && <> · {catLabel(active)}</>}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {visible.map((v) => (
            <article key={v.igId} className="group flex flex-col justify-between bg-white rounded-3xl border border-gray-100 p-3 shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => openVideo(v)}
                className="relative w-full aspect-[9/13] rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a7a55]"
                aria-label={`Ver video: ${v.title}`}
              >
                {/* Thumbnail Image */}
                {v.thumbnail && (
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                )}
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/80 z-10"></div>

                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-white border border-white/25 rounded-full px-2.5 py-1 font-bold z-20 bg-black/20 backdrop-blur-xs">
                  {catLabel(v.cat)}
                </span>
                <span className="absolute top-3 right-3 text-[11px] text-white/95 font-semibold z-20 bg-black/20 px-2 py-0.5 rounded-full">{v.dur}</span>

                <span className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="h-14 w-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    <Play size={20} className="text-white translate-x-[1px]" fill="currentColor" />
                  </span>
                </span>

                <span className="absolute inset-x-0 bottom-0 p-4 pt-10 text-left z-20">
                  <span className="block text-white text-[15px] leading-snug font-bold">
                    {v.title}
                  </span>
                </span>
              </button>

              <div className="p-2">
                <p className="text-[13px] leading-relaxed text-[#59615b] line-clamp-2 mt-2">
                  {v.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Modal dialog with video iframe loaded on demand */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-[#10140f]/80 backdrop-blur-sm flex items-center justify-center p-4 font-sansation"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-[#f7f5f1] rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 pb-2 border-b border-gray-100 bg-white rounded-t-3xl">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-[#8a7a55] font-bold">
                  {catLabel(open.cat)}
                </p>
                <h2 className="text-2xl leading-tight text-[#1c2723] mt-1 font-prototype font-normal">
                  {open.title}
                </h2>
              </div>
              <button
                onClick={() => setOpen(null)}
                className="shrink-0 h-9 w-9 rounded-full border border-[#c9c2b2] flex items-center justify-center hover:bg-slate-100 cursor-pointer transition-colors"
                aria-label={t('close_video')}
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-6 grid md:grid-cols-[280px_1fr] gap-6">
              {/* Embed Container - loaded on demand (facade pattern) */}
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-[#10140f] relative shadow-inner">
                {embedLoaded ? (
                  <iframe
                    title={open.title}
                    src={`https://www.instagram.com/reel/${open.igId}/embed/`}
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allow="encrypted-media"
                  />
                ) : (
                  <button
                    onClick={() => setEmbedLoaded(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/85 hover:text-white focus:outline-none cursor-pointer p-4 bg-slate-950/80"
                  >
                    <span className="h-16 w-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-transform hover:scale-105">
                      <Play size={24} className="translate-x-[1px]" fill="currentColor" />
                    </span>
                    <span className="text-xs uppercase tracking-widest font-bold">
                      {t('load_video')}
                    </span>
                    <span className="text-[11px] text-white/50 max-w-[200px] text-center leading-relaxed">
                      {t('placeholder_note')}
                    </span>
                  </button>
                )}
              </div>

              {/* Text info and call-to-actions */}
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-blue-950 font-bold mb-2">Resumen</h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">{open.summary}</p>
                  
                  {open.transcription && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-blue-950 font-bold mb-2">Transcripción (Indexable)</h4>
                      <p className="text-[13px] leading-relaxed text-gray-600 bg-gray-50 p-4 rounded-xl italic">
                        &quot;{open.transcription}&quot;
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 space-y-3">
                  {catHref(open.cat) && (
                    <a
                      href={catHref(open.cat)}
                      className="inline-flex items-center gap-1.5 text-sm text-[#8a7a55] hover:text-[#1c2723] transition-colors font-bold"
                    >
                      {t('know_more_procedure')} {catLabel(open.cat).toLowerCase()}
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                  <a
                    href="https://wa.me/573164953755"
                    className="flex justify-center items-center rounded-full bg-[#1c2723] text-[#f7f5f1] text-sm px-6 py-3 font-bold hover:bg-[#2b3a34] transition-colors shadow-sm"
                  >
                    {t('book_appointment')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
