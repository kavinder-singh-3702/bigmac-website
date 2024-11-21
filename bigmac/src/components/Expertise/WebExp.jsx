"use client";
import React from "react";

const WebDevelopmentExpertise = () => {
  const categories = [
    {
      title: "UX/UI Design",
      description:
        "Our team designs intuitive and engaging user experiences (UX) and interfaces (UI) that keep your visitors coming back. We focus on user-centric design, ensuring your website or app is easy to navigate, visually appealing, and optimized for conversions.",
    },
    {
      title: "App Development",
      description:
        "We create custom mobile apps for iOS and Android that deliver a seamless experience across devices. From simple apps to complex, feature-rich solutions, we build secure, scalable apps that meet your business objectives.",
    },
    {
      title: "IT Consulting & Strategy",
      description:
        "Our IT consulting services help businesses optimize their technology strategy, implement new solutions, and improve operational efficiency. We offer expert guidance on cloud solutions, digital transformation, and IT infrastructure to help you stay ahead of the competition.",
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-5xl font-extrabold text-white text-center mb-8">
          More Services
        </h2>
        <p className="text-lg text-center mb-12 text-gray-300">
          At Bigmac, we combine innovative design with technical excellence to
          deliver impactful, user-centric web solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-xl shadow-lg border border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative group"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 bg-gradient-to-r from-black via-blue-900 to-blue-900 rounded-xl blur-lg transition-all duration-500"></div>
              <h3 className="text-3xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <p className="text-md text-gray-300">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentExpertise;
