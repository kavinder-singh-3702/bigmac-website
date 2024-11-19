"use client";
import Image from "next/image";
import { FaLightbulb, FaRocket, FaCheckCircle } from "react-icons/fa";
import { MdDevices, MdSecurity } from "react-icons/md";
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
            "AI and Machine Learning Solutions",
            "Blockchain Solutions",
            "Cybersecurity Solutions",
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
          <h2 className="text-3xl font-bold text-white mb-4">UX/UI Design</h2>
          <p className="text-gray-400 text-base leading-relaxed">
          A great website is built on a strong foundation of user experience (UX) and user interface (UI) design. Our team is committed to creating seamless, intuitive experiences that make it easy for your users to engage with your brand. We use modern design principles to craft interfaces that are both aesthetically pleasing and highly functional.
          We ensure that every interaction on your site is simple and enjoyable, leading to higher engagement and increased conversions. Our design approach is both creative and data-driven, ensuring that every element contributes to the overall success of your online presence.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <FaLightbulb className="text-blue-400 text-4xl mr-4 transition-transform duration-300 transform hover:rotate-12" />,
              title: "Customizable Solutions",
              description: "Designed uniquely for your business needs.",
            },
            {
              icon: <MdDevices className="text-blue-400 text-4xl mr-4 transition-transform duration-300 transform hover:scale-110" />,
              title: "Responsive Design",
              description: "Seamlessly adaptable to any device.",
            },
            {
              icon: <FaRocket className="text-blue-400 text-4xl mr-4 transition-transform duration-300 transform hover:-rotate-6" />,
              title: "SEO-friendly Development",
              description: "Enhance your online visibility.",
            },
            {
              icon: <MdSecurity className="text-blue-400 text-4xl mr-4 transition-transform duration-300 transform hover:scale-110" />,
              title: "Seamless Integration",
              description: "Effortlessly fits into your systems.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 border border-gray-700 rounded-lg shadow-lg bg-black transition-shadow duration-300 hover:shadow-xl"
            >
              {feature.icon}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col lg:flex-row p-6 rounded-lg">
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <Image
              src="/assets/banner/image2.jpg"
              alt="Web Development Illustration"
              width={500}
              height={160}
              className="w-full h-40 object-cover mb-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-2xl font-bold text-white mb-4">Choose Our QA & Testing</h2>
            <p className="text-gray-400 mb-4">Ensuring Flawless Application Performance</p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FaCheckCircle className="text-blue-400 mr-2" />
                Comprehensive testing strategies
              </li>
              <li className="flex items-center text-gray-400">
                <FaCheckCircle className="text-blue-400 mr-2" />
                Automated testing tools
              </li>
              <li className="flex items-center text-gray-400">
                <FaCheckCircle className="text-blue-400 mr-2" />
                Experienced QA team
              </li>
              <li className="flex items-center text-gray-400">
                <FaCheckCircle className="text-blue-400 mr-2" />
                Regression testing for stable releases
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Web Development FAQs</h2>
          <div className="space-y-4">
            {[
              {
                question: "What Technologies Do You Use For Web Development?",
                answer: "We use modern technologies such as React, Next.js, Node.js, and other cutting-edge tools to create dynamic, high-performance applications.",
              },
              {
                question: "How Long Does It Take To Develop A Website?",
                answer: "Timelines vary based on project scope, typically ranging from a few weeks to a few months depending on complexity.",
              },
              {
                question: "Do You Provide Maintenance After The Website Is Launched?",
                answer: "Absolutely. We offer comprehensive support and maintenance to keep your site updated and secure.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between w-full text-left text-white font-semibold py-3 hover:text-blue-400"
                >
                  {faq.question}
                  <span>{faqOpen === index ? "-" : "+"}</span>
                </button>
                {faqOpen === index && <p className="text-gray-400 pl-4 mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>   
    </div>
  <Footer />
  </>
  );
}
