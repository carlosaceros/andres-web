"use client";

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

// SVG Flag Components
const SpainFlag = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
        <rect width="900" height="600" fill="#c60b1e" />
        <rect width="900" height="300" y="150" fill="#ffc400" />
    </svg>
);

const USAFlag = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 7410 3900" xmlns="http://www.w3.org/2000/svg">
        <rect width="7410" height="3900" fill="#b22234" />
        <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300" />
        <rect width="2964" height="2100" fill="#3c3b6e" />
        <g fill="#fff">
            <g id="s18">
                <g id="s9">
                    <g id="s5">
                        <g id="s4">
                            <path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z" />
                            <use xlinkHref="#s" y="420" />
                            <use xlinkHref="#s" y="840" />
                            <use xlinkHref="#s" y="1260" />
                        </g>
                        <use xlinkHref="#s" y="1680" />
                    </g>
                    <use xlinkHref="#s4" x="247" y="210" />
                </g>
                <use xlinkHref="#s9" x="494" />
            </g>
            <use xlinkHref="#s18" x="988" />
            <use xlinkHref="#s9" x="1976" />
            <use xlinkHref="#s5" x="2470" />
        </g>
    </svg>
);

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();

    // This function reconstructs the path for the other language
    function getLocalizedPath(targetLocale: string) {
        if (!pathname) return `/${targetLocale}`;

        const segments = pathname.split('/').filter(Boolean);

        // Check if the first path segment is the current locale
        if (segments[0] === locale) {
            // If it is, remove it
            segments.splice(0, 1);
        }

        // Join the segments back together
        const pathWithoutLocale = segments.join('/');

        // Always prepend the target locale (matching localePrefix: 'always' in middleware)
        if (pathWithoutLocale) {
            return `/${targetLocale}/${pathWithoutLocale}`;
        } else {
            return `/${targetLocale}`;
        }
    }

    const esHref = getLocalizedPath('es');
    const enHref = getLocalizedPath('en');

    return (
        <div className="flex items-center gap-2">
            <a
                href={esHref}
                className={`p-1 rounded transition-all duration-200 hover:scale-110 ${locale === 'es'
                    ? 'ring-2 ring-white ring-opacity-50 cursor-default'
                    : 'opacity-60 hover:opacity-100'
                    }`}
                title="Español"
            >
                <SpainFlag className="w-7 h-5 rounded" />
            </a>
            <a
                href={enHref}
                className={`p-1 rounded transition-all duration-200 hover:scale-110 ${locale === 'en'
                    ? 'ring-2 ring-white ring-opacity-50 cursor-default'
                    : 'opacity-60 hover:opacity-100'
                    }`}
                title="English"
            >
                <USAFlag className="w-7 h-5 rounded" />
            </a>
        </div>
    );
}
