
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-10 overflow-hidden">
      <div className="absolute inset-0 bg-no-repeat bg-center opacity-10 pointer-events-none">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" fill="rgba(255, 255, 255, 0.05)" />
        </svg>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-200">About Us</h4>
            <p className="text-base text-gray-400 leading-relaxed">
              We are a leading digital agency providing a wide range of services from web design to app development, helping businesses thrive in the digital age.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-200">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/services/website-development" className="hover:text-[#00aaff] transition-colors duration-300">Web Development</a></li>
              <li><a href="/services/hr-services" className="hover:text-[#00aaff] transition-colors duration-300">HR Services</a></li>
              <li><a href="/services/server-cloud-management" className="hover:text-[#00aaff] transition-colors duration-300">Server & Cloud Management</a></li>
              <li><a href="/services/it-consulting" className="hover:text-[#00aaff] transition-colors duration-300">IT Consulting And Strategy</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-200">More Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/services/website-development" className="hover:text-[#00aaff] transition-colors duration-300">App Development</a></li>
              <li><a href="/services/server-cloud-management" className="hover:text-[#00aaff] transition-colors duration-300">Server & Cloud Management</a></li>
              <li><a href="/services/website-development" className="hover:text-[#00aaff] transition-colors duration-300">UI/UX Design</a></li>
              <li><a href="/services/it-support-maintenance" className="hover:text-[#00aaff] transition-colors duration-300">IT Support And Maintenance</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-200">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="hover:text-[#00aaff] transition-colors duration-300">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" className="hover:text-[#00aaff] transition-colors duration-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="hover:text-[#00aaff] transition-colors duration-300">
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a href="#" className="hover:text-[#00aaff] transition-colors duration-300">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 BIGMAC. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed by BIGMAC</p>
        </div>
      </div>
    </footer>
  );
}
