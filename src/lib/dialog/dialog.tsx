import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { DialogNotificationProps } from "./interfaces";

export const DialogNotification = ({
  title,
  body,
  ctaText,
  isOpen,
  closeDialog,
  ctaAction,
}: DialogNotificationProps) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => closeDialog && closeDialog()}
      __demoMode
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle as="h3" className="font-medium">
              {title}
            </DialogTitle>
            <p className="mt-2 text-sm/6">{body}</p>
            {ctaText && (
              <div className="mt-4">
                <Button
                  className="px-6 py-2 bg-primary text-white rounded-md disabled:opacity-50"
                  onClick={() => ctaAction && ctaAction()}
                >
                  {ctaText}
                </Button>
              </div>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
