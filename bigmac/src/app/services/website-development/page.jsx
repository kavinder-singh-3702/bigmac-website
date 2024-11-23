"use client";
import { useState } from "react";
import WebsiteContactUs from "@/components/WebContactUs";
import PricingPlans from "@/components/PricingPlans/PricingPlans";
import WebDevelopmentExpertise from "@/components/Expertise/WebExp";
import WebHero from "@/components/WebDev/Hero";
import Footer from "@/components/Footer";
const servicesContent = {
    "Web Development": (
      <>
          
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-white">
              Web Design & Development
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We build custom websites and web applications that not only look
              stunning but also perform seamlessly. Whether you need a static
              website to showcase your brand, a dynamic website with advanced
              functionality, or a custom web application, we&apos;ve got you covered.
              Our websites are designed to be:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Responsive: Ensuring a great experience on desktops, tablets, and mobiles.</li>
              <li>SEO Optimized: Helping you rank higher and attract more visitors.</li>
              <li>User-Friendly: Focused on providing easy navigation and engagement.</li>
              <li>Scalable & Secure: Built to grow with your business while keeping user data safe.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-white mb-4">Key Web Services We Offer</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Static Websites: Simple, professional sites to get your business online quickly.</li>
              <li>Dynamic Websites: Interactive sites with custom features and content management.</li>
              <li>Custom Web Applications: Tailored solutions for e-commerce, booking systems, portals, and more.</li>
              <li>E-Commerce Websites: Secure, conversion-optimized online stores.</li>
            </ul>
        
      </>
    ),
    "App Development": (
      <>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-white">
          App Development
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          In today&apos;s mobile-first world, having a functional and engaging app is
          crucial for any business. Our app development team is skilled in
          creating apps that are not only visually appealing but also fast,
          secure, and scalable. We use the latest technologies to build apps for
          both iOS and Android, providing a seamless experience for your customers
          on any device.
        </p>
        <h3 className="text-2xl font-semibold text-white mb-4">Key Web Services We Offer</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Static Websites: Simple, professional sites to get your business online quickly.</li>
              <li>Dynamic Websites: Interactive sites with custom features and content management.</li>
              <li>Custom Web Applications: Tailored solutions for e-commerce, booking systems, portals, and more.</li>
              <li>E-Commerce Websites: Secure, conversion-optimized online stores.</li>
            </ul>
      </>
    ),
    "UX/UI Design": (
      <>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-white">
          UX/UI Design
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          A great website is built on a strong foundation of user experience
          (UX) and user interface (UI) design. Our team is committed to creating
          seamless, intuitive experiences that make it easy for your users to
          engage with your brand. We use modern design principles to craft
          interfaces that are both aesthetically pleasing and highly functional.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          We ensure that every interaction on your site is simple and enjoyable,
          leading to higher engagement and increased conversions. Our design
          approach is both creative and data-driven, ensuring that every element
          contributes to the overall success of your online presence.
        </p>
        <h3 className="text-2xl font-semibold text-white mb-4">Key Web Services We Offer</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Static Websites: Simple, professional sites to get your business online quickly.</li>
              <li>Dynamic Websites: Interactive sites with custom features and content management.</li>
              <li>Custom Web Applications: Tailored solutions for e-commerce, booking systems, portals, and more.</li>
              <li>E-Commerce Websites: Secure, conversion-optimized online stores.</li>
            </ul>
      </>
    ),
    "Server & Cloud Management": (
      <>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-white">
        Server & Cloud Management
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          A great website is built on a strong foundation of user experience
          (UX) and user interface (UI) design. Our team is committed to creating
          seamless, intuitive experiences that make it easy for your users to
          engage with your brand. We use modern design principles to craft
          interfaces that are both aesthetically pleasing and highly functional.
        </p>
        <p className="text-gray-300 leading-relaxed">
          We ensure that every interaction on your site is simple and enjoyable,
          leading to higher engagement and increased conversions. Our design
          approach is both creative and data-driven, ensuring that every element
          contributes to the overall success of your online presence.
        </p>
        <h3 className="text-2xl font-semibold text-white mb-4">Key Web Services We Offer</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Static Websites: Simple, professional sites to get your business online quickly.</li>
              <li>Dynamic Websites: Interactive sites with custom features and content management.</li>
              <li>Custom Web Applications: Tailored solutions for e-commerce, booking systems, portals, and more.</li>
              <li>E-Commerce Websites: Secure, conversion-optimized online stores.</li>
            </ul>
      </>
    ),
    "HR Services": (
      <>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-white">
          HR Services
        </h2>
        <h2 className="text-xl md:text-xl mb-6 bg-clip-text text-transparent bg-white">
          Specialized HR Services for Technical Industries
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          At BIGMAC, we provide expert recruitment services for industries like Satellite Communication, Broadcasting, Telecom Networking, IT Software, and Aviation. 
          As a founder with hands-on experience transitioning from engineer to manager, I understand the technical needs and challenges of these industries, ensuring we find the right talent for your business.
        </p>
        <h3 className="text-2xl font-semibold text-white mb-4">Our HR Services</h3>
        <ul className="list-decimal list-inside text-gray-300 space-y-4">
          <li>
            <strong>Talent Sourcing</strong>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Industry Expertise:</strong> We specialize in recruiting professionals for Satellite Communication, Broadcasting, Telecom Networking, IT Software, and more, using both traditional and modern sourcing methods.
              </li>
              <li>
                <strong>Targeted Approach:</strong> Leverage our deep industry knowledge to find candidates with the exact skills needed for your roles.
              </li>
            </ul>
          </li>
          <li>
            <strong>Screening & Shortlisting</strong>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Technical Screening:</strong> With my technical background, we ensure candidates meet your specific skill requirements.
              </li>
              <li>
                <strong>Cultural Fit:</strong> We assess not only technical skills but also cultural alignment to help integrate new hires seamlessly into your team.
              </li>
            </ul>
          </li>
          <li>
            <strong>Recruitment & Selection</strong>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Full-Cycle Recruitment:</strong> From job posting to interviews and negotiations, we handle the entire process for you.
              </li>
              <li>
                <strong>Custom Solutions:</strong> Whether you need permanent or temporary staff, we tailor our recruitment strategy to your unique needs.
              </li>
            </ul>
          </li>
          <li>
            <strong>Onboarding & Support</strong>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Smooth Onboarding:</strong> We provide support to ensure new hires are quickly integrated and productive.
              </li>
              <li>
                <strong>Retention Strategies:</strong> We assist in employee retention, helping you keep top talent for the long term.
              </li>
            </ul>
          </li>
          <li>
            <strong>Backup & Replacement</strong>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Quick Replacements:</strong> If a hire doesn&apos;t work out, we offer fast replacement options to minimize disruption.
              </li>
              <li>
                <strong>Backup Support:</strong> For critical roles, we ensure you have backup staff ready to maintain operations.
              </li>
            </ul>
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-white mt-6 mb-4">Why Choose Us?</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li className="pl-4 text-indent">
            <strong>Customer-Centric Approach:</strong> As a technical founder, I bring hands-on experience in the industries we serve, ensuring we find the right talent.
          </li>
          <li className="pl-4 text-indent">
            <strong>Tailored Solutions:</strong> We understand your unique needs and provide candidates with the skills and experience required for success.
          </li>
          <li className="pl-4 text-indent">
            <strong>Efficient Process:</strong> Our streamlined approach saves you time and resources while ensuring top-quality hires.
          </li>
          <li className="pl-4 text-indent">
            <strong>Ongoing Support:</strong> From recruitment to retention, we offer continuous support to ensure your team’s success.
          </li>
        </ul>

        <style jsx>
        {`
          .text-indent {
            text-indent: -1.25em;
            padding-left: 1.25em;
          }
        `}
        </style>

      </>
    ),
    "IT Consulting and Strategy": (
      <>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-white">
        IT Consulting and Strategy
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
        Our team of IT consultants helps businesses align their technology strategies with their overall goals. We analyze your current systems, recommend best practices, and help you implement solutions that drive business growth. Whether you need cloud solutions, digital transformation, or strategic IT planning, we are here to guide you every step of the way.
        </p>
        <h3 className="text-2xl font-semibold text-white mt-6 mb-4">Why Choose Us?</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li className="pl-4 text-indent">
            <strong>Customer-Centric Approach:</strong> As a technical founder, I bring hands-on experience in the industries we serve, ensuring we find the right talent.
          </li>
          <li className="pl-4 text-indent">
            <strong>Tailored Solutions:</strong> We understand your unique needs and provide candidates with the skills and experience required for success.
          </li>
          <li className="pl-4 text-indent">
            <strong>Efficient Process:</strong> Our streamlined approach saves you time and resources while ensuring top-quality hires.
          </li>
          <li className="pl-4 text-indent">
            <strong>Ongoing Support:</strong> From recruitment to retention, we offer continuous support to ensure your team’s success.
          </li>
        </ul>

        <style jsx>
        {`
          .text-indent {
            text-indent: -1.25em;
            padding-left: 1.25em;
          }
        `}
        </style>
      </>
    ),
    "IT Support and Maintenance": (
      <>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-white">
        IT Support and Maintenance
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
        Our team of IT consultants helps businesses align their technology strategies with their overall goals. We analyze your current systems, recommend best practices, and help you implement solutions that drive business growth. Whether you need cloud solutions, digital transformation, or strategic IT planning, we are here to guide you every step of the way.
        </p>
        <h3 className="text-2xl font-semibold text-white mt-6 mb-4">Why Choose Us?</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li className="pl-4 text-indent">
            <strong>Customer-Centric Approach:</strong> As a technical founder, I bring hands-on experience in the industries we serve, ensuring we find the right talent.
          </li>
          <li className="pl-4 text-indent">
            <strong>Tailored Solutions:</strong> We understand your unique needs and provide candidates with the skills and experience required for success.
          </li>
          <li className="pl-4 text-indent">
            <strong>Efficient Process:</strong> Our streamlined approach saves you time and resources while ensuring top-quality hires.
          </li>
          <li className="pl-4 text-indent">
            <strong>Ongoing Support:</strong> From recruitment to retention, we offer continuous support to ensure your team’s success.
          </li>
        </ul>
        
        <style jsx>
        {`
          .text-indent {
            text-indent: -1.25em;
            padding-left: 1.25em;
          }
        `}
        </style>
        
      </>
    ),
};
export default function WebsiteDevelopment() {
  const [selectedService, setSelectedService] = useState("Web Development");
  return (
    <>
      <WebHero />
      <section className="relative bg-black text-white py-16 md:py-24 px-8 md:px-16 overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-95"></div>
  <div className="container mx-auto relative z-10 max-w-7xl">
    <h2 className="text-4xl md:text-5xl font-extrabold bg-black bg-clip-text text-white text-center mb-10">
      Web Development & Design
    </h2>
    <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto text-center mb-16 leading-relaxed">
      Elevate your digital presence with cutting-edge web development and design. Our solutions deliver innovation, engagement, and growth, tailored to make your brand stand out in a competitive landscape.
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center mb-16">
      <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mb-8 md:mb-0 md:mr-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="text-indigo-500 w-full h-full"
          fill="none"
        >
          <rect x="8" y="8" width="48" height="48" rx="8" className="fill-current" />
          <path
            d="M20 20h24v24H20z"
            className="fill-black"
          />
          <path
            d="M32 16v32M16 32h32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="text-center md:text-left max-w-xl">
      <h3 className="text-2xl font-semibold mb-4">High-Performance Websites</h3>
        <p className="text-lg text-gray-300 leading-loose">
          Crafting high-performance, visually stunning, and functional websites that drive growth. From minimalistic designs to dynamic, interactive interfaces, we cater to your unique vision.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row-reverse items-center justify-center">
    <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mb-8 md:mb-0 md:ml-8 hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 350" width="400" height="350">
        <rect x="0" y="0" width="400" height="350" fill="#1E2A47" />
        <rect x="5" y="5" width="90" height="340" fill="#334866" rx="10" />
        <text x="15" y="25" fill="#FFF" font-size="12" font-weight="bold">MENU</text>
        <circle cx="15" cy="50" r="5" fill="#4CAF50" />
        <text x="30" y="53" fill="#FFF" font-size="8">Dashboard</text>
        <circle cx="15" cy="80" r="5" fill="#FF9800" />
        <text x="30" y="83" fill="#FFF" font-size="8">Projects</text>
        <circle cx="15" cy="110" r="5" fill="#03A9F4" />
        <text x="30" y="113" fill="#FFF" font-size="8">Settings</text>
        <rect x="10" y="310" width="60" height="15" fill="#4CAF50" rx="5" />
        <text x="20" y="323" fill="#FFF" font-size="8" font-weight="bold">Logout</text>

        <rect x="100" y="10" width="280" height="100" fill="#4678D6" rx="10" />
        <text x="110" y="25" fill="#FFF" font-size="12" font-weight="bold">UI/UX Dashboard</text>
        <rect x="110" y="35" width="260" height="60" fill="#FFF" rx="8" />
        <text x="120" y="50" fill="#2A3B6A" font-size="10" font-weight="bold">Design Progress</text>
        <rect x="120" y="60" width="180" height="8" fill="#4CAF50" rx="4" />
        <rect x="120" y="75" width="160" height="8" fill="#03A9F4" rx="4" />
        <rect x="120" y="90" width="140" height="8" fill="#FF9800" rx="4" />

        <rect x="100" y="120" width="280" height="100" fill="#2A3B6A" rx="10" />
        <text x="110" y="135" fill="#FFF" font-size="12" font-weight="bold">Team Activity</text>
        <circle cx="120" cy="160" r="8" fill="#FBC02D" />
        <text x="135" y="163" fill="#FFF" font-size="8">Alex</text>
        <circle cx="120" cy="185" r="8" fill="#03A9F4" />
        <text x="135" y="188" fill="#FFF" font-size="8">Jordan</text>
        <circle cx="120" cy="210" r="8" fill="#FF9800" />
        <text x="135" y="213" fill="#FFF" font-size="8">Taylor</text>

        <rect x="350" y="10" width="40" height="15" fill="#FF9800" rx="5" />
        <text x="355" y="22" fill="#FFF" font-size="8">Alerts</text>
        <rect x="350" y="30" width="40" height="15" fill="#4CAF50" rx="5" />
        <text x="355" y="42" fill="#FFF" font-size="8">Messages</text>
      </svg>
    </div>
    <div className="text-center md:text-left max-w-xl">
      <h3 className="text-2xl font-semibold mb-4">Responsive & Seamless</h3>
      <p className="text-lg text-gray-300 leading-loose">
        Leveraging cutting-edge technologies, we deliver responsive, user-friendly websites that adapt to all devices, ensuring seamless experiences and optimized performance.
      </p>
    </div>
  </div>
  </div>
</section> 
      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-8 md:py-24 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* Sidebar */}
          <aside className="bg-black p-6 w-full md:w-1/3 lg:w-1/4 border border-gray-700 rounded-lg shadow-lg transition-colors duration-300">
            <h2 className="text-lg font-bold mb-4 text-white hover:text-blue-400">
              Additional Services We Provide
            </h2>
            <ul className="space-y-4">
              {[
                "Web Development",
                "App Development",
                "Server & Cloud Management",
                "HR Services",
                "IT Support and Maintenance",
                "IT Consulting and Strategy",
                "UX/UI Design",
              ].map((service) => (
                <li
                  key={service}
                  className={`cursor-pointer text-gray-400 hover:text-blue-400 hover:bg-gray-800 rounded-lg p-2 transition duration-300 ${
                    selectedService === service ? "bg-gray-800 text-blue-400" : ""
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  {service}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {servicesContent[selectedService] || (
              <p className="text-gray-300">Content coming soon...</p>
            )}
          </div>
        </div>
      </section>

    {/* <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-8 md:py-24 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-12">
        <aside className="bg-black p-6 w-full md:w-1/3 lg:w-1/4 border border-gray-700 rounded-lg shadow-lg transition-colors duration-300">
          <h2 className="text-lg font-bold mb-4 text-white hover:text-blue-400">
            Additional Services We Provide
          </h2>
          <ul className="space-y-4">
            {[
              { name: "Web Development", path: "/services/website-development" },
              { name: "App Development", path: "/services/website-development" },
              { name: "Server & Cloud Management", path: "/services/server-cloud-management" },
              { name: "HR Services", path: "/services/hr-services" },
              { name: "Quality Assurance and Testing", path: "/services/server-cloud-management" },
              { name: "IT Support and Maintenance", path: "/services/it-support-maintenancet" },
              { name: "IT Consulting and Strategy", path: "/services/it-support-maintenance" },
              { name: "UX/UI Design", path: "/services/website-development" },
            ].map((service, index) => (
              <li
                key={index}
                className="text-gray-400 hover:text-blue-400 hover:bg-gray-800 rounded-lg p-2 transition duration-300"
              >
                <a href={service.path}>{service.name}</a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-white">
            Web Design & Development
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We build custom websites and web applications that not only look
            stunning but also perform seamlessly. Whether you need a static
            website to showcase your brand, a dynamic website with advanced
            functionality, or a custom web application, we&apos;ve got you covered.
            Our websites are designed to be:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Responsive: Ensuring a great experience on desktops, tablets, and mobiles.</li>
            <li>SEO Optimized: Helping you rank higher and attract more visitors.</li>
            <li>User-Friendly: Focused on providing easy navigation and engagement.</li>
            <li>Scalable & Secure: Built to grow with your business while keeping user data safe.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Key Web Services We Offer</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Static Websites: Simple, professional sites to get your business online quickly.</li>
            <li>Dynamic Websites: Interactive sites with custom features and content management.</li>
            <li>Custom Web Applications: Tailored solutions for e-commerce, booking systems, portals, and more.</li>
            <li>E-Commerce Websites: Secure, conversion-optimized online stores.</li>
          </ul>
        </div>
      </div>
    </section> */}

        <section className="bg-black text-white py-20 px-8 relative overflow-hidden">
        <div className="container mx-auto text-center z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-10 bg-clip-text text-transparent bg-white leading-snug">
            Why Choose Us?
          </h2>
          <ul className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 space-y-6 list-none">
            <li className="flex items-start gap-4">
              <span className="text-[#00aaff] font-bold text-xl">•</span>
              <p className="pl-6 text-left">
                <strong>Customer-Centric Approach:</strong> We listen closely to your needs and focus on delivering a solution that fits your business. Our team collaborates with you to ensure that the end product aligns with your vision.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#00aaff] font-bold text-xl">•</span>
              <p className="pl-6 text-left">
                <strong>Cutting-Edge Technologies:</strong> We use the latest tools and technologies to build websites and applications that are secure, scalable, and future-ready.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#00aaff] font-bold text-xl">•</span>
              <p className="pl-6 text-left">
                <strong>Agile Development Process:</strong> Our agile methodology ensures faster delivery, with constant communication and adaptability to changes.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#00aaff] font-bold text-xl">•</span>
              <p className="pl-6 text-left">
                <strong>Ongoing Support:</strong> We don&apos;t just deliver the project and walk away. Our team provides comprehensive support and training, ensuring that you&apos;re comfortable with the final product.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#00aaff] font-bold text-xl">•</span>
              <p className="pl-6 text-left">
                <strong>Expert Team:</strong> Our in-house team is made up of skilled developers, designers, and IT consultants with years of experience in the industry.
              </p>
            </li>
          </ul>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-50 z-0"></div>
      </section>
      <WebDevelopmentExpertise />
      <PricingPlans />
      <WebsiteContactUs />
     <Footer />
    </>
  );
}
