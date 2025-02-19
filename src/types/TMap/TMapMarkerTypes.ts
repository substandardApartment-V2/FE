// 위도, 경도 타입

export type TBounds = {
  maxLa?: number;
  maxLo?: number;
  minLa?: number;
  minLo?: number;
};

// 네이버 지도 마커 클러스터링 타입

export type TMarkerClustering = {
  setMap: (map: naver.maps.Map | null) => void;
};
