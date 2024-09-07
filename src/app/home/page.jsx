'use client';
import ThemeToggle from "@/components/themeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <ThemeToggle />
      <main className="py-10 flex flex-1 flex-col justify-center items-center w-full px-4">
        <h1 className="text-2xl sm:text-4xl mb-8 text-center">
          <span>Marcos Pacheco - Developer Full Stack</span>
        </h1>

        {/* Sección de presentación con imagen */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl">
          {/* Imagen arriba del texto en pantallas pequeñas y a la derecha en pantallas grandes */}
          <div className="flex-1 p-4 flex justify-center mb-8 md:mb-0 order-1 md:order-2">
            <img
              src="https://wow.zamimg.com/uploads/screenshots/small/937737.jpg"
              alt="Imagen de ejemplo"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Texto debajo de la imagen en pantallas pequeñas y a la izquierda en pantallas grandes */}
          <div className="flex-1 p-4 flex justify-center mb-8 md:mb-0 order-2 md:order-1">
            <p>
              Destaco por mis sólidos conocimientos en JavaScript, CSS, HTML, React, Next.js, PostgreSQL, JavaScript e informáticos.
            </p>
          </div>
        </div>

        <footer className="w-full h-24 border-t flex justify-center items-center mt-8">
          <div className="w-full max-w-4xl text-center">
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
              Mis proyectos
            </a>
          </div>
        </footer>

        {/* Enlaces a proyectos */}
        <div className="flex items-center justify-center flex-wrap max-w-2xl mt-12">
          <Link href="/filmflow" className="m-4 p-6 text-left no-underline border border-gray-200 rounded-lg transition hover:text-blue-600 hover:border-blue-600 w-full sm:max-w-xs">
            <h3 className="mb-4 text-lg sm:text-xl">FilmFlow →</h3>
            <p className="m-0 text-sm sm:text-lg">Combinar lo mejor del cine con la última tecnología.</p>
          </Link>

          <Link href="/rick&morty" className="m-4 p-6 text-left no-underline border border-gray-200 rounded-lg transition hover:text-blue-600 hover:border-blue-600 w-full sm:max-w-xs">
            <h3 className="mb-4 text-lg sm:text-xl">Rick & Morty →</h3>
            <p className="m-0 text-sm sm:text-lg">Página inspirada en la serie animada Rick and Morty.</p>
          </Link>

          <Link href="countries" className="m-4 p-6 text-left no-underline border border-gray-200 rounded-lg transition hover:text-blue-600 hover:border-blue-600 w-full sm:max-w-xs">
            <h3 className="mb-4 text-lg sm:text-xl">Countries →</h3>
            <p className="m-0 text-sm sm:text-lg">Pagina donde están registrados todos los países y su informacion relevante.</p>
          </Link>

          <Link href="#" className="m-4 p-6 text-left no-underline border border-gray-200 rounded-lg transition hover:text-blue-600 hover:border-blue-600 w-full sm:max-w-xs">
            <h3 className="mb-4 text-lg sm:text-xl">Acerca de →</h3>
            <p className="m-0 text-sm sm:text-lg">Conoce más sobre el proyecto.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
