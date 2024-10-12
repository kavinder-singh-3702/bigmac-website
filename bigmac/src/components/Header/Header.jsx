"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Mobile menu toggle

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown")) {
      setIsDropdownOpen(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("click", handleClickOutside);
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10 top-0">
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
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex items-center gap-8 pr-12`}
        >
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
            <Link href="/about" className="hover:text-blue-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
