import { create } from "zustand";

type TabType = "apartNews" | "weakNews";

type NewsStore = {
  activeTab: TabType;
  sort: "asc" | "desc";
  pages: number;
  totalElements: number;
  setActiveTab: (tab: TabType) => void;
  setSort: (sort: "asc" | "desc") => void;
  setPages: (page: number) => void;
  setTotalElements: (total: number) => void;
};

export const useNewsStore = create<NewsStore>((set) => ({
  activeTab: "apartNews",
  sort: "desc",
  pages: 1,
  totalElements: 0,
  setActiveTab: (tab) => set({ activeTab: tab, pages: 1, sort: "desc" }),
  setSort: (sort) => set({ sort }),
  setPages: (pages) => set({ pages }),
  setTotalElements: (total) => set({ totalElements: total }),
}));
