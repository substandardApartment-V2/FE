import { create } from "zustand";

type TUseSearchStore = {
  keyword: string;
  prevKeyword: string;
  isReset: boolean;
  setKeyword: (keyword: string) => void;
  setPrevKeyword: (prevKeyword: string) => void;
  setIsReset: (isReset: boolean) => void;
};

export const useSearchStore = create<TUseSearchStore>((set) => ({
  keyword: "",
  prevKeyword: "",
  isReset: false,
  setKeyword: (keyword: string) => set({ keyword }),
  setPrevKeyword: (prevKeyword: string) => set({ prevKeyword }),
  setIsReset: (isReset: boolean) => set({ isReset }),
}));
