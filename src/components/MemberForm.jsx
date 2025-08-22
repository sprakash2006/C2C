import React, { useState } from 'react';
import { db } from '../FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";


const TechClubForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    enrollmentId: '',
    email: '',
    mobile: '',
    yearOfStudy: '',
    branch: '',
    linkedinUrl: '',
    githubUrl: '',
    motivation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      alert("Full name is required");
      return;
    }

    if (!/^\d{6,}$/.test(formData.enrollmentId)) {
      alert("Enrollment ID must be at least 6 digits");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Enter a valid email address");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      alert("Mobile number must be 10 digits");
      return;
    }

    // ✅ If all good, you can log or send data to backend
    console.log("Form submitted:", formData);

  try {
    // Reference to your collection
    const docRef = await addDoc(collection(db, "students"), {
      fullname: formData.fullName,
      prnno: Number(formData.enrollmentId),   // converting to number
      email: formData.email,
      mobileno: Number(formData.mobile),
      yearofstudy: `Year ${formData.yearOfStudy}`, // formatting
      department: formData.branch, 
      linkedinurl: formData.linkedinUrl,
      githuburl: formData.githubUrl,
      motivation: formData.motivation,
      createdAt: new Date()  // optional: timestamp
    });

    alert("Form Submitted Sucessfully!");

    setFormData({
      fullName: "",
      enrollmentId: "",
      email: "",
      mobile: "",
      yearOfStudy: "",
      branch: "",
      linkedinUrl: "",
      githubUrl: "",
      motivation: ""
    });
    
    
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };




  return (
    <div className="bg-[#02012492] rounded-xl shadow-md p-8 pt-15 mx-auto w-full max-w-3xl border border-[#ffffff38]">
      <div className="pb-15 text-center ">
        <h2 className="text-3xl pb-1.5 font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400 mb-2">
          MEMBERSHIP APPLICATION
        </h2>
        <div className="h-[2px] x w-60 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto"></div>
      </div>





      <form onSubmit={handleSubmit} className="space-y-6"  onKeyDown={(e) => {  if (e.key === "Enter") {  e.preventDefault(); }  }}>
        {/* Full Width Inputs */}




        <div className="group pb-8 w-8/10">
          <label className="block text-[1.1rem] uppercase tracking-wider text-gray-400 pb-2">Full Name &nbsp;--&#x21b4;</label>
          <div className="relative">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border-b border-gray-700 focus:border-blue-400 focus:outline-none text-sm text-gray-100 placeholder-gray-500 transition-all"
              placeholder="John Doe"
            />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-focus-within:w-full transition-all duration-300"></div>
          </div>
        </div>





        <div className="group pb-8 w-8/10">
          <label className="block text-[1.1rem] pb-2 uppercase tracking-wider text-gray-400 mb-2">Enrollment ID &nbsp;--&#x21b4;</label>
          <div className="relative">
            <input
              type="text"
              name="enrollmentId"
              placeholder="123456"
              value={formData.enrollmentId}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border-b border-gray-700 focus:border-none focus:outline-none text-sm text-gray-100 placeholder-gray-500 transition-all"
            />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-focus-within:w-full transition-all duration-300"></div>
          </div>
        </div>






        <div className="group pb-8 w-8/10">
          <label className="block text-[1.1rem] pb-2 uppercase tracking-wider text-gray-400 mb-2">Email Address &nbsp;--&#x21b4;</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border-b border-gray-700 focus:border-blue-400 focus:outline-none text-sm text-gray-100 placeholder-gray-500 transition-all"
              placeholder="john.doe24@vit.edu"
            />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-focus-within:w-full transition-all duration-300"></div>
          </div>
        </div>





        <div className="group pb-8 w-8/10">
          <label className="block text-[1.1rem] pb-2 uppercase tracking-wider text-gray-400 mb-2">Mobile Number &nbsp;--&#x21b4;</label>
          <div className="relative">
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border-b border-gray-700 focus:border-blue-400 focus:outline-none text-sm text-gray-100 placeholder-gray-500 transition-all"
              placeholder="1234567890"
            />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-focus-within:w-full transition-all duration-300"></div>
          </div>
        </div>





        <div className="group pb-8 w-8/10">
          <label className="block text-[1.1rem] pb-2 uppercase tracking-wider text-gray-400 mb-2">Year of Study &nbsp;--&#x21b4;</label>
          <div className="relative">
            <select
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border-b border-gray-700 focus:border-blue-400 focus:outline-none text-sm text-gray-100 appearance-none"
            >
              <option value="" disabled>Select Year</option>
              {[1, 2, 3, 4].map(year => (
                <option key={year} value={year}>Year {year}</option>
              ))}
            </select>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-focus-within:w-full transition-all duration-300"></div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>





        <div className="group pb-8 w-8/10">
          <label className="block text-[1.1rem] pb-2 uppercase tracking-wider text-gray-400 mb-2">Department &nbsp;--&#x21b4;</label>
          <div className="relative">
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border-b border-gray-700 focus:border-blue-400 focus:outline-none text-sm text-gray-100 appearance-none"
            >
              <option value="" disabled>Select Branch</option>
              <option value="CSE">Computer Science</option>
              <option value="IT">Information Technology</option>
              <option value="ECE">Electronics</option>
              <option value="EEE">Electrical</option>
              <option value="MECH">Mechanical</option>
            </select>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-focus-within:w-full transition-all duration-300"></div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>





        <div className="group pb-8 w-8/10">
          <label className="block text-[1.1rem] pb-2 uppercase tracking-wider text-gray-400 mb-2">LinkedIn Profile &nbsp;--&#x21b4;</label>
          <div className="relative">
            <input
              type="url"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border-b border-gray-700 focus:border-blue-400 focus:outline-none text-sm text-gray-100 placeholder-gray-500 transition-all"
              placeholder="https://www.linkedin.com/johndoe"
            />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-focus-within:w-full transition-all duration-300"></div>
          </div>
        </div>





        <div className="group pb-8 w-8/10">
          <label className="block text-[1.1rem] pb-2 uppercase tracking-wider text-gray-400 mb-2">GitHub Profile &nbsp;--&#x21b4;</label>
          <div className="relative">
            <input
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border-b border-gray-700 focus:border-blue-400 focus:outline-none text-sm text-gray-100 placeholder-gray-500 transition-all"
              placeholder="https://www.github.com/johndoe"
            />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-focus-within:w-full transition-all duration-300"></div>
          </div>
        </div>





        <div className="group pb-8 w-8/10">
          <label className="block text-[1.1rem] pb-2 uppercase tracking-wider text-gray-400 mb-2">Why join our club? </label>
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-gray-900 border-b border-gray-700 focus:border-blue-400 focus:outline-none text-sm text-gray-100 placeholder-gray-500 transition-all resize-none"
            placeholder="Tell us about your interest in technology..."
          ></textarea>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-focus-within:w-full transition-all duration-300"></div>
          </div>
        </div>





        {/* Submit Button */}
        <div className='8/10'>
        <button
          type="submit"
          className="w-full text-center py-3 px-6 mt-10 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-400 hover:from-gray-700 hover:to-gray-800 text-sm text-gray-100 font-medium tracking-wider rounded transition-all group"
        >
          <span className=" group-hover:text-blue-400 transition-colors">
            SUBMIT APPLICATION
          </span>
        </button></div>





      </form>
    </div>
  );
};

export default TechClubForm;
