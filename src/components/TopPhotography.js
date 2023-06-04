import React from "react";
import { biodata } from './data/biodata';

const TopPhotography = () => {
  return (
    <div className='bg-[#f6e47d] mb-24'>
      <h1 className='font-heading md:text-4xl text-3xl font-bold text-center py-10'>
        Popular <span className="text-indigo-500">photographer</span>
        </h1>
      <div class='flex min-h-0 items-center justify-center pb-14 px-20'>
        <div class='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
          {biodata.map((data, index) => {
            return (
              <div key={index} class='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg'>
                <div class='h-96 w-72'>
                  <img
                    class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                    src={data.image}
                    alt={data.name}
                  />
                </div>
                <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                <div class='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                  <h1 class='font-dmserif text-2xl font-bold text-white'>{data.name}</h1>
                  <p class='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    {data.biografi}
                  </p>
                  {/* <button class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>
                    See More
                  </button> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default TopPhotography;
