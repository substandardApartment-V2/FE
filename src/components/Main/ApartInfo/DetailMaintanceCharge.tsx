import MaintanceChargeChart from "../Chart/MaintanceChargeChart";
import styles from "./DetailMaintanceCharge.module.scss";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIcon.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function DetailMaintanceCharge() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);

  return (
    <section className={styles.maintances}>
      <section className={styles.eachArea}>
        <div>
          <div>
            <span className={styles.title}>개별사용료</span>
          </div>
          <button
            onClick={() => {
              setIsDetailInfo(null);
            }}
          >
            <img src={closeButtonIcon} />
          </button>
        </div>
        <MaintanceChargeChart />
      </section>
      <section className={styles.eachArea}>
        <span className={styles.title}>유지비</span>
        <MaintanceChargeChart />
      </section>
      <section className={styles.eachArea}>
        <span className={styles.title}>점검비</span>
        <MaintanceChargeChart />
      </section>
    </section>
  );
}
