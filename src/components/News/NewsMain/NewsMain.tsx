import { useNewsStore } from "@/store/useNewsStore";
import ApartNewsList from "./ApartNewsList";
import WeakApartNewsList from "./WeakApartNewsList";

const NewsMain = () => {
  const activeTab = useNewsStore((state) => state.activeTab);

  return (
    <div>
      {activeTab === "apartNews" ? <ApartNewsList /> : <WeakApartNewsList />}
    </div>
  );
};

export default NewsMain;
