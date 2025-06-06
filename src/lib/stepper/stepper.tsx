"use client";

import React from "react";
import { StepContentProps, StepperProps } from "./interfaces";
import StepIndicator from "./components/step-indicator/stepIndicator";
import clsx from "clsx";

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
      <nav className="flex" {...stepperProps}>
        {stepsProps?.map((props, index) => (
          <ol
            key={index}
            className={clsx([
              "flex items-center text-xs text-gray-900 font-medium sm:text-base",
              { [" w-full"]: index < stepsProps.length - 1 },
            ])}
          >
            <StepIndicator
              key={props.id}
              {...props}
              activeIndex={state.currentStep}
              index={index}
            />
          </ol>
        ))}
      </nav>
      <CurrentStep {...currentStepProps} className="p-8 md:p-32" />
    </div>
  );
};
