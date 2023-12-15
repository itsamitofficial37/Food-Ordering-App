import React, { useState } from 'react';

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  return (
    <form className="max-w-md mx-auto mt-7 p-6 bg-white rounded-md shadow-md">
      <label className="block mb-2" htmlFor="name">
        Name:
      </label>
      <input
        className="w-full px-3 py-2 mb-4 border rounded-md"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label className="block mb-2" htmlFor="email">
        Email:
      </label>
      <input
        className="w-full px-3 py-2 mb-4 border rounded-md"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label className="block mb-2" htmlFor="message">
        Message:
      </label>
      <textarea
        className="w-full px-3 py-2 mb-4 border rounded-md"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button
        className="w-full px-4 py-2 text-white bg-orange-500  rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;