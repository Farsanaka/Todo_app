import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; // if you don't have this, replace with clsx or simple join
import PropTypes from "prop-types";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export const Button = ({ className, variant, size, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "ghost"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
