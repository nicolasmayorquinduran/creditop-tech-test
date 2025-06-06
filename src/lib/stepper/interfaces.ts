import { UseStepper } from "headless-stepper";
import type { ReactNode } from "react";
import { StepperChildren } from "./types";

export interface StepsState<State> {
  state: State;
  setState: (lastState: State) => void;
}

export interface StepperProps<State> {
  children: StepperChildren<State>[];
  features: UseStepper;
  sharedStepsState: StepsState<State>;
}

export interface UseStepNodesOutput<State> {
  getStepNodes: (children: ReactNode | ReactNode[]) => StepperChildren<State>[];
}
