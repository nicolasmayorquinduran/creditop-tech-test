import { Button as ButtonHeadlessUi } from "@headlessui/react";
import type { ButtonProps } from "./interfaces";

export const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonHeadlessUi {...props} />;
};
