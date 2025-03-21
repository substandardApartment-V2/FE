import { create } from "zustand";

type TUseSearchStore = {
  keyword: string;
  prevKeyword: string;
  setKeyword: (keyword: string) => void;
  setPrevKeyword: (prevKeyword: string) => void;
};

export const useSearchStore = create<TUseSearchStore>((set) => ({
  keyword: "",
  prevKeyword: "",
  setKeyword: (keyword: string) => set({ keyword }),
  setPrevKeyword: (prevKeyword: string) => set({ prevKeyword }),
}));
