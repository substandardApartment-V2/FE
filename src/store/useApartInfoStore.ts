import { create } from "zustand";

type TIsDetailInfo = null | "APARTINFO" | "WEAKRANK";

type TuseApartInfoStore = {
  isDetailInfo: TIsDetailInfo;
  setIsDetailInfo: (isDetailInfo: TIsDetailInfo) => void;
};

export const useApartInfoStore = create<TuseApartInfoStore>((set) => ({
  isDetailInfo: null,
  setIsDetailInfo: (isDetailInfo: TIsDetailInfo) =>
    set(() => ({
      isDetailInfo: isDetailInfo,
    })),
}));
