//지도 경계 좌표 업데이트 함수
import { TBounds } from "@/store/useMarkerStore";

export const updateBounds = (
  map: naver.maps.Map,
  setBounds: (bounds: TBounds) => void
) => {
  const mapBounds = map!.getBounds() as naver.maps.LatLngBounds;
  const sw = mapBounds.getSW();
  const ne = mapBounds.getNE();
  setBounds({
    sw: { lat: sw.lat(), lng: sw.lng() },
    ne: { lat: ne.lat(), lng: ne.lng() },
  });
};
