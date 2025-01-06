import { useState } from "react";
import ReactPaginate from "react-paginate";
import doubleLeft from "../../../assets/news/doubleLeft.svg";
import doubleRight from "../../../assets/news/doubleRight.svg";
import left from "../../../assets/news/left.svg";
import right from "../../../assets/news/right.svg";
import threeDot from "../../../assets/news/threeDot.svg";
import newsPage from "./NewsPagination.module.scss";

const NewsPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = 1000;

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={newsPage.pagination}>
      <button onClick={() => goToPage(0)} className="goToPage">
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
      <button onClick={() => goToPage(pageCount - 1)} className="custom-button">
        <img src={doubleRight} alt="맨뒤로" />
      </button>
    </div>
  );
};

export default NewsPagination;
