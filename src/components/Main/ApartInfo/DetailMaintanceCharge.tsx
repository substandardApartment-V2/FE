import MaintanceChargeChart from "../Chart/MaintanceChargeChart";
import styles from "./DetailMaintanceCharge.module.scss";
import DropDown from "@/components/Abstraction/DropDown/DropDown";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIcon.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function DetailMaintanceCharge() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);

  const dropDownContents = [
    {
      content: "개별사용료",
      contentFn: () => {},
    },
    {
      content: "과거순",
      contentFn: () => {},
    },
  ];
  return (
    <section className={styles.maintances}>
      <section className={styles.eachArea}>
        <div>
          <div>
            <span className={styles.title}>개별사용료</span>
            {/* <DropDown
              select="개별사용료"
              fontSize="SMALL"
              outerBorder={true}
              dropDownContents={dropDownContents}
              width="LARGE"
            /> */}
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
