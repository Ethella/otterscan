import React, { useContext } from "react";
import { RuntimeContext } from "./useRuntime";

const Footer: React.FC = () => {
  const { provider, config } = useContext(RuntimeContext);

  return (
    <div
      className={`w-full px-2 py-1 text-xs bg-backgroundSecondary text-textTertiary text-center`}
    >
      {provider ? (
        <>Using Erigon node at {config?.erigonURL}</>
      ) : (
        <>Waiting for the provider...</>
      )}
    </div>
  );
};

export default React.memo(Footer);
