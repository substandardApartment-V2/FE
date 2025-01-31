import { useState } from "react";
import styles from "./ApartPrice.module.scss";
import DropDown from "@/components/Abstraction/DropDown/DropDown";

export default function ApartPrice() {
  const [isShow, setIsShow] = useState("59㎡");

  const dropDownContents = [
    {
      content: "59㎡",
      contentFn: () => {
        setIsShow("59㎡");
      },
    },
    {
      content: "79㎡",
      contentFn: () => {
        setIsShow("79㎡");
      },
    },
    {
      content: "118㎡",
      contentFn: () => {
        setIsShow("118㎡");
      },
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
            select={isShow}
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
