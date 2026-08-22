import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog-posts'

export const dynamic = 'force-static';

const BASE_URL = 'https://www.drandrespereznieto.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/conoce-doctor',
        '/dr-face',
        '/instalaciones',
        '/paso-a-paso',
        '/paciente-extranjero',
        '/testimonios',
        '/contacto',
        '/blog',
        '/videos',
        '/recursos/guias',
        // Procedures - Facial
        '/procedimientos/lifting-facial-hamaca',
        '/procedimientos/lifting-en-hamaca-de-mejilla-y-cuello',
        '/procedimientos/elevacion-cola-cejas',
        '/procedimientos/blefaroplastia',
        '/procedimientos/rinoplastia',
        '/procedimientos/otoplastia',
        '/procedimientos/mentoplastia',
        '/procedimientos/lipofilling-celulas-madre',
        '/procedimientos/lip-lift',
        '/procedimientos/bichectomia',
        '/procedimientos/acido-hialuronico',
        '/procedimientos/botox',
        // Procedures - Body
        '/procedimientos/mamoplastia-aumento',
        '/procedimientos/mamoplastia-reduccion',
        '/procedimientos/pexia',
        '/procedimientos/explantacion-mamaria',
        '/procedimientos/liposuccion',
        '/procedimientos/abdominoplastia',
        // Galleries
        '/galeria',
        '/galeria/procedimientos-faciales',
        '/galeria/procedimientos-corporales'
    ]

    const sitemapEntries: MetadataRoute.Sitemap = []

    routes.forEach((route) => {
        const isHome = route === ''
        const isProcedure = route.startsWith('/procedimientos/')
        const urlSuffix = isHome ? '/' : `${route}/`

        // Spanish (primary locale)
        sitemapEntries.push({
            url: `${BASE_URL}/es${urlSuffix}`,
            lastModified: new Date(),
            changeFrequency: isProcedure ? 'monthly' : 'weekly',
            priority: isHome ? 1 : isProcedure ? 0.9 : 0.7,
            alternates: {
                languages: {
                    es: `${BASE_URL}/es${urlSuffix}`,
                    en: `${BASE_URL}/en${urlSuffix}`,
                }
            }
        })

        // English
        sitemapEntries.push({
            url: `${BASE_URL}/en${urlSuffix}`,
            lastModified: new Date(),
            changeFrequency: isProcedure ? 'monthly' : 'weekly',
            priority: isHome ? 0.9 : isProcedure ? 0.8 : 0.6,
            alternates: {
                languages: {
                    es: `${BASE_URL}/es${urlSuffix}`,
                    en: `${BASE_URL}/en${urlSuffix}`,
                }
            }
        })
    })

    blogPosts.forEach((post) => {
        const fullUrl = `${BASE_URL}/${post.locale}/blog/${post.slug}/`
        sitemapEntries.push({
            url: fullUrl,
            lastModified: new Date(post.date),
            changeFrequency: 'weekly',
            priority: 0.8,
            alternates: {
                languages: {
                    [post.locale]: fullUrl,
                }
            }
        })
    })

    return sitemapEntries
}
