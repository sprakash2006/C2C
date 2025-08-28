import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { Trash2 } from "lucide-react"; // delete icon

const DeleteUpdate = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch updates
  const fetchUpdates = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "updates"));
      const updatesList = querySnapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setUpdates(updatesList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching updates: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  // delete update
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this update?"
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "updates", id));
      setUpdates(updates.filter((update) => update.id !== id));
    } catch (error) {
      console.error("Error deleting update: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="md:text-5xl md:pt-13 md:pb-10 font-semibold mb-6 text-center"> Delete Updates</h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading updates...</p>
        ) : updates.length === 0 ? (
          <p className="text-center text-gray-400">No updates found.</p>
        ) : (
          <div className="space-y-3">
            {updates.map((update) => (
              <div
                key={update.id}
                className="flex justify-between md:gap-10 md:pr-10 items-center p-4 bg-[#080b12] border border-gray-800 rounded-md shadow-sm"
              >
                <p className="text-gray-200">{update.title}</p>
                <button
                  onClick={() => handleDelete(update.id)}
                  className="text-red-500 hover:text-red-400"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteUpdate;
