import { tv } from "tailwind-variants";

export const stepItem = tv({
  base: 'flex w-full relative after:content-[""] after:w-full after:h-2 after:inline-block after:absolute lg:after:top-4 after:top-3 after:left-4',
  variants: {
    status: {
      completed: "text-primary after:bg-primary",
      active: "text-primary after:bg-gray-200",
      pending: "text-primary after:bg-gray-200",
    },
  },
});

export const stepCircle = tv({
  base: "w-8 h-8 border-2 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10",
  variants: {
    status: {
      completed: "bg-primary border-transparent text-white",
      active: "bg-indigo-50 border-primary text-primary",
      pending: "bg-gray-50 border-gray-200",
    },
  },
});
