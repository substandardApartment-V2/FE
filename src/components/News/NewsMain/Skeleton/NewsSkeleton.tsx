import SkeletonElement from "@/components/Common/Skeleton/SkeletonElement";
import styles from "./NewsSkeleton.module.scss";

const NewsSkeleton = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <SkeletonElement className={styles.thumbnail} />
      <div className={styles.skeletonText}>
        <SkeletonElement className={styles.title} />
        <SkeletonElement className={styles.description} />
        <SkeletonElement className={styles.date} />
      </div>
    </div>
  );
};

export default NewsSkeleton;
