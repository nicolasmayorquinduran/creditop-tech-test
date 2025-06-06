import { StepStatus } from "./enums";

export interface StepProps extends React.HTMLAttributes<HTMLElement> {
  status: StepStatus;
  label: string;
}
