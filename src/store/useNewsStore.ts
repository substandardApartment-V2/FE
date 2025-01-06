import { create } from "zustand";

type TabType = "apartNews" | "weakNews";

type NewsStore = {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
};

export const useNewsStore = create<NewsStore>((set) => ({
  activeTab: "apartNews",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
