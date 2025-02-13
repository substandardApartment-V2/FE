import styles from "./ApartInfoPage.module.scss";
import ApartInfo from "@/components/Main/ApartInfo/ApartInfo";
import ApartMap from "@/components/Main/ApartMap/ApartMap";
import WholeApartInfo from "@/components/Main/WholeApartInfo/WholeApartInfo";

const ApartInfoPage = () => {
  return (
    <div className={styles.home}>
      <WholeApartInfo />
      {/* <ApartInfo /> */}
      <ApartMap />
    </div>
  );
};

export default ApartInfoPage;
