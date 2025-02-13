import { useState, useEffect } from "react";
import DropDown from "@/components/Abstraction/DropDown/DropDown";
import styles from "./ServiceNotice.module.scss";
import ServiceNoticeList from "./ServiceNoticeList";
import { TServiceNoticeList } from "@/types/TMain/TServiceNoticeList";
import useGetPageData from "@/hooks/Api/useGetPageData";
import { useNoticeStore } from "@/store/useNoticeStore";
import ServiceNoticePagination from "./ServiceNoticePagination";

export default function ServiceNotice() {
  const serviceNoticeData = useNoticeStore((state) => state.serviceNoticeData);
  const currentPage = useNoticeStore((state) => state.currentPage);
  const setCurrentPage = useNoticeStore((state) => state.setCurrentPage);
  const setIsShow = useNoticeStore((state) => state.setIsShow);
  const isShow = useNoticeStore((state) => state.isShow);

  const dropDownContents = [
    {
      content: "최신순",
      contentFn: () => {
        setIsShow("최신순");
        setCurrentPage(0);
      },
    },
    {
      content: "과거순",
      contentFn: () => {
        setIsShow("과거순");
        setCurrentPage(0);
      },
    },
  ];

  useGetPageData("http://localhost:8080/apt/notice", {
    num: 3,
    pages: currentPage,
    sort: isShow === "최신순" ? "DESC" : "ASC",
  });

  return (
    <section className={styles.serviceNotice}>
      <div className={styles.serviceNoticeTitle}>
        <h2 className={styles.title}>공지사항</h2>
        <DropDown
          select={isShow}
          fontSize="SMALL"
          outerBorder={true}
          dropDownContents={dropDownContents}
          width="SMALL"
        />
      </div>
      <ul className={styles.noticeLists}>
        {serviceNoticeData &&
          serviceNoticeData.map((listData: TServiceNoticeList) => (
            <ServiceNoticeList
              key={listData.id}
              id={listData.id}
              title={listData.title}
              createAt={listData.createAt}
              content={listData.content}
            />
          ))}
      </ul>
      <ServiceNoticePagination />
    </section>
  );
}
