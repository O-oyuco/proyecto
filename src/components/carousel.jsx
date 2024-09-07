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
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
          {images[currentIndex].description}
        </div>
      </div>

      {/* Botón izquierdo con anchura reducida */}
      <button
        className="absolute top-0 left-0 w-1/12 h-full bg-black bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center"
        onClick={goToPrevious}
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg>
      </button>

      {/* Botón derecho con anchura reducida */}
      <button
        className="absolute top-0 right-0 w-1/12 h-full bg-black bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center"
        onClick={goToNext}
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
