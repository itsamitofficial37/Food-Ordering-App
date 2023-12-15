import { Outlet } from "react-router-dom";

// Inside AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-4">
        Welcome to our food ordering application! We are passionate about providing delicious
        and convenient meals to our customers.
      </p>
      <p className="text-gray-700 mb-4">
        Our goal is to make your dining experience enjoyable and hassle-free. Whether you're
        craving a quick snack or a full meal, our app has got you covered.
      </p>
      <p className="text-gray-700">
        Developer: Amit
      </p>
    </div>
  );
};

export default AboutPage;
