import { TSkeleton } from "@/types/TNews/TNewsSkeletonTypes";
import styles from "./NewsSkeleton.module.scss";

const SkeletonElement = ({ type }: { type: TSkeleton }) => {
  return <div className={`${styles.skeleton} ${styles[type]}`}></div>;
};
export default SkeletonElement;
