import { type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const buttonStyles = cva(
  [
    "rounded-md",
    "font-text-font",
    "text-center",
    "border-none",
    "capitalize",
    "text-white",
    "px-2",
    "py-1",
    "font-bold",
    "cursor-pointer",
  ],
  {
    variants: {
      color: {
        bgBlack: ["bg-black"],
        bgOrange: ["bg-[#FF8C38]"],
        filtersButton: ["bg-[#FFEAD0]", "text-links-color", "px-4", "py-1"],
        clearFilter: ["text-links-color", "bg-none", "underline"],
        simple: ["bg-[#E17654]"],
        rugged: ["bg-[#115E59]"],
        luxury: ["bg-black"],
      },
      sizes: {
        sm: ["px-3", "py-1"],
        md: ["px-5", "py-2"],
        lg: ["w-[70vh]", "py-3"],
      },
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

function Button({ children, className, color, sizes, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(twMerge(buttonStyles({ color, sizes }), className))}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
