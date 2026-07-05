"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getPostsByLocale } from '@/data/blog-posts';

interface BlogClientContentProps {
  locale: string;
}

export default function BlogClientContent({ locale }: BlogClientContentProps) {
  const t = useTranslations('blog');
  const posts = getPostsByLocale(locale);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMxYjM2NTMiLz48L3N2Zz4=')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="font-prototype text-4xl md:text-6xl text-white mb-4 leading-tight">
            {t('title')}
          </h1>
          <p className="font-sansation text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl font-sansation">
          {posts.length === 0 ? (
            <div className="text-center py-12 text-gray-500 text-lg">
              No hay artículos disponibles para este idioma en este momento.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Featured Image */}
                    <div className="relative h-56 w-full bg-gray-100">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        unoptimized
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                          e.currentTarget.src = '/images/blog/default-blog.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <span className="bg-white/95 backdrop-blur-sm text-blue-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                          {post.category}
                        </span>
                        <span className="bg-blue-900/90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                          {post.readingTime}
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Title */}
                    <div className="p-6 sm:p-8">
                      <p className="text-xs text-gray-400 mb-3">
                        {formatDate(post.date)} • Por Dr. Andrés Pérez Nieto
                      </p>
                      <h2 className="font-prototype text-xl text-blue-950 mb-3 line-clamp-2 leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                        {post.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Read More button */}
                  <div className="px-6 pb-8">
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="inline-flex items-center justify-center font-bold text-sm px-6 py-3 rounded-full border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all w-full text-center uppercase tracking-wider"
                    >
                      {t('read_more')}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}