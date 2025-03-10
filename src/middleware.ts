import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Definir los idiomas soportados
const languages = ['es', 'en'] as const;
type Language = typeof languages[number];

// Rutas que no necesitan prefijo de idioma
const noLanguagePrefix = ['/onboarding', '/dashboard'];

// Mapeo de rutas entre idiomas
const routeMappings = {
  '/use-cases': '/casos-de-uso',
  '/casos-de-uso': '/use-cases',
  '/blog-en': '/blog-es',
  '/blog-es': '/blog-en',
  '/home': '/inicio',
  '/inicio': '/home'
};

// Función para obtener el idioma preferido del navegador
const getPreferredLang = (request: NextRequest): Language => {
  const acceptLanguage = request.headers.get('accept-language')
  
  if (acceptLanguage) {
    if (acceptLanguage.includes('es') || acceptLanguage.startsWith('es-')) {
      return 'es'
    }
  }
  return 'en'
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignorar archivos estáticos y API routes
  if (
    pathname.includes('.') || // archivos estáticos
    pathname.startsWith('/api/') || // API routes
    pathname.startsWith('/_next/') || // Next.js internals
    pathname.includes('/static/') // archivos estáticos
  ) {
    return NextResponse.next();
  }

  // Si es una ruta que no necesita prefijo de idioma, permitir directamente
  if (noLanguagePrefix.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Redirigir la raíz a /es/inicio
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/es/inicio', request.url));
  }

  // Manejar las redirecciones específicas del blog
  if (pathname === '/es/blog') {
    return NextResponse.redirect(new URL('/es/blog-es', request.url));
  }
  if (pathname === '/en/blog') {
    return NextResponse.redirect(new URL('/en/blog-en', request.url));
  }

  // Si la ruta ya tiene un idioma válido, permitir la navegación
  const hasValidLang = languages.some(lang => pathname.startsWith(`/${lang}`));
  if (hasValidLang) {
    return NextResponse.next();
  }

  // Agregar un catch-all para rutas no encontradas
  if (!hasValidLang && !pathname.startsWith('/api/')) {
    const preferredLang = getPreferredLang(request);
    return NextResponse.redirect(new URL(`/${preferredLang}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
