// src/lib/cvaVariants.js
import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "border rounded px-3 py-2 w-full outline-none",
  {
    variants: {
      intent: {
        primary: "border-gray-300 focus:ring-2 focus:ring-blue-500",
        error: "border-red-500",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export const buttonVariants = cva("rounded px-4 py-2 font-semibold", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
      ghost: "bg-transparent text-black hover:bg-gray-200",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
