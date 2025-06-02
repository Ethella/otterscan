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
      className={`divide-y divide-border rounded-b-lg border border-border px-3 ${
        isLoading && "opacity-50 transition-opacity"
      }`}
    >
      {children}
    </div>
  ) : (
    <div
      className={`divide-y divide-border rounded-lg border border-border px-3 ${
        isLoading && "opacity-50 transition-opacity"
      }`}
    >
      {children}
    </div>
  );
};

export default ContentFrame;
