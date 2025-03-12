// 최근 검색어 커스텀 훅

import { nanoid } from "nanoid";
import { useSearchRecordStore } from "@/store/useSearchRecordStore";

type TSearchRecord = {
  keyword: string;
  id: string;
};

export default function useSearchRecord() {
  const searchRecord = useSearchRecordStore((state) => state.searchRecord);
  const setSearchRecord = useSearchRecordStore(
    (state) => state.setSearchRecord
  );

  // 최근 검색어 추가 함수
  const addRecord = (newKeyword: string) => {
    const newSearchKeyword = {
      keyword: newKeyword,
      id: nanoid(),
    };

    setSearchRecord((prevState) => {
      const currentRecords = prevState.filter(
        (record: TSearchRecord) => record.keyword !== newKeyword
      );

      const updatedSearchRecord = [newSearchKeyword, ...currentRecords].slice(
        0,
        5
      );
      localStorage.setItem("search", JSON.stringify(updatedSearchRecord));
      return updatedSearchRecord;
    });
  };

  // 특정 검색어 제거 함수
  const removeRecord = (deleteKeywordId: string) => {
    const deleteSearchRecord = searchRecord.filter(
      (searchRecord) => searchRecord.id !== deleteKeywordId
    );
    setSearchRecord(deleteSearchRecord);
    localStorage.setItem("search", JSON.stringify(deleteSearchRecord));
  };

  // 최근 검색어 초기화 함수
  const clearRecord = () => {
    setSearchRecord([]);
    localStorage.removeItem("search");
  };

  return { addRecord, removeRecord, clearRecord };
}
