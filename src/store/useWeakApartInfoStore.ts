// 부실아파트 정보 전역상태변수

import { create } from "zustand";
import { TWeakApartInfo } from "@/types/TWeak/TWeakApartInfoTypes";

type TUseWeakApartInfoStore = {
  weakApartInfo?: TWeakApartInfo | null;
  setWeakApartInfo: (weakApartInfo: TWeakApartInfo | null) => void;
};

export const useWeakApartInfoStore = create<TUseWeakApartInfoStore>((set) => ({
  setWeakApartInfo: (weakApartInfo: TWeakApartInfo | null) =>
    set(() => ({ weakApartInfo: weakApartInfo })),
}));
