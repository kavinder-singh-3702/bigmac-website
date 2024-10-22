
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
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 top-0">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            priority={true}
          />
        </Link>
        <button
          className="block lg:hidden text-gray-600 dark:text-gray-300"
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
        <ul className="hidden lg:flex items-center gap-8 pr-12">
          <li>
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li className="relative dropdown">
            <span
              className="cursor-pointer hover:text-blue-300 flex items-center"
              onClick={toggleDropdown}
            >
              Services
              <ChevronDownIcon className="w-5 h-5 ml-1" />
            </span>

            {isDropdownOpen && (
              <ul className="absolute bg-white shadow-lg mt-2 rounded-lg p-4 text-gray-900 w-48 dark:bg-gray-800 dark:text-gray-200">
                <li className="py-1">
                  <Link
                    href="/services/website-development"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    Website Development
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/epc-project"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    EPC Project Work
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    href="/services/hr-services"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    HR Services
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-300"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-300"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 z-40 bg-gray-900 bg-opacity-90 backdrop-blur-lg flex flex-col items-start p-6 transition-transform transform lg:hidden`}
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
            <Link href="/" className="block w-full text-lg hover:text-blue-300" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
    
          <li className="py-2">
            <span
              className="block w-full cursor-pointer text-lg hover:text-blue-300 flex items-center justify-between"
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
                    className="block hover:text-blue-300"
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/epc-project"
                    className="block hover:text-blue-300"
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    EPC Project Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/hr-services"
                    className="block hover:text-blue-300"
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    HR Services
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
              className="block w-full text-lg hover:text-blue-300"
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
              className="block w-full text-lg hover:text-blue-300"
            >
              Contact
            </button>
          </li>
      </div>
    </header>
  );
}

