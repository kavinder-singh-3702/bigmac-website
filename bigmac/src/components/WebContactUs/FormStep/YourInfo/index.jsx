"use client";

import { Fragment } from "react";

import { useFormStep } from "@/hooks/use-form-steps";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useForm } from "@/hooks/use-form";
import { ACTIONS } from "@/context/form";

import { TextInput } from "@/components/WebContactUs/Form/TextInput";
import Form from "../../Form";
import { Footer } from "../../Footer";

export function YourInfo() {
  const {
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField,
    websiteField, // Add websiteField
    dispatchWebsiteField, // Add dispatch function for websiteField
  } = useForm();

  const { handleNextStep, handlePreviousStep } = useFormStep();

  const { saveValueToLocalStorage } = useLocalStorage();

  function validateForm() {
    let formHasError = false;

    if (!nameField.value) {
      dispatchNameField({
        type: ACTIONS.SET_ERROR,
        errorMessage: "Name is required",
      });
      formHasError = true;
    }

    if (!emailField.value) {
      dispatchEmailField({
        type: ACTIONS.SET_ERROR,
        errorMessage: "Email is required",
      });
      formHasError = true;
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(emailField.value)) {
        dispatchEmailField({
          type: ACTIONS.SET_ERROR,
          errorMessage: "Email is invalid",
        });
        formHasError = true;
      }
    }

    if (!phoneNumberField.value) {
      dispatchPhoneNumberField({
        type: ACTIONS.SET_ERROR,
        errorMessage: "Phone number is required",
      });
      formHasError = true;
    } else {
      if (phoneNumberField.value.length < 6) {
        dispatchPhoneNumberField({
          type: ACTIONS.SET_ERROR,
          errorMessage: "Phone number is invalid",
        });
        formHasError = true;
      }
    }

    // Validate website URL if provided
    if (websiteField.value) {
      const urlRegex =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (!urlRegex.test(websiteField.value)) {
        dispatchWebsiteField({
          type: ACTIONS.SET_ERROR,
          errorMessage: "Website URL is invalid",
        });
        formHasError = true;
      }
    }

    return !formHasError;
  }

  function handleGoForwardStep() {
    const isValid = validateForm();
    if (isValid) {
      saveValueToLocalStorage(
        "your-info",
        JSON.stringify({
          name: nameField.value,
          email: emailField.value,
          phoneNumber: phoneNumberField.value,
          website: websiteField.value, // Save website field to local storage
        })
      );
      handleNextStep();
    }
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Personal Info"
          description="Please provide your name, email address, phone number, and website (optional)."
        />

        <div className="mt-5 flex flex-col gap-4">
          <TextInput
            label="Name"
            placeholder="e.g. Stephen King"
            value={nameField.value}
            onChange={(value) =>
              dispatchNameField({ type: ACTIONS.SET_VALUE, value })
            }
            errorMessage={nameField.errorMessage}
            clearError={() => dispatchNameField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={nameField.hasError}
          />
          <TextInput
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            value={emailField.value}
            onChange={(value) =>
              dispatchEmailField({ type: ACTIONS.SET_VALUE, value })
            }
            errorMessage={emailField.errorMessage}
            clearError={() => dispatchEmailField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={emailField.hasError}
          />
          <TextInput
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            value={phoneNumberField.value}
            onChange={(value) =>
              dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value })
            }
            errorMessage={phoneNumberField.errorMessage}
            clearError={() =>
              dispatchPhoneNumberField({ type: ACTIONS.CLEAR_ERROR })
            }
            hasError={phoneNumberField.hasError}
          />
          <TextInput
            label="Website URL (optional)"
            placeholder="e.g. https://example.com"
            value={websiteField.value} // Add website field input
            onChange={(value) =>
              dispatchWebsiteField({ type: ACTIONS.SET_VALUE, value })
            }
            errorMessage={websiteField.errorMessage} // Display any website field errors
            clearError={() =>
              dispatchWebsiteField({ type: ACTIONS.CLEAR_ERROR })
            }
            hasError={websiteField.hasError}
          />
        </div>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  );
}
