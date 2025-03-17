// 아파트 정보 API 콜 커스텀 훅

import { useState, useEffect } from "react";
import axios from "axios";
import { TAPIResponse } from "@/types/TApi/TAPITypes";

export default function useGetApartData<T extends TAPIResponse>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        console.log("Error : ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading };
}
