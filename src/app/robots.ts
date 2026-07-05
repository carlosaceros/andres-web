import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

const BASE_URL = 'https://www.drandrespereznieto.com'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    }
}
