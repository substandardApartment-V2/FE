import { useState } from "react";
import styles from "./DropDown.module.scss";
import dropDownIcon from "../../assets/dropDownIcon.svg";
import DropDownList from "./DropDownList";
import { TListContents } from "../../types/DropDownTypes";
import classNames from "classnames";

export type TDropDownProps = {
  listContents: TListContents[];
  select: string;
  fontSize: string;
};

export default function DropDown(props: TDropDownProps) {
  const [isShow, setIsShow] = useState(false);
  const [currentSelect, setCurrentSelect] = useState(props.select);

  return (
    <>
      <div
        className={styles.dropDown}
        onClick={() => {
          setIsShow((prevState) => !prevState);
        }}
      >
        <span
          className={classNames(styles.selectContent, styles[props.fontSize])}
        >
          {currentSelect}
        </span>
        <img src={dropDownIcon} alt="dropdown icon" />
      </div>
      {isShow && (
        <ul className={styles.dropDownContent}>
          {props.listContents.map((listContent) => (
            <DropDownList
              key={listContent.content}
              content={listContent}
              setCurrentSelect={setCurrentSelect}
              setIsShow={setIsShow}
            />
          ))}
        </ul>
      )}
    </>
  );
}
