"use client";

import {
  StepperProps,
  useStepper,
  UseStepper as UseStepperOutput,
} from "headless-stepper";
import { StepperChildren } from "../types";

export interface UseStepperProps<State> extends Omit<StepperProps, "steps"> {
  stepsComponents: StepperChildren<State>[];
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const useStepperLib = <State extends unknown>({
  stepsComponents,
  ...useStepperArgs
}: UseStepperProps<State>): UseStepperOutput => {
  return useStepper({
    ...useStepperArgs,
    steps: stepsComponents.map((_, index) => ({ label: String(index + 1) })),
  });
};
