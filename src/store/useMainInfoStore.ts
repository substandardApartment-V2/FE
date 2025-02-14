import { create } from "zustand";

type TApartInfo = {
  detailId: string;
  name: string;
  buildingType: string;
  roadAddress: string;
  zipCode: string;
  completionDate: string;
  developer: string;
  constructor: string; //시공사
  numberOfUnits: number; //세대 수
  buildingStructure: string; // 건물구조
  managementType: string; // 관리방식
  heatingType: string; //난방방식
  cctvCount: number; //CCTV 대수(대)
  totalParkingSpaces: number; //총주차 대수(대)
  managementOfficeAddress: string; //관리사무소 주소
  managementOfficeContact: string; //관리사무소 연락처
  managementOfficeFax: string; //관리사무소 팩스
  housingManager: string; //주택관리업자
  amenities: string[]; //부대복리시설
  monthlyMaintenanceFees: {}; //월별 관리비
};

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
