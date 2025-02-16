import { create } from "zustand";
import { TApartInfo } from "@/types/TMain/TApartGeneralInfoTypes";

type TUseMainInfoStore = {
  mainInfo: "WHOLE" | "SELECT" | "SEARCH";
  apartInfo?: TApartInfo;
  setMainInfo: (mainInfo: "WHOLE" | "SELECT" | "SEARCH") => void;
  setApartInfo: (apartInfo: TApartInfo) => void;
};

export const useMainInfoStore = create<TUseMainInfoStore>((set) => ({
  mainInfo: "WHOLE",
  setMainInfo: (mainInfo: "WHOLE" | "SELECT" | "SEARCH") =>
    set(() => ({
      mainInfo: mainInfo,
    })),
  setApartInfo: (apartInfo: TApartInfo) =>
    set(() => ({ apartInfo: apartInfo })),
}));
