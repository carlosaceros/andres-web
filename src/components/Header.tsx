"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { Link, useRouter } from '../navigation';

const LanguageSwitcher = dynamic(() => import('./LanguageSwitcher'), { ssr: false });

const Header = () => {
  const t = useTranslations('header_nav');
  const t_ui = useTranslations('ui');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Cerrar menú móvil al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll);
      document.body.style.overflow = 'hidden'; // Prevenir scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Cerrar menú móvil al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    {
      label: t('home'),
      href: '/',
      hasDropdown: false
    },
    {
      label: t('dr_perez'),
      href: '/',
      hasDropdown: true,
      subItems: [
        { label: t('meet_the_doctor'), href: '/conoce-doctor' },
        { label: t('facilities_and_staff'), href: '/instalaciones' },
      ]
    },
    {
      label: t('procedures'),
      href: '/',
      hasDropdown: true,
      subItems: [
        {
          label: t('facials'),
          isCategory: true,
          items: [
            { label: t('eyebrow_lift'), href: '/procedimientos/elevacion-cola-cejas' },
            { label: t('blepharoplasty'), href: '/procedimientos/blefaroplastia' },
            { label: t('cheek_and_neck_hammock_lift'), href: '/procedimientos/lifting-en-hamaca-de-mejilla-y-cuello' },
            { label: t('facial_hammock_lift'), href: '/procedimientos/lifting-facial-hamaca' },
            { label: t('lipofilling_stem_cells'), href: '/procedimientos/lipofilling-celulas-madre' },
            { label: t('lip_lift'), href: '/procedimientos/lip-lift' },
            { label: t('rhinoplasty'), href: '/procedimientos/rinoplastia' },
            { label: t('mentoplasty'), href: '/procedimientos/mentoplastia' },
            { label: t('otoplasty'), href: '/procedimientos/otoplastia' },
            { label: t('bichectomy'), href: '/procedimientos/bichectomia' }
          ]
        },
        {
          label: t('body_procedures'),
          isCategory: true,
          items: [
            {
              label: t('breasts'),
              isSubcategory: true,
              items: [
                { label: t('breast_augmentation'), href: '/procedimientos/mamoplastia-aumento' },
                { label: t('breast_reduction'), href: '/procedimientos/mamoplastia-reduccion' },
                { label: t('breast_explantation'), href: '/procedimientos/explantacion-mamaria' },
                { label: t('mastopexy'), href: '/procedimientos/pexia' }
              ]
            },
            {
              label: t('body_subcategory'),
              isSubcategory: true,
              items: [
                { label: t('abdominoplasty_hd'), href: '/procedimientos/abdominoplastia' },
                { label: t('liposuction'), href: '/procedimientos/liposuccion' }
              ]
            }
          ]
        },
        {
          label: t('non_surgical'),
          isCategory: true,
          items: [
            { label: t('botox'), href: '/procedimientos/botox' },
            { label: t('hyaluronic_acid'), href: '/procedimientos/acido-hialuronico' }
          ]
        }
      ]
    },
    {
      label: t('gallery'),
      href: '/galeria',
      hasDropdown: true,
      subItems: [
        { label: t('before_after_photos'), href: '/galeria' },
        { label: t('testimonials'), href: '/testimonios' }
      ]
    },
    {
      label: t('foreign_patients'),
      href: '/paciente-extranjero',
      hasDropdown: true,
      subItems: [
        { label: t('foreigners'), href: '/paciente-extranjero' },
        { label: t('virtual_consultation'), href: 'https://api.whatsapp.com/send/?phone=573164953755&text=Hola%21+Me+gustar%C3%ADa+solicitar+informaci%C3%B3n+sobre+los+procedimientos.&type=phone_number&app_absent=0' }
      ]
    },
    {
      label: t('blog'),
      href: '/blog',
      hasDropdown: false
    },
    {
      label: t('resources'),
      href: '/recursos',
      hasDropdown: true,
      subItems: [
        { label: t('your_step_by_step'), href: '/paso-a-paso' },
        { label: t('guides'), href: '/recursos/guias' },
        { label: t('videoteca'), href: '/videos' }
      ]
    }
  ];

  // Funciones Desktop
  const handleMouseEnter = (itemLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  // Funciones Móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (itemLabel: string) => {
    setOpenMobileDropdown(openMobileDropdown === itemLabel ? null : itemLabel);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const handleMobileItemClick = (item: any) => {
    if (item.hasDropdown) {
      toggleMobileDropdown(item.label);
    } else {
      closeMobileMenu();
      router.push(item.href);
    }
  };

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="text-white sticky top-0 z-50" style={{ backgroundColor: '#1d3c5d' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center">
              <div className="text-white">
                <Image
                  src="/images/firma-2.png"
                  alt={t_ui('logo_alt')}
                  width={200}
                  height={128}
                  className="h-24 sm:h-32 w-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const nextSibling = (e.target as HTMLImageElement).nextElementSibling as HTMLElement | null;
                    if (nextSibling) nextSibling.style.display = 'block';
                  }}
                  priority
                />

                <div className="hidden">
                  <h1 className="text-xl font-light tracking-wide text-white">
                    Dr. Andrés Pérez Nieto
                  </h1>
                </div>
              </div>
            </div>

            {/* Menú Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm tracking-wide py-2"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <span className="ml-2 text-blue-200">+</span>
                    )}
                  </Link>

                  {/* Dropdown Desktop */}
                  {item.hasDropdown && openDropdown === item.label && isMounted && (
                    <div
                      className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-xl border border-gray-100 py-4 z-50 animate-fadeIn"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {item.label === t('procedures') ? (
                        <div className="w-[900px] grid grid-cols-3 gap-6 px-6">
                          {item.subItems?.map((category, catIndex) => (
                            <div key={catIndex} className="space-y-3">
                              <div className="flex items-center space-x-2 pb-3 border-b border-gray-100">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1d3c5d' }}></div>
                                <h3 className="font-bold text-sm uppercase tracking-wide" style={{ color: '#1d3c5d' }}>
                                  {category.label}
                                </h3>
                              </div>

                              <div className="space-y-1">
                                {'items' in category && Array.isArray(category.items) && category.items.map((subItem, subIndex) => (
                                  <div key={subIndex}>
                                    {'isSubcategory' in subItem && subItem.isSubcategory ? (
                                      <div className="mb-4">
                                        <div className="flex items-center space-x-2 mb-2 px-3 py-2 rounded-lg" style={{ backgroundColor: '#1d3c5d20' }}>
                                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1d3c5d' }}></div>
                                          <span className="text-sm font-bold uppercase" style={{ color: '#1d3c5d' }}>{subItem.label}</span>
                                        </div>

                                        <div className="space-y-1 ml-3">
                                          {subItem.items?.map((subSubItem, subSubIndex) => (
                                            <Link
                                              key={subSubIndex}
                                              href={subSubItem.href}
                                              className="group flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 transition-all duration-200 transform hover:translate-x-1"
                                              onClick={() => setOpenDropdown(null)}
                                            >
                                              <div className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-current transition-colors" style={{ color: '#1d3c5d' }}></div>
                                              <span className="text-xs font-medium">{subSubItem.label}</span>
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ) : (
                                      'href' in subItem ? (
                                        <Link
                                          href={subItem.href}
                                          className="group flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 transition-all duration-200 transform hover:translate-x-1"
                                          onClick={() => setOpenDropdown(null)}
                                        >
                                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-current transition-colors" style={{ color: '#1d3c5d' }}></div>
                                          <span className="text-sm font-medium">{subItem.label}</span>
                                        </Link>
                                      ) : null
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="w-72 px-4">
                          <div className="space-y-1">
                            {item.subItems?.map((subItem, subIndex) => (
                              'href' in subItem ? (
                                <Link
                                  key={subIndex}
                                  href={'href' in subItem ? subItem.href : '#'}
                                  className="group flex items-center space-x-3 px-4 py-4 rounded-lg text-gray-700 transition-all duration-200 transform hover:translate-x-2 hover:shadow-md"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <div className="flex-shrink-0">
                                    <div
                                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                                      style={{
                                        background: `linear-gradient(to bottom right, #1d3c5d30, #1d3c5d50)`
                                      }}
                                    >
                                      <svg className="w-4 h-4 group-hover:text-white transition-colors" style={{ color: '#1d3c5d' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <span className="text-sm font-semibold block">{subItem.label}</span>
                                    <span className="text-xs text-gray-500 group-hover:text-current">{t('explore_details')}</span>
                                  </div>
                                </Link>
                              ) : null
                            ))}
                          </div>

                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="px-4 py-2 text-center">
                              <span className="text-xs text-gray-500">{t('need_help')} </span>
                              <Link
                                href="/contacto"
                                className="text-xs font-medium hover:underline"
                                style={{ color: '#1d3c5d' }}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {t('contact_us')}
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center ml-4">
              <LanguageSwitcher />
            </div>

            {/* Botón Hamburguesa */}
            <button
              className="lg:hidden text-white focus:outline-none p-2 relative z-50 transition-all duration-300"
              onClick={toggleMobileMenu}
              type="button"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 top-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay para móvil */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Menú Móvil */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header del menú móvil */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200" style={{ backgroundColor: '#1d3c5d' }}>
            <h2 className="text-white font-semibold text-lg">{t_ui('menu_title')}</h2>
            <button
              onClick={closeMobileMenu}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Contenido del menú móvil */}
          <div className="flex-1 overflow-y-auto">
            <nav className="py-4">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-800 font-medium text-sm hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => handleMobileItemClick(item)}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openMobileDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Submenú móvil */}
                  {item.hasDropdown && openMobileDropdown === item.label && (
                    <div className="bg-gray-50 border-t border-gray-200">
                      {item.label === t('procedures') ? (
                        <div className="py-2">
                          {item.subItems?.map((category, catIndex) => (
                            <div key={catIndex} className="mb-4">
                              <div className="px-6 py-2 border-b border-gray-200 bg-gray-100">
                                <h3 className="font-semibold text-xs uppercase tracking-wide" style={{ color: '#1d3c5d' }}>
                                  {category.label}
                                </h3>
                              </div>

                              <div className="pl-4">
                                {'items' in category && Array.isArray(category.items) && category.items.map((subItem, subIndex) => (
                                  <div key={subIndex}>
                                    {'isSubcategory' in subItem && subItem.isSubcategory ? (
                                      <div>
                                        <div className="px-6 py-2 bg-gray-200">
                                          <span className="text-xs font-semibold" style={{ color: '#1d3c5d' }}>{subItem.label}</span>
                                        </div>
                                        <div className="pl-4">
                                          {subItem.items?.map((subSubItem, subSubIndex) => (
                                            <Link
                                              key={subSubIndex}
                                              href={subSubItem.href}
                                              className="block px-6 py-3 text-gray-600 text-sm hover:bg-gray-100 hover:text-gray-800 transition-colors"
                                              onClick={closeMobileMenu}
                                            >
                                              {subSubItem.label}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ) : (
                                      'href' in subItem ? (
                                        <Link
                                          href={subItem.href}
                                          className="block px-6 py-3 text-gray-600 text-sm hover:bg-gray-100 hover:text-gray-800 transition-colors"
                                          onClick={closeMobileMenu}
                                        >
                                          {subItem.label}
                                        </Link>
                                      ) : null
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="py-2">
                          {item.subItems?.map((subItem, subIndex) => (
                            'href' in subItem ? (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="block px-8 py-3 text-gray-600 text-sm hover:bg-gray-100 hover:text-gray-800 transition-colors border-l-2 border-transparent hover:border-blue-500"
                                onClick={closeMobileMenu}
                              >
                                {subItem.label}
                              </Link>
                            ) : null
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer del menú móvil */}
            <div className="mt-auto p-6 border-t border-gray-200 bg-gray-50">
              <Link
                href="/contacto"
                className="block w-full text-center py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 hover:shadow-lg"
                style={{ backgroundColor: '#1d3c5d' }}
                onClick={closeMobileMenu}
              >
                {t('contact_us')}
              </Link>

              <div className="mt-6 flex justify-center">
                <LanguageSwitcher />
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  {t('doctor_name')}
                </p>
                <p className="text-xs text-gray-400">
                  {t('specialty_description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .group:hover .hover\\:bg-gradient-to-r {
          background: linear-gradient(to right, #1d3c5d20, #1d3c5d30) !important;
          color: #1d3c5d !important;
        }

        .group:hover .group-hover\\:bg-current {
          background-color: #1d3c5d !important;
        }

        .group:hover .group-hover\\:text-current {
          color: #1d3c5d !important;
        }

        .group:hover .group-hover\\:text-white {
          color: white !important;
        }
      `}</style>
    </>
  );
};

export default Header;

