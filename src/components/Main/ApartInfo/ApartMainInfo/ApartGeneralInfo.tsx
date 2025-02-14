import styles from "./ApartGeneralInfo.module.scss";
import welfareIcon from "@/assets/Main/ApartInfo/welfareIcon.svg";
import childCareIcon from "@/assets/Main/ApartInfo/childCareIcon.svg";
import { useMainInfoStore } from "@/store/useMainInfoStore";

export default function ApartGeneralInfo() {
  const apartInfo = useMainInfoStore((state) => state.apartInfo);
  const amenitiesData = {
    title: "부대복리시설",
    content: apartInfo?.amenities,
  };

  const generalData = [
    { title: "건물구조", content: apartInfo?.buildingStructure },
    { title: "관리방식", content: apartInfo?.managementType },
    { title: "난방방식", content: apartInfo?.heatingType },
    { title: "CCTV 대수", content: apartInfo?.cctvCount },
    { title: "총주차 대수", content: apartInfo?.totalParkingSpaces },
    { title: "전기차 충전 시설", content: "0" },
    { title: "관리사무소 주소", content: apartInfo?.managementOfficeAddress },
    { title: "관리사무소 연락처", content: apartInfo?.managementOfficeContact },
    { title: "관리사무소 팩스", content: apartInfo?.managementOfficeFax },
    { title: "주택관리업자", content: apartInfo?.housingManager },
  ];

  return (
    <ul className={styles.apartGeneralInfo}>
      <li>
        <div className={styles.title}>
          <strong>부대복리시설</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <ul className={styles.amenities}>
          {amenitiesData.content?.map((listData, index) => {
            return (
              <li key={index}>
                <img src={childCareIcon} alt="childCare ICon" />
                <span>{listData}</span>
              </li>
            );
          })}
        </ul>
      </li>
      {generalData.map((listData) => {
        return (
          <li>
            <div className={styles.title}>
              <strong>{listData.title}</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <span className={styles.content}>{listData.content}</span>
          </li>
        );
      })}
    </ul>
  );
}
