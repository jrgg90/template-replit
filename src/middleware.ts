import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Definir los idiomas soportados
const languages = ['es', 'en'] as const;
type Language = typeof languages[number];

// Rutas protegidas que requieren autenticación
const protectedRoutes = ['/onboarding', '/dashboard'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Verificar si es una ruta protegida
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    // Aquí iría la lógica de autenticación
    // Por ahora solo redirigimos a login
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

  // Si la ruta ya tiene un idioma válido, permitir la navegación
  if (languages.some(lang => pathname.startsWith(`/${lang}`))) {
    return NextResponse.next();
  }

  // Si la ruta no tiene idioma, agregar /es al inicio
  return NextResponse.redirect(new URL(`/es${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
