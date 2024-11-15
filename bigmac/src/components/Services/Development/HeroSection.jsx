import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-br from-transparent to-gray-700 opacity-30 transform rotate-6" />
        <div className="absolute bottom-0 left-0 h-full w-2/3 bg-gradient-to-tr from-transparent to-gray-700 opacity-30 transform -rotate-6" />
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Services Details
        </h1>
        <p className="text-sm sm:text-lg opacity-80 mb-4">
          Discover our comprehensive range of services crafted to empower your business.
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm sm:text-base">
          <Link href="/" className="text-blue-400 hover:underline">
            Home
          </Link>
          <FaChevronRight className="text-sm" />
          <span className="text-gray-400">Services Details</span>
        </div>
      </div>
      <div className="absolute -bottom-10 -right-10 h-28 w-28 sm:h-32 sm:w-32 bg-blue-600 opacity-40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -top-10 -left-10 h-28 w-28 sm:h-32 sm:w-32 bg-blue-700 opacity-40 rounded-full blur-3xl animate-pulse delay-75" />
    </section>
  );
}
