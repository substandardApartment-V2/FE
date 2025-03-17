import doubleLeft from "@/assets/News/doubleLeft.svg";
import doubleRight from "@/assets/News/doubleRight.svg";
import left from "@/assets/News/left.svg";
import right from "@/assets/News/right.svg";
import threeDot from "@/assets/News/threeDot.svg";
import { useNewsStore } from "@/store/useNewsStore";
import ReactPaginate from "react-paginate";
import newsPage from "./NewsPagination.module.scss";

const NewsPagination = () => {
  const { pages, setPages, totalElements } = useNewsStore();
  const pageCount = Math.ceil(totalElements / 8);
  const currentPage = Math.min(pages - 1, pageCount - 1);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPages(selectedItem.selected + 1);
  };

  const goToPage = (pages: number) => {
    setPages(pages);
  };

  return (
    <div className={newsPage.pagination}>
      <button onClick={() => goToPage(1)} className={newsPage.customButton}>
        <img src={doubleLeft} alt="맨처음으로" />
      </button>
      <ReactPaginate
        forcePage={currentPage}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={newsPage.pageContainer}
        pageLinkClassName={newsPage.pageLink}
        activeLinkClassName={newsPage.pageActive}
        previousLabel={<img src={left} alt="이전" />}
        nextLabel={<img src={right} alt="다음" />}
        breakLabel={<img src={threeDot} alt="..." />}
      />
      <button
        onClick={() => goToPage(pageCount)}
        className={newsPage.customButton}
      >
        <img src={doubleRight} alt="맨뒤로" />
      </button>
    </div>
  );
};

export default NewsPagination;
