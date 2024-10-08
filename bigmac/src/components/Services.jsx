"use client";
import {
  FaCode,
  FaDesktop,
  FaCog,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";
import Router from "next/router";

export const serviceData = [
  {
    id: "website-development",
    title: "Web Development",
    shortDesc:
      "Full-stack web development services.Finding the right website developer will help you to get the right custom design websites and a seamless experience.",
    details:
      "Our web development services include full-stack development to build robust and scalable websites.Finding the right website developer will help you to get the right custom design websites and a seamless experience.",
    icon: FaCode,
  },
  {
    id: "EPC-Project",
    title: "EPC Installation and Management",
    shortDesc:
      "E-commerce website development.Discover limitless online possibilities with our exceptional e-commerce website development services.",
    details:
      "We develop e-commerce websites that are secure, scalable, and designed to convert visitors into customers.Discover limitless online possibilities with our exceptional e-commerce website development services.",
    icon: FaCog,
  },
  {
    id: "HR-Services",
    title: "HR-Services",
    shortDesc:
      "Comprehensive digital marketing services.Amplify your online presence with our dynamic digital marketing services.",
    details:
      "We provide comprehensive digital marketing services to help you reach your target audience and grow your business online.Amplify your online presence with our dynamic digital marketing services.",
    icon: FaChartBar,
  },
];

const Services = () => {
  // const navigate = useNavigate();

  const handleCardClick = (id) => {
    Router.push(`/services/${id}`);
  };

  return (
    <section
      id="services"
      className="relative py-8 text-center text-white font-sans px-20"
      style={{ marginTop: "-70px" }}
    >
      <h1 className="text-5xl font-bold mb-20">
        <span className="text-white">Our</span>{" "}
        <span className="text-[#00aaff]">Services</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer select-none ">
        {serviceData.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service.id)}
            className="relative bg-[rgba(45,42,42,0.5)] rounded-lg shadow-lg p-6 h-72 flex flex-col justify-between transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:bg-[rgba(50,50,50,0.8)] border-2 border-[rgba(0,0,0,0.2)]"
          >
            <div className="text-6xl text-[#00aaff] mb-2 transition-transform transform hover:scale-110">
              <service.icon />
            </div>
            <h2 className="text-2xl mb-2">{service.title}</h2>
            <p className="text-base text-gray-300">{service.shortDesc}</p>
            <div className="absolute bottom-5 right-5 text-3xl text-[#00aaff] transition-transform transform hover:scale-110">
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
