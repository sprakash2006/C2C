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
    <>
      <div className={`fixed flex justify-center items-center text-white pt-7 z-100 gap-50 px-85 duration-1000 cursor-pointer hover:opacity-100 ${scrolled ? "opacity-6" : "opacity-100"}`}>
        <img src={CCN} className='w-[12vw]' alt="" />
        <div className='flex justify-center items-center text-[1.2rem] z-10 gap-10' style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal"}}>
                <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 hover:border-gray-500"} replace>Home</NavLink>
          <NavLink to='/Team' className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} replace>Team</NavLink>
          <NavLink className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} to='/About'replace>About</NavLink>
          <NavLink className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} to='/Event' replace>Events</NavLink>
          <NavLink className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} to='/Join' replace>Join Us</NavLink>
        </div>
        <span className='absolute top-17 text-[#ffffff51]' style={{ textShadow: "0 0 5px #ff0050" }}>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</span>
        <span className='absolute top-3.5 rotate-50 left-[193.5px] text-[#ffffff51]' style={{ textShadow: "0 0 5px #ff0050" }}>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</span>
        <span className='absolute top-[17px] right-[190px]  rotate-130 text-[#ffffff51]' style={{ textShadow: "0 0 5px #ff0050" }}>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</span>
      </div>
    </>
    
  )
}

export default header
