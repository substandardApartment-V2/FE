import styles from "./WholeApartInfo.module.scss";
import searchIcon from "@/assets/Main/searchICon.svg";
import DropDown from "@/components/Abstraction/DropDown/DropDown";

export default function WholeApartInfo() {
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
        <h2>아파트 근황</h2>
        <div className={styles.averageSellingPrice}>
          <div className={styles.listTitle}>
            <div className={styles.listMainTitle}>전국 아파트 평균 매매가</div>
            <div className={styles.listSubTitle}>12월 한달</div>
          </div>
          <div className={styles.listContent}>6억 8500만원</div>
        </div>
        <div className={styles.averageSellingPrice}>
          <div className={styles.listTitle}>
            <div className={styles.listMainTitle}>전국 아파트 평균 매매가</div>
            <div className={styles.listSubTitle}>12월 한달</div>
          </div>
          <div className={styles.listContent}>6억 8500만원</div>
        </div>
        <div className={styles.averageSellingPrice}>
          <div className={styles.listTitle}>
            <div className={styles.listMainTitle}>전국 아파트 평균 매매가</div>
            <div className={styles.listSubTitle}>12월 한달</div>
          </div>
          <div className={styles.listContent}>6억 8500만원</div>
        </div>
        <div className={styles.averageSellingPrice}>
          <div className={styles.listTitle}>
            <div className={styles.listMainTitle}>전국 아파트 평균 매매가</div>
            <div className={styles.listSubTitle}>12월 한달</div>
          </div>
          <div className={styles.listContent}>6억 8500만원</div>
        </div>
      </div>
      <div className={styles.serviceNotice}>
        <div className={styles.serviceNoticeTitle}>
          <h2>공지사항</h2>
          <DropDown
            select="최신순"
            fontSize="MEDIUM"
            outerBorder={true}
            dropDownContents={dropDownContents}
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
      </div>
    </section>
  );
}
