import { TApartMarkerData, useMarkerStore } from "@/store/useMarkerStore";
import axios from "axios";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useLocationPath from "../Map/useLocationPath";
import { useSearchStore } from "@/store/useSearchStore";

export function useInfiniteScroll() {
  const [items, setItems] = useState<TApartMarkerData[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(1);
  const [location, setLocation] = useState(false);
  const { ref, inView } = useInView();
  const { apartSeparate } = useLocationPath();
  const keyword = useSearchStore((state) => state.keyword);
  const prevKeyword = useSearchStore.getState().prevKeyword;
  const setPrevKeyword = useSearchStore((state) => state.setPrevKeyword);
  const setIsReset = useSearchStore((state) => state.setIsReset);
  // const isReset = useSearchStore.getState().isReset;
  const pathName = apartSeparate === "apt" ? "apt" : "defect";

  const setMarkerData = useMarkerStore((state) => state.setMarkerData);
  const map = useMarkerStore((state) => state.map);

  const changeLocation = (pageNum: number, results: any) => {
    if (!location && pageNum === 1) setLocation(true);
    else return;
    if (map) {
      const newLocation = new naver.maps.LatLng(
        results[0].latitude,
        results[0].longitude
      );
      map.setCenter(newLocation);
      map.setZoom(17);
      setLocation(false);
    }
  };

  useEffect(() => {
    if (!keyword) return;
    if (prevKeyword !== keyword || !useSearchStore.getState().isReset) {
      setItems([]);
      setPage(1);
      setHasMore(true);
      setTotalCount(0);
      fetchData(1, keyword);
      setPrevKeyword(keyword);
      setIsReset(false);
    }
  }, [keyword]);

  useEffect(() => {
    if (
      inView &&
      hasMore &&
      !loading &&
      keyword &&
      !useSearchStore.getState().isReset
    ) {
      setPage((prevState) => prevState + 1);
      fetchData(page + 1, keyword);
    }
  }, [inView]);

  useEffect(() => {
    setMarkerData(items);
  }, [items]);

  const fetchData = async (pageNum: number, searchKeyword: string) => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API_CALL}/map/search/${pathName}`,
        {
          params: {
            keyword: searchKeyword,
            page: pageNum,
            num: 10,
          },
        }
      );

      if (!response.data || !response.data.data) {
        setHasMore(false);
        setLoading(false);
        return;
      }

      const { results, totalElements } = response.data.data;
      changeLocation(pageNum, results);
      setTotalCount(totalElements);
      setItems((prevItems) => {
        const newItems = pageNum === 1 ? results : [...prevItems, ...results];
        return newItems;
      });

      const nextHasMore =
        (pageNum === 1 ? results.length : items.length + results.length) <
        totalElements;
      setHasMore(nextHasMore);
    } catch (error) {
      console.error("검색 호출 오류:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    items,
    loading,
    hasMore,
    ref,
    totalCount,
  };
}
