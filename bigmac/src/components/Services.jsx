
"use client";
import {
  FaCode,
  FaCog,
  FaChartBar,
  FaArrowRight,
  FaMobileAlt, FaCloud, FaPalette, FaTools, FaChartLine, FaDatabase, FaCheck ,
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
  {
    id: "app-development",
    title: "App Development",
    shortDesc: "Building sleek, functional mobile apps.",
    details: "Create mobile applications with intuitive designs and robust functionality.",
    icon: FaMobileAlt,
  },
  {
    id: "server-cloud-management",
    title: "Server & Cloud Management",
    shortDesc: "Reliable server and cloud solutions.",
    details: "Optimize your business with secure and scalable server solutions.",
    icon: FaCloud,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Intelligent solutions for smarter business.",
    details: "Crafting user-centric designs for exceptional digital experiences.",
    icon: FaPalette,
  },
  {
    id: "it-support-maintenance",
    title: "IT Support And Maintenance",
    shortDesc: "Always-on IT support and upkeep.",
    details: "Ensuring your IT systems are always operational and up-to-date.",
    icon: FaTools,
  },
  {
    id: "it-consulting",
    title: "IT Consulting And Strategy",
    shortDesc: "Strategic IT guidance and solutions.",
    details: "Providing expert insights to drive your IT goals and objectives.",
    icon: FaChartLine,
  },
  {
    id: "data-analytics-bi",
    title: "Data Analytics And BI",
    shortDesc: "Transforming data into actionable insights.",
    details: "Leverage business intelligence to make data-driven decisions.",
    icon: FaDatabase,
  },
  {
    id: "qa-testing",
    title: "Quality Assurance And Testing",
    shortDesc: "Ensuring flawless performance.",
    details: "Delivering high-quality products with rigorous testing and QA practices.",
    icon: FaCheck,
  },
];
const Services = () => {
  const handleCardClick = (id) => {
    window.open(`/services/${id}`, "_blank");
  };

  return (
    <section
      id="services"
      className="relative py-12 px-6 sm:px-8 lg:px-24 text-white bg-black"
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
