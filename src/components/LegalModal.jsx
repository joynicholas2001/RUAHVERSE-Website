import React from 'react';
import { FaTimes } from 'react-icons/fa';

const LegalModal = ({ title, content, onClose }) => {
  if (!content) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 transition-colors duration-300"
            aria-label="Close modal"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <div className="overflow-y-auto p-8 prose max-w-none">
          {content}
        </div>
        <div className="p-6 border-t border-gray-200 text-right">
          <button
            onClick={onClose}
            className="btn-secondary px-6 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
