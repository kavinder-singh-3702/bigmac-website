
"use client";
import React from "react";

const WebDevelopmentExpertise = () => {
  const categories = [
    {
      title: "HR Services",
      description:
        "At BIGMAC we provide expert recruitment services for industries like Satellite Communication, Broadcasting, Telecom Networking, IT Software, and Aviation. As a founder with hands-on experience transitioning from engineer to manager, I understand the technical needs and challenges of these industries, ensuring we find the right talent for your business.",
      link: "/services/hr-services", 
    },
    {
      title: "IT Consulting & Strategy",
      description:
        "Our IT consulting services help businesses optimize their technology strategy, implement new solutions, and improve operational efficiency. We offer expert guidance on cloud solutions, digital transformation, and IT infrastructure to help you stay ahead of the competition.",
      link: "/services/it-support-maintenance", 
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          More Services
        </h2>
        <p className="text-lg text-center mb-12 text-gray-300">
          At Bigmac, we combine innovative design with technical excellence to
          deliver impactful, user-centric web solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black p-6 rounded-xl shadow-lg border border-gray-700 transform transition-transform duration-300 relative group"
            >
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 bg-gradient-to-r from-black to-blue-900 rounded-xl blur-md transition-all duration-500"></div>
              <h3 className="text-2xl font-semibold mb-4 relative text-white z-10">
                {category.title}
              </h3>
              <p className="text-md text-gray-300 relative z-10">
                {category.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentExpertise;
