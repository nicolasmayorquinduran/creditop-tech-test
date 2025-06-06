import { stepCircle, stepItem } from "./constants";
import type { StepProps } from "./interfaces";

export default function StepIndicator({
  status,
  label,
  ...restProps
}: StepProps) {
  return (
    <li {...restProps} className={stepItem({ status })}>
      <div className="block whitespace-nowrap z-10">
        <span className={stepCircle({ status })}>{label}</span>
      </div>
    </li>
  );
}
