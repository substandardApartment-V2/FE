import styles from "./WeakNewsSkeleton.module.scss";
import SkeletonElement from "@/components/Common/Skeleton/SkeletonElement";

export default function WeakNewsSkeleton() {
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
}
