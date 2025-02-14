import { create } from "zustand";

type TApartInfo = {
  detailId: string; //상세 아파트 id
  name: string; //아파트 이름
  buildingType: string; //아파트 건물구조
  roadAddress: string; //아파트 주소
  zipCode: string; //아파트 우편번호
  completionDate: string; //아파트 완공일
  developer: string; //시행사
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
