import { useState } from "react";
import DropDown from "@/components/Abstraction/DropDown/DropDown";
import left from "@/assets/news/left.svg";
import right from "@/assets/news/right.svg";
import threeDot from "@/assets/news/threeDot.svg";
import doubleLeft from "@/assets/news/doubleLeft.svg";
import doubleRight from "@/assets/news/doubleRight.svg";
import ReactPaginate from "react-paginate";
import styles from "./ServiceNotice.module.scss";
import ServiceNoticeList from "./ServiceNoticeList";
import { TServiceNoticeList } from "@/types/TMain/TServiceNoticeList";
import { useEffect } from "react";
import axios from "axios";

export default function ServiceNotice() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isShow, setIsShow] = useState("최신순");
  const [serviceNoticeData, setServiceNoticeData] =
    useState<TServiceNoticeList[]>();
  const [pageCount, setPageCount] = useState(0);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

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

  useEffect(() => {
    const getNoticeAPIHandler = async () => {
      const response = await axios("http://localhost:8080/apt/notice", {
        method: "POST",
        data: {
          num: 3,
          pages: currentPage,
        },
      });
      setServiceNoticeData(response.data.data.notices);
      setPageCount(response.data.data.totalElements);
    };
    getNoticeAPIHandler();
  }, [currentPage]);

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
      <div className={styles.pagination}>
        <button onClick={() => goToPage(0)} className="goToPage">
          <img src={doubleLeft} alt="맨처음으로" />
        </button>
        <ReactPaginate
          forcePage={currentPage}
          pageCount={pageCount / 3}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName={styles.pageContainer}
          pageLinkClassName={styles.pageLink}
          activeLinkClassName={styles.pageActive}
          previousLabel={<img src={left} alt="이전" />}
          nextLabel={<img src={right} alt="다음" />}
          breakLabel={<img src={threeDot} alt="..." />}
        />
        <button
          onClick={() => goToPage(Math.ceil(pageCount / 3) - 1)}
          className="custom-button"
        >
          <img src={doubleRight} alt="맨뒤로" />
        </button>
      </div>
    </section>
  );
}
