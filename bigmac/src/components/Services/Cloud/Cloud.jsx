
"use client";
import { FaLightbulb, FaRocket, FaCheckCircle } from "react-icons/fa";
import { MdDevices, MdSecurity } from "react-icons/md";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-black text-gray-400 px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <section className="relative bg-black p-10 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-10"></div>
          <h2 className="text-4xl lg:text-4xl font-bold text-white mb-6 relative z-10">
            About Us
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg relative z-10">
            We are a team of visionary developers, designers, and strategists committed to delivering cutting-edge digital solutions. With years of expertise in web development, app creation, and IT innovation, we empower businesses to thrive in a competitive digital landscape.
          </p>
          <p className="text-gray-400 mt-4 text-lg relative z-10">
            Our mission is to revolutionize the digital presence of businesses by integrating technology with creativity. From scalable web applications to secure and seamless integrations, we craft solutions that define the future.
          </p>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-900 opacity-50 rounded-full blur-3xl"></div>
        </section>
        <section className="relative bg-black p-10 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900 to-black opacity-10"></div>
          <h2 className="text-4xl lg:text-4xl font-bold text-white mb-10 relative z-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                icon: (
                  <FaLightbulb className="text-blue-400 text-5xl mb-4 transition-transform duration-300 transform hover:scale-125" />
                ),
                title: "Innovative Solutions",
                description:
                  "We embrace cutting-edge technologies to deliver unique solutions tailored to your needs.",
              },
              {
                icon: (
                  <MdDevices className="text-blue-400 text-5xl mb-4 transition-transform duration-300 transform hover:rotate-12" />
                ),
                title: "Responsive Design",
                description:
                  "Our designs ensure optimal performance and adaptability across all devices.",
              },
              {
                icon: (
                  <FaRocket className="text-blue-400 text-5xl mb-4 transition-transform duration-300 transform hover:-rotate-6" />
                ),
                title: "Performance-Driven",
                description:
                  "Every project is optimized for speed, usability, and user engagement.",
              },
              {
                icon: (
                  <MdSecurity className="text-blue-400 text-5xl mb-4 transition-transform duration-300 transform hover:scale-110" />
                ),
                title: "Data Security",
                description:
                  "Your data is protected with industry-leading practices and technologies.",
              },
              {
                icon: (
                  <FaCheckCircle className="text-blue-400 text-5xl mb-4 transition-transform duration-300 transform hover:scale-125" />
                ),
                title: "Proven Expertise",
                description:
                  "Our experienced team has a track record of delivering impactful results.",
              },
              {
                icon: (
                  <FaLightbulb className="text-blue-400 text-5xl mb-4 transition-transform duration-300 transform hover:rotate-12" />
                ),
                title: "Custom Strategies",
                description:
                  "We understand your business goals and craft bespoke strategies for success.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-center">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500 opacity-50 rounded-full blur-3xl"></div>
        </section>
      </div>
    </div>
  );
}
