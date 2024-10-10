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
    console.log("step value: " + newStepValue);
    if (currentStep < steps.length) {
      setCurrentStep(newStepValue);
      saveValueToLocalStorage("currentStep", `${newStepValue}`);
    }
    if (newStepValue === steps.length) {
      // Parse and log all localStorage data
      const parsedLocalStorage = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        try {
          // Try parsing the JSON value
          parsedLocalStorage[key] = JSON.parse(value);
        } catch (e) {
          // If parsing fails, store the raw value
          parsedLocalStorage[key] = value;
        }
      }
      console.log("Parsed localStorage data:", parsedLocalStorage);
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
