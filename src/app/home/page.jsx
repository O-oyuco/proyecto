'use client'
import Head from 'next/head';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Proyectos Marcos Pacheco</span>
        </h1>
        <p className={styles.description}>
          HOLAAAAAAAAAA{' '}
          <code className={styles.code}>Next.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/gerant" className={styles.card}>
            <h3>Documentación &rarr;</h3>
            <p>Encuentra información detallada sobre Next.js.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Mantente al día con las últimas novedades.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Ejemplos &rarr;</h3>
            <p>Descubre ejemplos interactivos y útiles.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Acerca de &rarr;</h3>
            <p>Conoce más sobre el proyecto.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Creado con Next.js
        </a>
      </footer>
    </div>
  );
}
