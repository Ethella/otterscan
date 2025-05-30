import { FC, PropsWithChildren } from "react";

const StandardTHead: FC<PropsWithChildren> = ({ children }) => (
  <thead>
    <tr className="bg-slate-1 text-secondary-dark [&>th]:truncate [&>th:first-child]:pl-2 [&>th:last-child]:pr-2 [&>th]:px-1 [&>th]:py-2">
      {children}
    </tr>
  </thead>
);

export default StandardTHead;
