import { useState } from "react";
import DropDown from "@/components/Abstraction/DropDown/DropDown";
import styles from "./ServiceNotice.module.scss";
import ServiceNoticeList from "./ServiceNoticeList";
import { TServiceNoticeList } from "@/types/TMain/TServiceNoticeList";
import useGetPageData from "@/hooks/useGetPageData";
import { useNoticeStore } from "@/store/useNoticeStore";
import ServiceNoticePagination from "./ServiceNoticePagination";

export default function ServiceNotice() {
  const [isShow, setIsShow] = useState("최신순");
  const serviceNoticeData = useNoticeStore((state) => state.serviceNoticeData);
  const currentPage = useNoticeStore((state) => state.currentPage);

  const dropDownContents = [
    {
      content: "최신순",
      contentFn: () => {
        setIsShow("최신순");
      },
    },
    {
      content: "과거순",
      contentFn: () => {
        setIsShow("과거순");
      },
    },
  ];

  useGetPageData("http://localhost:8080/apt/notice", {
    num: 3,
    pages: currentPage,
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
