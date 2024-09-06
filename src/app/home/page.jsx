'use client';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="py-20 flex flex-1 flex-col justify-center items-center">
        <h1 className="text-4xl mb-8">
          <span>Marcos Pacheco Developers Full Stack</span>
        </h1>

        <div className="flex justify-between items-center w-full max-w-5xl">
          <div className="flex-1 p-4 text-lg">
            <p>
              Destaco por mis sólidos conocimientos JavaScript, CSS, HTML, React, Next.js, PostgreSQL, JavaScript e informáticos.
            </p>
          </div>

          <div className="flex-1 p-4 flex justify-center">
            <img
              src="https://wow.zamimg.com/uploads/screenshots/small/937737.jpg"
              alt="Imagen de ejemplo"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <footer className="w-full h-24 border-t flex justify-center items-center">
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            Mis proyectos
          </a>
        </footer>

        <div className="flex items-center justify-center flex-wrap max-w-2xl mt-12">
          <a href="/filmflow" className="m-4 p-6 text-left text-inherit no-underline border border-gray-200 rounded-lg transition ease-in duration-150 hover:text-blue-600 hover:border-blue-600 max-w-xs">
            <h3 className="mb-4 text-xl">Documentación &rarr;</h3>
            <p className="m-0 text-lg">Encuentra información detallada sobre Next.js.</p>
          </a>

          <a href="/rick&morty" className="m-4 p-6 text-left text-inherit no-underline border border-gray-200 rounded-lg transition ease-in duration-150 hover:text-blue-600 hover:border-blue-600 max-w-xs">
            <h3 className="mb-4 text-xl">Blog &rarr;</h3>
            <p className="m-0 text-lg">Mantente al día con las últimas novedades.</p>
          </a>

          <a href="#" className="m-4 p-6 text-left text-inherit no-underline border border-gray-200 rounded-lg transition ease-in duration-150 hover:text-blue-600 hover:border-blue-600 max-w-xs">
            <h3 className="mb-4 text-xl">Ejemplos &rarr;</h3>
            <p className="m-0 text-lg">Descubre ejemplos interactivos y útiles.</p>
          </a>

          <a href="#" className="m-4 p-6 text-left text-inherit no-underline border border-gray-200 rounded-lg transition ease-in duration-150 hover:text-blue-600 hover:border-blue-600 max-w-xs">
            <h3 className="mb-4 text-xl">Acerca de &rarr;</h3>
            <p className="m-0 text-lg">Conoce más sobre el proyecto.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
