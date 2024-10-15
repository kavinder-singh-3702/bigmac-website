
"use client";
import {
  FaCode,
  FaCog,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";

export const serviceData = [
  {
    id: "website-development",
    title: "Web Development",
    shortDesc:
      "Full-stack web development services. Get seamless experiences with custom design websites.",
    details:
      "Our services include full-stack development to build robust websites tailored to your needs.",
    icon: FaCode,
  },
  {
    id: "epc-project",
    title: "EPC Installation & Management",
    shortDesc:
      "Secure and scalable e-commerce platforms that transform visitors into customers.",
    details:
      "We offer exceptional e-commerce website development for limitless online possibilities.",
    icon: FaCog,
  },
  {
    id: "hr-services",
    title: "HR Services",
    shortDesc:
      "End-to-end digital marketing solutions to amplify your online presence.",
    details:
      "Comprehensive marketing strategies designed to grow your business online.",
    icon: FaChartBar,
  },
];

const Services = () => {
  const handleCardClick = (id) => {
    window.open(`/services/${id}`, "_blank");
  };

  return (
    <section
      id="services"
      className="relative py-12 px-6 sm:px-8 lg:px-24 text-white"
      style={{ marginTop: "-80px" }}
    >
      <h1 className="text-4xl sm:text-6xl lg:text-5xl mt-20 font-bold tracking-wider text-center mb-16">
        <span className="text-white">Our</span>{" "}
        <span className="text-[#00aaff]">Services</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service.id)}
            className="group relative bg-[#121212] rounded-2xl shadow-lg p-6 sm:p-8 h-auto sm:h-72 lg:h-80 flex flex-col justify-between cursor-pointer border border-[#2a2a2a] hover:border-[#00aaff] hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00aaff] transition-all duration-500 opacity-80"></div>

            <div className="text-4xl sm:text-5xl text-[#00aaff] mb-2 sm:mb-4">
              <service.icon />
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold mb-1 sm:mb-2 group-hover:text-[#00aaff] transition-colors duration-300">
              {service.title}
            </h2>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              {service.shortDesc}
            </p>

            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-2xl sm:text-3xl text-[#00aaff] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-3 group-hover:scale-110">
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
