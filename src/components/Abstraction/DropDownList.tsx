import React from "react";

type TDropDownLits = {
  content: string;
  setCurrentSelect: React.Dispatch<React.SetStateAction<string>>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DropDownList(props: TDropDownLits) {
  return (
    <li
      onClick={() => {
        props.setCurrentSelect(props.content);
        props.setIsShow((prevState) => !prevState);
      }}
    >
      {props.content}
    </li>
  );
}
