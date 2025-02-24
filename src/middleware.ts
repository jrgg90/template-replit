import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Definir los idiomas soportados
const languages = ['es', 'en'] as const;
type Language = typeof languages[number];

// Rutas protegidas que requieren autenticación
const protectedRoutes = ['/onboarding', '/dashboard'];

// Función para obtener el idioma preferido del navegador
const getPreferredLang = (request: NextRequest): Language => {
  const acceptLanguage = request.headers.get('accept-language')
  
  if (acceptLanguage) {
    // Si el header contiene 'es' o empieza con 'es-', usar español
    if (acceptLanguage.includes('es') || acceptLanguage.startsWith('es-')) {
      return 'es'
    }
  }
  // Para cualquier otro caso, usar inglés
  return 'en'
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Verificar si es una ruta protegida
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Ignorar archivos estáticos y API routes
  if (
    pathname.includes('.') || // archivos estáticos
    pathname.startsWith('/api/') || // API routes
    pathname.startsWith('/_next/') || // Next.js internals
    pathname.includes('/static/') // archivos estáticos
  ) {
    return NextResponse.next();
  }

  // Redirigir la raíz a /es/inicio
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/es/inicio', request.url));
  }

  // Manejar la redirección específica del blog
  if (pathname === '/es/blog') {
    return NextResponse.redirect(new URL('/es/blog-es', request.url));
  }

  // Si la ruta ya tiene un idioma válido, permitir la navegación
  if (languages.some(lang => pathname.startsWith(`/${lang}`))) {
    return NextResponse.next();
  }

  // Si la ruta no tiene idioma, agregar el idioma preferido
  const preferredLang = getPreferredLang(request);
  return NextResponse.redirect(new URL(`/${preferredLang}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
