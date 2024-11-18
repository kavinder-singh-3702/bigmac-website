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
import About from '@/components/About/About';
export const metadata = {
  title: "Welcome to Bigmac", // This will set the tab title
  description:
    "Get the best advice from our experts, including expert developers, designers, enthusiasts, and managers.", // You can add a meta description as well
};

export default function Layout({ children }) {
  const ProcessData = [
    {
      title: "Discovery & Strategy",
      content:
       "We start by understanding your unique needs and goals, crafting a tailored strategy that aligns with your business objectives.",
    },
    {
      title: "Design & Planning",
      content:
        "Our team creates innovative designs and develops detailed plans to ensure every aspect of the project is user-centric and optimized for success.",
    },
    {
      title: "Development & Implementation",
      content:
        "We build robust, scalable solutions—whether it's a website, app, or IT infrastructure—using the latest technologies and best practices.",
    },
    {
      title: "Testing & Quality Assurance",
      content:
        "Our rigorous testing ensures everything works as expected, with a focus on functionality, security, and user experience.",
    },
    {
      title: "Launch & Support",
      content:
        "Once everything is ready, we launch your solution and provide ongoing support, ensuring smooth operations and continued success.",
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
        <About/>
        <Statistics />
        <PortfolioSlider />
        <FeaturesSectionDemo />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
