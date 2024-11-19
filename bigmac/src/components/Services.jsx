
//   // {
//   //   id: "epc-project",
//   //   title: "EPC Installation & Management",
//   //   shortDesc:
//   //     "Secure and scalable e-commerce platforms that transform visitors into customers.",
//   //   details:
//   //     "We offer exceptional e-commerce website development for limitless online possibilities.",
//   //   icon: FaCog,
//   // },

"use client";
import {
  FaCode,
  FaCog,
  FaChartBar,
  FaArrowRight,
  FaMobileAlt,
  FaCloud,
  FaPalette,
  FaTools,
  FaChartLine,
  FaDatabase,
  FaCheck,
} from "react-icons/fa";

export const serviceData = [
  {
    id: "website-development",
    title: "Web designing & Development",
    shortDesc:
      "Building custom, scalable websites that deliver exceptional user experiences.",
    details:
      "Our services include full-stack development to build robust websites tailored to your needs.",
    icon: FaCode,
  },
  // {
  //   id: "app-development",
  //   title: "App Development",
  //   shortDesc: "Designing sleek, high-performance mobile apps for iOS and Android platforms.",
  //   details: "Create mobile applications with intuitive designs and robust functionality.",
  //   icon: FaMobileAlt,
  // },
  {
    id: "server-cloud-management",
    title: "Server & Cloud Management",
    shortDesc: "Reliable cloud solutions and server management to keep your data secure and accessible.",
    details: "Optimize your business with secure and scalable server solutions.",
    icon: FaCloud,
  },
  // {
  //   id: "ui-ux-design",
  //   title: "UI/UX Design",
  //   shortDesc: "Creating intuitive, user-centered designs that elevate your digital experience.",
  //   details: "Crafting user-centric designs for exceptional digital experiences.",
  //   icon: FaPalette,
  // },
  {
    id: "it-support-maintenance",
    title: "IT Support And Maintenance",
    shortDesc: "Proactive IT support and maintenance to ensure your systems run smoothly 24/7.",
    details: "Ensuring your IT systems are always operational and up-to-date.",
    icon: FaTools,
  },
  // {
  //   id: "it-consulting",
  //   title: "IT Consulting And Strategy",
  //   shortDesc: "Strategic IT guidance to help you align technology with your business goals.",
  //   details: "Providing expert insights to drive your IT goals and objectives.",
  //   icon: FaChartLine,
  // },
  // {
  //   id: "data-analytics-bi",
  //   title: "Data Analytics And BI",
  //   shortDesc: "Turning data into actionable insights that drive smarter business decisions.",
  //   details: "Leverage business intelligence to make data-driven decisions.",
  //   icon: FaDatabase,
  // },
  // {
  //   id: "qa-testing",
  //   title: "Quality Assurance And Testing",
  //   shortDesc: "Ensuring flawless performance.",
  //   details: "Delivering high-quality products with rigorous testing and QA practices.",
  //   icon: FaCheck,
  // },
  {
    id: "hr-services",
    title: "HR Services",
    shortDesc:
      "Specialized HR solutions to power your tech-driven teams and industry-specific needs.",
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
      className="relative py-12 px-6 sm:px-8 lg:px-24 text-white bg-black"
      style={{ marginTop: "-80px" }}
    >
      <h1 className="text-4xl sm:text-6xl lg:text-5xl mt-20 font-bold tracking-wider text-center mb-16">
        <span className="text-white">Our</span>{" "}
        <span className="text-[#00aaff]">Services</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service.id)}
            className="group relative bg-[#121212] rounded-lg shadow-lg p-4 sm:p-6 h-60 flex flex-col justify-between cursor-pointer border border-[#2a2a2a] hover:border-[#00aaff] hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#00aaff] transition-all duration-500 opacity-80"></div>

            <div className="text-3xl sm:text-4xl text-[#00aaff] mb-2">
              <service.icon />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mb-1 group-hover:text-[#00aaff] transition-colors duration-300">
              {service.title}
            </h2>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              {service.shortDesc}
            </p>

            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-xl sm:text-2xl text-[#00aaff] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-3 group-hover:scale-110">
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
