import { create } from "zustand";
import { TApartInfo } from "@/types/TMain/TApartGeneralInfoTypes";

type TUseMainInfoStore = {
  mainInfo: boolean;
  apartInfo?: TApartInfo;
  setMainInfo: (mainInfo: boolean) => void;
  setApartInfo: (apartInfo: TApartInfo) => void;
};

export const useMainInfoStore = create<TUseMainInfoStore>((set) => ({
  mainInfo: true,
  setMainInfo: (mainInfo: boolean) =>
    set(() => ({
      mainInfo: mainInfo,
    })),
  setApartInfo: (apartInfo: TApartInfo) =>
    set(() => ({ apartInfo: apartInfo })),
}));
