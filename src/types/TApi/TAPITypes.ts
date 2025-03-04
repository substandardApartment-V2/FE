import { TWeakMainNewsList } from "../TWeak/TWeakMainNewsListTypes";

// API Response 공용 타입
export type TAPIResponse<T = unknown> = {
  code: number;
  message: string;
  data: T;
};

// 부실아파트 API Response data 타입
export type TWeakMainNewsResponse = TAPIResponse & {
  data: {
    newsList: TWeakMainNewsList[];
  };
};

// 관리비 API Response data 객체배열타입
export type TMaintanceCharge = {
  month: string;
  fee: number;
};

// 관리비 API Response data 타입
export type TMaintanceChargeResponse = TAPIResponse & {
  data: {
    year: string;
    individualUsageSum: TMaintanceCharge[];
    totalCommonManagementFeeSum: TMaintanceCharge[];
    reserveFundMonthlyCharge: TMaintanceCharge[];
  };
};

// 페이지 API Request 타입
export type TPageAPIRequest = {
  num?: number;
  pages?: number;
  sort?: "DESC" | "ASC";
  keyword?: string;
};

// 위도, 경도 타입

export type TGetMarkersBounds = {
  maxLa?: number;
  maxLo?: number;
  minLa?: number;
  minLo?: number;
};
