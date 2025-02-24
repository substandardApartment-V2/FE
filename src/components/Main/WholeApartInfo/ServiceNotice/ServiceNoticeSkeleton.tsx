import SkeletonElement from "@/components/Common/Skeleton/SkeletonElement";
import styles from "./ServiceNoticeSkeleton.module.scss";

export default function ServiceNoticeSkeleton() {
  return (
    <div className={styles.skeletonWrapper}>
      <SkeletonElement className={styles.title} type="title" />
      <SkeletonElement className={styles.description} type="description" />
    </div>
  );
}
