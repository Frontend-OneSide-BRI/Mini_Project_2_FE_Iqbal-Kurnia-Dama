import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoIosClose } from "react-icons/io";
import { images } from "./data/gallery";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState(null);

  // fungsi filter
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const filteredImages = filter === "all" ? images : images.filter((image) => image.type === filter);

  // fungsi search
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const searchedImages = searchQuery
    ? filteredImages.filter((image) => image.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : filteredImages;

  // view image
  const viewImage = (image, index) => {
    setView({ image: image, index: index });
  };
  const imageAction = (action) => {
    const currentIndex = view.index;
    const lastIndex = searchedImages.length - 1;

    if (action === "next-img") {
      const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
      setView({ image: searchedImages[nextIndex], index: nextIndex });
    } else if (action === "prev-img") {
      const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
      setView({ image: searchedImages[prevIndex], index: prevIndex });
    } else {
      setView(null);
    }
  };

  return (
    <div>
      {/* view image */}
      {view && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-30'>
          <button className='absolute top-0 md:right-3 right-[-0.25rem] bottom-[38rem] md:bottom-0' onClick={() => imageAction()}>
            <IoIosClose size={50} />
          </button>
          <button onClick={() => imageAction("prev-img")} className='lg:pr-10 md:pr-3'>
            <IoIosArrowDropleftCircle size={50} />
          </button>
          <img
            src={view.image.url}
            alt={view.image.alt}
            className='w-auto md:max-h-[90%] md:max-w-[90%] max-h-[60%] max-w-[60%]'
          />
          <button onClick={() => imageAction("next-img")} className='lg:pl-10 md:pl-3'>
            <IoIosArrowDroprightCircle size={50} />
          </button>
        </div>
      )}
      <div className='container'>
        {/* search */}
        <div className='md:max-w-md mx-auto max-w-xs '>
          <div className=' flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white border border-gray-300 overflow-hidden'>
            <div className='grid place-items-center h-full w-12 text-gray-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
            <input
              className='peer h-full w-full outline-none text-sm text-gray-700 pr-2'
              type='text'
              id='search'
              placeholder='Search images..'
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </div>
        </div>
        {/* filter */}
        <div className='w-48 max-w-md mx-auto mt-3'>
          <label htmlFor='select' className='block text-sm font-medium text-gray-500 text-center '>
            Orientation
          </label>
          <select
            id='select'
            className='mt-1 block w-full px-3 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            value={filter}
            onChange={handleFilterChange}>
            <option value='all'>All</option>
            <option value='landscape'>landscape</option>
            <option value='portrait'>portrait</option>
          </select>
          {/* {filter && (
              <p className="mt-2 text-sm text-gray-500">You have selected: {filter}</p>
            )} */}
        </div>
        {/* images */}
        <div>
          <div className='p-10'>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter='15px'>
                {searchedImages.map((image, index) => (
                  <picture className='block overflow-hidden'>
                    <img
                      key={index}
                      src={image.url}
                      alt={image.alt}
                      className='lg:hover:scale-150 lg:transition-all w-full block cursor-pointer'
                      onClick={() => viewImage(image, index)}
                    />
                  </picture>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
