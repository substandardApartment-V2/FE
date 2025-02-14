import buildingIcon from "@/assets/Main/ApartInfo/buildingIcon.svg";
import outsiderIcon from "@/assets/Main/DetailInfo/outsiderIcon.svg";
import parkingIcon from "@/assets/Main/DetailInfo/parkingIcon.svg";
import electricCarIcon from "@/assets/Main/DetailInfo/electricCarIcon.svg";
import disinfectionIcon from "@/assets/Main/DetailInfo/disinfectionIcon.svg";
import securityIcon from "@/assets/Main/DetailInfo/securityIcon.svg";
import cleaningIcon from "@/assets/Main/DetailInfo/cleaningIcon.svg";
import generalManagementIcon from "@/assets/Main/DetailInfo/generalManagementIcon.svg";

// 아파트 디테일 정보 서브타이틀 매핑 객체
export const titleMapping = {
  building: {
    title: "건물",
    icon: buildingIcon,
    subTitle: {
      maxFloorCount: "최고층 수",
      basementFloorCount: " 지하층 수",
      passengerCargoElevatorCount: "승강기 수(동 단위)",
      buildingStructure: "건물 구조",
    },
  },
  accessibleToPublic: {
    title: "외부인 개방여부",
    icon: outsiderIcon,
    subTitle: {
      groundAccessibleToPublic: "지상",
      undergroundAccessibleToPublic: "지하",
    },
  },
  parking: {
    title: "주차 대수",
    icon: parkingIcon,
    subTitle: {
      groundParkingSpaces: "지상",
      undergroundParkingSpaces: "지하",
    },
  },
  evCharging: {
    title: "전기차",
    icon: electricCarIcon,
    subTitle: {
      groundEvChargerCount: "지상 충전시설 대수",
      undergroundEvChargerCount: "지하 충전시설 대수",
      groundEvParkingSpaces: "지상전용 주차면수",
      undergroundEvParkingSpaces: "지하전용 주차면수",
    },
  },
  disinfectionManagement: {
    title: "소독관리",
    icon: disinfectionIcon,
    subTitle: {
      managementType: "소독 방식",
      contractor: "계약업체",
      annualFrequency: "연간 소독 횟수",
    },
  },
  securityManagement: {
    title: "경비관리",
    icon: securityIcon,
    subTitle: {
      managementType: "관리 방식",
      contractor: "계약업체",
      staffCount: "인원",
    },
  },
  cleaningManagement: {
    title: "청소관리",
    icon: cleaningIcon,
    subTitle: {
      managementType: "관리 방식",
      contractor: "계약업체",
      foodWasteDisposalMethod: "음식물 처리 방식",
    },
  },
  generalManagement: {
    title: "일반관리",
    icon: generalManagementIcon,
    subTitle: {
      staffCount: "인원",
    },
  },
};
