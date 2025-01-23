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
            <span className={styles.title}>
              관리비 개별사용료 - <span>59㎡</span>
            </span>
            <DropDown
              select="개별사용료"
              fontSize="MEDIUM"
              outerBorder={true}
              dropDownContents={dropDownContents}
              width="MEDIUM"
            />
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
        <span className={styles.title}>
          관리비 개별사용료 - <span>82㎡</span>
        </span>
        <MaintanceChargeChart />
      </section>
      <section className={styles.eachArea}>
        <span className={styles.title}>
          관리비 개별사용료 - <span>114㎡</span>
        </span>
        <MaintanceChargeChart />
      </section>
    </section>
  );
}
