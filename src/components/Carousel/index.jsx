import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

// Mock data for the carousel. Will create folder that has separate "slides" variables based on page.
const slides = [
  { url: "https://picsum.photos/id/237/200/300" },
  {
    url: "https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw",
  },
  {
    url: "https://fastly.picsum.photos/id/239/200/300.jpg?hmac=jBV5mUiY1RXDAmu4rQXOdWeutyztlxqFSOVpnJ-QUb8",
  },
  { url: "https://picsum.photos/id/240/200/300" },
  { url: "https://picsum.photos/id/241/200/300" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Checks the current index in the array, and if it is not the first slide, it moves back one place in the array (previous slide).
  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Checks the current index in the array, and if it is not the last slide, it moves forward one place in the array (next slide).
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    // Image Size Container
    <div className="relative mx-auto group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="bg-center bg-cover duration-500 h-80 md:h-96  lg:h-[500px] xl:h-[600px] w-full rounded-xl"
      ></div>
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-5  cursor-pointer">
        <BsChevronCompactLeft
          onClick={previousSlide}
          size={30}
          className="text-white bg-black/30 hover:bg-black/50 rounded-full"
        />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-5 cursor-pointer">
        <BsChevronCompactRight
          onClick={nextSlide}
          size={30}
          className="text-white bg-black/30 hover:bg-black/50 rounded-full"
        />
      </div>
      {/* Carousel Dots */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slideIndex}
            aria-label={`Go to slide ${slideIndex + 1}`}
            className={`h-1 w-1 rounded-full ${
              currentIndex === slideIndex ? "bg-white" : "bg-gray-400"
            } focus:outline-none`}
            onClick={() => setCurrentIndex(slideIndex)}
          ></button>
        ))}
      </div>
    </div>
  );
}
