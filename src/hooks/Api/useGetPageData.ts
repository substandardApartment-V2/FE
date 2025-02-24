import { useState, useEffect } from "react";
import axios from "axios";
import { TAPIResponse, TPageAPIRequest } from "@/types/TApi/TAPITypes";
import { useNoticeStore } from "@/store/useNoticeStore";

export default function useGetPageData(url: string, sendData: TPageAPIRequest) {
  const [data, setData] = useState<TAPIResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const setPageCount = useNoticeStore((state) => state.setPageCount);
  const setServiceNoticeData = useNoticeStore(
    (state) => state.setServiceNoticeData
  );
  const currentpage = useNoticeStore((state) => state.currentPage);
  const isShow = useNoticeStore((state) => state.isShow);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url, {
          method: "POST",
          data: sendData,
        });
        setData(result.data);
        setPageCount(result.data.data.totalElements);
        setServiceNoticeData(result.data.data.notices);
      } catch (error) {
        console.log("Error : ", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };
    fetchData();
  }, [currentpage, isShow]);

  return { data, isLoading };
}
