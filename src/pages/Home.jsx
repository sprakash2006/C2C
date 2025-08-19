import React, { useState } from "react";
import CCVideo from '../assets/CC-video.mp4'
import Header from '../components/header'
import './Home.css'

const Home = () => {
  // ✅ State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // ✅ Update inputs dynamically
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    // ✅ Clear inputs after submission
    setFormData({
      name: "",
      email: "",
      phone: ""
    });
  };

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

      {/* Example Join Form */}
      <div className="bg-black text-white flex justify-center py-20">
        <form
          onSubmit={handleSubmit}
          className="bg-[#111] p-8 rounded-lg shadow-lg w-[400px]"
        >
          <h2 className="text-2xl mb-6 text-center font-bold">Join Club</h2>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-2 rounded text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-2 rounded text-black"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mb-6 p-2 rounded text-black"
          />

          <button
            type="submit"
            className="w-full bg-[#110124ea] py-2 rounded-lg font-medium hover:opacity-80 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
