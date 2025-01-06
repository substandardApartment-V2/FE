import newsHeader from "./NewsHeader.module.scss";

const NewsHeaderDropDown = () => {
  return (
    <div className={newsHeader.headerDropDown}>
      <select name="" id="">
        <option value="">최신순</option>
        <option value="">오래된순</option>
      </select>
    </div>
  );
};

export default NewsHeaderDropDown;
