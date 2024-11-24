
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "Web designing & Development",
    image: "/assets/banner/image3.jpg",
    description: "A sleek, responsive design for modern businesses.",
    link: "/services/website-development",
  },
  {
    id: 2,
    title: "HR Services",
    image: "/assets/banner/image4.jpg",
    description: "A seamless shopping experience for online stores.",
    link: "/services/hr-services",
  },
  {
    id: 3,
    title: "Server & Cloud Management",
    image: "/assets/banner/image1.jpg",
    description: "Elegant and user-friendly Server & Cloud Management",
    link: "/services/server-cloud-management",
  },
  {
    id: 4,
    title: "IT Support And Maintenance",
    image: "/assets/banner/image6.jpg",
    description: "IT Support And Maintenance",
    link: "/services/it-support-maintenance",
  },
];

const PortfolioSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto h-auto py-8 px-4 sm:py-10 sm:px-20">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-white mb-4 sm:mb-8">
        Portfolio
      </h2>
      <Slider {...settings}>
        {portfolioItems.map((item) => (
          <div key={item.id} className="px-1 sm:px-4">
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="relative mx-auto w-full h-[40vh] sm:h-[50vh] overflow-hidden rounded-md sm:rounded-xl shadow-md sm:shadow-lg cursor-pointer">
                <Image
                  alt={item.title}
                  src={item.image}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-2 sm:p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-base sm:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 text-white cursor-pointer bg-blue-600 hover:bg-blue-700 p-2 sm:p-3 rounded-full transform -translate-y-1/2 shadow-md transition-all duration-300"
    style={{ top: "50%", zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowRight size={18} />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 text-white cursor-pointer bg-blue-600 hover:bg-blue-700 p-2 sm:p-3 rounded-full transform -translate-y-1/2 shadow-md transition-all duration-300"
    style={{ top: "50%", zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowLeft size={18} />
  </div>
);

export default PortfolioSlider;
