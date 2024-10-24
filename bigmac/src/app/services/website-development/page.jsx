import WebsiteContactUs from "@/components/WebContactUs";
import PricingPlans from "@/components/PricingPlans/PricingPlans";
import WebDevelopmentExpertise from "@/components/Expertise/WebExp";
import WebHero from "@/components/WebDev/Hero";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Website Development", // This will set the tab title
  description:
    "Get the best advice from our experts, including expert developers, designers, enthusiasts, and managers.", // You can add a meta description as well
};
export default function WebsiteDevelopment() {
  return (
    <>
      <WebHero />
      {/* <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 pt-12 md:pt-0">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-white tracking-wide leading-tight mt-8 md:mt-0">
          Elegant Website Development
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center text-gray-200 leading-relaxed">
          Crafting beautiful, responsive, and cutting-edge websites to help your
          business stand out in the digital world.
        </p>
        <ul className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl">
          <li className="p-8 md:p-10 bg-gradient-to-r from-black via-gray-800 to-gray-900 rounded-2xl shadow-xl border border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Responsive Website Design
            </h2>
            <p className="text-gray-300">
              Ensuring your website looks amazing on any device.
            </p>
          </li>
          <li className="p-8 md:p-10 bg-gradient-to-r from-black via-gray-800 to-gray-900 rounded-2xl shadow-xl border border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              E-commerce Solutions
            </h2>
            <p className="text-gray-300">
              We build scalable and secure online stores.
            </p>
          </li>
          <li className="p-8 md:p-10 bg-gradient-to-r from-black via-gray-800 to-gray-900 rounded-2xl shadow-xl border border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Custom Web Applications
            </h2>
            <p className="text-gray-300">
              Tailored web applications to fit your business needs.
            </p>
          </li>
        </ul>
      </section> */}

      <section className="bg-black text-white py-16 md:py-24 px-8 md:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-transparent bg-clip-text bg-white leading-snug">
            Our Work
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 md:mb-16">
            Take a look at some of the cutting-edge solutions we’ve created for
            businesses around the globe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 md:p-10 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl border border-gray-700 hover:border-green-200 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                Project One
              </h3>
              <p className="text-gray-300">
                A responsive website for an e-commerce company.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl border border-gray-700 hover:border-green-200 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                Project Two
              </h3>
              <p className="text-gray-300">
                A custom web app for a growing startup.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl border border-gray-700 hover:border-green-200 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                Project Three
              </h3>
              <p className="text-gray-300">
                A sleek portfolio site for a creative agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-8 relative overflow-hidden">
        <div className="container mx-auto text-center z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-10 bg-clip-text text-transparent bg-white leading-snug">
            Our Vision
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
            We aim to transform businesses through innovative digital solutions.
            Our vision is to create seamless, user-friendly, and high-performing
            websites that drive growth and success.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-50 z-0"></div>
      </section>

      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 md:py-24 px-8 md:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 bg-clip-text text-transparent bg-white leading-snug">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 md:p-10 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl border border-gray-800 hover:border-green-200 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">
                Step 1: Consultation
              </h3>
              <p className="text-gray-300">
                We start by understanding your business needs and goals.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl border border-gray-800 hover:border-green-200 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">
                Step 2: Design & Development
              </h3>
              <p className="text-gray-300">
                Our team designs and develops a custom solution tailored to your
                requirements.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl border border-gray-800 hover:border-green-200 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">
                Step 3: Launch & Support
              </h3>
              <p className="text-gray-300">
                We ensure a smooth launch and provide ongoing support for
                continuous success.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WebDevelopmentExpertise />

      <PricingPlans />
      <WebsiteContactUs />

     <Footer />
    </>
  );
}
