import React from 'react'
import { NavLink } from 'react-router-dom'
import CCLogo from '../assets/CC-logo.png'
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'

const footer = () => {
  return (
    <>
    <div className='pt-[15vw] flex md:flex-row flex-col justify-start items-start md:px-[3vw] pb-0 md:pb-5 bg-[#07000e] text-white md:pt-[3.5vw] border-t border-t-[#ffffff1f] border-dashed'>
      <div className='md:w-15 w-15'>
        <img src={CCLogo} alt="" />
      </div>
      <div className='flex flex-col w-[80vw] md:w-[12.9vw] justify-start items-start pt-3 md:pt-0'>
        <h1 className='text-3xl pb-1 md:pb-3' style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}} >Career Craftly</h1>
        <p className='text-[1.05rem]'  style={{ fontFamily: '"Figtree", sans-serif', fontOpticalSizing: 'auto', fontWeight: 300, fontStyle: 'normal' }}>we are a community of passionate coders and innovators, driven to inspire creativity, sharpen problem-solving, and build real-world projects</p>
      </div>
      <div className='flex flex-col justify-start items-start pt-6 md:pt-0'>
        <h1 className='text-3xl pb-3' style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(50deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>QuickLinks</h1>
        <div className='flex md:flex-col flex-row md:w-1  md:pr-35 md:gap-[4px] gap-[15px]'>
          <NavLink to='/' className='text-[1.05rem]'  style={{ fontFamily: '"Figtree", sans-serif', fontOpticalSizing: 'auto', fontWeight: 300, fontStyle: 'normal' }}>Home</NavLink>
          <NavLink to='/Team' className='text-[1.05rem]'  style={{ fontFamily: '"Figtree", sans-serif', fontOpticalSizing: 'auto', fontWeight: 300, fontStyle: 'normal' }}>Team</NavLink>
          <NavLink to='/About' className='text-[1.05rem]'  style={{ fontFamily: '"Figtree", sans-serif', fontOpticalSizing: 'auto', fontWeight: 300, fontStyle: 'normal' }}>About</NavLink>
          <NavLink to='/Events' className='text-[1.05rem]'  style={{ fontFamily: '"Figtree", sans-serif', fontOpticalSizing: 'auto', fontWeight: 300, fontStyle: 'normal' }}>Events</NavLink>
          <NavLink to='/Join' className='text-[1.05rem]'  style={{ fontFamily: '"Figtree", sans-serif', fontOpticalSizing: 'auto', fontWeight: 300, fontStyle: 'normal' }}>Join</NavLink>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start md:w-[13vw] md:pt-0 pt-5'>
        <h1 className='text-3xl pb-3 pr-0 md:pr-[45.7px]' style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Contact Us</h1>
        <div>
          <p className='text-[1.05rem] pb-[4px] md:pl-0 pl-15'  style={{ fontFamily: '"Figtree", sans-serif', fontOpticalSizing: 'auto', fontWeight: 300, fontStyle: 'normal' }} >Email:careercraftly@vit.edu</p>
          <p className='text-[1.05rem] pb-[4px] md:pl-0 pl-15'  style={{ fontFamily: '"Figtree", sans-serif', fontOpticalSizing: 'auto', fontWeight: 300, fontStyle: 'normal' }}>Phone:+91 8767690131</p>
          <p className='text-[1.05rem] pb-[4px] md:pl-0 pl-15'  style={{ fontFamily: '"Figtree", sans-serif', fontOpticalSizing: 'auto', fontWeight: 300, fontStyle: 'normal' }}>Phone:+91 8767690131</p>
          <p className='text-[1.05rem] pb-[4px] leading-6 md:pl-0 pl-15'  style={{ fontFamily: '"Figtree", sans-serif', fontOpticalSizing: 'auto', fontWeight: 300, fontStyle: 'normal' }}>Location: 666, Upper Indiranagar, Bibwewadi, Pune, Maharashtra, INDIA - 411 037.</p>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start pb-[30vw] md:pb-0'>
        <h1 className='text-3xl pb-3 md:pr-[14vw] pt-4 md:pt-0' style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Find Us</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.9995075028887!2d73.86562877472032!3d18.463626970912188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea950f616219%3A0x321bdae2cea9f064!2sVishwakarma%20Institute%20of%20Technology%20(VIT)!5e1!3m2!1smr!2sin!4v1755667363711!5m2!1smr!2sin"
          width="320"
          height="270"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className=' absolute pt-[195vw] md:pt-60 md:pl-53 flex justify-center items-center gap-10 md:gap-15 pl-10 pointer-events-none'>
        <h1 className='text-3xl' style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Follow Us</h1>
        <div className='flex justify-start items-start gap-6 pointer-events-auto' >
          <a href=""><Linkedin /></a>
          <a href=""><Facebook /></a>
          <a href=""><Instagram /></a>
          <a href=""><Youtube size={25} /></a>
        </div>
      </div>
    </div>
  </>
  )
}

export default footer