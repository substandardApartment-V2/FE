import React from "react";
import { TListContents } from "../../types/DropDownTypes";
import dropDownIcon from "../../assets/dropDownIcon.svg";
import styles from "./DropDownList.module.scss";

// DropDownList컴포넌트 props type정의
type TDropDownListProps = {
  content: TListContents;
  currentSelect: string;
  setCurrentSelect: React.Dispatch<React.SetStateAction<string>>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DropDownList(props: TDropDownListProps) {
  return (
    <li
      className={styles.dropDownList}
      key={props.content.content}
      onClick={() => {
        props.content.contentFn();
        props.setCurrentSelect(props.content.content); // 선택한 컨텐츠로 현재 선택된 컨텐츠 렌더링
        props.setIsShow((prevState) => !prevState); // 드랍다운 컨텐츠 off
      }}
    >
      <span>{props.content.content}</span>
      {props.currentSelect === props.content.content && (
        <img src={dropDownIcon} alt="select dropdown content" />
      )}
    </li>
  );
}
