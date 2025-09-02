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




  
};

export default TechClubForm;
