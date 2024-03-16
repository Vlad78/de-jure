import { NextRouter } from 'next/router';

import { i18n } from '../../next.config';


declare module "next/router" {
  export type Locale = "en" | "pl" | "ru";
  export function useRouter(): Omit<NextRouter, "locale" | "locales"> & {
    locale: Locale;
    locales: Locale[];
  };
}
