import { useState } from "react";
type Slides = {
  url: string;
  title: string;
};

export function Carousel({ slides }: { slides: Slides[] }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  function goToPrevious() {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function goToNext() {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function goToIndex(slideIndex: number) {
    setCurrentIndex(slideIndex);
  }
  return (
    <div className="relative w-full h-full">
      <div
        onClick={goToPrevious}
        className="absolute top-[50%] left-3 -translate-y-[50%] text-4xl font-bold z-[1] text-gray-400 opacity-80 hover:opacity-100 hover:scale-105 hover:text-white transition-all duration-75 ease-in cursor-pointer"
      >
        ←
      </div>
      <div
        onClick={goToNext}
        className="absolute top-[50%] right-3 -translate-y-[50%] text-4xl font-bold z-[1] text-gray-400 opacity-80 hover:opacity-100 hover:scale-105 hover:text-white transition-all duration-75 ease-in cursor-pointer"
      >
        →
      </div>

      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className="w-full h-full bg-cover rounded-lg"
      ></div>
      <div className="flex justify-center overflow-hiden">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToIndex(slideIndex)}
            className="mx-1 text-4xl text-gray-500 transition-all duration-75 ease-out cursor-pointer cursio hover:text-black hover:scale-150 "
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
}
