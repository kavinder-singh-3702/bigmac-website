
export default function ServerCloudManagement() {
    return (
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left lg:pl-14 left-20">
          <h2 className="text-5xl font-extrabold text-white leading-tight mb-6 ">
            Advanced Server Cloud Management
          </h2>
            <p className="text-lg text-gray-300 mb-6">
              Experience cutting-edge cloud solutions tailored to your business needs.
              Our platform ensures secure, scalable, and efficient server management
              with real-time monitoring and robust security features.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 600"
              className="w-full h-auto max-w-md"
            >
              <defs>
                <radialGradient id="background-gradient" cx="50%" cy="50%" r="80%">
                  <stop offset="0%" stopColor="#212121" />
                  <stop offset="100%" stopColor="#000" />
                </radialGradient>
                <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#BBBBBB" />
                </linearGradient>
              </defs>
              <rect width="800" height="600" fill="url(#background-gradient)" />
              <g opacity="0.8">
                <ellipse cx="200" cy="200" rx="120" ry="80" fill="#555555" />
                <ellipse cx="600" cy="150" rx="150" ry="90" fill="#444444" />
              </g>
              <g>
                <path
                  d="M300 280c0-60 50-120 120-120s120 50 120 120h40c60 0 100 50 100 100s-40 100-100 100H200c-50 0-100-50-100-100s50-100 100-100h100z"
                  fill="url(#cloud-gradient)"
                />
              </g>
              <g transform="translate(270, 320)">
                <rect x="0" y="0" width="60" height="120" rx="8" fill="#37474F" />
                <rect x="80" y="0" width="60" height="120" rx="8" fill="#37474F" />
                <rect x="160" y="0" width="60" height="120" rx="8" fill="#37474F" />
              </g>
              <g strokeWidth="2" strokeLinecap="round">
                <path
                  d="M320 350c30 0 30 50 60 50s30-50 60-50"
                  stroke="#CCCCCC"
                />
                <path
                  d="M340 330c20 0 20 40 40 40s20-40 40-40"
                  stroke="#BBBBBB"
                />
                <path
                  d="M360 310c10 0 10 30 20 30s10-30 20-30"
                  stroke="#AAAAAA"
                />
              </g>
              <g fill="#FFFFFF" opacity="0.9">
                <circle cx="400" cy="260" r="8" />
                <circle cx="360" cy="300" r="8" />
                <circle cx="440" cy="300" r="8" />
              </g>
            </svg>
          </div>
        </div>
      </section>
    );
  }
  