import React, { useState } from 'react'
import { IoMenu, IoClose, IoLogoReact } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='shadow-md w-full relative md:static z-[999] top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-mono text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 '>
            <IoLogoReact />
          </span>
          IKD
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            {open ? <IoClose /> : <IoMenu />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <Link to="/" className='text-gray-800 hover:text-gray-400 duration-500'>Home</Link>
            </li>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <Link to="/gallery" className='text-gray-800 hover:text-gray-400 duration-500'>Gallery</Link>
          </li>
          {/* <button className='bg-indigo-600 text-white font-mono py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>Login</button> */}
        </ul>
      </div>

    </div>
  )
}

export default Navbar