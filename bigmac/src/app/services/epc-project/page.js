export default function EPCProject() {
  return (
    <>
  
      <section className="min-h-screen flex flex-col md:flex-row justify-between items-center bg-black text-white px-8 pt-16 md:pt-0 relative">
        <div className="md:w-1/2 text-left md:pr-10 mb-8 md:mb-0 pl-4 md:pl-10">
          <h1 className="mt-8 text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-white tracking-wide leading-tight ml-4 md:ml-8">
            EPC Project Work - Services
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-200 leading-relaxed ml-4 md:ml-8"> 
            Our EPC (Engineering, Procurement, and Construction) services help deliver large-scale projects on time.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="w-full h-auto max-w-[500px] max-h-[500px]">
            <circle cx="250" cy="250" r="220" stroke="black" strokeWidth="5" fill="#222" />
            <path d="M250 250 L250 30 A220 220 0 0 1 470 250 Z" fill="#f97316" />
            <path d="M250 250 L250 30 A220 220 0 0 0 30 250 Z" fill="#1d4ed8" />
            <path d="M250 250 L470 250 A220 220 0 0 1 250 470 Z" fill="#16a34a" />
            <path d="M250 250 L30 250 A220 220 0 0 0 250 470 Z" fill="#eab308" />
            <circle cx="250" cy="250" r="100" fill="#111" />
            <text x="250" y="260" fontSize="45" fill="white" fontWeight="bold" textAnchor="middle">
              EPC
            </text>
            <text x="350" y="150" fontSize="18" fill="white" textAnchor="middle" fontWeight="bold">
              Export Promotion
            </text>
            <text x="150" y="150" fontSize="18" fill="white" textAnchor="middle" fontWeight="bold">
              Services
            </text>
            <text x="350" y="350" fontSize="18" fill="white" textAnchor="middle" fontWeight="bold">
              Procurement
            </text>
            <text x="150" y="350" fontSize="18" fill="white" textAnchor="middle" fontWeight="bold">
              Engineering
            </text>
            <g>
              <circle cx="300" cy="100" r="20" fill="#222" />
              <text x="300" y="110" fontSize="30" fill="white" textAnchor="middle">🔊</text>
            </g>
            <g>
              <circle cx="200" cy="100" r="20" fill="#222" />
              <text x="200" y="110" fontSize="30" fill="white" textAnchor="middle">⚙️</text>
            </g>
            <g>
              <circle cx="300" cy="400" r="20" fill="#222" />
              <text x="300" y="410" fontSize="30" fill="white" textAnchor="middle">🔧</text>
            </g>
            <g>
              <circle cx="200" cy="400" r="20" fill="#222" />
              <text x="200" y="410" fontSize="30" fill="white" textAnchor="middle">🛠️</text>
            </g>
          </svg>
        </div>
      </section>

      <section className="bg-black text-white py-16 md:py-24 px-8 md:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-transparent bg-clip-text bg-white leading-snug">
            Our Work
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 md:mb-16">
            Take a look at some of the cutting-edge solutions we`ve created for businesses around the globe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-10 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl border border-gray-700 hover:border-green-200 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Project Planning</h3>
              <p className="text-gray-300">Talent Acquisition</p>
            </div>
            <div className="p-6 md:p-10 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl border border-gray-700 hover:border-green-200 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Engineering Solutions</h3>
              <p className="text-gray-300">Payroll Management</p>
            </div>
            <div className="p-6 md:p-10 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl border border-gray-700 hover:border-green-200 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Construction Management</h3>
              <p className="text-gray-300">Performance Monitoring</p>
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
          <h2 className="text-5xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-100 to-blue-500 animate-pulse">
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

      <section id="how-it-works" className="relative bg-gradient-to-b from-black via-dark-blue to-light-blue text-white py-10 sm:py-16 md:py-28 px-4 sm:px-6 md:px-8 overflow-hidden">

      <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-900 to-indigo-700 opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-36 sm:w-48 h-36 sm:h-48 bg-gradient-to-br from-cyan-400 to-light-blue opacity-40 rounded-full blur-3xl"></div>

      <div className="container mx-auto text-center z-10 relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-white tracking-wider uppercase">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 md:gap-16 z-10">
          <div className="relative group p-6 sm:p-8 md:p-10 bg-gradient-to-r from-blue-900 to-gray-800 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:bg-gradient-to-br from-cyan-700 to-indigo-800">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 tracking-wide group-hover:text-yellow-300 transition duration-500">
                Step 1: Consultation
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                We deeply understand your business goals to craft the perfect solution.
              </p>
            </div>
          </div>
          
          <div className="relative group p-6 sm:p-8 md:p-10 bg-gradient-to-r from-blue-900 to-gray-800 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:bg-gradient-to-br from-cyan-700 to-blue-600">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 tracking-wide group-hover:text-green-400 transition duration-500">
                Step 2: Design & Development
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Our team builds custom solutions uniquely tailored to your needs.
              </p>
            </div>
          </div>
          
          <div className="relative group p-6 sm:p-8 md:p-10 bg-gradient-to-r from-blue-900 to-gray-800 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:bg-gradient-to-br from-cyan-700 to-indigo-800">
            <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 tracking-wide group-hover:text-red-400 transition duration-500">
                Step 3: Launch & Support
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                We ensure a seamless launch and provide continuous support post-launch.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-blue-900 opacity-20 pointer-events-none"></div>
      </section>
      <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-8">
            <div
              className="absolute inset-0 bg-no-repeat bg-center opacity-10 pointer-events-none"
            ></div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8 relative z-10">
              <div className="text-lg font-semibold mb-6 md:mb-0 text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
                © 2024 My Company
              </div>
              <nav>
                <ul className="flex space-x-8 text-lg font-medium text-gray-400">
                  <li>
                    <a href="#" className="relative group hover:text-[#00aaff] transition duration-300">
                      Privacy Policy
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00aaff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="relative group hover:text-[#00aaff] transition duration-300">
                      Terms of Service
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00aaff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="relative group hover:text-[#00aaff]-300 transition duration-300">
                      Contact Us
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00aaff]-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
    </>
  );
}

