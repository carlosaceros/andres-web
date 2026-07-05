"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '../navigation';

const Footer = () => {
  const t_header = useTranslations('header_nav');
  const t_footer = useTranslations('footer');
  const t_ui = useTranslations('ui');
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
    {
      label: t_header('home'),
      href: '/'
    },
    {
      label: t_header('dr_perez'),
      href: '/dr-perez',
      hasSubmenu: true,
      subItems: [
        { label: t_header('meet_the_doctor'), href: '/conoce-doctor' },
        { label: t_header('my_techniques'), href: '/dr-perez/tecnicas' },
        { label: t_header('facilities_and_staff'), href: '/instalaciones' }
      ]
    },
    {
      label: t_header('procedures'),
      href: '/procedimientos',
      hasSubmenu: true,
      subItems: [
        {
          label: t_header('facials'),
          isCategory: true,
          items: [
            { label: t_header('eyebrow_lift'), href: '/procedimientos/elevacion-cola-cejas' },
            { label: t_header('blepharoplasty'), href: '/procedimientos/blefaroplastia' },
            { label: t_header('cheek_and_neck_hammock_lift'), href: '/procedimientos/lifting-en-hamaca-de-mejilla-y-cuello' },
            { label: t_header('facial_hammock_lift'), href: '/procedimientos/lifting-hamaca' },
            { label: t_header('lipofilling_stem_cells'), href: '/procedimientos/lipofilling' },
            { label: t_header('lip_lift'), href: '/procedimientos/lip-lift' },
            { label: t_header('rhinoplasty'), href: '/procedimientos/rinoplastia' },
            { label: t_header('mentoplasty'), href: '/procedimientos/mentoplastia' },
            { label: t_header('otoplasty'), href: '/procedimientos/otoplastia' },
            { label: t_header('bichectomy'), href: '/procedimientos/bichectomia' }
          ]
        },
        {
          label: t_header('body_procedures'),
          isCategory: true,
          items: [
            {
              label: t_header('breasts'),
              isSubcategory: true,
              items: [
                { label: t_header('breast_augmentation'), href: '/procedimientos/mamoplastia-aumento' },
                { label: t_header('breast_reduction'), href: '/procedimientos/mamoplastia-reduccion' },
                { label: t_header('mastopexy'), href: '/procedimientos/pexia' }
              ]
            },
            {
              label: t_header('body_subcategory'),
              isSubcategory: true,
              items: [
                { label: t_header('abdominoplasty_hd'), href: '/procedimientos/abdominoplastia' },
                { label: t_header('liposuction'), href: '/procedimientos/liposuccion' }
              ]
            }
          ]
        },
        {
          label: t_header('non_surgical'),
          isCategory: true,
          items: [
            { label: t_header('botox'), href: '/procedimientos/botox' },
            { label: t_header('hyaluronic_acid'), href: '/procedimientos/acido-hialuronico' }
          ]
        }
      ]
    },
    {
      label: t_header('gallery'),
      href: '/galeria',
      hasSubmenu: true,
      subItems: [
        { label: t_header('before_after_photos'), href: '/galeria/antes-despues' },
        { label: t_header('testimonials'), href: '/galeria/testimonios' }
      ]
    },
    {
      label: t_header('foreign_patients'),
      href: '/pacientes-extranjeros',
      hasSubmenu: true,
      subItems: [
        { label: t_header('foreigners'), href: '/paciente-extranjero' },
        { label: t_header('virtual_consultation'), href: '/pacientes-extranjeros/cita-virtual' }
      ]
    },
    {
      label: t_header('blog'),
      href: '/blog'
    },
    {
      label: t_header('resources'),
      href: '/recursos',
      hasSubmenu: true,
      subItems: [
        { label: t_header('your_step_by_step'), href: '/recursos/paso-a-paso' },
        { label: t_header('guides'), href: '/recursos/guias' }
      ]
    }
  ];

  const handleMouseEnter = (itemLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenSubmenu(itemLabel);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenSubmenu(null);
    }, 300);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenSubmenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <footer className="text-white py-12 px-4" style={{ backgroundColor: '#1d3c5d' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">

          {/* Menú de navegación horizontal */}
          <div className="col-span-1">
            <nav className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 mb-12">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.hasSubmenu && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm uppercase tracking-wide py-3 px-2"
                    >
                      {item.label}
                    </Link>
                    {item.hasSubmenu && (
                      <span className="ml-2 text-blue-200">+</span>
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {item.hasSubmenu && openSubmenu === item.label && (
                    <div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white shadow-2xl rounded-xl border border-gray-100 py-4 z-50 animate-fadeIn"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {item.label === t_header('procedures') ? (
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
                                              onClick={() => setOpenSubmenu(null)}
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
                                          onClick={() => setOpenSubmenu(null)}
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
                                  href={subItem.href}
                                  className="group flex items-center space-x-3 px-4 py-4 rounded-lg text-gray-700 transition-all duration-200 transform hover:translate-x-2 hover:shadow-md"
                                  onClick={() => setOpenSubmenu(null)}
                                >
                                  <div className="flex-shrink-0">
                                    <div
                                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                                      style={{
                                        background: `linear-gradient(to bottom right, #1d3c5d30, #1d3c5d50)`
                                      }}
                                    >
                                      <svg className="w-4 h-4 group-hover:text-white" style={{ color: '#1d3c5d' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <span className="text-sm font-semibold block">{subItem.label}</span>
                                    <span className="text-xs text-gray-500" style={{ color: '#1d3c5d' }}>{t_header('explore_details')}</span>
                                  </div>
                                </Link>
                              ) : null
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Grid de 2 columnas para logo y contacto - MÁS ESPACIO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32">

            {/* Logo y firma del doctor */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center space-x-8">
                  <div>
                    <img
                      src="/images/logo-footer.png"
                      alt={t_ui('logo_alt')}
                      className="h-32 sm:h-40 lg:h-48 xl:h-56 w-auto"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />

                    <div className="hidden">
                      <svg width="140" height="80" viewBox="0 0 140 80" className="text-white">
                        <path
                          d="M10 50 Q15 30 25 45 Q30 60 40 40 Q45 25 55 50 Q60 65 70 45 Q75 30 85 55 Q90 70 100 50 Q105 35 115 60 Q120 75 130 55"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          className="opacity-90"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de contacto */}
            <div>
              <div className="space-y-6">
                <h3 className="text-lg font-bold mb-6 text-center lg:text-left">
                  {t_footer('contact_us_title')}
                </h3>

                <div className="flex space-x-4 justify-center lg:justify-start mb-8">
                  <a href="https://wa.me/573164953755" target='_blank' className="text-white hover:text-blue-200 transition-colors duration-300" title={t_footer('whatsapp_title')}>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/drandresperezcirujano" target='_blank' className="text-white hover:text-blue-200 transition-colors duration-300" title={t_footer('facebook_title')}>
                    <Facebook size={34} />
                  </a>
                  <a href="https://www.instagram.com/drandresperezcirujano/" target='_blank' className="text-white hover:text-blue-200 transition-colors duration-300" title={t_footer('instagram_title')}>
                    <Instagram size={34} />
                  </a>
                  <a href="mailto:info@drandrespereznieto.com" target='_blank' className="text-white hover:text-blue-200 transition-colors duration-300" title={t_footer('email_title')}>
                    <Mail size={34} />
                  </a>
                  <a href="https://www.youtube.com/@dr.andresperez" target='_blank' className="text-white hover:text-blue-200 transition-colors duration-300" title={t_footer('youtube_title')}>
                    <Youtube size={34} />
                  </a>
                  <a href="https://maps.app.goo.gl/XXpWdNdKfnBQ6Ysv6" target='_blank' className="text-white hover:text-blue-200 transition-colors duration-300" title={t_footer('location_title')}>
                    <MapPin size={34} />
                  </a>
                </div>

                <div className="space-y-2 text-center lg:text-left">
                  <div className="text-white font-medium">(+57) 601 629 9551</div>
                  <div className="text-white font-medium">(+57) 316 495 3755</div>
                  <div className="text-white font-medium">info@drandrespereznieto.com</div>
                  <div className="text-white font-medium">{t_footer('address')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/30 my-8"></div>

        <div className="text-center">
          <p className="text-white/90 text-sm">
            {t_footer('copyright')}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        
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
    </footer>
  );
};

export default Footer;