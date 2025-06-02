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
      <span className="select-none rounded-lg bg-backgroundQuaternary px-3 py-2 text-xs text-textSecondary opacity-50 cursor-not-allowed">
        {children}
      </span>
    );
  }

  return (
    <NavLink
      className="select-none rounded-lg bg-backgroundQuaternary px-3 py-2 text-xs text-textSecondary transition-all duration-200 hover:bg-backgroundTertiary hover:text-textTertiary active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
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
