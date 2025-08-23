// EditEvent.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const EditEvent = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    mode: "",
    purpose: "",
    registrationLink: "",
    subheading: "",
    time: "",
    title: "",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsData);
    };
    fetchEvents();
  }, []);

  const handleSelect = (event) => {
    setSelectedEvent(event);
    setFormData({
      date: event.date,
      mode: event.mode,
      purpose: event.purpose,
      registrationLink: event.registrationLink,
      subheading: event.subheading,
      time: event.time,
      title: event.title,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!selectedEvent) return alert("Please select an event first.");
    try {
      const eventRef = doc(db, "events", selectedEvent.id);
      await updateDoc(eventRef, formData);
      alert("Event updated successfully!");
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Failed to update event.");
    }
  };

  const handleDelete = async () => {
    if (!selectedEvent) return alert("Please select an event first.");
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;
    try {
      const eventRef = doc(db, "events", selectedEvent.id);
      await deleteDoc(eventRef);
      alert("Event deleted successfully!");
      setEvents(events.filter((e) => e.id !== selectedEvent.id));
      setSelectedEvent(null);
      setFormData({
        date: "",
        mode: "",
        purpose: "",
        registrationLink: "",
        subheading: "",
        time: "",
        title: "",
      });
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold pb-6 md:pt-20 md:text-5xl md:pb-20 text-[#0642cd]">Edit Event</h2>

      {/* Event List */}
      <div className="w-full max-w-xl bg-gray-970 border-1 border-dashed md:px-5 md:py-7 p-4 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold pb-3">Select an Event:</h3>
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => handleSelect(event)}
            className={`cursor-pointer p-3 mb-2 rounded-lg ${
              selectedEvent?.id === event.id
                ? "bg-[#ff0057] text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {event.title}
          </div>
        ))}
      </div>

      {/* Edit Form */}
      {selectedEvent && (
        <div className="w-full max-w-xl bg-gray-950 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold pb-4 text-[#ff7e00]">Update Event :</h3>
          <div className="space-y-4">
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium capitalize py-3">
                  {key} :
                </label>
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                />
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-10">
            <button
              onClick={handleUpdate}
              className="bg-[#ff7e00] hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditEvent;
