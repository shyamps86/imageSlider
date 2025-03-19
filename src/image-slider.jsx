import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Men's Casual Slim Fit",
    price: "$15.99"
  },
  {
    url: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    title: "Men's Cotton Jacket",
    price: "$39.99"
  },
  {
    url: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    title: "Men's Casual Premium Slim Fit",
    price: "$22.30"
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative flex items-center bg-white shadow-lg rounded-lg overflow-hidden w-3/4 max-w-4xl p-6">
        <img
          src={images[currentIndex].url}
          alt="slider"
          className="w-1/2 h-100 object-fit rounded-lg"
        />
        <div className="w-1/2 pl-6 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800">{images[currentIndex].title}</h1>
          <p className="text-xl text-gray-600 mt-2">price:{images[currentIndex].price}</p>
        </div>
      </div>
      <div className="flex justify-between w-3/4 max-w-4xl mt-4">
        <button
          onClick={prevSlide}
          className="bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
