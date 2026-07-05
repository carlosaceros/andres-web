import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

const locales = routing.locales;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  const activeLocale = locale as string;

  return {
    locale: activeLocale,
    messages: (await import(`./messages/${activeLocale}.json`)).default
  };
});
