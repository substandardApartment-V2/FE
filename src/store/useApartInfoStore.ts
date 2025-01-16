import { create } from "zustand";

type TuseApartInfoStore = {
  isDetailInfo: boolean;
  setIsDetailInfo: () => void;
};

export const useApartInfoStore = create<TuseApartInfoStore>((set) => ({
  isDetailInfo: false,
  setIsDetailInfo: () =>
    set((state) => ({
      isDetailInfo: !state.isDetailInfo,
    })),
}));