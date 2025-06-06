import type { DialogNotificationProps } from "@lib/dialog/interfaces";

export interface UseDialogProps
  extends Pick<DialogNotificationProps, "title" | "body" | "ctaText"> {
  ctaAction?: (closeDialog: VoidFunction) => void;
}
