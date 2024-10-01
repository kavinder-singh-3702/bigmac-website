"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Layout({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown")) {
      setIsDropdownOpen(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("click", handleClickOutside);
  }

  return (
    <div>
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
          <ul className="flex items-center gap-8 pr-12">
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
      <main className="mt-16">{children}</main>
    </div>
  );
}
