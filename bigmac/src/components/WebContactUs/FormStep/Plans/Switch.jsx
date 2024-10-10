import { Fragment } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";

export function Switch({ isYearly, handlePlanTypeChange }) {
  return (
    <Fragment>
      <span
        className={`text-sm font-bold ${
          isYearly ? "text-gray-400" : "text-blue-600"
        } transition duration-150`}
      >
        Monthly
      </span>

      <RadixSwitch.Root
        checked={isYearly}
        onCheckedChange={handlePlanTypeChange}
        className={`
          w-12 h-6 p-1 relative rounded-full transition-colors duration-300
          ${
            isYearly ? "bg-blue-600" : "bg-black"
          } // Set to blue if yearly, black if monthly
        `}
        style={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <RadixSwitch.Thumb
          className={`
            w-5 h-5 block bg-white rounded-full shadow-md transition-transform duration-300
            ${isYearly ? "translate-x-6" : "translate-x-0"}
          `}
        />
      </RadixSwitch.Root>

      <span
        className={`text-sm font-bold ${
          isYearly ? "text-blue-600" : "text-gray-400"
        } transition duration-150`}
      >
        Yearly
      </span>
    </Fragment>
  );
}
