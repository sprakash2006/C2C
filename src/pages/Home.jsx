import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig"; 

import { Users, Briefcase, Star, Award, BookOpen, Network } from 'lucide-react';
import CCVideo from '../assets/CC-video.mp4'
import Header from '../components/header'
import { NavLink } from "react-router-dom";
import './Home.css'

const Home = () => {


    const [updates, setUpdates] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "updates"));
          const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setUpdates(data);
        } catch (error) {
          console.error("Error fetching students:", error);
        }
      };

      fetchData();
    }, []);

    const benefits = [
    { icon: Award, title: "Industry Certificates", desc: "Certificates from workshops, events, and partner companies" },
    { icon: BookOpen, title: "Hands-on Projects", desc: "Progress from small tasks to real industrial projects" },
    { icon: Network, title: "Internship Opportunities", desc: "Direct connections through company partnerships" },
    { icon: Briefcase, title: "Career Growth", desc: "Selected members get direct interviews with Career Carfly" },
    { icon: Users, title: "Workshops & Webinars", desc: "Training on trending tools, technologies and horizons" },
    { icon: Star, title: "Resume Enhancement", desc: "Real-world projects and company-backed certificates" }
  ];




  return (
    <>
      <div className="relative h-screen w-full">
        <Header />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={CCVideo} type="video/mp4" />
        </video>
      </div>

      <div className="px-[2vw] md:px-[10vw] py-[10vw] md:py-[4vw] bg-[#010015] border-t border-b border-dashed border-t-[#ffffff4c] border-b-[#ffffff4c] text-white">
        <p className='text-center text-[1.25rem] md:text-3xl' style={{ fontFamily: "Montserrat, sans-serif", fontOpticalSizing: "auto", fontWeight: "300", fontStyle: "normal" }}>“At <span style={{ background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight:"500" }}>Career Carftly</span> , we are a community of passionate coders and innovators, driven to inspire creativity, sharpen problem-solving, and build real-world projects through coding sessions, competitions, and collaborations.”</p>
      </div>


  
      <div className="bg-black text-white p-8 pb-[10vw] md:pb-[5vw]">
        <h1 className=" text-4xl md:text-6xl font-bold pb-[8vw] md:pb-[7vw] text-center pt-[10vw] md:pt-[7vw]" style={{ fontFamily: "Faculty Glyphic, sans-serif", fontWeight: 400, fontStyle: "normal" }}>Why Join <span style={{ background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Career Carfly</span>  Club ?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 md:px-[8vw] pb-[13vw] md:pb-[5vw]">

          <div className="p-3 md:p-5 border border-dotted border-[#ff80008a] rounded-lg shadow-lg">
            <h2 className="text-[1.2rem] md:text-2xl font-semibold pb-1 md:pb-2">Practical Learning & Skill Development</h2>
            <p className='text-[#ffffffc5] text-[0.9rem] md:text-1xl'>Hands-on workshops, training sessions, and projects that focus on real-world applications instead of just theory.</p>
          </div>

          <div className="p-3 md:p-5 border border-dotted border-[#ff0055aa] rounded-lg shadow-lg">
            <h2 className="text-[1.2rem] md:text-2xl font-semibold pb-1 md:pb-2">Industry Exposure & Networking</h2>
            <p className='text-[#ffffffc5] text-[0.9rem] md:text-1xl'>Direct connections with professionals, CEOs, and partner companies through events, guest talks, and internships.</p>
          </div>

          <div className="p-3 md:p-5 border border-dotted border-[#ff0055aa] rounded-lg shadow-lg">
            <h2 className="text-[1.2rem] md:text-2xl font-semibold pb-1 md:pb-2">Innovation & Projects</h2>
            <p className='text-[#ffffffc5] text-[0.9rem] md:text-1xl'>Organizing hackathons, flagship events like Teach Shark, and industrial projects where students pitch and build impactful solutions.</p>
          </div>

          <div className="p-3 md:p-5 border border-dotted border-[#ff80008a] rounded-lg shadow-lg">
            <h2 className="text-[1.2rem] md:text-2xl font-semibold pb-1 md:pb-2">Career Growth & Opportunities</h2>
            <p className='text-[#ffffffc5] text-[0.9rem] md:text-1xl'>Certificates, internships, mentorship, and direct recruitment pathways through Career Carfly Pvt. Ltd. and its partners.</p>
          </div>

        </div>
      </div>

      <section className="px-4 bg-black pt-[4vw] pb-[12vw]">
        <div>

          <div className="text-center pb-[5vw]">
            <h2 className="text-3xl md:text-6xl font-bold pb-6 text-white" style={{ fontFamily: '"Edu NSW ACT Cursive", cursive', fontOpticalSizing: "auto", fontWeight: 400, fontStyle: "normal" }}>What Members Will Get</h2>
            <p className="text-lg text-[#fff53b]">To accelerate your Technology career ⚡</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-[7vw]">
            {benefits.map((benefit, index) => (
              <div key={index} className=" border border-gray-700 rounded-lg p-6 bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg border border-white" style={{background: "linear-gradient(90deg, #ff0057, #ff7e00)"}}>
                    <benefit.icon className="w-6 h-6 text-[#ffffff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <NavLink to='/Join'>
            <div className='text-white text-center pt-10 flex px-[21vw] md:px-[42vw]' style={{cursor: "url('data:image/svg+xml;utf8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;48&quot; viewBox=&quot;0 0 24 24&quot;><path fill=&quot;%23FFF&quot; stroke=&quot;%23000&quot; stroke-width=&quot;1.5&quot; stroke-linejoin=&quot;round&quot; d=&quot;M10 11V8.99c0-.88.59-1.64 1.44-1.86h.05A1.99 1.99 0 0 1 14 9.05V12v-2c0-.88.6-1.65 1.46-1.87h.05A1.98 1.98 0 0 1 18 10.06V13v-1.94a2 2 0 0 1 1.51-1.94h0A2 2 0 0 1 22 11.06V14c0 .6-.08 1.27-.21 1.97a7.96 7.96 0 0 1-7.55 6.48 54.98 54.98 0 0 1-4.48 0 7.96 7.96 0 0 1-7.55-6.48C2.08 15.27 2 14.59 2 14v-1.49c0-1.11.9-2.01 2.01-2.01h0a2 2 0 0 1 2.01 2.03l-.01.97v-10c0-1.1.9-2 2-2h0a2 2 0 0 1 2 2V11Z&quot;/></svg>') 0 0, auto" }}>
              <div className="relative left-2 top-[2px] h-6 w-6 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </div>
              <p className='bg-[#110029] w-fit px-3 py-[2px] rounded-3xl' style={{ fontFamily: "Faculty Glyphic, sans-serif", fontWeight: 400, fontStyle: "normal" }}>Be Part of Us</p>
              <p className='bg-[#110029] w-fit px-3 py-[2px] rounded-3xl relative right-3' style={{ fontFamily: "Faculty Glyphic, sans-serif", fontWeight: 400, fontStyle: "normal" }}>&#x21d2;</p>
            </div>
          </NavLink>
        </div>
      </section>

      <section className="bg-black text-white pb-[10vw] overflow-hidden">
        <p className='updates-strip relative bg-[#00397f] text-[1.5rem] w-[350vw] md:py-[5px]' style={{ fontFamily: '"Silkscreen", sans-serif', fontWeight: 400, fontStyle: "normal" }}>Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates <span className='text-black'>✶</span> Updates</p>
        
        
        <div className='pt-[15vw] md:pt-[7vw] md:px-[7vw]'>
          
          {updates.map((update) => {
            return(
              <div className="pb-2">
                <div key={update.title} className="pb-4 md:pb-2 md:pl-10 bg-[#010a14] hover:bg-[#041120] opacity-50 hover:opacity-100 hover:border-none duration-500 hover:scale-105 border border-[#ffffff51] rounded-[5px] px-7 py-3">
                    <a href={update.link} className=" md:text-[1.25rem] " style={{ fontFamily: "Libertinus Sans, sans-serif", fontWeight: 400, fontStyle: "normal" }}>{update.title}</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>







    </>
  );
};

export default Home;
