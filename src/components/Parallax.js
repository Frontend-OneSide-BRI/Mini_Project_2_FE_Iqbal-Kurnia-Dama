import React from 'react'

const Parallax = () => {
  return (
    <>
        <div className='container flex items-center justify-center lg:h-screen h-[50vh] mb-12 bg-fixed bg-center bg-cover custom-img max-w-none w-auto'>
          <div className='p-5 text-center'>
            <h1 className='text-5xl font-medium text-white'>All Gallery</h1>
            <p className='pt-5 pb-4 text-white text-sm'>a collection of photos consisting of cats, people, cars, and nature </p>
            <button className='bg-transparent text-white hover:border-transparent hover:bg-indigo-500 rounded-xl py-2 px-10'>View More </button>
          </div>
        </div>
      </>
  )
}

export default Parallax