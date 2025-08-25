// CreateEvent.jsx
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    subheading: "",
    date: "",
    time: "",
    mode: "",
    registrationLink: "",
    purpose: "",
  });

  const [events, setEvents] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fetch events
  const fetchEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "events"));
    const eventList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setEvents(eventList);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "events"), formData);
      alert("✅ Event created successfully!");
      setFormData({
        title: "",
        subheading: "",
        date: "",
        time: "",
        mode: "",
        registrationLink: "",
        purpose: "",
      });
      fetchEvents(); // Refresh events
    } catch (error) {
      console.error("Error creating event: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-gray-200 p-6">
      <h1
        className="text-4xl font-extrabold pb-6 md:pb-14 md:pt-20 text-center"
        style={{
          background: "linear-gradient(45deg, #ff0057, #ff7e00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Create New Event
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 md:w-[70vw] pb-12 bg-[#030303] p-6 rounded-2xl shadow-lg border border-[#2a2a2a]"
      >
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="p-3 md:w-[40vw] bg-[#121212] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0057] text-white"
          required
        />
        <input
          type="text"
          name="subheading"
          placeholder="Subheading"
          value={formData.subheading}
          onChange={handleChange}
          className="p-3 md:w-[40vw] bg-[#121212] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0057] text-white"
        />
        <input
          type="text"
          name="date"
          placeholder="Date (e.g., 25 Aug 2025)"
          value={formData.date}
          onChange={handleChange}
          className="p-3 md:w-[40vw] bg-[#121212] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e00] text-white"
          required
        />
        <input
          type="text"
          name="time"
          placeholder="Time (e.g., Afternoon 3:00)"
          value={formData.time}
          onChange={handleChange}
          className="p-3 md:w-[40vw] bg-[#121212] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e00] text-white"
        />
        <input
          type="text"
          name="mode"
          placeholder="Mode (e.g., Online)"
          value={formData.mode}
          onChange={handleChange}
          className="p-3 md:w-[40vw] bg-[#121212] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0057] text-white"
        />
        <input
          type="url"
          name="registrationLink"
          placeholder="Registration Link"
          value={formData.registrationLink}
          onChange={handleChange}
          className="p-3 md:w-[40vw] bg-[#121212] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e00] text-white"
        />
        <textarea
          name="purpose"
          placeholder="Purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="p-3 md:w-[40vw] bg-[#121212] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0057] text-white"
          rows={4}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-[#ff0057] to-[#ff7e00] text-white md:py-4 md:px-10 rounded-lg font-bold hover:opacity-90 transition"
        >
          Create Event
        </button>
      </form>

      {/* Show Events */}
      <h2
        className="text-5xl font-semibold md:pb-10 md:pt-20 text-center"
        style={{
          background: "linear-gradient(45deg, #ff0057, #ff7e00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        All Events
      </h2>
      <ul className="space-y-6 md:w-[60vw]">
        {events.map((event) => (
          <li
            key={event.id}
            className="p-5 border md:pb-2 border-[#2a2a2a] rounded-xl shadow-md bg-[#1a1a1a]"
          >
            <h3 className="font-bold text-xl md:pb-2 text-white">{event.title}</h3>
            {event.subheading && (
              <p className="text-gray-400">{event.subheading}</p>
            )}
            {event.date && (
              <p className="text-sm md:pb-2 text-gray-300">
                <strong>Date:</strong> {event.date}
              </p>
            )}
            {event.time && (
              <p className="text-sm md:pb-2 text-gray-300">
                <strong>Time:</strong> {event.time}
              </p>
            )}
            {event.mode && (
              <p className="text-sm md:pb-2 text-gray-300">
                <strong>Mode:</strong> {event.mode}
              </p>
            )}
            {event.registrationLink && (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff7e00] md:pb-2 underline hover:text-[#ff0057]"
              >
                Registration Link
              </a>
            )}
            {event.purpose && (
              <p className="mt-2 text-sm md:pb-2 text-gray-400">{event.purpose}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateEvent;
