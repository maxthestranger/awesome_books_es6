import Head from 'next/head';
import Footer from '../components/footer/footer';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}

      <main className={styles.main}>main</main>

      {/* footer */}
      <Footer />
    </div>
  );
}
