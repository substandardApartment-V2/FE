import { TApartMarkerData, useMarkerStore } from "@/store/useMarkerStore";
import axios from "axios";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useLocationPath from "../Map/useLocationPath";

export function useInfiniteScroll(keyword: string) {
  const [items, setItems] = useState<TApartMarkerData[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const { ref, inView } = useInView();
  const locationPath = useLocationPath();
  const pathName = locationPath === "apt" ? "apt" : "defect";

  const setMarkerData = useMarkerStore((state) => state.setMarkerData);

  useEffect(() => {
    if (!keyword) return;

    setItems([]);
    setPage(1);
    setHasMore(true);
    setTotalCount(0);

    fetchData(1, keyword);
  }, [keyword]);

  useEffect(() => {
    if (inView && hasMore && !loading && keyword) {
      fetchData(page, keyword); // 해당 구문에서 useInfiniteScroll API 콜 발생
    }
  }, [inView]);

  // setMarkerData를 따로 빼서 렌더링 순서를 맞춰주면 해결할 수 있다.
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
      setTotalCount(totalElements);
      setItems((prevItems) => {
        const newItems = pageNum === 1 ? results : [...prevItems, ...results];
        return newItems;
      });
      setPage((prevPage) => prevPage + 1);

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
