import { BackgroundLines } from "@/components/Background/UI/background-lines";
import { BackgroundBeamsWithCollision } from "../components/Background/UI/Beams";
import MainPage from "@/components/MainPage";
import Services from "../components/Services";
import { Timeline } from "@/components/Timeline/Timeline";
import Statistics from "@/components/Statistics/Statistics";
import { FeaturesSectionDemo } from "@/components/Background/UI/Cards";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer";
import PortfolioSlider from '@/components/PortfolioSlider/PortfolioSlider';
export const metadata = {
  title: "Welcome to Bigmac", // This will set the tab title
  description:
    "Get the best advice from our experts, including expert developers, designers, enthusiasts, and managers.", // You can add a meta description as well
};

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
      <main className="mt-16 bg-black">
        <MainPage />
        <Services />
        <BackgroundBeamsWithCollision>
          <Timeline data={ProcessData} className={"mt-14"} />
        </BackgroundBeamsWithCollision>
        <Statistics />
        <PortfolioSlider />
        <FeaturesSectionDemo />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
