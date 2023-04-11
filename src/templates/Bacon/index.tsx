import { GlobalTextLabel } from "@/components/GlobalTextLabel";
import { yellAboutZustand } from "@/utils/yellAboutZustand";
import Link from "next/link";
import React, { useEffect } from "react";

interface BaconProps {}

const Bacon: React.FC<BaconProps> = (props) => {
  return (
    <div>
      <Link href={"/egg"}>GO TO EGG</Link>
      <button onClick={yellAboutZustand}>YELL</button>
      <GlobalTextLabel />
      <GlobalTextLabel />
      <GlobalTextLabel />
      <GlobalTextLabel />
      <GlobalTextLabel />
      <GlobalTextLabel />
      <GlobalTextLabel />
      <GlobalTextLabel />
    </div>
  );
};

export { Bacon };
