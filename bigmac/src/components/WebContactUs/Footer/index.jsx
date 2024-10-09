import { useFormStep } from "@/hooks/use-form-steps";

export function Footer({ handleGoBack, handleGoForwardStep }) {
  const { currentStep, steps } = useFormStep();

  const numberOfSteps = steps.length;
  const isLastStep = currentStep === numberOfSteps;

  return (
    <footer className="p-4  flex justify-between items-center">
      <button
        onClick={handleGoBack}
        className={`py-3 px-4 rounded text-sm bg-gray-400 text-white font-medium sm:text-base ${
          currentStep === 1 ? "invisible" : "visible"
        } sm:text-base`}
      >
        Go back
      </button>
      <button
        onClick={handleGoForwardStep}
        className={`${
          isLastStep ? "bg-purple-500" : "bg-gray-400"
        } py-3 px-4 rounded text-sm text-white font-medium sm:text-base`}
      >
        {isLastStep ? "Confirm" : "Next step"}
      </button>
    </footer>
  );
}
