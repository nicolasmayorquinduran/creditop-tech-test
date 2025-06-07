// src/lib/select/select.tsx
"use client";

import { Field, Label, Select } from "@headlessui/react";
import { SelectFieldProps } from "./interfaces";

export const SelectField: React.FC<SelectFieldProps> = ({
  optionsKeySufix,
  options,
  label,
  ...selectProps
}) => {
  return (
    <Field>
      {label && <Label>{`${label} ${selectProps.required ? "*" : ""}`}</Label>}
      <Select
        {...selectProps}
        name={optionsKeySufix}
        className="block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {options.map((optionProps, index) => (
          <option key={`${optionsKeySufix}-${index}`} {...optionProps} />
        ))}
      </Select>
    </Field>
  );
};
