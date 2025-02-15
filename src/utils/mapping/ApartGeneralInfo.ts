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
import managementOfficeIcon from "@/assets/Main/GeneralInfo/Amenities/managementOfficeIcon.svg";
import bikeIcon from "@/assets/Main/GeneralInfo/Amenities/bikeIcon.svg";
import seniorCenterIcon from "@/assets/Main/GeneralInfo/Amenities/seniorCenterIcon.svg";
import communityFacilitiesIcon from "@/assets/Main/GeneralInfo/Amenities/communityFacilitiesIcon.svg";
import communityLocationIcon from "@/assets/Main/GeneralInfo/Amenities/communityLocationIcon.svg";
import playgroundIcon from "@/assets/Main/GeneralInfo/Amenities/playgroundIcon.svg";
import childCareIcon from "@/assets/Main/GeneralInfo/Amenities/childCareIcon.svg";

export const apartEtcInfoTitleMapping = {
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

export const amenitiesIconMapping = {
  관리사무소: managementOfficeIcon,
  자전거보관소: bikeIcon,
  노인정: seniorCenterIcon,
  주민공동시설: communityFacilitiesIcon,
  커뮤니티공간: communityLocationIcon,
  휴게시설: communityLocationIcon,
  어린이놀이터: playgroundIcon,
  보육시설: childCareIcon,
  문고: childCareIcon,
  유치원: childCareIcon,
};
