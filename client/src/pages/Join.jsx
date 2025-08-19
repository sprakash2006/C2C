import { useState } from 'react';
import Header from '../components/header'
import { Code, Smartphone, Shield, Palette, Gamepad2, Brain, Users, Trophy, Briefcase, Star, ArrowRight, Zap, Target, Rocket, Globe, Award, BookOpen, Network } from 'lucide-react';

const Join = () => {


  const benefits = [
    { icon: Award, title: "Industry Certificates", desc: "Certificates from workshops, events, and partner companies" },
    { icon: BookOpen, title: "Hands-on Projects", desc: "Progress from small tasks to real industrial projects" },
    { icon: Network, title: "Internship Opportunities", desc: "Direct connections through company partnerships" },
    { icon: Briefcase, title: "Career Growth", desc: "Selected members get direct interviews with Career Carfly" },
    { icon: Users, title: "Workshops & Webinars", desc: "Training on trending tools and technologies" },
    { icon: Star, title: "Resume Enhancement", desc: "Real-world projects and company-backed certificates" }
  ];


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    collegeYear: '',
    whatsappNumber: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    collegeYear: '',
    whatsappNumber: ''
  });

  const currentYear = new Date().getFullYear();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      collegeYear: '',
      whatsappNumber: ''
    };

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!formData.email.endsWith('@vit.edu')) {
      newErrors.email = 'Please use your college email ending with @vit.edu';
      isValid = false;
    }

    // College Year validation
    if (!formData.collegeYear) {
      newErrors.collegeYear = 'College year is required';
      isValid = false;
    } else if (isNaN(formData.collegeYear) || formData.collegeYear < 1900 || formData.collegeYear > currentYear) {
      newErrors.collegeYear = 'Invalid year';
      isValid = false;
    } else if (currentYear - formData.collegeYear > 4) {
      newErrors.collegeYear = 'Year difference should be less than 4 years';
      isValid = false;
    }

    // WhatsApp validation
    if (!formData.whatsappNumber) {
      newErrors.whatsappNumber = 'WhatsApp number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.whatsappNumber)) {
      newErrors.whatsappNumber = 'WhatsApp number must be 10 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      // Add your submission logic here (e.g., API call)
      alert('Form submitted successfully!');
    }
  };












  return (
    <>
     <div className='flex flex-col justify-center items-center bg-black text-white pb-10 pt-7'> 
      <Header />
     </div>




      <div style={{ backgroundColor: "#000000" }} className="text-white p-4 flex items-center justify-center pt-[4vw] pb-[5vw]">
        <div className='border rounded-[30px] px-[5vw] py-[4vw]' style={{borderColor:"rgba(255,255,255,0.15)"}}>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" style={{ color: "#C0C0C0" }} className="block text-2xl pb-2 font-medium mb-1">
                  First Name <span style={{ color: "rgb(255,0,0)",fontSize:"20px" }}>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderColor: errors.firstName ? "#C0C0C0" : "rgba(255,255,255,0.2)",
                    color: "#C0C0C0"
                  }}
                  className="w-[15vw] px-3 py-2 rounded border focus:outline-none focus:ring-2"
                />
                {errors.firstName && <p style={{ color: "rgb(255,0,0)" }} className="text-xs mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="lastName" style={{ color: "#C0C0C0" }} className="block font-medium pb-2 text-2xl">
                  Last Name <span style={{ color: "rgb(255,0,0)",fontSize:"20px" }}>*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderColor: errors.lastName ? "#C0C0C0" : "rgba(255,255,255,0.2)",
                    color: "#C0C0C0"
                  }}
                  className="w-[15vw] px-3 py-2 rounded border focus:outline-none focus:ring-2"
                />
                {errors.lastName && <p style={{ color: "rgb(255,0,0)" }} className="text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" style={{ color: "#C0C0C0" }} className="block text-2xl pt-7 pb-2 font-medium mb-1">
                College Email <span style={{ color: "rgb(255,0,0)",fontSize:"20px" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@vit.edu"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: errors.email ? "#C0C0C0" : "rgba(255,255,255,0.2)",
                  color: "#C0C0C0"
                }}
                className="w-full px-3 py-2 rounded border focus:outline-none focus:ring-2"
              />
              {errors.email && <p style={{ color: "rgb(255,0,0)" }} className="text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="collegeYear" style={{ color: "#C0C0C0" }} className="block text-2xl pb-2 pt-7 font-medium mb-1">
                College Year <span style={{ color: "rgb(255,0,0)",fontSize:"20px" }}>*</span>
              </label>
              <input
                type="number"
                id="collegeYear"
                name="collegeYear"
                value={formData.collegeYear}
                onChange={handleChange}
                min={currentYear - 4}
                max={currentYear}
                placeholder={`e.g. ${currentYear}`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: errors.collegeYear ? "#C0C0C0" : "rgba(255,255,255,0.2)",
                  color: "#C0C0C0"
                }}
                className="w-full px-3 py-2 rounded border focus:outline-none focus:ring-2"
              />
              {errors.collegeYear && <p style={{ color: "rgb(255,0,0)" }} className="text-xs mt-1">{errors.collegeYear}</p>}
            </div>

            <div>
              <label htmlFor="whatsappNumber" style={{ color: "#C0C0C0" }} className="block text-2xl pb-2 pt-7 font-medium mb-1">
                WhatsApp Number <span style={{ color: "rgb(255,0,0)",fontSize:"20px" }}>*</span>
              </label>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="10-digit number"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: errors.whatsappNumber ? "#C0C0C0" : "rgba(255,255,255,0.2)",
                  color: "#C0C0C0"
                }}
                className="w-full px-3 py-2 rounded border focus:outline-none focus:ring-2"
              />
              {errors.whatsappNumber && <p style={{ color: "rgb(255,0,0)" }} className="text-xs mt-1">{errors.whatsappNumber}</p>}
            </div>

            <button
              type="submit"
              style={{ backgroundColor: "#00ABFF", borderColor: "#C0C0C0", color: "black" }}
              className=" cursor-pointer relative left-35 top-7 w-50 py-2 px-4 border rounded-md font-medium transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Join;

