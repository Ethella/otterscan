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
      <span className="rounded bg-backgroundQuaternary px-2 py-1 text-xs text-textSecondary opacity-50 cursor-not-allowed">
        {children}
      </span>
    );
  }

  return (
    <NavLink
      className="rounded bg-backgroundQuaternary px-2 py-1 text-xs text-textSecondary transition-all duration-200 hover:bg-backgroundTertiary hover:text-textTertiary active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
      to={href}
      onMouseOver={onMouseOver}
    >
      {children}
    </NavLink>
  );
};

export default NavButton;
