import { RefObject } from "react";

export type RecentSearchListProps = {
  searchRef: RefObject<HTMLInputElement>;
  setShowRecentSearch: (show: boolean) => void;
};
