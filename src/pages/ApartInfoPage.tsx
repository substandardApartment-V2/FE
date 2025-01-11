// import Home from "@/components/Main/Home/Home";
import Home from "@/components/Main/Home/Home";
import styles from "./ApartInfoPage.module.scss";
import ApartInfo from "@/components/Main/ApartInfo/ApartInfo";
import ApartMap from "@/components/Main/ApartMap";

const ApartInfoPage = () => {
  return (
    <div className={styles.home}>
      {/* <Home /> */}
      <ApartInfo />
      <ApartMap />
    </div>
  );
};

export default ApartInfoPage;
