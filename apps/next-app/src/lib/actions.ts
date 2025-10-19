import 'server-only';

import { cookies } from 'next/headers';

export async function setCookie(cookieName: string, cookieValue: string) {
  'use server';

  const cookieStore = await cookies();
  cookieStore.set(cookieName, cookieValue, {
    // expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000), // 7 days
    maxAge: 60 * 60 * 24 * 7, // 7 days
    // domain: '',
    path: '/',
    // secure: false,
    httpOnly: true,
    sameSite: 'lax',
  });
}
