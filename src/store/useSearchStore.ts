import { create } from "zustand";

type TUseSearchStore = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};

export const useSearchStore = create<TUseSearchStore>((set) => ({
  keyword: "",
  setKeyword: (keyword: string) => set({ keyword }),
}));
