import { useEffect, useMemo, useRef } from "react";
import axios from "axios";
import { useMarkerStore } from "@/store/useMarkerStore";
import { TBounds } from "@/types/TMap/TMapMarkerTypes";

export default function useGetApartMarker(url: string, query: TBounds) {
  const prevQuery = useRef<TBounds | null>(null);
  const stableQuery = useMemo(
    () => ({ ...query }),
    [query.minLa, query.minLo, query.maxLa, query.maxLo]
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
            `${url}minLa=${stableQuery.minLa}&minLo=${stableQuery.minLo}&maxLa=${stableQuery.maxLa}&maxLo=${stableQuery.maxLo}`
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
  }, [stableQuery, url]);
}
