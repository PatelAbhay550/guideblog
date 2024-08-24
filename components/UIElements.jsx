"use client";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";

const UIElements = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const tailwindCode = {
    alert: `<div className="bg-blue-100 text-blue-800 p-4 rounded shadow hover:shadow-lg transition-shadow">
  <h3 className="font-bold mb-2">Alert</h3>
  <p>This is an alert message!</p>
</div>`,
    card: `<div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
  <h3 className="font-bold mb-2">Card</h3>
  <p>This is a basic card with content inside.</p>
</div>`,
    button: `<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors">
  Click Me
</button>`,
    modal: `<div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="font-bold mb-4">Modal Title</h3>
    <p>This is a modal content.</p>
    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors" onClick="toggleModal">
      Close
    </button>
  </div>
</div>`,
    dropdown: `<div className="relative">
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition-colors flex items-center">
    Select an option
    <AiOutlineDown className="ml-2" />
  </button>
  <div className="absolute mt-2 bg-white border rounded shadow-lg">
    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
      Option 1
    </a>
    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
      Option 2
    </a>
  </div>
</div>`,
    badge: `<div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
  <h3 className="font-bold mb-2">Badge</h3>
  <span className="bg-green-500 text-white py-1 px-3 rounded-full">
    New
  </span>
</div>`,
    tooltip: `<div className="relative group">
  <button className="bg-blue-500 text-white py-2 px-4 rounded transition-colors">
    Hover me
  </button>
  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded py-1 px-2">
    Tooltip content
  </div>
</div>`,
    avatar: `<div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
  <h3 className="font-bold mb-2">Avatar</h3>
  <div className="flex items-center space-x-4">
    <img src="https://via.placeholder.com/50" alt="Avatar" className="w-12 h-12 rounded-full" />
    <span>John Doe</span>
  </div>
</div>`,
    progressBar: `<div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
  <h3 className="font-bold mb-2">Progress Bar</h3>
  <div className="w-full bg-gray-200 rounded-full h-4">
    <div className="bg-blue-500 h-4 rounded-full" style={{ width: "50%" }}></div>
  </div>
</div>`,
    pagination: `<div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
  <h3 className="font-bold mb-2">Pagination</h3>
  <div className="flex space-x-2">
    <button className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition-colors">
      1
    </button>
    <button className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition-colors">
      2
    </button>
    <button className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition-colors">
      3
    </button>
  </div>
</div>`,
  };

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Alert */}
        <div className="relative bg-blue-100 text-blue-800 p-4 rounded shadow hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-2">Alert</h3>
          <p>This is an alert message!</p>
          <button
            onClick={() => handleCopy(tailwindCode.alert)}
            className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
          >
            {copiedCode === tailwindCode.alert ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        {/* Card */}
        <div className="relative bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="font-bold mb-2">Card</h3>
          <p>This is a basic card with content inside.</p>
          <button
            onClick={() => handleCopy(tailwindCode.card)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            {copiedCode === tailwindCode.card ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        {/* Button */}
        <div className="relative flex items-center justify-center bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-2">Button</h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors">
            Click Me
          </button>
          <button
            onClick={() => handleCopy(tailwindCode.button)}
            className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
          >
            {copiedCode === tailwindCode.button ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        {/* Modal */}
        <div className="relative bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-2">Modal</h3>
          <button
            onClick={toggleModal}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
          >
            Open Modal
          </button>
          {isModalOpen && (
            <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold mb-4">Modal Title</h3>
                <p>This is a modal content.</p>
                <button
                  onClick={toggleModal}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors mt-4"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <button
            onClick={() => handleCopy(tailwindCode.modal)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            {copiedCode === tailwindCode.modal ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition-colors flex items-center"
          >
            Select an option
            <AiOutlineDown className="ml-2" />
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Option 2
              </a>
            </div>
          )}
          <button
            onClick={() => handleCopy(tailwindCode.dropdown)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            {copiedCode === tailwindCode.dropdown ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        {/* Badge */}
        <div className="relative bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-2">Badge</h3>
          <span className="bg-green-500 text-white py-1 px-3 rounded-full">
            New
          </span>
          <button
            onClick={() => handleCopy(tailwindCode.badge)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            {copiedCode === tailwindCode.badge ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        {/* Tooltip */}
        <div className="relative group">
          <button className="bg-blue-500 text-white py-2 px-4 rounded transition-colors">
            Hover me
          </button>
          <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded py-1 px-2">
            Tooltip content
          </div>
          <button
            onClick={() => handleCopy(tailwindCode.tooltip)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            {copiedCode === tailwindCode.tooltip ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        {/* Avatar */}
        <div className="relative bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-2">Avatar</h3>
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
            <span>John Doe</span>
          </div>
          <button
            onClick={() => handleCopy(tailwindCode.avatar)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            {copiedCode === tailwindCode.avatar ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="relative bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="font-bold mb-2">Progress Bar</h3>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
          <button
            onClick={() => handleCopy(tailwindCode.progressBar)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            {copiedCode === tailwindCode.progressBar ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        {/* Pagination */}
        <div className="relative bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-2">Pagination</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition-colors">
              1
            </button>
            <button className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition-colors">
              2
            </button>
            <button className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition-colors">
              3
            </button>
          </div>
          <button
            onClick={() => handleCopy(tailwindCode.pagination)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            {copiedCode === tailwindCode.pagination ? <FiCheck /> : <FiCopy />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UIElements;
