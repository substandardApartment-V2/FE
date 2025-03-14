// 스켈레톤 UI 컴포넌트

import styles from "./SkeletonElement.module.scss";

export default function SkeletonElement({ className }: { className?: string }) {
  return <div className={`${styles.skeleton} ${className}`}></div>;
}
