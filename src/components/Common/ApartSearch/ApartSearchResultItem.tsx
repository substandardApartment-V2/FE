import selectMapMarkerIcon from "@/assets/Main/Map/selectMapMarkerIcon.svg";
import infoIcon from "@/assets/Search/infoIcon.svg";
import locationIcon from "@/assets/Search/locationIcon.svg";
import useLocationPath from "@/hooks/Map/useLocationPath";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { TApartMarkerData, useMarkerStore } from "@/store/useMarkerStore";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";
import { useSearchStore } from "@/store/useSearchStore";
import styles from "./ApartSearchResult.module.scss";
import axios from "axios";

type ApartResultItemProps = {
  listData: TApartMarkerData;
};

export default function ApartSearchResultItem({
  listData,
}: ApartResultItemProps) {
  const map = useMarkerStore((state) => state.map);
  const markers = useMarkerStore((state) => state.markers);

  const setSelectMarker = useMarkerStore((state) => state.setSelectMarker);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setApartInfo = useMainInfoStore((state) => state.setApartInfo);
  const setWeakApartInfo = useWeakApartInfoStore(
    (state) => state.setWeakApartInfo
  );
  const setIsSlide = useMainInfoStore((state) => state.setIsSlide);
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const setSelectMarkerId = useMarkerStore((state) => state.setSelectMarkerId);
  const setIsLoading = useMarkerStore((state) => state.setIsLoading);
  const setIsReset = useSearchStore((state) => state.setIsReset);
  const { apartSeparate } = useLocationPath();

  const getApartData = async (url: string) => {
    try {
      setIsLoading(true);
      const result = await axios(url);
      return result.data;
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  const selectSearchApartHandler = (latitude: number, longitude: number) => {
    if (map) {
      const newLocation = new naver.maps.LatLng(latitude, longitude);
      map.setCenter(newLocation);
      map.setZoom(18);
    }
    setIsReset(true);
  };

  const selectSearchApartInfoHandler = async (
    aptId: string,
    latitude: number,
    longitude: number
  ) => {
    if (map) {
      try {
        const newLocation = new naver.maps.LatLng(latitude, longitude);
        map.setCenter(newLocation);
        map.setZoom(19);
      } catch (error) {
        console.error("지도 이동 중 오류:", error);
      }
    }

    const data = await getApartData(
      `${
        import.meta.env.VITE_SERVER_API_CALL
      }/${apartSeparate}/info?id=${aptId}`
    );

    const selectMarker = markers.find((marker) => {
      const markerLatitude = marker.getPosition().y;
      const markerLogitude = marker.getPosition().x;
      return markerLatitude === latitude && markerLogitude === longitude;
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
      setSelectMarkerId(aptId);
      selectMarker.setMap(null);
      selectMarker.setMap(useMarkerStore.getState().map);
    }
    setIsSlide(true);
    setIsDetailInfo(null);
    setMainInfo("SELECT");
    if (apartSeparate === "apt") setApartInfo(data.data);
    else setWeakApartInfo(data.data);
    setIsReset(true);
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
            selectSearchApartInfoHandler(
              listData.aptId,
              listData.latitude,
              listData.longitude
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
  );
}
