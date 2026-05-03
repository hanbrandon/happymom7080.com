import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  const baseMessages = (await import(`../../messages/${locale}.json`)).default;
  
  // Try to load additional modular messages
  let modularMessages: any = {};
  const modules = [
    { name: 'about', ns: 'About' },
    { name: 'services', ns: 'ServicesDetail' },
    { name: 'pricing', ns: 'PricingDetail' },
    { name: 'testimonials', ns: 'TestimonialsPage' },
    { name: 'faq', ns: 'FAQ' },
    { name: 'guide', ns: 'Guide' },
    { name: 'contact', ns: 'Contact' }
  ];

  for (const mod of modules) {
    try {
      const data = (await import(`../../messages/${locale}/${mod.name}.json`)).default;
      modularMessages[mod.ns] = data;
    } catch (e) {
      // Module might not exist for this locale
    }
  }

  return {
    locale,
    messages: { ...baseMessages, ...modularMessages }
  };
});
