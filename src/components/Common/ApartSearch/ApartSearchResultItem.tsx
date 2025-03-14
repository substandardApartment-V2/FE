import infoIcon from "@/assets/Search/infoIcon.svg";
import locationIcon from "@/assets/Search/locationIcon.svg";
import useLocationPath from "@/hooks/Map/useLocationPath";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { TApartMarkerData, useMarkerStore } from "@/store/useMarkerStore";
import getApartData from "@/utils/api/getApartData";
import styles from "./ApartSearchResult.module.scss";

type ApartResultItemProps = {
  listData: TApartMarkerData;
};

export default function ApartSearchResultItem({
  listData,
}: ApartResultItemProps) {
  const map = useMarkerStore((state) => state.map);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setApartInfo = useMainInfoStore((state) => state.setApartInfo);
  const setIsSlide = useMainInfoStore((state) => state.setIsSlide);
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const locationPath = useLocationPath();

  const selectSearchApartHandler = (latitude: number, longitude: number) => {
    if (map) {
      const newLocation = new naver.maps.LatLng(latitude, longitude);
      map.setCenter(newLocation);
      map.setZoom(17);
    }
  };

  const selectSearchApartInfoHandler = async (aptId: string) => {
    const data = await getApartData(
      `${import.meta.env.VITE_LOCAL_API_CALL}/${locationPath}/info?id=${aptId}`
    );
    setIsSlide(true);
    setIsDetailInfo(null);
    setMainInfo("SELECT");
    setApartInfo(data.data);
  };

  return (
    <li
      className={styles.searchResult}
      onClick={() => {
        selectSearchApartHandler(listData.latitude, listData.longitude);
      }}
    >
      <div className={styles.searchTitle}>
        <h2>{listData.aptName}</h2>
        <p>{listData.aptAddress}</p>
      </div>
      <div className={styles.searchButton}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            selectSearchApartInfoHandler(listData.aptId);
          }}
        >
          <span>
            <img src={infoIcon} alt="정보 보기 아이콘" />
          </span>
          <em>정보 보기</em>
        </button>
        <button>
          <span>
            <img src={locationIcon} alt="위치 보기 아이콘" />
          </span>
          <em>위치 보기</em>
        </button>
      </div>
    </li>
  );
}
