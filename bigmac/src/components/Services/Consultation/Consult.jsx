"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import { useState } from "react";
import Footer from "@/components/Footer";
export default function WebDevelopment() {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <>
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-6 lg:px-12">
      <aside className="bg-black p-6 w-full lg:w-1/4 border-r border-gray-700 rounded-lg lg:mr-6 mb-8 lg:mb-0 shadow-lg transition-colors duration-300">
        <h2 className="text-lg font-bold mb-6 text-white hover:text-blue-400">Our Services</h2>
        <ul className="space-y-4">
          {[
            "Web Development",
            "App Development",
            "Server & Cloud Management",
            "Data Analytics and BI",
            "Quality Assurance and Testing",
            "IT Support and Maintenance",
            "IT Consulting and Strategy",
            "UX/UI Design",
          ].map((service, index) => (
            <li
              key={index}
              className="text-gray-400 hover:text-blue-400 hover:bg-gray-800 rounded-lg p-2 transition duration-300"
            >
              <a href="#">{service}</a>
            </li>
          ))}
        </ul>
    
      </aside>
      <div className="w-full lg:w-3/4 space-y-8">
        <section className="relative bg-black rounded-lg shadow-lg p-6">
          <Image
            src="/assets/banner/image2.jpg"
            alt="Web Development Illustration"
            width={500}
            height={160}
            className="w-full h-40 object-cover mb-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          />
          <h2 className="text-3xl font-bold text-white mb-4">IT Consulting & Strategy</h2>
          <p className="text-gray-400 text-base leading-relaxed">
          Our team of IT consultants helps businesses align their technology strategies with their overall goals. We analyze your current systems, recommend best practices, and help you implement solutions that drive business growth. Whether you need cloud solutions, digital transformation, or strategic IT planning, we are here to guide you every step of the way.
          </p>
        </section>
        <section className="flex flex-col items-center bg-black p-8 rounded-lg shadow-lg gap-8">

  <div className="w-full lg:w-3/4 p-6">
    <h2 className="text-3xl font-extrabold text-white mb-6 tracking-wide text-center">
      Why Choose Us?
    </h2>
    <ul className="space-y-6">
      <li className="flex items-start text-gray-300">
        <FaCheckCircle className="text-green-400 mr-3 mt-1" />
        <div>
          <span className="font-semibold text-white">Customer-Centric Approach:</span>
          <p className="mt-1">
            We listen closely to your needs and focus on delivering a solution that fits your business. Our team collaborates with you to ensure that the end product aligns with your vision.
          </p>
        </div>
      </li>
      <li className="flex items-start text-gray-300">
        <FaCheckCircle className="text-green-400 mr-3 mt-1" />
        <div>
          <span className="font-semibold text-white">Cutting-Edge Technologies:</span>
          <p className="mt-1">
            We use the latest tools and technologies to build websites and applications that are secure, scalable, and future-ready.
          </p>
        </div>
      </li>
      <li className="flex items-start text-gray-300">
        <FaCheckCircle className="text-green-400 mr-3 mt-1" />
        <div>
          <span className="font-semibold text-white">Agile Development Process:</span>
          <p className="mt-1">
            Our agile methodology ensures faster delivery, with constant communication and adaptability to changes.
          </p>
        </div>
      </li>
      <li className="flex items-start text-gray-300">
        <FaCheckCircle className="text-green-400 mr-3 mt-1" />
        <div>
          <span className="font-semibold text-white">Ongoing Support:</span>
          <p className="mt-1">
            We don’t just deliver the project and walk away. Our team provides comprehensive support and training, ensuring that you’re comfortable with the final product.
          </p>
        </div>
      </li>
      <li className="flex items-start text-gray-300">
        <FaCheckCircle className="text-green-400 mr-3 mt-1" />
        <div>
          <span className="font-semibold text-white">Expert Team:</span>
          <p className="mt-1">
            Our in-house team is made up of skilled developers, designers, and IT consultants with years of experience in the industry.
          </p>
        </div>
      </li>
    </ul>
  </div>
</section>

   
      </div>   
    </div>
  <Footer />
  </>
  );
}
