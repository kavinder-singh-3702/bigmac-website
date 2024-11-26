"use client";
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import Footer from "@/components/Footer";

export default function HRServices() {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    });
  }, [controls]);
  return (
    <>
      <section className="relative h-[90vh] flex flex-col justify-center bg-gradient-to-b from-black via-[#0a0a0a] to-[#050505] text-white px-6 sm:px-8 pt-16 md:pt-0 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="w-[600px] h-[350px] opacity-30 blur-[160px] rounded-full absolute top-32 left-10 animate-floating"></div>
          <div className="w-72 h-72 border-4 border-[#00aaff] rounded-full absolute bottom-32 right-20 animate-slowSpin scale-105 transition-transform duration-500 shadow-2xl shadow-[#00ccff]/50"></div>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full h-full px-4 md:px-12 lg:px-24 space-y-10 md:space-y-0">
          <div className="md:w-1/2 space-y-6 text-center md:text-left transition-transform transform duration-700 ease-in-out">
            <h1 className="text-4xl sm:text-4xl font-bold bg-clip-text text-transparent bg-white leading-tight transition duration-500 ease-in-out drop-shadow-lg">
            Specialized HR Services for Technical Industries
            </h1>
            <p className="text-md md:text-xl font-normal max-w-2xl mx-auto md:mx-0 text-gray-300 leading-relaxed tracking-wide transition-colors duration-300 ease-in">
            At BIGMAC, we provide expert recruitment services for industries like Satellite Communication, Broadcasting, Telecom Networking, IT Software, and Aviation. As a founder with hands-on experience as both an engineer to manager, I understand the technical needs and challenges of these industries, ensuring we find the right talent for your business.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <svg className="hidden sm:block w-[450px] h-[450px] relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
              <defs>
                <radialGradient id="centralGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: "#00ccff", stopOpacity: 0.9 }} />
                  <stop offset="100%" style={{ stopColor: "#0033ff", stopOpacity: 0.6 }} />
                </radialGradient>
              </defs>
              <circle cx="250" cy="250" r="70" fill="url(#centralGradient)" className="glow-center" />
              <text x="250" y="260" fontSize="26" textAnchor="middle" fill="white" className="font-bold">HR Core</text>

              <g className="hover-group transition-transform duration-300 group">
                <circle cx="100" cy="100" r="50" fill="url(#centralGradient)" />
                <text x="100" y="105" fontSize="16" textAnchor="middle" fill="white">Recruitment</text>
                <circle cx="100" cy="100" r="55" fill="none" stroke="#00aaff" strokeWidth="2" />
                <rect x="60" y="110" width="80" height="40" rx="10" ry="10" fill="#00aaff" opacity="0" className="tooltip transition-opacity duration-300">
                  <text x="100" y="135" textAnchor="middle" fill="white" fontSize="12">Find top talent</text>
                </rect>
              </g>

              <g className="hover-group transition-transform duration-300 group">
                <circle cx="400" cy="100" r="50" fill="url(#centralGradient)" />
                <text x="400" y="105" fontSize="16" textAnchor="middle" fill="white">Payroll</text>
                <circle cx="400" cy="100" r="55" fill="none" stroke="#00aaff" strokeWidth="2" />
                <rect x="360" y="110" width="80" height="40" rx="10" ry="10" fill="#00aaff" opacity="0" className="tooltip transition-opacity duration-300">
                  <text x="400" y="135" textAnchor="middle" fill="white" fontSize="12">Manage payroll</text>
                </rect>
              </g>

              <g className="hover-group transition-transform duration-300 group">
                <circle cx="100" cy="400" r="50" fill="url(#centralGradient)" />
                <text x="100" y="405" fontSize="16" textAnchor="middle" fill="white">Onboarding</text>
                <circle cx="100" cy="400" r="55" fill="none" stroke="#00aaff" strokeWidth="2" />
                <rect x="60" y="410" width="80" height="40" rx="10" ry="10" fill="#00aaff" opacity="0" className="tooltip transition-opacity duration-300">
                  <text x="100" y="435" textAnchor="middle" fill="white" fontSize="12">Seamless process</text>
                </rect>
              </g>

              <g className="hover-group transition-transform duration-300 group">
                <circle cx="400" cy="400" r="50" fill="url(#centralGradient)" />
                <text x="400" y="405" fontSize="16" textAnchor="middle" fill="white">Benefits</text>
                <circle cx="400" cy="400" r="55" fill="none" stroke="#00aaff" strokeWidth="2" />
                <rect x="360" y="410" width="80" height="40" rx="10" ry="10" fill="#00aaff" opacity="0" className="tooltip transition-opacity duration-300">
                  <text x="400" y="435" textAnchor="middle" fill="white" fontSize="12">Employee perks</text>
                </rect>
              </g>

              <line x1="175" y1="175" x2="145" y2="145" stroke="#00aaff" strokeWidth="2" />
              <line x1="325" y1="175" x2="355" y2="145" stroke="#00aaff" strokeWidth="2" />
              <line x1="175" y1="325" x2="145" y2="355" stroke="#00aaff" strokeWidth="2" />
              <line x1="325" y1="325" x2="355" y2="355" stroke="#00aaff" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <style jsx>{`
          .glow-center {
            filter: drop-shadow(0 0 25px rgba(0, 170, 255, 1));
            animation: pulse infinite;
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          .hover-group:hover {
            transform: scale(1.01);
            transition: transform 0.3s ease-in-out;
          }

          .tooltip {
            opacity: 0;
            position: absolute;
            z-index: 10;
            pointer-events: none;
          }

          .animate-floating {
            animation: floating 5s ease-in-out infinite;
          }

          @keyframes floating {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          @media (max-width: 768px) {
            svg {
              width: 350px;
              height: 350px;
            }
          }

          @media (max-width: 640px) {
            svg {
              width: 300px;
              height: 300px;
            }

            .text-5xl {
              font-size: 2.5rem;
            }

            .text-2xl {
              font-size: 1.25rem;
            }

            .pt-16 {
              padding-top: 6rem;
            }
          }

          @media (max-width: 480px) {
            .pt-16 {
              padding-top: 8rem;
            }
          }
        `}</style>
      </section>
      <section id="our-hr-services" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 md:py-32 px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #00aaff 2px, transparent 2px)',
          backgroundSize: '40px 40px',
        }}
      ></div>
      <div className="container mx-auto text-center">
  <h2 className="text-4xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00aaff]">
    Our HR Services
  </h2>

  <div className="relative flex flex-col items-center space-y-16">
    <div className="absolute w-1 h-full bg-gradient-to-b from-[#00aaff] to-[#0033ff] left-1/2 transform -translate-x-1/2"></div>

    <div className="flex items-center space-x-8 group">
      <svg className="w-12 h-12 group-hover:rotate-105 transition-transform duration-300" viewBox="0 0 100 100"></svg>
      <div className="p-6 md:p-10 rounded-xl shadow-lg border-2 border-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-black transition-transform transform hover:border-[#00aaff] hover:bg-opacity-90 backdrop-blur-md group-hover:shadow-blue-400/50">
        <h3 className="text-xl md:text-2xl font-semibold text-white">Talent Sourcing</h3>
        <ul className="text-gray-400 mt-4 max-w-md space-y-2 list-disc list-inside">
          <li>Industry Expertise: Specializing in Satellite Communication, Broadcasting, Telecom Networking, IT Software, and more, using both traditional and modern sourcing methods.</li>
          <li>Targeted Approach: Leverage deep industry knowledge to find candidates with the exact skills needed for your roles.</li>
        </ul>
      </div>
    </div>

        <div className="flex items-center space-x-8 group">
          <div className="p-6 md:p-10 rounded-xl shadow-lg border-2 border-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-black transition-transform transform hover:border-[#00aaff] hover:bg-opacity-90 backdrop-blur-md group-hover:shadow-blue-400/50">
            <h3 className="text-xl md:text-2xl font-semibold text-white">Screening & Shortlisting</h3>
            <ul className="text-gray-400 mt-4 max-w-md space-y-2 list-disc list-inside">
              <li>Technical Screening: Ensuring candidates meet specific skill requirements.</li>
              <li>Cultural Fit: Assessing technical skills and cultural alignment for seamless integration.</li>
            </ul>
          </div>
          <svg className="w-12 h-12 group-hover:rotate-105 transition-transform duration-300" viewBox="0 0 100 100"></svg>
        </div>

        <div className="flex items-center space-x-8 group">
          <svg className="w-12 h-12 group-hover:rotate-105 transition-transform duration-300" viewBox="0 0 100 100"></svg>
          <div className="p-6 md:p-10 rounded-xl shadow-lg border-2 border-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-black transition-transform transform hover:scale-105 hover:border-[#00aaff] hover:bg-opacity-90 backdrop-blur-md group-hover:shadow-blue-400/50">
            <h3 className="text-xl md:text-2xl font-semibold text-white">Recruitment & Selection</h3>
            <ul className="text-gray-400 mt-4 max-w-md space-y-2 list-disc list-inside">
              <li>Full-Cycle Recruitment: From job posting to interviews and negotiations.</li>
              <li>Custom Solutions: Tailored recruitment strategy for permanent or temporary staff.</li>
            </ul>
          </div>
        </div>
          <div className="flex items-center space-x-8 group">
            <div className="p-6 md:p-10 rounded-xl shadow-lg border-2 border-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-black transition-transform transform hover:scale-105 hover:border-[#00aaff] hover:bg-opacity-90 backdrop-blur-md group-hover:shadow-blue-400/50">
              <h3 className="text-xl md:text-2xl font-semibold text-white">Onboarding & Support</h3>
              <ul className="text-gray-400 mt-4 max-w-md space-y-2 list-disc list-inside">
                <li>Smooth Onboarding: Supporting quick integration and productivity for new hires.</li>
                <li>Retention Strategies: Assisting in employee retention to keep top talent long-term.</li>
              </ul>
            </div>
            <svg className="w-12 h-12 group-hover:rotate-105 transition-transform duration-300" viewBox="0 0 100 100"></svg>
          </div>
        <div className="flex items-center space-x-8 group">
          <svg className="w-12 h-12 group-hover:rotate-105 transition-transform duration-300" viewBox="0 0 100 100"></svg>
          <div className="p-6 md:p-10 rounded-xl shadow-lg border-2 border-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-black transition-transform transform hover:scale-105 hover:border-[#00aaff] hover:bg-opacity-90 backdrop-blur-md group-hover:shadow-blue-400/50">
            <h3 className="text-xl md:text-2xl font-semibold text-white">Backup & Replacement</h3>
            <ul className="text-gray-400 mt-4 max-w-md space-y-2 list-disc list-inside">
              <li>Quick Replacements: Fast options to minimize disruption if a hire doesn&apos;t work out.</li>
              <li>Backup Support: Ensuring critical roles are covered with backup staff.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
     </section>
      <section className="relative bg-black text-white py-16 px-8 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-60 transform scale-105"></div>
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-20">
            <defs>
              <pattern id="wave" x="0" y="0" width="100%" height="100%" patternUnits="userSpaceOnUse">
                <path
                  d="M 0 40 Q 50 80 100 40 T 200 40 T 300 40 T 400 40 T 500 40 T 600 40 T 700 40 T 800 40 T 900 40"
                  stroke="white"
                  strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)"/>
          </svg>
        </div>

        <div className="container mx-auto text-center relative">
          <h2 className="text-4xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-100 to-blue-500 animate-pulse">
            Our Vision
          </h2>
        
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            We transform businesses through innovative digital solutions, bringing creativity and technology together to build experiences that inspire and empower.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#how-it-works" className="text-gray-400 hover:text-white transition duration-300">
            <span className="block animate-bounce">Scroll Down</span>
            <svg className="w-6 h-6 mx-auto mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </a>
        </div>
      </section>
      <section className="relative bg-black text-white py-24 px-8 md:px-16 overflow-hidden">
        <div className="container mx-auto text-center relative z-0">
          <h2 className="text-4xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00aaff]">
            Why Choose Us?
          </h2>
          <p className="text-md text-gray-300 max-w-3xl mx-auto mb-12">
            We bring unparalleled expertise, tailored solutions, and a commitment to ongoing support, ensuring your team&apos;s success.
          </p>

          <div className="relative flex flex-wrap justify-center gap-12">
            <div className="group relative p-10 bg-gradient-to-tr from-gray-900 to-black rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-4 transform hover:rotate-2">
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300 ease-in-out">
                Industry Expertise
              </h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-200">
                As a technical founder, I bring hands-on experience in the industries we serve, ensuring we find the right talent.
              </p>
            </div>
            <div className="group relative p-10 bg-gradient-to-tr from-gray-900 to-black rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-4 transform hover:rotate-2">
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-pink-500 transition-colors duration-300 ease-in-out">
                Tailored Solutions
              </h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-200">
                We understand your unique needs and provide candidates with the skills and experience required for success.
              </p>
            </div>
            <div className="group relative p-10 bg-gradient-to-tr from-gray-900 to-black rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-4 transform hover:rotate-3">
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-500 transition-colors duration-300 ease-in-out">
                Efficient Process
              </h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-200">
                Our streamlined approach saves you time and resources while ensuring top-quality hires.
              </p>
            </div>
            <div className="group relative p-10 bg-gradient-to-tr from-gray-900 to-black rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-4 transform hover:rotate-3">
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-500 transition-colors duration-300 ease-in-out">
                Ongoing Support
              </h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-200">
                From recruitment to retention, we offer continuous support to ensure your team’s success.
              </p>
            </div>
          </div>
        </div>
      </section>
    <Footer />
   </>
  );
}

