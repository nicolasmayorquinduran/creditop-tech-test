"use client";

import { DialogNotification } from "@lib/dialog/dialog";
import { useState } from "react";
import { UseDialogProps } from "./interfaces";

export interface UseDialogOutput {
  dialog: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
}

export const useDialog = ({
  ctaAction,
  ...props
}: UseDialogProps): UseDialogOutput => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function close() {
    setIsOpen(false);
  }
  const dialog = (
    <DialogNotification
      {...props}
      isOpen={isOpen}
      ctaAction={() => ctaAction && ctaAction(close)}
      closeDialog={close}
    />
  );

  return {
    dialog,
    setIsOpen: (isOpen: boolean) => setIsOpen(isOpen),
  };
};
