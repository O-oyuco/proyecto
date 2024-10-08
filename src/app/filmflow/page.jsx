'use client';
import Link from "next/link";
import ThemeToggle from "@/components/themeToggle";
import ImageCarousel from "@/components/carousel";
import { FilmFlow } from "@/components/imagenDate";


export default function Filmflow() {
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
          <h1 className="text-4xl font-bold mb-7 text-center">FilmFlow</h1>
          <h2 className="text-2xl font-bold mb-4">Breve Descripción</h2>
          <p className="text-lg mb-4">
          Aplicación FilmFlow, una app encargada de combinando lo mejor del cine con la última tecnología. Así dando la oportunidad a cineastas independiente de subir su contenido, yo me encargue del apartado de sus formulario, detalle de las películas, alertas, preview, estilos, manejo de los archivos Cloudinary y otros apartados menores

          </p>
        </div>
        <div className="flex-1 p-4 order-3 md:order-2">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[300px]">
            <ImageCarousel images={FilmFlow} />
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
