import { defineMiddleware } from 'astro:middleware';
import { createServerClient } from './lib/supabase-server';

const ADMIN_EMAILS = ['garrett@groundworkdental.com'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Only protect /intake/* (except login) and /admin/*
  const isIntakeRoute = pathname.startsWith('/intake') && !pathname.startsWith('/intake/login');
  const isAdminRoute = pathname.startsWith('/admin');

  if (!isIntakeRoute && !isAdminRoute) {
    return next();
  }

  const accessToken = context.cookies.get('sb-access-token')?.value;
  const refreshToken = context.cookies.get('sb-refresh-token')?.value;

  if (!accessToken && !refreshToken) {
    return context.redirect('/intake/login');
  }

  const supabase = createServerClient(context.cookies);

  // Try to get user with access token
  let user = null;
  if (accessToken) {
    const { data, error } = await supabase.auth.getUser(accessToken);
    if (!error && data.user) {
      user = data.user;
    }
  }

  // If access token failed, try refresh
  if (!user && refreshToken) {
    const { data, error } = await supabase.auth.refreshSession({ refresh_token: refreshToken });
    if (error || !data.session) {
      // Clear stale cookies and redirect to login
      context.cookies.delete('sb-access-token', { path: '/' });
      context.cookies.delete('sb-refresh-token', { path: '/' });
      return context.redirect('/intake/login');
    }

    // Set new cookies
    context.cookies.set('sb-access-token', data.session.access_token, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60, // 1 hour
    });
    context.cookies.set('sb-refresh-token', data.session.refresh_token!, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    user = data.session.user;
  }

  if (!user) {
    return context.redirect('/intake/login');
  }

  // Admin route check
  if (isAdminRoute && !ADMIN_EMAILS.includes(user.email || '')) {
    return new Response('Forbidden', { status: 403 });
  }

  // Attach user to locals
  context.locals.user = user;

  return next();
});
