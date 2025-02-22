import styles from "./WeakNewsSkeleton.module.scss";
import SkeletonElement from "@/components/Common/Skeleton/SkeletonElement";

export default function WeakNewsSkeleton() {
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
}
