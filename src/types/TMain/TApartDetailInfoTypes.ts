export type TIsDetailInfo =
  | null
  | "APARTINFO"
  | "WEAKRANK"
  | "MAINTANCE"
  | "NOTICE";

export type TBuilding = {
  maxFloorCount: number; //최고층 수
  basementFloorCount: number; //지하층 수
  passengerCargoElevatorCount: number; //승강기 수(동 단위)
  buildingStructure: string; //건물 구조
};

export type TAccessibleToPublic = {
  groundAccessibleToPublic: boolean; // 외부인개방여부(지상)
  undergroundAccessibleToPublic: boolean; // 외부인개방여부(지하)
};

export type TParking = {
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

export type TEvCharging = {
  groundEvChargerCount: number; //지상 충전시설 대수
  undergroundEvChargerCount: number; //지하 충전시설 대수
  groundEvParkingSpaces: number; // 지상전용 주차면수
  undergroundEvParkingSpaces: number; //지하전용 주차면수
  evChargingFacilitiesDetails: TEvChargingFacilitiesDetails[];
};

export type TDisinfectionManagement = {
  managementType: string; //소독 방식
  contractor: string; //계약업체
  annualFrequency: number; //연간 소독 횟수
};

export type TSecurityManagement = {
  managementType: string; //관리 방식
  contractor: string; //계약업체
  staffCount: number; //인원
};

export type TCleaningManagement = {
  managementType: string; //관리 방식
  contractor: string; //계약업체
  staffCount: number; //인원
};

export type TGeneralMangement = {
  staffCount: number; //인원
};

export type TApartDetailInfo = {
  building?: TBuilding;
  accessibleToPublic?: TAccessibleToPublic;
  parking?: TParking;
  evCharging?: TEvCharging;
  disinfectionManagement?: TDisinfectionManagement;
  securityManagement?: TSecurityManagement;
  cleaningManagement?: TCleaningManagement;
  generalManagement?: TGeneralMangement;
};

// Partial로 객체 속성 선택적으로 데이터 타입 선택
export type TApartDetailInfoList = Partial<
  TBuilding &
    TAccessibleToPublic &
    TParking &
    TEvCharging &
    TDisinfectionManagement &
    TSecurityManagement &
    TCleaningManagement &
    TGeneralMangement
>;

export type TTitle =
  | "building"
  | "accessibleToPublic"
  | "parking"
  | "evCharging"
  | "disinfectionManagement"
  | "securityManagement"
  | "cleaningManagement"
  | "generalManagement";

export type TSubTitle = {
  building: {
    maxFloorCount: string;
    basementFloorCount: string;
    passengerCargoElevatorCount: string;
    buildingStructure: string;
  };
  accessibleToPublic: {
    groundAccessibleToPublic: string;
    undergroundAccessibleToPublic: string;
  };
  parking: {
    groundParkingSpaces: string;
    undergroundParkingSpaces: string;
  };
  evCharging: {
    groundEvChargerCount: string;
    undergroundEvChargerCount: string;
    groundEvParkingSpaces: string;
    undergroundEvParkingSpaces: string;
  };
  disinfectionManagement: {
    managementType: string;
    contractor: string;
    annualFrequency: string;
  };
  securityManagement: {
    managementType: string;
    contractor: string;
    staffCount: string;
  };
  cleaningManagement: {
    managementType: string;
    contractor: string;
    foodWasteDisposalMethod: string;
  };
  generalManagement: {
    staffCount: string;
  };
};
