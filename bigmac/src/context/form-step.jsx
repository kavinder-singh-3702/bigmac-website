import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";

export const FormStepContext = createContext({
  currentStep: 2,
  steps: [],
  handleNextStep: () => {},
  handlePreviousStep: () => {},
  moveToStep: () => {},
});

export const FormStepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, _] = useState([
    { title: "Your info", number: 1 },
    { title: "Select plan", number: 2 },
    { title: "ADD-ONS", number: 3 },
    { title: "Summary", number: 4 },
  ]);

  const { getValueFromLocalStorage, saveValueToLocalStorage } =
    useLocalStorage();

  useEffect(() => {
    const step = getValueFromLocalStorage("currentStep");
    if (step) setCurrentStep(step);
  }, [getValueFromLocalStorage]);

  const handleNextStep = () => {
    const newStepValue = currentStep + 1;
    if (currentStep < steps.length) {
      setCurrentStep(newStepValue);
      saveValueToLocalStorage("currentStep", `${newStepValue}`);
    }
  };

  const handlePreviousStep = () => {
    const newStepValue = currentStep - 1;
    if (currentStep > 1) {
      setCurrentStep(newStepValue);
      saveValueToLocalStorage("currentStep", `${newStepValue}`);
    }
  };

  const moveToStep = (step) => {
    setCurrentStep(step);
    saveValueToLocalStorage("currentStep", `${step}`);
  };

  return (
    <FormStepContext.Provider
      value={{
        steps,
        currentStep,
        handleNextStep,
        handlePreviousStep,
        moveToStep,
      }}
    >
      {children}
    </FormStepContext.Provider>
  );
};
