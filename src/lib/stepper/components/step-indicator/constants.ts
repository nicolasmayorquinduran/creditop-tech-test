import { tv } from "tailwind-variants";

export const stepItem = tv({
  base: 'flex w-full relative after:content-[""] after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4',
  variants: {
    status: {
      completed: "text-indigo-600 after:bg-indigo-600",
      active: "text-gray-900 after:bg-gray-200",
      pending: "text-gray-900 after:bg-gray-200",
    },
  },
});

export const stepCircle = tv({
  base: "w-6 h-6 border-2 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10",
  variants: {
    status: {
      completed: "bg-indigo-600 border-transparent text-white",
      active: "bg-indigo-50 border-indigo-600 text-indigo-600",
      pending: "bg-gray-50 border-gray-200",
    },
  },
});
