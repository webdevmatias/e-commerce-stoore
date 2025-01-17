import React from "react";
import slide1 from "../assets/Frontend_Assets/slide1.png";
import slide2 from "../assets/Frontend_Assets/slide2.png";
import slide3 from "../assets/Frontend_Assets/slide3.png";
import slide4 from "../assets/Frontend_Assets/slide4.png";
import image from "../assets/Frontend_Assets/product_17.png";
import ImageSlider from "./ImageSlider";

const WelcomeSection = () => {
  const slideImages = [slide1, slide2, slide3, slide4];

  return (
    <div className="flex flex-col justify-start items-center w-full h-auto bg-gradient-to-b from-white to-blue-200">
      <ImageSlider images={slideImages} />
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-20 py-8 md:py-16">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Exclusive <br /> Offers For You
          </h1>
          <p className="text-sm text-gray-600 mt-2 uppercase">
            Only on best sellers products
          </p>
          <button className="mt-6 bg-blue-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300">
            Confira Agora
          </button>
        </div>
        {/* Image Section */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0 md:w-1/2">
          <img
            src={image}
            className="w-full md:w-3/4 object-contain"
            alt="Exclusive Product"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
