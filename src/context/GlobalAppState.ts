import { create } from "zustand";

type GlobalAppStateStore = {
  sharedText: string;
  setSharedText: (newVal: string) => void;
};

const useGlobalAppState = create<GlobalAppStateStore>((set, get) => ({
  sharedText: "",
  setSharedText(newVal) {
    set({ sharedText: newVal });
  },
}));

export { useGlobalAppState };
