import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("Sumit Bhade");
  const [newName, setNewName] = useState("");

  const handleUpdateName = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      setUserName(newName.trim());
      setNewName("");
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-10">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex items-center">
              <span className="flex flex-col gap-1 mr-2">
                <span className="bg-black h-0.5 w-5"></span>
                <span className="bg-black h-0.5 w-5"></span>
                <span className="bg-black h-0.5 w-5"></span>
              </span>
              WhatBytes
            </div>
          </div>

          {/* User Profile - Clickable */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                userName
              )}&background=0D8ABC&color=fff`}
              alt={userName}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">
              {userName}
            </span>
          </button>
        </div>
      </header>

      {/* Update Name Modal */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-xl">
            <Dialog.Title className="text-lg font-medium mb-4">
              Update Profile Name
            </Dialog.Title>

            <form onSubmit={handleUpdateName}>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter new name"
                className="w-full px-3 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-700 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Update
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
