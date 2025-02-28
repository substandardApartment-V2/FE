import { TServiceNoticeList } from "@/types/TMain/TServiceNoticeListTypes";
import { create } from "zustand";
import { TNoticeInfo } from "@/types/TMain/TNoriceInfoTypes";

type TIsShow = "최신순" | "과거순";

type TUseNoticeStore = {
  serviceNoticeData: TServiceNoticeList[];
  noticeInfo: TNoticeInfo | null;
  pageCount: number;
  currentPage: number;
  isShow: TIsShow;
  setServiceNoticeData: (serviceNoticeData: TServiceNoticeList[]) => void;
  setNoticeInfo: (noticeInfo: TNoticeInfo | null) => void;
  setPageCount: (pageCOunt: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setIsShow: (isShow: TIsShow) => void;
};

export const useNoticeStore = create<TUseNoticeStore>((set) => ({
  serviceNoticeData: [],
  noticeInfo: null,
  pageCount: 0,
  currentPage: 0,
  isShow: "최신순",
  setServiceNoticeData: (serviceNoticeData: TServiceNoticeList[]) =>
    set(() => ({ serviceNoticeData: serviceNoticeData })),
  setNoticeInfo: (noticeInfo: TNoticeInfo) =>
    set(() => ({ noticeInfo: noticeInfo })),
  setPageCount: (pageCount: number) => set(() => ({ pageCount: pageCount })),
  setCurrentPage: (currentPage: number) =>
    set(() => ({ currentPage: currentPage })),
  setIsShow: (isShow: TIsShow) => set(() => ({ isShow: isShow })),
}));
