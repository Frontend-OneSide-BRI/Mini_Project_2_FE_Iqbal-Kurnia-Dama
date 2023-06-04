import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { slider } from "./data/slider"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // fungsi untuk slide berpindah secara otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Ganti 3000 dengan jumlah milidetik yang diinginkan antara setiap perpindahan slide
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className='max-w-[1400px] lg:h-[550px] xl:max-w-[1750px] h-[350px] md:none w-full m-auto py-0 group'>
      {/* image */}
      <div
        style={{ backgroundImage: `url(${slider[currentIndex].url})` }}
        className='w-full flex h-full rounded-none bg-center bg-cover transition-all ease-in-out duration-1000'></div>

      {/* left arrow*/}
      <div className='hidden group-hover:block absolute lg:top-[50%] md:top-[20%] top-[25%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* right arrow */}
      <div className='hidden group-hover:block absolute lg:top-[50%] md:top-[20%] top-[25%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Carousel;
