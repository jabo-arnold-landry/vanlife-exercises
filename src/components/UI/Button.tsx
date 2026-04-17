import { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ ...props }: ButtonProps) {
  return <button {...props}></button>;
}

export default Button;
