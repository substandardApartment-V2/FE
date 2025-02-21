// 네이버지도 마커 불러오기 API 커스텀 훅

import { useEffect, useMemo, useRef } from "react";
import { useMarkerStore } from "@/store/useMarkerStore";
import { TGetMarkersBounds } from "@/types/TApi/TAPITypes";
import axios from "axios";

type TUseGetApartMarker = {
  url: string;
  query: TGetMarkersBounds;
};

export default function useGetApartMarker(paras: TUseGetApartMarker) {
  const prevQuery = useRef<TGetMarkersBounds | null>(null);
  const stableQuery = useMemo(
    () => ({ ...paras.query }),
    [paras.query.minLa, paras.query.minLo, paras.query.maxLa, paras.query.maxLo]
  );
  const setMarkderData = useMarkerStore((state) => state.setMarkderData);
  const setMarkers = useMarkerStore((state) => state.setMarkers);

  useEffect(() => {
    if (
      prevQuery.current &&
      JSON.stringify(prevQuery.current) === JSON.stringify(stableQuery)
    ) {
      return;
    }

    const fetchData = async () => {
      try {
        if (
          stableQuery.minLa &&
          stableQuery.minLo &&
          stableQuery.maxLa &&
          stableQuery.maxLo
        ) {
          const result = await axios(
            `${paras.url}minLa=${stableQuery.minLa}&minLo=${stableQuery.minLo}&maxLa=${stableQuery.maxLa}&maxLo=${stableQuery.maxLo}`
          );
          setMarkderData(result.data.data);
          prevQuery.current = stableQuery;
        }
      } catch (error) {
        console.log("ERROR : ", error);
        setMarkers([]);
      }
    };
    fetchData();
  }, [stableQuery, paras.url]);
}
