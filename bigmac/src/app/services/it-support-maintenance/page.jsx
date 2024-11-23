import React from "react";
import IT from "@/components/Services/IT/IT";
import HeroSection from "@/components/Services/IT/HeroSection";
import Footer from "@/components/Footer";
export const metadata = {
  title: "IT Support And Maintenance", 
  description:
    "Get the best advice from our experts, including expert developers, designers, enthusiasts, and managers.", // You can add a meta description as well
};
export default function page() {
  return (
    <div>
    <HeroSection/>
    <IT />
    <Footer/>
    </div>
  );
}
