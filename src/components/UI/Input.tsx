import { type InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
const inputStyles = cva(
  "border  border-[#D1D5DB] placeholder:text-[#4D4D4D] focus:ring-gray-200 focus:ring-2 focus:border-0 px-1 py-3 font-text-font",
);

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputStyles>;

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx(twMerge(inputStyles({ className })))}
      required
      {...props}
    />
  );
}

export default Input;
