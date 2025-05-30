import { FC, PropsWithChildren } from "react";

type ContentFrameProps = {
  tabs?: boolean;
  isLoading?: boolean;
};

const ContentFrame: FC<PropsWithChildren<ContentFrameProps>> = ({
  tabs,
  isLoading,
  children,
}) => {
  return tabs ? (
    <div
      className={`divide-y divide-slate-3 rounded-b-lg border bg-slate-1 px-3 ${
        isLoading && "opacity-50 transition-opacity"
      }`}
    >
      {children}
    </div>
  ) : (
    <div
      className={`divide-y divide-slate-3 rounded-lg border bg-slate-1 px-3 ${
        isLoading && "opacity-50 transition-opacity"
      }`}
    >
      {children}
    </div>
  );
};

export default ContentFrame;
