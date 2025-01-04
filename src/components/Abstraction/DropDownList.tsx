import React from "react";
import { TListContents } from "./DropDown";

type TDropDownLits = {
  content: TListContents;
  setCurrentSelect: React.Dispatch<React.SetStateAction<string>>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DropDownList(props: TDropDownLits) {
  return (
    <li
      key={props.content.content}
      onClick={() => {
        props.content.contentFn();
        props.setCurrentSelect(props.content.content);
        props.setIsShow((prevState) => !prevState);
      }}
    >
      {props.content.content}
    </li>
  );
}
