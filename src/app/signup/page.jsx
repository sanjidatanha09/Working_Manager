"use client";

import React, { useState } from "react";
import axios from "axios"; // ✅ Import axios

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        formData
      ); // ✅ API route\

      console.log( response);
      console.log("User registered successfully:", response.data);

      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "",
      });

      // Optional: show success toast or redirect
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
      // Optional: show error toast
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-blue-400 rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Register User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input fields here (as before) */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block font-medium">About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="block font-medium">Profile URL</label>
          <input
            type="url"
            name="profileURL"
            value={formData.profileURL}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
