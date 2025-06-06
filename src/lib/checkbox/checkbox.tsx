import { Checkbox as CheckboxHeadlessUi } from "@headlessui/react";
import type { CheckboxProps } from "./interfaces";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <CheckboxHeadlessUi {...props} />;
};
