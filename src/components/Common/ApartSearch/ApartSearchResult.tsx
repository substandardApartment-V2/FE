// 아파트 검색 결과 컴포넌트

import infoIcon from "@/assets/Search/infoIcon.svg";
import locationIcon from "@/assets/Search/locationIcon.svg";
import useLocationPath from "@/hooks/Map/useLocationPath";
import { useInfiniteScroll } from "@/hooks/Search/useInfinityScroll";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { useMarkerStore } from "@/store/useMarkerStore";
import { useSearchStore } from "@/store/useSearchStore";
import getApartData from "@/utils/api/getApartData";
import styles from "./ApartSearchResult.module.scss";
import selectMapMarkerIcon from "@/assets/Main/Map/selectMapMarkerIcon.svg";

export default function ApartSearchResult() {
  const keyword = useSearchStore((state) => state.keyword);
  const { items, loading, ref, totalCount } = useInfiniteScroll(keyword);
  const map = useMarkerStore((state) => state.map);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setApartInfo = useMainInfoStore((state) => state.setApartInfo);
  const setIsSlide = useMainInfoStore((state) => state.setIsSlide);
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const locationPath = useLocationPath();
  const markers = useMarkerStore((state) => state.markers);
  const setSelectMarker = useMarkerStore((state) => state.setSelectMarker);

  const selectSearchApartHandler = (latitude: number, longitude: number) => {
    if (map) {
      const newLocation = new naver.maps.LatLng(latitude, longitude);
      map.setCenter(newLocation);
      map.setZoom(17);
    }
  };

  const selectSearchApartInfoHandler = async (
    aptId: string,
    longitude: number,
    latitude: number
  ) => {
    const data = await getApartData(
      `${import.meta.env.VITE_SERVER_API_CALL}/${locationPath}/info?id=${aptId}`
    );

    const selectMarker = markers.find((marker) => {
      const markerLongitude = marker.getPosition().x;
      const markerLatitude = marker.getPosition().y;
      return markerLatitude === latitude && markerLongitude === longitude;
    });

    if (selectMarker) {
      selectMarker.setIcon({
        url: selectMapMarkerIcon,
        size: new naver.maps.Size(35, 40),
        scaledSize: new naver.maps.Size(35, 40),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(12, 34),
      });
      setSelectMarker(selectMarker);
    }

    setIsSlide(true);
    setIsDetailInfo(null);
    setMainInfo("SELECT");
    setApartInfo(data.data);
  };

  return (
    <section className={styles.apartSearchResult}>
      <p className={styles.apartSearchCount}>
        총 <em>{totalCount}</em>개의 검색결과
      </p>
      <ul className={styles.searchResultContainer}>
        {items.length > 0
          ? items.map((listData, index) => (
              <li
                key={index}
                className={styles.searchResult}
                onClick={() => {
                  selectSearchApartHandler(
                    listData.latitude,
                    listData.longitude
                  );
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
                      selectSearchApartInfoHandler(
                        listData.aptId,
                        listData.longitude,
                        listData.latitude
                      );
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
            ))
          : !loading && (
              <li className={styles.noResults}>
                <span>?</span>죄송합니다.
                <br /> 현재 검색하신 아파트에 대한 정보를 찾을 수 없습니다.
              </li>
            )}

        <li ref={ref} className={styles.loadingIndicator}>
          {loading && <div className={styles.loadingSpinner}></div>}
        </li>
      </ul>
    </section>
  );
}
