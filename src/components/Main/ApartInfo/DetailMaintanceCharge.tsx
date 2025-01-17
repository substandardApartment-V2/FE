import MaintanceChargeChart from "../Chart/MaintanceChargeChart";
import styles from "./DetailMaintanceCharge.module.scss";
import DropDown from "@/components/Abstraction/DropDown/DropDown";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIcon.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function DetailMaintanceCharge() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);

  const dropDownContents = [
    {
      content: "최신순",
      contentFn: () => {},
    },
    {
      content: "과거순",
      contentFn: () => {},
    },
  ];
  return (
    <section className={styles.maintance}>
      <section>
        <div>
          <div>
            <span className={styles.title}>관리비 개별사용료 - 59㎡ </span>
            <DropDown
              select="최신순"
              fontSize="MEDIUM"
              outerBorder={true}
              dropDownContents={dropDownContents}
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
      <section>
        <span className={styles.title}>관리비 개별사용료 - 82㎡ </span>
        <MaintanceChargeChart />
      </section>
      <section>
        <span className={styles.title}>관리비 개별사용료 - 114㎡ </span>
        <MaintanceChargeChart />
      </section>
    </section>
  );
}
