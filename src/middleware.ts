import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lista de rutas públicas (accesibles para todos los usuarios)
const publicRoutes = ['/blog', '/precios'];

// Lista de rutas protegidas que requieren autenticación
const protectedRoutes = ['/onboarding', '/main-dashboard'];

// Rutas de desarrollo (solo accesibles en desarrollo)
const devRoutes = ['/sandbox'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const { pathname } = request.nextUrl;

  // Bloquear acceso a rutas de desarrollo en producción
  if (devRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Verificar si es una ruta pública
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Verificar si es una ruta protegida
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Redirigir a onboarding si está autenticado en la landing
  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/onboarding', request.url));
  }

  return NextResponse.next();
}

// Agregar configuración explícita de rutas
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. /examples (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)',
  ],
} 