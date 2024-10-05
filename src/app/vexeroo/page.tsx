import React from 'react';
import Head from 'next/head';
import styles from './ComingSoon.module.css';

const ComingSoon: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Our website is coming soon. Stay tuned!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Vexeroo is coming soon!</h1>
        <p className={styles.description}>Our website is under construction. Stay tuned for something amazing!</p>
      </main>
    </div>
  );
};

export default ComingSoon;