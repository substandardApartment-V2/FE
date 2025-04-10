// 아파트 관리비 컴포넌트

import MaintanceChargeChart from "../../Chart/MaintanceChargeChart";
import detailButtonIcon from "@/assets/Main/ApartInfo/detailButtonIcon.svg";
import styles from "./ApartMaintanceCharge.module.scss";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";

export default function ApartMaintanceCharge() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  return (
    <section className={styles.maintanceChart}>
      <div className={styles.chartTitle}>
        <strong>관리비</strong>
        {apartInfo?.monthlyMaintenanceFees.data && (
          <button
            onClick={() => {
              if (isDetailInfo === "MAINTANCE") {
                setIsDetailInfo(null);
              } else setIsDetailInfo("MAINTANCE");
            }}
          >
            <span>자세히보기</span>
            <img src={detailButtonIcon} alt="apart maintance charge detail" />
          </button>
        )}
      </div>
      {apartInfo?.monthlyMaintenanceFees.data ? (
        <MaintanceChargeChart data={apartInfo?.monthlyMaintenanceFees.data} />
      ) : (
        <div className={styles.noData}>관리비 정보가 존재하지 않습니다.</div>
      )}
    </section>
  );
}
