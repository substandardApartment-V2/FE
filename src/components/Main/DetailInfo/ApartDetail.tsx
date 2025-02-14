import styles from "./ApartDetail.module.scss";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIconD.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import ApartDetailList from "./ApartDetailList";
import { TTitle } from "@/types/TMain/TApartDetailInfoTypes";

export default function ApartDetail() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const apartDetailInfo = useApartInfoStore((state) => state.apartDetailInfo);

  const transformedArray = apartDetailInfo
    ? Object.entries(apartDetailInfo).map(([key, value]) => ({
        title: key as TTitle,
        data: value,
      }))
    : [];

  return (
    <section className={styles.building}>
      <button
        onClick={() => {
          setIsDetailInfo(null);
        }}
      >
        <img src={closeButtonIcon} alt="close icon" />
      </button>
      <ul>
        {transformedArray.map((data, index) => (
          <ApartDetailList key={index} title={data.title} data={data.data} />
        ))}
      </ul>
    </section>
  );
}
