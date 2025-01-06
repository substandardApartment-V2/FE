import { useState } from "react";
import styles from "./DropDown.module.scss";
import dropDownIcon from "../../assets/dropDownIcon.svg";
import DropDownList from "./DropDownList";
import { TListContents } from "../../types/TDropDownTypes";
import classNames from "classnames";

// DropDown컴포넌트 props type 정의
export type TDropDownProps = {
  dropDownContents: TListContents[]; // 드랍다운 컨텐츠 배열 타입 정의
  select: string; // 현재 선택된 컨텐츠 타입 정의
  fontSize?: "SMALL" | "MEDIUM"; // 10px, 13px 폰트 크기 타입 정의)
};

export default function DropDown(props: TDropDownProps) {
  const [isShow, setIsShow] = useState(false); // 드랍다운 on/off state -> false : off , true : on
  const [currentSelect, setCurrentSelect] = useState(props.select); // 현재 선택된 컨텐츠 state -> props로 사전정의한 컨테츠로 초기화

  return (
    <>
      <div
        className={styles.dropDown}
        onClick={() => {
          setIsShow((prevState) => !prevState);
        }}
      >
        <span
          className={classNames(
            styles.selectContent,
            props.fontSize ? styles[props.fontSize] : "MEDIUM"
          )} // font-size만 따로 적용하기 위한 다중 클래스네임 선택
        >
          {currentSelect}
        </span>
        <img src={dropDownIcon} alt="dropdown icon" />
      </div>
      {isShow && ( // 드랍다운 컨텐츠 영역
        <ul className={styles.dropDownContent}>
          {props.dropDownContents.map((dropDownContent) => (
            <DropDownList
              key={dropDownContent.content}
              content={dropDownContent}
              setCurrentSelect={setCurrentSelect}
              currentSelect={currentSelect}
              setIsShow={setIsShow}
            />
          ))}
        </ul>
      )}
    </>
  );
}
