import { TWeakMainNewsList } from "../TWeak/TWeakMainNewsListTypes";

export type TAPIResponse<T = unknown> = {
  code: number;
  message: string;
  data: T;
};

export type TWeakMainNewsResponse = TAPIResponse & {
  data: {
    newsList: TWeakMainNewsList[];
  };
};

export type TPageAPIRequest = {
  num: number;
  pages: number;
  sort: "DESC" | "ASC";
};
