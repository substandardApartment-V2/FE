import { useState } from "react";
import styles from "./DropDown.module.scss";
import dropDownOpen from "@/assets/dropDown/dropDownOpen.svg";
import dropDownClose from "@/assets/dropDown/dropDownClose.svg";
import DropDownList from "./DropDownList";
import { TListContents } from "@/types/TDropDownTypes";
import classNames from "classnames";

export type TDropDownProps = {
  dropDownContents: TListContents[];
  select: string;
  fontSize: "SMALL" | "MEDIUM" | "LARGE";
  outerBorder: boolean;
  width: "SMALL" | "MEDIUM" | "LARGE";
};

export default function DropDown(props: TDropDownProps) {
  const [isShow, setIsShow] = useState(false);

  const widthSizeHandler = {
    SMALL: styles.small,
    MEDIUM: styles.medium,
    LARGE: styles.large,
  };

  const titleFontSizeHandler = {
    SMALL: styles.small,
    MEDIUM: styles.medium,
    LARGE: styles.large,
  };

  return (
    <section className={styles.dropDownContainer}>
      <div
        className={classNames(
          styles.dropDown,
          props.outerBorder ? styles.dropDownBorder : "",
          widthSizeHandler[props.width]
        )}
        onClick={() => {
          setIsShow((prevState) => !prevState);
        }}
      >
        <span
          className={classNames(
            styles.selectContent,
            titleFontSizeHandler[props.fontSize]
          )}
        >
          {props.select}
        </span>
        <img src={isShow ? dropDownClose : dropDownOpen} alt="dropdown icon" />
      </div>
      {isShow && (
        <ul className={styles.dropDownContent}>
          {props.dropDownContents.map((dropDownContent) => (
            <DropDownList
              key={dropDownContent.content}
              content={dropDownContent}
              setIsShow={setIsShow}
              border={props.outerBorder}
              fontSize={props.fontSize}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
