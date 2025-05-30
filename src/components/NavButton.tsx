import { FC, MouseEventHandler, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

type NavButtonProps = {
  href: string;
  disabled?: boolean;
  onMouseOver?: MouseEventHandler<HTMLAnchorElement> | undefined;
};

const NavButton: FC<PropsWithChildren<NavButtonProps>> = ({
  href,
  disabled,
  onMouseOver,
  children,
}) => {
  if (disabled) {
    return (
      <span className="rounded bg-slate-1 px-2 py-1 text-xs text-gray-500">
        {children}
      </span>
    );
  }

  return (
    <NavLink
      className="rounded bg-slate-2 px-2 py-1 text-xs text-text-primary transition-colors hover:bg-slate-1 hover:text-white disabled:cursor-default disabled:bg-slate-3 disabled:text-gray-400"
      to={href}
      onMouseOver={onMouseOver}
    >
      {children}
    </NavLink>
  );
};

export default NavButton;
