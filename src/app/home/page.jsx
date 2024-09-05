'use client';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Marcos Pacheco Developers Full Stack</span>
        </h1>

        <div className={styles.content}>
          <div className={styles.description}>
            <p>
              Destaco por mis sólidos conocimientos JavaScript, CSS, HTML, React, Next.js, PostgreSQL, JavaScript e informáticos.
            </p>
          </div>

          <div className={styles.photo}>
            <img
              src="https://wow.zamimg.com/uploads/screenshots/small/937737.jpg"
              alt="Imagen de ejemplo"
            />
          </div>
        </div>
      <footer className={styles.footer}>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Mis proyectos
        </a>
      </footer>

        <div className={styles.grid}>
          <a href="/filmflow" className={styles.card}>
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

    </div>
  );
}
