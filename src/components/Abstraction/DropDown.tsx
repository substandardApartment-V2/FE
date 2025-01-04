import { useState } from "react";
import styles from "./DropDown.module.scss";
import dropDownIcon from "../../assets/dropDownIcon.svg";
import DropDownList from "./DropDownList";

export type TListContents = {
  content: string;
  contentFn: () => void;
};

export type TDropDownProps = {
  listContents: TListContents[];
  select: string;
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
        <span>{currentSelect}</span>
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
