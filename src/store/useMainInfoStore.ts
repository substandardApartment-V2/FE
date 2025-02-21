// 일반 아파트 정보 전역상태변수

import { create } from "zustand";
import { TApartInfo } from "@/types/TMain/TApartGeneralInfoTypes";

type TMainInfo = "WHOLE" | "SELECT" | "SEARCH" | null;

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
