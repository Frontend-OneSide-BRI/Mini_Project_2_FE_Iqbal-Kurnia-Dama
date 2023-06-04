import React from "react";
import photography from "../assets/images/photography.svg";

const About = () => {
  return (
    <div className='mb-20 mt-20'>
      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='font-heading md:text-4xl text-2xl font-bold'>
          Popular <span className="text-indigo-500">photography</span> method
        </h1>
      </div>
      <div className='flex md:flex-row flex-col items-center md:px-20 px-10 py-10'>
        <div className='md:w-1/2 w-full'>
          <img src={photography} alt='about' />
        </div>
        <div className='flex flex-col gap-y-4 md:w-1/2 w-full md:ml-28 md:mt-0 mt-5'>
          <h2 className='font-sans text-indigo-600 font-medium text-xl'>Portrait & landscape</h2>
          <p>
          Portrait and landscape are the orientation or shape of a page. <br />
          Portrait is the term used to refer to a page in a vertical position. while landscape is a term for pages that are oriented horizontally, or widen to the side.
          </p>
          {/* <button className='btn-primary max-w-[150px]'>Destination</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
