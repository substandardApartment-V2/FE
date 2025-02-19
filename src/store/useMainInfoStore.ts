import { create } from "zustand";
import { TApartInfo } from "@/types/TMain/TApartGeneralInfoTypes";

type TMainInfo = "WHOLE" | "SELECT" | "SEARCH";

type TUseMainInfoStore = {
  mainInfo: TMainInfo;
  apartInfo?: TApartInfo | null;
  setMainInfo: (mainInfo: TMainInfo) => void;
  setApartInfo: (apartInfo: TApartInfo | null) => void;
};

export const useMainInfoStore = create<TUseMainInfoStore>((set) => ({
  mainInfo: "WHOLE",
  setMainInfo: (mainInfo: TMainInfo) =>
    set(() => ({
      mainInfo: mainInfo,
    })),
  setApartInfo: (apartInfo: TApartInfo | null) =>
    set(() => ({ apartInfo: apartInfo })),
}));
