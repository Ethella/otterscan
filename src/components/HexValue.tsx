import React from "react";

type HexValueProps = {
  value: string;
};

const HexValue: React.FC<HexValueProps> = ({ value }) => (
  <span className="break-all font-hash text-secondary-dark">{value}</span>
);

export default HexValue;
