// DeleteEvent.jsx
import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { Trash2 } from "lucide-react";

const DeleteEvent = () => {
  const [events, setEvents] = useState([]);

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

  // Delete event
  const handleDelete = async (id, title) => {
    const confirmDelete = window.confirm(
      `⚠️ Are you sure you want to delete the event "${title}"?`
    );
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "events", id));
        alert("🗑️ Event deleted successfully!");
        fetchEvents(); // Refresh list
      } catch (error) {
        console.error("Error deleting event: ", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 p-6">
      <h1 className="text-4xl font-bold md:pb-20 text-center md:pt-10" style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}} >Delete Event</h1>

      {events.length === 0 ? (
        <p className="text-gray-400">No events found.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="md:w-[50vw] flex justify-between items-center p-4 bg-gray-900 rounded-lg shadow-md border border-gray-700"
            >
              <div>
                <h3 className="font-bold text-lg text-white">{event.title}</h3>
                {event.date && (
                  <p className="text-gray-400 text-sm"> {event.date}</p>
                )}
              </div>
              <button
                onClick={() => handleDelete(event.id, event.title)}
                className="text-red-500 hover:text-red-400 transition"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeleteEvent;
