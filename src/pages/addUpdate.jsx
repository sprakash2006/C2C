import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const AddUpdate = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !link.trim()) {
      setMessage("⚠️ Please fill in both fields.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "updates"), {
        title: title,
        link: link,
      });

      setMessage("✅ Update added successfully!");
      setTitle("");
      setLink("");
    } catch (error) {
      console.error("Error adding update: ", error);
      setMessage("❌ Failed to add update. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-2xl bg-[#080b12] border border-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-semibold pb-15 pt-5 text-center">
          📢 Add Update
        </h2>

        {message && (
          <p className="pb-4 text-center text-xl text-gray-300">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 px-10 pb-10">
          <div>
            <label className="block pb-3 text-xl text-gray-400">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-md bg-[#0c0f17] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Title to display "
            />
          </div>

          <div className='pb-7'>
            <label className="block pb-3 text-xl pt-5 text-gray-400">
              Link
            </label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full p-3 rounded-md bg-[#0c0f17] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter link for more information "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#111827] border border-gray-700 rounded-md hover:bg-[#1f2937] transition font-medium text-gray-200"
          >
            {loading ? "Adding..." : "Add Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUpdate;
