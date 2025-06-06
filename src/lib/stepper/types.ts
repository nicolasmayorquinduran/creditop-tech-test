import type { StepContentProps } from "./components/stepContent/interfaces";

export type StepperChildren<State> = React.ComponentType<
  StepContentProps<State>
>;
