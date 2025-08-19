import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Shield, Palette, Gamepad2, Brain, Users, Trophy, Briefcase, Star, ArrowRight, Zap, Target, Rocket, Globe, Award, BookOpen, Network } from 'lucide-react';
import Header from '../components/header'

const About = () => {

const goals = [
  {
    title: "Practical Industry Exposure",
    desc: "Provide students with hands-on experience rather than just theoretical knowledge"
  },
  {
    title: "Professional Networking",
    desc: "Connect members with companies, mentors, and internship opportunities"
  },
  {
    title: "Innovation Events",
    desc: "Organize industrial projects, hackathons, and flagship events like Teach Shark"
  },
  {
    title: "Community Building",
    desc: "Build a strong network of innovators, developers, and creators"
  }
];

const domains = [
  { icon: Code, title: "AI-Powered Web Development", desc: "Build websites faster using AI + coding techniques", color: "text-blue-400" },
  { icon: Smartphone, title: "App Development", desc: "Modern frameworks for Android/iOS applications", color: "text-green-400" },
  { icon: Globe, title: "Browser Extension Development", desc: "Create powerful and useful Chrome extensions", color: "text-orange-400" },
  { icon: Brain, title: "AI & Machine Learning", desc: "Hands-on mini-projects with expert guidance", color: "text-purple-400" },
  { icon: Shield, title: "Cybersecurity & Ethical Hacking", desc: "Online safety basics and ethical hacking tools", color: "text-red-400" },
  { icon: Palette, title: "UI/UX Design", desc: "Design beautiful, user-friendly applications", color: "text-pink-400" },
  { icon: Gamepad2, title: "Game Development", desc: "Interactive games with trending engines", color: "text-indigo-400" },
  { icon: Zap, title: "Emerging Technologies", desc: "Additional domains added as the club grows", color: "text-yellow-400" }
];


  return (
    <div className="bg-black text-white pb-[5vw]">
      <Header />

      <section className="relative z-10 py-40 px-4 pt-60">
          <div className="text-center flex flex-col">
            <h2 className="text-3xl md:text-6xl font-bold pb-3 text-white">About Career Carfly</h2>
            <div className="h-0.75 w-60 bg-blue-500 "></div>
            <p className="text-lg text-white leading-relaxed px-[8vw] pt-[5vw]"> <span className='text-[1.5rem]'>Career Carfly is an AI-based student club launched under the guidance and sponsorship of Career Carfly Pvt. Ltd.</span> <br /> The club is built with the vision of empowering students to stay ahead in the rapidly evolving world of technology. Our mission is to bridge the gap between academic learning and industry requirements by offering practical, hands-on experiences that go beyond the classroom. <br /> Through interactive workshops, skill-development training, industrial projects, hackathons, and collaborative learning opportunities, we create an environment where students can apply theoretical knowledge to solve real-world challenges. By fostering innovation, teamwork, and industry exposure, Career Carfly aims to nurture future-ready professionals who are capable of driving meaningful change in the fields of AI, technology, and entrepreneurship.</p>
            <div className="flex flex-wrap gap-20 pt-14 justify-center items-center text-sm px-[25vw]">
            <span className="flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-2 bg-gray-900/50">
              <Star className="w-4 h-4 text-blue-400" />
              Industry-Backed
            </span>
            <span className="flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-2 bg-gray-900/50">
              <Users className="w-4 h-4 text-green-400" />
              Student-Focused
            </span>
            <span className="flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-2 bg-gray-900/50">
              <Rocket className="w-4 h-4 text-purple-400" />
              Future-Ready
            </span>
          </div>
          </div>
      </section>

      <section className="relative z-10 py-35 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center pb-18">
            <h2 className="text-3xl md:text-5xl font-bold text-white pb-3">
              Our Goals & Agenda
            </h2>
            <div className="h-1 w-34 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6 bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300 min-h-[7vw]">
                <div className="flex items-start gap-10">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{goal.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{goal.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" py-20 px-4">
        <div className="max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-6xl font-bold text-white pb-2">What We Teach</h2>
            <div className="h-1 w-35 bg-purple-500 mx-auto"></div>
            <p className="text-lg text-gray-400 pt-6 pb-5">Comprehensive training across multiple technology domains</p>
          </div>

          <div className="flex flex-wrap gap-5 justify-center pt-10 items-center px-10">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="border flex flex-col justify-center items-center min-h-30 min-w-90 border-gray-700 rounded-lg p-6 bg-gray-900/50 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="pb-3">
                  <domain.icon className={`w-8 h-8 ${domain.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-lg font-semibold text-white">{domain.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{domain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  )
}

export default About
