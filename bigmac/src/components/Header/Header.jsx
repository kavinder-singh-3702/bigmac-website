
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false); 
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector("header").offsetHeight;

    if (section) {
      const sectionPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-black shadow-md fixed w-full z-50 top-0">
      <nav className="container mx-auto p-6 lg:pl-20 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold flex items-center">
          {/* <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            priority={true}
          /> */}

        <span className="text-white ml-4 sm:ml-20 text-2xl">BIGMAC</span>
        </Link>
        <button
          className="block lg:hidden text-gray-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <ul className="hidden lg:flex items-center gap-12 pr-24">
          <li>
            <Link
              href="/"
              className="text-gray-200 hover:text-blue-300 text-lg relative group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-blue-300 transition-all duration-500 ease-out group-hover:w-8 group-hover:left-[calc(50%-1rem)] group-hover:scale-110"></span>
            </Link>
          </li>
          <li className="relative">
            <span
              className="cursor-pointer text-gray-200 hover:text-blue-300 text-lg flex items-center group"
              onClick={toggleDropdown}
            >
              Services
              <ChevronDownIcon className="w-5 h-5 ml-1" />
              <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-blue-300 transition-all duration-500 ease-out group-hover:w-8 group-hover:left-[calc(50%-1rem)] group-hover:scale-110"></span>
            </span>
            {isDropdownOpen && (
              <ul className="absolute bg-blue-900 shadow-lg mt-2 rounded-lg p-4 text-gray-200 w-64">
                <li className="py-2">
                  <Link
                    href="/services/website-development"
                    className="text-gray-200 hover:text-blue-300 block"
                  >
                    Website Development
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/services/hr-services"
                    className="text-gray-200 hover:text-blue-300 block"
                  >
                    HR Services
                  </Link>
                </li>
               <li className="py-1">
                  <Link
                    href="/services/app-development"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    App Development
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/data-analytics-bi"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    Data Analytics And BI
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/server-cloud-management"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    Server & Cloud Management
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/ui-ux-designt"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/it-support-maintenance"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    IT Support And Maintenance
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/it-consulting"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    IT Consulting And Strategy
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/qa-testing"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    Quality Assurance And Testing
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-200 hover:text-blue-300 text-lg relative group"
            >
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-blue-300 transition-all duration-500 ease-out group-hover:w-8 group-hover:left-[calc(50%-1rem)] group-hover:scale-110"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-200 hover:text-blue-300 text-lg relative group"
            >
              Portfolio
              <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-blue-300 transition-all duration-500 ease-out group-hover:w-8 group-hover:left-[calc(50%-1rem)] group-hover:scale-110"></span>
            </button>
          </li>
          <li>
          <Link
              href="/services/website-development"
              className="text-gray-200 hover:text-blue-300 text-lg relative group"
            >
              Enquiry
              <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-blue-300 transition-all duration-500 ease-out group-hover:w-8 group-hover:left-[calc(50%-1rem)] group-hover:scale-110"></span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-200 hover:text-blue-300 text-lg relative group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-blue-300 transition-all duration-500 ease-out group-hover:w-8 group-hover:left-[calc(50%-1rem)] group-hover:scale-110"></span>
            </button>
          </li>
        </ul>
      </nav>
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 z-40 bg-black backdrop-blur-lg flex flex-col items-start p-6 transition-transform transform lg:hidden`}
      >
        <button onClick={toggleMenu} className="self-end text-white p-2 mb-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="space-y-6 text-white w-full">
          <li className="py-2">
            <Link href="/" className="block w-full text-lg text-gray-200 hover:text-blue-300" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
    
          <li className="py-2">
            <span
              className="block w-full cursor-pointer text-lg text-gray-200 hover:text-blue-300 flex items-center justify-between"
              onClick={toggleDropdown}
            >
              Services
              <ChevronDownIcon className="w-5 h-5 ml-1" />
            </span>
            {isDropdownOpen && (
              <ul className="mt-2 space-y-4 pl-4">
                <li>
                  <Link
                    href="/services/website-development"
                    className="block text-gray-200 hover:text-blue-300"
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/epc-project"
                    className="block text-gray-200 hover:text-blue-300"
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    EPC Project Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/hr-services"
                    className="block text-gray-200 hover:text-blue-300"
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    HR Services
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/app-development"
                    target="_blank"
                    className="block text-gray-200 hover:text-blue-300"
                  >
                    App Development
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/data-analytics-bi"
                    target="_blank"
                    className="block text-gray-200 hover:text-blue-300"
                  >
                    Data Analytics And BI
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/server-cloud-management"
                    target="_blank"
                    className="block text-gray-200 hover:text-blue-300"
                  >
                    Server & Cloud Management
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/ui-ux-designt"
                    target="_blank"
                    className="block text-gray-200 hover:text-blue-300"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/it-support-maintenance"
                    target="_blank"
                    className="block text-gray-200 hover:text-blue-300"
                  >
                    IT Support And Maintenance
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/it-consulting"
                    target="_blank"
                    className="block text-gray-200 hover:text-blue-300"
                  >
                    IT Consulting And Strategy
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/qa-testing"
                    target="_blank"
                    className="block text-gray-200 hover:text-blue-300"
                  >
                    Quality Assurance And Testing
                  </Link>
                </li>
              </ul>
            )}
          </li>
    
        </ul>
       <li className="py-2">
            <button
              onClick={() => {
                scrollToSection("about");
                handleLinkClick();
              }}
              className="block w-full text-gray-200 text-lg hover:text-blue-300"
            >
              About
            </button>
          </li> 
       
          <li className="py-2">
            <button
              onClick={() => {
                scrollToSection("contact");
                handleLinkClick();
              }}
              className="block w-full text-gray-200 text-lg hover:text-blue-300"
            >
              Contact
            </button>
          </li>
      </div>
    </header>
  );
}
