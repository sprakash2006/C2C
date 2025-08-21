import React from 'react'
import Header from '../components/header'
import { CalendarDays, Clock, Monitor } from "lucide-react"

const Event = () => {

  return (
    <div className='bg-black text-black'>
      <Header />
      <div className='py-70 md:py-35 px-[2vw] md:px-[5vw] bg-black text-white flex flex-col justify-center items-center'>
        <div>
          <span className='absolute left-[50%] md:left-[220px] top-69 md:top-34 z-12 h-2 w-2 bg-green-400 rounded-full'></span>
          <span className='absolute left-[49.4%] md:left-[216px] top-68 md:top-33 z-12 h-3.5 w-3.5 bg-green-400 animate-ping rounded-full'></span>
        </div>
        <div className='w-[90vw] text-center md:w-[70vw] md:h-[44vw] px-[5vw] pt-12 pb-[5vw] border bg-[rgb(7,7,7)] border-[#ffffff3e] flex flex-col justify-center items-center'  style={{backgroundImage: "linear-gradient(to right, #101010 1px, transparent 1px), linear-gradient(to bottom, #101010 1px, transparent 1px)", backgroundSize: "50px 50px" }}>
          <div className=' pb-15 flex flex-col justify-center items-center'>
            <h1 className='text-[1.7rem] md:text-[2.25rem] md:pt-10' style={{ fontFamily: "Faculty Glyphic, sans-serif", fontWeight: 400, fontStyle: "normal",background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Launching Career Carfly Club</h1>
            <p className='text-[#ffffff42]'>1st Online Introductory Session</p>
          </div>
          <div className='pb-5'>
            <div className='flex flex-col md:flex-row justify-center items-center py-2' style={{  background: "rgba(0, 255, 128, 0.13)",  backdropFilter: "blur(12px)",   WebkitBackdropFilter: "blur(12px)",  border: "1px solid rgba(0, 255, 128, 0.2)",  boxShadow: "0 4px 30px rgba(0, 255, 128, 0.1)"}}>
              <div className='flex flex-col md:flex-row justify-center items-center px-20 py-3 md:py-0 md:px-8 md:border-r md:border-[rgba(0, 255, 128, 0.3)] gap-3'><CalendarDays size={25} /><span>24 Aug 2025</span></div>
              <div className='flex flex-col md:flex-row justify-center items-center px-20 py-3 md:py-0 md:px-8 md:border-x md:border-[rgba(0, 255, 128, 0.3)] gap-3'><Clock size={25}  /><span>Afternoon 3:00</span></div>
              <div className='flex flex-col md:flex-row justify-center items-center px-20 py-3 md:py-0 md:px-8 md:border-l md:border-[rgba(0, 255, 128, 0.3)] gap-3'><Monitor size={25}  /><span>Online</span></div>
            </div>
          </div>


          <div className='flex flex-col md:flex-row items-start py-15 md:py-8 pl-[2vw] border border-[#ffffff2e] border-dashed rounded-2xl bg-[rgb(7,7,7)]'>
            <div className='md:w-[40%] '>
              <h1 className='text-[1.25rem] pb-5 md:pb-3' style={{ fontFamily: '"Faculty Glyphic", sans-serif', fontWeight: 400, fontStyle: "normal" }}>Purpose Of Event :</h1>
              <ul className='md:list-disc text-[#ffffffb7]'>
                <li>The purpose of this launch event is to present the vision of Career Carfly Club, share its growth roadmap from projects to internships, and inspire students to actively engage for industry exposure and career growth.</li>
              </ul>
            </div>
            <div className='md:w-[40%] pt-12 md:pt-0'>
              <h1 className='text-[1.25rem] pb-3' style={{ fontFamily: '"Faculty Glyphic", sans-serif', fontWeight: 400, fontStyle: "normal" }}>What is for you ?</h1>
              <ul className='md:list-disc text-[#ffffffb7]'>
                <li>Early opportunity to Join club and priority In Membership,Certifiactes and Recognitions, internship opportunities And more...</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start pt-15 md:pt-8'>
            <p className='text-center md:px-[5vw]'>An online session with the <span style={{background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight:"500"}}>CEO of Career Carfly Pvt. Ltd.</span> <br /> introducing domains, benefits, and industry opportunities</p>
          </div>
          <div className='pt-12'>
            <a href=""><button className='border px-6 py-2 rounded-full text-blue-500 hover:bg-blue-500 hover:text-black hover:font-semibold duration-1000 cursor-pointer'>Register Now</button></a>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Event
