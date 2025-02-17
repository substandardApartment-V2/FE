import { create } from "zustand";
import { TWeakApartInfo } from "@/types/TWeak/TWeakApartInfoTypes";

type TUseWeakApartInfoStore = {
  weakApartInfo?: TWeakApartInfo | undefined;
  setWeakApartInfo: (weakApartInfo: TWeakApartInfo) => void;
};

export const useWeakApartInfoStore = create<TUseWeakApartInfoStore>((set) => ({
  setWeakApartInfo: (weakApartInfo: TWeakApartInfo) =>
    set(() => ({ weakApartInfo: weakApartInfo })),
}));
