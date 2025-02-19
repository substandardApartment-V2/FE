// 네이버지도 마커 클러스터 생성 커스텀 훅

import { useEffect, useRef } from "react";
import { useMarkerStore } from "@/store/useMarkerStore";
import { TMarkerClustering } from "@/types/TMap/TMapMarkerTypes";

export default function useCreateCluster(newMarkers: naver.maps.Marker[]) {
  const map = useMarkerStore((state) => state.map);
  const clusterRef = useRef<TMarkerClustering | null>(null);

  const clusterMarkerIcon = {
    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(./clusterIcon.svg);background-size:contain;"></div>`,
    size: new naver.maps.Size(40, 40),
    anchor: new naver.maps.Point(20, 20),
  };

  useEffect(() => {
    if (!map || newMarkers.length === 0) return;
    if (clusterRef.current) {
      clusterRef.current.setMap(null);
    }

    clusterRef.current = new window.MarkerClustering({
      minClusterSize: 2,
      maxZoom: 14,
      map: map,
      markers: newMarkers,
      disableClickZoom: true,
      gridSize: 120,
      icons: [clusterMarkerIcon],
      indexGenerator: [10, 100, 200, 500, 1000],
      stylingFunction: function (clusterMarker, count: number) {
        const element = clusterMarker.getElement();
        if (element) {
          clusterMarker
            .getElement()
            .querySelector("div:first-child").innerText = count;
        }
      },
    });

    return () => {
      if (clusterRef.current) {
        clusterRef.current.setMap(null);
      }
    };
  }, [newMarkers, map]);

  return clusterRef.current;
}
