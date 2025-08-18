import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import CC from '../assets/CC-logo.png'
import CCN from '../assets/CC-name.png'
import './header.css'

const header = () => {
  return (
    <>
      <div className='fixed flex justify-center items-center pt-7 z-100 gap-50 px-85 opacity-10 duration-1000 cursor-pointer hover:opacity-100'>
        <img src={CCN} className='w-[12vw]' alt="" />
        <div className='flex justify-center items-center text-[1.2rem] z-10 gap-10' style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal"}}>
                <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 hover:border-gray-500"} >Home</NavLink>
          <NavLink to='/Team' className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} >Team</NavLink>
          <NavLink className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} to='/About'>About</NavLink>
          <NavLink className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} to='/Event'>Events</NavLink>
          <NavLink className={({ isActive }) => isActive ? "border-b-2 border-[rgb(255,0,0)] text-white pb-1" : "pb-1 hover:border-b-2 text-white hover:border-gray-500"} to='/Join'>Join Us</NavLink>
        </div>
      </div>
    </>
    
  )
}

export default header
