import { stepCircle, stepItem } from "./constants";
import { StepStatus } from "./enums";
import type { StepProps } from "./interfaces";

export default function StepIndicator({
  index,
  activeIndex,
  ...restProps
}: StepProps) {
  let status: StepStatus = StepStatus.PENDING;
  if (index < activeIndex) status = StepStatus.COMPLETED;
  if (index === activeIndex) status = StepStatus.ACTIVE;
  return (
    <li {...restProps} id="" className={stepItem({ status })}>
      <div className="block whitespace-nowrap z-10">
        <span className={stepCircle({ status })}>{index + 1}</span>
      </div>
    </li>
  );
}
