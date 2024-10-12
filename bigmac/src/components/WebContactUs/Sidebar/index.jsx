
import { useFormStep } from "@/hooks/use-form-steps";
import { Step } from "./step";

export function Sidebar() {
  const { currentStep, steps } = useFormStep();

  return (
    <div
      className="flex justify-center items-start z-50 bg-opacity-70 backdrop-blur-md p-6
      bg-gradient-to-br from-gray-800 via-gray-900 to-black h-[172px] w-full 
      bg-no-repeat bg-cover rounded-lg shadow-lg 
      sm:flex-col sm:items-start sm:gap-8 sm:w-[280px] sm:h-[calc(100vh-32px)] 
      sm:bg-[url('/images/bg-sidebar-desktop.svg')] sm:bg-center"
    >
      <div className="flex flex-row gap-4 sm:flex-col sm:gap-8 w-full">
        {steps.map((step) => (
          <Step
            key={step.number}
            step={step}
            isActive={step.number === currentStep}
          />
        ))}
      </div>
    </div>
  );
}
