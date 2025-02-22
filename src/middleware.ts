import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { languages } from './app/i18n/settings';

// Rutas protegidas que requieren autenticación
const protectedRoutes = ['/onboarding', '/dashboard'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token');

  // Ignorar archivos estáticos y API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Manejar rutas protegidas
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  // Si la ruta ya tiene un idioma válido, permitir la navegación (NO REDIRIGIR)
  if (languages.some(lang => pathname.startsWith(`/${lang}`))) {
    return NextResponse.next();
  }

  // Si la ruta es '/', redirigir a /es/inicio por defecto
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/es/inicio', request.url));
  }

  // Si la ruta no tiene idioma, agregar /es al inicio
  return NextResponse.redirect(new URL(`/es${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
