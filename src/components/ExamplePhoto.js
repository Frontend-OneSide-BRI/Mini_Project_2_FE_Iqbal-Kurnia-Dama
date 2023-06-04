import React from "react";
import { Link } from "react-router-dom";

const ExamplePhoto = () => {
  return (
    <div>
      <div className='flex md:flex-row flex-col items-center justify-center lg:px-32 px-12 gap-x-4 md:gap-y-0 gap-y-3'>
        <div className='flex flex-col'>
          <h1 className='font-heading font-bold text-3xl'>
            Collection of photo <br /> galleries
          </h1>
          <p className='font-sans text-[#777777] md:text-xl text-lg py-4'>
            There are four kinds of photos, namely cats, nature, and people
          </p>
          <img
            src='https://plus.unsplash.com/premium_photo-1677373563344-dd6a991e4870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
            alt='nature'
            className="w-screen"
          />
        </div>
        <div className=' lg:h-[531px] md:h-[500px] md:w-screen'>
          <img
            src='https://images.unsplash.com/photo-1682018667453-b8d127e055b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
            alt='people'
            className='h-full bg-contain'
          />
        </div>
        <div className='flex flex-col md:gap-y-6 gap-y-3 md:w-screen'>
            <img
              src='https://images.unsplash.com/photo-1596854372407-baba7fef6e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
              alt='cat'
            />
            <img
              src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
              alt='cat'
            />
        </div>
      </div>
      <div className='mb-32 flex items-center justify-center mt-5'>
        <Link to='/gallery'>
          <button className='bg-transparent text-indigo-500 border hover:border-transparent hover:bg-indigo-500 hover:text-white rounded-xl py-2 px-4 '>
            View More
          </button>
        </Link>
      </div>
      {/* suggestion */}
      <div className='mb-20 bg-[#f6e47d] text-center md:py-28 py-20'>
        <h1 className='text-black font-heading md:text-4xl text-3xl font-semibold'>
          Send us <span className='text-indigo-500'>Suggestions</span>
        </h1>
        <p className='text-gray-700 font-sans font-normal text-md my-3 md:px-0 px-5'>
          contact us for photos or make suggestions. We are ready to serve you
        </p>
        <div className='flex items-center justify-center md:mt-16 mt-10'>
          <input
            type='text'
            className='border bg-white lg:w-1/4 md:w-1/2 py-2 px-3 rounded-l-md  focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
            placeholder='text..'
          />
          <div className=' bg-indigo-500 py-[9px] px-9 rounded-r-md text-white'>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePhoto;
