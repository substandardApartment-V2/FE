// 스켈레톤 UI 컴포넌트

import { TNewsSkeleton } from "@/types/TNews/TNewsSkeletonTypes";
import styles from "./SkeletonElement.module.scss";

export default function SkeletonElement({
  type,
  className,
}: {
  type: TNewsSkeleton;
  className?: string;
}) {
  return (
    <div className={`${styles.skeleton} ${styles[type]} ${className}`}></div>
  );
}
