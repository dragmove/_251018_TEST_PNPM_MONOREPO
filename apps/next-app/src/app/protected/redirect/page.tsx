import { cookies } from 'next/headers';

export default async function ProtectedPage() {
  console.log('===== protected/redirect/page.tsx =====');

  const cookieStore = await cookies();
  const newSessionId = cookieStore.get('new-sessionId')?.value;

  return (
    <div>
      <h1>protected/redirect page</h1>
      <p>new-sessionId cookie value: {newSessionId || 'no new sessionId'}</p>
    </div>
  );
}
