import styles from "./ApartInfoPage.module.scss";
import ApartInfo from "@/components/Main/ApartInfo/ApartInfo";
import ApartMap from "@/components/Main/ApartMap/ApartMap";
import ApartSearchResult from "@/components/Common/ApartSearch/ApartSearchResult";
import WholeApartInfo from "@/components/Main/WholeApartInfo/WholeApartInfo";
import { useMainInfoStore } from "@/store/useMainInfoStore";

const ApartInfoPage = () => {
  const mainInfo = useMainInfoStore((state) => state.mainInfo);

  return (
    <div className={styles.home}>
      {mainInfo === "WHOLE" && <WholeApartInfo />}
      {mainInfo === "SELECT" && <ApartInfo />}
      {mainInfo === "SEARCH" && <ApartSearchResult />}
      <ApartMap />
    </div>
  );
};

export default ApartInfoPage;
