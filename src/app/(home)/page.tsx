"use client";
import type { StepperChildren } from "@lib/stepper/types";
import { Stepper } from "@lib/stepper/stepper";
import { IdentityStep } from "./components/identityStep/identityStep";
import { TermStep } from "./components/termStep/termStep";
import { useStepperLib } from "@lib/stepper/hooks/useStepper";
import { useState } from "react";
import type { StateCrediApplicationSteps } from "./interfaces";

export default function Home() {
  const stepsComponents: StepperChildren<
    StateCrediApplicationSteps | undefined
  >[] = [IdentityStep, TermStep];
  const features = useStepperLib({ stepsComponents });
  const [sharedStepsState, setSharedStepsState] =
    useState<StateCrediApplicationSteps>();
  return (
    <>
      <Stepper<StateCrediApplicationSteps | undefined>
        features={features}
        sharedStepsState={{
          state: sharedStepsState,
          setState: (newState) => setSharedStepsState(newState),
        }}
      >
        {stepsComponents}
      </Stepper>
      <span>{JSON.stringify(sharedStepsState)}</span>
    </>
  );
}
