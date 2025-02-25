// 최근 검색어 커스텀 훅

import { useState } from "react";
import { nanoid } from "nanoid";

type TSearchRecord = {
  keyword: string;
  id: string;
};

export default function useSearchRecord() {
  const [searchRecord, setSearchRecord] = useState<TSearchRecord[]>(
    JSON.parse(localStorage.getItem("search") ?? "[]")
  );

  // 최근 검색어 추가 함수
  const addRecord = (newKeyword: string) => {
    const newSearchKeyword = {
      keyword: newKeyword,
      id: nanoid(),
    };
    setSearchRecord((prevState) => {
      const updatedSearchRecord = [newSearchKeyword, ...prevState].slice(0, 5);
      localStorage.setItem("search", JSON.stringify(updatedSearchRecord));
      return updatedSearchRecord;
    });
  };

  // 특정 검색어 제거 함수
  const removeRecord = (deleteKeywordId: string) => {
    const deleteSearchRecord = searchRecord.filter(
      (searchRecord) => searchRecord.id != deleteKeywordId
    );
    setSearchRecord(deleteSearchRecord);
    localStorage.setItem("search", JSON.stringify(deleteKeywordId));
  };

  // 최근 검색어 초기화 함수
  const clearRecord = () => {
    setSearchRecord([]);
    localStorage.clear();
  };

  return { searchRecord, addRecord, removeRecord, clearRecord };
}
