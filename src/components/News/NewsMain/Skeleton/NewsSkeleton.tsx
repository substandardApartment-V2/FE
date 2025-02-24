import SkeletonElement from "@/components/Common/Skeleton/SkeletonElement";
import styles from "./NewsSkeleton.module.scss";

const NewsSkeleton = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <SkeletonElement type="thumbnail" className={styles.thumbnail} />
      <div className={styles.skeletonText}>
        <SkeletonElement type="title" className={styles.title} />
        <SkeletonElement type="description" className={styles.description} />
        <SkeletonElement type="date" className={styles.date} />
      </div>
    </div>
  );
};

export default NewsSkeleton;
