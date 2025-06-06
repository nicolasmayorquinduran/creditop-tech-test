export interface StepProps extends React.HTMLAttributes<HTMLElement> {
  activeIndex: number;
  isLastStep: boolean;
  index: number;
}
