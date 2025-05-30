import { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

type UndefinedPageButtonProps = {
  address: string;
  direction: "first" | "last" | "prev" | "next";
  hash?: string;
  disabled?: boolean;
};

const UndefinedPageButton: FC<PropsWithChildren<UndefinedPageButtonProps>> = ({
  address,
  direction,
  hash,
  disabled,
  children,
}) => {
  if (disabled) {
    return (
      <span className="select-none rounded-lg bg-slate-2 px-3 py-2 text-xs text-secondary-dark">
        {children}
      </span>
    );
  }

  return (
    <NavLink
      className="select-none rounded-lg bg-slate-2 px-3 py-2 text-xs text-secondary-dark transition-colors hover:bg-slate-3 hover:text-secondary-dark disabled:cursor-default disabled:bg-slate-2 disabled:text-secondary-dark"
      to={`/address/${address}/txs/${direction}${
        direction === "prev" || direction === "next" ? `?h=${hash}` : ""
      }`}
      data-test={`nav-${direction}`}
    >
      {children}
    </NavLink>
  );
};

export default UndefinedPageButton;
