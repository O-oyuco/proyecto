'use client';
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      {/* Botón con flecha en la parte superior izquierda */}
      <div className="absolute top-4 left-4">
      <Link
          href="/home"
          className="flex items-center text-blue-600 hover:text-blue-700 font-bold"
        >
          {/* Icono de flecha izquierda */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver
        </Link>
      </div>

      <main className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl p-4">
        {/* Descripción en el lado izquierdo */}
        <div className="flex-1 p-4">
          <h1 className="text-4xl font-bold mb-4">Breve Descripción</h1>
          <p className="text-lg mb-4">
            Este es un proyecto en el que se utilizan tecnologías modernas como Tailwind CSS y Next.js. En esta página puedes ver un video de YouTube a la derecha y una descripción a la izquierda. El diseño es completamente responsive.
          </p>
        </div>

        {/* Video de YouTube en el lado derecho */}
        <div className="flex-1 p-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Cambia el enlace por el video de YouTube que quieras
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* URL debajo del video */}
          <div className="mt-4 text-center">
            <a
              href="https://www.ejemplo.com"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visita la página oficial
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
