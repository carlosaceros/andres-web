"use client";

import React, { useState, useMemo } from 'react';
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

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(locale === 'es' ? 'Todos' : 'All');

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(posts.map(post => post.category)));
    return [locale === 'es' ? 'Todos' : 'All', ...uniqueCats];
  }, [posts, locale]);

  // Filter posts based on search and category selections
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'Todos' || 
        selectedCategory === 'All' || 
        post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(locale === 'es' ? 'Todos' : 'All');
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

      {/* Filter and Search controls */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="container mx-auto px-6 max-w-7xl font-sansation">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('search_placeholder')}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 text-gray-800 placeholder-gray-400 transition-all shadow-sm"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>

            {/* Category Filter Label & list */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end items-center">
              <span className="text-sm font-bold text-blue-950 mr-2 hidden lg:inline">
                {t('category_label')}:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 shadow-sm cursor-pointer select-none ${
                    selectedCategory === cat
                      ? 'bg-blue-900 text-white hover:bg-blue-950'
                      : 'bg-gray-100 text-blue-950 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl font-sansation">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                {t('no_results')}
              </p>
              <button
                onClick={handleClearFilters}
                className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-8 py-3 rounded-full shadow transition-all cursor-pointer"
              >
                {t('clear_filters')}
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between"
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
                      className="inline-flex items-center justify-center font-bold text-sm px-6 py-3 rounded-full border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all w-full text-center uppercase tracking-wider cursor-pointer"
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