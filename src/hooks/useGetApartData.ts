import { useState, useEffect } from "react";
import axios from "axios";

export type TAPIResponse = {
  code: number;
  message: string;
  data: any;
};

export default function useGetApartData(url: string, query?: string) {
  const [data, setData] = useState<TAPIResponse | null>(null);

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
