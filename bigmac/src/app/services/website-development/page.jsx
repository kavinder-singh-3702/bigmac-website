import WebsiteContactUs from "@/components/WebContactUs";
import PricingPlans from "@/components/PricingPlans/PricingPlans";
import WebDevelopmentExpertise from "@/components/Expertise/WebExp";
import WebHero from "@/components/WebDev/Hero";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Website Development", 
  description:
    "Get the best advice from our experts, including expert developers, designers, enthusiasts, and managers.", // You can add a meta description as well
};
export default function WebsiteDevelopment() {
  return (
    <>
      <WebHero />
      <section className="relative bg-black text-white py-20 md:py-28 px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-95"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-10 md:mb-14">
            Web Development & Design
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16 md:mb-20 leading-relaxed">
            Discover transformative solutions crafted to drive growth and engage customers worldwide. Let us help you stand out in the digital space.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Description 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-8">
           
              </div>
              <p className="text-lg text-gray-300 leading-loose max-w-xl">
                At Bigmac, we create high-performance websites tailored to drive business growth. From static showcases to dynamic websites, we deliver visually stunning, functional, and scalable solutions that match your unique needs.
              </p>
            </div>

            {/* Description 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-8">
              
              </div>
              <p className="text-lg text-gray-300 leading-loose max-w-xl">
                Using cutting-edge technologies, we build responsive and user-friendly websites for businesses of all sizes. From simple brochures to complex applications, we help you shine online.
              </p>
            </div>
          </div>
        </div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
        </section>

        <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-8 md:py-24 md:px-16">
          <div className="container mx-auto flex flex-col md:flex-row items-start gap-12">
            <aside className="bg-black p-6 w-full md:w-1/3 lg:w-1/4 border border-gray-700 rounded-lg shadow-lg transition-colors duration-300">
              <h2 className="text-lg font-bold mb-4 text-white hover:text-blue-400">
              Additional Services We Provide
              </h2>
              <ul className="space-y-4">
                {[
                  "Web Development",
                  "App Development",
                  "Server & Cloud Management",
                  "Data Analytics and BI",
                  "Quality Assurance and Testing",
                  "IT Support and Maintenance",
                  "IT Consulting and Strategy",
                  "UX/UI Design",
                ].map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-400 hover:text-blue-400 hover:bg-gray-800 rounded-lg p-2 transition duration-300"
                  >
                    <a href="#">{service}</a>
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
        </section>
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
