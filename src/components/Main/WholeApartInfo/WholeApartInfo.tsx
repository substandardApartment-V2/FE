import { useState } from "react";
import styles from "./WholeApartInfo.module.scss";
import searchIcon from "@/assets/Main/searchICon.svg";
import DropDown from "@/components/Abstraction/DropDown/DropDown";
import left from "@/assets/news/left.svg";
import right from "@/assets/news/right.svg";
import threeDot from "@/assets/news/threeDot.svg";
import doubleLeft from "@/assets/news/doubleLeft.svg";
import doubleRight from "@/assets/news/doubleRight.svg";
import ReactPaginate from "react-paginate";

export default function WholeApartInfo() {
  const [currentPage, setCurrentPage] = useState(0);
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
      contentFn: () => {},
    },
    {
      content: "과거순",
      contentFn: () => {},
    },
  ];

  return (
    <section className={styles.homeRight}>
      <section className={styles.apartSearch}>
        <input
          className={styles.apartSearchInput}
          placeholder="궁금한 지역, 아파트를 검색해보세요."
        />
        <img src={searchIcon} alt="location apart search" />
      </section>
      <div className={styles.currentApartStatus}>
        <h2 className={styles.title}>아파트 근황</h2>
        <div className={styles.averageSellingPrice}>
          <div className={styles.listTitle}>
            <div className={styles.listMainTitle}>전국 아파트 평균 매매가</div>
            <div className={styles.listSubTitle}>12월 한달</div>
          </div>
          <div className={styles.listContent}>6억 8500만원</div>
        </div>
        <div className={styles.averageSellingPrice}>
          <div className={styles.listTitle}>
            <div className={styles.listMainTitle}>전국 아파트 수</div>
            <div className={styles.listSubTitle}>2022년 7월 기준</div>
          </div>
          <div className={styles.listContent}>11,661,851 곳</div>
        </div>
        <div className={styles.averageSellingPrice}>
          <div className={styles.listTitle}>
            <div className={styles.listMainTitle}>전국 건설 예정 아파트 </div>
            <div className={styles.listSubTitle}>2025년 2월 기준</div>
          </div>
          <div className={styles.listContent}>87 곳</div>
        </div>
        <div className={styles.averageSellingPrice}>
          <div className={styles.listTitle}>
            <div className={styles.listMainTitle}>전국 최저 관리비 아파트</div>
            <div className={styles.listSubTitle}>울산시 북구 화봉동</div>
          </div>
          <div className={styles.listContent}>
            <span>동아 청구 아파트</span>
            <button>
              <img />
            </button>
          </div>
        </div>
      </div>
      <section className={styles.serviceNotice}>
        <div className={styles.serviceNoticeTitle}>
          <h2 className={styles.title}>공지사항</h2>
          <DropDown
            select="최신순"
            fontSize="SMALL"
            outerBorder={true}
            dropDownContents={dropDownContents}
            width="SMALL"
          />
        </div>
        <ul className={styles.noticeLists}>
          <li>
            <div className={styles.noticeListTitle}>
              <strong>사이트 긴급점검 시간 공지 2025.01.20~01.21</strong>
              <span>2025.01.20</span>
            </div>
            <div className={styles.noticeListContent}>
              사이트 긴급점검 시간 공지드립니다. 1월 20일 13시~21일 7시까지
              점검이 있을 예정이오니 이점 유의 바랍니다. 사이트 긴급점검 시간
              공지드립니다. 1월 20일 13시~21일 7시까지 점검이 있을 예정이오니
              이점 유의 바랍니다. 사이트 긴급점검 시간 공지드립니다. 1월 20일
              13시~21일 7시까지 점검이 있을 예정이오니 이점 유의 바랍니다.
            </div>
          </li>
          <li>
            <div className={styles.noticeListTitle}>
              <strong>사이트 긴급점검 시간 공지 2025.01.20~01.21</strong>
              <span>2025.01.20</span>
            </div>
            <div className={styles.noticeListContent}>
              사이트 긴급점검 시간 공지드립니다. 1월 20일 13시~21일 7시까지
              점검이 있을 예정이오니 이점 유의 바랍니다.
            </div>
          </li>
          <li>
            <div className={styles.noticeListTitle}>
              <strong>사이트 긴급점검 시간 공지 2025.01.20~01.21</strong>
              <span>2025.01.20</span>
            </div>
            <div className={styles.noticeListContent}>
              사이트 긴급점검 시간 공지드립니다. 1월 20일 13시~21일 7시까지
              점검이 있을 예정이오니 이점 유의 바랍니다.
            </div>
          </li>
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
    </section>
  );
}
