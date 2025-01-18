import { useState } from "react";
import styles from "./DropDown.module.scss";
import dropDownOpen from "../../../assets/dropDown/dropDownOpen.svg";
import dropDownClose from "../../../assets/dropDown/dropDownClose.svg";
import DropDownList from "./DropDownList";
import { TListContents } from "../../../types/TDropDownTypes";
import classNames from "classnames";

export type TDropDownProps = {
  dropDownContents: TListContents[];
  select: string;
  fontSize?: "SMALL" | "MEDIUM";
  outerBorder: boolean;
};

export default function DropDown(props: TDropDownProps) {
  const [isShow, setIsShow] = useState(false);
  const [currentSelect, setCurrentSelect] = useState(props.select);

  return (
    <section className={styles.dropDownContainer}>
      <div
        className={classNames(
          styles.dropDown,
          props.outerBorder ? styles.dropDownBorder : ""
        )}
        onClick={() => {
          setIsShow((prevState) => !prevState);
        }}
      >
        <span
          className={classNames(
            styles.selectContent,
            props.fontSize ? styles[props.fontSize] : "MEDIUM"
          )}
        >
          {currentSelect}
        </span>
        <img src={isShow ? dropDownClose : dropDownOpen} alt="dropdown icon" />
      </div>
      {isShow && (
        <ul className={styles.dropDownContent}>
          {props.dropDownContents.map((dropDownContent) => (
            <DropDownList
              key={dropDownContent.content}
              content={dropDownContent}
              setCurrentSelect={setCurrentSelect}
              setIsShow={setIsShow}
              border={props.outerBorder}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
