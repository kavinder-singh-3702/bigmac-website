import { createContext, useEffect, useReducer, useState } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

const initialState = {
  value: "",
  hasError: false,
  errorMessage: "",
};

export const FormContext = createContext({
  nameField: initialState,
  dispatchNameField: () => {},
  emailField: initialState,
  dispatchEmailField: () => {},
  phoneNumberField: initialState,
  dispatchPhoneNumberField: () => {},
  isYearly: false,
  setIsYearly: () => {},
  selectedPlan: null,
  setSelectedPlan: () => {},
  addOns: [],
  setAddOns: () => {},
  clearForm: () => {},
});

export const ACTIONS = {
  SET_VALUE: "SET_VALUE",
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
};

function handleFormState(state, action) {
  switch (action.type) {
    case ACTIONS.SET_VALUE:
      return {
        ...state,
        value: action.value,
        hasError: false,
        errorMessage: "",
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.errorMessage,
      };
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: "",
        hasError: false,
      };
    default:
      return state;
  }
}

export const FormProvider = ({ children }) => {
  // Your Info
  const [nameField, dispatchNameField] = useReducer(
    handleFormState,
    initialState
  );
  const [emailField, dispatchEmailField] = useReducer(
    handleFormState,
    initialState
  );
  const [phoneNumberField, dispatchPhoneNumberField] = useReducer(
    handleFormState,
    initialState
  );

  // Plan
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Add Ons
  const [addOns, setAddOns] = useState([]);

  const { getValueFromLocalStorage, removeValueFromLocalStorage } =
    useLocalStorage();

  function clearForm() {
    removeValueFromLocalStorage("your-info");
    removeValueFromLocalStorage("plan");
    removeValueFromLocalStorage("add-ons");

    dispatchNameField({ type: ACTIONS.SET_VALUE, value: "" });
    dispatchEmailField({ type: ACTIONS.SET_VALUE, value: "" });
    dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value: "" });
    setIsYearly(false);
    setSelectedPlan(null);
    setAddOns([]);
  }

  useEffect(() => {
    const yourInfoFromLocalStorage = getValueFromLocalStorage("your-info");
    if (yourInfoFromLocalStorage) {
      dispatchNameField({
        type: ACTIONS.SET_VALUE,
        value: yourInfoFromLocalStorage.name,
      });
      dispatchEmailField({
        type: ACTIONS.SET_VALUE,
        value: yourInfoFromLocalStorage.email,
      });
      dispatchPhoneNumberField({
        type: ACTIONS.SET_VALUE,
        value: yourInfoFromLocalStorage.phoneNumber,
      });
    }

    const planFromLocalStorage = getValueFromLocalStorage("plan");
    if (planFromLocalStorage) {
      setSelectedPlan(planFromLocalStorage.name);
      setIsYearly(planFromLocalStorage.isYearly);
    }

    const addOnsFromLocalStorage = getValueFromLocalStorage("add-ons");
    if (addOnsFromLocalStorage) {
      setAddOns(addOnsFromLocalStorage);
    }
  }, []);

  const value = {
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField,
    isYearly,
    setIsYearly,
    selectedPlan,
    setSelectedPlan,
    addOns,
    setAddOns,
    clearForm,
  };

  return (
    <FormContext.Provider value={{ ...value }}>{children}</FormContext.Provider>
  );
};
