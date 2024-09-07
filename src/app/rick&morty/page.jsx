'use client';
import Link from "next/link";
import ThemeToggle from "@/components/themeToggle";
import ImageCarousel from "@/components/carousel";
import { RickandMorty } from "@/components/imagenDate";

export default function Rickandmorty() {
  return (
    <div className="min-h-screen flex flex-col justify-start md:justify-center items-center bg-blackd">
      <div className="absolute top-4 left-4">
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
      <main className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl p-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 p-4 order-1">
          <h1 className="text-4xl font-bold mb-7 text-center">Rick & Morty</h1>
          <h2 className="text-2xl font-bold mb-4">Breve Descripción</h2>
          <p className="text-lg mb-4">
            Se trata de una pagina inspirada en la serie animada Rick and Morty, esta diseñada para mostrar los personajes y las ubicaciones de dicha serie, tiene un sistema de inicio de sesión, búsqueda, favoritos, etc.
          </p>
        </div>
        <div className="flex-1 p-4 order-3 md:order-2">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[300px]">
            <ImageCarousel images={RickandMorty} />
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
