import Image from 'next/image';
import styles from './page.module.css';
import * as hello from '@/app/api/hello/route';
import HelloMessage from '@/components/hello_message';

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Next.js</h1>
      <HelloMessage/>
    </main>
  );
}
