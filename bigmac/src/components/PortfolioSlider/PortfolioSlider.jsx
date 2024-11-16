
// "use client";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import Slider from "react-slick";
// import Image from "next/image";

// const portfolioItems = [
//   {
//     id: 1,
//     title: "Modern Website Design",
//     image: "/assets/banner/image1.png",
//     description: "A sleek, responsive design for modern businesses.",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "E-commerce Platform",
//     image: "/assets/banner/image4.jpg",
//     description: "A seamless shopping experience for online stores.",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Mobile App Interface",
//     image: "/assets/banner/image3.jpg",
//     description: "Elegant and user-friendly mobile app designs.",
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "Creative Branding Solutions",
//     image: "/assets/banner/image2.jpg",
//     description: "Unique branding that resonates with your audience.",
//     link: "#",
//   },
// ];

// const PortfolioSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//   };

//   return (
//     <div className="w-full h-auto px-4">
//       <h2 className="text-4xl font-bold text-center text-white mb-10">
//         My Portfolio
//       </h2>
//       <Slider {...settings}>
//         {portfolioItems.map((item) => (
//           <div key={item.id} className="relative w-[80%] mx-auto h-[70vh]">
//             <div className="w-full h-full relative">
//               <Image
//                 alt={item.title}
//                 src={item.image}
//                 fill
//                 className="object-contain"
//               />
//               <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="text-sm mt-1">{item.description}</p>
//                 {/* <a
//                   href={item.link}
//                   className="text-blue-300 hover:text-blue-400 underline text-sm mt-1 inline-block"
//                 >
//                   Learn More
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// const CustomNextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-4 text-white cursor-pointer bg-blue-500 p-3 rounded-full transform -translate-y-1/2"
//     style={{ top: "50%", zIndex: 1 }}
//     onClick={onClick}
//   >
//     <FaArrowRight size={20} />
//   </div>
// );

// const CustomPrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-4 text-white cursor-pointer bg-blue-500 p-3 rounded-full transform -translate-y-1/2"
//     style={{ top: "50%", zIndex: 1 }}
//     onClick={onClick}
//   >
//     <FaArrowLeft size={20} />
//   </div>
// );

// export default PortfolioSlider;
// "use client";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import Slider from "react-slick";
// import Image from "next/image";

// const portfolioItems = [
//   {
//     id: 1,
//     title: "Modern Website Design",
//     image: "/assets/banner/image1.png",
//     description: "A sleek, responsive design for modern businesses.",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "E-commerce Platform",
//     image: "/assets/banner/image4.jpg",
//     description: "A seamless shopping experience for online stores.",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Mobile App Interface",
//     image: "/assets/banner/image3.jpg",
//     description: "Elegant and user-friendly mobile app designs.",
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "Creative Branding Solutions",
//     image: "/assets/banner/image2.jpg",
//     description: "Unique branding that resonates with your audience.",
//     link: "#",
//   },
// ];

// const PortfolioSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//   };

//   return (
//     <div className="w-full h-auto py-10 px-6">
//       <h2 className="text-4xl font-bold text-center text-white mb-8">
//         My Portfolio
//       </h2>
//       <Slider {...settings}>
//         {portfolioItems.map((item) => (
//           <div key={item.id} className="relative w-[80%] mx-auto h-[75vh]">
//             <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg">
//               <Image
//                 alt={item.title}
//                 src={item.image}
//                 fill
//                 className="object-cover transition-transform duration-500 hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <h3 className="text-2xl font-semibold text-white">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-300 mt-2">{item.description}</p>
//                 {/* <a
//                   href={item.link}
//                   className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors"
//                 >
//                   Learn More
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// const CustomNextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-4 text-white cursor-pointer bg-blue-600 hover:bg-blue-700 p-3 rounded-full transform -translate-y-1/2 shadow-md transition-all duration-300"
//     style={{ top: "50%", zIndex: 1 }}
//     onClick={onClick}
//   >
//     <FaArrowRight size={20} />
//   </div>
// );

// const CustomPrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-4 text-white cursor-pointer bg-blue-600 hover:bg-blue-700 p-3 rounded-full transform -translate-y-1/2 shadow-md transition-all duration-300"
//     style={{ top: "50%", zIndex: 1 }}
//     onClick={onClick}
//   >
//     <FaArrowLeft size={20} />
//   </div>
// );

