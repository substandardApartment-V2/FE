import { TServiceNoticeList } from "@/types/TMain/TServiceNoticeList";
import { create } from "zustand";

type TNoticeInfo = {
  title: string;
  content: string;
  createAt: string;
  id: number;
};

type TUseNoticeStore = {
  serviceNoticeData: TServiceNoticeList[];
  noticeInfo: TNoticeInfo | null;
  pageCount: number;
  currentPage: number;
  setServiceNoticeData: (serviceNoticeData: TServiceNoticeList[]) => void;
  setNoticeInfo: (noticeInfo: TNoticeInfo) => void;
  setPageCount: (pageCOunt: number) => void;
  setCurrentPage: (currentPage: number) => void;
};

export const useNoticeStore = create<TUseNoticeStore>((set) => ({
  serviceNoticeData: [],
  noticeInfo: null,
  pageCount: 0,
  currentPage: 0,
  setServiceNoticeData: (serviceNoticeData: TServiceNoticeList[]) =>
    set(() => ({ serviceNoticeData: serviceNoticeData })),
  setNoticeInfo: (noticeInfo: TNoticeInfo) =>
    set(() => ({ noticeInfo: noticeInfo })),
  setPageCount: (pageCount: number) => set(() => ({ pageCount: pageCount })),
  setCurrentPage: (currentPage: number) =>
    set(() => ({ currentPage: currentPage })),
}));
