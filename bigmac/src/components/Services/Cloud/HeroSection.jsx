
export default function ServerCloudManagement() {
  return (
    <section className="py-20 bg-black mt-10">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-14">
          <h2 className="text-4xl font-bold text-white leading-tight mb-6">
            Advanced Server Cloud Management
          </h2>
          <p className="text-md text-gray-300 mb-6">
            Experience cutting-edge cloud solutions tailored to your business needs.
            Our platform ensures secure, scalable, and efficient server management
            with real-time monitoring and robust security features.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
            className="w-full h-auto max-w-lg"
          >
            <defs>
              <radialGradient id="outer-background-gradient" cx="50%" cy="50%" r="100%">
                <stop offset="0%" stopColor="#111119" />
                <stop offset="100%" stopColor="black" />
              </radialGradient>
              <radialGradient id="inner-background-glow" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#1a1a33" stopOpacity="0.8" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6dd5fa" />
                <stop offset="100%" stopColor="#2980b9" />
              </linearGradient>
              <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00f6ff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="highlight-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="800" height="600" fill="url(#outer-background-gradient)" />
            <circle cx="400" cy="300" r="300" fill="url(#inner-background-glow)" opacity="0.5" />
            {/* Clouds */}
            <g opacity="0.8">
              <ellipse cx="180" cy="180" rx="140" ry="90" fill="#3a3a4f" />
              <ellipse cx="620" cy="150" rx="160" ry="100" fill="#2e2e40" />
              <ellipse cx="400" cy="400" rx="120" ry="70" fill="#444457" />
            </g>
            <g>
              <path
                d="M300 280c0-60 50-120 120-120s120 50 120 120h40c60 0 100 50 100 100s-40 100-100 100H200c-50 0-100-50-100-100s50-100 100-100h100z"
                fill="url(#cloud-gradient)"
              />
              <circle cx="400" cy="260" r="120" fill="url(#glow-gradient)" opacity="0.6" />
            </g>
            <g transform="translate(270, 320)">
              <rect x="0" y="0" width="60" height="120" rx="8" fill="#1e90ff" />
              <rect x="80" y="0" width="60" height="120" rx="8" fill="#6495ed" />
              <rect x="160" y="0" width="60" height="120" rx="8" fill="#4169e1" />
            </g>
            <g strokeWidth="2" strokeLinecap="round">
              <path
                d="M320 350c30 0 30 50 60 50s30-50 60-50"
                stroke="#99ccff"
                strokeOpacity="0.8"
              />
              <path
                d="M340 330c20 0 20 40 40 40s20-40 40-40"
                stroke="#66b2ff"
                strokeOpacity="0.7"
              />
              <path
                d="M360 310c10 0 10 30 20 30s10-30 20-30"
                stroke="#3399ff"
                strokeOpacity="0.6"
              />
            </g>
            <g fill="#ffffff" opacity="0.8">
              <circle cx="400" cy="260" r="8" />
              <circle cx="370" cy="300" r="6" />
              <circle cx="430" cy="300" r="6" />
              <circle cx="350" cy="280" r="4" />
              <circle cx="450" cy="280" r="4" />
            </g>
            <circle cx="400" cy="300" r="140" fill="url(#highlight-gradient)" opacity="0.3" />
            <circle cx="600" cy="100" r="80" fill="url(#highlight-gradient)" opacity="0.4" />
            <circle cx="200" cy="500" r="60" fill="url(#highlight-gradient)" opacity="0.4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
