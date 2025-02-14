import styles from "./NewsSkeleton.module.scss";
import SkeletonElement from "./SkeletonElement";

const NewsSkeleton = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.skeletonNewsItem}>
        <div className={styles.skeletonHeader}>
          <SkeletonElement type="platform" />
          <SkeletonElement type="date" />
        </div>
        <SkeletonElement type="title" />
        <div className={styles.skeletonContent}>
          <SkeletonElement type="thumbnail" />
          <SkeletonElement type="description" />
        </div>
      </div>
    </div>
  );
};

export default NewsSkeleton;
