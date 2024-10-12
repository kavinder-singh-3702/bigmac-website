"use client";
import React, { useState } from "react";
import Image from "next/image";
import plans from "@/data/plans.json";
import { priceFormatter } from "@/util/price-formatter"; 
import Link from "next/link";

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const isYearly = false; 

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    // Additional actions like form submissions can be handled here
  };

  return (
    <section id="plans" className="bg-black py-12">
      <div className="container mx-auto px-5">
        <div className="border border-gray-700 p-10 rounded-xl shadow-lg">
          <h1 className="text-4xl font-extrabold text-white mb-10 text-center">
            Choose Your Plan
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col p-6 rounded-xl transition-all duration-300 relative
                  ${
                    selectedPlan?.name === plan.name
                      ? "border-purple-700 bg-gray-700 shadow-lg"
                      : "border-gray-600 bg-gray-900"
                  } hover:border-purple-400 hover:bg-gray-800 hover:shadow-xl`}
                onClick={() => handleSelectPlan(plan)}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={plan.icon}
                    alt={`${plan.name} icon`}
                    width={50}
                    height={50}
                    className="block"
                  />
                </div>
                <strong className="text-xl font-bold text-white text-center mb-3">
                  {plan.name}
                </strong>
                <span className="text-md font-semibold text-purple-500 text-center mb-2">
                  {priceFormatter(
                    plan.price[isYearly ? "yearly" : "monthly"],
                    isYearly
                  )}
                </span>
                <span className="text-sm font-light text-gray-400 text-center mb-4">
                  {plan.freeTrialDescription}
                </span>
                <ul className="flex-grow text-sm space-y-2 text-gray-400 leading-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="mr-2 text-purple-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center mt-6">
                  <Link
                    href="/services/website-development/contactUs"
                    className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 hover:scale-105 transition-transform duration-200"
                  >
                    Select Plan
                  </Link>
                </div>
                {selectedPlan?.name === plan.name && (
                  <div className="absolute top-0 right-0 mt-3 mr-3">
                    <span className="text-xs text-white bg-purple-600 px-3 py-1 rounded-full">
                      Selected
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

