import MaintanceChargeChart from "../../Chart/MaintanceChargeChart";
import detailButtonIcon from "@/assets/Main/ApartInfo/detailButtonIcon.svg";
import styles from "./ApartMaintanceCharge.module.scss";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function ApartMaintanceCharge() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);

  return (
    <section className={styles.maintanceChart}>
      <div className={styles.chartTitle}>
        <strong>관리비 - 2024</strong>
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
      </div>
      <MaintanceChargeChart />
    </section>
  );
}
