import { create } from "zustand";

type TNoticeInfo = {
  title: string;
  content: string;
  createAt: string;
  id: number;
};

type TUseNoticeStore = {
  noticeInfo: TNoticeInfo | null;
  setNoticeInfo: (noticeInfo: TNoticeInfo) => void;
};

export const useNoticeStore = create<TUseNoticeStore>((set) => ({
  noticeInfo: null,
  setNoticeInfo: (noticeInfo: TNoticeInfo) =>
    set(() => ({ noticeInfo: noticeInfo })),
}));
