import { BackgroundLines } from "@/components/Background/UI/background-lines";
import { BackgroundBeamsWithCollision } from "@/components/Background/UI/beams.jsx";
import EarthScene from "@/components/Earth";
import Services from "@/components/services.jsx";
import { Timeline } from "@/components/Timeline/Timeline";
import Statistics from "@/components/Statistics/Statistics";
import { FeaturesSectionDemo } from "@/components/Background/UI/Cards";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Layout({ children }) {
  const ProcessData = [
    {
      title: "Strategy",
      content:
        "We provide comprehensive website design and development services including layout design, development, optimization and maintenance etc. to achieve success and business goals.",
    },
    {
      title: "Design",
      content:
        "We create aesthetic and user-friendly designs as per your needs. It includes creating visually appealing layouts, selecting appropriate color schemes, typography, and graphics. We focus on reflecting the brand identity and message effectively through lucrative designs.",
    },
    {
      title: "Development",
      content:
        "The development process includes front-end and back-end programming, content management system implementation, ending up with rigorous testing to ensure quality.",
    },
    {
      title: "UA Testing",
      content:
        "It involves evaluating the site’s functionality, usability, and performance from the end user's perspective. It ensures that the website meets user expectations, identifies issues or bugs (if any), and validates that it fulfills its intended purpose before deployment.",
    },
  ];
  return (
    <div>
      <main className="mt-16 mb-20">
        {children}
        <section className="max-h-[100vh] bg-black flex justify-center items-center relative">
          <BackgroundLines />
          <div className="title absolute top-[28%] left-[4.5%] flex flex-col justify-center items-center text-center">
            <p className="text-white font-bold text-[8vh] leading-tight text-shadow-md">
              BIGMAC AGENCY
            </p>
            <span className="block w-[45vw] text-gray-400 break-words pl-2 text-center text-2xl">
              Get the best advices from our experts, including expert
              developers, designers, enthusiasts and managers.
            </span>
          </div>
          <EarthScene />
        </section>
        <Services />
        <BackgroundBeamsWithCollision>
          <Timeline data={ProcessData} className={"mt-20"} />
        </BackgroundBeamsWithCollision>
        <Statistics />
        <FeaturesSectionDemo />
        <ContactForm />
      </main>
    </div>
  );
}
