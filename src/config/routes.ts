export type Language = 'es' | 'en';

export const routes = {
  home: {
    es: '/inicio',
    en: '/home'
  },
  es: {
    home: '/es',
    useCases: '/es/casos-de-uso',
    pricing: '/es/precios',
    blog: '/es/blog-es'
  },
  en: {
    home: '/en/home',
    useCases: '/en/use-cases',
    pricing: '/en/pricing',
    blog: '/en/blog-en'
  }
} as const;

export type Routes = typeof routes;

export const getHomeRoute = (lang: Language) => {
  return lang === 'en' ? routes.en.home : routes.es.home
}

export const getUseCasesRoute = (lang: Language) => {
  return lang === 'en' ? routes.en.useCases : routes.es.useCases
}

type PathMap = {
  [key: string]: string;
}

export const getLocalizedPath = (path: string, lang: Language = 'es') => {
  const routeMap: PathMap = {
    '/casos-de-uso': routes[lang].useCases,
    '/use-cases': routes[lang].useCases,
    '/precios': routes[lang].pricing,
    '/pricing': routes[lang].pricing,
    '/blog': routes[lang].blog,
    '/': routes[lang].home
  };

  return routeMap[path] || `/${lang}${path}`;
}; 