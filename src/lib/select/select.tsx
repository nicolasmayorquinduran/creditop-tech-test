"use client";

import { Field, FieldProps } from "@headlessui/react";
import { DetailedHTMLProps, OptionHTMLAttributes } from "react";

type SelectFieldOption = DetailedHTMLProps<
  OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>;

interface SelectFieldProps extends FieldProps {
  optionsKeySufix: string;
  options: SelectFieldOption[];
}

export const SelectField: React.FC<SelectFieldProps> = ({
  optionsKeySufix,
  options,
  ...selectProps
}) => {
  return (
    <Field {...selectProps}>
      {options.map((optionProps, index) => (
        <option key={`${optionsKeySufix}-${index}`} {...optionProps} />
      ))}
    </Field>
  );
};
