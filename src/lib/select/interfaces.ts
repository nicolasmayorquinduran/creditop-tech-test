import type { SelectProps } from "@headlessui/react";
import type { DetailedHTMLProps, OptionHTMLAttributes } from "react";

export type SelectFieldOption = DetailedHTMLProps<
  OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>;

export interface SelectFieldProps extends SelectProps {
  optionsKeySufix: string;
  options: SelectFieldOption[];
}
