'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl';

const SimpleContactButton = () => {
  const t = useTranslations('header_nav');
  const t_footer = useTranslations('footer');
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  // Hide tooltip after 5 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('whatsapp_message'))
    window.open(`https://wa.me/573164953755?text=${message}`, '_blank')
    setIsOpen(false)
  }

  const handleCall = () => {
    window.open('tel:+573164953755', '_self')
    setIsOpen(false)
  }

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
    setShowTooltip(false)
  }

  return (
    <>
      <style jsx>{`
        .contact-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }

        .main-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: white;
          border: 3px solid #1d3c5d;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          animation: gentle-bounce 3s ease-in-out infinite;
          position: relative;
        }

        .main-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(29, 60, 93, 0.4);
        }

        .doctor-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          background: #1d3c5d;
        }

        .fallback-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1d3c5d 0%, #326dccff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 18px;
        }

        .options {
          position: absolute;
          bottom: 70px;
          right: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          opacity: ${isOpen ? '1' : '0'};
          visibility: ${isOpen ? 'visible' : 'hidden'};
          transform: translateY(${isOpen ? '0' : '20px'});
          transition: all 0.3s ease;
        }

        .option-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.2);
          transition: all 0.2s ease;
        }

        .option-button:hover {
          transform: scale(1.1);
        }

        .whatsapp-btn {
          background: #25D366;
        }

        .phone-btn {
          background: #007bff;
        }

        /* Tooltip Styles - Mobile First */
        .tooltip {
          position: absolute;
          right: 75px;
          bottom: 10px;
          background: linear-gradient(135deg, #1d3c5d 0%, #2a5a8a 100%);
          color: white;
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          opacity: ${showTooltip ? '1' : '0'};
          visibility: ${showTooltip ? 'visible' : 'hidden'};
          transform: translateX(${showTooltip ? '0' : '10px'});
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          pointer-events: none;
          z-index: 999;
        }

        .tooltip::before {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid #1d3c5d;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }

        .tooltip-icon {
          display: inline-block;
          margin-left: 6px;
          font-size: 16px;
          animation: wave 1.5s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }

        /* Desktop hover tooltip */
        @media (min-width: 1024px) {
          .main-button:hover .tooltip-desktop {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
          }

          .tooltip-desktop {
            opacity: 0;
            visibility: hidden;
            transform: translateX(10px);
          }
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          .contact-button {
            bottom: 16px;
            right: 16px;
          }

          .tooltip {
            font-size: 12px;
            padding: 8px 12px;
            max-width: 160px;
            white-space: normal;
            line-height: 1.3;
          }
        }

        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .pulse-ring {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border: 2px solid #1d3c5d;
          border-radius: 50%;
          animation: pulse-ring 2s ease-out infinite;
          opacity: 0;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
      `}</style>

      <div className="contact-button">
        {/* Opciones */}
        <div className="options">
          <button
            className="option-button whatsapp-btn"
            onClick={handleWhatsApp}
            title={t_footer('whatsapp_title')}
          >
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </button>
          <button
            className="option-button phone-btn"
            onClick={handleCall}
            title={t_footer('call_title')}
          >
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </button>
        </div>

        {/* Botón principal */}
        <div
          className="main-button"
          onClick={handleButtonClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => !isOpen && setShowTooltip(false)}
        >
          <div className="pulse-ring"></div>

          {/* Tooltip - visible on mobile, hover on desktop */}
          <div className={`tooltip ${!isOpen ? 'tooltip-desktop' : ''}`}>
            <span className="hidden sm:inline">{t_footer('floating_button_tooltip')}</span>
            <span className="sm:hidden">{t_footer('floating_button_tooltip_short')}</span>
            <span className="tooltip-icon">💬</span>
          </div>

          {/* COLOCA TU IMAGEN PNG AQUÍ */}
          <img
            src="/images/rostros.png"
            alt="Dr. Andrés Pérez"
            className="doctor-image"
            onError={(e) => {
              // Si falla la imagen, muestra el ícono Dr
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling.style.display = 'flex'
            }}
          />

          {/* Backup si la imagen no carga */}
          <div className="fallback-icon" style={{ display: 'none' }}>
            Dr
          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleContactButton
