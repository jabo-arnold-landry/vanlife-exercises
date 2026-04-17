import { NavLink, type NavLinkProps } from "react-router-dom";

export default function Anchor({ children, ...props }: NavLinkProps) {
  return <NavLink {...props}>{children}</NavLink>;
}
