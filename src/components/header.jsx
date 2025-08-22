import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import CC from '../assets/CC-logo.png'
import CCN from '../assets/CC-name.png'
import './header.css'

const header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className='flex justify-center'>
      <div className={`fixed flex justify-center w-[98vw] md:w-[75vw] items-center text-white pt-7 z-100 gap-7 duration-800 cursor-pointer bg-[#000000] pb-[18px] hover:opacity-100 ${scrolled ? "opacity-6" : "opacity-100"}`} style={{clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)"}}>
        <img src={CCN} className='w-[13vw] z-50' alt="" />
        <div className='flex justify-center items-center text-[1.2rem] z-10 gap-8 cursor-pointer' style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal"}}>
          <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 hover:border-gray-500"} replace>Home</NavLink>
          <NavLink to='/Team' className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} replace>Team</NavLink>
          <NavLink className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} to='/About'replace>About</NavLink>
          <NavLink className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} to='/Event' replace>Events</NavLink>
          <NavLink className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} to='/Join' replace>Join Us</NavLink>
        </div>
        <hr className="absolute top-20 w-[930px] text-[#ffffff7a]" />
        <hr className='absolute top-3.5 rotate-35 right-[938px] w-[25vw] text-[#ffffff7a]' />
        <hr className='absolute top-[17px] left-[934px] rotate-145 w-[25vw] text-[#ffffff7a]'  />
      </div>
    </div>
    
  )
}

export default header
