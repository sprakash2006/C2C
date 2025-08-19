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




      
    </>
  );
};

export default Home;
