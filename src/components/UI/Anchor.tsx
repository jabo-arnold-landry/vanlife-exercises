import { NavLink, type NavLinkProps } from "react-router-dom";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const linkStyles = cva([
  "tex-base",
  "capitalize",
  "font-semibold",
  "hover:underline",
  "active:underline text-500-red",
]);

export default function Anchor({
  children,
  className,
  ...props
}: NavLinkProps) {
  return (
    <NavLink className={twMerge(clsx(linkStyles(), className))} {...props}>
      {children}
    </NavLink>
  );
}
