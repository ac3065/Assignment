import React from "react";
import { X } from "lucide-react"; // Optional: icon library for close button

const DeleteAlert = ({ content, onDelete, onClose }) => {
  return (
    <div className="relative bg-slate-800 text-white p-6 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Delete Task</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Content */}
      <p className="text-sm mt-4">{content}</p>

      {/* Buttons */}
      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={onDelete}
          className="flex items-center justify-center gap-1.5 text-xs md:text-sm font-medium text-rose-500 bg-rose-50 border border-rose-100 rounded-lg px-4 py-2 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
