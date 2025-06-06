import { Button as ButtonHeadlessUi } from "@headlessui/react";
import type { ButtonProps } from "./interfaces";
import clsx from "clsx";

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "filled", ...rest } = props;

  return (
    <ButtonHeadlessUi
      className={clsx(variant === "filled" && "bg-gray-400 text-white", variant === "outlined" && "border border-gray-400 text-red-500 bg-transparent")}
      {...rest}
    />
  );
};
