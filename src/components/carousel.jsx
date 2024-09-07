// components/ImageCarousel.js
import { useState, useEffect } from 'react';

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const autoSlide = setInterval(goToNext, interval);
    return () => clearInterval(autoSlide);
  }, [currentIndex, interval]);

  return (
    <div className="relative w-full h-full max-w-xl mx-auto">
      <div className="relative w-full h-full overflow-hidden">
        {/* Ajuste de imagen para que se ajuste correctamente al contenedor */}
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-contain" // Esto asegura que la imagen se ajuste al contenedor manteniendo su proporción
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
          {images[currentIndex].description}
        </div>
      </div>

      {/* Botones de control */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={goToPrevious}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={goToNext}
      >
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
