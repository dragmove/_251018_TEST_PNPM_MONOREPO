import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  console.log('===== set-cookie route.ts =====');

  // const url = new URL(req.url);
  // const nextPath = url.searchParams.get('next') || '/';
  // console.log('[route] nextPath :', nextPath);

  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sessionId')?.value;
  console.log('[route] sessionId :', sessionId);

  cookieStore.set('new-sessionId', 'hello', {
    // expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000), // 7 days
    maxAge: 60 * 60 * 24 * 7, // 7 days
    // domain: '',
    path: '/',
    // secure: false,
    httpOnly: true,
    sameSite: 'lax',
  });

  // test. create error response
  /*
  return NextResponse.json(
    { message: 'An internal server error occurred.' },
    { status: 500 }
  );
  */

  return NextResponse.json({ message: 'success' });
}
