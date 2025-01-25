import doubleLeft from "@/assets/news/doubleLeft.svg";
import doubleRight from "@/assets/news/doubleRight.svg";
import left from "@/assets/news/left.svg";
import right from "@/assets/news/right.svg";
import threeDot from "@/assets/news/threeDot.svg";
import { useNewsStore } from "@/store/useNewsStore";
import ReactPaginate from "react-paginate";
import newsPage from "./NewsPagination.module.scss";

const NewsPagination = () => {
  const { pages, setPages, totalElements } = useNewsStore();
  const pageCount = Math.ceil(totalElements / 8);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPages(selectedItem.selected + 1);
  };

  const goToPage = (pages: number) => {
    setPages(pages);
  };

  return (
    <div className={newsPage.pagination}>
      <button onClick={() => goToPage(1)} className="goToPage">
        <img src={doubleLeft} alt="맨처음으로" />
      </button>
      <ReactPaginate
        forcePage={pages - 1}
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
      <button onClick={() => goToPage(pageCount)} className="custom-button">
        <img src={doubleRight} alt="맨뒤로" />
      </button>
    </div>
  );
};

export default NewsPagination;
