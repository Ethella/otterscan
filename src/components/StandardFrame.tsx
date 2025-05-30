import React, { PropsWithChildren } from "react";

const StandardFrame: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="grow bg-slate-0 px-3 lg:px-9 pb-12 pt-3">{children}</div>
);

export default StandardFrame;
