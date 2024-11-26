export default function ServerCloudManagement() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-14">
          <h2 className="text-5xl font-bold text-white leading-tight mb-6">
            IT Support and Maintenance Solutions
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Optimize your systems with our tailored IT support and maintenance services.
            From proactive monitoring to issue resolution, we ensure your operations run smoothly.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 600"
            style={{ width: '100%', height: 'auto', background: 'black' }}
          >
            {/* Background */}
            <circle cx="300" cy="300" r="300" fill="black" />

            {/* Main Card */}
            <rect x="180" y="150" width="240" height="300" rx="20" fill="#333" />
            <rect x="190" y="160" width="220" height="280" rx="15" fill="white" />

            {/* Title */}
            <text
              x="300"
              y="200"
              textAnchor="middle"
              fontSize="20"
              fill="#1D2951"
              fontWeight="bold"
            >
              Task Overview
            </text>

            {/* Status Badge */}
            <circle cx="300" cy="240" r="30" fill="#4CAF50" />
            <text
              x="300"
              y="245"
              textAnchor="middle"
              fontSize="16"
              fill="white"
              fontWeight="bold"
            >
              Done
            </text>

            {/* Progress Bars */}
            <rect x="220" y="280" width="160" height="20" rx="10" fill="#FF5722" />
            <rect x="220" y="310" width="130" height="20" rx="10" fill="#FFC107" />

            {/* Chat Icon */}
            <circle cx="420" cy="100" r="35" fill="#4CAF50" />
            <text
              x="420"
              y="105"
              textAnchor="middle"
              fontSize="14"
              fill="white"
              fontWeight="bold"
            >
              Chat
            </text>

            {/* Email Icon */}
            <g transform="translate(380, 380)">
              <rect x="0" y="0" width="80" height="50" rx="10" fill="#007BFF" />
              <polygon points="0,0 40,30 80,0" fill="white" />
              <text
                x="40"
                y="35"
                textAnchor="middle"
                fontSize="14"
                fill="white"
                fontWeight="bold"
              >
                Mail
              </text>
            </g>

            {/* Decorative Circles */}
            <circle cx="80" cy="100" r="15" fill="#FFD700" />
            <circle cx="100" cy="150" r="10" fill="#4CAF50" />
            <circle cx="130" cy="200" r="8" fill="#007BFF" />

            {/* Modern Tree Icon */}
            <g transform="translate(140, 360)">
              <circle cx="20" cy="20" r="20" fill="#FF8C00" />
              <rect x="15" y="40" width="10" height="60" fill="#FF8C00" />
              <rect x="0" y="100" width="40" height="15" fill="#FFD700" />
              <circle cx="10" cy="120" r="10" fill="#1D2951" />
              <circle cx="30" cy="120" r="10" fill="#1D2951" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
