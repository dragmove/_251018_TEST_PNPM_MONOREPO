import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  console.log('===== protected/route.ts =====');

  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sessionId')?.value;
  console.log('sessionId :', sessionId);

  // BE API 호출
  const apiResponse = await fetch(`http://localhost:3000/be-api/set-cookie`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookieStore.toString(),
    },
    next: { revalidate: 0 },
  });
  console.log('BE API response. apiResponse :', apiResponse);

  // BE API response의 Set-Cookie header 존재 확인
  const redirectResponse = NextResponse.redirect(new URL('/protected/redirect', req.url));
  const headersSetCookie = apiResponse.headers.get('Set-Cookie');
  console.log('headersSetCookie :', headersSetCookie);

  if (headersSetCookie) {
    console.log('BE API response의 Set-Cookie 헤더를 클라이언트로 전달하며 redirect');
    redirectResponse.headers.set('Set-Cookie', headersSetCookie || '');
  } else {
    console.log('BE API response의 Set-Cookie 헤더가 없음. 아무 처리 없이 redirect');
  }

  return redirectResponse;

  // return NextResponse.json({ message: 'protected route' });

  /*
  // error handling example
  if (!res.ok) {
    return NextResponse.redirect(new URL('/protected/redirect', req.url));
  }
  */

  //   return NextResponse.json({ message: 'no result' });
}
