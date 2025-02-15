export type TAptInfo = {
  detailId: string;
  name: string;
  roadAddress: string;
  zipCode: string;
};

export type TBuildInfo = {
  completionDate: string;
  developer: string;
  constructor: string;
  numberOfUnits: number;
};

export type TSellingPrice = {
  nextArea: number;
  price: number;
};

export type TData = {
  month: string;
  fee: number;
};

export type TMonthlyMaintenanceFees = {
  year: string;
  data: TData[];
};

export type TAmenities =
  | "노인정"
  | "관리사무소"
  | "보육시설"
  | "어린이놀이터"
  | "문고"
  | "주민공동시설"
  | "휴게시설"
  | "유치원"
  | "자전거보관소"
  | "커뮤니티공간";

export type TEtcInfo = {
  amenities: TAmenities[];
  buildingStructure: string;
  managementType: string;
  heatingType: string;
  cctvCount: number;
  totalParkingSpaces: number;
  totalGroundEvChargerCount: number;
  managementOfficeAddress: string;
  managementOfficeContact: string;
  managementOfficeFax: string;
  housingManager: string;
};

export type TApartInfo = {
  aptInfo: TAptInfo;
  buildInfo: TBuildInfo;
  sellingPrice: TSellingPrice[];
  monthlyMaintenanceFees: TMonthlyMaintenanceFees;
  etcInfo: TEtcInfo;
};

export type TEtcInfoTitle =
  | "amenities"
  | "buildingStructure"
  | "managementType"
  | "heatingType"
  | "cctvCount"
  | "totalParkingSpaces"
  | "totalGroundEvChargerCount"
  | "managementOfficeAddress"
  | "managementOfficeContact"
  | "managementOfficeFax"
  | "housingManager";
