"use client";
import { cn } from "@/util/lib/util";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Proven Track Record",
      description:
        "Our proven track record across industries ensures you get reliable, high-quality results.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Effortless Experience",
      description:
        "We make complex services simple and intuitive, delivering a seamless experience.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Competitive Pricing",
      description:
        "Get the best value with our transparent, competitive pricing and no hidden fees.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "Enjoy uninterrupted service with our robust infrastructure and 100% uptime guarantee.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable Solutions",
      description: "Our flexible solutions grow with your business, adapting to your evolving needs.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We're available around the clock, providing support whenever you need it.",
      icon: <IconHelp />,
    },
    {
      title: "End-to-End Solutions",
      description:
        "From start to finish, we handle every stage of your project with tailored, end-to-end solutions.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Flexible Collaboration",
      description:
        "We work in your time zone and collaborate in real-time to keep your projects on track.",
      icon: <IconHeart />,
    },
  ];
  return (
      <div className="bg-black min-h-screen py-10">
      <h1 id="about" className=" text-5xl font-bold text-center my-10 ">
        <span className="text-white">WHY JOIN</span>{" "}
        <span className="text-[#00aaff]">US</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
