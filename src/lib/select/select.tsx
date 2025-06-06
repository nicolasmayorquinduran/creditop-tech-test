"use client";

import { Select } from "@headlessui/react";
import { SelectFieldProps } from "./interfaces";

export const SelectField: React.FC<SelectFieldProps> = ({
  optionsKeySufix,
  options,
  ...selectProps
}) => {
  return (
    <Select {...selectProps} name="optionsKeySufix">
      {options.map((optionProps, index) => (
        <option key={`${optionsKeySufix}-${index}`} {...optionProps} />
      ))}
    </Select>
  );
};
