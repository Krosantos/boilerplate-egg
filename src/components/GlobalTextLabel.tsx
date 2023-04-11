import { useGlobalAppState } from "@/context/GlobalAppState";
import React from "react";

const GlobalTextLabel: React.FC = () => {
  const text = useGlobalAppState((s) => s.sharedText);

  return <h4>{text}</h4>;
};

export { GlobalTextLabel };
