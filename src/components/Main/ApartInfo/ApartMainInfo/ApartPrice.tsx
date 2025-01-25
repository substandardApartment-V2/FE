import styles from "./ApartPrice.module.scss";
import DropDown from "@/components/Abstraction/DropDown/DropDown";

export default function ApartPrice() {
  const dropDownContents = [
    {
      content: "59㎡",
      contentFn: () => {},
    },
    {
      content: "79㎡",
      contentFn: () => {},
    },
    {
      content: "118㎡",
      contentFn: () => {},
    },
  ];

  return (
    <section className={styles.apartPrice}>
      <strong className={styles.priceTitle}>한달 매매가</strong>
      <div className={styles.priceContent}>
        <span className={styles.price}>8억 8500만원</span>
        <div className={styles.selectArea}>
          <span className={styles.areaTitle}>전용면적</span>
          <DropDown
            select="59㎡"
            fontSize="SMALL"
            outerBorder={true}
            dropDownContents={dropDownContents}
            width="SMALL"
          />
        </div>
      </div>
    </section>
  );
}
