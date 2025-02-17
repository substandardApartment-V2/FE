import { useState, useEffect } from "react";
import axios from "axios";
import { TAPIResponse } from "@/types/TApi/TAPITypes";

export default function useGetApartData<T extends TAPIResponse>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchData();
  }, []);

  return data;
}
