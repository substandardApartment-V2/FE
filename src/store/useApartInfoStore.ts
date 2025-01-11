import { create } from "zustand";

type TuseApartInfoStore = {
  isDetailInfo: boolean;
  setIsDetailInfo: () => void;
};

export const useNewsStore = create<TuseApartInfoStore>((set) => ({
  isDetailInfo: false,
  setIsDetailInfo: () =>
    set((state) => ({
      isDetailInfo: !state.isDetailInfo,
    })),
}));
