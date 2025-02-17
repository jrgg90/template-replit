import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lista de rutas públicas
const publicRoutes = ['/sandbox', '/blog', '/precios'];
// Lista de rutas protegidas que requieren autenticación
const protectedRoutes = ['/onboarding', '/main-dashboard'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const { pathname } = request.nextUrl;

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

// Actualizar el matcher para incluir todas las rutas relevantes
export const config = {
  matcher: [
    '/',
    '/onboarding/:path*',
    '/sandbox/:path*',
    '/main-dashboard/:path*',
  ],
}; 