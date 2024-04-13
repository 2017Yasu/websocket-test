import Image from 'next/image';
import styles from './page.module.css';
import * as hello from '@/app/api/hello/route';
import HelloMessage from '@/components/hello_message';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Next.js</h1>
      <div>
        <ul>
          <li>
            <Link href={'/ws_test'} replace>WebSocket test page</Link>
          </li>
        </ul>
      </div>
      <HelloMessage/>
    </main>
  );
}
