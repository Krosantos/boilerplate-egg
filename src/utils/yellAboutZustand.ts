import { useGlobalAppState } from "@/context/GlobalAppState";

const yellAboutZustand = () => {
  const toYell = useGlobalAppState.getState().sharedText;
  alert(toYell);
};

export { yellAboutZustand };
