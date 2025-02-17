import { useRef } from "react";

export default function useSelectMarker() {
  const selectMarkerRef = useRef<naver.maps.Marker | null>(null);
  return { selectMarkerRef };
}
