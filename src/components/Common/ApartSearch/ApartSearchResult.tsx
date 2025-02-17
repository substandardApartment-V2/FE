import styles from "./ApartSearchResult.module.scss";
import { useMarkerStore } from "@/store/useMarkerStore";
import { TApartMarkerData } from "@/store/useMarkerStore";
import ApartSearch from "./ApartSearch";

export default function ApartSearchResult() {
  const markerData = useMarkerStore((state) => state.markerData);
  const map = useMarkerStore((state) => state.map);

  const selectSearchApartHandler = (latitude: number, longitude: number) => {
    if (map) {
      const newLocation = new naver.maps.LatLng(latitude, longitude);
      map.setCenter(newLocation);
      map.setZoom(17);
    }
  };

  return (
    <section className={styles.apartSearchResult}>
      <ApartSearch />
      <ul className={styles.searchResultContainer}>
        {markerData.map((listData: TApartMarkerData) => (
          <li
            className={styles.searchResult}
            onClick={() => {
              selectSearchApartHandler(listData.latitude, listData.longitude);
            }}
          >
            <h2>{listData.aptName}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
}
