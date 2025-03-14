// 네이버지도 마커 클러스터 생성 커스텀 훅

import { useMarkerStore } from "@/store/useMarkerStore";
import { TMarkerClustering } from "@/types/TMap/TMapMarkerTypes";
import { useEffect, useRef } from "react";

export default function useCreateCluster(newMarkers: naver.maps.Marker[]) {
  const map = useMarkerStore((state) => state.map);
  const clusterRef = useRef<TMarkerClustering | null>(null);

  const clusterMarkerIcon = (count: number) => {
    const size =
      count < 10
        ? 40
        : count < 30
        ? 50
        : count < 50
        ? 60
        : count < 100
        ? 70
        : 80;

    return {
      content: `<div style="cursor:pointer;width:${size}px;height:${size}px;line-height:${size}px;background-color:rgba(0, 35, 70, 0.6);border:1px solid rgba(0, 35, 80, 0.3);font-size:14px;color:white;text-align:center;font-weight:500;border-radius:50%">${count}</div>`,
      size: new naver.maps.Size(size, size),
      anchor: new naver.maps.Point(size / 2, size / 2),
    };
  };

  useEffect(() => {
    if (!map || newMarkers.length === 0) return;
    if (clusterRef.current) {
      clusterRef.current.setMap(null);
    }

    clusterRef.current = new window.MarkerClustering({
      minClusterSize: 2,
      maxZoom: 18,
      map: map,
      markers: newMarkers,
      disableClickZoom: true,
      gridSize: 400,
      icons: [],
      indexGenerator: [5, 100, 200, 500, 1000],
      stylingFunction: function (
        clusterMarker: naver.maps.Marker | null,
        count: number
      ) {
        if (clusterMarker) {
          const icon = clusterMarkerIcon(count);
          clusterMarker.setIcon(icon);
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
