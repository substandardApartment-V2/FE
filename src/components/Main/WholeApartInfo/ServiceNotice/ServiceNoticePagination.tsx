import styles from "./ServiceNoticePagination.module.scss";
import ReactPaginate from "react-paginate";
import left from "@/assets/news/left.svg";
import right from "@/assets/news/right.svg";
import threeDot from "@/assets/news/threeDot.svg";
import doubleLeft from "@/assets/news/doubleLeft.svg";
import doubleRight from "@/assets/news/doubleRight.svg";
import { useNoticeStore } from "@/store/useNoticeStore";

export default function ServiceNoticePagination() {
  const currentPage = useNoticeStore((state) => state.currentPage);
  const setCurrentPage = useNoticeStore((state) => state.setCurrentPage);
  const pageCount = useNoticeStore((state) => state.pageCount);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
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
  );
}
