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

export default function ServiceNotice() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isShow, setIsShow] = useState("최신순");

  const pageCount = 1000;

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

  const dummyData = [
    {
      title: "사이트 긴급점검 시간 공지 2025.01.20~01.21",
      date: "2025.01.20",
      content:
        " 사이트 긴급점검 시간 공지드립니다. 1월 20일 13시~21일 7시까지 점검이있을 예정이오니 이점 유의 바랍니다. 사이트 긴급점검 시간공지드립니다. 1월 20일 13시~21일 7시까지 점검이 있을 예정이오니 이점유의 바랍니다. 사이트 긴급점검 시간 공지드립니다. 1월 20일 13시~21일7시까지 점검이 있을 예정이오니 이점 유의 바랍니다.",
    },
    {
      title: "사이트 긴급점검 시간 공지 2025.01.20~01.21",
      date: "2025.01.20",
      content:
        " 사이트 긴급점검 시간 공지드립니다. 1월 20일 13시~21일 7시까지 점검이있을 예정이오니 이점 유의 바랍니다. 사이트 긴급점검 시간공지드립니다. 1월 20일 13시~21일 7시까지 점검이 있을 예정이오니 이점유의 바랍니다. 사이트 긴급점검 시간 공지드립니다. 1월 20일 13시~21일7시까지 점검이 있을 예정이오니 이점 유의 바랍니다.",
    },
    {
      title: "사이트 긴급점검 시간 공지 2025.01.20~01.21",
      date: "2025.01.20",
      content:
        " 사이트 긴급점검 시간 공지드립니다. 1월 20일 13시~21일 7시까지 점검이있을 예정이오니 이점 유의 바랍니다. 사이트 긴급점검 시간공지드립니다. 1월 20일 13시~21일 7시까지 점검이 있을 예정이오니 이점유의 바랍니다. 사이트 긴급점검 시간 공지드립니다.",
    },
  ];

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
        {dummyData.map((listData: TServiceNoticeList) => (
          <ServiceNoticeList
            title={listData.title}
            date={listData.date}
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
          pageCount={pageCount}
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
          onClick={() => goToPage(pageCount - 1)}
          className="custom-button"
        >
          <img src={doubleRight} alt="맨뒤로" />
        </button>
      </div>
    </section>
  );
}
