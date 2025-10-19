import Image from 'next/image';
import Content from './Content';
import styles from './page.module.css';

export default async function Home() {
  // const cookieStore = await cookies();
  // const sessionId = cookieStore.get('vsid')?.value;
  // console.log('sessionId :', sessionId);

  // @see https://nextjs.org/docs/app/api-reference/functions/cookies
  // set cookie는 반드시 server action 또는 router handler 내에서만 사용할 수 있다.
  /*
  cookieStore.set('my-cookie', 'hello', {
    // expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000), // 7 days
    maxAge: 60 * 60 * 24 * 7, // 7 days
    // domain: '',
    path: '/',
    // secure: false,
    httpOnly: true,
    sameSite: 'lax',
  });
  */

  // 서버 컴포넌트의 SSR 과정에서 아래와 같이 cookie 설정하는 것은 불가능하다.
  // setCookie('my-cookie', 'hello'); // 실패. Error: Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options

  return (
    <div className={styles.page}>
      <Content />

      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
