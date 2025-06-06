"use client";

import {
  StepperProps,
  useStepper,
  UseStepper as UseStepperOutput,
} from "headless-stepper";
import { StepperChildren } from "../types";

export interface UseStepperProps extends Omit<StepperProps, "steps"> {
  stepsComponents: StepperChildren[];
}

export const useStepperLib = ({
  stepsComponents,
  ...useStepperArgs
}: UseStepperProps): UseStepperOutput => {
  return useStepper({
    ...useStepperArgs,
    steps: stepsComponents.map((_, index) => ({ label: String(index + 1) })),
  });
};
