// componentes/ImageSlider.jsx
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir à imagem anterior
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Função para ir à próxima imagem
  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-play com setInterval
  useEffect(() => {
    const interval = setInterval(goToNext, 2000); // Muda a imagem a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [currentIndex]);

  return (
    <div className="flex items-center justify-center w-full">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-48 object-cover"
      />

      {/* Botão para imagem anterior */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 p-2 mx-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Botão para próxima imagem */}
      <button
        onClick={goToNext}
        className="absolute right-0 p-2 mx-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageSlider;