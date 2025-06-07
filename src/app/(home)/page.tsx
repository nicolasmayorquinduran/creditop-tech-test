"use client";
import type { StepperChildren } from "@lib/stepper/types";
import { Stepper } from "@lib/stepper/stepper";
import { IdentityStep } from "./components/identityStep/identityStep";
import { TermStep } from "./components/termStep/termStep";
import { useStepperLib } from "@lib/stepper/hooks/useStepper";
import { useState } from "react";
import type { StateCrediApplicationSteps } from "./interfaces";
import type { NextPage } from "next";
import { SummaryStep } from "./components/summaryStep/summaryStep";

const Home: NextPage = () => {
  const stepsComponents: StepperChildren<
    StateCrediApplicationSteps | undefined
  >[] = [IdentityStep, TermStep, SummaryStep];
  const features = useStepperLib<StateCrediApplicationSteps | undefined>({
    stepsComponents,
  });
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
    </>
  );
};

export default Home;
