import { create } from "zustand";
import {
  TIsDetailInfo,
  TApartDetailInfo,
} from "@/types/TMain/TApartDetailInfoTypes";

type TuseApartInfoStore = {
  isDetailInfo: TIsDetailInfo;
  apartDetailInfo?: TApartDetailInfo;
  setIsDetailInfo: (isDetailInfo: TIsDetailInfo) => void;
  setApartDetailInfo: (apartDetailInfo: TApartDetailInfo) => void;
};

export const useApartInfoStore = create<TuseApartInfoStore>((set) => ({
  isDetailInfo: null,
  setIsDetailInfo: (isDetailInfo: TIsDetailInfo) =>
    set(() => ({
      isDetailInfo: isDetailInfo,
    })),
  setApartDetailInfo: (apartDetailInfo: TApartDetailInfo) =>
    set(() => ({ apartDetailInfo: apartDetailInfo })),
}));
