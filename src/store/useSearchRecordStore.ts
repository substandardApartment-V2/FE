import { TSearchRecord } from "@/hooks/Search/useSearhRecord";
import { create } from "zustand";

type TUseSearchRecordStore = {
  searchRecord: TSearchRecord[];
  setSearchRecord: (
    updater: TSearchRecord[] | ((prevState: TSearchRecord[]) => TSearchRecord[])
  ) => void;
};

export const useSearchRecordStore = create<TUseSearchRecordStore>((set) => ({
  searchRecord: JSON.parse(localStorage.getItem("search") ?? "[]"),
  setSearchRecord: (updater) =>
    set((state) => {
      const newSearchRecord =
        typeof updater === "function" ? updater(state.searchRecord) : updater;

      return { searchRecord: newSearchRecord };
    }),
}));
