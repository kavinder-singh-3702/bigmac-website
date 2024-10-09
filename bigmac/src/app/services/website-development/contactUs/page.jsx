"use client";

import { FormStep } from "@/components/WebContactUs/FormStep";
import { Sidebar } from "@/components/WebContactUs/Sidebar";
import { FormProvider } from "@/context/form";

import { FormStepProvider } from "@/context/form-step";

export default function Home() {
  return (
    <FormStepProvider>
      <FormProvider>
        <main
          className={`mt-20 bg-white
          flex flex-col h-screen m-0
          sm:flex-row sm:m-4 sm:mr-0 sm:h-[calc(100vh-32px)]`}
        >
          <Sidebar />
          <div className="flex flex-1 sm:max-w-[550px] sm:flex-0 sm:mx-auto">
            <FormStep />
          </div>
        </main>
      </FormProvider>
    </FormStepProvider>
  );
}
