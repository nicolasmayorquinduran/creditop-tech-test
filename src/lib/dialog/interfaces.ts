export interface DialogNotificationProps {
  title: string;
  body: string;
  ctaText?: string;
  ctaAction?: VoidFunction;
  isOpen: boolean;
  closeDialog?: VoidFunction;
}
