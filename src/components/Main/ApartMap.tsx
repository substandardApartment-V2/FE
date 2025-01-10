import { useRef, useState, useEffect } from "react";
import MapLoading from "./MapLoading";
import styles from "./ApartMap.module.scss";

export default function ApartMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapLoading, setMapLoading] = useState<boolean>(true);

  const getSuccess = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      });
    }
  };

  const getError = () => {
    console.log("location error");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
  }, []);

  return (
    <section className={styles.apartMap}>
      {/* {mapLoading ? ( */}
      <>
        <div>
          {/* <img src={MapSearch} alt="search region icon" className="mr-3.5" /> */}
          {/* <span className="text-white font-[Pretendard-SemiBold] xxs:text-xs xs:text-base sm:text-lg md:text-xl">
              {mapLocation.roadAddress}
            </span> */}
        </div>
        <div id="map" ref={mapRef} className={styles.map} />
      </>
      {/* ) : ( */}
      {/* <MapLoading /> */}
      {/* )} */}
    </section>
  );
}
