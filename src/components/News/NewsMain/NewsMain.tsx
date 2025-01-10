import { useNewsStore } from "@/store/useNewsStore";
import ApartNewsList from "./ApartNewsList";
import PoorApartNewsList from "./PoorApartNewsList";

const NewsMain = () => {
  const activeTab = useNewsStore((state) => state.activeTab);

  return (
    <div>
      {activeTab === "apartNews" ? <ApartNewsList /> : <PoorApartNewsList />}
    </div>
  );
};

export default NewsMain;
