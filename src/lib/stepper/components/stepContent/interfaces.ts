import { StepsState } from "@lib/stepper/interfaces";
import { UseStepper } from "headless-stepper";
import { HTMLAttributes } from "react";

export interface StepContentProps<State>
  extends HTMLAttributes<HTMLDivElement>,
    UseStepper {
  sharedStepsState: StepsState<State>;
}
