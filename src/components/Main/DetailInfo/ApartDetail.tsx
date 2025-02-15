import styles from "./ApartDetail.module.scss";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIconD.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import ApartDetailList from "./ApartDetailList";
import { transformedArrayHandler } from "@/utils/mapping/TransFormedArray";

export default function ApartDetail() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const apartDetailInfo = useApartInfoStore((state) => state.apartDetailInfo);

  const transformedArray = transformedArrayHandler(apartDetailInfo);

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
        {transformedArray.map((listData, index) => (
          <ApartDetailList
            key={index}
            title={listData.title}
            data={listData.data}
          />
        ))}
      </ul>
    </section>
  );
}
