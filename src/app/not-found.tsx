import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function NotFound() {
  // Redirect unknown paths to the default locale's home page
  redirect(`/${routing.defaultLocale}`);
}
