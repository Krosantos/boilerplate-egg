import { useGlobalAppState } from "@/context/GlobalAppState";
import { Bacon } from "@/templates/Bacon";
import React from "react";

interface BaconPageProps {}

const BaconPage: React.FC<BaconPageProps> = (props) => {
  return <Bacon />;
};

export default BaconPage;
