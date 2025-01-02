import { useState } from "react";
import styles from "./DropDown.module.scss";
import dropDownIcon from "../../assets/dropDownIcon.svg";

export default function DropDown() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div
        className={styles.dropDown}
        onClick={() => {
          setIsShow((prevState) => !prevState);
        }}
      >
        <span>최신순</span>
        <img src={dropDownIcon} alt="dropdown icon" />
      </div>
      {isShow && (
        <ul className={styles.dropDownContent}>
          <li>최신순</li>
          <li>오래된순</li>
        </ul>
      )}
    </>
  );
}