// export default PortfolioSlider;
// "use client";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import Slider from "react-slick";
// import Image from "next/image";

// const portfolioItems = [
//   {
//     id: 1,
//     title: "Modern Website Design",
//     image: "/assets/banner/image1.png",
//     description: "A sleek, responsive design for modern businesses.",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "E-commerce Platform",
//     image: "/assets/banner/image4.jpg",
//     description: "A seamless shopping experience for online stores.",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Mobile App Interface",
//     image: "/assets/banner/image3.jpg",
//     description: "Elegant and user-friendly mobile app designs.",
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "Creative Branding Solutions",
//     image: "/assets/banner/image2.jpg",
//     description: "Unique branding that resonates with your audience.",
//     link: "#",
//   },
// ];

// const PortfolioSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//   };

//   return (
//     <div className="w-full h-auto py-10 px-6">
//       <h2 className="text-4xl font-bold text-center text-white mb-8">
//         My Portfolio
//       </h2>
//       <Slider {...settings}>
//         {portfolioItems.map((item) => (
//           <div
//             key={item.id}
//             className="relative w-[70%] mx-auto h-[80vh] transition-transform duration-300"
//           >
//             <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl bg-white">
//               <Image
//                 alt={item.title}
//                 src={item.image}
//                 fill
//                 className="object-cover transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <h3 className="text-2xl font-semibold text-white">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-300 mt-2">{item.description}</p>
//                 {/* Uncomment if you need the button */}
//                 {/* <a
//                   href={item.link}
//                   className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors"
//                 >
//                   Learn More
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// const CustomNextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-4 text-white cursor-pointer bg-blue-600 hover:bg-blue-700 p-3 rounded-full transform -translate-y-1/2 shadow-md transition-all duration-300"
//     style={{ top: "50%", zIndex: 1 }}
//     onClick={onClick}
//   >
//     <FaArrowRight size={20} />
//   </div>
// );

// const CustomPrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-4 text-white cursor-pointer bg-blue-600 hover:bg-blue-700 p-3 rounded-full transform -translate-y-1/2 shadow-md transition-all duration-300"
//     style={{ top: "50%", zIndex: 1 }}
//     onClick={onClick}
//   >
//     <FaArrowLeft size={20} />
//   </div>
// );

// export default PortfolioSlider;
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Slider from "react-slick";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Modern Website Design",
    image: "/assets/banner/image1.png",
    description: "A sleek, responsive design for modern businesses.",
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    image: "/assets/banner/image4.jpg",
    description: "A seamless shopping experience for online stores.",
    link: "#",
  },
  {
    id: 3,
    title: "Mobile App Interface",
    image: "/assets/banner/image3.jpg",
    description: "Elegant and user-friendly mobile app designs.",
    link: "#",
  },
  {
    id: 4,
    title: "Creative Branding Solutions",
    image: "/assets/banner/image2.jpg",
    description: "Unique branding that resonates with your audience.",
    link: "#",
  },
];

const PortfolioSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="w-full h-auto py-10 px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6 sm:mb-8">
        My Portfolio
      </h2>
      <Slider {...settings}>
        {portfolioItems.map((item) => (
        //   <div
        //     key={item.id}
        //     className="relative w-[60%] sm:w-[50%] mx-auto h-[70vh] sm:h-[50vh] transition-transform duration-300"
        //   >
        //     <div className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl bg-white">
        //       <Image
        //         alt={item.title}
        //         src={item.image}
        //         fill
        //         className="object-cover transition-transform duration-500"
        //       />


                  <div key={item.id} className="relative w-[80%] mx-auto h-[70vh] sm:w-[50%] sm:h-[50vh]">
            <div className="w-full h-full relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl">
              <Image
                alt={item.title}
                src={item.image}
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-3 sm:p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg sm:text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 text-white cursor-pointer bg-blue-600 hover:bg-blue-700 p-2 sm:p-3 rounded-full transform -translate-y-1/2 shadow-md transition-all duration-300"
    style={{ top: "50%", zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowRight size={16} />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 text-white cursor-pointer bg-blue-600 hover:bg-blue-700 p-2 sm:p-3 rounded-full transform -translate-y-1/2 shadow-md transition-all duration-300"
    style={{ top: "50%", zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowLeft size={16} />
  </div>
);

export default PortfolioSlider;
