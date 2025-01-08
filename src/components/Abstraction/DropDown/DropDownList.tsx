import React from "react";
import { TListContents } from "../../../types/TDropDownTypes";
import styles from "./DropDownList.module.scss";
import classNames from "classnames";

type TDropDownListProps = {
  content: TListContents;
  setCurrentSelect: React.Dispatch<React.SetStateAction<string>>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  border: boolean;
};

export default function DropDownList(props: TDropDownListProps) {
  return (
    <li
      className={classNames(
        styles.dropDownList,
        props.border ? styles.borderTop : ""
      )}
      key={props.content.content}
      onClick={() => {
        props.content.contentFn();
        props.setCurrentSelect(props.content.content);
        props.setIsShow((prevState) => !prevState);
      }}
    >
      <span>{props.content.content}</span>
    </li>
  );
}
