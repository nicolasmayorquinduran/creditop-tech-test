"use client";

import React from "react";
import { StepperProps } from "./interfaces";
import { StepStatus } from "./components/step-indicator/enums";
import StepIndicator from "./components/step-indicator/stepIndicator";
import { StepContentProps } from "./components/stepContent/interfaces";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const Stepper = <State extends unknown = undefined>({
  children,
  features,
  sharedStepsState,
}: StepperProps<State>) => {
  const { state, stepsProps, stepperProps } = features;
  const CurrentStep = children[state.currentStep];
  const currentStepProps: StepContentProps<State> = {
    ...features,
    sharedStepsState,
  };
  return (
    <div>
      <nav style={{ display: "flex" }} {...stepperProps}>
        {stepsProps?.map((props, index) => (
          <ol
            key={index}
            className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base"
          >
            <StepIndicator
              key={props.id}
              {...props}
              status={StepStatus.COMPLETED}
              label={String(index + 1)}
            />
          </ol>
        ))}
      </nav>
      <CurrentStep {...currentStepProps} />
    </div>
  );
};
