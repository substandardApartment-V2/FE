export type TNewsSkeleton =
  | "platform"
  | "date"
  | "title"
  | "thumbnail"
  | "description";

export type TServiceSkeleton =
  | "noticeTitle"
  | "noticeDescription"
  | "noticeDate";

export type TSkeleton = TNewsSkeleton | TServiceSkeleton;
