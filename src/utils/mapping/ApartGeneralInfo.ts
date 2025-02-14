import amenitiesIcon from "@/assets/Main/GeneralInfo/amenitiesIcon.svg";
import structureIcon from "@/assets/Main/GeneralInfo/structureIcon.svg";
import managementIcon from "@/assets/Main/GeneralInfo/managementIcon.svg";
import heatingIcon from "@/assets/Main/GeneralInfo/heatingIcon.svg";
import cctvIcon from "@/assets/Main/GeneralInfo/cctvIcon.svg";
import parkingIcon from "@/assets/Main/DetailInfo/parkingIcon.svg";
import evChargeIcon from "@/assets/Main/DetailInfo/electricCarIcon.svg";
import managementAddressIcon from "@/assets/Main/GeneralInfo/managementAddressIcon.svg";
import managementContactIcon from "@/assets/Main/GeneralInfo/managementContactIcon.svg";
import managementFaxIcon from "@/assets/Main/GeneralInfo/managementFaxIcon.svg";
import housingManagerIcon from "@/assets/Main/GeneralInfo/housingManagerIcon.svg";

export const titleMapping = {
  amenities: { title: "부대복리시설", icon: amenitiesIcon },
  buildingStructure: { title: "건물구조", icon: structureIcon },
  managementType: { title: "관리방식", icon: managementIcon },
  heatingType: { title: "난방방식", icon: heatingIcon },
  cctvCount: { title: "CCTV 대수", icon: cctvIcon },
  totalParkingSpaces: { title: "총주차 대수", icon: parkingIcon },
  totalGroundEvChargerCount: { title: "전기차 충전 시설", icon: evChargeIcon },
  managementOfficeAddress: {
    title: "관리사무소 주소",
    icon: managementAddressIcon,
  },
  managementOfficeContact: {
    title: "관리사무소 연락처",
    icon: managementContactIcon,
  },
  managementOfficeFax: { title: "관리사무소 팩스", icon: managementFaxIcon },
  housingManager: { title: "주택관리업자", icon: housingManagerIcon },
};
