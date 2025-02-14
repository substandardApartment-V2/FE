import { create } from "zustand";

type TIsDetailInfo = null | "APARTINFO" | "WEAKRANK" | "MAINTANCE" | "NOTICE";

type TBulding = {
  maxFloorCount: number; //최고층 수
  basementFloorCount: number; //지하층 수
  passengerCargoElevatorCount: number; //승강기 수(동 단위)
  buildingStructure: string; //건물 구조
};

type TPropertyInfo = {
  approvalDate: string; //준공일
  developer: string; //시행사
  constructor: string; //시공사
  numberOfUnits: number; //세대수
};

type TAccessibleToPublic = {
  groundAccessibleToPublic: boolean; // 외부인개방여부(지상)
  undergroundAccessibleToPublic: boolean; // 외부인개방여부(지하)
};

type TParking = {
  groundParkingSpaces: number; //지상
  undergroundParkingSpaces: number; //지하
};

export type TEvChargingFacilitiesDetails = {
  location: string;
  type: string;
  connector: string;
  chargingSpeed: string;
  count: number; //전기차 충전기 대수
  provider: string;
};

type TEvCharging = {
  groundEvChargerCount: number; //지상 충전시설 대수
  undergroundEvChargerCount: number; //지하 충전시설 대수
  groundEvParkingSpaces: number; // 지상전용 주차면수
  undergroundEvParkingSpaces: number; //지하전용 주차면수
  evChargingFacilitiesDetails: TEvChargingFacilitiesDetails[];
};

type TDisinfectionManagement = {
  managementType: string; //소독 방식
  contractor: string; //계약업체
  annualFrequency: number; //연간 소독 횟수
};

type TSecurityManagement = {
  managementType: string; //관리 방식
  contractor: string; //계약업체
  staffCount: number; //인원
};

type TCleaningManagement = {
  managementType: string; //관리 방식
  contractor: string; //계약업체
  staffCount: number; //인원
};

type TGeneralMangement = {
  staffCount: number; //인원
};

type TApartDetailInfo = {
  buliding: TBulding;
  propertyInfo: TPropertyInfo;
  accessibleToPublic: TAccessibleToPublic;
  parking: TParking;
  evCharing: TEvCharging;
  disinfectionManagement: TDisinfectionManagement;
  securityManagement: TSecurityManagement;
  cleaningManagement: TCleaningManagement;
  generalManagement: TGeneralMangement;
};

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
