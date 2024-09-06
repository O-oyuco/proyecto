'use client';
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-blackd">
      <div className="absolute top-4 left-4 z-10">
        <Link
          href="/home"
          className="flex items-center text-blue-600 hover:text-blue-700 font-bold"
        >
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
          Inicio
        </Link>
      </div>
      <ThemeToggle />
      <main className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl p-4 mx-auto">
        <div className="flex-1 p-4 mb-4 md:mb-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5">Countries</h1>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Breve Descripción</h2>
          <p className="text-base sm:text-lg">
            Página donde se lleva un registro de todos los países, su información relevante, tipos de moneda, límites fronterizos, escudo, bandera, mapa interactivo con un sistema de ordenado y filtrado, agregar actividad por países, etc.
          </p>
        </div>

        <div className="flex-1 p-4 flex flex-col justify-center items-center">
          <div className="w-full h-64 md:h-72 lg:h-80">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/watch?v=HrBjeFesg_w"
              title="FilmFlow"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://filmflow.chekogarcia.com.mx/"
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
