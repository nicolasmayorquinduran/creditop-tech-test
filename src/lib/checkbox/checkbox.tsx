import { Checkbox as CheckboxHeadlessUi } from "@headlessui/react";
import type { CheckboxProps } from "./interfaces";
import { useState } from "react";
import { Check } from "@lib/icons";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <CheckboxHeadlessUi
      {...props}
      checked={enabled}
      onChange={setEnabled}
      className="border-primary border-solid border-1 group size-6 rounded-md bg-primary/10 p-1 ring-1 ring-primary/15 ring-inset focus:not-data-focus:outline-none data-checked:bg-primary data-focus:outline data-focus:outline-offset-2 data-focus:outline-primary"
    >
      <div className="w-8 h-8">
        <Check />
      </div>
    </CheckboxHeadlessUi>
  );
};
