import { useNewsStore } from "@/store/useNewsStore";
import NewsList from "./NewsList";

const NewsMain = () => {
  const activeTab = useNewsStore((state) => state.activeTab);

  return (
    <div>
      {activeTab === "apartNews" ? (
        <NewsList newsType="apt" updateTotalElements={true} />
      ) : (
        <NewsList newsType="defect" updateTotalElements={true} />
      )}
    </div>
  );
};

export default NewsMain;
