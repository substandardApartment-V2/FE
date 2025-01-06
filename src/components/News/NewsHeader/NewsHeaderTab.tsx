import slash from "../../../assets/news/slash.svg";
import { useNewsStore } from "../../../store/useNewsStore";
import newsHeader from "./NewsHeader.module.scss";

const NewsHeaderTab = () => {
  const activeTab = useNewsStore((state) => state.activeTab);
  const setActiveTab = useNewsStore((state) => state.setActiveTab);

  return (
    <div className={newsHeader.headerTab}>
      <button
        className={activeTab === "apartNews" ? newsHeader.active : ""}
        onClick={() => setActiveTab("apartNews")}
      >
        아파트 뉴스
      </button>
      <span>
        <img src={slash} alt="슬래시" />
      </span>
      <button
        className={activeTab === "weakNews" ? newsHeader.active : ""}
        onClick={() => setActiveTab("weakNews")}
      >
        부실공사 뉴스
      </button>
    </div>
  );
};

export default NewsHeaderTab;
