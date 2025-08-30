import React, { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { Pencil, Trash2 } from "lucide-react"; // icons

const EditUpdate = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newLink, setNewLink] = useState("");

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

  // start editing
  const handleEdit = (update) => {
    setEditingId(update.id);
    setNewTitle(update.title);
    setNewLink(update.link || "");
  };

  // save update
  const handleSave = async (id) => {
    try {
      const updateRef = doc(db, "updates", id);
      await updateDoc(updateRef, {
        title: newTitle,
        link: newLink,
      });

      // update state locally
      setUpdates(
        updates.map((u) =>
          u.id === id ? { ...u, title: newTitle, link: newLink } : u
        )
      );

      setEditingId(null);
    } catch (error) {
      console.error("Error updating update: ", error);
    }
  };

  // delete update
  const handleDelete = async (id) => {
    if (!window.confirm("⚠️ Are you sure you want to delete this update?")) return;

    try {
      await deleteDoc(doc(db, "updates", id));
      setUpdates(updates.filter((u) => u.id !== id));
    } catch (error) {
      console.error("Error deleting update: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="md:text-4xl font-semibold mb-6 md:pt-20 md:pb-8 text-center"> Edit & Delete Updates</h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading updates...</p>
        ) : updates.length === 0 ? (
          <p className="text-center text-gray-400">No updates found.</p>
        ) : (
          <div className="space-y-3">
            {updates.map((update) => (
              <div
                key={update.id}
                className="p-4 bg-[#080b12] border pb-5 border-gray-800 rounded-md shadow-sm"
              >
                {editingId === update.id ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="Update title"
                      className="w-full p-2 rounded bg-black text-white border border-gray-700"
                    />
                    <input
                      type="text"
                      value={newLink}
                      onChange={(e) => setNewLink(e.target.value)}
                      placeholder="Update link"
                      className="w-full p-2 rounded bg-black text-white border border-gray-700"
                    />
                    <div className="flex gap-2 pt-5">
                      <button
                        onClick={() => handleSave(update.id)}
                        className="bg-green-600 px-3 py-1 rounded hover:bg-green-500"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-600 px-3 py-1 rounded hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-200">{update.title}</p>
                      {update.link && (
                        <a
                          href={update.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 text-sm underline"
                        >
                          {update.link}
                        </a>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit(update)}
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        <Pencil size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(update.id)}
                        className="text-red-500 hover:text-red-400"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditUpdate;
