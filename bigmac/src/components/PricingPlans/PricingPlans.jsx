"use client";
import React, { useState } from "react";
import Image from "next/image";
import plans from "@/data/plans.json";
import { priceFormatter } from "@/util/price-formatter"; // Assuming you have this utility
import Link from "next/link";

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const isYearly = false; // Change to true if you want to display yearly prices

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);

    // You can handle additional actions like form submissions here
  };

  return (
    <section id="plans" className="bg-black py-8">
      <div className="container mx-auto px-5">
        <div className="border border-gray-700 p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Choose Your Plan
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col p-4 rounded border transition duration-200 
                  ${
                    selectedPlan?.name === plan.name
                      ? "border-purple-700 bg-gray-800"
                      : "border-gray-600 bg-gray-900"
                  }
                  hover:border-purple-400 hover:bg-gray-800`}
              >
                <Image
                  src={plan.icon}
                  alt={`${plan.name} icon`}
                  width={40}
                  height={40}
                />
                <strong className="text-lg font-bold text-denim">
                  {plan.name}
                </strong>
                <span className="text-sm font-normal text-gray-400 leading-5">
                  {priceFormatter(
                    plan.price[isYearly ? "yearly" : "monthly"],
                    isYearly
                  )}
                </span>
                <span className="text-xs font-normal text-gray-300">
                  {plan.freeTrialDescription}
                </span>
                <ul className="mt-2 text-md space-y-2 text-gray-400 leading-5">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
                <Link
                  href="/services/website-development/contactUs"
                  className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Select Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
